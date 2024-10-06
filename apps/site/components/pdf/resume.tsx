import React, { FC } from "react";
import {
  PageProps,
  DocumentProps,
  Document,
  Font,
  Page,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";

import { ResumeType, WorkType } from "#/app/api/schemas/resume";

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

const colors = {
  primary: "hsl(222.2 84% 4.9%)",
  secondary: "hsl(215.3 25% 26.7%)",
  tertiary: "hsl(215.4 16.3% 46.9%)",
};

const fontSizes = {
  xs: 6,
  s: 10,
  m: 12,
  l: 14,
};

const spacers = {
  1: "4px",
  2: "8px",
  3: "12px",
  4: "16px",
  5: "20px",
  6: "24px",
};

const styles = StyleSheet.create({
  page: {
    alignItems: "stretch",
    display: "flex",
    flexDirection: "column",
    gap: spacers[2],
    fontFamily: "Inter",
    fontWeight: "normal",
    color: colors.primary,
    paddingVertical: 40,
    paddingHorizontal: 40,
    fontSize: fontSizes.m,
    justifyContent: "flex-start",
  },

  headerContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: spacers[2],
    borderBottom: `0.25px solid ${colors.tertiary}`,
  },
  titleContainer: {
    display: "flex",
    flexDirection: "column",
  },
  contactContainer: {
    display: "flex",
    flexDirection: "column",
  },

  header: {
    fontFamily: "Cal Sans",
    fontSize: fontSizes.l,
  },
  subHeader: {
    fontSize: fontSizes.s,
    color: colors.secondary,
  },
  contact: {
    fontSize: fontSizes.s,
  },

  section: {
    // backgroundColor: "yellow",
  },
  sectionTitle: {
    fontFamily: "Cal Sans",
    fontWeight: "semibold",
    fontSize: fontSizes.l,
  },
  sectionItem: {
    fontFamily: "Inter",
    fontSize: fontSizes.s,
  },

  disclaimer: {
    position: "absolute",
    fontSize: fontSizes.xs,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "grey",
  },
});

interface ResumeProps {
  resume: ResumeType;
}

export const Resume: FC<ResumeProps> = (props: ResumeProps) => {
  /**
   * MARK: Setup
   */
  const { resume } = props;

  const formatDate = (date: Date): string =>
    date.toLocaleDateString("en-US", { month: "short", year: "numeric" });

  const date = new Date().toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  const dateRange = (startDate: Date, endDate?: Date) => {
    return `${formatDate(startDate)} – ${endDate ? formatDate(endDate) : "Present"}`;
  };

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

  const work = resume.work?.slice().reverse();

  /**
   * MARK: Interface
   */
  return (
    <Document {...documentData}>
      <Page {...pageData} style={styles.page}>
        {/* Header Section */}
        <View style={styles.headerContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.header}>{resume.basics.name}</Text>
            <Text style={styles.subHeader}>{resume.basics.label}</Text>
          </View>
          <View style={styles.contactContainer}>
            <Text style={styles.contact}>{resume.basics.url}</Text>
          </View>
        </View>

        {/* Professional Experience Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Professional Experience</Text>
          {work?.map((job, index) => (
            <View key={index} style={styles.sectionItem}>
              <Text>
                {job.position} at {job.name}
                {dateRange(job.startDate, job.endDate)}
                {job.startDate?.toLocaleDateString("en-US", {
                  month: "short",
                  year: "numeric",
                })}{" "}
                -{" "}
                {job.endDate
                  ? job.endDate.toLocaleDateString("en-US", {
                      month: "short",
                      year: "numeric",
                    })
                  : "Present"}
              </Text>
              <Text>{job.summary}</Text>
              {job.highlights && job.highlights.length > 0 && (
                <View>
                  {job.highlights.map((highlight, highlightIndex) => (
                    <Text key={highlightIndex} style={styles.sectionItem}>
                      - {highlight}
                    </Text>
                  ))}
                </View>
              )}
            </View>
          ))}
        </View>

        {/* Education Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Education</Text>
          {resume.education?.map((edu, index) => (
            <View key={index} style={styles.sectionItem}>
              <Text>
                {edu.name} - {edu.studyType} in {edu.area} (
                {edu.startDate?.toLocaleDateString("en-US", {
                  month: "short",
                  year: "numeric",
                })}{" "}
                -{" "}
                {edu.endDate?.toLocaleDateString("en-US", {
                  month: "short",
                  year: "numeric",
                })}
                )
              </Text>
            </View>
          ))}
        </View>

        {/* Footer Section */}

        <Text style={styles.disclaimer} fixed>
          Generated {date}. For the latest updates, see LinkedIn.
        </Text>
      </Page>
    </Document>
  );
};
