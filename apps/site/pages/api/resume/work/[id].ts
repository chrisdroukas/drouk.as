import type { NextApiRequest, NextApiResponse } from "next";
import { APIError } from "../../schemas/common";
import type { Work } from "../../schemas/resume";
import { data } from "../data";

const WorkItemAPI = (
  request: NextApiRequest,
  response: NextApiResponse<Work | APIError>
) => {
  const work = data.work?.filter((work: Work) => work.id === request.query.id);
  if (work && work.length > 0) {
    response.status(200).json(work[0]);
  } else {
    response
      .status(404)
      .json({ message: `Work with id: ${request.query.id} not found.` });
  }
};

export default WorkItemAPI;
