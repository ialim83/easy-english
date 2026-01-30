// import { Link } from "react-router-dom";
import "pdfjs-dist/build/pdf.worker.entry";
import { useRef, useState, useEffect } from "react";
import HTMLFlipBook from "react-pageflip";
// import frontCover from "../../../public/bookCover.jpg";

function Article() {
  const flipBook = useRef<any>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [jumpPage, setJumpPage] = useState<number | "">("");
  const [isPortrait, setIsPortrait] = useState(false); // 🔥 auto mode

  const totalPages = 12; // Update when you add more pages

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
        // Mobile & small tablets → Portrait
        setIsPortrait(true);
      } else {
        // Desktop → Landscape
        setIsPortrait(false);
      }
    };

    handleResize(); // Run once on mount
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Helper: play sound when flipping manually
  const playFlipSound = () => {
    if (flipSound.current) {
      flipSound.current.currentTime = 0;
      flipSound.current
        .play()
        .catch((err) => console.warn("Playback prevented:", err));
    }
  };

  const contents = [
    { title: "Use of The", pages: "3-6" },
    { title: "Use of Cross", pages: "7-9" },
    { title: "Use of A/An", pages: "10 - 11" },
  ];

  const goToPage = (page: number) => {
    if (flipBook.current) {
      flipBook.current.pageFlip().flip(page + 1);
    }
  };
  const goToContents = () => {
    if (flipBook.current) {
      flipBook.current.pageFlip().flip(1); // 👈 contents page (Page 2 visually)
    }
  };

  return (
    <div className="h-full lg:w-1/2 mx-auto">
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
            <div className="absolute top-1/4 left-[18%] sm:left-[27%] sm:top-[30%]  md:top-[12%] md:left-[20%] lg:top-[10%] lg:left-[25%] xl:left-[30%] 2xl:left-[35%] 2xl:top-[25%] px-5">
              <h1 className="text-center text-9xl">📖</h1>
              <h1 className="text-pink-700 text-xl md:text-3xl text-center py-3">
                Article
              </h1>
              <p className="text-center text-blue-600">
                Click/touch to read the book
              </p>
            </div>

            <img src="/bookCover3.jpg" className="w-full h-full" alt="" />
          </div>

          {/* page 2 */}
          <div className="p-3 text-black md:p-5 bg-[#EFE5D6] book-shadow">
            <h2 className="text-base lg:text-xl font-bold mb-1">Page 2</h2>
            <div className="w-full flex flex-col items-center">
              <div className="">
                <h2 className="text-sm font-bold mb-5 text-center">
                  index (সূচিপত্র)
                </h2>
                <div className="overflow-x-auto">
                  <table className="table-auto max-w-fit border border-gray-300 shadow-2xl rounded-lg">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="border border-gray-300 px-2 py-1 text-left">
                          Contents
                        </th>
                        <th className="border border-gray-300 px-2 py-1 text-left">
                          Pages
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {contents.slice(0, 10).map((item, index) => {
                        // Take the first page from the range "7-8" → 7
                        const targetPage = parseInt(
                          item.pages.split("-")[0].trim()
                        );

                        return (
                          <tr
                            key={index}
                            className={`${
                              index % 2 === 0 ? "bg-white" : "bg-gray-50"
                            } cursor-pointer hover:bg-blue-100`}
                            onClick={() => goToPage(targetPage)}
                          >
                            <td className="border border-gray-300 text-blue-600 px-2 py-1 md:text-base">
                              {item.title}
                            </td>
                            <td className="border border-gray-300 px-2 py-1 text-sm md:text-base text-blue-600 underline">
                              {item.pages}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <p className="pt-5 text-center">
              Click/touch any page number to read.
            </p>
          </div>

          {/* page 3 the*/}
          <div className="p-3 text-black lg:p-5 bg-[#EFE5D6] book-shadow">
            <div className="flex justify-start gap-10 md:gap-96 mb-1">
              <h2 className="text-base lg:text-xl font-bold ">Page 3</h2>
              <button
                onClick={goToContents}
                className=" px-2 py-1 bg-blue-500 text-white text-xs md:text-base rounded hover:bg-blue-600"
              >
                ⬅ Back to index
              </button>
            </div>
            <div className="">
              {/* <h3 className="font-bold">ABC in IPA </h3> */}
              <div className="">
                <p className="pb-2">
                  <strong>Definition: </strong> <br /> An article in English
                  grammar is a word that precedes a noun to indicate whether the
                  noun is specific or general.
                  <br />
                  There are three articles in English: one definite article,
                  "the," and two indefinite articles, "a" and "an."
                </p>

                <h3>Use of The:</h3>
                <p className="">
                  <span className="animateText font-bold">Rule: 1. </span>{" "}
                  <br />
                  শুন্যস্থানের একটি বা দুটি শব্দের পরে of/Wh থাকলে শুন্যস্থানে
                  the বসে । অথবা দুটি Noun যদি of দ্বার যুক্ত হয় তবে প্রথমটির
                  আগে ...the... বসে।
                  <br />
                  যেমনঃ <br />
                  Q. I like ____ rice of Dinajpur. <br />
                  👉I like <strong>the</strong> rice of Dinajpur.
                  <br />
                  ব্যতিক্রমঃ a lot of, a number of, a great deal of .
                </p>
              </div>
            </div>
          </div>

          {/* page 4*/}
          <div className="p-3 text-black lg:p-5 bg-[#EFE5D6] book-shadow">
            <div className="flex justify-start gap-10 md:gap-96 mb-1">
              <h2 className="text-base lg:text-xl font-bold ">Page 4</h2>
              <button
                onClick={goToContents}
                className=" px-2 py-1 bg-blue-500 text-white text-xs md:text-base rounded hover:bg-blue-600"
              >
                ⬅ Back to index
              </button>
            </div>
            <div className="">
              <h3 className="font-bold">Use of The </h3>
              <div className="">
                {/* 2 */}
                <p className="">
                  <span className="animateText font-bold">Rule-2. </span> <br />
                  একই শব্দ একাধিক বার ব্যবহার হলে পরের বার গুলোর পূর্বে The বসে।{" "}
                  <br />
                  যেমনঃ <br />
                  Q. I have a pen. ____ pen is red. <br />
                  👉 I have a pen. <strong>the</strong> pen is red.
                </p>
                <p className="pt-1">
                  <strong>Rule-3. </strong> <br />
                  শব্দের শেষে <strong>s/es/est</strong> থাকলে বা শব্দটি বহু বচন
                  হলে তার পূর্বে The বসে। <br />
                  যেমনঃ <br />
                  Q. I bought ____ books. <br />
                  👉 I bought <strong>the</strong> books. <br />
                  Note: <br />
                  শব্দের শেষে <strong>s/es</strong> যুক্ত হলে বা শব্দটি বহু বচন
                  হলে তার পূর্বে ক্রসও (X) বসানো যায়।
                </p>
              </div>
            </div>
          </div>

          {/* page 5 Use of The*/}
          <div className="p-3 text-black lg:p-5 bg-[#EFE5D6] book-shadow">
            <div className="flex justify-start gap-10 md:gap-96 mb-1">
              <h2 className="text-base lg:text-xl font-bold ">Page 5</h2>
              <button
                onClick={goToContents}
                className=" px-2 py-1 bg-blue-500 text-white text-xs md:text-base rounded hover:bg-blue-600"
              >
                ⬅ Back to index
              </button>
            </div>
            <div className="">
              <h3 className="font-bold">Use of The </h3>
              <div className="">
                {/* 4 */}
                <p className="pt-1">
                  <strong>Rule-4. </strong> <br />
                  শুন্যস্থানের আগে Both, All, on/ Preposition থাকলে শুন্যস্থানে
                  The বসে। <br />
                  যেমনঃ <br />
                  I've read all ____ book. <br />
                  👉 I've read all <strong> the </strong>
                  book.
                </p>
                {/* 5 */}
                <p className="pt-1">
                  <strong>Rule-5. </strong> <br />
                  শুন্যস্থানের আগে Both, All, on/ Preposition থাকলে শুন্যস্থানে
                  The বসে। যেমনঃ <br />
                  I've read all ____ book. <br />
                  👉 I've read all <strong>the </strong>
                  book.
                  <br />
                  <span className="font-bold text-pink-600">Note: </span>{" "}
                  Preposition এর পরে একটি বস্তু বুঝালে (the), অদৃশ্য কিছু বুঝালে
                  (X), বাকি ক্ষেত্রে (a/n) বসে। যেমনঃ <br />
                </p>
              </div>
            </div>
          </div>

          {/* page 6 Use of The*/}
          <div className="p-3 text-black lg:p-5 bg-[#EFE5D6] book-shadow">
            <div className="flex justify-start gap-10 md:gap-96 mb-1">
              <h2 className="text-base lg:text-xl font-bold ">Page 6</h2>
              <button
                onClick={goToContents}
                className=" px-2 py-1 bg-blue-500 text-white text-xs md:text-base rounded hover:bg-blue-600"
              >
                ⬅ Back to index
              </button>
            </div>
            <div className="">
              <h3 className="font-bold">Use of The </h3>
              <div className="">
                যেমনঃ <br />
                Q. On __ day of examination, he looked very anxious. <br />
                👉 On the day of examination, he looked very anxious.
                {/* 6 */}
                <p className="pt-1 text-justify">
                  <strong>Rule-6. </strong> <br />
                  শুন্যস্থানের পরে ক্রমিক নাম্বার/ সংখ্যা/ সংখ্যাবাচক শব্দ
                  থাকলে, ধর্মীয় জিনিসের নাম, নদীর নাম, সাগরের নাম,পর্বত শ্রেণী
                  নাম,ঋতুর নাম, তারিখ, চাঁদ, সূর্য, পৃথিবী, ঐতিহাসিক স্থান/
                  প্রতিষ্ঠান থাকলে শুন্যস্থানে The বসে। <br />
                  যেমনঃ <br />
                  Q. _____ Padma is a big river. <br />
                  👉 <strong>The</strong> Padma is a big river.
                </p>
              </div>
            </div>
          </div>

          {/* page 7 Use of Cross (X)*/}
          <div className="p-3 text-black lg:p-5 bg-[#EFE5D6] book-shadow">
            <div className="flex justify-start gap-10 md:gap-96 mb-1">
              <h2 className="text-base lg:text-xl font-bold ">Page 7</h2>
              <button
                onClick={goToContents}
                className=" px-2 py-1 bg-blue-500 text-white text-xs md:text-base rounded hover:bg-blue-600"
              >
                ⬅ Back to index
              </button>
            </div>
            <div className="">
              <h3 className="font-bold">Use of Cross (X) </h3>
              <div className="">
                {/* 1 */}
                <p className="">
                  <strong>Rule-1. </strong> <br />
                  Proper noun, uncountable noun এবং Verb এর আগে X (ক্রস) বসে।{" "}
                  <br />
                  যেমনঃ <br />
                  Q. I live in ...... Tilakpur. <br />
                  👉 I live in ...<strong>x</strong>
                  ...Tilakpur. <br />
                  ব্যতিক্রমঃ USA, UK, UNO, UNICEF, USSR- এগুলোর পূর্বে The বসে।
                </p>
                {/* 2 */}
                <p className="pt-1">
                  <span className="animateText font-bold">Rule: 2. </span>{" "}
                  <br />
                  শুন্যস্থানের পরে এবং পূর্বে Possessive case এবং Demonstrative
                  Pronoun থাকলে শুন্যস্থানে X (ক্রস) বসে। যেমনঃ <br />
                  Q. I wanted his/this ...... books. <br />
                  👉I wanted his ... <strong>x</strong>... books. <br />
                  {/* Q. I wanted this ...... book. <br />
                  👉I wanted this ... <strong>x</strong>... books. */}
                  Note: <br />
                  Possessive case: My, his, her, our, their, your, its, Rohim's
                </p>
              </div>
            </div>
          </div>

          {/* page 8 Use of Cross*/}
          <div className="p-3 text-black lg:p-5 bg-[#EFE5D6] book-shadow">
            <div className="flex justify-start gap-10 md:gap-96 mb-1">
              <h2 className="text-base lg:text-xl font-bold ">Page 8</h2>
              <button
                onClick={goToContents}
                className=" px-2 py-1 bg-blue-500 text-white text-xs md:text-base rounded hover:bg-blue-600"
              >
                ⬅ Back to index
              </button>
            </div>
            <div className="">
              <h3 className="font-bold">Use of Cross </h3>
              <div className="">
                Note: <br />
                Possessive case: My, his, her, our, their, your, its, Rohim's/
                apostrophe S যুক্ত কোন Noun থাকলে।
                <br />
                Demonstrative Pronoun: This, these, that, those.
                <p className="pt-5">
                  <strong>Rule-3. </strong> <br />
                  A / An / The + (Adjective) + ....... + Noun এভাবে ব্যবহার হলে
                  শুন্যস্থানে X (ক্রস) বসে।
                  <br />
                  যেমনঃ <br />
                  He is an honest ...... man. <br />
                  He is an honest ...<strong>x</strong>... man. <br />
                  অথবা, Adjective এর কোন Noun না থাকলে Adjective পূর্বে X বসে।
                </p>
              </div>
            </div>
          </div>

          {/* page 9 Use of A/An*/}
          <div className="p-3 text-black lg:p-5 bg-[#EFE5D6] book-shadow">
            <div className="flex justify-start gap-10 md:gap-96 mb-1">
              <h2 className="text-base lg:text-xl font-bold ">Page 9</h2>
              <button
                onClick={goToContents}
                className=" px-2 py-1 bg-blue-500 text-white text-xs md:text-base rounded hover:bg-blue-600"
              >
                ⬅ Back to index
              </button>
            </div>
            <h2 className="">Use of A/An</h2>
            <div className="">
              <p className="pt-">
                <strong>Rule-1.</strong> <br /> Consonant দ্বারা শুরু শব্দের
                পূর্বের শুন্যস্থানে A বসে। Vowel (a, e, i, o, u) দ্বারা শুরু হলে
                শুন্যস্থানে An বসে। যেমনঃ <br />
                Q. I saw __ cow. <br />
                👉 I saw <strong>a</strong> cow. <br />
                Q. Take __ umbrella. <br />
                👉 Take <strong>an</strong> umbrella.
              </p>
              <p className="pt-1">
                <strong>কিন্তু</strong> <br />
                Vowel (a, e, i, o, u) দ্বারা শুরু শব্দের উচ্চারণ যদি ইউ (u) বা
                ওয়া এর মত হয় তবে সেই শব্দের আগের/ পূর্বের শুন্যস্থানে (An না
                বসে) A বসে। যেমনঃ <br />
                Q. He reads in ____ university. <br />
                👉 He reads in <strong> a </strong> university.
              </p>
            </div>
          </div>

          {/* page 10 Use of A/An*/}
          <div className="p-3 text-black lg:p-5 bg-[#EFE5D6] book-shadow">
            <div className="flex justify-start gap-10 md:gap-96 mb-1">
              <h2 className="text-base lg:text-xl font-bold ">Page 10</h2>
              <button
                onClick={goToContents}
                className=" px-2 py-1 bg-blue-500 text-white text-xs md:text-base rounded hover:bg-blue-600"
              >
                ⬅ Back to index
              </button>
            </div>
            <h2 className="">Use of A/An</h2>
            <div className="">
              <p className="pt-">
                <strong>Rule - 4. </strong> <br />
                কিন্তু H দ্বারা শুরু শব্দে H এর উচ্চারণ যদি না হয় বরং H এর পরে
                থাকা Vowel এর উচ্চারণ যদি হয় তবে সেই H দ্বারা শুরু শব্দের
                আগে/পূর্বের শুন্যস্থানে (A না বসে) An বসে। <br />
                যেমনঃ <br />
                Q. He is _____ honest man. <br />
                👉 He is <strong>an</strong> honest man.
              </p>
              <p className="pt-2">
                <strong>Rule-5. </strong> <br /> Consonant দ্বারা শুরু সংক্ষিপ্ত
                শব্দের উচ্চারণ যদি Vowel এর মত হয় তবে সেই শব্দের আগে/পূর্বের
                শুন্যস্থানে An বসে।
                <br />
                যেমনঃ <br />
                Q. He is ____ MBBS. <br />
                👉 He is <strong>an</strong> MBBS. <br />
              </p>
            </div>
          </div>

          {/* page 11 Use of Cross*/}
          <div className="p-3 text-black lg:p-5 bg-[#EFE5D6] book-shadow">
            <div className="flex justify-start gap-11 md:gap-96 mb-1">
              <h2 className="text-base lg:text-xl font-bold ">Page 11</h2>
              <button
                onClick={goToContents}
                className=" px-2 py-1 bg-blue-500 text-white text-xs md:text-base rounded hover:bg-blue-600"
              >
                ⬅ Back to index
              </button>
            </div>
            <h2 className="">Use of A/An</h2>
            <div className="">
              Q. He is _____ FRCP. <br />
              👉 He is <strong>an</strong> FRCP. <br />
              <br />
              কিন্তু Vowel এর মত উচ্চারণ না হলে A বসে। যেমনঃ <br />
              Q. He is ____ BA. <br />
              👉 He is <strong>a</strong> BA.
            </div>
          </div>

          {/* Back Cover */}
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600  text-white text-xl font-bold">
            <div className="flex justify-start gap-10 md:gap-96 mb-1">
              <h2 className="text-base lg:text-xl font-bold ">Page </h2>
              <button
                onClick={goToContents}
                className=" px-2 py-1 bg-blue-500 text-white text-xs md:text-base rounded hover:bg-blue-600"
              >
                ⬅ Back to index
              </button>
            </div>
            <div className="w-full h-full text-7xl flex flex-col items-center justify-center">
              <p className="">🔚 </p>
              {/* <p className="">The End</p> */}
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
          <div className="w-full mt-4 flex items-center justify-center gap-2">
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
              className="border px-2 py-1 rounded max-w-fit text-center"
              placeholder="Put a page number and click Go to..."
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

      {/* Scroll view */}
      <div className="">
        <div className="px-5 w-full flex items-center justify-center py-20">
          <div className="relative w-[600px] h-[200px] bg-black text-white flex items-center justify-center text-2xl md:text-6xl font-bold rounded-2xl overflow-hidden">
            <span className="text-white">Article</span>
            {/* <img src="/dialogTitle.png" alt="" /> */}
            <div className="effect"></div>
          </div>
        </div>
        <div className="h-full px-4">
          <div className=" pb-10">
            <p className="pb-5">
              <strong>Definition of Article: </strong> An article in English
              grammar is a word that precedes a noun to indicate whether the
              noun is specific or general.
              <br />
              There are three articles in English: one definite article, "the,"
              and two indefinite articles, "a" and "an."
            </p>

            <h3>
              The <strong>এর ব্যবহার</strong>:
            </h3>
            <p className="pt-5">
              <span className="animateText font-bold">Rule: 1. </span> <br />
              শুন্যস্থানের একটি বা দুটি শব্দের পরে of থাকলে শুন্যস্থানে the বসে
              । অথবা দুটি Noun যদি of দ্বার যুক্ত হয় তবে প্রথমটির আগে ...the...
              বসে।
              <br />
              যেমনঃ <br />
              Q. I like ____ rice of Dinajpur. <br />
              👉I like <strong>the</strong> rice of Dinajpur.
              <br />
              <br />
              ব্যতিক্রমঃ a lot of, a number of, a great deal of .
            </p>

            {/* 2 */}
            <p className="pt-5">
              <span className="animateText font-bold">Rule: 2. </span> <br />
              একই শব্দ একাধিক বার ব্যবহার হলে পরের বার গুলোর আগের শুন্যস্থানে
              The বসে। <br />
              যেমনঃ <br />
              Q. I have a pen. ____ pen is red. <br />
              👉 I have a pen. <strong>the</strong> pen is red.
            </p>
            {/* 4 */}
            <p className="pt-5">
              <strong>4. </strong>
              শব্দের শেষে <strong>s/es/est</strong> থাকলে বা শব্দটি বহু বচন হলে
              শুন্যস্থানে The বসে। <br />
              যেমনঃ <br />
              Q. I bought ____ books. <br />
              👉 I bought <strong>the </strong> books. Note: <br />
              শব্দের শেষে <strong>s/es</strong> যুক্ত হলে বা শব্দটি বহু বচন হলে
              তার পূর্বে ক্রসও (X) বসানো যায়।
            </p>
            {/* 5 */}
            <p className="pt-5">
              <strong>5. </strong> শুন্যস্থানের আগে Both, All, on/ Preposition
              থাকলে শুন্যস্থানে The বসে। <br />
              যেমনঃ <br />
              I've read all ____ book. <br />
              👉 I've read all <strong>the </strong>
              book.
              <br />
              <br />
              Note: Preposition এর পরে একটি বস্তু বুঝালে (the) । অদৃশ্য কিছু
              বুঝালে (X) । বাকি ক্ষেত্রে (a/n) বসে। <br />
              যেমনঃ <br />
              Q. On __ day of examination, he looked very anxious. <br />
              👉 On the day of examination, he looked very anxious.
            </p>
            {/* 6 */}
            <p className="pt-5">
              <strong>6. </strong>
              শুন্যস্থানের পরে ক্রমিক নাম্বার/ সংখ্যা/ সংখ্যাবাচক শব্দ থাকলে,
              ধর্মীয় জিনিসের নাম, নদীর নাম, সাগরের নাম,পর্বত শ্রেণী নাম,ঋতুর
              নাম, তারিখ, চাঁদ, সূর্য, পৃথিবী, ঐতিহাসিক স্থান/ প্রতিষ্ঠান থাকলে
              শুন্যস্থানে The বসে। <br />
              যেমনঃ <br />
              Q. _____ Padma is a big river. <br />
              👉 <strong>The</strong> Padma is a big river.
            </p>
            {/* 7 */}
            <p className="pt-5">
              7. Subject/Object এর পরে Who, Which, Where, Whom থাকলে সেই
              Subject/Object এর আগে The বসে। <br />
              যেমনঃ <br />
              Q. This is ___ place where I was born. <br />
              👉 This is the place where I was born.
            </p>
            {/* Use of Cross */}
            <h3 className="pt-5 font-bold">X (ক্রস) এর ব্যবহার:</h3>
            <p className="pt-5">
              <strong>1. </strong> Proper noun, uncountable noun এবং Verb এর আগে
              X (ক্রস) বসে। <br />
              যেমনঃ <br />
              Q. I live in ...... Tilakpur. <br />
              👉 I live in ...<strong>x</strong>
              ...Tilakpur. <br />
              ব্যতিক্রমঃ USA, UK, UNO, UNICEF, USSR- এগুলোর পূর্বে The বসে।
            </p>
            <p className="pt-5">
              <span className="animateText font-bold">Rule: 2. </span>
              শুন্যস্থানের পরে এবং পূর্বে Possessive case এবং Demonstrative
              Pronoun থাকলে শুন্যস্থানে X (ক্রস) বসে। <br />
              যেমনঃ <br />
              Q. I wanted his ...... books. <br />
              👉I wanted his ... <strong>x</strong>... books. <br />
              Q. I wanted this ...... book. <br />
              👉I wanted this ... <strong>x</strong>... books.
              <br />
              <br />
              Note: <br />
              Possessive case: My, his, her, our, their, your, its, Rohim's{" "}
              <br />
              Demonstrative Pronoun: This, these, that, those.
            </p>
            <p className="pt-5">
              <strong>3. </strong> A / An / The + (Adjective) + ....... + Noun
              এভাবে ব্যবহার হলে শুন্যস্থানে X (ক্রস) বসে।
              <br />
              যেমনঃ <br />
              He is an honest ...... man. <br />
              He is an honest ...<strong>x</strong>... man.
            </p>

            <h3 className="pt-5">
              <strong>A/ An এর ব্যবহার:</strong>
            </h3>
            <p className="pt-5">
              <strong>Rule-1.</strong> <br /> Consonant দ্বারা শুরু শব্দের
              পূর্বের শুন্যস্থানে A বসে। Vowel (a, e, i, o, u) দ্বারা শুরু হলে
              শুন্যস্থানে An বসে। যেমনঃ <br />
              Q. I saw __ cow. <br />
              👉 I saw <strong>a</strong> cow. <br />
              Q. Take __ umbrella. <br />
              👉 Take <strong>an</strong> umbrella.
            </p>
            <p className="pt-5">
              <strong>2. কিন্তু</strong> Vowel (a, e, i, o, u) দ্বারা শুরু
              শব্দের উচ্চারণ যদি ইউ (u) বা ওয়া এর মত হয় তবে সেই শব্দের আগের/
              পূর্বের শুন্যস্থানে (An না বসে) A বসে। <br />
              যেমনঃ <br />
              Q. He reads in ____ university. <br />
              👉 He reads in <strong> a </strong> university.
            </p>

            <p className="pt-5">
              <strong>4. </strong>কিন্তু H দ্বারা শুরু শব্দে H এর উচ্চারণ যদি না
              হয় বরং H এর পরে থাকা Vowel এর উচ্চারণ যদি হয় তবে সেই H দ্বারা শুরু
              শব্দের আগে/পূর্বের শুন্যস্থানে (A না বসে) An বসে। <br />
              যেমনঃ <br />
              Q. He is _____ honest man. <br />
              👉 He is <strong>an</strong> honest man.
            </p>
            <p className="pt-5">
              <strong>5. </strong> Consonant দ্বারা শুরু সংক্ষিপ্ত শব্দের
              উচ্চারণ যদি Vowel এর মত হয় তবে সেই শব্দের আগে/পূর্বের শুন্যস্থানে
              An বসে।
              <br />
              যেমনঃ <br />
              Q. He is ____ MBBS. <br />
              👉 He is <strong>an</strong> MBBS. <br />
              Q. He is _____ FRCP. <br />
              👉 He is <strong>an</strong> FRCP. <br />
              <br />
              কিন্তু Vowel এর মত উচ্চারণ না হলে A বসে। <br />
              যেমনঃ <br />
              Q. He is ____ BA. <br />
              👉 He is <strong>a</strong> BA.
            </p>
          </div>
        </div>

        {/* Exercise */}
        <div className="py-10 px-5">
          <h3 className="">Practice</h3>
          <br />
          <br />
          1. Filling the blanks in the following text with articles (a/an/the)
          as necessary. Some of the blanks are not required an article. Put a
          cross (x) in those blanks. [Dhaka Board-2019]
          <br /> <br />
          (a)_____ parliament house of Bangladesh is (b)_____exquisitely
          designed building. In fact, it is (c)_____wonder of modern
          architecture and technology. It is one of (d)_____largest and most
          spectacular parliament buildings in (e)_____world. It is (f)_____
          highly expensive building. (g)_____maintenance cost of the parliament
          house is about 50 million taka per year. An American architect (h)
          _____Louis I Khan designed this (i) _____building. Everyday many
          (j)_____visitor comes to visit the building. <br /> <br />
          2. The national flag represents (a)_____independence of
          (b)_____country. Ours is (c)_____independent country. Hence, we have a
          national flag symbolizing our independence. (d)_____ cloth of a
          national flag is made of (e)_____ cotton, silk or linen. Our flag is
          rectangular in shape maintaining (f)_____ ratio of its length and
          breadth 10: 6, There are different sizes of national flag. The
          background of our flag is green which symbolizes our life and energy.
          In the middle point of the flag there is (g)_____blood-red circle
          representing our hard struggle and blood-shed. (h) - red circle also
          represents the heroic blood-shed of (i)_____ martyrs. The national
          flag plays (j)_____vital role in the life of a nation. <br /> <br />
          3. Childhood or boyhood is (a)_____ man's formative period. During
          this period (b)_____ child receives training from its mother. (c)-
          mother's tender heart always looks to (d)_____welfare and well-being
          of (e)_____child. If during this period (f)_____mother tries to bring
          (g)_____child up carefully and according to her (h)_____ best ideas
          (i)_____child is sure to grow with its superiors, parents and teachers
          and love (j)_____ all irrespective of caste, creed and color. <br />{" "}
          <br />
          4. The industry is (a)_____key to success in our life.
          (b)_____industrious can prosper in life. (c)_____ man who does not
          undertake (d)_____ hard work can never go (e)_____long way in (f)_____
          world. Many (g)_____man is not aware of (h)_____ significance of
          (i)_____diligence for which. they cannot reap (j)_____benefit of
          success.hose blanks.
          <br /> <br />
          5. An honest man is true to his (a)_____ words. He does not deviate
          from (b)_____ path of honesty. He knows that true happiness consists
          of (c)_____ honesty. He does not fall victim to (d)_____greed. He does
          not hanker after (e)_____worldly property. (f)_____honest man abstains
          from corruption. He does not mix with (g)_____corrupted people. He is
          (h)_____man who tries to get pleasure from good deeds. (i)_____greed
          for wealth does not touch him. People should follow the path of
          (j)_____honest people of the society.
          <br />
          <br />
          6. What is patriotism? It is (a)_____ noble virtue. It inspires
          (b)_____ man to dedicate his life to the freedom and development of
          his (c)_____country. (d)_____man without patriotism is no better than
          (e)_____ beast. A true patriot is honored by (f)_____ his countrymen.
          He thinks for (g)_____betterment of his country. On (h)_____contrary,
          (i)_____ unpatriotic man thinks only of his interest. Those who die
          for (j)_____country are true patriots.
          <br />
          <br />
          7. I have (a)_____uncle who has just retired from (b)_____army. He
          used to be (c)_____ABI agent, and everybody says he has been an honest
          man all his life. As a child, I loved him for his stories. He once
          told me that he met (d)_____one-eyed alien from (e)_____ space.
          (f)_____ alien did not need any oxygen. And it did not have (g)_____
          nose. I now understand that it was (h)_____ hard story to believe. I
          am not sure he was telling me (i)_____truth. Maybe he is not so
          (j)_____honest, after all.
          <br />
          <br />
          8. Mr. Bright is (a)_____ European. As he is (b)_____Englishman, he
          knows (c)-- English well. He is (d) – honorable to everyone though he
          is (e)_____ one-eyed man. One day having (f)_____SOS, he went to
          (g)_____UŠA. His brother, Johnson living there joined (h)_____Army
          last year. He is (i)_____younger of the two brothers. When Mr. Bright
          met his brother, he could not but shed (j)_____tears [Barishal Board-
          2019; Jashore Board-2015] Mr. Bright is (a)_____ European. As he is
          (b)_____Englishman, he knows (c)-- English well. He is (d) – honorable
          to everyone though he is (e)_____ one-eyed man. One day having
          (f)_____SOS, he went to (g)_____UŠA. His brother, Johnson living there
          joined (h)_____Army last year. He is (i)_____younger of the two
          brothers. When Mr. Bright met his brother, he could not but shed
          (j)_____tears
          <br />
          <br />
          HSC Articles 2018 All Board Questions With Answer <br />
          9. Bangladesh is (a)_____independent country. We won freedom on
          (b)_____December 16. 1971. This freedom was won as (c)_____result of
          great sacrifice. (d)_____great many people laid down their lives for
          (e)--freedom of the country. (f)_____ man who loves his country is
          (g)-patriot. (h) - real patriot loves his country more than his life.
          Being patriots, we all should try to make (i)_____effort for the
          welfare and (j)_____progress of our motherland.
          <br />
          <br />
          10. William Shakespeare was born on April 23, 1564 in (a)_____village
          of Stratford-on-Avon in (b)_____country of Warwickshire. His father
          John Shakespeare was (c)_____farmer's son who came (d)_____ Stratford
          about 1531 and began to prosper as (e)_____ trader in corn, wheat,
          leather and agricultural products. His mother Mary Arden was
          (f)_____daughter of (g)_____prosperous farmer, descended from
          (h)_____old family of mixed Anglo-Saxon and Norman blood. It is
          generally believed that neither (i)_____poet's mother nor his father
          could read or write. In 1582, Shakespeare married Anne Hathaway, the
          daughter of (j)_____peasant family. She was eight years older than
          Shakespeare
          <br /> <br />
          9. Bangladesh is (a)_____independent country. We won freedom on
          (b)_____December 16. 1971. This freedom was won as (c)_____result of
          great sacrifice. (d)_____great many people laid down their lives for
          (e)--freedom of the country. (f)_____ man who loves his country is
          (g)-patriot. (h) - real patriot loves his country more than his life.
          Being patriots, we all should try to make (i)_____effort for the
          welfare and (j)_____progress of our motherland.
          <br /> <br />
          10. William Shakespeare was born on April 23, 1564 in (a)_____village
          of Stratford-on-Avon in (b)_____country of Warwickshire. His father
          John Shakespeare was (c)_____farmer's son who came (d)_____ Stratford
          about 1531 and began to prosper as (e)_____ trader in corn, wheat,
          leather and agricultural products. His mother Mary Arden was
          (f)_____daughter of (g)_____prosperous farmer, descended from
          (h)_____old family of mixed Anglo-Saxon and Norman blood. It is
          generally believed that neither (i)_____poet's mother nor his father
          could read or write. In 1582, Shakespeare married Anne Hathaway, the
          daughter of (j)_____peasant family. She was eight years older than
          Shakespeare.
          <br />
          <br />
          11. Patriotism is (a)_____ noble virtue. It inspires (b)_____ man to
          dedicate his life to the freedom and development of his
          (c)_____country. (d)_____man without patriotism is no better than
          (e)_____ beast. A true patriot is honored by (f)_____ his countrymen.
          He thinks for (g)_____betterment of his country. On (h)_____contrary,
          (i)_____ unpatriotic man thinks only of his own interest. Those who
          die for (j)_____country are true patriots.
          <br />
          <br />
          12. Truthfulness is (a)_____ greatest of all (b)_____ virtues which
          make (c)_____ man really great. If we do not cultivate the habit of
          speaking (d)_____ truth, we cannot command (e)_____ confidence of
          others. (f)_____ might succeed once or twice by telling (g)_____ lie
          but it never brings a good result. (h)_____lie never lies hidden.
          Today or tomorrow it comes to light. Then (i)_____ real character of
          ()_____ liar is revealed and nobody believes him.
          <br />
          <br />
          13. What (a)_____ surprise it was! Robin got (b)_____ first prize in
          (c)_____ competition. I was (d)_____really amazed at his success. Of
          course he was trained by (e)_____ expert coach for (f)_____ time. He
          always obeyed (g)_____instructions given by (h)_____ coach. Even he
          was not found outside (i)_____ camp during practice session.
          (j)_____boy like him is always appreciated by the people.
          <br /> <br />
          14. The process of learning may very well be compared to
          (a)_____undertaking of a journey. The learner or the student is
          (b)_____journey taker or traveller. Just as a traveller has to undergo
          all (c)_____ botherations of buying his ticket, booking his baggage,
          showing up his ticket, taking care of things, boarding a train or a
          bus and suffering every other item of (d)_____tedious journey to reach
          his (e)_____destination, so a learner has to mange his learning affair
          himself. It is (f)_____labourious process and no one can do (g)_____
          labour for him and no one else can undertake (h)_____journey for
          another. There is no trick or magic in it. It cannot be acquired at
          second hand. Just as a traveler, he can enquire here and there in case
          of doubt and difficulty. However, the journey is (i)_____passenger's
          own concern. In (j)_____same way, learning is entirely the concern of
          the student or the learner.
          <br />
          <br />
          15. In (a)_____last 25 years (b)_____world has lost one-third of its
          natural wealth, according to (c)-- international conservation
          organisation world wild fund. (d)_____earth's forest, wetlands, seas
          and coasts are in (e)_____worse state today than they were before.
          Forests are cut down. Moreover, they are being burnt indiscriminately
          resulting in (f)_____ increase in carbon dioxide and ultimately in
          (g)_____water level rising as a consequence of global warming. It is
          anticipated that (h)_____ overwhelming environmental (j)
          _____catastrophe.
          <br />
          <br />
          16. 'Rifle Roti Aurat' is (a)_____ first Bengali novel on (b)_____
          Liberation War of Bangladesh. This unique novel is written by Anwar
          Pasha, (c)_____professor of Bangla department at Dhaka University. He
          wrote this (d) _____ novel between April and June in 1971. The main
          characters in this novel is Sudipta Shaheen who shares his dream of
          (e)_____ new country. Professor Anwar Pasha was picked up from his
          Dhaka University residence two days before (f)_____victory. Sensing
          imminent defeat, the member of (g)_____ notorious killing squad
          Al-Badr picked up (h)_____ novelist Anwar Pasha and many other
          intellectuals and brutally killed them. According to.
          (i)_____Banglapedia, around 991 academics, 13 journalists, 49
          physicians, 42 lawyers, and 16 other intellectuals were killed during
          (j)_____Liberation War of Bangladesh
          <br />
          <br />
          17. Robi is (a)_____indigent boy. He comes of (b)_____needy family.
          But he is diligent and upright. He has (c)_____ unique vision for
          life. He believes that honesty is (d) _____ key to success. Moreover,
          he has (e)_____deep sense of patriotism. Being imbued with these
          ideals, he shapes (f)_____dream of his life. From (g)- dawn to dusk,
          he works hard. He never squanders time, wastes money and dissipates
          (h)_____energy. His only aim is to reach (i)_____apex of success. We
          need (j)_____ideal boy like Robi.
          <br />
          <br />
          18. Truthfulness is (a)_____ greatest of all (b)_____virtues which
          makes (c)_____person really great. If we do not cultivate (d)_____
          habit of speaking (e)_____truth, we cannot command (f)_____ trust of
          others. The man whom nobody believes can never be famous in life. It
          may be that we may succeed once or twice by telling (g)_____lie but it
          never brings about (h)_____ good result. A lie never lies hidden.
          Today or tomorrow it comes to light. Then (i)_____ real character of
          (j)_____liar is revealed and nobody believes him.
          <br />
          <br />
          19. Michael Madhusudan Dutt was (a)_____ popular 19th century Bengali
          poet and dramatist. He was born in (b)_____ in Sagardari on the
          (c)_____ bank of (d)_____ Kopotaksho river, (e)_____ village in
          Keshobpur Upazilla under Jessore district. From (f)_____early age,
          Dutt aspired to be (g)_____Englishman in form and manner. Though he
          was born in (h)_____sophisticated Hindu family, he took Christianity
          arousing (i)_____ anger of his family. He contributed much to
          (j)_____development of Bengali literature.
          <br /> <br />
          20. Every student wants to do better in (a)_____examination. But it is
          not (b)_____easy work. (c)_____ student has to do something for this.
          From (d)_____very beginning he must be serious. He should read
          (e)_____texts again and again. He must not memorize (f)_____ answer
          without knowing the meaning. He must not make notes from
          (g)_____common source. He should have a good (h)_____command over
          English. By doing all these things (i)_____student can hope to make a
          good (j)_____result
        </div>
      </div>
    </div>
  );
}

export default Article;
