import { useRef, useState, useEffect } from "react";
import HTMLFlipBook from "react-pageflip";
import { Document, Page, pdfjs } from "react-pdf";

// Set up the real worker
pdfjs.GlobalWorkerOptions.workerSrc = pdfWorker;
import "@react-pdf-viewer/core/lib/styles/index.css";

import pdfWorker from "pdfjs-dist/build/pdf.worker.min?url"; // ✅ worker import for Vite/CRA

const FirstPaperModel = () => {
  const flipBook = useRef<any>(null);
  const [numPages, setNumPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [dimensions, setDimensions] = useState({ width: 600, height: 800 });
  const [gotoPage, setGotoPage] = useState<string>("");
  const [scale, setScale] = useState(1.0); // 🆕 Initial zoom scale

  useEffect(() => {
    const updateSize = () => {
      if (window.innerWidth < 768) {
        setDimensions({ width: 300, height: 400 });
      } else {
        setDimensions({ width: 600, height: 800 });
      }
    };
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
  };

  const FlipBook = HTMLFlipBook as any;

  // Go to page handler
  const handleGotoPage = () => {
    const pageNum = parseInt(gotoPage, 10);
    const totalPages = numPages + 2; // Cover + PDF pages + Back

    if (!isNaN(pageNum) && pageNum >= 0 && pageNum < totalPages) {
      flipBook.current?.pageFlip().flip(pageNum);
    }
    setGotoPage("");
  };

  // 🆕 Zoom handlers
  const zoomIn = () => {
    console.log("clicked");
    setScale((prevScale) => Math.min(prevScale + 0.2, 2.5)); // 📈 Max zoom 2.5
  };

  const zoomOut = () => {
    setScale((prevScale) => Math.max(prevScale - 0.2, 0.5)); // 📉 Min zoom 0.5
  };

     // 🔊 Add audio ref for page flip sound
  const flipSound = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    flipSound.current = new Audio("/sounds/mixkit-page-turn-single-1104.wav");
    flipSound.current.volume = 1.0; // optional: adjust volume
  }, []);

  // Play sound on flip
 const onFlip = (e: any) => {
    setCurrentPage(e.data);
    if (flipSound.current) {
      flipSound.current.currentTime = 0;
      flipSound.current.play();
    }
};

  return (
    <div className="h-full flex flex-col items-center justify-center gap-1 mt-1">
      {/* 🆕 Zoom Buttons */}
      <div className="flex  gap-4 ">
        <button
          onClick={zoomIn}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          ➕
        </button>

        <button
          onClick={zoomOut}
          className="px-4 py-2 bg-red-500 text-white rounded"
        >
          ➖
        </button>
      </div>

      <div className="flex flex-col items-center py-1">
        <div className="w-[100%], h-[100%] ">
          <Document
            file="/English1stPaper.pdf"
            onLoadSuccess={onDocumentLoadSuccess}
          >
            <FlipBook
              width={dimensions.width}
              height={dimensions.height}
              showCover={true}
              mobileScrollSupport={true}
              ref={flipBook}
              onFlip={onFlip}
              className="shadow-2xl rounded-lg"
            >
              {/* --- Cover Page --- */}
              <div className="w-full h-full bg-[#EFE5D6] text-green-500 flex flex-col items-center justify-center text-center">
                <div className="w-full h-full bg-[#EFE5D6] text-green-500 flex flex-col items-center justify-center gap-10">
                  <h1 className="text-9xl lg:text-[200px]">📖</h1>
                  <h1 className="text-3xl font-bold">First Paper Model book</h1>
                  <p className="mt-2">Welcome! Swipe or click to begin.</p>
                </div>
              </div>

              {/* --- PDF Pages --- */}
              {Array.from(new Array(numPages), (_, i) => (
                <div
                  key={i}
                  className="bg-white flex items-center justify-center"
                  style={{
                    width: "100%",
                    height: "100%",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      transform: `scale(${scale})`,
                      transformOrigin: "center center",
                    }}
                  >
                    <Page
                      pageNumber={i + 1}
                      // scale={scale}
                      width={dimensions.width - 40}
                      renderTextLayer={false}
                      renderAnnotationLayer={false}
                      renderMode="canvas"
                      loading={<div className="text-gray-500">Loading...</div>}
                    />
                  </div>
                </div>
              ))}

              {/* --- Back Page --- */}
              <div className="bg-gray-800 text-white flex flex-col items-center justify-center text-center px-2">
                <h2 className="text-2xl font-semibold">🎉 The End</h2>
                <p className="mt-2">Thanks for reading!</p>
              </div>
            </FlipBook>
          </Document>
        </div>

        {/* Controls */}
        <div className="flex flex-col items-center gap-4 mt-6">
          {/* Prev / Next */}
          <div className="flex gap-4">
            <button
              onClick={() => flipBook.current?.pageFlip().flipPrev()}
              className="px-4 py-2 bg-gray-700 text-white rounded"
            >
              ◀ Prev
            </button>
            <span className="text-lg font-semibold">
              Page {currentPage} / {numPages + 1}
            </span>
            <button
              onClick={() => flipBook.current?.pageFlip().flipNext()}
              className="px-4 py-2 bg-gray-700 text-white rounded"
            >
              Next ▶
            </button>
          </div>

          {/* Number Buttons */}
          <div className="flex flex-wrap gap-2 justify-center mt-2">
            {Array.from(new Array(numPages + 2), (_, i) => (
              <button
                key={i}
                onClick={() => flipBook.current?.pageFlip().flip(i)}
                className={`px-3 py-1 rounded ${
                  currentPage === i
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 hover:bg-gray-300"
                }`}
              >
                {i === 0 ? "Cover" : i === numPages + 1 ? "Back" : i}
              </button>
            ))}
          </div>

          {/* Go To Page Input */}
          <div className="flex gap-2 items-center mt-2">
            <input
              type="number"
              min="0"
              max={numPages + 1}
              value={gotoPage}
              onChange={(e) => setGotoPage(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleGotoPage()}
              placeholder={`0 - ${numPages + 1}`}
              className="w-28 px-2 py-1 border rounded text-center"
            />
            <button
              onClick={handleGotoPage}
              className="px-4 py-1 bg-blue-600 text-white rounded"
            >
              Go
            </button>
          </div>

          {/* DOwnload button */}
          <div className="text-center py-4 ">
            <a
              href="/English1stPaper.pdf"
              download
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Download PDF
            </a>
          </div>
          <div className="text-center">
            <p className="">
              Note: পিডিএফ ফাইল ডাউনলড করলে মোবাইলের File manager/ My File-এ জমা
              হয়। গেলারিতে পাওয়া যাবে না।
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstPaperModel;
