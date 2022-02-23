import type { NextApiRequest, NextApiResponse } from "next";
import type { Races } from "../schemas/races";
import { data } from "./data";

const RacesAPI = (
  request: NextApiRequest,
  response: NextApiResponse<Races>
) => {
  response.status(200).json(data);
};

export default RacesAPI;
