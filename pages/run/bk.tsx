import { useState } from "react";
import Head from "next/head";
import { useInView } from "react-intersection-observer";
import { MapkitProvider } from "react-mapkit";
import Header from "../../components/header";
import Container from "../../components/container";
import Layout from "../../components/layout";
import Intro from "../../components/run/intro";
import Card from "../../components/card";
import Grid from "../../components/grid";
import Button from "../../components/button";
import BrooklynHalfMap from "../../components/run/map";

const RunBK = () => {
  const [overviewRef, overviewViewable] = useInView({
    threshold: 0.9,
  });

  const [startingRef, startingViewable] = useInView({
    threshold: 0.9,
  });
  const [rangeval, setRangeval] = useState("");

  const headerAccessory = (
    <Button
      title="Support My Run"
      url="http://danafarber.jimmyfund.org/goto/droukas"
    />
  );

  return (
    <>
      <Layout>
        <Head>
          <title>Brooklyn Half Marathon</title>
          <meta
            name="description"
            content={`I'm running The Brooklyn Half Marathon and raising $2,000 in support of Dana-Farber Cancer Institute.`}
          />
        </Head>
        <Header transparent />
        <MapkitProvider
          tokenOrCallback={
            "eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjZCR0IyOFk2NkoifQ.eyJpYXQiOjE2MzkyNjAyODAuNjIxLCJpc3MiOiJMOVFVQVFYNDU4In0.4xnm0qTeziChuifWEv_h3dV8b_Bq4NFLZET4cxJNrBH-QYP_dT9t9u_Zb1cb9DrMTvo1OEa1XSSrWVv6baVzZA"
          }
        >
          <BrooklynHalfMap showMarker={rangeval} />
        </MapkitProvider>
        <Container>
          <Intro />
          <Grid columns={1} rowGap="3rem">
            <Card
              ref={startingRef}
              title="Why I'm Running for Dana-Farber Cancer Institute"
              description=""
            >
              <div>
                <p style={{ marginTop: 0 }}>
                  I&apos;m running The Brooklyn Half in honor of my mom,
                  Catherine Harrington–Droukas, and to support the
                  groundbreaking work Dana-Farber Cancer Institute is doing to
                  advance treatments for people battling cancer.
                </p>
                <p style={{ marginTop: 0 }}>
                  Dana-Farber focuses exclusively on cancer and related
                  diseases, and partners with two of the world&apos;s
                  highest-ranked hospitals to provide care for adult and
                  pediatric patients. Dana-Farber has engaged in over 70 years
                  of research discovery and innovation that have revolutionized
                  cancer diagnosis and treatment.
                </p>
                <a
                  href="https://www.dana-farber.org/"
                  style={{ marginBottom: 0 }}
                >
                  Learn More About Dana-Farber
                </a>
              </div>
            </Card>
            <Card ref={overviewRef} title="About The Brooklyn Half Marathon">
              <div>
                <p style={{ marginTop: 0 }}>
                  On April 24th, I&apos;ll join thousands of runners for a 13.1
                  mile race through Brooklyn.
                </p>
                <p style={{ marginTop: 0 }}>
                  The Brooklyn Half Marathon begins in Williamsburg, follows
                  along the East River past the Brooklyn bridges and ends in
                  Prospect Park.
                </p>
                <a
                  href="https://www.thebrooklynmarathon.com/"
                  style={{ marginBottom: 0 }}
                >
                  Learn More About The Brooklyn Half
                </a>
              </div>
            </Card>
            <Card
              ref={startingRef}
              title="Year In Review"
              description="Training statistics for a rolling 12-month period are provided by Strava."
            >
              <Grid columns={1}>
                <Grid columns={1} rowGap="0rem" columnGap="0rem">
                  <h2 style={{ margin: 0 }}>77</h2>
                  <p style={{ margin: 0 }}>Total Runs</p>
                </Grid>
                <Grid columns={1} rowGap="0rem" columnGap="0rem">
                  <h2 style={{ margin: 0 }}>522mi</h2>
                  <p style={{ margin: 0 }}>Total Distance</p>
                </Grid>
                <Grid columns={1} rowGap="0rem" columnGap="0rem">
                  <h2 style={{ margin: 0 }}>2:01:40</h2>
                  <p style={{ margin: 0 }}>Best Half-Marathon</p>
                </Grid>
                <a
                  href="http://strava.com/athletes/chrisdroukas/"
                  style={{ marginBottom: 0 }}
                >
                  Follow Me on Strava
                </a>
              </Grid>
            </Card>
          </Grid>
        </Container>
      </Layout>
    </>
  );
};

export default RunBK;
