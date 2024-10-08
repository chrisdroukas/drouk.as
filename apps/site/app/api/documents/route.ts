import { NextResponse } from "next/server";

import ReactPDF from "@react-pdf/renderer";

import { data } from "#/app/api/resume/data";
import { Resume } from "#/components/pdf/resume";

// const ResumeDocument: NextApiHandler = async (_, res) => {
//   const DocumentStream = await ReactPDF.renderToStream(
//     <Resume resume={data} />
//   );
//   res.setHeader("Content-Type", "application/pdf");
//   DocumentStream.pipe(res);
//   DocumentStream.on("end", () => {});
// };

// export default ResumeDocument;

export async function GET() {
  return NextResponse.json(data);
}
