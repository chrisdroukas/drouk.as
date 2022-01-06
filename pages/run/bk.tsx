import { useState } from "react";
import Container from "../../components/container";
import Layout from "../../components/layout";
import Head from "next/head";
import styled from "styled-components";
import Intro from "../../components/run/intro";
import Card from "../../components/card";
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
        <input
          style={{ width: "100%" }}
          type="range"
          className="custom-range"
          min="0"
          max="100"
          onChange={(event) => setRangeval(event.target.value)}
        />
        {/* {console.log(`Range: ${rangeval.toString()}`)} */}

        <MapkitProvider
          tokenOrCallback={
            "eyJhbGciOiJFUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IjZCR0IyOFk2NkoifQ.eyJpYXQiOjE2MzkyNjAyODAuNjIxLCJpc3MiOiJMOVFVQVFYNDU4In0.4xnm0qTeziChuifWEv_h3dV8b_Bq4NFLZET4cxJNrBH-QYP_dT9t9u_Zb1cb9DrMTvo1OEa1XSSrWVv6baVzZA"
          }
        >
          <BrooklynHalfMap showMarker={rangeval} />
        </MapkitProvider>
        <Container>
          <Intro />
          <Card ref={overviewRef} title="About">
            This is in view: {overviewViewable.toString()}
          </Card>
          <Card ref={startingRef} title="About">
            This is in view: {startingViewable.toString()}
          </Card>
        </Container>
      </Layout>
    </>
  );
};

export default RunBK;
