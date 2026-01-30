import "@react-pdf-viewer/core/lib/styles/index.css";
// import { useRef, useState, useEffect } from "react";
// import HTMLFlipBook from "react-pageflip";
// import { Document, Page, pdfjs } from "react-pdf";
import { pdfjs } from "react-pdf";

// Set up the real worker
pdfjs.GlobalWorkerOptions.workerSrc = pdfWorker;
import "@react-pdf-viewer/core/lib/styles/index.css";

import pdfWorker from "pdfjs-dist/build/pdf.worker.min?url";
import { Viewer, Worker } from "@react-pdf-viewer/core";

const StoryVocabulary = () => {
  // Function to scroll up
  const scrollUp = () => {
    window.scrollBy({ top: -window.innerHeight / 2, behavior: "smooth" });
  };

  // Function to scroll down
  const scrollDown = () => {
    window.scrollBy({ top: window.innerHeight / 2, behavior: "smooth" });
  };

  return (
    <div className="w-full h-full mx-auto relative">
      <div className="">
        <div>
          <Worker
            workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}
          >
            <Viewer fileUrl="/গল্পেগল্পেVocabulary.pdf" />
          </Worker>
        </div>
      </div>

      {/* Scroll Buttons */}
      <div className="fixed right-0 top-1/2 transform -translate-y-1/2 flex flex-col gap-4 z-50">
        <button
          onClick={scrollUp}
          className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg transition-colors focus:outline-none"
          aria-label="Scroll Up"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 15l7-7 7 7"
            />
          </svg>
        </button>
        <button
          onClick={scrollDown}
          className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg transition-colors focus:outline-none"
          aria-label="Scroll Down"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default StoryVocabulary;
