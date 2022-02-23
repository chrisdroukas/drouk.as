import type { NextApiRequest, NextApiResponse } from "next";
import { APIError } from "../schemas/common";
import type { Race } from "../schemas/races";
import { data } from "./data";

const RaceAPI = (
  request: NextApiRequest,
  response: NextApiResponse<Race | APIError>
) => {
  const race = data.filter((race: Race) => race.id === request.query.id);
  if (race.length > 0) {
    response.status(200).json(race[0]);
  } else {
    response
      .status(404)
      .json({ message: `Race with id: ${request.query.id} not found.` });
  }
};

export default RaceAPI;
