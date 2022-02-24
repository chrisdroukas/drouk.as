import useSWR from "swr";
import { Resume } from "./api/schemas/resume";
import Container from "../components/container";
import Alert from "../components/alert";
import Layout from "../components/layout";
import Head from "next/head";

const fetcher = (url: RequestInfo) => fetch(url).then((res) => res.json());

export default function Index() {
  const { data, error } = useSWR<Resume>("/api/resume", fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  console.log(data.basics);
  return (
    <>
      <Layout>
        <Head>
          <title>Chris Droukas</title>
        </Head>
        <Container>
          <p>{data.basics?.name}</p>
          <p>{data.basics?.label}</p>
          <p>{data.basics?.image}</p>
          <p>{data.basics?.email}</p>
          <p>{data.basics?.phone}</p>
          <p>{data.basics?.url}</p>
          <p>{data.basics?.summary}</p>
        </Container>
      </Layout>

      {/* <p>{data.basics?.location}</p> */}
      {/* <p>{data.basics?.profiles}</p> */}
    </>
  );
}

