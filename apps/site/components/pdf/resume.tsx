"use client";

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

// Font.register({
//   family: "JetBrains Mono",
//   fonts: [
//     {
//       fontStyle: "normal",
//       fontWeight: 500,
//       src: `${fontPath}/JetBrainsMono-Medium.ttf`,
//     },
//   ],
// });

// const hyphenationCallback = (word: string) => {
//   // don't hyphenate
//   return [word];
// };

// Font.registerHyphenationCallback(hyphenationCallback);

// Font.registerEmojiSource({
//   format: "png",
//   url: "https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.2/72x72/",
// });

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
    // backgroundColor: getNeutralColor(1, theme),
    // color: getNeutralColor(12, theme),
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
  sidebar: {
    alignSelf: "stretch",
    display: "flex",
    flexBasis: "30%",
    flexDirection: "column",
    flexGrow: 0,
    flexShrink: 1,
  },
  sidebarContent: { padding: spacers[4] },
  header: {
    padding: `${spacers[6]} ${spacers[4]}`,
    textAlign: "center",
  },
  headerTitle: { fontSize: fontSizes.xl, fontWeight: 700 },
  headerSubtitle: { fontSize: fontSizes.m, fontWeight: 700 },
  main: {
    alignSelf: "stretch",
    display: "flex",
    flexBasis: "70%",
    flexDirection: "column",
    flexGrow: 1,
    flexShrink: 0,
    padding: spacers[4],
  },
  section: { marginBottom: spacers[4] },
  sectionHeading: {
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    fontSize: fontSizes.m,
    fontWeight: 700,
    gap: spacers[1],
  },
  sectionHeadingNonHTML: {
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    fontSize: fontSizes.m,
    fontWeight: 700,
    gap: spacers[1],
    marginBottom: spacers[1],
  },
  sectionHeadingIcon: {
    height: fontSizes.m,
    marginRight: spacers[1],
    width: fontSizes.m,
  },
  sectionHeadingStars: {
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
  },
  sectionParagraph: {
    fontWeight: 400,
    margin: 0,
  },
  itemHeading: {
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    fontSize: fontSizes.s,
    fontWeight: 700,
    gap: spacers[1],
    marginBottom: spacers[1],
    marginTop: spacers[3],
  },
  itemSubheadingRow: {
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    gap: spacers[1],
    marginBottom: spacers[1],
  },
  itemSubheading: {
    fontSize: fontSizes.xxs,
    fontStyle: "italic",
  },
  professionalTitle: {
    borderRadius: "3px",
    fontWeight: 700,
    paddingHorizontal: spacers[1],
  },
  bold: { fontWeight: 700 },
  flexColumn: { display: "flex", flexDirection: "column" },
  flexRow: { alignItems: "center", display: "flex", flexDirection: "row" },
  flexRowAlignStart: {
    alignItems: "flex-start",
    display: "flex",
    flexDirection: "row",
  },
  a: {
    textDecoration: "underline",
  },
  list: {
    marginTop: spacers[2],
  },
  code: {
    // backgroundColor: getNeutralColor(4, theme),
    borderRadius: "3px",
    fontFamily: "JetBrains Mono",
    fontWeight: 500,
    paddingHorizontal: spacers[2],
  },
});

// const htmlProps: Omit<HtmlProps, "children"> = {
//   renderers: htmlRenderers,
//   style: { fontSize: fontSizes.xxs },
//   stylesheet: {
//     a: styles.a,
//     p: styles.sectionParagraph,
//     ul: styles.list,
//     ol: styles.list,
//     code: styles.code,
//   },
// };

// interface PDFProps {
//   privateInformation?: PrivateField[];
// }

interface ResumeProps {
  resume: ResumeType;
}

export const Resume: FC<ResumeProps> = (props: ResumeProps) => {
  // const year = new Date().getFullYear();

  const { resume } = props;

  /**
   * Metadata for the PDF document.
   */
  const documentData: DocumentProps = {
    title: `${resume.basics.name} - Resume`,
    author: resume.basics.name,
    subject: `${resume.basics.name} - Resume`,
    creator: resume.basics.url,
    producer: resume.basics.url,
  };

  /**
   * Metadata for the PDF page.
   */
  const pageData: PageProps = {
    size: "LETTER",
  };

  return (
    <Document {...documentData}>
      <Page {...pageData} style={styles.page}>
        <View>
          <Text>{resume.basics.name}</Text>
          <Text>{resume.basics.label}</Text>
        </View>
      </Page>
    </Document>
  );
};

export async function generateResume(resume: ResumeProps["resume"]) {
  const DocumentStream = await ReactPDF.renderToStream(
    <Resume resume={resume} />
  );
}
