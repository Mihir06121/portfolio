import React, { useEffect, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { FiDownload, FiExternalLink } from "react-icons/fi";
import pdf from "../assets/Mihir_Panchal.pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function Resume() {
  const [pageWidth, setPageWidth] = useState(760);

  useEffect(() => {
    const updateWidth = () => {
      setPageWidth(Math.min(window.innerWidth - 32, 760));
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);

    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  return (
    <div className="resume-shell">
      <div className="resume-actions">
        <a className="button button-primary" href={pdf} download="Mihir_Panchal.pdf">
          <FiDownload aria-hidden="true" />
          Download CV
        </a>
        <a className="button button-secondary" href={pdf} target="_blank" rel="noreferrer">
          <FiExternalLink aria-hidden="true" />
          Open PDF
        </a>
      </div>

      <div className="resume-preview">
        <Document
          file={pdf}
          loading={<div className="resume-state">Loading resume...</div>}
          error={<div className="resume-state">Resume preview could not load. Use the PDF actions above.</div>}
        >
          <Page
            pageNumber={1}
            width={pageWidth}
            renderTextLayer={false}
            renderAnnotationLayer={false}
          />
        </Document>
      </div>
    </div>
  );
}

export default Resume;
