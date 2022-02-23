import type { NextApiRequest, NextApiResponse } from "next";
import type { Work } from "../../schemas/resume";
import { data } from "../data";

const WorkAPI = (
  request: NextApiRequest,
  response: NextApiResponse<Work[]>
) => {
  if (data.work) {
    response.status(200).json(data.work);
  }
};

export default WorkAPI;
