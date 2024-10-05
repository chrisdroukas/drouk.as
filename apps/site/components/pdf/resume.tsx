import React, { FC } from "react";
import ReactPDF, {
  PageProps,
  DocumentProps,
  Document,
  Font,
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";

import { ResumeType } from "#/app/api/schemas/resume";

const domain = process.env.NEXT_PUBLIC_VERCEL_URL
  ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
  : "http://localhost:8000";
const fontPath = `${domain}/fonts`;

Font.register({
  family: "Inter",
  fonts: [
    {
      fontStyle: "normal",
      fontWeight: "normal",
      src: `${fontPath}/Inter-Regular.ttf`,
    },
    {
      fontStyle: "normal",
      fontWeight: "bold",
      src: `${fontPath}/Inter-Bold.ttf`,
    },
  ],
});

Font.register({
  family: "Cal Sans",
  fonts: [
    {
      fontStyle: "normal",
      fontWeight: "semibold",
      src: `${fontPath}/CalSans-SemiBold.ttf`,
    },
  ],
});

const fontSizes = {
  xl: 20,
  l: 18,
  m: 14,
  s: 13,
  xs: 12,
  xxs: 10,
};

const spacers = {
  1: "6px",
  2: "8px",
  3: "10px",
  4: "12px",
  5: "14px",
  6: "16px",
};

const styles = StyleSheet.create({
  page: {
    alignItems: "stretch",
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    fontFamily: "Cal Sans",
    color: "black",
    paddingVertical: 40,
    paddingHorizontal: 40,
    fontSize: fontSizes.xxs,
    justifyContent: "flex-start",
    lineHeight: 1.3,
  },
  headerContainer: {
    textAlign: "center",
    marginBottom: 20,
  },
});

interface ResumeProps {
  resume: ResumeType;
}

export const Resume: FC<ResumeProps> = (props: ResumeProps) => {
  const date = new Date().toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  const { resume } = props;

  /**
   * Metadata for the PDF document.
   */
  const documentData: DocumentProps = {
    title: `${resume.basics.name} - Resume`,
    author: resume.basics.name,
    subject: `${resume.basics.name} - Resume`,
    keywords: "",
    creator: resume.basics.url,
    producer: resume.basics.url,
    language: "en-US",
    creationDate: new Date(),
    modificationDate: new Date(),
    pdfVersion: "1.3",
    pageMode: "useNone",
    pageLayout: "singlePage",
  };

  /**
   * Metadata for the PDF page.
   */
  const pageData: PageProps = {
    wrap: true,
    size: "LETTER",
    orientation: "portrait",
    dpi: 72,
  };

  return (
    <Document {...documentData}>
      <Page {...pageData} style={styles.page}>
        {/* Header Section */}
        <View style={styles.headerContainer}></View>

        {/* <View>
          <Text>{resume.basics.name}</Text>
          <Text>{resume.basics.label}</Text>
          <Text>{resume.basics.url}</Text>
          <Text>Generated {date}. For the latest updates, see LinkedIn.</Text>
        </View> */}
      </Page>
    </Document>
  );
};
