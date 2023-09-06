import { NextResponse } from "next/server";
import firebase from "../firebase";
import { ActivityStats } from "../schemas/activity";

export async function GET() {
  const entries = await firebase.collection("access_tokens").get();
  
  const refresh_token = entries.docs.map(doc => doc.data()).find(data => 'refresh_token' in data)?.refresh_token;

  if (!refresh_token) {
    throw new Error("refresh_token not found");
  }

  const responseToken = await fetch(
    `https://www.strava.com/api/v3/oauth/token?client_id=${process.env.STRAVA_CLIENT_ID}&client_secret=${process.env.STRAVA_CLIENT_SECRET}&grant_type=refresh_token&refresh_token=${refresh_token}`,
    {
      method: "POST",
    }
  );

  const { access_token: newToken, refresh_token: newRefreshToken } =
    await responseToken.json();

  const responseStatistics = await fetch(
    "https://www.strava.com/api/v3/athletes/76396568/stats",
    {
      headers: {
        Authorization: `Bearer ${newToken}`,
      },
    }
  );

  firebase
    .collection("access_tokens")
    .doc(process.env.STRAVA_TOKEN_DOCUMENT!)
    .update({
      access_token: newToken,
      refresh_token: newRefreshToken,
    });

  const statistics: ActivityStats = await responseStatistics.json();

  return NextResponse.json({ statistics });
}
