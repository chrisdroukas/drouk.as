import Document, { DocumentContext } from "next/document";
import { ServerStyles, createStylesServer } from "@mantine/next";

import { emotionCache } from "../constants/emotion-cache";

const stylesServer = createStylesServer(emotionCache);

export default class _Document extends Document {
  static async getInitialProps(context: DocumentContext) {
    const initialProps = await Document.getInitialProps(context);
    return {
      ...initialProps,
      styles: [
        initialProps.styles,
        <ServerStyles
          html={initialProps.html}
          server={stylesServer}
          key="styles"
        />,
      ],
    };
  }
}
