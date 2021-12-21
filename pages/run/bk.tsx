import { useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import Container from "../../components/container";
import Layout from "../../components/layout";
import Head from "next/head";
import { CMS_NAME } from "../../lib/constants";

import { GeoCoordinates } from "@here/harp-geoutils";
import { GeoJsonDataProvider } from "@here/harp-geojson-datasource";
import { MapView, MapViewEventNames } from "@here/harp-mapview";
import {
  APIFormat,
  AuthenticationMethod,
  OmvDataSource,
} from "@here/harp-omv-datasource";
import { apiKey, theme } from "../run/config";

const initialCoordinates = new GeoCoordinates(40.686581, -73.963711);
const initialZoomLevel = 15;

const dynamicGeoJsonSource = dynamic(() => import("/routes/bk.json"), {
  ssr: false,
});

const geoJsonDataProvider = new GeoJsonDataProvider(
  "route",
  new URL("/routes/bk.json", window.location.href)
);

const geoJsonDataSource = new OmvDataSource({
  name: "route",
  dataProvider: geoJsonDataProvider,
});

/**
 * Async fetch `OmvTileDecoderService` inside a worker via ES Module CDN.
 *
 * @note Is this what the future looks like?
 */
const tileDecoderServiceWorker = `
    async function main() {
        const { OmvTileDecoderService } = (
            await import('https://dev.jspm.io/@here/harp-omv-datasource/index-worker')
        ).default

        OmvTileDecoderService.start()
    }
    main()
`;

/**
 * Creates an object URL from a blob of the tile decoder service worker fetched from the ES Module CDN.
 */
const decoderURL = () => {
  const tileDecoderServiceWorkerBlob = new Blob([tileDecoderServiceWorker], {
    type: "application/javascript",
  });
  return URL.createObjectURL(tileDecoderServiceWorkerBlob);
};

/**
 * An Optimized Map for Visualization (OMV) Datasource.
 * @see https://github.com/heremaps/harp.gl/tree/master/%40here/harp-omv-datasource
 */
const dataSource = new OmvDataSource({
  baseUrl: "https://vector.hereapi.com/v2/vectortiles/base/mc",
  authenticationCode: apiKey,
  authenticationMethod: {
    method: AuthenticationMethod.QueryString,
    name: "apikey",
  },
  apiFormat: APIFormat.XYZOMV,
  styleSetName: "tilezen",
});

const geoJsonStyleSet = [
  {
    when: '$geometryType == "point"',
    technique: "circles",
    attr: {
      color: "#01a39c",
      size: 48,
      renderOrder: 100,
    },
  },
  {
    when: '$geometryType == "line"',
    technique: "solid-line",
    attr: {
      color: "#f8bc02",
      lineWidth: 10,
      metricUnit: "Pixel",
      renderOrder: 100,
    },
  },
];

const RunBK = () => {
  const canvasRef: any = useRef(null);
  const mapRef: any = useRef(null);

  useEffect(() => {
    /**
     * A MapView constructor.
     *
     * We're using an ES Module CDN to provide tile decoding instead of doing it in this repository itself.
     */
    const map = (mapRef.current = new MapView({
      theme,
      canvas: canvasRef.current,
      target: initialCoordinates,
      zoomLevel: initialZoomLevel,
      decoderUrl: decoderURL(),
    }));
    console.log(decoderURL);

    map.addDataSource(dataSource);

    map.addDataSource(geoJsonDataSource);
    // .then(() => geoJsonDataSource.setStyleSet(geoJsonStyleSet));

    map.lookAt({
      target: new GeoCoordinates(40.686581, -73.963711),
      tilt: 70,
      zoomLevel: 14.5,
    });
    let heading = 0;
    map.addEventListener(MapViewEventNames.Render, () => {
      map.lookAt({ heading });
      heading += 0.01;
    });
    map.beginAnimation();

    const onWindowResize = () =>
      map.resize(window.innerWidth, window.innerHeight);
    window.addEventListener("resize", onWindowResize);

    return () => window.removeEventListener("resize", onWindowResize);
  }, []);

  return (
    <>
      <Layout>
        <Head>
          <title>Next.js Blog Example with {CMS_NAME}</title>
        </Head>
        <canvas ref={canvasRef} />
        <div id="copyright-notice"></div>
        <Container>hello</Container>
      </Layout>
    </>
  );
};

export default RunBK;
