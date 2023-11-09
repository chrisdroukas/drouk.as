import { kv } from "@vercel/kv";
import { NextResponse } from "next/server";
import { z } from "zod";
import { ActivityStats } from "#/app/api/schemas/activity";

/**
 * Token validation schema.
 */
const TokensSchema = z.object({
  refresh_token: z.string(),
  access_token: z.string(),
});

/**
 * Asynchronous GET function to handle request.
 */
export async function GET() {
  /**
   * Retrieve refresh_token from Vercel KV.
   */
  const refresh_token = await kv.hget("strava", "refresh_token");

  /**
   * Fetch the new tokens from the Strava API.
   */
  const responseToken = await fetch(
    `https://www.strava.com/api/v3/oauth/token?client_id=${process.env.STRAVA_CLIENT_ID}&client_secret=${process.env.STRAVA_CLIENT_SECRET}&grant_type=refresh_token&refresh_token=${refresh_token}`,
    {
      method: "POST",
    }
  );

  try {
    /**
     * Parse the JSON response to get the tokens.
     */
    const tokens = await responseToken.json();

    /**
     * Validate and cast the JSON to the
     * expected schema.
     */
    const { access_token: accessToken, refresh_token: refreshToken } =
      TokensSchema.parse(tokens);

    /**
     * Save the new tokens to Vercel KV.
     */
    await kv.hset("strava", {
      refresh_token: refreshToken,
      access_token: accessToken,
    });

    /**
     * Fetch the athlete statistics
     * from the Strava API.
     */
    const responseStatistics = await fetch(
      "https://www.strava.com/api/v3/athletes/76396568/stats",
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      }
    );

    /**
     * Convert the raw API response to JSON.
     */
    const statisticsJSON = await responseStatistics.json();

    /**
     * Validate and cast the JSON to
     * the ActivityStats type.
     */
    const statistics = ActivityStats.parse(statisticsJSON);

    /**
     * Return the statistics as JSON.
     */
    return NextResponse.json({ statistics });
  } catch (error) {
    /**
     * Error handling for validation failures and other exceptions.
     */
    if (error instanceof Error) {
      throw new Error(`Data validation failed: ${error.message}`);
    } else {
      throw new Error("An unknown error occurred.");
    }
  }
}
