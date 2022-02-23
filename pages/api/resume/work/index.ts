import type { NextApiRequest, NextApiResponse } from "next";
import type { Resume } from "../../schemas/resume";
import { data } from "../data";

const WorkAPI = (
  request: NextApiRequest,
  response: NextApiResponse<Resume>
) => {
  response.status(200).json(data.work);
};

export default WorkAPI;
