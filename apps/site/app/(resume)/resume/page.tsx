"use client";

import { useEffect, useState } from "react";

import { PDFViewer } from "@react-pdf/renderer";

import { cn } from "@/library/utilities";

import { Resume } from "#/components/pdf";
import { data } from "#/app/api/resume/data";

export default function Page() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  /*
   * Define classes for PDFViewer.
   */
  const pdfViewerClasses = cn("min-h-screen min-w-full");

  return (
    loaded && (
      <PDFViewer className={pdfViewerClasses}>
        <Resume resume={data} />
      </PDFViewer>
    )
  );
}
