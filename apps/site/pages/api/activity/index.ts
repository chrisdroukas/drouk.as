import type { NextApiResponse } from "next";
import firebase from "../firebase";
import { ActivityStats } from "../schemas/activity";

export async function getStatistics() {
  const entries = await firebase.collection("access_tokens").get();

  let [{ refresh_token }] = entries.docs.map((entry) => entry.data());

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

  return statistics;
}

const StatisticsAPI = async ({}, response: NextApiResponse<ActivityStats>) => {
  response.status(200).json(await await getStatistics());
};

export default StatisticsAPI;
