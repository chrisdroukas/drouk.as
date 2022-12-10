import type { NextApiResponse } from "next";
import type { Work } from "../../schemas/resume";
import { data } from "../data";

const WorkAPI = ({}, response: NextApiResponse<Work[]>) => {
  if (data.work) {
    response.status(200).json(data.work);
  }
};

export default WorkAPI;
