import type { NextApiRequest, NextApiResponse } from "next";
import type { Resume } from "../schemas/resume";
import { data } from "./data";

const ResumeAPI = (req: NextApiRequest, res: NextApiResponse<Resume>) => {
  res.status(200).json(data);
};

export default ResumeAPI;
