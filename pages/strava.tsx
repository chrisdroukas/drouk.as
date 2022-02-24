import useSWR from "swr";
import { getStatistics } from "./api/activity";
import Container from "../components/container";
import Layout from "../components/layout";
import Head from "next/head";
import { Activity } from "./api/schemas/activity";

const fetcher = (url: RequestInfo) => fetch(url).then((res) => res.json());

export async function getStaticProps() {
  return { props: await getStatistics(), revalidate: 1 };
}

export default function Strava(statistics: any) {
  const { data, error } = useSWR<Activity>("/api/activity", fetcher, {
    fallbackData: statistics,
    refreshInterval: 30000,
  });

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  console.log(data);
  return (
    <>
      <Layout>
        <Head>
          <title>Chris Droukas</title>
        </Head>
        <Container>
          <p>{JSON.stringify(data)}</p>
        </Container>
      </Layout>
    </>
  );
}
