import type { NextApiResponse } from "next";
import type { Resume } from "../schemas/resume";
import { data } from "./data";

const ResumeAPI = ({}, response: NextApiResponse<Resume>) => {
  response.status(200).json(data);
};

export default ResumeAPI;
