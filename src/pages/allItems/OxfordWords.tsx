import { useRef, useState, useEffect } from "react";
import HTMLFlipBook from "react-pageflip";
import { Document, Page, pdfjs } from "react-pdf";
import "@react-pdf-viewer/core/lib/styles/index.css";

// Set up the real worker
pdfjs.GlobalWorkerOptions.workerSrc = pdfWorker;
import pdfWorker from "pdfjs-dist/build/pdf.worker.min?url"; // ✅ worker import for Vite/CRA

import data from "../../../data.json";

const OxfordWords = () => {
  const flipBook = useRef<any>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [jumpPage, setJumpPage] = useState<number | "">("");
  const [numPages, setNumPages] = useState(0);
  const [isPortrait, setIsPortrait] = useState(false); // 🔥 auto mode
  const [scale, setScale] = useState(1.0); // 🆕 Initial zoom scale
  const [dimensions, setDimensions] = useState({ width: 600, height: 800 });
    const [gotoPage, setGotoPage] = useState<string>("");

  const totalPages = 24; // Update when you add more pages

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

  const FlipBook = HTMLFlipBook as any;

  // 🔥 Detect screen size & adjust orientation
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setDimensions({ width: 300, height: 400 });
        // Mobile & small tablets → Portrait
        setIsPortrait(true);
      } else {
        // Desktop → Landscape
        setIsPortrait(false);
        setDimensions({ width: 600, height: 800 });
      }
    };

    handleResize(); // Run once on mount
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
    setNumPages(numPages);
  };


  // 🔥 Detect screen size & adjust orientation
  // useEffect(() => {
  //   const updateSize = () => {
  //     if (window.innerWidth < 768) {
  //       setDimensions({ width: 300, height: 400 });
  //     } else {
  //       setDimensions({ width: 600, height: 800 });
  //     }
  //   };
  //   updateSize();
  //   window.addEventListener("resize", updateSize);
  //   return () => window.removeEventListener("resize", updateSize);
  // }, []);

  


  // Helper: play sound when flipping manually
  const playFlipSound = () => {
    if (flipSound.current) {
      flipSound.current.currentTime = 0;
      flipSound.current
        .play()
        .catch((err) => console.warn("Playback prevented:", err));
    }
  };

  return (
    <div className="overflow-x-hidden">
      {/* pdf book */}
    <div className="h-full flex flex-col items-center gap-1 mt-1 px-5 overflow-hidden">
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
            file="/public/oxford_300+200.pdf"
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
                  <h1 className="text-3xl font-bold">The Oxford 5000 Word list</h1>
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
          <div className="text-center py-4 overflow-hidden ">
            <a
              href="/public/oxford_300+200.pdf"
              download
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Download PDF
            </a>
          </div>
          <div className="text-center overflow-hidden">
            <p className="">
              Note: পিডিএফ ফাইল ডাউনলড করলে মোবাইলের File manager/ My File-এ জমা
              হয়। গেলারিতে পাওয়া যাবে না।
            </p>
          </div>
        </div>
      </div>
    </div>





      
      {/* Written book */}
      <div className="flex flex-col items-center py-10 px-5 md:px-10 overflow-hidden">
        <FlipBook
          width={isPortrait ? 400 : 500} // smaller width for portrait
          height={isPortrait ? 600 : 300} // taller height for portrait
          className="shadow-2xl rounded"
          style={{
            margin: "0 auto",
            backgroundImage: "url('/bookBg.jpg')",
            backgroundSize: "cover",
          }}
          showCover={true}
          size="stretch"
          minWidth={300}
          maxWidth={1200}
          minHeight={300}
          maxHeight={900}
          drawShadow={true}
          flippingTime={800}
          usePortrait={isPortrait} // 🔥 auto toggle
          autoSize={true}
          clickEventForward={true}
          startZIndex={0}
          maxShadowOpacity={0.5}
          mobileScrollSupport={true}
          useMouseEvents={true}
          swipeDistance={30}
          showPageCorners={true}
          disableFlipByClick={false}
          onFlip={onFlip}
          ref={flipBook}
        >
          {/* Cover Page */}
          <div
            data-density="hard"
            className="font-bold relative book"
            // style={{
            //   backgroundImage: `url(${frontCover})`,
            //   backgroundSize: "cover",
            //   backgroundPosition: "center",
            //   backgroundRepeat: "no-repeat",
            //   width: "100%",
            //   height: "100%",
            // }}
          >
            <div className="absolute top-1/4 md:top-[30%] left-[15%] md:left-1/3">
              <div className="">
                <h1 className="text-9xl text-center pb-3">📖</h1>
                <h2 className="text-green-500 text-3xl text-center">
                  Oxford 3000 Essential Words
                </h2>
                <p className="text-center text-white">
                  Click/touch to read the book
                </p>
              </div>
            </div>
            <img src="/bookCover3.jpg" className="w-full h-full" alt="" />
          </div>

          {/* page1 */}
          <div className="p-3 text-black md:p-10 bg-[#EFE5D6] book-shadow">
            <h2 className="text-xl font-bold mb-2">Page 1</h2>

            <div className="">
              <p className="text-xs md:text-base">
                ভূমিকা <br />
                বিশ্বের সর্ববৃহৎ এবং সবচেয়ে গ্রহণযোগ্য ইংরেজি অভিধান হলো Oxford
                English Dictionary এটি তৈরি করেছে-Oxford University Press Oxford
                <br />
                University Press ইংরেজি ভাষার শব্দভাণ্ডার থেকে ৩ হাজার শব্দ
                বাছাই করেছে। তাদের ভাষ্যমতে এই শব্দগুলো প্রচলিত ইংরেজি ভাষার ৯০
                শতাংশ! ফলে কেউ মাত্র এই ৩ হাজার শব্দ শিখতে পারলে- পত্রিকা,
                ম্যাগাজিন, জার্নাল, টিভি চ্যানেল, আর্টিক্যাল, বইপত্র ও কথোপকথনের
                ৯০ শতাংশ শিখে ফেলতে পারবে! ইংরেজি পড়া, বুঝা, লেখা ও বলায় ফুয়েতি
                আনতে Oxford University Press এই তিন হাজার শব্দের তালিকা করেছে।
                <br />
                এই বইতে থাকছে-
                <br />
                *সেই ৩ হাজার শব্দ
                <br />
                *IPA অনুসারে প্রতিটি শব্দের উচ্চারণ
                <br />
                *সেই শব্দের উপরে ক্লিক করলে যেতে পারবেন original ডিকশনারিতে
                <br />
                *শব্দার্থ
                <br />
                *প্রতিটি শব্দ দিয়ে একটি করে বাক্য
                <br />
                *বাক্যের অর্থ
                <br />
                *বাক্যে ব্যবহৃত Appropriate Preposition
                <br />
                *জটিল শব্দ-বাক্যের ব্যাখ্যা
                <br />
                ধন্যবাদান্তে,
              </p>
            </div>
          </div>

          {/* page2 */}
          <div className="p-3 text-black md:p-24 bg-[#EFE5D6] book-shadow">
            <h2 className="text-xl font-bold mb-2">Page 2</h2>
            <ul className="flex flex-wrap gap-2 items-center justify-center ">
              {" "}
              {/* 👈 parent flex */}
              {data.slice(0, 14).map((item: any, index: number) => (
                <a
                  // target="_blank"
                  // rel="noopener noreferrer"
                  className="border border-gray-50 p-1 text-blue-600 hover:underline"
                  href={item.link}
                >
                  <li key={index} className="">
                    {`${index + 1}. ${item.word}`}-
                  </li>
                  <li>{item.BengaliMeaning}</li>
                </a>
              ))}
            </ul>
          </div>

          {/* page3 */}
          <div className="p-3 text-black md:p-10 bg-[#EFE5D6] book-shadow">
            <h2 className="text-xl font-bold mb-2">Page 3</h2>
            <ul className="lg:hidden flex flex-wrap gap-2 items-center justify-center ">
              {/* 👈 parent flex */}
              {data.slice(15, 28).map((item: any, index: number) => (
                <a
                  // target="_blank"
                  // rel="noopener noreferrer"
                  className="border border-gray-50 p-1 text-blue-600 hover:underline"
                  href={item.link}
                >
                  <li key={index} className="">
                    {`${index + 1}. ${item.word}`}-
                  </li>
                  <li>{item.BengaliMeaning}</li>
                </a>
              ))}
            </ul>
            <ul className="hidden lg:flex flex-wrap gap-2 items-center justify-center ">
              {/* 👈 parent flex */}
              {data.slice(15, 28).map((item: any, index: number) => (
                <a
                  // target="_blank"
                  // rel="noopener noreferrer"
                  className="border border-gray-50 p-3 text-blue-600 hover:underline"
                  href={item.link}
                >
                  <li key={index} className="">
                    {`${index + 1}. ${item.word}`}-
                  </li>
                  <li>উচ্চারণ: {item.banglaPronunciation}</li>
                  <li>Meaning: {item.BengaliMeaning}</li>
                </a>
              ))}
            </ul>
          </div>

          {/* Back Cover */}
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600  text-white text-xl font-bold">
            <div className="w-full h-full text-7xl flex flex-col items-center justify-center">
              <p className="">🔚 </p>
              <p className="">The End</p>
            </div>
          </div>
        </FlipBook>

        {/* Button section */}
        <div className="flex flex-col items-center">
          {/* Navigation Controls */}
          <div className="flex items-center gap-4 mt-6">
            <button
              className="px-3 py-1 bg-gray-700 text-white rounded"
              onClick={() => {
                playFlipSound();
                flipBook.current.pageFlip().turnToPrevPage();
              }}
            >
              ◀ Prev
            </button>

            <span className="text-lg font-semibold">
              Page {currentPage + 1} / {totalPages}
            </span>

            <button
              className="px-3 py-1 bg-gray-700 text-white rounded"
              onClick={() => {
                playFlipSound();
                flipBook.current.pageFlip().turnToNextPage();
              }}
            >
              Next ▶
            </button>
          </div>
          {/* Jump to Page */}
          <div className="mt-4 flex items-center gap-2">
            <input
              type="number"
              min="1"
              max={totalPages}
              value={jumpPage}
              onChange={(e) => {
                playFlipSound();
                const value = e.target.value;
                setJumpPage(value === "" ? "" : parseInt(value, 10));
              }}
              className="border px-1 py-1 rounded w-20 text-center"
              placeholder="Go to..."
            />
            <button
              className="px-3 py-1 bg-indigo-600 text-white rounded disabled:opacity-50"
              disabled={
                jumpPage === "" || jumpPage < 1 || jumpPage > totalPages
              }
              onClick={() => {
                if (
                  typeof jumpPage === "number" &&
                  jumpPage >= 1 &&
                  jumpPage <= totalPages
                ) {
                  flipBook.current.pageFlip().flip(jumpPage - 1);
                }
              }}
            >
              Go
            </button>
          </div>
          {/* Numbered Page Buttons */}
          <div className="flex flex-wrap justify-center gap-2 mt-4">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                className={`px-3 py-1 rounded border ${
                  currentPage === i
                    ? "bg-indigo-600 text-white"
                    : "bg-gray-200 hover:bg-gray-300"
                }`}
                onClick={() => {
                  playFlipSound();
                  flipBook.current.pageFlip().flip(i);
                }}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* scrolling effect */}
      <div className="py-10 overflow-hidden">
        <div className="container mx-auto p-2">
          <div className="overflow-x-auto">
            <table className="md:w-full min-w-[300px] table-auto  border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="py-1 px-1 border-b">Words</th>
                  <th className="py-1 px-1 border-b">Phonemic transcription</th>
                  <th className="py-1 px-1 border-b">banglaPronunciation</th>
                  <th className="py-1 px-1 border-b">Meaning</th>
                  <th className="py-1 px-1 border-b">Examples</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item: any, index: any) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="py-1 px-1 border-b hover:bg-blue-500">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={item.link}
                        className=""
                      >
                        {index + 1}. <br /> ${item.word}
                      </a>
                    </td>
                    <td className="py-1 px-1 border-b">{item.phonetic}</td>
                    <td className="py-1 px-1 border-b">
                      {item.banglaPronunciation}
                    </td>
                    <td className="py-1 px-1 border-b">
                      {item.BengaliMeaning}
                    </td>
                    <td className="py-1 px-1 border-b">{item.examples}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OxfordWords;
