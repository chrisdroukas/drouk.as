import { NextResponse } from "next/server";
import { z } from "zod";
import firebase from "../firebase";
import { ActivityStats } from "../schemas/activity";

const AccessTokensSchema = z.object({
  refresh_token: z.string(),
  access_token: z.string(),
});

/**
 * Asynchronous GET function to handle request.
 */
export async function GET() {
  /**
   * Fetch all documents from "access_tokens" collection.
   */
  const querySnapshot = await firebase.collection("access_tokens").get();

  /**
   * Check if QuerySnapshot contains any documents.
   */
  if (querySnapshot.empty) {
    throw new Error("There are no documents in this QuerySnapshot.");
  }

  try {
    /**
     * Validate the first document data against Zod schema.
     */
    const parsedData = AccessTokensSchema.parse(querySnapshot.docs[0]?.data());
    const refresh_token = parsedData.refresh_token;

    /**
     * Fetch a new token using the refresh token.
     */
    const responseToken = await fetch(
      `https://www.strava.com/api/v3/oauth/token?client_id=${process.env.STRAVA_CLIENT_ID}&client_secret=${process.env.STRAVA_CLIENT_SECRET}&grant_type=refresh_token&refresh_token=${refresh_token}`,
      {
        method: "POST",
      }
    );

    /**
     * Parse the new token data.
     */
    const { access_token: newToken, refresh_token: newRefreshToken } =
      await responseToken.json();

    /**
     * Fetch the statistics for the athlete.
     */
    const responseStatistics = await fetch(
      "https://www.strava.com/api/v3/athletes/76396568/stats",
      {
        headers: {
          Authorization: `Bearer ${newToken}`,
        },
      }
    );

    /**
     * Update the access_tokens collection with the new tokens.
     */
    await firebase
      .collection("access_tokens")
      .doc(process.env.STRAVA_TOKEN_DOCUMENT!)
      .update({
        access_token: newToken,
        refresh_token: newRefreshToken,
      });

    /**
     * Convert the raw API response to JSON.
     */
    const statisticsJSON = await responseStatistics.json();

    /**
     * Validate and cast the JSON to the ActivityStats type using Zod.
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
