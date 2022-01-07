import { useState } from "react";
import Container from "../../components/container";
import Layout from "../../components/layout";
import Head from "next/head";
import styled from "styled-components";
import Intro from "../../components/run/intro";
import Card from "../../components/card";
import Grid from "../../components/grid";
import { useInView } from "react-intersection-observer";
import { MapkitProvider } from "react-mapkit";
import BrooklynHalfMap from "../../components/run/map";

const RunBK = () => {
  const [overviewRef, overviewViewable] = useInView({
    threshold: 0.9,
  });

  const [startingRef, startingViewable] = useInView({
    threshold: 0.9,
  });
  const [rangeval, setRangeval] = useState("");

  return (
    <>
      <Layout>
        <Head>
          <title>Brooklyn Half Marathon</title>
        </Head>
        {/* <input
          style={{ width: "100%" }}
          type="range"
          className="custom-range"
          min="0"
          max="100"
          onChange={(event) => setRangeval(event.target.value)}
        /> */}
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
              title="Why Dana-Farber Cancer Institute"
              description="I'm running The Brooklyn Half in honor of my mom, Catherine
              Harrington-Droukas, and to support the groundbreaking work Dana-Farber Cancer
              Institute is doing to advance treatments for people battling
              cancer."
            >
              Dana-Farber focuses exclusively on cancer and related diseases,
              and partners with two of the world&apos;s highest-ranked hospitals
              to provide care for adult and pediatric patients.
            </Card>
            <Card
              ref={overviewRef}
              title="About The Brooklyn Half Marathon"
              description="The Brooklyn Half Marathon begins in Williamsburg, follows along the East River past the Brooklyn bridges and ends in Prospect Park."
            >
              On April 24th, I&apos;ll join thousands of runners for a 13.1 mile
              race through Brooklyn. On April 24th, I&apos;ll join thousands of
              runners for a 13.1 mile race through Brooklyn.
            </Card>
            <Card
              ref={startingRef}
              title="Training"
              description="Training statistics for a rolling 12-month period are provided by Strava."
            >
              This is in view: {startingViewable.toString()}
            </Card>
          </Grid>
        </Container>
      </Layout>
    </>
  );
};

export default RunBK;
