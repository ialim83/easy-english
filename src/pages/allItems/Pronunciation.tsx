import { useRef, useState, useEffect } from "react";
import HTMLFlipBook from "react-pageflip";
// import frontCover from "../../../public/bookCover.jpg";

const Pronunciation = () => {
  const flipBook = useRef<any>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [jumpPage, setJumpPage] = useState<number | "">("");
  const [isPortrait, setIsPortrait] = useState(false); // 🔥 auto mode

  const totalPages = 90; // Update when you add more pages

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

  const contents = [
    { title: "ABC in IPA", pages: "5-6" },
    { title: "Consonant Diagraph", pages: "7-8" },
    { title: "IPA(Phonetics)", pages: "9 - 15" },
    { title: "Article", pages: "16-17" },
    { title: "Aspirated Sound", pages: "18 - 21" },
    { title: '"R" এর উচ্চারণ', pages: "22 - 23" },
    { title: "Contractions", pages: "24 - 40" },
    { title: "Informal Contractions", pages: "42 - 50" },
    { title: "Unvoiced Sound s", pages: "51 - 53" },
    { title: "Syllable শব্দাংশ", pages: "54-55" },
    { title: "Stress (শ্বাসাঘাত)", pages: "56 - 64" },
    { title: "Assimilation সন্ধি", pages: "65 - 71" },
    { title: "Elision ধ্বনিলোপ ", pages: "72-74" },
    { title: "Linking সংযুক্তি", pages: "34 -36" },
    { title: "উচ্চারণ টেকনিক", pages: "41 - 58" },
    { title: "Y এর উচ্চারণ", pages: "55 - 58" },
    { title: "X এর উচ্চারণ", pages: "56 - 58" },
    { title: "Chunking", pages: "59" },
    // { title: "24 consonant sounds", pages: "60" },
  ];

  const goToPage = (page: number) => {
    if (flipBook.current) {
      flipBook.current.pageFlip().flip(page);
    }
  };

  const goToContents = () => {
    if (flipBook.current) {
      flipBook.current.pageFlip().flip(2); // 👈 contents page (Page 2 visually)
    }
  };

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
    <div className="flex flex-col items-center justify-center gap-8 py-10 md:py-10 px-5 overflow-hidden text-justify">
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
          {/* page1 cover */}
          <div className="absolute top-1/4 left-[18%] sm:left-[27%] sm:top-[30%]  md:top-[12%] md:left-[20%] lg:top-[10%] lg:left-[25%] xl:left-[30%] 2xl:left-[35%] 2xl:top-[25%] px-5">
            <div className="">
              <h2 className="text-green-500 text-3xl text-center">উচ্চারণ</h2>
              <h1 className="text-9xl md:text-5xl lg:text-9xl text-center mb-3">
                📖
              </h1>

              <h2 className="text-green-500 text-3xl text-center">
                Pronunciation
              </h2>
              <p className="text-black text-center font-bold">
                শুদ্ধ উচ্চারণ শেখার সহজ উপায়
              </p>
              <p className="text-center text-blue-500">
                Click/touch to read the book
              </p>
            </div>
          </div>
          <img src="/bookCover3.jpg" className="w-full h-full" alt="" />
        </div>

        {/* page 2 */}
        <div className="p-3 text-black lg:p-5 bg-[#EFE5D6] book-shadow">
          <h2 className="text-base lg:text-xl font-bold mb-1">Page 2</h2>
          <div className="">
            <p className="">
              ভূমিকা <br />
              ইংরেজিতে যারা দক্ষ হতে চান, বিশেষ করে ন্যাটিভ স্পিকারদের মত যারা
              শুদ্ধ উচ্চারণে কথা বলতে চান তাদের জন্য আমাদের বই <br />
              শুদ্ধ উচ্চারণ শেখার আন্তর্জাতিক স্বীকৃত পদ্ধতি হচ্ছে IPA
              (International Phonetic Alphabet), বইটিতে IPA কে রুট হিসাবে
              বিবেচনা করে সহজ পদ্ধতিতে বিভিন্ন রুলস ও টেকনিকসহ উদাহরণের মাধ্যমে
              দেখানো হয়েছে। <br />
              শুদ্ধ উচ্চারণ শেখার জন্য IPA অনুসরণ করে শেখাই সবচেয়ে কার্যকর
               পন্থা। কারণ, ইংরেজির এমন কিছু ধ্বনি বা উচ্চারণ রয়েছে যা প্রকাশের
              জন্য বাংলায় কোন বর্ণ নেই। উদাহরণস্বরুপ, 'Pen' শব্দটির 'P' উচ্চারণ
              করতে অনেকটা 'ফ' বা 'প' ও 'ফ' এর মাঝামাঝি একটি উচ্চারণ যেটি বাংলায়
              কোন বর্ণ নেই। <br />
              ধন্যবাদান্তে,
            </p>
          </div>
        </div>

        {/* page 3 */}
        <div className="p-3 text-black md:p-5 bg-[#EFE5D6] book-shadow">
          <h2 className="text-base lg:text-xl font-bold mb-1">Page 3</h2>
          <div className="w-full flex flex-col items-center">
            <div className="">
              {/* <h2 className="text-sm font-bold mb-1 text-center">
                index (সূচিপত্র)
              </h2> */}
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
          <p className="pt-1 text-center">
            Click/touch any page number to read.
          </p>
        </div>

        {/* page 4  index*/}
        <div className="p-4 text-black md:p-5 lg:p-10 bg-[#EFE5D6] book-shadow">
          <h2 className="text-base lg:text-xl font-bold mb-2">Page 4</h2>
          <div className="w-full flex flex-col items-center">
            <div className="">
              <h2 className="text-sm font-bold mb-1 text-center">
                index (সূচিপত্র)
              </h2>
              <div className="overflow-x-auto">
                <table className="table-auto max-w-fit border border-gray-300 shadow-md rounded-lg">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="border border-gray-300 px-2 py-2 text-left">
                        Contents
                      </th>
                      <th className="border border-gray-300 px-2 py-2 text-left">
                        Pages
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {contents.slice(11, 18).map((item, index) => {
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
          <p className="pt-3 text-center">
            Click/touch any page number to read.
          </p>
        </div>

        {/* page 5 ABC in IPA*/}
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
            <p className="font-bold">ABC in IPA </p>
            <div className="w-full flex  justify-evenly text-base">
              <p className="">
                A = /eɪ/ = এই <br />
                B = /biː/ = বী <br />
                C = /siː/ = সী <br />
                D = /diː/ = ডী <br />
                E = /iː/ = ঈ <br />
                F = /ef/ = এফ <br />
                G = /dʒiː/ = জী <br />
                H = /eɪtʃ/ = এইচ্ <br />
                I = /aɪ/ = আই <br />
                J = /dʒeɪ/ = জ্বেই <br />
                K = /keɪ/ = খেই <br />
                L = /el/ = এল্ <br />
                M = /em/ = এ্যম্ <br />
                N = /en/ = এন্‌ <br />
              </p>
              <p className="">
                O = /əʊ/ = ওউ <br />
                P = /piː/ = ফী <br />
                Q = /kjuː/ = খীউ <br />
                R = /ɑːr/, /ɑː(r)/ = আ (র) <br />
                S = /es/ = এস্ <br />
                T = /tiː/ = ঠী <br />
                U = /juː/ = ইউ <br />
                V = /viː/ = ভীই <br />
                W = /ˈdʌbljuː/ = ডাবল্ইউ <br />
                X = /eks/ = এক্স <br />
                Y = /waɪ/ = ওয়াই <br />
                Z = /zed/, /ziː/ = জেড/জি <br />
                (British-জেড, American- জি) <br />
              </p>
            </div>
          </div>
        </div>

        {/* page 6  Alphabet audio/ video */}
        <div className="p-3 text-black lg:p-5 bg-[#EFE5D6] book-shadow">
          <div className="flex justify-between md:justify-start md:gap-96 mb-2">
            <h2 className="text-base lg:text-xl font-bold ">Page 6</h2>
            <button
              onClick={goToContents}
              className=" px-2 py-1 bg-blue-500 text-white text-xs md:text-base rounded hover:bg-blue-600"
            >
              ⬅ Back to index
            </button>
          </div>
          <div className="">
            <p className="">
              To listen to audio/ video is essential for correct pronunciation
              of English Alphabets. So you shouldn't miss listening these audio
              and video. You should also listen the audio from various English
              Dictionary like Oxford:
            </p>
          </div>
          <div className="">
            <div className="max-w-fit mx-auto p-2 text-center border-2 border-blue-500 mt-3 rounded-md">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://drive.google.com/file/d/1jZbkJTk4EX0QQ_LHLgcWTxLSeLu5CclH/view?usp=drivesdk"
              >
                click here to listen to audio
              </a>
            </div>
            <div className="max-w-fit mx-auto p-2 text-center border-2 border-blue-500 mt-3 rounded-md">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://youtu.be/OWfaVUaaqO0?si=fBBxV45pLKJMip2F"
              >
                click here to listen to Video
              </a>
            </div>
            <div className="max-w-fit mx-auto p-2 text-center border-2 border-blue-500 mt-3 rounded-md">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.oxfordlearnersdictionaries.com/"
              >
                Oxford Dictionary
              </a>
            </div>
            <div className="max-w-fit mx-auto p-2 text-center border-2 border-blue-500 mt-3 rounded-md">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://dictionary.cambridge.org/"
              >
                Cambridge Dictionary
              </a>
            </div>
          </div>
        </div>

        {/* page 7 Consonant Diagraph */}
        <div className="p-3 text-black lg:p-7 bg-[#EFE5D6] book-shadow">
          <div className="flex justify-start gap-10">
            <h2 className="text-base lg:text-xl font-bold">Page 7</h2>
            <button
              onClick={goToContents}
              className=" px-2 py-1 bg-blue-500 text-white text-xs md:text-base rounded hover:bg-blue-600"
            >
              ⬅ Back to index
            </button>
          </div>
          <div className="">
            <p className="font-bold ">Consonant Diagraph</p>
            <div className="text-base">
              <p className="">
                বাংলা ভাষায় যেমন কিছু যুক্ত অক্ষর আছে, ইংরেজি ভাষাতেও দুই বা
                ততোধিক শব্দ তেমনি যুক্ত অক্ষরের কাজ করে থাকে যার মাধ্যমে একটি
                আলাদা ব্যঞ্জনধ্বনি বা স্বরধ্বনি প্রকাশ করে। আর তাই একে Consonant
                Digraphs বলা হয়ে থাকে। উল্লেখ্য, Consonant Digraphs শব্দের
                শুরুতে বা শেষে ব্যবহার হয়ে থাকে। নিচে উদাহরনসহ কয়েকটি দেয়া হলো:{" "}
                <br />
                "gh-" গ - [শব্দের শুরুতে] - Ghost; <br />
                "ph-" ফ - [শব্দের শুরুতে/শেষে] - Phone; <br />
                "kn-" ন - [শব্দের শুরুতে] - Know; <br />
                "ch-" চ - [শব্দের শুরুতে] - Cheer; ; <br />
                "-ch "চ/ক - [শব্দেরশেষে] - check; <br />
              </p>
            </div>
          </div>
        </div>

        {/* page 8 Consonant Diagraph */}
        <div className="p-3 text-black lg:p-8 bg-[#EFE5D6] book-shadow">
          <div className="flex justify-start gap-10 md:justify-start md:gap-24 mb-1">
            <h2 className="text-base lg:text-xl font-bold">Page 8</h2>
            <button
              onClick={goToContents}
              className=" px-2 py-1 bg-blue-500 text-white text-xs md:text-base rounded hover:bg-blue-600"
            >
              ⬅ Back to index
            </button>
          </div>
          <div className="">
            <p className="font-bold">Consonant Diagraph</p>
            <div className="text-base ">
              <p className="">
                "th-"- থ - [শব্দের শুরুতে] - Thank; think; <br />
                "th-"- দ - [শব্দের শুরুতে] - Though; thou; <br />
                "-th"- থ - [শব্দের শেষে] - Bath; earth; <br />
                "-th"- দ - [শব্দের শেষে] - Bathe; breathe; <br />
                "sh-"- শ - [শব্দের শুরুতে] - Shower; sheet; <br />
                "-sh"- শ - [শব্দের শেষে] - Dish; fish; <br />
                "-ss"- স - [শব্দের শেষে] - Loss; Mass; <br />
                ⁹"wh-"- ওয়া - [শব্দের শুরুতে।] - What; where; <br />
                "wr-" - র - [শব্দের শুরুতে] - Write; wrong; <br />
                "-ng"- ইং - [শব্দের শেষে।] - Ring; sing; <br />
                "-nk"- ইংক - [শব্দের শেষে] - Link; pink; <br />
              </p>
            </div>
            <p className="heading2 text-center pt-5">ASM English Academy</p>
          </div>
        </div>

        {/* page 9 IPA Start*/}
        <div className="p-3 text-black lg:p-8 bg-[#EFE5D6] book-shadow">
          <div className="flex justify-start gap-10 md:justify-start md:gap-44 mb-1">
            <h2 className="text-base lg:text-xl font-bold ">Page 9</h2>
            <button
              onClick={goToContents}
              className=" px-2 py-1 bg-blue-500 text-white text-xs md:text-base rounded hover:bg-white hover:text-blue-500"
            >
              Back to index
            </button>
          </div>
          <hr className="border border-gray-400" />
          <p className="font-bold py-1">IPA(Phonetics)</p>
          <div className="">
            <div className="text-base">
              <p className="">
                ইংরেজিতে মোট ৪৪টি 20-Vowel & 24-Consonant sound রয়েছে। এই ৪৪টি
                সাউন্ড সঠিকভাবে উচ্চারণ শিখতে পারলে আমরাও ন্যাটিভদের মত শুদ্ধ ও
                স্মার্ট উচ্চারণে ইংরেজিতে কথা বলতে পারবো। <br />
                এই সাউন্ডগুলোর উচ্চারণ মূলতঃ IPA (International Phonetic
                Alphabet) দিয়ে লেখা হয়। IPA হচ্ছে সঠিকভাবে ইংরেজি উচ্চারণের
                আন্তর্জাতিক সিম্বল। IPA সিম্বলগুলো slash /-/ বন্ধনীর মাধ্যমে
                দেখানো হয়। যেমনঃ <br />
                A-/eɪ/, Day - /deɪ/, Good - /gud/ <br />
                আমি আপনাদেরকে পর্যায়ক্রমে ব্যাসিক থেকে IPA সিম্বল অনুযায়ী
                বিভিন্ন উদাহরণের মাধ্যমে আলোচনার চেষ্টা করবো। <br />
                Let's get started.
              </p>
            </div>
          </div>
        </div>

        {/* page 10 */}
        <div className="p-3 text-black lg:p-8 bg-[#EFE5D6] book-shadow">
          <div className="flex justify-start gap-10 md:justify-start md:gap-96 pb-1">
            <h2 className="text-base lg:text-xl font-bold ">Page 10</h2>
            <button
              onClick={goToContents}
              className=" px-2  bg-blue-500 text-white text-xs md:text-base rounded hover:bg-white hover:text-blue-500"
            >
              Back to index
            </button>
          </div>
          <hr className="border border-gray-400" />
          <div className="">
            <p className="font-bold pt-1"> IPA (Long Vowel) </p>

            <div className=" text-base lg:text-xl">
              <p className="text-base">
                প্রতিটি সিম্বলগুলো আয়ত্ব করে ফেলুন। কারণ, এ সিম্বলগুলো রপ্ত
                করলেই শব্দের সঠিক উচ্চারণ বের করতে সক্ষম হবেন। Please, watch the
                video!
              </p>
              <div className="flex justify-center pt-1">
                <table className="table-auto border-collapse border border-gray-400 shadow-md">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="border border-gray-400 px-2 lg:px-8 py-1 font-bold text-orange-300">
                        IPA
                      </th>
                      <th className="border border-gray-400 px-2 lg:px-8 py-1 font-bold">
                        B.P.
                      </th>
                      <th className="border border-gray-400 px-2 lg:px-8 py-1 font-bold text-orange-300">
                        Word
                      </th>
                      <th className="border border-gray-400 px-2 lg:px-8 py-1 font-bold text-orange-300">
                        IPA
                      </th>
                      <th className="border border-gray-400 px-2 lg:px-8 py-1 font-bold">
                        B.P.W.
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-400 px-2 lg:px-8 py-1">
                        /uː/
                      </td>
                      <td className="border border-gray-400 px-2 lg:px-8 py-1">
                        ঊ:
                      </td>
                      <td className="border border-gray-400 px-2 lg:px-8 py-1">
                        food
                      </td>
                      <td className="border border-gray-400 px-2 lg:px-8 py-1">
                        /fuːd/
                      </td>
                      <td className="border border-gray-400 px-2 lg:px-8 py-1">
                        ফু:ড
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 px-2 lg:px-8 py-1">
                        /iː/
                      </td>
                      <td className="border border-gray-400 px-2 lg:px-8 py-1">
                        ঈ:
                      </td>
                      <td className="border border-gray-400 px-2 lg:px-8 py-1">
                        see
                      </td>
                      <td className="border border-gray-400 px-2 lg:px-8 py-1">
                        /siː/
                      </td>
                      <td className="border border-gray-400 px-2 lg:px-8 py-1">
                        সী
                      </td>
                    </tr>

                    <tr>
                      <td className="border border-gray-400 px-2 lg:px-8 py-1">
                        /ɔː/
                      </td>
                      <td className="border border-gray-400 px-2 lg:px-8 py-1">
                        ও:
                      </td>
                      <td className="border border-gray-400 px-2 lg:px-8 py-1">
                        Board
                      </td>
                      <td className="border border-gray-400 px-2 lg:px-8 py-1">
                        /bɔːrd/
                      </td>
                      <td className="border border-gray-400 px-2 lg:px-8 py-1">
                        বোর্ড
                      </td>
                    </tr>

                    <tr>
                      <td className="border border-gray-400 px-2 lg:px-8 py-1">
                        /ɜ:/
                      </td>
                      <td className="border border-gray-400 px-2 lg:px-8 py-1">
                        আ:
                      </td>
                      <td className="border border-gray-400 px-2 lg:px-8 py-1">
                        Bird
                      </td>
                      <td className="border border-gray-400 px-2 lg:px-8 py-1">
                        /ɜ:rd/
                      </td>
                      <td className="border border-gray-400 px-2 lg:px-8 py-1">
                        বার্ড
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 px-2 lg:px-8 py-1">
                        /ɑː/
                      </td>
                      <td className="border border-gray-400 px-2 lg:px-8 py-1">
                        আ:
                      </td>
                      <td className="border border-gray-400 px-2 lg:px-8 py-1">
                        car
                      </td>
                      <td className="border border-gray-400 px-2 lg:px-8 py-1">
                        /kɑː/
                      </td>
                      <td className="border border-gray-400 px-2 lg:px-8 py-1">
                        কার
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="max-w-fit mx-auto p-2 text-center border-2 border-blue-500 mt-3 rounded-md">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://youtu.be/Aecgq7-9GmI?si=qBUnctb6aVKCwAly"
                >
                  click here to listen to video
                </a>
              </div>
              <div className="max-w-fit mx-auto p-2 text-center border-2 border-blue-500 mt-1 rounded-md">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://youtu.be/eERkHcLpxa8?si=LYByk1W1OsDnL7Bi"
                >
                  click here to listen to video
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* page 11 */}
        <div className="p-3 text-black lg:p-8 bg-[#EFE5D6] book-shadow">
          <div className="flex justify-start gap-10 md:justify-start md:gap-96 pb-1">
            <h2 className="text-base lg:text-xl font-bold ">Page 11</h2>
            <button
              onClick={goToContents}
              className=" px-2 py-1 bg-blue-500 text-white text-base rounded hover:bg-white hover:text-blue-500"
            >
              Back to index
            </button>
          </div>
          <hr className="border border-gray-400" />
          <div className="">
            <p className="font-bold py-1"> IPA (short Vowel) </p>

            <div className="text-base">
              <p className="text-sm">
                প্রতিটি সিম্বলগুলো আয়ত্ব করে ফেলুন। কারণ, এ সিম্বলগুলো রপ্ত
                করলেই শব্দের সঠিক উচ্চারণ বের করতে সক্ষম হবেন। Please, listen to
                video for correct pronunciation.
              </p>
              <div className="flex justify-center items-center  pt-1">
                <table className="table-auto border-collapse border border-gray-400 shadow-md">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="border border-gray-400 px-2 lg:px-8 py-1 font-bold text-orange-300">
                        IPA
                      </th>
                      <th className="border border-gray-400 px-2 lg:px-8 py-1 font-bold">
                        B.P.
                      </th>
                      <th className="border border-gray-400 px-2 lg:px-8 py-1 font-bold text-orange-300">
                        Word
                      </th>
                      <th className="border border-gray-400 px-2 lg:px-8 py-1 font-bold text-orange-300">
                        IPA
                      </th>
                      <th className="border border-gray-400 px-2 lg:px-8 py-1 font-bold">
                        B.P.W.
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-400 px-2 lg:px-8 py-1">
                        /ɪ/
                      </td>
                      <td className="border border-gray-400 px-2 lg:px-8 py-1">
                        ই
                      </td>
                      <td className="border border-gray-400 px-2 lg:px-8 py-1">
                        sit
                      </td>
                      <td className="border border-gray-400 px-2 lg:px-8 py-1">
                        /sɪt/
                      </td>
                      <td className="border border-gray-400 px-2 lg:px-8 py-1">
                        সিট
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 px-2 lg:px-8 py-1">
                        /ə/
                      </td>
                      <td className="border border-gray-400 px-2 lg:px-8 py-1">
                        আ
                      </td>
                      <td className="border border-gray-400 px-2 lg:px-8 py-1">
                        about
                      </td>
                      <td className="border border-gray-400 px-2 lg:px-8 py-1">
                        /əˈbaʊt/
                      </td>
                      <td className="border border-gray-400 px-2 lg:px-8 py-1">
                        আ'বাউট
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 px-2 lg:px-8 py-1">
                        /æ/
                      </td>
                      <td className="border border-gray-400 px-2 lg:px-8 py-1">
                        এ্যা
                      </td>
                      <td className="border border-gray-400 px-2 lg:px-8 py-1">
                        cat
                      </td>
                      <td className="border border-gray-400 px-2 lg:px-8 py-1">
                        /kæt/
                      </td>
                      <td className="border border-gray-400 px-2 lg:px-8 py-1">
                        ক্যাট
                      </td>
                    </tr>

                    <tr>
                      <td className="border border-gray-400 px-2 lg:px-8 py-1">
                        /ʌ/
                      </td>
                      <td className="border border-gray-400 px-2 lg:px-8 py-1">
                        আ
                      </td>
                      <td className="border border-gray-400 px-2 lg:px-8 py-1">
                        cup
                      </td>
                      <td className="border border-gray-400 px-2 lg:px-8 py-1">
                        /kʌp/
                      </td>
                      <td className="border border-gray-400 px-2 lg:px-8 py-1">
                        কাপ
                      </td>
                    </tr>

                    <tr>
                      <td className="border border-gray-400 px-2 lg:px-8 py-1">
                        /ɒ/
                      </td>
                      <td className="border border-gray-400 px-2 lg:px-8 py-1">
                        অ
                      </td>
                      <td className="border border-gray-400 px-2 lg:px-8 py-1">
                        hot
                      </td>
                      <td className="border border-gray-400 px-2 lg:px-8 py-1">
                        /hɒt/
                      </td>
                      <td className="border border-gray-400 px-2 lg:px-8 py-1">
                        হট
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 px-2 lg:px-8 py-1">
                        /e/
                      </td>
                      <td className="border border-gray-400 px-2 lg:px-8 py-1">
                        এ
                      </td>
                      <td className="border border-gray-400 px-2 lg:px-8 py-1">
                        red
                      </td>
                      <td className="border border-gray-400 px-2 lg:px-8 py-1">
                        /red/
                      </td>
                      <td className="border border-gray-400 px-2 lg:px-8 py-1">
                        রেড
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 px-2 lg:px-8 py-1">
                        /ʊ/
                      </td>
                      <td className="border border-gray-400 px-2 lg:px-8 py-1">
                        উ
                      </td>
                      <td className="border border-gray-400 px-2 lg:px-8 py-1">
                        book
                      </td>
                      <td className="border border-gray-400 px-2 lg:px-8 py-1">
                        /bʊk/
                      </td>
                      <td className="border border-gray-400 px-2 lg:px-8 py-1">
                        বুক
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 px-2 lg:px-8 py-1">
                        /ɛ/
                      </td>
                      <td className="border border-gray-400 px-2 lg:px-8 py-1">
                        এ
                      </td>
                      <td className="border border-gray-400 px-2 lg:px-8 py-1">
                        bed
                      </td>
                      <td className="border border-gray-400 px-2 lg:px-8 py-1">
                        /bɛd/
                      </td>
                      <td className="border border-gray-400 px-2 lg:px-8 py-1">
                        বেড
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* page 12 IPA (Consonant-1)*/}
        <div className="p-3 text-black md:p- bg-[#EFE5D6] book-shadow">
          <div className="flex justify-start gap-10 md:justify-start md:gap-96 mb-1">
            <h2 className="text-base lg:text-xl font-bold ">Page 12</h2>
            <button
              onClick={goToContents}
              className=" px-2 bg-blue-500 text-white text-xs md:text-base rounded hover:bg-white hover:text-blue-500"
            >
              Back to index
            </button>
          </div>
          <hr className="border border-gray-400" />
          <div className="">
            <p className="font-bold"> IPA (Consonant-1) </p>
            <div className="text-base">
              <div className="">
                <p className="text-sm md:text-base">
                  এ সিম্বলগুলো রপ্ত করলেই শব্দের সঠিক উচ্চারণ বের করতে সক্ষম
                  হবেন। Please, watch the video!
                </p>
                <div className="flex items-center justify-center">
                  <table className="table-auto border-collapse border border-gray-400 shadow-md">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="border border-gray-400 px-2 lg:px-8 py-1 font-bold text-orange-300">
                          IPA
                        </th>
                        <th className="border border-gray-400 px-2 lg:px-8 py-1 font-bold">
                          Bangla
                        </th>
                        <th className="border border-gray-400 px-2 lg:px-8 py-1 font-bold text-orange-300">
                          Word
                        </th>
                        <th className="border border-gray-400 px-2 lg:px-8 py-1 font-bold text-orange-300">
                          IPA
                        </th>
                        <th className="border border-gray-400 px-2 lg:px-8 py-1 font-bold">
                          Bangla
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-400 px-2 lg:px-8 py-1">
                          /θ/
                        </td>
                        <td className="border border-gray-400 px-2 lg:px-8 py-1">
                          থ (th)
                        </td>
                        <td className="border border-gray-400 px-2 lg:px-8 py-1">
                          think
                        </td>
                        <td className="border border-gray-400 px-2 lg:px-8 py-1">
                          /θɪŋk/
                        </td>
                        <td className="border border-gray-400 px-2 lg:px-8 py-1">
                          থিঙ্ক
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-400 px-2 lg:px-8 py-1">
                          /ð/
                        </td>
                        <td className="border border-gray-400 px-2 lg:px-8 py-1">
                          দ (dh)
                        </td>
                        <td className="border border-gray-400 px-2 lg:px-8 py-1">
                          this
                        </td>
                        <td className="border border-gray-400 px-2 lg:px-8 py-1">
                          /ðɪs/
                        </td>
                        <td className="border border-gray-400 px-2 lg:px-8 py-1">
                          দিস
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-400 px-2 lg:px-8 py-1">
                          /s/
                        </td>
                        <td className="border border-gray-400 px-2 lg:px-8 py-1">
                          স (s)
                        </td>
                        <td className="border border-gray-400 px-2 lg:px-8 py-1">
                          sun
                        </td>
                        <td className="border border-gray-400 px-2 lg:px-8 py-1">
                          /sʌn/
                        </td>
                        <td className="border border-gray-400 px-2 lg:px-8 py-1">
                          সান
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-400 px-2 lg:px-8 py-1">
                          /z/
                        </td>
                        <td className="border border-gray-400 px-2 lg:px-8 py-1">
                          য (z)
                        </td>
                        <td className="border border-gray-400 px-2 lg:px-8 py-1">
                          zoo
                        </td>
                        <td className="border border-gray-400 px-2 lg:px-8 py-1">
                          /zuː/
                        </td>
                        <td className="border border-gray-400 px-2 lg:px-8 py-1">
                          জু
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-400 px-2 lg:px-8 py-1">
                          /ʃ/
                        </td>
                        <td className="border border-gray-400 px-2 lg:px-8 py-1">
                          শ (sh)
                        </td>
                        <td className="border border-gray-400 px-2 lg:px-8 py-1">
                          she
                        </td>
                        <td className="border border-gray-400 px-2 lg:px-8 py-1">
                          /ʃiː/
                        </td>
                        <td className="border border-gray-400 px-2 lg:px-8 py-1">
                          শি
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-400 px-2 lg:px-8 py-1">
                          /ʒ/
                        </td>
                        <td className="border border-gray-400 px-2 lg:px-8 py-1">
                          ঝ (zh)
                        </td>
                        <td className="border border-gray-400 px-2 lg:px-8 py-1">
                          vision
                        </td>
                        <td className="border border-gray-400 px-2 lg:px-8 py-1">
                          /ˈvɪʒən/
                        </td>
                        <td className="border border-gray-400 px-2 lg:px-8 py-1">
                          ভিঝন
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-400 px-2 lg:px-8 py-1">
                          /tʃ/
                        </td>
                        <td className="border border-gray-400 px-2 lg:px-8 py-1">
                          চ (ch)
                        </td>
                        <td className="border border-gray-400 px-2 lg:px-8 py-1">
                          chair
                        </td>
                        <td className="border border-gray-400 px-2 lg:px-8 py-1">
                          /tʃeə/
                        </td>
                        <td className="border border-gray-400 px-2 lg:px-8 py-1">
                          চেয়ার
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-400 px-2 lg:px-8 py-1">
                          /dʒ/
                        </td>
                        <td className="border border-gray-400 px-2 lg:px-8 py-1">
                          জ (j)
                        </td>
                        <td className="border border-gray-400 px-2 lg:px-8 py-1">
                          job
                        </td>
                        <td className="border border-gray-400 px-2 lg:px-8 py-1">
                          /dʒɒb/
                        </td>
                        <td className="border border-gray-400 px-2 lg:px-8 py-1">
                          জব
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="max-w-fit mx-auto px-2 py-1 text-center border-2 border-blue-500 mt-2 rounded-md">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://youtu.be/eERkHcLpxa8?si=Gef6coKD_eRVsbbZ"
              >
                click here to listen to Video
              </a>
            </div>
          </div>
        </div>

        {/* page 13 IPA Consonant-2 */}
        <div className="p-3 text-black bg-[#EFE5D6] book-shadow">
          <div className="flex justify-start gap-10 md:justify-start md:gap-44 mb-1">
            <h2 className="text-base lg:text-xl font-bold ">Page 13</h2>
            <button
              onClick={goToContents}
              className=" px-2 bg-blue-500 text-white text-xs md:text-base rounded hover:bg-white hover:text-blue-500"
            >
              Back to index
            </button>
          </div>
          <hr className="border border-gray-400" />
          <div className="text-base">
            <p className="font-bold"> IPA(Consonant-2) </p>
            <div className="">
              <p className="text-xs md:text-base lg:text-xl">
                এ সিম্বলগুলো রপ্ত করলেই শব্দের সঠিক উচ্চারণ বের করতে সক্ষম হবেন।
                Watch the video for correction.
              </p>
              <div className="flex justify-center">
                <div className="flex md:flex-row gap-3">
                  <table className="table-auto border-collapse border border-gray-400 shadow-md ">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="border border-gray-400 px-2 lg:px-8 lg:py-1 font-bold text-orange-300">
                          IPA
                        </th>
                        <th className="border border-gray-400 px-2 lg:px-8 lg:py-1 font-bold">
                          Bangla
                        </th>
                        <th className="border border-gray-400 px-2 lg:px-8 lg:py-1 font-bold text-orange-300">
                          Word
                        </th>
                        <th className="border border-gray-400 px-2 lg:px-8 lg:py-1 font-bold text-orange-300">
                          IPA
                        </th>
                        <th className="border border-gray-400 px-2 lg:px-8 lg:py-1 font-bold">
                          Bangla
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-400 px-2 lg:px-8 py-1">
                          /h/
                        </td>
                        <td className="border border-gray-400 px-2 lg:px-8 py-1">
                          হ (h)
                        </td>
                        <td className="border border-gray-400 px-2 lg:px-8 py-1">
                          hat
                        </td>
                        <td className="border border-gray-400 px-2 lg:px-8 py-1">
                          /hæt/
                        </td>
                        <td className="border border-gray-400 px-2 lg:px-8 py-1">
                          হ্যাট
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-400 px-2 lg:px-8 py-1">
                          /p/
                        </td>
                        <td className="border border-gray-400 px-2 lg:px-8 py-1">
                          ফ (p)
                        </td>
                        <td className="border border-gray-400 px-2 lg:px-8 py-1">
                          pen
                        </td>
                        <td className="border border-gray-400 px-2 lg:px-8 py-1">
                          /pen/
                        </td>
                        <td className="border border-gray-400 px-2 lg:px-8 py-1">
                          ফেন
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-400 px-2 lg:px-8 py-1">
                          /b/
                        </td>
                        <td className="border border-gray-400 px-2 lg:px-8 py-1">
                          ব (b)
                        </td>
                        <td className="border border-gray-400 px-2 lg:px-8 py-1">
                          bat
                        </td>
                        <td className="border border-gray-400 px-2 lg:px-8 py-1">
                          /bæt/
                        </td>
                        <td className="border border-gray-400 px-2 lg:px-8 py-1">
                          ব্যাট
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-400 px-2 lg:px-8 py-1">
                          /t/
                        </td>
                        <td className="border border-gray-400 px-2 lg:px-8 py-1">
                          ঠ (t)
                        </td>
                        <td className="border border-gray-400 px-2 lg:px-8 py-1">
                          top
                        </td>
                        <td className="border border-gray-400 px-2 lg:px-8 py-1">
                          /tɒp/
                        </td>
                        <td className="border border-gray-400 px-2 lg:px-8 py-1">
                          ঠপ
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-400 px-2 lg:px-8 py-1">
                          /d/
                        </td>
                        <td className="border border-gray-400 px-2 lg:px-8 py-1">
                          ড (d)
                        </td>
                        <td className="border border-gray-400 px-2 lg:px-8 py-1">
                          dog
                        </td>
                        <td className="border border-gray-400 px-2 lg:px-8 py-1">
                          /dɒɡ/
                        </td>
                        <td className="border border-gray-400 px-2 lg:px-8 py-1">
                          ডগ
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-400 px-2 lg:px-8 py-1">
                          /k/
                        </td>
                        <td className="border border-gray-400 px-2 lg:px-8 py-1">
                          খ (k)
                        </td>
                        <td className="border border-gray-400 px-2 lg:px-8 py-1">
                          cat
                        </td>
                        <td className="border border-gray-400 px-2 lg:px-8 py-1">
                          /kæt/
                        </td>
                        <td className="border border-gray-400 px-2 lg:px-8 py-1">
                          খ্যাট
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-400 px-2 lg:px-8 py-1">
                          /j/
                        </td>
                        <td className="border border-gray-400 px-2 lg:px-8 py-1">
                          ই<sup>অ</sup>
                        </td>
                        <td className="border border-gray-400 px-2 lg:px-8 py-1">
                          yes
                        </td>
                        <td className="border border-gray-400 px-2 lg:px-8 py-1">
                          /jes/
                        </td>
                        <td className="border border-gray-400 px-2 lg:px-8 py-1">
                          ইয়েস
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-400 px-2 lg:px-8 py-1">
                          /w/
                        </td>
                        <td className="border border-gray-400 px-2 lg:px-8 py-1">
                          ও<sup>আ</sup>
                        </td>
                        <td className="border border-gray-400 px-2 lg:px-8 py-1">
                          we
                        </td>
                        <td className="border border-gray-400 px-2 lg:px-8 py-1">
                          /wiː/
                        </td>
                        <td className="border border-gray-400 px-2 lg:px-8 py-1">
                          উই
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-fit mx-auto p-2 text-center border-2 border-blue-500 mt-2 rounded-md">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://youtu.be/eERkHcLpxa8?si=Gef6coKD_eRVsbbZ"
            >
              click here to listen to audio
            </a>
          </div>
        </div>

        {/* page 14   IPA (Consonant-3)*/}
        <div className="p-3 text-black md:p- bg-[#EFE5D6] book-shadow">
          <div className="flex justify-start gap-10 md:justify-start md:gap-96 mb-1">
            <h2 className="text-base lg:text-xl font-bold ">Page 14</h2>
            <button
              onClick={goToContents}
              className=" px-2 bg-blue-500 text-white text-xs md:text-base rounded hover:bg-white hover:text-blue-500"
            >
              Back to index
            </button>
          </div>
          <hr className="border border-gray-400" />
          <div className="">
            <p className="font-bold"> IPA (Consonant-3) </p>
            <div className="text-base">
              <p className="text-sm md:text-base">
                এ সিম্বলগুলো রপ্ত করলেই শব্দের সঠিক উচ্চারণ বের করতে সক্ষম হবেন।
                See the video for correction!
              </p>
              <div className="flex justify-center items-center">
                <div className="flex md:flex-row gap-3">
                  {/* Right Table */}
                  <table className="table-auto border-collapse border border-gray-400 shadow-md">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="border border-gray-400 px-2 lg:px-8 py-1 font-bold text-orange-300">
                          IPA
                        </th>
                        <th className="border border-gray-400 px-2 lg:px-8 py-1 font-bold">
                          Bangla
                        </th>
                        <th className="border border-gray-400 px-2 lg:px-8 py-1 font-bold text-orange-300">
                          Word
                        </th>
                        <th className="border border-gray-400 px-2 lg:px-8 py-1 font-bold text-orange-300">
                          IPA
                        </th>
                        <th className="border border-gray-400 px-2 lg:px-8 py-1 font-bold">
                          Bangla
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-400 px-2 lg:px-8 py-1">
                          /ŋ/
                        </td>
                        <td className="border border-gray-400 px-2 lg:px-8 py-1">
                          ঙ (ng)
                        </td>
                        <td className="border border-gray-400 px-2 lg:px-8 py-1">
                          sing
                        </td>
                        <td className="border border-gray-400 px-2 lg:px-8 py-1">
                          /sɪŋ/
                        </td>
                        <td className="border border-gray-400 px-2 lg:px-8 py-1">
                          সিং
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-400 px-2 lg:px-8 py-1">
                          /l/
                        </td>
                        <td className="border border-gray-400 px-2 lg:px-8 py-1">
                          ল (l)
                        </td>
                        <td className="border border-gray-400 px-2 lg:px-8 py-1">
                          lip
                        </td>
                        <td className="border border-gray-400 px-2 lg:px-8 py-1">
                          /lɪp/
                        </td>
                        <td className="border border-gray-400 px-2 lg:px-8 py-1">
                          লিপ
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-400 px-2 lg:px-8 py-1">
                          /m/
                        </td>
                        <td className="border border-gray-400 px-2 lg:px-8 py-1">
                          ম (m)
                        </td>
                        <td className="border border-gray-400 px-2 lg:px-8 py-1">
                          man
                        </td>
                        <td className="border border-gray-400 px-2 lg:px-8 py-1">
                          /mæn/
                        </td>
                        <td className="border border-gray-400 px-2 lg:px-8 py-1">
                          ম্যান
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-400 px-2 lg:px-8 py-1">
                          /n/
                        </td>
                        <td className="border border-gray-400 px-2 lg:px-8 py-1">
                          ন (n)
                        </td>
                        <td className="border border-gray-400 px-2 lg:px-8 py-1">
                          net
                        </td>
                        <td className="border border-gray-400 px-2 lg:px-8 py-1">
                          /net/
                        </td>
                        <td className="border border-gray-400 px-2 lg:px-8 py-1">
                          নেট
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-400 px-2 lg:px-8 py-1">
                          /g/
                        </td>
                        <td className="border border-gray-400 px-2 lg:px-8 py-1">
                          গ (g)
                        </td>
                        <td className="border border-gray-400 px-2 lg:px-8 py-1">
                          go
                        </td>
                        <td className="border border-gray-400 px-2 lg:px-8 py-1">
                          /ɡoʊ/
                        </td>
                        <td className="border border-gray-400 px-2 lg:px-8 py-1">
                          গৌ
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-400 px-2 lg:px-8 py-1">
                          /f/
                        </td>
                        <td className="border border-gray-400 px-2 lg:px-8 py-1">
                          ফ (f)
                        </td>
                        <td className="border border-gray-400 px-2 lg:px-8 py-1">
                          fan
                        </td>
                        <td className="border border-gray-400 px-2 lg:px-8 py-1">
                          /fæn/
                        </td>
                        <td className="border border-gray-400 px-2 lg:px-8 py-1">
                          ফ্যান
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-400 px-2 lg:px-8 py-1">
                          /r/
                        </td>
                        <td className="border border-gray-400 px-2 lg:px-8 py-1">
                          র (r)
                        </td>
                        <td className="border border-gray-400 px-2 lg:px-8 py-1">
                          red
                        </td>
                        <td className="border border-gray-400 px-2 lg:px-8 py-1">
                          /red/
                        </td>
                        <td className="border border-gray-400 px-2 lg:px-8 py-1">
                          রেড
                        </td>
                      </tr>
                      <tr>
                        <td className="border border-gray-400 px-2 lg:px-8 py-1">
                          /v/
                        </td>
                        <td className="border border-gray-400 px-2 lg:px-8 py-1">
                          ভ (v)
                        </td>
                        <td className="border border-gray-400 px-2 lg:px-8 py-1">
                          van
                        </td>
                        <td className="border border-gray-400 px-2 lg:px-8 py-1">
                          /væn/
                        </td>
                        <td className="border border-gray-400 px-2 lg:px-8 py-1">
                          ভ্যান
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="max-w-fit mx-auto p-2 text-center border-2 border-blue-500 mt-2 rounded-md">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://youtu.be/eERkHcLpxa8?si=Gef6coKD_eRVsbbZ"
              >
                click here to listen to audio
              </a>
            </div>
          </div>
        </div>

        {/* page 15 IPA (Diphthongs) */}
        <div className="p-3 text-black bg-[#EFE5D6] book-shadow">
          <div className="flex justify-start gap-10 md:justify-start md:gap-44 pb-1">
            <h2 className="text-base lg:text-xl font-bold ">Page 15</h2>
            <button
              onClick={goToContents}
              className=" px-2 bg-blue-500 text-white text-xs md:text-base rounded hover:bg-white hover:text-blue-500"
            >
              Back to index
            </button>
          </div>
          <hr className="border border-gray-400" />
          <div className="">
            <p className="font-bold"> IPA (Diphthongs) </p>
            <div className="">
              <p className="text-sm md:text-base">
                দুটি vowel সিম্বল একত্রে হলে তাকে Diphthongs বলা হয়। এ ক্ষেত্রে
                দ্বিতীয় ধ্বনিটি খুবই মৃদুভাবে উচ্চারণ করতে হয়।
              </p>
            </div>
            <div className="text-base lg:text-xl">
              <div className="flex justify-center items-center ">
                <table className="table-auto border-collapse border border-gray-400 shadow-lg">
                  <thead className="bg-gray-200">
                    <tr>
                      <th className="border border-gray-400 px-4 py-1">IPA</th>
                      <th className="border border-gray-400 px-4 py-1">
                        উচ্চারণ
                      </th>
                      <th className="border border-gray-400 px-4 py-1">Word</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-400 px-4 py-1">/eɪ/</td>
                      <td className="border border-gray-400 px-4 py-1">
                        এ<sup>ই</sup>
                      </td>
                      <td className="border border-gray-400 px-4 py-1">
                        Able (এইবল)
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 px-4 py-1">/aɪ/</td>
                      <td className="border border-gray-400 px-4 py-1">
                        আ<sup>ই</sup>
                      </td>
                      <td className="border border-gray-400 px-4 py-1">
                        buy (বাই)
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 px-4 py-1">/ɪə/</td>
                      <td className="border border-gray-400 px-4 py-1">
                        ই<sup>য়া</sup>
                      </td>
                      <td className="border border-gray-400 px-4 py-1">
                        Deer (ডিয়া(র))
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 px-4 py-1">/eə/</td>
                      <td className="border border-gray-400 px-4 py-1">
                        এ<sup>আ</sup>
                      </td>
                      <td className="border border-gray-400 px-4 py-1">
                        Hair (হিয়া(র))
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 px-4 py-1">/ɔɪ/</td>
                      <td className="border border-gray-400 px-4 py-1">
                        অ<sup>ই</sup>
                      </td>
                      <td className="border border-gray-400 px-4 py-1">
                        Toy (ঠই)
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 px-4 py-1">/ʊə/</td>
                      <td className="border border-gray-400 px-4 py-1">
                        উ<sup>আ</sup>
                      </td>
                      <td className="border border-gray-400 px-4 py-1">
                        Sure (শুয়া(র))
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 px-4 py-1">/aʊ/</td>
                      <td className="border border-gray-400 px-4 py-1">
                        আ<sup>উ</sup>
                      </td>
                      <td className="border border-gray-400 px-4 py-1">
                        Now (নাউ)
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-400 px-4 py-1">/əʊ/</td>
                      <td className="border border-gray-400 px-4 py-1">
                        অ<sup>উ</sup>
                      </td>
                      <td className="border border-gray-400 px-4 py-1">
                        So (সৌ)
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="max-w-fit mx-auto p-2 text-center border-2 border-blue-500 mt-2 rounded-md">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://youtu.be/LekE44y2Ol4?si=OTdw58ie0GJdszW-"
                >
                  click here to listen to video
                </a>
              </div>

              {/* <p className="pt-1 heading2 text-center">ASM English Academy</p> */}
            </div>
          </div>
        </div>

        {/* page 16 Article */}
        <div className="p-3 text-black lg:p-5 bg-[#EFE5D6] book-shadow">
          <div className="flex justify-start gap-16 md:justify-start md:gap-96 mb-1">
            <h2 className="text-base lg:text-xl font-bold ">Page 16</h2>
            <button
              onClick={goToContents}
              className=" px-2 py-1 bg-blue-500 text-white text-xs md:text-base rounded hover:bg-blue-600"
            >
              ⬅ Back to index
            </button>
          </div>
          <div className="">
            <p className="font-bold">Article - the</p>
            <p className="font- pt-1">কখন “দা” এবং কখন "দি” হবেঃ</p>
            <div className="text-base">
              <p className="">
                সূত্রঃ "দাদির CV" <br />
                দা = C (Consonant) <br />
                দি = V (Vowel) <br />
                ➡️ The এর পর যদি Vowel sound থাকে তবে এর উচ্চারণ 'দি' এর মতো
                হবে। যেমন: <br />
                The egg = দি এগ <br />
                The apple = দি অ্যাপল <br />
                {/* The honest boy = দি অনিষ্ট বয় <br />  */}
                ✨ The এর পর যদি Consonant sound থাকে তবে এর উচ্চারণ 'দা' এর মতো
                হবে। <br />
                যেমন: <br />
                {/* The ball = দা বল <br /> */}
                The holy Quran = দা হৌলি কুরআন <br />
                The country = দা খানট্টি <br />
                {/* The book = দা বুক <br /> */}
              </p>
            </div>

            <div className="max-w-fit mx-auto p-2 text-center border-2 border-blue-500 mt-2 rounded-md">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://drive.google.com/file/d/1wNFA9PX1hZHnGlXZy9R8p4HL5LC2xW02/view?usp=sharing"
              >
                click here to listen to audio
              </a>
            </div>
          </div>
        </div>

        {/* page 17 Article */}
        <div className="p-3 text-black lg:p-14 bg-[#EFE5D6] book-shadow">
          <div className="flex justify-start gap-16 md:justify-start md:gap-96 mb-2">
            <h2 className="text-base lg:text-xl font-bold ">Page 17</h2>
            <button
              onClick={goToContents}
              className=" px-2 py-1 bg-blue-500 text-white text-xs md:text-base rounded hover:bg-blue-600"
            >
              ⬅ Back to index
            </button>
          </div>
          <div className="">
            <p className="font-bold">Article - a</p>
            <div className="">
              <p className="text-base">
                'a' যখন article হিসেবে ব্যবহৃত হবে তখন 'a' এর উচ্চারণ //ə/ -
                [আ/অ্য] হবে এবং [আ] ধ্বনিটি পরের শব্দের সাথে একসাথে উচ্চারিত
                হবে। এই দু'টি উচ্চারণের মধ্যে তেমন কোন পার্থক্য নেই। <br />
                যেমনঃ <br />
                a pen [আ'পেন] ('এ পেন' নয়) <br />
                a book [আ'বুক] ('এ বুক' নয়) <br /> <br />
                /ə/ ধ্বনিটি একটি short neutral sound তাই স্বরটি ছোট বোঝাতে [আ]
                বা [অ্য] ধ্বনিটি একটু ছোট অক্ষরে প্রকাশ করা হয়েছে। <br />
              </p>
            </div>
          </div>
          <p className="font-bold text-center heading2 pt-5">
            ASM English Academy
          </p>
        </div>

        {/* page 18  Aspirated */}
        <div className="p-3 text-black lg:p-8 bg-[#EFE5D6] book-shadow">
          <div className="flex justify-start gap-16 md:justify-start md:gap-96 mb-1">
            <h2 className="text-base lg:text-xl font-bold ">Page 18</h2>
            <button
              onClick={goToContents}
              className=" px-2 py-1 bg-blue-500 text-white text-xs md:text-base rounded hover:bg-blue-600"
            >
              ⬅ Back to index
            </button>
          </div>
          <div className="text-base">
            <h2 className="font-bold">Aspirated Sound</h2>
            <div className="text-base">
              <p className="">
                Aspirated Sound মানে এগুলো উচ্চারণের সময় মুখ দিয়ে বেশি পরিমানে
                বাতাস বের হবে। যেমনঃ
                <br />
                /P/প, /T/ট, /K/ক এর মত উচ্চারণ না করে অনেকটা /P/ফ, /T/ঠ, /K/খ এর
                মত উচ্চারণ করাকে Aspirated Sound বলে। <br />
              </p>
            </div>
            <div className="">
              <p className="font-bold pt-2">কখন Aspirated হবে? </p>
              <div className="text-base">
                <span className="font-semibold">Rule -1</span> <br />
                'Word' এর শুরুতে 'p, t, k, c, q' থাকলে সেই Sound-গুলো 'ফ', 'ঠ' ও
                'খ' এর মত হয়ে থাকে। যেমনঃ <br />
                Pot - (ফট); Team - (ঠিম); kind -(খাইন্ড); <br />
                <span className="font-semibold">Rule - 2</span> <br />
                'S' এর পর 'p, t, k' থাকলে সেই Sound- টি Aspirated হবে না। এ
                ক্ষেত্রে বাংলা প, ট, ক এর মতই উচ্চারিত হবে। যেমনঃ <br />
              </div>
            </div>
          </div>
        </div>
        {/* page 19 Aspirated */}
        <div className="p-3 text-black lg:p-8 bg-[#EFE5D6] book-shadow">
          <div className="flex justify-start gap-10 md:justify-start md:gap-96 mb-1">
            <h2 className="text-base lg:text-xl font-bold ">Page 19</h2>
            <button
              onClick={goToContents}
              className=" px-2 py-1 bg-blue-500 text-white text-xs md:text-base rounded hover:bg-white hover:text-blue-500"
            >
              Back to index
            </button>
          </div>
          <hr className="border border-gray-400" />
          <div className="">
            <p className="font-bold">Aspirated Sound: </p>
            <div className="text-base">
              Stay - স্টেই; Basket - বাস্কিট; <br />
              <span className="font-semibold">Rule-3</span> <br />
              'Word' এর শেষে 'p, t, k, c, q' থাকলে সেই Sound-গুলো Aspirated হয়
              না। যেমনঃ <br />
              Clap = ক্ল্যাপ; Deep = ডিপ <br />
              <span className="font-semibold">Rule-4</span> <br />
              'Word' এর মাঝখানে যদি 'p, t, k' থাকে, যদি সেই 'p/t/k' উপর stress
              দেয়া হয়, তাহলে Sound-টি Aspirated হবে; আর যদি stress দেয়া না হয়,
              তাহলে Sound-টি Aspirated হবে না। যেমনঃ <br />
              appoint = অ'ফোইন্ট; Fatal = ফেই'ঠল; <br />
            </div>
            <p className="pt-1">
              Note: Aspirated অক্ষরের উচ্চারণ সঠিক হলে শুদ্ধ উচ্চারণের ৩০% সঠিক
              হয়ে যাবে।
            </p>
          </div>
        </div>

        {/* page 20 Aspirated */}
        <div className="p-3 text-black lg:p-8 bg-[#EFE5D6] book-shadow">
          <div className="flex justify-start gap-16 md:justify-start md:gap-96 mb-1">
            <h2 className="text-base lg:text-xl font-bold ">Page 20</h2>
            <button
              onClick={goToContents}
              className=" px-2 py-1 bg-blue-500 text-white text-xs md:text-base rounded hover:bg-blue-600"
            >
              ⬅ Back to index
            </button>
          </div>
          <div className="">
            <div className="max-w-fit mx-auto p-2 text-center border-2 border-blue-500 mt-3 rounded-md">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://youtu.be/ghkQoJoipbM?si=g7V9CByjXzcxOD0q"
              >
                Video-1
              </a>
            </div>
            <div className="max-w-fit mx-auto p-2 text-center border-2 border-blue-500 mt-3 rounded-md">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://youtu.be/tEFUNLFwPoM?si=lS2TOhd-A7gPTlDg"
              >
                Video-2
              </a>
            </div>
            <div className="max-w-fit mx-auto p-2 text-center border-2 border-blue-500 mt-3 rounded-md">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://youtu.be/tEFUNLFwPoM?si=lS2TOhd-A7gPTlDg"
              >
                Video-2
              </a>
            </div>
            <div className="max-w-fit mx-auto p-2 text-center border-2 border-blue-500 mt-3 rounded-md">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://youtu.be/N9qZFD1NkhI?si=pfJHHrc7wbe3ODj4"
              >
                Video-4
              </a>
            </div>
            <div className="max-w-fit mx-auto p-2 text-center border-2 border-blue-500 mt-3 rounded-md">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://youtu.be/mFXj-AGBtYo?si=TyI1qPy6KZzoo1gB"
              >
                Video-5
              </a>
            </div>
            <div className="max-w-fit mx-auto p-2 text-center border-2 border-blue-500 mt-3 rounded-md">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://youtu.be/UIJcutkljpM?si=yxO-fXy_zsYees4n"
              >
                Video-6
              </a>
            </div>
          </div>
          <p className="heading2 text-center pt-3">ASM English Academy</p>
        </div>

        {/* page 21 Aspirated */}
        <div className="p-3 text-black lg:p-8 bg-[#EFE5D6] book-shadow">
          <div className="flex justify-start gap-16 md:justify-start md:gap-96 mb-1">
            <h2 className="text-base lg:text-xl font-bold ">Page 21</h2>
            <button
              onClick={goToContents}
              className=" px-2 bg-blue-500 text-white text-xs md:text-base rounded hover:bg-blue-600"
            >
              ⬅ Back to index
            </button>
          </div>
          <div className="">
            <p className="font-bold">Example of Aspirated</p>
            <div className="flex justify-between text-base">
              <p className="text-base">
                Time = ঠাইম <br />
                Table = ঠেইবল <br />
                Talk = ঠোক <br />
                Today = ঠুডেই <br />
                Touch = ঠাচ <br />
                Tuition = ঠিউশন <br />
                Cat = খ্যাট <br />
                question = খোয়েশচন <br />
                Cute = খিউট <br />
              </p>
              <p className="">
                Country = খান্ট্রি <br />
                Caption = খ্যাপশন <br />
                Curious = খিউওরিয়াশ <br />
                kind = খাইন্ড <br />
                Kite = খাইট <br />
                king = খিং <br />
                queen = খুইন <br />
                quarrel = খুআরল <br />
                quarter = খুআটা
              </p>
            </div>
            <div className="">
              <div className="max-w-fit mx-auto p-2 text-center border-2 border-blue-500 mt-3 rounded-md">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="www.dictionary.cambridge.org"
                >
                  Cambridge Dictionary
                </a>
              </div>
            </div>
            <p className="pt-1">
              Note: Please, follow the link for correct pronunciation.
            </p>
          </div>
          <p className="heading2 text-center pt-1">ASM English Academy</p>
        </div>

        {/* page 22 Pronunciation of "R" */}
        <div className="p-3 text-black lg:p-8 bg-[#EFE5D6] book-shadow">
          <div className="flex justify-start gap-10 md:justify-start md:gap-96 mb-2">
            <h2 className="text-base lg:text-xl font-bold ">Page 22</h2>
            <button
              onClick={goToContents}
              className=" px-2 py-1 bg-blue-500 text-white text-xs md:text-base rounded hover:bg-white hover:text-blue-500"
            >
              Back to index
            </button>
          </div>
          <hr className="border border-gray-400" />
          <div className="">
            <h2 className="font-bold">"R" এর উচ্চারণ</h2>
            <div className="text-base">
              <p className="">
                ব্রিটিশরা কোথাও কোথাও 'R' এর উচ্চারণ করে; আবার কোথাও কোথাও 'R'
                এর উচ্চারণ করে না। আবার আমেরিকানরা সর্বদাই 'R' এর উচ্চারণ করতে
                অভ্যস্ত। <br />
                আমরা সবখানেই 'R' এর উচ্চারণ করে থাকি। তবে, ইংরেজি বলার সময়
                আমাদের এই দুই ধরনের উচ্চারণের মিশ্রণ সমীচীন নয়।
              </p>
              <p className="pt-2">
                <span className="font-bold">
                  ব্রিটিশরা 'R' যখন উচ্চারণ করে থাকেঃ{" "}
                </span>{" "}
                <br />
                <span className="font-bold">Rule-1 </span> <br />
                Word এর শুরুতে 'R'/ Vowel এর পূর্বে R থাকলে ব্রিটিশরা 'R' এর
                উচ্চারণ করে থাকে। যেমনঃ <br />
                Read = রিড <br />
                {/* Rice = রাইস <br /> */}
                Ring = রিং
              </p>
            </div>
          </div>
        </div>

        {/* page 23 Pronunciation of "R"*/}
        <div className="p-3 text-black lg:p-8 bg-[#EFE5D6] book-shadow">
          <div className="flex justify-start gap-10 md:justify-start md:gap-96 mb-1">
            <h2 className="text-base lg:text-xl font-bold ">Page 23</h2>
            <button
              onClick={goToContents}
              className=" px-2 py-1 bg-blue-500 text-white text-xs md:text-base rounded hover:bg-white hover:text-blue-500"
            >
              Back to index
            </button>
          </div>
          <hr className="border border-gray-400" />
          <div className="">
            <h3 className="font-semibold"> R এর উচ্চারণ: </h3>
            <div className="text-base">
              <p className="">
                Rule-2. <br />
                Word এর শুরুতে 'Wr' থাকলে ব্রিটিশরা 'R' এর উচ্চারণ করে থাকে।
                যেমনঃ <br />
                Write - রাইট; <br />
              </p>
              <p className="pt-2">
                <span className="font-bold">
                  ব্রিটিশরা 'R' যখন উচ্চারণ করে নাঃ
                </span>
                <br />
                Rule-1. <br />
                'word' এর শেষে 'R' থাকলে ব্রিটিশরা 'R' এর উচ্চারণ করে না। যেমনঃ
                <br />
                Brother = ব্রাদা; Teacher = ঠিচা; <br />
                Rule-2. <br />
                word এর শেষে 'Re' থাকলেও ব্রিটিশরা 'R' এর উচ্চারণ করে না। যেমনঃ
                <br />
                care = খ্যায়া; fare = ফ্যায়া; <br />
              </p>

              <h2 className="text-center pt-2 heading2">ASM English Academy</h2>
            </div>
          </div>
        </div>

        {/* page 24 Contraction */}
        <div className="p-3 text-black md:p-10 bg-[#EFE5D6] book-shadow">
          <div className="flex justify-start gap-10 md:justify-start md:gap-96 mb-2">
            <h2 className="text-base lg:text-xl font-bold ">Page 24</h2>
            <button
              onClick={goToContents}
              className=" px-2 py-1 bg-blue-500 text-white text-xs md:text-base rounded hover:bg-white hover:text-blue-500"
            >
              Back to index
            </button>
          </div>
          <hr className="border border-gray-400" />
          <div className="">
            <h2 className="font-bold">Contraction</h2>
            <div className="text-base">
              <div className="flex items-center justify-center  gap-2">
                Contraction হল Subject + Verb একত্রে উচ্চারণ করা। Spoken English
                এ এটি গুরুত্বপূর্ণ। Listen to audio for correct pronunciation.
              </div>
              {/* table */}
              <div className="">
                {/* <div className="overflow-x-auto px-3">
                <table className="table-auto border-collapse border border-gray-300 shadow-md w-full text-center">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="border border-gray-300 px-1 py-1 font-bold">
                        Short form
                      </th>
                      <th className="border border-gray-300 px-1 py-1 font-bold">
                        IPA
                      </th>
                      <th className="border border-gray-300 px-1 py-1 font-bold">
                        উচ্চারণ
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["I’m", "/aɪm/", "আইম"],
                      ["I’ve", "/aɪv/", "আইভ"],
                      ["I’d", "/aɪd/", "আইড"],
                      ["I’ll", "/aɪl/", "আইল"],
                      ["We’re", "/wɪə/", "উইআ"],
                      ["We’ve", "/wiːv/", "উইভ"],
                      ["We’d", "/wiːd/", "উইড"],
                      ["We’ll", "/wiːl/", "উইল"],
                      
                    ].map(([shortForm, ipa, bangla], index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="border border-gray-300 px-1 py-1">
                          {shortForm}
                        </td>
                        <td className="border border-gray-300 px-1 py-1">
                          {ipa}
                        </td>
                        <td className="border border-gray-300 px-1 py-1">
                          {bangla}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div> */}
              </div>

              <div className="pt-2">
                <p className="">
                  <span className="bg-pink-700 px-1 py-1 text-white font-bold">
                    Ain't{" "}
                  </span>
                  <span className="bg-black p-1 text-white font-bold">
                    /eɪnt/
                  </span>{" "}
                  = (short form of){" "}
                  <strong>am not, is not, are not, have not, has not: </strong>{" "}
                  <br />
                  He ain't going!
                </p>

                <p className="">
                  <span className="bg-pink-700 p-1 py-1 text-white font-bold">
                    Aren't{" "}
                  </span>
                  <span className="bg-black p-1 text-white font-bold">
                    /ɑːrnt/; UK- /ɑːnt/
                  </span>{" "}
                  = <strong>are not:</strong> The girls aren't reading
                  attentively.
                </p>
                <p className="py-2">
                  <span className="bg-pink-700 px-1 py-1 text-white font-bold">
                    Aren't{" "}
                  </span>
                  <span className="bg-black p-1 text-white font-bold">
                    /ɑːrnt/; UK- /ɑːnt/
                  </span>{" "}
                  = <strong>am not </strong> (in tag question?): I'm punctul,
                  aren't I?
                </p>
                <p className="">
                  <span className="bg-pink-700 px-1 py-1 text-white font-bold">
                    can't{" "}
                  </span>
                  <span className="bg-black p-1 text-white font-bold">
                    US - //kænt//; UK- /kɑːnt/
                  </span>{" "}
                  = <strong>can not: </strong> You can't say so.
                </p>
              </div>
            </div>
            <div className="flex justify-center gap-3">
              <div className="max-h-fit  p-2 border-2 border-blue-500  rounded-md">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://drive.google.com/file/d/17Nl8-9FrGmAYoJAsuitGCSxyH161Ln6g/view?usp=sharing"
                >
                  audio-1
                </a>
              </div>
              <div className="max-h-fit  p-2 border-2 border-blue-500  rounded-md">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://youtu.be/pI__6gL21Co?si=Gz-xV_pVWL1zdNEJ"
                >
                  audio-2
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* page 25 Contraction */}
        <div className="p-2 text-black md:p-10 bg-[#EFE5D6] book-shadow">
          <div className="flex justify-start gap-10 md:justify-start md:gap-96 mb-2">
            <p className="text-xl font-bold ">Page 25</p>
            <button
              onClick={goToContents}
              className=" px-2 py-1 bg-blue-500 text-white text-xs md:text-base rounded hover:bg-white hover:text-blue-500"
            >
              Back to index
            </button>
          </div>
          <hr className="border border-gray-400" />
          <div className="text-base">
            <h2 className="font-medium py-1">Contraction: </h2>
            {/* can't */}
            <p className="">
              <span className="bg-pink-700 px-1 py-1 text-white font-bold">
                can't{" "}
              </span>
              <span className="bg-black p-1 text-white font-bold">
                US- //kænt//; UK- /kɑːnt/
              </span>{" "}
              = <strong>can not:</strong> You can't say so.
            </p>
            {/* couoldn't */}
            <p className="">
              <span className="bg-pink-700 px-1 py-1 text-white font-bold">
                couldn't{" "}
              </span>
              <span className="bg-black p-1 text-white font-bold">
                /ˈkʊd.ənt/
              </span>{" "}
              = <strong>could not:</strong> She couldn't left her job!
            </p>
            {/* could've
             */}
            <p className="">
              <span className="bg-pink-700 px-1 py-1 text-white font-bold">
                could've{" "}
              </span>
              <span className="bg-black p-1 text-white font-bold">
                /ˈkʊd.əv/
              </span>{" "}
              = <strong>could have:</strong> If she came, I could've gone.
            </p>
            {/* don't
             */}
            <p className="">
              <span className="bg-pink-700 px-1 py-1 text-white font-bold">
                Don't{" "}
              </span>
              <span className="bg-black p-1 text-white font-bold">
                {" "}
                /dəʊnt/
              </span>{" "}
              = <strong>do not: </strong> Don't wory, let's start home work.
            </p>
            {/* Dunno */}

            <p className="">
              <span className="bg-pink-700 px-1 py-1 text-white font-bold">
                Dunno{" "}
              </span>
              <span className="bg-black p-1 text-white font-bold">
                {" "}
                UK- /dəˈnəʊ/; US- /dəˈnoʊ/
              </span>{" "}
              = <strong> I do not know: </strong> I dunno, Where is your
              sister?.
            </p>
            <p className="">
              <span className="bg-pink-700 px-1 py-1 text-white font-bold">
                C'mon{" "}
              </span>
              <span className="bg-black p-1 text-white font-bold">
                {" "}
                UK- /kəˈmɒn; US- /kəˈmɑːn/
              </span>{" "}
              = <span className="font-bold">do not:</span> C'mon! I see you are
              OK.
            </p>
            <div className="max-w-fit px-2  py-1 border-2 border-blue-500  rounded-md">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.youtube.com/@BBCNews"
              >
                BBC NEWs
              </a>
            </div>
            {/* table */}
            <div className="">
              {/* <div className="text-base">
                      <div className="overflow-x-auto p-1 px-3">
                        <table className="table-auto border-collapse border border-gray-300 shadow-md w-full text-center">
                          <thead className="bg-gray-100">
                            <tr>
                              <th className="border border-gray-300 px-1 py-1 font-bold">
                                Short form
                              </th>
                              <th className="border border-gray-300 px-1 py-1 font-bold">
                                IPA
                              </th>
                              <th className="border border-gray-300 px-1 py-1 font-bold">
                                উচ্চারণ
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {[
                              ["You’re", "/jʊə/", "ইউআ"],
                              ["You’ve", "/juːv/", "ইউভ"],
                              ["You’d", "/juːd/", "ইউড"],
                              ["Don’t", "/dəʊnt/", "ডোন্ট"],
                              ["Doesn’t", "/dʌznt/", "ডাজন্"],
                              ["Didn’t", "/dɪdnt/", "ডিডন্"],
                              ["Shouldn’t", "/ˈʃʊdnt/", "শুডন্"],
                              ["Won’t", "/wəʊnt/", "উওন্"],
                              ["Wouldn’t", "/wʊdnt/", "উডন্"],
                              
                            ].map(([shortForm, ipa, bangla], index) => (
                              <tr key={index} className="hover:bg-gray-50">
                                <td className="border border-gray-300 px-1 py-1">
                                  {shortForm}
                                </td>
                                <td className="border border-gray-300 px-1 py-1">
                                  {ipa}
                                </td>
                                <td className="border border-gray-300 px-1 py-1">
                                  {bangla}
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div> */}
            </div>
          </div>
        </div>

        {/* page 26 Verb Contraction */}
        <div className="p-3 text-black md:p-10 bg-[#EFE5D6] book-shadow">
          <div className="flex justify-start gap-10 md:justify-start md:gap-96 mb-1">
            <h2 className="text-xl font-bold ">Page 26</h2>
            <button
              onClick={goToContents}
              className=" px-2 py-1 bg-blue-500 text-white text-xs md:text-base rounded hover:bg-white hover:text-blue-500"
            >
              Back to index
            </button>
          </div>
          <hr className="border border-gray-400" />
          <div className="">
            <h3 className="font-bold">Contraction: </h3>

            <div className="text-base">
              <div className="">
                {/* item */}
                <div>
                  <div className="flex items-center space-x-1">
                    <span className="bg-red-600 text-white px-2 py-1 rounded">
                      'd
                    </span>
                    <span className="bg-gray-800 text-white px-2 py-1 rounded">
                      /əd/
                    </span>
                    <span className="text-black font-bold"> = would:</span>
                  </div>
                  <p className="italic text-black ml-2 mt-1">
                    I asked if she'd like to come tonight.
                  </p>
                </div>

                {/* item */}
                <div>
                  <div className="flex items-center space-x-1">
                    <span className="bg-red-600 text-white px-2 py-1 rounded">
                      ’d
                    </span>
                    <span className="bg-gray-800 text-white px-2 py-1 rounded">
                      /əd/
                    </span>
                    <span className="text-black font-bold"> = had:</span>
                  </div>
                  <p className="italic text-black ml-2 mt-1">
                    If you'd told me what was wrong I could have helped.
                  </p>
                </div>

                {/* item */}
                <div>
                  <div className="flex items-center space-x-1">
                    <span className="bg-red-600 text-white px-2 py-1 rounded">
                      Daren’t
                    </span>
                    <span className="bg-gray-800 text-white px-2 py-1 rounded">
                      /deənt/
                    </span>
                    <span className="text-black font-bold">
                      {" "}
                      = dare(s) not:
                    </span>
                  </div>
                  <p className="italic text-black ml-2 mt-1">
                    If you'd told me what was wrong I could have helped.
                  </p>
                </div>

                {/* item */}
                <div>
                  <div className="flex items-center space-x-1">
                    <span className="bg-red-600 text-white px-2 py-1 rounded">
                      Didn't
                    </span>
                    <span className="bg-gray-800 text-white px-2 py-1 rounded">
                      /dɪdənt/
                    </span>
                    <span className="text-black font-bold"> = did not:</span>
                  </div>
                  <p className="italic text-black ml-2 mt-1">
                    We didn't arrive at our hotel until after midnight.
                  </p>
                </div>

                {/* item */}
                <div>
                  <div className="flex items-center space-x-1">
                    <span className="bg-red-600 text-white px-2 py-1 rounded">
                      Doesn’t
                    </span>
                    <span className="bg-gray-800 text-white px-2 py-1 rounded">
                      /dʌznt/
                    </span>
                    <span className="text-black font-bold"> = does not:</span>
                  </div>
                  <p className="italic text-black ml-2 mt-1">
                    Doesn't she look lovely in that hat?
                  </p>
                </div>
              </div>
            </div>

            {/* <div className="text-base">
              <div className="overflow-x-auto p-1">
                <table className="table-auto border-collapse border border-gray-300 shadow-md w-full text-center">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="border border-gray-300 px-1 py-1 font-bold">
                        Short form
                      </th>
                      <th className="border border-gray-300 px-1 py-1 font-bold">
                        IPA
                      </th>
                      <th className="border border-gray-300 px-1 py-1 font-bold">
                        উচ্চারণ
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Can’t", "/kɑːnt/", "কান্ট"],
                      ["Couldn’t", "/ˈkʊdnt/", "কুডন্"],
                      ["Mayn’t", "/ˈmeɪənt/", "মেইআন্ট"],
                      ["Mightn’t", "/maɪtnt/", "মাইঠন্"],
                      ["Mustn’t", "/ˈmʌsnt/", "মাসন্"],
                      ["He’s", "/hiːz/", "হিজ"],
                      ["He’d", "/hiːd/", "হিড"],
                      ["He’ll", "/hiːl/", "হিল"],
                      ["She’s", "/ʃiːz/", "শিজ"],
                    
                    ].map(([shortForm, ipa, bangla], index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="border border-gray-300 px-1 py-1">
                          {shortForm}
                        </td>
                        <td className="border border-gray-300 px-1 py-1">
                          {ipa}
                        </td>
                        <td className="border border-gray-300 px-1 py-1">
                          {bangla}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
            </div> */}
          </div>
        </div>

        {/* page 27 Verb Contraction */}
        <div className="p-3 text-black md:p-10 bg-[#EFE5D6] book-shadow">
          <div className="flex justify-start gap-10 md:justify-start md:gap-96 mb-1">
            <h2 className="text-base lg:text-xl font-bold ">Page 27</h2>
            <button
              onClick={goToContents}
              className=" px-2 py-1 bg-blue-500 text-white text-xs md:text-base rounded hover:bg-white hover:text-blue-500"
            >
              Back to index
            </button>
          </div>
          <hr className="border border-gray-400" />
          <div className="text-base">
            <h3 className="font-bold">Contraction: </h3>
            <div className="">
              {/* Gotta */}
              <div>
                <div className="flex items-center space-x-1">
                  <span className="bg-red-600 text-white px-2 py-1 rounded">
                    Gotta{" "}
                  </span>
                  <span className="bg-gray-800 text-white px-2 py-1 rounded">
                    /ˈɡɒtə/
                  </span>
                  <span className="text-black font-bold">
                    =‘have got to’/‘have got a’:{" "}
                  </span>
                </div>
                <p className="italic text-black ml-2 mt-1">
                  I gotta go now.
                  <br />
                  He’s gotta be kidding.
                  <br />
                  Gotta (= have you got a) cigarette?
                </p>
              </div>

              {/* Hadn’t */}
              <div>
                <div className="flex items-center space-x-1">
                  <span className="font-bold bg-red-600 text-white px-2 py-1 rounded">
                    Hadn’t{" "}
                  </span>
                  <span className="font-bold bg-gray-800 text-white px-2 py-1 rounded">
                    /ˈhæd.ənt/
                  </span>
                  <span className="text-black font-bold"> = had not:</span>
                </div>
                <p className="italic text-black ml-2 mt-1">
                  If you hadn't told him he would never have known.
                </p>
              </div>

              {/* Hadn’t */}
              <div>
                <div className="flex items-center space-x-1">
                  <span className="font-bold bg-red-600 text-white px-2 py-1 rounded">
                    Hadn’t{" "}
                  </span>
                  <span className="font-bold bg-gray-800 text-white px-2 py-1 rounded">
                    /ˈhæd.ənt/
                  </span>
                  <span className="text-black font-bold"> = had not:</span>
                </div>
                <p className="italic text-black ml-2 mt-1">
                  If you hadn't told him he would never have known.
                </p>
              </div>

              {/* Hasn’t */}
              <div>
                <div className="flex items-center space-x-1">
                  <span className="font-bold bg-red-600 text-white px-2 py-1 rounded">
                    Hasn’t{" "}
                  </span>
                  <span className="font-bold bg-gray-800 text-white px-2 py-1 rounded">
                    /ˈhæzənt/
                  </span>
                  <span className="text-black font-bold"> = has not:</span>
                </div>
                <p className="italic text-black ml-2 mt-1">Hasn't he grown!</p>
              </div>
            </div>
          </div>
        </div>

        {/* page 28 Verb Contraction */}
        <div className="p-3 text-black md:p-10 bg-[#EFE5D6] book-shadow">
          <div className="flex justify-start gap-10 md:justify-start md:gap-96 mb-1">
            <h2 className="text-base lg:text-xl font-bold ">Page 28</h2>
            <button
              onClick={goToContents}
              className=" px-2 py-1 bg-blue-500 text-white text-xs md:text-base rounded hover:bg-white hover:text-blue-500"
            >
              Back to index
            </button>
          </div>
          <hr className="border border-gray-400" />
          <div className="text-base">
            <h3 className="font-bold">Contraction: </h3>
            <div className="">
              {/* Haven’t  */}
              <div>
                <div className="flex items-center space-x-1">
                  <span className="font-bold bg-red-600 text-white px-2 py-1 rounded">
                    Haven’t{" "}
                  </span>
                  <span className="font-bold bg-gray-800 text-white px-2 py-1 rounded">
                    /ˈhævənt/
                  </span>
                  <span className="text-black font-bold"> = may have:</span>
                </div>
                <p className="italic text-black ml-2 mt-1">
                  He may've done this to her.
                </p>
              </div>

              {/* He’d  */}
              <div>
                <div className="flex items-center space-x-1">
                  <span className="font-bold bg-red-600 text-white px-2 py-1 rounded">
                    He’d{" "}
                  </span>
                  <span className="font-bold bg-gray-800 text-white px-2 py-1 rounded">
                    /hiːd/
                  </span>
                  <span className="text-black font-bold"> = he had: হি:ড</span>
                </div>
                <p className="italic text-black ml-2 mt-1">
                  He’d already spent all his money by the second day of the
                  trip.
                </p>
              </div>

              {/* He’d  */}
              <div>
                <div className="flex items-center space-x-1">
                  <span className="font-bold bg-red-600 text-white px-2 py-1 rounded">
                    He’d{" "}
                  </span>
                  <span className="font-bold bg-gray-800 text-white px-2 py-1 rounded">
                    /hiːd/
                  </span>
                  <span className="text-black font-bold">
                    {" "}
                    = he would: হি:ড
                  </span>
                </div>
                <p className="italic text-black ml-2 mt-1">
                  He’d already spent all his money by the second day of the
                  trip.
                </p>
              </div>

              {/* He’d  */}
              <div>
                <div className="flex items-center space-x-1">
                  <span className="font-bold bg-red-600 text-white px-2 py-1 rounded">
                    He’d{" "}
                  </span>
                  <span className="font-bold bg-gray-800 text-white px-2 py-1 rounded">
                    /hiːd/
                  </span>
                  <span className="text-black font-bold">
                    {" "}
                    = he would: হি:ড
                  </span>
                </div>
                <p className="italic text-black ml-2 mt-1">
                  He’d be able to do it, if anyone could.
                </p>
              </div>

              {/* He’ll  */}
              <div>
                <div className="flex items-center space-x-1">
                  <span className="font-bold bg-red-600 text-white px-2 py-1 rounded">
                    He’ll{" "}
                  </span>
                  <span className="font-bold bg-gray-800 text-white px-2 py-1 rounded">
                    /hiːl/
                  </span>
                  <span className="text-black font-bold"> = he will: হি:ল</span>
                </div>
                <p className="italic text-black ml-2 mt-1">
                  He’d be able to do it, if anyone could.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* page 29 Verb Contraction */}
        <div className="p-3 text-black md:p-10 bg-[#EFE5D6] book-shadow">
          <div className="flex justify-start gap-10 md:justify-start md:gap-96 mb-1">
            <h2 className="text-base lg:text-xl font-bold ">Page 29</h2>
            <button
              onClick={goToContents}
              className=" px-2 py-1 bg-blue-500 text-white text-xs md:text-base rounded hover:bg-white hover:text-blue-500"
            >
              Back to index
            </button>
          </div>
          <hr className="border border-gray-400" />
          <div className="text-base">
            <h3 className="font-bold pb-2">Verb - Contractions: </h3>
            <div className="">
              {/* He’s  */}
              <div>
                <div className="flex items-center space-x-1">
                  <span className="bg-red-600 text-white px-2 py-1 rounded">
                    He’s{" "}
                  </span>
                  <span className="bg-gray-800 text-white px-2 py-1 rounded">
                    /hiːz/
                  </span>
                  <span className="text-black font-bold"> = he is: </span>
                </div>
                <p className="italic text-black ml-2 mt-1">He’s a great guy.</p>
              </div>

              {/* He’s */}
              <div>
                <div className="flex items-center space-x-1">
                  <span className="font-bold bg-red-600 text-white px-2 py-1 rounded">
                    He’s{" "}
                  </span>
                  <span className="font-bold bg-gray-800 text-white px-2 py-1 rounded">
                    /hiːz/
                  </span>
                  <span className="text-black font-bold"> = he has: </span>
                </div>
                <p className="italic text-black ml-2 mt-1">
                  He’s just bought a new digital camera.
                </p>
              </div>

              {/* 'em */}
              <div>
                <div className="flex items-center space-x-1">
                  <span className="font-bold bg-red-600 text-white px-2 py-1 rounded">
                    'em{" "}
                  </span>
                  <span className="font-bold bg-gray-800 text-white px-2 py-1 rounded">
                    /əm/
                  </span>
                  <span className="text-black font-bold">
                    {" "}
                    short form of them:{" "}
                  </span>
                </div>
                <p className="italic text-black ml-2 mt-1">
                  Tell 'em to go away.
                </p>
              </div>

              {/* Isn't */}
              <div>
                <div className="flex items-center space-x-1">
                  <span className="font-bold bg-red-600 text-white px-2 py-1 rounded">
                    Isn't{" "}
                  </span>
                  <span className="font-bold bg-gray-800 text-white px-2 py-1 rounded">
                    /ˈɪz.ənt/
                  </span>
                  <span className="text-black font-bold"> = is not: </span>
                </div>
                <p className="italic text-black ml-2 mt-1">
                  He isn't coming until tomorrow.
                </p>
              </div>

              {/* It’ll */}
              <div>
                <div className="flex items-center space-x-1">
                  <span className="font-bold bg-red-600 text-white px-2 py-1 rounded">
                    It’ll
                  </span>
                  <span className="font-bold bg-gray-800 text-white px-2 py-1 rounded">
                    /ˈɪtəl/
                  </span>
                  <span className="text-black font-bold">
                    {" "}
                    = short form of it will:
                  </span>
                </div>
                <p className="italic text-black ml-2 mt-1">
                  It'll be hard to find someone to help.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* page 30 Verb Contraction */}
        <div className="p-3 text-black md:p-10 bg-[#EFE5D6] book-shadow">
          <div className="flex justify-start gap-10 md:justify-start md:gap-96 mb-1">
            <h2 className="text-base lg:text-xl font-bold ">Page 30</h2>
            <button
              onClick={goToContents}
              className=" px-2 py-1 bg-blue-500 text-white text-xs md:text-base rounded hover:bg-white hover:text-blue-500"
            >
              Back to index
            </button>
          </div>
          <hr className="border border-gray-400" />
          <div className="text-base">
            <h3 className="font-bold pb-2">Contraction: </h3>
            <div className="">
              {/* Innit */}
              <div>
                <div className="flex items-center space-x-1">
                  <span className="font-bold bg-red-600 text-white px-2 py-1 rounded">
                    Innit{" "}
                  </span>
                  <span className="font-bold bg-gray-800 text-white px-2 py-1 rounded">
                    /ˈɪnɪt/
                  </span>
                  <span className="text-black font-bold"> = isn’t it?</span>
                </div>
                <p className="italic text-black ml-2 mt-1">
                  Used in a non-standard way at the end of a statement for
                  emphasis:
                  <br />
                  "It’s wrong, innit?"
                  <br />
                  "They’re such a wicked band, innit?"
                </p>
              </div>

              {/* It’d */}
              <div>
                <div className="flex items-center space-x-1">
                  <span className="font-bold bg-red-600 text-white px-2 py-1 rounded">
                    It’d{" "}
                  </span>
                  <span className="font-bold bg-gray-800 text-white px-2 py-1 rounded">
                    /ˈɪtəd/
                  </span>
                  <span className="text-black font-bold"> = it would:</span>
                </div>
                <p className="italic text-black ml-2 mt-1">
                  It’d be better if we finished it off today.
                </p>
              </div>

              {/* It’d */}
              <div>
                <div className="flex items-center space-x-1">
                  <span className="font-bold bg-red-600 text-white px-2 py-1 rounded">
                    It’d{" "}
                  </span>
                  <span className="font-bold bg-gray-800 text-white px-2 py-1 rounded">
                    /ˈɪtəd/
                  </span>
                  <span className="text-black font-bold">
                    {" "}
                    = short form of it had:
                  </span>
                </div>
                <p className="italic text-black ml-2 mt-1">
                  I found the radio – it’d been left in the shed all weekend.
                </p>
              </div>
            </div>
            <p className="font-medium">
              👉Please, watch the video for correct pronunciation!
            </p>
          </div>
        </div>

        {/* page 31 Verb Contraction */}
        <div className="p-3 text-black md:p-10 bg-[#EFE5D6] book-shadow">
          <div className="flex justify-start gap-10 md:justify-start md:gap-96 mb-1">
            <h2 className="text-base lg:text-xl font-bold ">Page 31</h2>
            <button
              onClick={goToContents}
              className=" px-2 py-1 bg-blue-500 text-white text-xs md:text-base rounded hover:bg-white hover:text-blue-500"
            >
              Back to index
            </button>
          </div>
          <hr className="border border-gray-400" />
          <div className="">
            <h3 className="font-bold">Contraction: </h3>

            <div className="text-base">
              {/* It has */}
              <div>
                <div className="flex items-center space-x-1">
                  <span className="bg-red-600 text-white px-2 py-1 rounded">
                    It's{" "}
                  </span>
                  <span className="bg-gray-800 text-white px-2 py-1 rounded">
                    //ɪts//
                  </span>
                  <span className="text-black font-bold">it has:</span>
                </div>
                <p className="italic text-black ml-2 mt-1">
                  Don't do that – it hurts!
                </p>
              </div>

              {/* it is: */}
              <div>
                <div className="">
                  <div className="flex items-center space-x-1">
                    <span className="bg-red-600 text-white px-2 py-1 rounded">
                      It's{" "}
                    </span>
                    <span className="bg-gray-800 text-white px-2 py-1 rounded">
                      /ɪts/
                    </span>
                    <span className="text-black font-bold"> = it is:</span>
                  </div>
                  <p className="italic text-black ml-2 mt-1">
                    It’s my turn to do it.
                  </p>
                </div>
              </div>

              {/* D’you */}
              <div className="">
                <div className="flex items-center space-x-1">
                  <span className="bg-red-600 text-white px-2 py-1 rounded">
                    D’you
                  </span>
                  <span className="bg-gray-800 text-white px-2 py-1 rounded">
                    /djuː/
                  </span>
                  <span className="text-black font-bold"> = do you:</span>
                </div>
                <p className="italic text-black ml-2 mt-1">
                  D’you come here often?
                </p>
              </div>
              {/* 've /əv/ */}
              <div>
                <div className="flex items-center space-x-1">
                  <span className="bg-red-600 text-white px-2 py-1 rounded">
                    I've
                  </span>
                  <span className="bg-gray-800 text-white px-2 py-1 rounded">
                    /əv/
                  </span>
                  <span className="text-black font-bold"> = I have:</span>
                </div>
                <p className="italic text-black ml-2 mt-1">
                  I've been waiting for an hour already.
                </p>
              </div>

              {/* 'll /ɪl/ */}
              <div>
                <div className="flex items-center space-x-1">
                  <span className="bg-red-600 text-white px-2 py-1 rounded">
                    'll{" "}
                  </span>
                  <span className="bg-gray-800 text-white px-2 py-1 rounded">
                    /ɪl/
                  </span>
                  <span className="text-black font-bold"> = will:</span>
                </div>
                <p className="italic text-black ml-2 mt-1">
                  I'll see you next week.
                </p>
              </div>

              <div className="">
                {/* <div className="overflow-x-auto p-1">
                <table className="table-auto border-collapse border border-gray-300 shadow-md w-full text-center">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="border border-gray-300 px-1 py-1 font-bold">
                        Short form
                      </th>
                      <th className="border border-gray-300 px-1 py-1 font-bold">
                        IPA
                      </th>
                      <th className="border border-gray-300 px-1 py-1 font-bold">
                        উচ্চারণ
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      
                      ["She’s", "/ʃiːz/", "শিজ"],
                      ["She’d", "/ʃiːd/", "শিড"],
                      ["She’ll", "/ʃiːl/", "শিল"],
                    ].map(([shortForm, ipa, bangla], index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="border border-gray-300 px-1 py-1">
                          {shortForm}
                        </td>
                        <td className="border border-gray-300 px-1 py-1">
                          {ipa}
                        </td>
                        <td className="border border-gray-300 px-1 py-1">
                          {bangla}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div> */}
              </div>

              <div className="max-w-fit mx-auto p-1 text-center border-2 border-blue-500 mt-1 rounded-md">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://youtu.be/5kPS12voEN0?si=QnQo7a0lRBSFvZKZ"
                >
                  Contraction video
                </a>
              </div>
            </div>
            {/* <h3 className="heading2 text-center pt-2">ASM English Academy</h3> */}
          </div>
        </div>

        {/* page 32 Verb Contraction */}
        <div className="p-3 text-black md:p-10 bg-[#EFE5D6] book-shadow">
          <div className="flex justify-start gap-10 md:justify-start md:gap-96 mb-1">
            <h2 className="text-base lg:text-xl font-bold ">Page 32</h2>
            <button
              onClick={goToContents}
              className=" px-2 py-1 bg-blue-500 text-white text-xs md:text-base rounded hover:bg-white hover:text-blue-500"
            >
              Back to index
            </button>
          </div>
          <hr className="border border-gray-400" />
          <div className="text-base">
            <h3 className="font-bold pb-2">Contraction: </h3>
            <div className="">
              {/* 'm /əm/ */}
              <div>
                <div className="flex items-center space-x-1">
                  <span className="bg-red-600 text-white px-2 py-1 rounded">
                    'm{" "}
                  </span>
                  <span className="bg-gray-800 text-white px-2 py-1 rounded">
                    /əm/
                  </span>
                  <span className="text-black font-bold">
                    {" "}
                    = am (used in spoken):{" "}
                  </span>
                </div>
                <p className="italic text-black ml-2 mt-1">
                  I'm sorry I'm late.
                </p>
              </div>
              {/* May've /ˈmeɪəv/ */}
              <div>
                <div className="flex items-center space-x-1">
                  <span className="font-bold bg-red-600 text-white px-2 py-1 rounded">
                    May've{" "}
                  </span>
                  <span className="font-bold bg-gray-800 text-white px-2 py-1 rounded">
                    /ˈmeɪəv/
                  </span>
                  <span className="text-black font-bold"> = may have:</span>
                </div>
                <p className="italic text-black ml-2 mt-1">
                  He may've done this to her.
                </p>
              </div>
              {/* Mightn't /ˈmaɪtənt/ */}
              <div>
                <div className="flex items-center space-x-1">
                  <span className="font-bold bg-red-600 text-white px-2 py-1 rounded">
                    Mightn't{" "}
                  </span>
                  <span className="font-bold bg-gray-800 text-white px-2 py-1 rounded">
                    /ˈmaɪtənt/
                  </span>
                  <span className="text-black font-bold"> = might not:</span>
                </div>
                <p className="italic text-black ml-2 mt-1">
                  Don’t panic – it mightn’t be true.
                </p>
              </div>

              {/* Might've */}
              <div>
                <div className="flex items-center space-x-1">
                  <span className="font-bold bg-red-600 text-white px-2 py-1 rounded">
                    Might've{" "}
                  </span>
                  <span className="font-bold bg-gray-800 text-white px-2 py-1 rounded">
                    /ˈmaɪtəv/
                  </span>
                  <span className="text-black font-bold"> = might have:</span>
                </div>
                <p className="italic text-black ml-2 mt-1">
                  Don’t panic – it mightn’t be true.
                </p>
              </div>

              {/* Mustn't */}
              <div>
                <div className="flex items-center space-x-1">
                  <span className="font- bg-red-600 text-white px-2 py-1 rounded">
                    Mustn't{" "}
                  </span>
                  <span className="font- bg-gray-800 text-white px-2 py-1 rounded">
                    /ˈmʌsənt/
                  </span>
                  <span className="text-black font-bold"> = must not: </span>
                </div>
                <p className="italic text-black ml-2 mt-1">
                  You mustn't worry too much about this.
                </p>
              </div>
            </div>
            <h2 className="text-green-500">
              ❇️please, watch the videos for correct sound!
            </h2>
          </div>
        </div>

        {/* page 33 Verb Contraction */}
        <div className="p-3 text-black md:p-10 bg-[#EFE5D6] book-shadow">
          <div className="flex justify-start gap-10 md:justify-start md:gap-96 mb-1">
            <h2 className="text-base lg:text-xl font-bold ">Page 33</h2>
            <button
              onClick={goToContents}
              className=" px-2 py-1 bg-blue-500 text-white text-xs md:text-base rounded hover:bg-white hover:text-blue-500"
            >
              Back to index
            </button>
          </div>
          <hr className="border border-gray-400" />
          <div className="text-base">
            <h3 className="font-bold pb-2">Contractions: </h3>
            <div className="">
              {/* Needn't */}
              <div>
                <div className="flex items-center space-x-1">
                  <span className="bg-red-600 text-white px-2 py-1 rounded">
                    Needn't
                  </span>
                  <span className="bg-gray-800 text-white px-2 py-1 rounded">
                    /ˈniːdənt/
                  </span>
                  <span className="text-black font-bold"> = need not: </span>
                </div>
                <p className="italic text-black ml-2 mt-1">
                  You needn't come until later.
                </p>
              </div>

              {/* 'n't  */}
              <div>
                <div className="flex items-center space-x-1">
                  <span className="font-bold bg-red-600 text-white px-2 py-1 rounded">
                    'n't{" "}
                  </span>
                  <span className="font-bold bg-gray-800 text-white px-2 py-1 rounded">
                    /-ənt/
                  </span>
                  <span className="text-black font-bold"> = not :</span>
                </div>
                <p className="italic text-black ml-2 mt-1">
                  Didn’t – I didn’t get anything.
                  <br />
                  Mustn’t – You mustn’t do this.
                </p>
              </div>

              {/* O’er  */}
              <div>
                <div className="flex items-center space-x-1">
                  <span className="font-bold bg-red-600 text-white px-2 py-1 rounded">
                    O’er{" "}
                  </span>
                  <span className="font-bold bg-gray-800 text-white px-2 py-1 rounded">
                    {" "}
                    /ɔːə/
                  </span>
                  <span className="text-black font-bold"> = not :</span>
                </div>
                <p className="italic text-black ml-2 mt-1">
                  O’er land and sea they sped.
                </p>
              </div>
              {/* Oughtn't  */}
              <div>
                <div className="flex items-center space-x-1">
                  <span className="font-bold bg-red-600 text-white px-2 py-1 rounded">
                    Oughtn't{" "}
                  </span>
                  <span className="font-bold bg-gray-800 text-white px-2 py-1 rounded">
                    {" "}
                    /ˈɔːtnt/
                  </span>
                  <span className="text-black font-bold"> = ought not :</span>
                </div>
                <p className="italic text-black ml-2 mt-1">
                  He oughtn't to do that.
                </p>
              </div>
            </div>

            <p>
              <span className="font-bold">’Re /ər/</span> short form of are:
              <br />
              You’re late.
            </p>

            <p>
              <span className="font-bold">’S /-s/ /-z/</span> short form of is:
              <br />
              It’s in the cupboard.
            </p>
          </div>
        </div>

        {/* page 34  Contraction */}
        <div className="p-3 text-black md:p-10 bg-[#EFE5D6] book-shadow">
          <div className="flex justify-start gap-10 md:justify-start md:gap-96 mb-1">
            <h2 className="text-base lg:text-xl font-bold ">Page 34</h2>
            <button
              onClick={goToContents}
              className=" px-2 py-1 bg-blue-500 text-white text-xs md:text-base rounded hover:bg-white hover:text-blue-500"
            >
              Back to index
            </button>
          </div>
          <hr className="border border-gray-400" />
          <div className="text-base">
            <h3 className="font-bold pb-2">Contractions: </h3>
            <div className="">
              {/* Needn't */}
              <div>
                <div className="flex items-center space-x-1">
                  <span className="bg-red-600 text-white px-2 py-1 rounded">
                    Needn't
                  </span>
                  <span className="bg-gray-800 text-white px-2 py-1 rounded">
                    /ˈniːdənt/
                  </span>
                  <span className="text-black font-bold"> = need not: </span>
                </div>
                <p className="italic text-black ml-2 mt-1">
                  You needn't come until later.
                </p>
              </div>
              <p>
                {" "}
                <span className="font-bold">’S /-s/ /-z/</span> short form of
                has: <br /> She’s gone home.{" "}
              </p>{" "}
              <p>
                {" "}
                <span className="font-bold">’S /-s/ /-z/</span> short form used
                in spoken questions: <br /> How’s this thing work?{" "}
              </p>{" "}
              <p>
                {" "}
                <span className="font-bold">’S /-s/ /-z/</span> short form of
                “us” (with *let*): <br /> Let’s go swimming.{" "}
              </p>{" "}
              <p>
                {" "}
                <span className="font-bold">Shan’t /ʃɑːnt/</span> shall not:{" "}
                <br /> I shan’t be able to come.{" "}
              </p>{" "}
              <p>
                {" "}
                <span className="font-bold">She’d /ʃiːd/</span> she had: <br />{" "}
                She’d found the answer.{" "}
              </p>{" "}
              <p>
                {" "}
                <span className="font-bold">She’d /ʃiːd/</span> she would:{" "}
                <br /> She’d be a great man.{" "}
              </p>{" "}
            </div>
          </div>
        </div>
        {/* page 35  Contraction */}
        <div className="p-3 text-black md:p-10 bg-[#EFE5D6] book-shadow">
          <div className="flex justify-start gap-10 md:justify-start md:gap-96 mb-1">
            <h2 className="text-base lg:text-xl font-bold ">Page 35</h2>
            <button
              onClick={goToContents}
              className=" px-2 py-1 bg-blue-500 text-white text-xs md:text-base rounded hover:bg-white hover:text-blue-500"
            >
              Back to index
            </button>
          </div>
          <hr className="border border-gray-400" />
          <div className="text-base">
            <h3 className="font-bold pb-2">Contractions: </h3>
            <div className="">
              {/* Needn't */}
              <div>
                <div className="flex items-center space-x-1">
                  <span className="bg-red-600 text-white px-2 py-1 rounded">
                    Needn't
                  </span>
                  <span className="bg-gray-800 text-white px-2 py-1 rounded">
                    /ˈniːdənt/
                  </span>
                  <span className="text-black font-bold"> = need not: </span>
                </div>
                <p className="italic text-black ml-2 mt-1">
                  You needn't come until later.
                </p>
              </div>
              <p>
                {" "}
                <span className="font-bold">She’ll /ʃiːl/</span> she will:{" "}
                <br /> She’ll be here later.{" "}
              </p>{" "}
              <p>
                {" "}
                <span className="font-bold">She’s /ʃiːz/</span> she is: <br />{" "}
                She’s a writer.{" "}
              </p>{" "}
              <p>
                {" "}
                <span className="font-bold">She’s /ʃiːz/</span> she has: <br />{" "}
                She’s got the most elegant writing style.{" "}
              </p>{" "}
              <p>
                {" "}
                <span className="font-bold">Shouldn’t /ʃʊdnt/</span> should not:{" "}
                <br /> You shouldn’t do things like that.{" "}
              </p>{" "}
              <p>
                {" "}
                <span className="font-bold">Should’ve /ʃʊdəv/</span> should
                have: <br /> You should’ve come to the party last night, Mayna.{" "}
              </p>{" "}
              <p>
                {" "}
                <span className="font-bold">They’d /ðeɪd/</span> they had:{" "}
                <br /> They’d three bottles of wine.{" "}
              </p>{" "}
            </div>
          </div>
        </div>
        {/* page 36  Contraction */}
        <div className="p-3 text-black md:p-10 bg-[#EFE5D6] book-shadow">
          <div className="flex justify-start gap-10 md:justify-start md:gap-96 mb-1">
            <h2 className="text-base lg:text-xl font-bold ">Page 36</h2>
            <button
              onClick={goToContents}
              className=" px-2 py-1 bg-blue-500 text-white text-xs md:text-base rounded hover:bg-white hover:text-blue-500"
            >
              Back to index
            </button>
          </div>
          <hr className="border border-gray-400" />
          <div className="text-base">
            <h3 className="font-bold pb-2">Verb - Contractions: </h3>
            <div className="">
              {/* Needn't */}
              <div>
                <div className="flex items-center space-x-1">
                  <span className="bg-red-600 text-white px-2 py-1 rounded">
                    Needn't
                  </span>
                  <span className="bg-gray-800 text-white px-2 py-1 rounded">
                    /ˈniːdənt/
                  </span>
                  <span className="text-black font-bold"> = need not: </span>
                </div>
                <p className="italic text-black ml-2 mt-1">
                  You needn't come until later.
                </p>
              </div>
              <p>
                {" "}
                <span className="font-bold">They’d /ðeɪd/</span> they would:{" "}
                <br /> They’d love to see ‘Jurassic Park’.{" "}
              </p>{" "}
              <p>
                {" "}
                <span className="font-bold">They’ll /ðeɪl/</span> they will:{" "}
                <br /> They’ll be here any minute, if their train’s on time.{" "}
              </p>{" "}
              <p>
                {" "}
                <span className="font-bold">They’re /ðeər/</span> they are:{" "}
                <br /> They’re so in love.{" "}
              </p>{" "}
              <p>
                {" "}
                <span className="font-bold">They’ve /ðeɪv/</span> they have:{" "}
                <br /> They’ve really made a mess of things now.{" "}
              </p>{" "}
              <p>
                {" "}
                <span className="font-bold">’Ve</span> short form of have:{" "}
                <br /> I’ve been waiting for ages.{" "}
              </p>{" "}
              <p>
                {" "}
                <span className="font-bold">Wanna /wɒnə/</span> “want to” or
                “want a”: <br /> D’you wanna go now?
                <br /> I wanna have a burger, mom.{" "}
              </p>{" "}
            </div>
          </div>
        </div>
        {/* page 37  Contraction */}
        <div className="p-3 text-black md:p-10 bg-[#EFE5D6] book-shadow">
          <div className="flex justify-start gap-10 md:justify-start md:gap-96 mb-1">
            <h2 className="text-base lg:text-xl font-bold ">Page 37</h2>
            <button
              onClick={goToContents}
              className=" px-2 py-1 bg-blue-500 text-white text-xs md:text-base rounded hover:bg-white hover:text-blue-500"
            >
              Back to index
            </button>
          </div>
          <hr className="border border-gray-400" />
          <div className="text-base">
            <h3 className="font-bold pb-2">Contractions: </h3>
            <div className="">
              {/* Needn't */}
              <div>
                <div className="flex items-center space-x-1">
                  <span className="bg-red-600 text-white px-2 py-1 rounded">
                    Needn't
                  </span>
                  <span className="bg-gray-800 text-white px-2 py-1 rounded">
                    /ˈniːdənt/
                  </span>
                  <span className="text-black font-bold"> = need not: </span>
                </div>
                <p className="italic text-black ml-2 mt-1">
                  You needn't come until later.
                </p>
              </div>

              <p>
                {" "}
                <span className="font-bold">Wasn’t /wɒznt/</span> was not:{" "}
                <br /> It wasn’t you who told me that, weren’t you?{" "}
              </p>
            </div>
            <div className="">
              <p>
                {" "}
                <span className="font-bold">We’d /wiːd/</span> short form of we
                had: <br /> We’d better be more careful in the future.{" "}
              </p>{" "}
              <p>
                {" "}
                <span className="font-bold">We’d /wiːd/</span> short form of we
                would: <br /> We’d be grateful for an answer.{" "}
              </p>{" "}
              <p>
                {" "}
                <span className="font-bold">We’re /wɪə/</span> we are: <br />{" "}
                We’re here, Saifa.{" "}
              </p>{" "}
              <p>
                {" "}
                <span className="font-bold">Weren’t /wɜːnt/</span> short form of
                were not: <br /> Weren’t we lucky with the weather?{" "}
              </p>{" "}
              <p>
                {" "}
                <span className="font-bold">We’ve /wiːv/</span> we have: <br />{" "}
                We’ve been married eight years.{" "}
              </p>{" "}
            </div>
          </div>
        </div>
        {/* page 38  Contraction */}
        <div className="p-3 text-black md:p-10 bg-[#EFE5D6] book-shadow">
          <div className="flex justify-start gap-10 md:justify-start md:gap-96 mb-1">
            <h2 className="text-base lg:text-xl font-bold ">Page 38</h2>
            <button
              onClick={goToContents}
              className=" px-2 py-1 bg-blue-500 text-white text-xs md:text-base rounded hover:bg-white hover:text-blue-500"
            >
              Back to index
            </button>
          </div>
          <hr className="border border-gray-400" />
          <div className="text-base">
            <h3 className="font-bold pb-2">Contractions: </h3>
            <div className="">
              {/* Needn't */}
              <div>
                <div className="flex items-center space-x-1">
                  <span className="bg-red-600 text-white px-2 py-1 rounded">
                    Needn't
                  </span>
                  <span className="bg-gray-800 text-white px-2 py-1 rounded">
                    /ˈniːdənt/
                  </span>
                  <span className="text-black font-bold"> = need not: </span>
                </div>
                <p className="italic text-black ml-2 mt-1">
                  You needn't come until later.
                </p>
              </div>
              <p>
                {" "}
                <span className="font-bold">Who’d /huːd/</span> short form of
                who had: <br /> She wondered who’d sent her the mysterious
                email.{" "}
              </p>{" "}
              <p>
                {" "}
                <span className="font-bold">Who’d /huːd/</span> short form of
                who would: <br /> Well, who’d have thought Joey was going to
                become so rich?{" "}
              </p>{" "}
              <p>
                {" "}
                <span className="font-bold">Who’ll /huːl/</span> short form of
                who will: <br /> Who’ll be at the party tomorrow?{" "}
              </p>{" "}
              <p>
                {" "}
                <span className="font-bold">Who’re /huːər/</span> short form of
                who are: <br /> The film begins with a young couple, who’re just
                about to get married.{" "}
              </p>{" "}
              <p>
                {" "}
                <span className="font-bold">Who’s /huːz/</span> short form of
                who has: <br /> Who’s been chosen, do you know?{" "}
              </p>{" "}
              <p>
                {" "}
                <span className="font-bold">Who’s /huːz/</span> short form of
                who is: <br /> Who’s that talking to Nafisa?{" "}
              </p>{" "}
            </div>
          </div>
        </div>

        {/* page 39  Contraction */}
        <div className="p-3 text-black md:p-10 bg-[#EFE5D6] book-shadow">
          <div className="flex justify-start gap-10 md:justify-start md:gap-96 mb-1">
            <h2 className="text-base lg:text-xl font-bold ">Page 39</h2>
            <button
              onClick={goToContents}
              className=" px-2 py-1 bg-blue-500 text-white text-xs md:text-base rounded hover:bg-white hover:text-blue-500"
            >
              Back to index
            </button>
          </div>
          <hr className="border border-gray-400" />
          <div className="text-base">
            <h3 className="font-bold pb-2">Contractions: </h3>
            <div className="">
              {/* Needn't */}
              <div>
                <div className="flex items-center space-x-1">
                  <span className="bg-red-600 text-white px-2 py-1 rounded">
                    Needn't
                  </span>
                  <span className="bg-gray-800 text-white px-2 py-1 rounded">
                    /ˈniːdənt/
                  </span>
                  <span className="text-black font-bold"> = need not: </span>
                </div>
                <p className="italic text-black ml-2 mt-1">
                  You needn't come until later.
                </p>
              </div>
              <p>
                <span className="font-bold">Who’ve /huːv/</span> short form of
                who have: <br /> Who’ve you asked so far?{" "}
              </p>{" "}
              <p>
                {" "}
                <span className="font-bold">Won’t /wəʊnt/</span> short form of
                will not: <br /> I won’t go without you. Won’t it be nice to see
                Tanisha again?{" "}
              </p>{" "}
              <p>
                {" "}
                <span className="font-bold">Wouldn’t /wʊdnt/</span> short form
                of would not: <br /> I wouldn’t do that if I were you.{" "}
              </p>{" "}
              <p>
                {" "}
                <span className="font-bold">You’d /juːd/</span> short form of
                you had: <br /> It happened just after you’d left the room.{" "}
              </p>{" "}
              <p>
                {" "}
                <span className="font-bold">You’d /juːd/</span> short form of
                you would: <br /> You’d be much warmer in your black jacket.{" "}
              </p>{" "}
              <p>
                {" "}
                <span className="font-bold">You’ll /juːl/</span> short form of
                you will: <br /> You’ll remember to tell her, won’t you?{" "}
              </p>{" "}
            </div>
          </div>
        </div>
        {/* page 40 Verb Contraction */}
        <div className="p-3 text-black md:p-10 bg-[#EFE5D6] book-shadow">
          <div className="flex justify-start gap-10 md:justify-start md:gap-96 mb-1">
            <h2 className="text-base lg:text-xl font-bold ">Page 40</h2>
            <button
              onClick={goToContents}
              className=" px-2 py-1 bg-blue-500 text-white text-xs md:text-base rounded hover:bg-white hover:text-blue-500"
            >
              Back to index
            </button>
          </div>
          <hr className="border border-gray-400" />
          <div className="text-base">
            <h3 className="font-bold pb-2">Verb - Contractions: </h3>
            <div className="">
              {/* Needn't */}
              <div>
                <div className="flex items-center space-x-1">
                  <span className="bg-red-600 text-white px-2 py-1 rounded">
                    Needn't
                  </span>
                  <span className="bg-gray-800 text-white px-2 py-1 rounded">
                    /ˈniːdənt/
                  </span>
                  <span className="text-black font-bold"> = need not: </span>
                </div>
                <p className="italic text-black ml-2 mt-1">
                  You needn't come until later.
                </p>
              </div>
              <p>
                {" "}
                <span className="font-bold">You’re /jɔːr/</span> short form of
                you are: <br /> You’re so nice to me!{" "}
              </p>{" "}
              <p>
                {" "}
                <span className="font-bold">You’ve /juːv/</span> short form of
                you have: <br /> If you’ve finished your pasta, then you can
                have some dessert.{" "}
              </p>
            </div>
          </div>
        </div>

        {/* page 42 Informal - Contractions: */}
        <div className="p-3 text-black md:p-10 lg:p-16 bg-[#EFE5D6] book-shadow">
          <div className="flex justify-start gap-10 md:justify-start md:gap-96 mb-1">
            <h2 className="text-base lg:text-xl font-bold ">Page 42</h2>
            <button
              onClick={goToContents}
              className=" px-2 py-1 bg-blue-500 text-white text-xs md:text-base rounded hover:bg-white hover:text-blue-500"
            >
              Back to index
            </button>
          </div>
          <hr className="border border-gray-400" />
          <div className="text-base">
            <h2 className="font-bold pb-2">Informal - Contractions: </h2>
            <div className="">
              <p className="text-gray-900 leading-relaxed mb-2">
                <span className="font-bold">1. Ain't </span> (am not/are not/is
                not) = <span className="font-bold text-red-700"> /eɪnt/</span>
              </p>
              <p className="text-gray-900 leading-relaxed mb-2">
                <span className="font-bold">2. Ain't </span> (has not/have not)
                = <span className="font-bold text-red-700">/eɪnt/</span>
              </p>
              <p className="text-gray-900 leading-relaxed mb-2">
                <span className="font-bold">3. Wanna </span> (want to) ={" "}
                <span className="font-bold text-red-700">/ˈwɒnə/</span>
              </p>
              <p className="text-gray-900 leading-relaxed mb-2">
                <span className="font-bold">4. Didntcha</span> (didn't you) ={" "}
                <span className="font-bold text-red-700">/ˈdɪdntʃə/</span>
              </p>
              <p className="text-gray-900 leading-relaxed mb-2">
                <span className="font-bold">5. Whatcha</span> (what have you) ={" "}
                <span className="font-bold text-red-700">/ˈwɒtʃə/</span>
              </p>
              <p className="text-gray-900 leading-relaxed mb-2">
                <span className="font-bold">6. Kinda </span>(kind of) ={" "}
                <span className="font-bold text-red-700">/ˈkaɪndə/</span>
              </p>
              <p className="text-gray-900 leading-relaxed mb-2">
                <span className="font-bold">7. Sorta </span>(sort of) ={" "}
                <span className="font-bold text-red-700">/ˈsɔːtə/</span>
              </p>
              <p className="text-gray-900 leading-relaxed mb-2">
                <span className="font-bold">8. Outta </span> (out of) ={" "}
                <span className="font-bold text-red-700">/ˈaʊtə/</span>
              </p>
            </div>
            <div className="max-w-fit mx-auto p-1 text-center border-2 border-blue-500 mt-1 rounded-md">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://youtu.be/5kPS12voEN0?si=QnQo7a0lRBSFvZKZ"
              >
                Contraction video
              </a>
            </div>
          </div>
        </div>

        {/* page 43 Informal - Contractions: */}
        <div className="p-3 text-black md:p-10 bg-[#EFE5D6] book-shadow">
          <div className="flex justify-start gap-10 md:justify-start md:gap-96 mb-1">
            <h2 className="text-base lg:text-xl font-bold ">Page 43</h2>
            <button
              onClick={goToContents}
              className=" px-2 py-1 bg-blue-500 text-white text-xs md:text-base rounded hover:bg-white hover:text-blue-500"
            >
              Back to index
            </button>
          </div>
          <hr className="border border-gray-400" />
          <div className="text-base">
            <h3 className="font-bold pb-2">Informal - Contractions: </h3>
            <div className="">
              <p className="text-gray-900 leading-relaxed mb-2">
                <span className="font-bold">9. Alotta </span> (a lot of) ={" "}
                <span className="font-bold text-red-700">/əˈlɒtə/</span>
              </p>
              <p className="text-gray-900 leading-relaxed mb-2">
                <span className="font-bold">10. Lotsa </span> (lots of) ={" "}
                <span className="font-bold text-red-700">/ˈlɒtsə/</span>
              </p>
              <p className="text-gray-900 text-sm leading-relaxed mb-2">
                <span className="font-bold">11. Mucha </span> (much of) ={" "}
                <span className="font-bold text-red-700"> /ˈmʌtʃə/</span>
              </p>
              <p className="text-gray-900 text-sm leading-relaxed mb-2">
                <span className="font-bold">12. Cuppa </span> (cup of) ={" "}
                <span className="font-bold text-red-700">ˈkʌpə/</span> /
              </p>
              <p className="text-gray-900 text-sm leading-relaxed mb-2">
                <span className="font-bold">13. Dunno</span> (don't know) ={" "}
                <span className="font-bold text-red-700"> /dəˈnəʊ/</span>
              </p>
              <p className="text-gray-900 text-sm leading-relaxed mb-2">
                <span className="font-bold">14. Lemme </span> (let me) ={" "}
                <span className="font-bold text-red-700"></span> /ˈlɛmi/
              </p>
              <p className="text-gray-900 text-sm leading-relaxed mb-2">
                <span className="font-bold">15. Gimme </span> (give me) ={" "}
                <span className="font-bold text-red-700"></span> /ˈgɪmi/
              </p>
              <p className="text-gray-900 text-sm leading-relaxed mb-2">
                <span className="font-bold">16. Tell 'em</span> (tell them) ={" "}
                <span className="font-bold text-red-700"> /ˈtɛləm/</span>
              </p>
              <p className="text-gray-900 text-sm leading-relaxed mb-2">
                <span className="font-bold">17. Cos </span> (because) ={" "}
                <span className="font-bold text-red-700">/kəz/</span>
              </p>
              <p className="text-gray-900 text-sm leading-relaxed mb-2">
                <span className="font-bold">18. Innit? </span> (isn't it?) ={" "}
                <span className="font-bold text-red-700"> /ˈɪnɪt/</span>
              </p>
              <p className="text-gray-900 text-sm leading-relaxed mb-2">
                <span className="font-bold">19. I'mma </span> (I'm going to) ={" "}
                <span className="font-bold text-red-700"> /ˈaɪmə/</span>
              </p>
            </div>
          </div>
        </div>

        {/* page 44 Informal - Contractions: */}
        <div className="p-3 text-black md:p-10 bg-[#EFE5D6] book-shadow">
          <div className="flex justify-start gap-10 md:justify-start md:gap-96 mb-1">
            <h2 className="text-base lg:text-xl font-bold ">Page 44</h2>
            <button
              onClick={goToContents}
              className=" px-2 py-1 bg-blue-500 text-white text-xs md:text-base rounded hover:bg-white hover:text-blue-500"
            >
              Back to index
            </button>
          </div>
          <hr className="border border-gray-400" />
          <div className="text-base">
            <h3 className="font-bold pb-2">Informal - Contractions: </h3>
            <div className="">
              <p className="text-gray-900 text-sm leading-relaxed mb-2">
                <span className="font-bold">20. Gonna</span> (going to) ={" "}
                <span className="font-bold text-red-700"></span> /ˈgənə/
              </p>
              <p className="text-gray-900 text-sm leading-relaxed mb-2">
                <span className="font-bold">21. Needa </span> (need to) ={" "}
                <span className="font-bold text-red-700"></span> /ˈniːdə/
              </p>
              <p className="text-gray-900 text-sm leading-relaxed mb-2">
                <span className="font-bold">22. Oughta</span> (ought to) ={" "}
                <span className="font-bold text-red-700"></span> /ˈɔːtə/
              </p>
              <p className="text-gray-900 text-sm leading-relaxed mb-2">
                <span className="font-bold">23. Hafta</span> (have to) ={" "}
                <span className="font-bold text-red-700"></span> /ˈhæftə/
              </p>
              <p className="text-gray-900 text-sm leading-relaxed mb-2">
                <span className="font-bold">24. Hasta</span> (has to) ={" "}
                <span className="font-bold text-red-700"></span> /ˈhæstə/
              </p>
              <p className="text-gray-900 text-sm leading-relaxed mb-2">
                <span className="font-bold">Usta</span> 25. (used to) ={" "}
                <span className="font-bold text-red-700"></span> /ˈjuːstə/
              </p>
              <p className="text-gray-900 text-sm leading-relaxed mb-2">
                <span className="font-bold">26. Supposta</span> (supposed to) ={" "}
                <span className="font-bold text-red-700"></span> /səˈpəʊstə/
              </p>
              <p className="text-gray-900 text-sm leading-relaxed mb-2">
                <span className="font-bold">27. Whatcha</span> (what are you) ={" "}
                <span className="font-bold text-red-700"></span> /ˈwɒtʃə/
              </p>
              <p className="text-gray-900 text-sm leading-relaxed mb-2">
                <span className="font-bold">28. Ya </span> (you/you are) ={" "}
                <span className="font-bold text-red-700"></span> /jə/
              </p>
              <p className="text-gray-900 text-sm leading-relaxed mb-2">
                <span className="font-bold">29. Gotta</span> (have got to) ={" "}
                <span className="font-bold text-red-700"></span> /ˈgɒtə/
              </p>
              <p className="text-gray-900 text-sm leading-relaxed mb-2">
                <span className="font-bold">30. Shoulda</span> (should have) ={" "}
                <span className="font-bold text-red-700"></span> /ˈʃʊdə/
              </p>
            </div>
          </div>
        </div>

        {/* page 45 Informal - Contractions: */}
        <div className="p-3 text-black md:p-10 bg-[#EFE5D6] book-shadow">
          <div className="flex justify-start gap-10 md:justify-start md:gap-96 mb-1">
            <h2 className="text-base lg:text-xl font-bold ">Page 45</h2>
            <button
              onClick={goToContents}
              className=" px-2 py-1 bg-blue-500 text-white text-xs md:text-base rounded hover:bg-white hover:text-blue-500"
            >
              Back to index
            </button>
          </div>
          <hr className="border border-gray-400" />
          <div className="text-base">
            <h3 className="font-bold pb-2">Informal - Contractions: </h3>
            <div className="">
              <p className="text-gray-900 text-sm leading-relaxed mb-2">
                31. Shouldna (shouldn't have) = /ˈʃudnə/
              </p>
              <p className="text-gray-900 text-sm leading-relaxed mb-2">
                32. Wouldna (wouldn't have) = /ˈwudnə/
              </p>
              <p className="text-gray-900 text-sm leading-relaxed mb-2">
                33. She’da (she would have) = /ʃiːdə/
              </p>
              <p className="text-gray-900 text-sm leading-relaxed mb-2">
                34. Coulda (could have) = /ˈkʊdə/
              </p>
              <p className="text-gray-900 text-sm leading-relaxed mb-2">
                35. Woulda (would have) = /ˈwʊdə/
              </p>
              <p className="text-gray-900 text-sm leading-relaxed mb-2">
                36. Mighta (might have) = /ˈmaɪtə/
              </p>
              <p className="text-gray-900 text-sm leading-relaxed mb-2">
                37. Gotcha (got you) = /ˈgɒtʃə/
              </p>
              <p className="text-gray-900 text-sm leading-relaxed mb-2">
                38. Musta (must have) = /ˈmʌstə/
              </p>
              <p className="text-gray-900 text-sm leading-relaxed mb-2">
                39. Mussna (must not have) = /ˈmʌsnə/
              </p>
              <p className="text-gray-900 text-sm leading-relaxed mb-2">
                40. Dontcha (don't you) = /ˈdəʊntʃə/
              </p>
              <p className="text-gray-900 text-sm leading-relaxed mb-2">
                41. Wontcha (won't you) = /ˈwəʊntʃə/
              </p>
            </div>
          </div>
        </div>

        {/* page 46 Informal - Contractions: */}
        <div className="p-3 text-black md:p-10 bg-[#EFE5D6] book-shadow">
          <div className="flex justify-start gap-10 md:justify-start md:gap-96 mb-1">
            <h2 className="text-base lg:text-xl font-bold ">Page 46</h2>
            <button
              onClick={goToContents}
              className=" px-2 py-1 bg-blue-500 text-white text-xs md:text-base rounded hover:bg-white hover:text-blue-500"
            >
              Back to index
            </button>
          </div>
          <hr className="border border-gray-400" />
          <div className="text-base">
            <h3 className="font-bold pb-2">Informal - Contractions: </h3>
            <div className="">
              <p className="text-gray-900 text-sm leading-relaxed mb-2">
                42. Betcha (bet you) = /ˈbetʃə/
              </p>
              <p className="text-gray-900 text-sm leading-relaxed mb-2">
                43. D’you (do you) = /dʒə/
              </p>
              <p className="text-gray-900 text-sm leading-relaxed mb-2">
                44. S’more (some more) = /sˈmɔːr/
              </p>

              <p className="text-gray-900 text-sm leading-relaxed mb-2">
                Informal contractions with “have”:
              </p>

              <p className="text-gray-900 text-sm leading-relaxed mb-2">
                45. Mighta = /ˈmaɪtə/
              </p>
              <p className="text-gray-900 text-sm leading-relaxed mb-2">
                46. Musta = /ˈmʌstə/
              </p>
              <p className="text-gray-900 text-sm leading-relaxed mb-2">
                47. Shoulda = /ˈʃʊdə/
              </p>
              <p className="text-gray-900 text-sm leading-relaxed mb-2">
                48. Coulda = /ˈkʊdə/
              </p>
              <p className="text-gray-900 text-sm leading-relaxed mb-2">
                49. Woulda = /ˈwʊdə/
              </p>
              <p className="text-gray-900 text-sm leading-relaxed mb-2">
                50. Wouldna = /ˈwudnə/
              </p>
              <p className="text-gray-900 text-sm leading-relaxed mb-2">
                51. She’da = /ʃiːdə/
              </p>
            </div>
          </div>
        </div>

        {/* page 47 Informal - Contractions: */}
        <div className="p-3 text-black md:p-10 bg-[#EFE5D6] book-shadow">
          <div className="flex justify-start gap-10 md:justify-start md:gap-96 mb-1">
            <h2 className="text-base lg:text-xl font-bold ">Page 47</h2>
            <button
              onClick={goToContents}
              className=" px-2 py-1 bg-blue-500 text-white text-xs md:text-base rounded hover:bg-white hover:text-blue-500"
            >
              Back to index
            </button>
          </div>
          <hr className="border border-gray-400" />
          <div className="text-base">
            <h3 className="font-bold pb-2">Informal - Contractions: </h3>
            <div className="">
              <p className="text-gray-900 text-sm leading-relaxed mb-2">
                52. He’da = /ˈhiːdə/
              </p>
              <p className="text-gray-900 text-sm leading-relaxed mb-2">
                53. I’da = /ˈaɪdə/
              </p>
              <p className="text-gray-900 text-sm leading-relaxed mb-2">
                54. They’da = /ˈðeɪdə/
              </p>
              <p className="text-gray-900 text-sm leading-relaxed mb-2">
                55. You’da = /ˈjuːdə/
              </p>
              <p className="text-gray-900 text-sm leading-relaxed mb-2">
                56. Couldna = /ˈkʊdnə/
              </p>
              <p className="text-gray-900 text-sm leading-relaxed mb-2">
                57. Shouldna = /ˈʃudnə/
              </p>
              <p className="text-gray-900 text-sm leading-relaxed mb-2">
                58. Dontcha = /ˈdəʊntʃə/
              </p>
              <p className="text-gray-900 text-sm leading-relaxed mb-2">
                59. Didn’tcha = /ˈdɪdntʃə/
              </p>
              <p className="text-gray-900 text-sm leading-relaxed mb-2">
                60. Wontcha = /ˈwəʊntʃə/
              </p>
              <p className="text-gray-900 text-sm leading-relaxed mb-2">
                61. Whatcha or Watcha = /ˈwɒtʃə/
              </p>
            </div>
          </div>
        </div>
        {/* page 48 Informal - Contractions: */}
        <div className="p-3 text-black md:p-10 bg-[#EFE5D6] book-shadow">
          <div className="flex justify-start gap-10 md:justify-start md:gap-96 mb-1">
            <h2 className="text-base lg:text-xl font-bold ">Page 48</h2>
            <button
              onClick={goToContents}
              className=" px-2 py-1 bg-blue-500 text-white text-xs md:text-base rounded hover:bg-white hover:text-blue-500"
            >
              Back to index
            </button>
          </div>
          <hr className="border border-gray-400" />
          <div className="text-base">
            <h3 className="font-bold pb-2">Informal - Contractions: </h3>
            <div className="">
              <p className="text-gray-900 text-sm leading-relaxed mb-2">
                1. Gotcha = /ˈgɒtʃə/
              </p>
              <p className="text-gray-900 text-sm leading-relaxed mb-2">
                62. Betcha = /ˈbetʃə/
              </p>

              <p className="text-gray-900 text-sm leading-relaxed mb-2">
                Informal contractions with “of”:
              </p>

              <p className="text-gray-900 text-sm leading-relaxed mb-2">
                63. Kinda = /ˈkaɪndə/
              </p>
              <p className="text-gray-900 text-sm leading-relaxed mb-2">
                64. Outta = /ˈaʊtə/
              </p>
              <p className="text-gray-900 text-sm leading-relaxed mb-2">
                65. Cuppa = /ˈkʌpə/
              </p>
              <p className="text-gray-900 text-sm leading-relaxed mb-2">
                66. Sorta = /ˈsɔːtə/
              </p>
              <p className="text-gray-900 text-sm leading-relaxed mb-2">
                67. Alotta = /əˈlɒtə/
              </p>

              <p className="text-gray-900 text-sm leading-relaxed mb-2">
                Informal contractions with “to”:
              </p>

              <p className="text-gray-900 text-sm leading-relaxed mb-2">
                68. Gotta = /ˈgɒtə/
              </p>
            </div>
          </div>
        </div>

        {/* page 49 Informal - Contractions: */}
        <div className="p-3 text-black md:p-10 bg-[#EFE5D6] book-shadow">
          <div className="flex justify-start gap-10 md:justify-start md:gap-96 mb-1">
            <h2 className="text-base lg:text-xl font-bold ">Page 49</h2>
            <button
              onClick={goToContents}
              className=" px-2 py-1 bg-blue-500 text-white text-xs md:text-base rounded hover:bg-white hover:text-blue-500"
            >
              Back to index
            </button>
          </div>
          <hr className="border border-gray-400" />
          <div className="text-base">
            <h3 className="font-bold pb-2">VInformal - Contractions: </h3>
            <div className="">
              <p className="text-gray-900 text-sm leading-relaxed mb-2">
                69. Gonna = /ˈgɒnə/
              </p>

              <p className="text-gray-900 text-sm leading-relaxed mb-2">
                70. Needa = /ˈniːdə/
              </p>
              <p className="text-gray-900 text-sm leading-relaxed mb-2">
                71. Wanna = /ˈwɒnə/
              </p>
              <p className="text-gray-900 text-sm leading-relaxed mb-2">
                72. Hafta = /ˈhæftə/
              </p>
              <p className="text-gray-900 text-sm leading-relaxed mb-2">
                73. Hasta = /ˈhæstə/
              </p>
              <p className="text-gray-900 text-sm leading-relaxed mb-2">
                74. Oughta = /ˈɔːtə/
              </p>
              <p className="text-gray-900 text-sm leading-relaxed mb-2">
                75. Supposta = /səˈpəʊstə/
              </p>
              <p className="text-gray-900 text-sm leading-relaxed mb-2">
                76. Usta = /ˈjuːstə/
              </p>

              <p className="text-gray-900 text-sm leading-relaxed mb-2">
                Other informal contractions:
              </p>

              <p className="text-gray-900 text-sm leading-relaxed mb-2">
                77. Gimme = /ˈgɪmi/
              </p>
            </div>
          </div>
        </div>
        {/* page 50 Informal - Contractions: */}
        <div className="p-3 text-black md:p-10 bg-[#EFE5D6] book-shadow">
          <div className="flex justify-start gap-10 md:justify-start md:gap-96 mb-1">
            <h2 className="text-base lg:text-xl font-bold ">Page 50</h2>
            <button
              onClick={goToContents}
              className=" px-2 py-1 bg-blue-500 text-white text-xs md:text-base rounded hover:bg-white hover:text-blue-500"
            >
              Back to index
            </button>
          </div>
          <hr className="border border-gray-400" />
          <div className="text-base">
            <h3 className="font-bold pb-2">Informal - Contractions: </h3>
            <div className="">
              <p className="text-gray-900 text-sm leading-relaxed mb-2">
                78. Lemme = /ˈlɛmi/
              </p>
              <p className="text-gray-900 text-sm leading-relaxed mb-2">
                79. Tell'em = /ˈteləm/
              </p>
              <p className="text-gray-900 text-sm leading-relaxed mb-2">
                80. Dunno = /dəˈnəʊ/
              </p>
              <p className="text-gray-900 text-sm leading-relaxed mb-2">
                81. Gotta = /ˈgɒtə/
              </p>
              <p className="text-gray-900 text-sm leading-relaxed mb-2">
                82. C’mon = /kəˈmɒn/
              </p>
            </div>
          </div>
        </div>

        {/* page 51 Unvoiced Sound + S: */}
        <div className="p-3 text-black md:p-10 bg-[#EFE5D6] book-shadow">
          <div className="flex justify-start gap-10 md:justify-start md:gap-96 mb-1">
            <h2 className="text-base lg:text-xl font-bold ">Page 51</h2>
            <button
              onClick={goToContents}
              className=" px-2 py-1 bg-blue-500 text-white text-xs md:text-base rounded hover:bg-white hover:text-blue-500"
            >
              Back to index
            </button>
          </div>
          <hr className="border border-gray-400" />
          <div className="">
            <h2 className="font-bold text-green-500 py-">
              Unvoiced Sound + S:
            </h2>
            <div className="text-base">
              <p className="">
                Unvoiced sound গুলো হলোঃ <br />
                <table className="table-auto border-collapse border border-gray-300 shadow-2xl max-w-fit text-center">
                  <tbody>
                    {[["P/প;", "T/ট;", "K/ক;", "F/ ফ;"]].map(
                      ([one, two, three, four], index) => (
                        <tr key={index} className="hover:bg-gray-50">
                          <td className="border border-gray-300 px-2 py-2">
                            {one}
                          </td>
                          <td className="border border-gray-300 px-2 py-2">
                            {two}
                          </td>
                          <td className="border border-gray-300 px-2 py-2">
                            {three}
                          </td>
                          <td className="border border-gray-300 px-2 py-2">
                            {four}
                          </td>
                        </tr>
                      )
                    )}
                  </tbody>
                </table>
              </p>
              <div className="overflow-x-auto">
                <p className="pt-2">
                  <span className="font-bold">Rule-1.</span> <br />
                  P/প; K/ট; K/ক; F/ ফ; - এরপর 'S' থাকলে 'S' এর উচ্চারণ
                  'স'/'চ'-এর মত হবে। যেমনঃ
                </p>
                <div className=" py-5">
                  <table className="table-auto border-collapse border border-gray-300 shadow-2xl w-full text-center">
                    <tbody>
                      {[
                        ["app", "apps", "/æps/", "অ্যাপস"],
                        ["Bat", "Bats", "/bæts/", "ব্যাটস"],
                        // ["Bat", "Bats", "/bæts/", "ব্যাটস"],
                      ].map(([word, Example, IPA, BPA], index) => (
                        <tr key={index} className="hover:bg-gray-50">
                          <td className="border border-gray-300 px-1 py-1">
                            {word}
                          </td>
                          <td className="border border-gray-300 px-1 py-1">
                            {Example}
                          </td>
                          <td className="border border-gray-300 px-1 py-1">
                            {IPA}
                          </td>
                          <td className="border border-gray-300 px-1 py-1">
                            {BPA}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <p className="pt-">
                <span className="font-bold">Rule-2.</span> <br />
                p/প; t/ট; k/ক; f/ফ; - ছাড়া শব্দের শেষে অন্য কোন অক্ষর এর পরে 'S'
                থাকলে 'S' এর উচ্চারণ 'z'/'য'/'জ' - এর মত হবে। যেমনঃ
              </p>
            </div>
          </div>
        </div>

        {/* page 52 Unvoiced Sound + S: */}
        <div className="p-4 text-black md:p-10 bg-[#EFE5D6] book-shadow ">
          <div className="flex justify-start gap-10 md:justify-start md:gap-96 mb-1">
            <h2 className="text-base lg:text-xl font-bold ">Page 52</h2>
            <button
              onClick={goToContents}
              className=" px-2 py-1 bg-blue-500 text-white text-xs md:text-base rounded hover:bg-white hover:text-blue-500"
            >
              Back to index
            </button>
          </div>
          <hr className="border border-gray-400" />
          <div className="">
            <h2 className="font-bold text-green-500 py-1">
              Unvoiced Sound + S:
            </h2>
            <div className="pb-5 text-base">
              <table className="table-auto border-collapse border border-gray-300 shadow-2xl w-full text-center">
                <tbody>
                  {[
                    ["hand", "hands", "/hænz/", "হ্যাঞ্জ"],
                    ["Pen", "pens", "/penz/", "ফেঞ্জ"],
                  ].map(([word, Example, IPA, BPA], index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="border border-gray-300 px-1 py-1">
                        {word}
                      </td>
                      <td className="border border-gray-300 px-1 py-1">
                        {Example}
                      </td>
                      <td className="border border-gray-300 px-1 py-1">
                        {IPA}
                      </td>
                      <td className="border border-gray-300 px-1 py-1">
                        {BPA}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="text-base">
              <p className="pt-1">
                Rule-3. <br />
                শব্দের শেষে 'es'- থাকলে 'es 'এর উচ্চারণ 'ইয'-এর মত হবে। যেমনঃ
                <br />
              </p>
              <table className="table-auto border-collapse border border-gray-400 shadow-2xl w-full text-center">
                <tbody>
                  {[
                    ["Ass", "Asss", "/æsız/", "অ্যাসিয"],
                    ["Bus", "Buss", "/bæsız/", "বাসিয"],
                  ].map(([word, Example, IPA, BPA], index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="border border-gray-300 px-1 py-1">
                        {word}
                      </td>
                      <td className="border border-gray-300 px-1 py-1">
                        {Example}
                      </td>
                      <td className="border border-gray-300 px-1 py-1">
                        {IPA}
                      </td>
                      <td className="border border-gray-300 px-1 py-1">
                        {BPA}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div className="pt-5">
                <div className="">
                  <p className="">
                    Rule-4. <br />
                    Verb এর শেষে যদি (ed)- এর পূর্বে "p/প;", "t/ট;", "k/ক;", "f/
                    ফ;", থাকে তাহলে 'ed' এর উচ্চারণ /t/ -এর মত হবে। যেমনঃ
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* page 53 Unvoiced Sound + S: */}
        <div className="p-3 text-black md:p-10 bg-[#EFE5D6] book-shadow">
          <div className="flex justify-start gap-10 md:justify-start md:gap-96 mb-1">
            <h2 className="text-base lg:text-xl font-bold ">Page 53</h2>
            <button
              onClick={goToContents}
              className=" px-2 py-1 bg-blue-500 text-white text-xs md:text-base rounded hover:bg-white hover:text-blue-500"
            >
              Back to index
            </button>
          </div>
          <hr className="border border-gray-400" />
          <div className="">
            <p className="font-bold text-green-500 py-2">Unvoiced Sound + S:</p>
            <div className="pt-">
              <table className="table-auto border-collapse border border-gray-300 shadow-2xl w-full text-center py-5">
                <tbody>
                  {[
                    ["p/প/ফ", "P", "stop", "stopped", "স্টপ্ট"],
                    ["t/ট/ঠ", "T", "walk", "walked", "ওয়াক্ট"],
                    ["k/ক/খ", "K", "talked", "talked", "টক্ট"],
                    // ["f/ফ", "F", "laugh", "laughed", "লাফট"],
                  ].map(([Sound, Letter, Word, participle, উচ্চারণ], index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="border border-gray-300 px-1 py-1">
                        {Sound}
                      </td>
                      <td className="border border-gray-300 px-1 py-1">
                        {Letter}
                      </td>
                      <td className="border border-gray-300 px-1 py-1">
                        {Word}
                      </td>
                      <td className="border border-gray-300 px-1 py-1">
                        {participle}
                      </td>
                      <td className="border border-gray-300 px-1 py-1">
                        {উচ্চারণ}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="text-base">
              <div className="">
                <p className="pt-3">
                  Rule-5. <br />
                  কিন্তু যদি (ed)- এর পূর্বে /t-ট/ অথবা /d-ড/ থাকে তাহলে 'ed' এর
                  উচ্চারণ/id/ অর্থাৎ 'ইড'-এর মত হবে।
                </p>
                <div className="">
                  <table className="table-auto border-collapse border border-gray-300 shadow-2xl w-full text-center py-5">
                    <tbody>
                      {[
                        ["t/ট/ঠ", "T", "Create", "created", "ক্রিয়েটিড"],
                        ["d/ড ", "D", "amend", "amended", "অ্যমেনডিড"],
                      ].map(
                        ([Sound, Letter, Word, participle, উচ্চারণ], index) => (
                          <tr key={index} className="hover:bg-gray-50">
                            <td className="border border-gray-300 px-1 py-1">
                              {Sound}
                            </td>
                            <td className="border border-gray-300 px-1 py-1">
                              {Letter}
                            </td>
                            <td className="border border-gray-300 px-1 py-1">
                              {Word}
                            </td>
                            <td className="border border-gray-300 px-1 py-1">
                              {participle}
                            </td>
                            <td className="border border-gray-300 px-1 py-1">
                              {উচ্চারণ}
                            </td>
                          </tr>
                        )
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <h2 className="heading2 pt-2 text-center">ASM English Academy</h2>
        </div>

        {/* page 54 Syllable */}
        <div className="p-3 text-black md:p-10 bg-[#EFE5D6] book-shadow">
          <div className="flex justify-start gap-10 md:justify-start md:gap-96 mb-2">
            <h2 className="text-base lg:text-xl font-bold ">Page 54</h2>
            <button
              onClick={goToContents}
              className=" px-2 py-1 bg-blue-500 text-white text-xs md:text-base rounded hover:bg-white hover:text-blue-500"
            >
              Back to index
            </button>
          </div>
          <hr className="border border-gray-400" />
          <div className="">
            <p className="font-bold  pt-1">Syllable(শব্দাংশ):</p>
            <div className="text-base">
              <p className="pt-2">
                ইংরেজি শব্দ গঠন শিখতে syllable খুব গুরত্বপূর্ণ একটা অংশ। মোটা
                দাগে বলতে গেলে- syllable হলো শব্দের সেই part বা অংশ যেটা ছাড়া
                ইংরেজির সঠিক উচ্চারণ সম্ভব নয়। <br />
                যেমনঃ <br />
                Badminton/bæd.minton/ [ব্যাড.মিনট্যন] <br />
              </p>
              <p className="">
                Badminton শব্দের দুইটি অংশ 'bæd.minton এবং এই শব্দের মধ্যে তিনটি
                স্বরধ্বনি রয়েছে যথা: /æ, I, ǝ/ ; কাজেই, Badminton শব্দটি তিন
                syllable word। <br />
                একটি শব্দে যতগুলো স্বরধ্বনি (vowel sound) থাকবে উক্ত শব্দের
                ততগুলো syllable হবে। যেমন: <br />
                Bat - /b/æ/t/ (১ টি syllable) <br />
                Teacher - /ˈtiːtʃə(r)/ - (২ টি syllable) <br />
                Intelligent - /ɪnˈtelɪdʒəns/ - (৪ টি syllable) <br />
              </p>
            </div>
          </div>
        </div>

        {/* page 55 Syllable */}
        <div className="p-3 text-black md:p-10 bg-[#EFE5D6] book-shadow">
          <div className="flex justify-start gap-10 md:justify-start md:gap-96 mb-1">
            <h2 className="text-base lg:text-xl font-bold ">Page 55</h2>
            <button
              onClick={goToContents}
              className=" px-2 py-1 bg-blue-500 text-white text-xs md:text-base rounded hover:bg-white hover:text-blue-500"
            >
              Back to index
            </button>
          </div>
          <hr className="border border-gray-400" />
          <div className="">
            <p className="font-bold">Syllable</p>
            <div className="text-base">
              <p className="">
                <span className="font-bold">Syllable দুই ধরণের আছেঃ</span>{" "}
                <br />
                (i) Open syllable এবং (ii) Closed syllable
              </p>
              <p className="pt-1">
                <span className="font-bold">Closed Syllable:</span> <br />
                যদি syllable-এর শেষে consonant থাকে, তাকে closed syllable বলা
                হয়ে থাকে। তাছাড়া, closed syllable vowel-এর উচ্চারণ short vowel
                sound এর মত হয়ে থাকে। <br />
                Can - /kæn/ - [ক্যান]; Hen - /hen/ - [হেন]; <br />
              </p>
              <p className="pt-1">
                <span className="font-bold">Open Syllable:</span> <br />
                যদি syllable-এর শেষে Vowel থাকে, তাকে open syllable বলা হয়ে
                থাকে। তাছাড়া, open syllable vowel-এর উচ্চারণ long vowel sound এর
                মত হয়ে থাকে। <br />
                Do - /du:/ - [ডূ:]; See - /si:/ - [সী:]; <br />
              </p>
            </div>
          </div>
          <h3 className="heading2 text-center pt-2">ASM English Academy</h3>
        </div>

        {/* page 56 Stress */}
        <div className="p-3 text-black md:p-10 bg-[#EFE5D6] book-shadow">
          <div className="flex justify-start gap-10 md:justify-start md:gap-96 mb-1">
            <h2 className="text-base lg:text-xl font-bold ">Page 56</h2>
            <button
              onClick={goToContents}
              className=" px-2 py-1 bg-blue-500 text-white text-xs md:text-base rounded hover:bg-white hover:text-blue-500"
            >
              Back to index
            </button>
          </div>
          <hr className="border border-gray-400" />
          <div className="">
            <h2 className="font-bold text-pink-600">Stress(শ্বাসাঘাত/চাপ):</h2>
            <div className="text-[15px]">
              <p className="">
                যে syllable এর শুরুতে stress চিহ্ন দেয়া থাকে, উক্ত syllable কে
                stressed syllable বলে। যেমন: <br />
                Attention - /əˈten.ʃn/ - [আ'টেনশান]। <br />
                <span className="font-bold">Primary Stress - </span>
                উত্তোলিত তিলক চিহ্নের/'/মাধ্যমে দেখানো হয়। তিলক চিহ্ন যুক্ত
                syllable এর উচ্চারণ একটু Louder এবং longer হয়। <br />{" "}
                <span className="font-bold">Secodary Stress - </span>নিচে
                ডট/খাড়া চিহ্নের /./ মাধ্যমে দেখানো হয়। ডট/খাড়া চিহ্ন যুক্ত
                syllable এর উচ্চারণ একটু দূর্বল/কম Louder এবং কম longer হয়।
                <br />
                <span className="font-bold">ব্যাখ্যাঃ </span> এখানে Attention
                শব্দের দ্বিতীয় syllable এর শুরুতে stress চিহ্ন দেওয়া হয়েছে।
                দ্বিতীয় syllable টি একটু জোরালো এবং দীর্ঘ হবে। আর ৩য় syllable এর
                শুরুতে ডট/খাড়া চিহ্ন দেওয়া হয়েছে। এর উচ্চারণ Primary Stress এর
                চেয়ে একটু দূর্বল হবে।
                {/* উদাহরণ: <br /><br />
                Important - /ım'pɔːtənt/ - [ইম'পটান্ট] <br />
                Belief -/bi'li:f/ - [বি'লি:ফ] <br /> */}
              </p>
            </div>
          </div>
        </div>

        {/* page 57 Stress */}
        <div className="p-3 text-black md:p-10 bg-[#EFE5D6] book-shadow">
          <div className="flex justify-start gap-10 md:justify-start md:gap-96 mb-1">
            <h2 className="text-base lg:text-xl font-bold ">Page 57</h2>
            <button
              onClick={goToContents}
              className=" px-2 py-1 bg-blue-500 text-white text-xs md:text-base rounded hover:bg-white hover:text-blue-500"
            >
              Back to index
            </button>
          </div>
          <hr className="border border-gray-400" />
          <div className="">
            <p className="font-bold text-pink-700">Stress Rules:</p>
            <div className="text-base">
              <p className="pt-1">
                ➡️ সাফ কথাঃ <br />
                প্রথম, দ্বিতীয়, ৩য়, ৪র্থ syllable এও stress হতে পারে। কিন্তু
                তিন/ততোধিক syllable এর শব্দে কখনও শেষ syllable এ stress হ্যনা।
                stress এর সঠিক প্রয়োগ না হলে শব্দের/ বাক্যের অর্থ পরিবর্তন হয়ে
                যেতে পারে। <br />
              </p>
              <h2 className="text-green-700">1.Two Syllable Words-</h2>
              <h3 className="text-pink-700">Noun & Adjective:</h3>
              <p className="">
                ➡️ দুই syllable word যদি Noun অথবা Adjective হয়, তাহলে অধিকাংশ
                সময় প্রথম syllable এ stress হবে। যেমনঃ <br />
                <span className="font-bold">hap</span>py - /ˈhæpi/ - ['হ্যাপী]{" "}
                <br />
                <span className="font-bold">Ap</span>ple -/ˈæpl/ - [অ্যাপল]{" "}
                <br />
                <span className="font-bold">Lea</span>der - /'li:dər/ - [লি:ডার]{" "}
                <br />
                <span className="font-bold">Dan</span>ger - /ˈdeɪndʒər/ -
                [ডেইন:জার] <br />
              </p>
            </div>
          </div>
        </div>

        {/* page 58 Stress */}
        <div className="p-3 text-black md:p-10 bg-[#EFE5D6] book-shadow">
          <div className="flex justify-start gap-10 md:justify-start md:gap-96 mb-1">
            <h2 className="text-base lg:text-xl font-bold ">Page 58</h2>
            <button
              onClick={goToContents}
              className=" px-2 py-1 bg-blue-500 text-white text-xs md:text-base rounded hover:bg-white hover:text-blue-500"
            >
              Back to index
            </button>
          </div>
          <hr className="border border-gray-400" />
          <div className="">
            <p className="font-bold text-pink-700">Stress Rules:</p>
            <div className="text-base">
              <h3 className="text-pink-700">Verbs:</h3>
              <p className="">
                ➡️ দুই syllable word টি Verb হলে অধিকাংশ সময় দ্বিতীয় Syllable এ
                Stress পড়ে যেমনঃ <br />
                {/* Re<span className="font-bold">lax</span> - /rɪˈlæks/ - [রি 'ল্যাক্স] <br /> */}
                Res<span className="font-bold">pect</span> -/rɪˈspekt/ - [রিস
                'পেক্ট] <br />A<span className="font-bold">djust</span> -
                /əˈdʒʌst/ - [অ্যা 'জাস্ট] <br />
              </p>
              <h2 className="text-green-700">2. Compound Words:</h2>
              <p className="">
                👉 Compound words are formed when more than one words are
                combined to create new word.
              </p>
              <p className="">
                <h3 className="text-pink-700">Compound Nouns:</h3>
                ➡️ Compound Word টি Noun হলে firs-part এ Stress হবে। যেমনঃ{" "}
                <br />
                <span className="font-bold">green</span>house - /ˈɡriːnhaʊs/ - [
                'গ্রিন:হাউচ ] <br />
                <span className="font-bold">bath</span>room - /ˈbɑːθruːm/ - [
                'বাথ:রুম ] <br />
              </p>
            </div>
          </div>
        </div>

        {/* page 59 Stress */}
        <div className="p-3 text-black md:p-10 bg-[#EFE5D6] book-shadow">
          <div className="flex justify-start gap-10 md:justify-start md:gap-96 mb-1">
            <h2 className="text-base lg:text-xl font-bold ">Page 59</h2>
            <button
              onClick={goToContents}
              className=" px-2 py-1 bg-blue-500 text-white text-xs md:text-base rounded hover:bg-white hover:text-blue-500"
            >
              Back to index
            </button>
          </div>
          <hr className="border border-gray-400" />
          <div className="">
            <p className="font-bold text-pink-700">Stress Rules:</p>
            <div className="text-base">
              <p className="">
                <h3 className="text-pink-700">Compound Adjectives:</h3>
                ➡️ Compound Word টি Adjective হলে second-part এ Stress হবে।
                যেমনঃ <br />
                well-<span className="font-bold">kn</span>own - /ˌwel ˈnəʊn/ -
                [ওয়েল'নৌন] <br />
                good-<span className="font-bold">loo</span>king - /ˌɡʊd ˈlʊkɪŋ/
                - [গুড'লুকিং] <br />
              </p>
              <h3 className="text-pink-700">Compound Verbs: </h3>
              <p className="">
                ➡️ Compound Word টি Verb হলে অধিকাংশ সময় দ্বিতীয় part এ Stress
                হবে। যেমনঃ <br />
                out-<span className="font-bold">num</span>ber - /ˌaʊtˈnʌmbər/ -
                [আউট'নাম্বার] <br />
                over-<span className="font-bold">egg</span> - /ˌəʊvər ˈeɡ/ -
                [ওভার'এগ] <br />
              </p>
              <h3 className="text-green-700">
                Words with Prefixes & Suffixes:{" "}
              </h3>
              <p className="">
                👉 Prefixes & Suffixes can also influence stess placement:
              </p>
            </div>
          </div>
        </div>

        {/* page 60 Stress */}
        <div className="p-3 text-black md:p-10 bg-[#EFE5D6] book-shadow">
          <div className="flex justify-start gap-10 md:justify-start md:gap-96 mb-1">
            <h2 className="text-base lg:text-xl font-bold ">Page 60</h2>
            <button
              onClick={goToContents}
              className=" px-2 py-1 bg-blue-500 text-white text-xs md:text-base rounded hover:bg-white hover:text-blue-500"
            >
              Back to index
            </button>
          </div>
          <hr className="border border-gray-400" />
          <div className="">
            <p className="font-bold text-pink-700">Stress Rules:</p>
            <div className="text-base">
              <p className="">
                ➡️ <span className="text-pink-700 font-bold">Prefixes:</span>
                The stress remain on the main part, not ont the prefix. (সাধারণত
                প্রধান main-part এ Stress হবে) । যেমনঃ <br />
                un<span className="font-bold">important</span> - /ˌʌnɪmˈpɔːrtnt/
                - [আনই'ম্পটান্ট] <br />i{" "}
                <span className="font-bold">llogical</span> - ɪˈlɒdʒɪkl/ -
                [ই'লজিকল] <br />
              </p>
              <p className="">
                ➡️ <span className="text-pink-700 font-bold">Suffixes: </span>
                Some suffixes do not change the stress, while others do. Here
                are common patterns. ( Suffixes এ সাধারণত Stress হয় না, কিছু হয়;
                এখানে কিছু প্যাটার্ন আলোচনা করা হলো)। <br />
                <span className=" font-bold">
                  👉 যে Suffix গুলো Stess পরিবর্তণ করেনাঃ
                </span>{" "}
                -ly, ness, full <br />
                <span className="font-bold">use</span>ful - /ˈjuːsfl/ -
                ['ইউচঃফল] <br />
                <span className="font-bold">aware</span>ness - /əˈweənəs/ -
                [আ'ওয়ানেচ] <br />
                <span className="font-bold">calm</span>ly - /ˈkɑːmli/ -
                ['কাঃমলি] <br />
              </p>
            </div>
          </div>
        </div>

        {/* page 61 Stress */}
        <div className="p-3 text-black md:p-10 bg-[#EFE5D6] book-shadow">
          <div className="flex justify-start gap-10 md:justify-start md:gap-96 mb-1">
            <h2 className="text-base lg:text-xl font-bold ">Page 61</h2>
            <button
              onClick={goToContents}
              className=" px-2 py-1 bg-blue-500 text-white text-xs md:text-base rounded hover:bg-white hover:text-blue-500"
            >
              Back to index
            </button>
          </div>
          <hr className="border border-gray-400" />
          <div className="">
            <p className="font-bold text-pink-700">Stress Rules:</p>
            <div className="text-base">
              <p className="">
                <span className=" font-bold">
                  👉যে সাফিক্স গুলোতে Stress হয়/ কর
                </span>{" "}
                -ee, -eer, -ese, -ique, -esque <br />
                employ<span className="font-bold">ee</span> - /ɪmˈplɔɪiː/ -
                [ইমপ্ল'ই] <br />
                engin<span className="font-bold">eer</span> - /ˌendʒɪˈnɪə(r)/ -
                [এঞ্জি'নিয়া(র)] <br />
                Japanese<span className="font-bold">nese</span> - /ˌdʒæpəˈniːz/
                - [জ্যাপ'নিজ] <br />
              </p>
              <h2 className="text-green-700">Multi-syllable Words</h2>
              <p className="">
                তিন বা তার অধীক Syllables যুক্ত শব্দগুলোতে Stress ব্যাপকভাবে
                বিভিন্ন রকমের হয়ে থাকে। However, নির্দিস্ট কিছু সাফিক্স স্ট্রেচ
                দেয়ার জন্য কিছু Clue দেয়: <br />
                <span className=" font-bold">
                  👉Words ending in -tion, -sion, -ical, -ic, -ity:{" "}
                </span>{" "}
                এই সাফিক্স গুলোর পূর্বের সিলেবলে সাধারণত Stress হয়
                <br />
                distri<span className="font-bold">bu</span>tion -
                /ˌdɪstrɪˈbjuːʃn/ - [ডিচট্রি'বিউঃসন] <br />
                Con<span className="font-bold">clu</span>sion - /kənˈkluːʒn// -
                [কন'ক্লুঃজন] <br />
              </p>
            </div>
          </div>
        </div>

        {/* page 62 Stress */}
        <div className="p-3 text-black md:p-10 bg-[#EFE5D6] book-shadow">
          <div className="flex justify-start gap-10 md:justify-start md:gap-96 mb-1">
            <h2 className="text-base lg:text-xl font-bold ">Page 62</h2>
            <button
              onClick={goToContents}
              className=" px-2 py-1 bg-blue-500 text-white text-xs md:text-base rounded hover:bg-white hover:text-blue-500"
            >
              Back to index
            </button>
          </div>
          <hr className="border border-gray-400" />
          <div className="">
            <p className="font-bold text-pink-700">Stress Rules:</p>
            <div className="text-base">
              <h2 className="text-pink-700">Sentence Stress</h2>
              <p className="">
                ইংরেজিতে Word Stress এর সাথে Sentence Stress ও আবশ্যক। Sentence
                Stress বলতে বুঝায় বাক্যের মধ্যে ঐ শব্দের উপরে জোর/Stress দেওয়া
                যে শব্দটির দ্বার বিশেষ অর্থ প্রকাশ/বহন করাতে চাই। সাধারণত
                Content Words ( যেমনঃ Noun, main Verbs, Adjective, and adverbs)
                stress হয়না। অপরপক্ষে function word (যেমনঃ articles,
                preposition, auxiliary verbs, and conjunction) unstressed থাকে।
                যেমনঃ <br />
                <span className="font-bold">I </span>{" "}
                <span className="font-bold text-pink-600">want</span> a{" "}
                <span className="font-bold text-pink-600">new car</span>. <br />
                <span className=" font-bold">👉 Content Words: </span> want new
                car. <br />
                <span className=" font-bold">
                  👉 Function Words: I, a.{" "}
                </span>{" "}
                <br />
                Emphasis এর কারণে স্ট্রেচ পরিবর্ত হতেও পারে। মানে-. . .
              </p>
            </div>
          </div>
        </div>

        {/* page 63 Stress */}
        <div className="p-3 text-black md:p-10 bg-[#EFE5D6] book-shadow">
          <div className="flex justify-start gap-10 md:justify-start md:gap-96 mb-1">
            <h2 className="text-base lg:text-xl font-bold ">Page 63</h2>
            <button
              onClick={goToContents}
              className=" px-2 py-1 bg-blue-500 text-white text-xs md:text-base rounded hover:bg-white hover:text-blue-500"
            >
              Back to index
            </button>
          </div>
          <hr className="border border-gray-400" />
          <div className="">
            <p className="font-bold text-green-700">Stress Rules:</p>
            <div className="text-base">
              <h2 className="text-pink-700">Stress Shift for Emphasis</h2>
              <p className="">
                Sometimes, stress can shift to indicate the change of meaning or
                focus within a sentence: <br />
                1. <span className="font-bold">I </span>didn't say he stole the
                money. (Someone else said it.) <br />
                2. I didn't <span className="font-bold">say </span>he stole the
                money. (I didn't say it; I might have implied it or written it.){" "}
                <br />
                3. I didn't say <span className="font-bold">he </span> stole the
                money. (I said Someone else stole it.) <br />
                4. I didn't say he <span className="font-bold">stole</span> the
                money. ( He borrowed it or found it.) <br />
              </p>
              <p className="">
                ➡️ব্যতিক্রমঃ <br />
                Word কিছু ব্যতিক্রম আছে মানসম্মত অভিধান দেখে দেখে চর্চা করতে
                হবে। যেমনঃ <br />
                {/* Anyone - /ˈeniwʌn/ - [এনীওয়ান] <br /> */}
                Beautiful - /ˈbjuːtɪfl/- [বিউটিফল্] <br />
              </p>
            </div>
            <p className="heading2 text-center pt-10">ASM English Academy</p>
          </div>
        </div>

        {/* page 64 Stress */}
        <div className="p-3 text-black md:p-10 bg-[#EFE5D6] book-shadow">
          <div className="flex justify-start gap-10 md:justify-start md:gap-96 mb-1">
            <h2 className="text-base lg:text-xl font-bold ">Page 64</h2>
            <button
              onClick={goToContents}
              className=" px-2 py-1 bg-blue-500 text-white text-xs md:text-base rounded hover:bg-white hover:text-blue-500"
            >
              Back to index
            </button>
          </div>
          <hr className="border border-gray-400" />
          <div className="">
            <p className="font-bold text-pink-700">Stress (শ্বাসাঘাত)/চাপ:</p>
            <div className="text-base">
              <p className="">
                /ɪ/ <br />
                E দিয়ে লেখা unstressed prefixes (de, re, pre, ex etc) এর
                ক্ষেত্রে unstressed syllable এর উচ্চারণ /ɪ/ [ই] হয়। <br />
                Debate - /dɪˈbeɪt/- [ডি'বেইট] <br />
                Delete - /dɪˈliːt/- [ডি'লি:ট] <br />
                Develop - /dı veləp/- [ডি'ভেলাপ] <br />
                Demand - /dɪˈmɑːnd/- [ডি'মা:ন্ড] <br />
                Exam- /ɪgzæm/- [ইগ'জ্যাম.] <br />
                Excel- /ık'sel/- [ইক'সেল.] <br />
                Prefer - /prɪˈfɜːr/- [প্রি'ফা:(র)] <br />
                Renew - /rɪˈnuː/ - [রি'নিউ:]
              </p>
            </div>
            <p className="heading2 text-center pt-10">ASM English Academy</p>
          </div>
        </div>

        {/* page 65 Assimilation d + y */}
        <div className="p-3 text-black md:p-10 bg-[#EFE5D6] book-shadow">
          <div className="flex justify-start gap-10 md:justify-start md:gap-96 mb-2">
            <h2 className="text-base lg:text-xl font-bold ">Page 65</h2>
            <button
              onClick={goToContents}
              className=" px-2 py-1 bg-blue-500 text-white text-xs md:text-base rounded hover:bg-white hover:text-blue-500"
            >
              Back to index
            </button>
          </div>
          <hr className="border border-gray-400" />
          <div className="">
            <h2 className="font-bold">
              Assimilation('সন্ধি'):
            </h2>
            <div className="text-base">
              <p className="text-sm">
                ইংরেজিতে দ্রুত বা অনর্গল কথা বলার আরেকটি মাধ্যম হলো Assimilation
                বা 'সন্ধি' যার অর্থ হলো একসাথে ২টি বা ৩টি ইংরেজি শব্দ একত্রে
                উচ্চারণ করা।
                <br />
                এখানে মনে রাখতে হবে যে এখানে প্রথম শব্দের শেষ sound-এর সাথে ২য়
                শব্দের প্রথম sound এর Assimilation বা সন্ধি হবে। যেমনঃ <br />
                {/* নিম্নে অনেকগুলো উদাহরণ প্রদত্ত হলঃ <br /> */}
              </p>
              <p className="">
                {/* Assimilation-1 <br /> */}
                 <span className="text-pink-600 font-bold text-xl">
                  d + y = জ (/d/→/dʒ/) 
                  </span> <br />
                {/* /d/ sound এর পরিবর্তে/dʒ/ (জ) sound উচ্চারণ করুন। <br /> */}
                If the first word ends with <span className="font-bold">/d/</span> and the next word starts with 
                <span className="font-bold"> /j/ </span> then
                <span className="font-bold">/d/</span> sound এর পরিবর্তে <span className="font-bold">/dʒ/</span> sound উচ্চারণ করুন। যেমনঃ <br />

                {/* Would<sup>dʒ</sup>d you<br /> */}
                Woul<strong>d </strong>  you- উজ + ইউ = উজিউ <br />
                {/* Did you <br /> */}
                Di<strong>d</strong> you - ডিজ + ইউ = ডিজিউ <br />
                {/* Ha <sup>dʒ</sup>d you<br /> */}
                Ha<strong>d</strong> you - হ্যাজ + ইউ = হ্যাজিউ<br />
                Coul<strong>d</strong> you - কুজ + ইউ = কুজিউ<br />
                An<strong>d</strong> you - এনজ + ইউ = এনজিউ<br />
              </p>
            </div>
          </div>
        </div>

        {/* page 66 Assimilation t + y */}
        <div className="p-3 text-black md:p-10 bg-[#EFE5D6] book-shadow">
          <div className="flex justify-start gap-10 md:justify-start md:gap-96 mb-1">
            <h2 className="text-base lg:text-xl font-bold ">Page 66</h2>
            <button
              onClick={goToContents}
              className=" px-2 py-1 bg-blue-500 text-white text-xs md:text-base rounded hover:bg-white hover:text-blue-500"
            >
              Back to index
            </button>
          </div>
          <hr className="border border-gray-400" />
          <div className="">
            <h3 className="font-bold">
              Assimilation:
            </h3>
            <div className="text-base text-justify">
              <p className="">
              <span className="text-pink-600 font-bold text-xl"> 
                t + y = (/t/ → /t∫/) = চ
              </span> <br />
              {/* অর্থাৎ /t/ sound এর পরিবর্তে /tʃ/ (চ) sound উচ্চারণ করুন। <br /> */}
              If the first word ends with <span className="font-bold">/t/</span> and the next word starts with 
              <span className="font-bold">/j/</span> then
              <span className="font-bold">/t/</span> sound এর পরিবর্তে <span className="font-bold">/tʃ/</span> sound উচ্চারণ করুন। যেমনঃ  <br />
              Meet you <br />
              Meets you - মিচ + ইউ = মিচিউ <br />
              Get you <br />
              Gets you - গেচ + ইউ = গেচিউ <br />
              But you <br />
              But you - বাচ + ইউ = বাচিউ <br />
              {/* <span className="font-bold">/t/ → /tʃ/</span><br /> */}
              abou<span className="font-bold">t</span> you - এবাচিউ<br />
              a<span className="font-bold">t</span> you - এচিউ<br />
              bi<span className="font-bold">te</span> you - বাইচিউ
              </p>
              
            </div>
          </div>
        </div>
        {/* page 67 Assimilation */}
        <div className="p-3 text-black md:p-10 bg-[#EFE5D6] book-shadow">
          <div className="flex justify-start gap-10 md:justify-start md:gap-96 mb-1">
            <h2 className="text-base lg:text-xl font-bold ">Page 67</h2>
            <button
              onClick={goToContents}
              className=" px-2 py-1 bg-blue-500 text-white text-xs md:text-base rounded hover:bg-white hover:text-blue-500"
            >
              Back to index
            </button>
          </div>
          <hr className="border border-gray-400" />
          <div className="">
            <h3 className="font-bold">
              Assimilation:
            </h3>
            <div className="text-base text-justify">
              <p className="">
                {/* Assimilation-3 <br /> */}
                 <span className="text-pink-600 font-bold ">
                  N + M = ম (/n/ → /m/)
                 </span>  <br />
                অর্থাৎ /n/ sound এর পরিবর্তে /m/ (ম) sound উচ্চারণ করুন। <br />
                If the first word ends with <span className="font-bold">/n/</span> and the next word starts with <span className="font-bold">/m/</span>,
                then <span className="font-bold">/n/</span> sound এর পরিবর্তে <span className="font-bold">/m/</span> sound উচ্চারণ করুন। যেমনঃ
                <br />
                One more:  /wʌmmɔː/ <br />
                Omne more ওয়াম + মো = ওয়ামো <br />
                Can make: <br />
                Can make -খ্যাম + মেইখ = খ্যামেইখ <br />
                O<span className="font-bold">n</span>e pair /wʌmpeə/<br />
                Te<span className="font-bold">n</span> more<br />
                Ca<span className="font-bold">n</span> buy<br />
                Ca<span className="font-bold">n</span> please<br />
                Quatio<span className="font-bold">n</span> mark<br /><br />
              </p>
            </div>
          </div>
        </div>

        {/* page 68 Assimilation /d/ → /b/ */}
        <div className="p-3 text-black md:p-10 bg-[#EFE5D6] book-shadow">
          <div className="flex justify-start gap-10 md:justify-start md:gap-96 mb-1">
            <h2 className="text-base lg:text-xl font-bold ">Page 68</h2>
            <button
              onClick={goToContents}
              className=" px-2 py-1 bg-blue-500 text-white text-xs md:text-base rounded hover:bg-white hover:text-blue-500"
            >
              Back to index
            </button>
          </div>
          <hr className="border border-gray-400" />
          <div className="">
            <p className="font-bold">
              Assimilation:
            </p>
            <div className="text-base text-justify">
              <p className="">
                {/* Assimilation-4 <br /> */}
                <span className="text-pink-600 font-bold text-xl">
                  /d/ → /b/ 
                  </span>
                {/* /d/ sound এর পরিবর্তে /b/ sound উচ্চারণ করা হয়ে
                থাকে।  */}
                <br />
                অর্থাৎ If the first word ends with <span className="font-bold">/d/</span> and the next word starts with
                <span className="font-bold">/m/, /p/ or /b/</span>,
                then <span className="font-bold">/d/ </span> sound এর পরিবর্তে <span className="font-bold">/b/</span> sound উচ্চারণ করুন। <br />
                Good morning: <br />
                Goo'd morning - গুব + মনিং = গুবমনিং <br />
                Good bye: <br />
                Goo'd bye - গুব + বাই = গুবাই <br />
                Bad boy: <br />
                Ba'd boy - ব্যাব + বয় = ব্যাবয় <br />
                Stand by: <br />
                Stan'd by - স্ট্যাম্ব + বাই = স্ট্যাম্ববাই <br />
                ba<span className="font-bold">d</span> pain<br />
                goo<span className="font-bold">d</span> man<br />
              </p>
              
            </div>
          </div>
        </div>
        {/* page 69 Assimilation /d/ → /k/ */}
        <div className="p-3 text-black md:p-10 bg-[#EFE5D6] book-shadow">
          <div className="flex justify-start gap-10 md:justify-start md:gap-96 mb-1">
            <h2 className="text-base lg:text-xl font-bold ">Page 69</h2>
            <button
              onClick={goToContents}
              className=" px-2 py-1 bg-blue-500 text-white text-xs md:text-base rounded hover:bg-white hover:text-blue-500"
            >
              Back to index
            </button>
          </div>
          <hr className="border border-gray-400" />
          <div className="">
            <p className="font-bold">
              Assimilation:
            </p>
            <div className="text-base text-justify">
              <p className="">
                {/* Assimilation-5 <br /> */}
                <span className="text-pink-600 font-bold text-xl">
                  /d/ → /k/
                </span>  <br /> 
                অর্থাৎ/t/ sound এর পরিবর্তে /k/ sound উচ্চারণ করা হয়ে
                থাকে। <br />
                If the first word ends with <span className="font-bold">/d/</span> and the next word starts with 
                <span className="font-bold"> /g/</span> or <span className="font-bold">/k/</span>,
                then <span className="font-bold">/d/</span> sound এর পরিবর্তে <span className="font-bold">/k/</span> sound উচ্চারণ করুন।
                <br />
                Bad girls: <br />
                Ba<span className="font-bold">d</span> girl - ব্যাখ + গাল = ব্যাকগাল <br />
                Bold crew: <br />
                Bol<span className="font-bold">d</span> crew - বৌল্ক + ক্রু = বৌল্কখ্রু <br />
                re<span className="font-bold">d</span> carpet<br />
                ha<span className="font-bold">d</span> cut<br />
              </p>
            </div>
          </div>
        </div>

        {/* page 70 Assimilation  /n/ → /ŋ/ */}
        <div className="p-3 text-black md:p-10 bg-[#EFE5D6] book-shadow">
          <div className="flex justify-start gap-10 md:justify-start md:gap-96 mb-2">
            <h2 className="text-base lg:text-xl font-bold ">Page 70</h2>
            <button
              onClick={goToContents}
              className=" px-2 py-1 bg-blue-500 text-white text-xs md:text-base rounded hover:bg-white hover:text-blue-500"
            >
              Back to index
            </button>
          </div>
          <hr className="border border-gray-400" />
          <div className="">
            <p className="font-bold">
              Assimilation(সন্ধি):
            </p>
            <div className="text-base text-justify">
              <p className="">
                {/* Rule-6 <br /> */}
                <span className="text-pink-600 font-bold text-xl">
                  /n/ → /ŋ/ 
                </span>  <br /> 
                অর্থাৎ /n/ sound এর পরিবর্তে /ŋ/ sound উচ্চারণ করা হয়ে
                থাকে। <br />
                If the first word ends with <span className="font-bold">/n/</span> and the next word starts with 
                <span className="font-bold"> /g/ </span> or <span className="font-bold"> /k/ </span>,
                then <span className="font-bold"> /n/ </span> sound এর পরিবর্তে <span className="font-bold"> /ŋ/ </span> sound উচ্চারণ করুন।
                <br />
                Ca<span className="font-bold">n</span> cook: <br />
                Ca'n cook - খ্যাং + খুক = খ্যাংখুক <br />
                Ope<span className="font-bold">n</span> court: <br />
                Ope'n court - ঔপেং + খোট = ঔপেংখোট <br />
ন               Ca<span className="font-bold">n</span> go<br />
                Ca<span className="font-bold">n</span> cut<br />
                Ope<span className="font-bold">n</span> court<br />
                Te<span className="font-bold">n</span> cats
              </p>
              
            </div>
            <p className="heading2 text-center pt-5">ASM English Academy</p>
          </div>
        </div>
{/* page 71 Assimilation /θ/থ ⇒ /s/  */}
        <div className="p-3 text-black md:p-10 bg-[#EFE5D6] book-shadow">
          <div className="flex justify-start gap-10 md:justify-start md:gap-96 mb-1">
            <h2 className="text-base lg:text-xl font-bold ">Page 71</h2>
            <button
              onClick={goToContents}
              className=" px-2 py-1 bg-blue-500 text-white text-xs md:text-base rounded hover:bg-white hover:text-blue-500"
            >
              Back to index
            </button>
          </div>
          <hr className="border border-gray-400" />
          <div className="">
            <p className="font-bold">
              Assimilation(সন্ধি):
            </p>
            <div className="text-base text-justify">
              
              <p className=""> 
                <span className="text-pink-600 font-bold text-xl">
                  /t/ → /p/
                </span> <br />
                If the first word ends with <span className="font-bold">/t/</span> and the next word starts with <span className="font-bold">/m/</span> or <span className="font-bold">/b/</span>,
                then <span className="font-bold">/t/</span> sound এর পরিবর্তে <span className="font-bold">/p/</span> sound উচ্চারণ করুন।<br /><br />
                <span className="font-bold"></span><br />
                Bes<span className="font-bold">t</span> man<br />
                Fron<span className="font-bold">t</span> bench<br />
                Pos<span className="font-bold">t</span> man<br />
                Tes<span className="font-bold">t</span> match<br />
                Tha<span className="font-bold">t</span> man<br />
                Whi<span className="font-bold">te</span> bag<br /><br />

                
              </p>
            </div>
            <p className="heading2 text-center pt-5">ASM English Academy</p>
          </div>
        </div>
        {/* page 71 Assimilation /θ/থ ⇒ /s/  */}
        <div className="p-3 text-black md:p-10 bg-[#EFE5D6] book-shadow">
          <div className="flex justify-start gap-10 md:justify-start md:gap-96 mb-1">
            <h2 className="text-base lg:text-xl font-bold ">Page 71</h2>
            <button
              onClick={goToContents}
              className=" px-2 py-1 bg-blue-500 text-white text-xs md:text-base rounded hover:bg-white hover:text-blue-500"
            >
              Back to index
            </button>
          </div>
          <hr className="border border-gray-400" />
          <div className="">
            <p className="font-bold">
              Assimilation(সন্ধি):
            </p>
            <div className="text-base text-justify">
              
              <p className="">
                <span className="text-pink-600 font-bold text-xl">
                   /θ/থ ⇒ /s/ 
                </span> <br />
                অর্থাৎ /0/থ sound এর পরিবর্তে /s/ sound উচ্চারণ করা
                হয়ে থাকে। <br />
                Both players: <br />
                Both players - বৌস + ফ্লেইআজ = বৌসফ্রেইআজ <br />
                North-south: <br />
                North-south নর্স + সাউদ = নর্সাউদ <br />
                With students: <br />
                With students উইস + স্টুডেন্টস = উইস্টুডেন্টস 
              </p>
            </div>
            <p className="heading2 text-center pt-5">ASM English Academy</p>
          </div>
        </div>
        

        {/* page 72 Elision */}
        <div className="p-3 text-black md:p-10 bg-[#EFE5D6] book-shadow">
          <div className="flex justify-start gap-10 md:justify-start md:gap-96 mb-1">
            <h2 className="text-base lg:text-xl font-bold ">Page 72</h2>
            <button
              onClick={goToContents}
              className=" px-2 py-1 bg-blue-500 text-white text-xs md:text-base rounded hover:bg-white hover:text-blue-500"
            >
              Back to index
            </button>
          </div>
          <hr className="border border-gray-400" />
          <div className="pt-1">
            <p className="font-bold">Elision (ধ্বনিলোপ): </p>
            <div className="text-base">
              <p className="">
                ইংরেজি দ্রুত বলার আরেকটি মাধ্যম হলো Elision বা ধ্বনিলোপ যেখানে
                ২টি sound এর মধ্যে যে কোন একটি sound এর অনুচ্চারিত থাকে। <br />
                <span className="font-bold">Rule: </span> <br />
                যদি কোন শব্দের শেষ অক্ষর /t/,/d/, /k/থাকে এবং পরবর্তী শব্দের ১ম
                অক্ষর consonant sound থাকে তাহলে ঐ /t/,/d/, /k/এর উচ্চারণ লোপ
                পায়, অর্থাৎ উচ্চারিত হয় না। সেক্ষেত্রে /t/,/d/, /k/এর স্থলে একটা
                ধাক্কা দিয়ে উচ্চারিত হয়। যেমনঃ <br />
                First boy: <br />
                Firs'boy - ফার্স + বয় = ফার্সবয় <br />
                {/* Great poet: <br />
                Grea'poet - গ্রেই + ফৌইট = গ্রেইফৌইট <br /> */}
                Second chance: <br />
                Secon'chance - সেকন চ্যান্স = সেকনচ্যান্স <br />
                That man: <br />
                Tha' man - দ্য + ম্যান = দ্যম্যান <br />
              </p>
            </div>
          </div>
        </div>

        {/* page 73 Elision */}
        <div className="p-3 text-black md:p-10 bg-[#EFE5D6] book-shadow">
          <div className="flex justify-start gap-10 md:justify-start md:gap-96 mb-1">
            <h2 className="text-base lg:text-xl font-bold ">Page 46</h2>
            <button
              onClick={goToContents}
              className=" px-2 py-1 bg-blue-500 text-white text-xs md:text-base rounded hover:bg-white hover:text-blue-500"
            >
              Back to index
            </button>
          </div>
          <hr className="border border-gray-400" />
          <div className="">
            <p className="font-bold py-1">Elision (ধ্বনিলোপ):</p>
            <div className="text-base">
              <p className="">
                আরো মনে রাখতে Schwa (/ǝ/) প্রকৃতপক্ষে জোর দিয়ে উচ্চারণ করা হয়ে
                থাকে না। যেমনঃ <br />
                1. Diff(e)rent = /'difrent/ - ডিফরেন্ট = ডিফ্রেন্ট <br />
                2. Int(e)rest = /'intrest/ - ইন+ট্রেস্ট = ইনট্রেস্ট <br />
                3. Libr(a)ry = /'laibri/ - লাই+ব্রি = লাইব্রি <br />
                4. Rest(au)rant = restront/- রেস-ট্রন্ট = রেসট্রন্ট <br />
                5. Sim(i)lar = /sɪm.ɪ.lər/ সিমিলা = সিমলা <br />
                6. T(o)night = /T'night/ = ঠ+নাইট = ঠনাইট <br />
                7. Veg(e)tables = /veg'table/ - ভেজ+টেবল = ভেজটেবল <br />
                8. Yest(er)day = /yestoday/ - ইয়েস-টডেই = ইয়েসটডেই <br />
              </p>
            </div>
          </div>
          <h3 className="heading2 text-center pt-5">ASM English Academy</h3>
        </div>

        {/* page 34 Linking */}
        <div className="p-3 text-black md:p-10 bg-[#EFE5D6] book-shadow">
          <div className="flex justify-start gap-10 md:justify-start md:gap-96 mb-2">
            <h2 className="text-base lg:text-xl font-bold ">Page 34</h2>
            <button
              onClick={goToContents}
              className=" px-2 py-1 bg-blue-500 text-white text-xs md:text-base rounded hover:bg-white hover:text-blue-500"
            >
              Back to index
            </button>
          </div>
          <hr className="border border-gray-400" />
          <div className="">
            <p className="font-bold text-green-400 py-1">
              {" "}
              Linking (সংযুক্তকরণ):
            </p>
            <div className=" text-sm md:text-base">
              <p className="text-justify">
                ইংরেজি listening এর ক্ষেত্রে linking খুবই গুরুত্বপূর্ণ ভূমিকা
                পালন করে। কেননা প্রতিটি native speaker ইংরেজি বলার সময় sentence
                এর মধ্যে বিশেষ বিশেষ শব্দের কোন কোন ধ্বনির সংযোজন, বিয়োজন ও
                পরিবর্তন ঘটায় এবং একটি শব্দের সাথে অপর শব্দ সংযুক্ত করে ভিন্ন
                একটি বাচনভঙ্গি বা rhythm এ কথা বলে। <br />
                আর এই প্রক্রিয়াকে আমরা linking বলে থাকি। সাধারণত linking তিন
                ধরনের। <br />
                যেমন: <br />
                i. Consonant to consonant <br />
                ii. Vowel to vowel ও <br />
                iii. Consonant to vowel <br />
              </p>
              <p className="pt-2">
                i. Consonant to consonant: <br />
                যদি একটি শব্দের শেষে consonant sound থাকে এবং তার পরের শব্দ যদি
                ঐ একই consonant sound দিয়ে শুরু হয়, তাহলে consonant টি দুইবার
                উচ্চারিত না হয়ে একবার একটু টেনে <br />
              </p>
            </div>
          </div>
        </div>
        {/* page 35 Linking */}
        <div className="p-3 text-black md:p-10 bg-[#EFE5D6] book-shadow">
          <div className="flex justify-start gap-10 md:justify-start md:gap-96 mb-2">
            <h2 className="text-base lg:text-xl font-bold ">Page 35</h2>
            <button
              onClick={goToContents}
              className=" px-2 py-1 bg-blue-500 text-white text-xs md:text-base rounded hover:bg-white hover:text-blue-500"
            >
              Back to index
            </button>
          </div>
          <hr className="border border-gray-400" />
          <div className="">
            <p className="font-bold text-green-400 py-1">
              Linking (সংযুক্তকরণ):
            </p>
            <div className=" text-sm md:text-base text-justify">
              <p className="">
                পরের শব্দের সাথে পড়তে হবে। এবং শব্দ দুটি বলার সময় দুটি শব্দের
                মাঝে কোন প্রকার বিরতি দেয়া যাবে না। <br />
                যেমন: <br />
                Big grade - /bɪ_greid/ - [বিগ্রেইড] <br />
                Don't try - /dǝun_traɪ/ - [ডৌনট্রাই] <br />
                Feel lucky - /fi:_'laki/ - [ফী'লাকী]
              </p>
              <p className="pt-2">
                মনে রাখতে হবেঃ <br />
                /tʃ/ & /dʒ/ ধ্বনির ক্ষেত্রে দুটি শব্দের যুক্ত করা যাবেনা। একটি
                শব্দের শেষে অপর শব্দ বলতে হবে। যেমনঃ <br />
                Beach chair - /bitʃ tʃeər / - [বিচ চেঅ্য (র)] <br />
                Each chapter - /ɪ:tʃ tʃæp.tər/ - [ইচ চ্যাপটা (র)] <br />
                Change jeans - /tfeindz dzi:nz/ - [চেঞ্জ জিন্‌ন্জ] <br />
                Orange juice - /'prindz dzuis/ - [অরিঞ্জ জুস]
              </p>
              <p className="pt-2">
                ii. Vowel to vowel: <br />
                যদি একটি শব্দের শেষে Vowel sound থাকে এবং তার পরের শব্দের
                শুরুতেও vowel sound থাকে
              </p>
            </div>
          </div>
        </div>

        {/* page 36 Linking */}
        <div className="p-3 text-black md:p-10 bg-[#EFE5D6] book-shadow">
          <div className="flex justify-start gap-10 md:justify-start md:gap-96 mb-2">
            <h2 className="text-base lg:text-xl font-bold ">Page 36</h2>
            <button
              onClick={goToContents}
              className=" px-2 py-1 bg-blue-500 text-white text-xs md:text-base rounded hover:bg-white hover:text-blue-500"
            >
              Back to index
            </button>
          </div>
          <hr className="border border-gray-400" />
          <div className="">
            <p className="font-bold text-green-400 py-1">
              Linking (সংযুক্তকরণ):
            </p>
            <div className=" text-sm md:text-base">
              <p className="">
                তাহলে দুটি vowel এর মাঝে একটি /j/ [ইয়া] অথবা /w/ (ওয়া) consonant
                যুক্ত করে দুটি শব্দের মাঝে কোন প্রকার বিরতি না দিয়ে একটি শব্দের
                মত করে বলতে হবে। <br />
                যেমন: <br />
                Do or - die/du 'ɔ:rdaɪ/ - [ডু'অরডাই] <br />
                Go out - /gəʊ_əʊt/ - [গৌয়াউট) <br />
              </p>
              <p className="pt-2">
                iii. Consonant to vowel <br />
                যদি একটি শব্দের শেষে consonant sound থাকে এবং তার পরের শব্দের
                শুরুতে যদি vowel sound থাকে তাহলে পূর্বের consonant টি পরের
                vowel এর সাথে সংযুক্ত করে একটি শব্দের মতো করে বলতে হবে। যেমনঃ{" "}
                <br />
                In and out- /ɪ_nænd.aʊt/ - [ইন্যান্ডাউট] <br />
                Beat it - /br_txt/ - [বিটিট] <br />
                Look at - / lv_kæt/ - [লুক্যাট] <br />
              </p>
            </div>
            <p className="heading2 text-center pt-5">ASM English Academy</p>
          </div>
        </div>

        {/* page 41 শব্দের উচ্চারণ টেকনিক */}
        <div className="p-3 text-black lg:p-8 bg-[#EFE5D6] book-shadow">
          <div className="flex justify-start gap-10 md:justify-start md:gap-96 mb-2">
            <h2 className="text-base lg:text-xl font-bold ">Page 41</h2>
            <button
              onClick={goToContents}
              className=" px-2 py-1 bg-blue-500 text-white text-xs md:text-base rounded hover:bg-white hover:text-blue-500"
            >
              Back to index
            </button>
          </div>
          <hr className="border border-gray-400" />
          <div className="">
            <p className="font-semibold py-1">শব্দের উচ্চারণ টেকনিক</p>
            <div className=" text-sm md:text-base">
              <p className="">
                <span className="font-medium text-pink-600">Rule-1 </span>{" "}
                <br />
                শব্দের শেষে "e" থাকলে "e" এর উচ্চারণ হয়না। তবে "ee" থাকলে
                উচ্চারিত হবে। উদাহরণ: <br />
                Name - (নেইম) - নাম। <br />
                See - (সী) - দেখা।
              </p>
              <p className="py-1">
                <span className="font-medium text-pink-600">Rule-2 </span>
                <br />
                শব্দের শুরুতে KN থাকলে তার উচ্চারণ হবে "ন" এক্ষেত্রে K
                অনুচ্চারিত থাকে। <br />
                Know - নৌ - (জানা) <br />
                Knack - ন্যাক - (কৌশল/দক্ষতা) <br />
                👉কিন্তু এগুলোর আগে vowel থাকলে, K উচ্চারিত হয়। যেমন: <br />
                Acknowledge - অ্যাক্সলিজ <br />
              </p>
              <p className="">
                <span className="font-medium text-pink-600">Rule-3 </span>
                <br />
                ইংরেজি শব্দের শেষে gh থাকলে তার উচ্চারণ হয় "ফ” অথবা কখনো তা
                অনুচ্চারিত থাকে। উদাহরণ:
                <br />
                Tough - (টাফ) - কঠিন।
                <br />
                High - (হাই) - উচ্চ।
              </p>
            </div>
          </div>
        </div>

        {/* page 42 শব্দের উচ্চারণ টেকনিক */}
        <div className="p-3 text-black lg:p-8 bg-[#EFE5D6] book-shadow">
          <div className="flex justify-start gap-10 md:justify-start md:gap-96 mb-2">
            <h2 className="text-base lg:text-xl font-bold ">Page 42</h2>
            <button
              onClick={goToContents}
              className=" px-2 py-1 bg-blue-500 text-white text-xs md:text-base rounded hover:bg-white hover:text-blue-500"
            >
              Back to index
            </button>
          </div>
          <hr className="border border-gray-400" />
          <div className="">
            <p className="font-bold py-1 text-green-600">
              শব্দের উচ্চারণ টেকনিক
            </p>
            <div className=" text-sm md:text-base ">
              <p className="">
                <span className="font-medium text-pink-600">Rule-4 </span>
                <br />
                word-এর শেষে 'tion' পাশাপাশি থাকলে 'শন'-এর মতো উচ্চারণ হয়। যেমন:
                <br />
                Nation- (নেইশন) - জাতি
              </p>
              <p className="py-1">
                <span className="font-medium text-pink-600">Rule-5 </span>{" "}
                <br />
                M+B পর পর থাকলে এবং B এর পর কোন Vowel না থাকলে B উচ্চারিত হয় না।
                উদাহরণ:
                <br />
                Bomb- (বম)/ USA -/bɑːm/ (বা:ম)- বোমা।
              </p>
              <p className="">
                <span className="font-medium text-pink-600">Rule-6 </span>
                <br />
                L+ M পর পর থাকলে এবং পরে vowel না থাকলে L অনুচ্চারিত থাকে।
                উদাহরণ:
                <br />
                Calm- (কাম)- শান্ত।
              </p>
              <p className="py-1">
                <span className="font-medium text-pink-600">Rule-7 </span>{" "}
                <br />
                word-এর মাঝামাঝি 'tu' থাকলে সাধারণত 'চ'-এর মতো উচ্চারণ হয়। যেমন:
                <br />
                Nature - (নেইচার)- প্রকৃতি <br />
                Future - (ফিউচার) -
                <br />
              </p>
            </div>
          </div>
        </div>

        {/* page 43 শব্দের উচ্চারণ টেকনিক */}
        <div className="p-3 text-black lg:p-8 bg-[#EFE5D6] book-shadow">
          <div className="flex justify-start gap-10 md:justify-start md:gap-96 mb-2">
            <h2 className="text-base lg:text-xl font-bold ">Page 43</h2>
            <button
              onClick={goToContents}
              className=" px-2 py-1 bg-blue-500 text-white text-xs md:text-base rounded hover:bg-white hover:text-blue-500"
            >
              Back to index
            </button>
          </div>
          <hr className="border border-gray-400" />
          <div className="">
            <p className="font-bold py-1">শব্দের উচ্চারণ টেকনিক</p>
            <div className=" text-sm md:text-base">
              <p className="">
                <span className="font-medium text-pink-600">Rule-8 </span>{" "}
                <br />
                Word-এর মধ্যে Mpt এর উচ্চারণে p উহ্য। এর উচ্চারণ হবে "মট্”।{" "}
                <br />
                যেমন: <br />
                Attempt - (অ্যাটেম্‌ট্) - চেষ্টা/ প্রয়াস। <br />
              </p>
              <p className="py-2">
                <span className="font-medium text-pink-600">Rule-9 </span>{" "}
                <br />Y সাধারণত One-syllable এর শব্দে "আই" হিসেবে উচ্চারিত হয়।
                উদাহরণ: <br />
                Fly -(ফ্লাই) - উড়া। <br />
                ➡️ Two-syllable এর শব্দে Y "ই" হিসেবে উচ্চারিত হয়। <br />
                City - (সিটি) - শহর। <br />
              </p>
              <p className="">
                <span className="font-medium text-pink-600">Rule-10 </span>{" "}
                <br />
                'Wh'-এর উচ্চারনে সাধারণত 'h' এর উচ্চারণ উহ্য থাকবে। যেমন: <br />
                What (ওএ্যঅট) = কী <br />
                কিন্তু , <br />
              </p>
            </div>
          </div>
        </div>

        {/* page 44 শব্দের উচ্চারণ টেকনিক */}
        <div className="p-3 text-black lg:p-8 bg-[#EFE5D6] book-shadow">
          <div className="flex justify-start gap-10 md:justify-start md:gap-96 mb-2">
            <h2 className="text-base lg:text-xl font-bold ">Page 44</h2>
            <button
              onClick={goToContents}
              className=" px-2 py-1 bg-blue-500 text-white text-xs md:text-base rounded hover:bg-white hover:text-blue-500"
            >
              Back to index
            </button>
          </div>
          <hr className="border border-gray-400" />
          <div className="">
            <p className="font-semibold py-1">শব্দের উচ্চারণ টেকনিক</p>
            <div className=" text-sm md:text-base">
              <p className="">
                Who - (হু) - কে/কারা <br />
                Whom - (হুম) - কাকে/কাদের <br />
              </p>
              <p className="py-1">
                <span className="font-medium text-pink-600">Rule-12 </span>{" "}
                <br />
                'w'-এরপর 'r' থাকলে সাধারণত 'w' উচ্চারিত হয় না। যেমন: <br />
                Write (রাইট) - লেখা
              </p>
              <p className="">
                <span className="font-medium text-pink-600">Rule-13 </span>{" "}
                <br />
                শব্দের শেষে /consonant+y/ থাকলে এবং তা যদি এক syllable-এ
                উচ্চারিত হয়, তখন তার উচ্চারণ হবে বাংলা 'আই' এর মতো। <br />
                যেমন: <br />
                Fly - (ফ্লাই) - উড়ানো, মাছি <br />
                dry - (ড্রাই) -
              </p>
              <p className="py-2">
                <span className="font-medium text-pink-600">Rule-14 </span>{" "}
                <br />
                শব্দের শেষে ous থাকলে সাধারনতঃ "আস" উচ্চারিত হয়। উদাহরণ:
                <br />
                Delicious (ডেলিশাস) - সুস্বাদু <br />
              </p>
            </div>
          </div>
        </div>

        {/* page 45 শব্দের উচ্চারণ টেকনিক */}
        <div className="px-3 py-2 text-black lg:p-8 bg-[#EFE5D6] book-shadow">
          <div className="flex justify-start gap-10 md:justify-start md:gap-96 mb-2">
            <h2 className="text-base lg:text-xl font-bold ">Page 45 </h2>
            <button
              onClick={goToContents}
              className=" px-2 py-1 bg-blue-500 text-white text-xs md:text-base rounded hover:bg-white hover:text-blue-500"
            >
              Back to index
            </button>
          </div>
          <hr className="border border-gray-400" />
          <div className="">
            <p className="font-semibold py-1">শব্দের উচ্চারণ টেকনিক</p>
            <div className=" text-sm md:text-base text-justify">
              <p className="pb-2">
                <span className="font-medium text-pink-600">Rule-15 </span>{" "}
                <br />
                শব্দের শেষে Sure থাকলে এর উচ্চারণ সাধারণত 'জ' হয়। <br />
                উদাহরণ: <br />
                Pleasure - প্লেজা (র)
              </p>
              <p className="">
                <span className="font-medium text-pink-600">কিন্তু</span> <br />
                ➡️ ২টি 's' (ssure) হলে এর উচ্চারণ 'শ' হবে। <br />
                pressure - প্রেশা(র) <br />
                Assure - আশুআ (র)
              </p>
              <p className="py-2">
                <span className="font-medium text-pink-600">Rule-16 </span>
                C এর পরে i, e, y এই তিন অক্ষর থাকলে তার উচ্চারণ হবে বাংলা
                ছ/'স'-এর মতো হয়। <br />
                যেমন: <br />
                Cease - সিস - বিরতি; স্থগিত <br />
              </p>

              <p className="">
                <span className="font-medium text-pink-600">But- </span> <br />
                ➡️ C এর পরে i, e, y না থাকলে উচ্চারণ হবে 'ক'/'খ' এর মতো। <br />
                যেমন: <br />
                Cat - ক্যাট (UK খ্যাট) - বিড়াল <br />
              </p>
            </div>
          </div>
        </div>

        {/* page 46 শব্দের উচ্চারণ টেকনিক */}
        <div className="px-3 py-2 text-black lg:p-8 bg-[#EFE5D6] book-shadow">
          <div className="flex justify-start gap-10 md:justify-start md:gap-96 mb-2">
            <div className="flex justify-start gap-10 md:justify-start md:gap-96 mb-2">
              <h2 className="text-base lg:text-xl font-bold ">Page 46</h2>
              <button
                onClick={goToContents}
                className=" px-2 py-1 bg-blue-500 text-white text-xs md:text-base rounded hover:bg-white hover:text-blue-500"
              >
                Back to index
              </button>
            </div>
            <hr className="border border-gray-400" />
          </div>
          <hr className="border border-gray-400" />
          <div className="">
            <p className="font-bold py-1">শব্দের উচ্চারণ টেকনিক</p>
            <div className=" text-sm md:text-base">
              <p className="">
                <span className="font-medium text-pink-600">Rule-17. </span>{" "}
                <br />G এর পরে i, e, y এই তিন অক্ষর থাকলে তার উচ্চারণ হবে সফট্
                অর্থাৎ বাংলা 'জ'-এর মতো। যেমন: Age - এইজ - বয়স; যুগ
              </p>
              <p className="pt-1">
                <span className="font-medium text-pink-600">but- </span> <br />
                ➡️ G এর পরে i, e, y এই তিন অক্ষর না থাকলে তার উচ্চারণ হবে 'গ'-এর
                মতো। যেমন: <br />
                Again - অ্যগেন/অ্যগেইন - আবার; পুনরায়
              </p>
              <p className="py-2">
                <span className="font-medium text-pink-600">Rule-18 </span>{" "}
                <br />
                শব্দের শেষে que এর উচ্চারণ "ক" হয়ে থাকে। উদাহরণ: <br />
                Cheque - (চেক) - কিস্তি, হুন্ডি।
              </p>
              <p className="">
                <span className="font-medium text-pink-600">Rule-19 </span>
                <br />
                Consonant+ U+ Consonant এভাবে word গঠিত হলে U এর উচ্চারণ "আ" এর
                মত হয়। উদাহরণ: <br />
                Null - (নাল) - বাতিল <br />
                ব্যতিক্রমঃ <br />
                Put - (পুট)
              </p>
            </div>
          </div>
        </div>

        {/* page 47 শব্দের উচ্চারণ টেকনিক */}
        <div className="p-3 text-black lg:p-8 bg-[#EFE5D6] book-shadow">
          <div className="flex justify-start gap-10 md:justify-start md:gap-96 mb-2">
            <h2 className="text-base lg:text-xl font-bold ">Page 47</h2>
            <button
              onClick={goToContents}
              className=" px-2 py-1 bg-blue-500 text-white text-xs md:text-base rounded hover:bg-white hover:text-blue-500"
            >
              Back to index
            </button>
          </div>
          <hr className="border border-gray-400" />
          <div className="">
            <p className="font-medium py-1">শব্দের উচ্চারণ টেকনিক</p>
            <div className=" text-sm md:text-base text-justify">
              <p className="">
                <span className="font-medium text-pink-600">Rule-23 </span>{" "}
                <br />
                যেসব শব্দের মধ্যে দু বা তার অধিক syllable থাকে সেখানে যদি শব্দের
                শেষে 'al' থাকে তবে 'a' এর উচ্চারণ উহ্য থাকবে। যেমন: <br />
                Animal - অ্যানিমল্ <br />
                Practical - প্র্যাকটিকল্ <br />
              </p>
              <p className="py-2">
                👉এছাড়া, শব্দের শেষে 'ally' থাকলেও 'a' এর উচ্চারণ হবে না। <br />
                Basically - বেইসকলি <br />
                Automatically - ওটোম্যাটিকলি <br />
              </p>

              <p className="">
                <span className="font-medium text-pink-600">Rule-24 </span>
                <br />
                'IGH'-এর উচ্চারণ 'G' উচ্চারিত না হয়ে সে অংশটুকুর উচ্চারণ "আই"
                হয়। যেমন: <br />
                {/* Delight (ডিলাইট) - (আনন্দ) <br /> */}
                Light - (লাইট) - (আলো) <br />
              </p>
              <p className="pt-2">
                <span className="font-medium text-pink-600">Rule-25 </span>{" "}
                <br />
                শব্দস্থিত OA+ R এভাবে ব্যবহৃত হলে, OA এর উচ্চারণ হবে "অ্য"।
                উদাহরণ: <br />
                Road - (রোড) - রাস্তা। <br />
                {/* Board -(বোর্ড) - মোটা শক্ত কাগজ। <br /> */}
              </p>
            </div>
          </div>
        </div>

        {/* page 48 শব্দের উচ্চারণ টেকনিক */}
        <div className="p-3 text-black lg:p-8 bg-[#EFE5D6] book-shadow">
          <div className="flex justify-start gap-10 md:justify-start md:gap-96 mb-2">
            <h2 className="text-base lg:text-xl font-bold ">Page 48</h2>
            <button
              onClick={goToContents}
              className=" px-2 py-1 bg-blue-500 text-white text-xs md:text-base rounded hover:bg-white hover:text-blue-500"
            >
              Back to index
            </button>
          </div>
          <hr className="border border-gray-400" />
          <div className="">
            <p className="font-bold py-1">শব্দের উচ্চারণ টেকনিক:</p>
            <div className=" text-sm md:text-base">
              <p className="">
                <span className="font-medium text-pink-600">Rule-26. </span>{" "}
                <br />
                Consonant + EA + consonant (R ছাড়া) এভাবে ব্যবহৃত হলে EA এর
                উচ্চারণ "ঈ" হবে। <br />
                Feather - (ফেদার) - পালক। <br />
                Leader - (লিডার) - সর্দার। <br />
              </p>

              <p className="py-2">
                <span className="font-medium text-pink-600">Rule-27. </span>{" "}
                <br />
                Consonant এরপর ০। এর উচ্চারণ "অই" হয়। উদাহরণ: <br />
                Join - (জইন) - যোগদান করা। <br />
              </p>
              <p className="">
                <span className="font-medium text-pink-600">Rule-28. </span>{" "}
                <br />
                শব্দস্থিত OE এর উচ্চারণ হয় "ঈ"। <br />
                Phoenix - (ফীনিক্স) - রুপ কথার পাখি বিশেষ। <br />
                Amoeba - (এ্যামিবা) - ক্ষুদ্র এক কোষী প্রাণী। <br />
              </p>
              <p className="pt-2">
                <span className="font-medium text-pink-600">Rule-29. </span>
                <br />
                ইংরেজি শব্দের শেষে TCH থাকলে এর উচ্চারণ হয় "চ"। উদাহরণ: <br />
                Batch - (ব্যাচ) ক্ষুদ্রদল। <br />
              </p>
            </div>
          </div>
        </div>

        {/* page 49 শব্দের উচ্চারণ টেকনিক */}
        <div className="p-3 text-black lg:p-8 bg-[#EFE5D6] book-shadow">
          <div className="flex justify-start gap-10 md:justify-start md:gap-96 mb-2">
            <h2 className="text-base lg:text-xl font-bold ">Page 49</h2>
            <button
              onClick={goToContents}
              className=" px-2 py-1 bg-blue-500 text-white text-xs md:text-base rounded hover:bg-white hover:text-blue-500"
            >
              Back to index
            </button>
          </div>
          <hr className="border border-gray-400" />
          <div className="">
            <p className="font-bold py-1">শব্দের উচ্চারণ টেকনিক</p>
            <div className=" text-sm md:text-base">
              <p className="">
                <span className="font-medium text-pink-600">Rule-30. </span>{" "}
                <br />i + Consonant + E এভাবে ব্যবহৃত হলে তার উচ্চারণ "আই" এর মত
                হয়। <br />
                উদাহরণ: <br />
                Rice - (রাইস) - চাউল। <br />
                Size - (সাইজ) - আয়তন। <br />
              </p>

              <p className="py-2">
                <span className="font-medium text-pink-600">Rule-31. </span>{" "}
                <br />
                শব্দস্থিত EE + R এভাবে ব্যবহৃত হলে R যদি word শেষ অক্ষর হয় তাহলে
                EE এর উচ্চারণ "ইঅ্যা" হবে <br />
                উদাহরণ: <br />
                Deer - (ডিয়্যার) - হরিণ। <br />
                Peer - (পিয়‍্যার) - সমকক্ষ। <br />
              </p>
              <p className="">
                <span className="font-medium text-pink-600">Rule-32. </span>{" "}
                <br />
                EE+ consonant (R ছাড়া) এভাবে ব্যবহৃত হলে, EE এর উচ্চরণ "ঈ" হয়।{" "}
                <br />
                উদাহরণ: <br />
                Need - (নীড) - প্রয়োজন। <br />
                Meek - (মীক) - বিনম্র <br />
              </p>
            </div>
          </div>
        </div>

        {/* page 50 শব্দের উচ্চারণ টেকনিক */}
        <div className="p-3 text-black lg:p-8 bg-[#EFE5D6] book-shadow">
          <div className="flex justify-start gap-10 md:justify-start md:gap-96 mb-2">
            <h2 className="text-base lg:text-xl font-bold ">Page 50</h2>
            <button
              onClick={goToContents}
              className=" px-2 py-1 bg-blue-500 text-white text-xs md:text-base rounded hover:bg-white hover:text-blue-500"
            >
              Back to index
            </button>
          </div>
          <hr className="border border-gray-400" />
          <div className="">
            <p className="font-bold py-1">শব্দের উচ্চারণ টেকনিক:</p>
            <div className=" text-sm md:text-base">
              <p className="">
                <span className="font-medium text-pink-600">Rule-33. </span>{" "}
                <br />
                Vowel এর পর BT এর উচ্চারণ "ট" এক্ষেত্রে "B" অনুচ্চারিত থাকে।{" "}
                <br />
                উদাহরণ: <br />
                Doubtful - (ডাউটফুল) - সন্দিহান। <br />
              </p>
              <p className="py-2">
                <span className="font-medium text-pink-600">Rule-34. </span>{" "}
                <br />
                শব্দস্থিত OA+ Consonant এভাবে ব্যবহৃত হলে OA এর উচ্চারণ হয় "ও"।{" "}
                <br />
                উদাহরণ: <br />
                Road - (রৌড) - রাস্তা। <br />
                Loan - (লৌন) - ঋণ। <br />
              </p>
              <p className="">
                <span className="font-medium text-pink-600">Rule-35. </span>{" "}
                <br />
                শব্দের শেষে MN থাকলে সাধারণতঃ N অনুচ্চারিত থাকে। <br /> উদাহরণ:{" "}
                <br />
                Damn - (ড্যাম) - অভিশাপ দেয়া। <br />
                Condemn - (/Cɔːndem/) -
              </p>
            </div>
          </div>
        </div>

        {/* page 51 শব্দের উচ্চারণ টেকনিক */}
        <div className="p-3 text-black lg:p-8 bg-[#EFE5D6] book-shadow">
          <div className="flex justify-start gap-10 md:justify-start md:gap-96 mb-2">
            <h2 className="text-base lg:text-xl font-bold ">Page 51</h2>
            <button
              onClick={goToContents}
              className=" px-2 py-1 bg-blue-500 text-white text-xs md:text-base rounded hover:bg-white hover:text-blue-500"
            >
              Back to index
            </button>
          </div>
          <hr className="border border-gray-400" />
          <div className="">
            <p className="font-medium py-1">শব্দের উচ্চারণ টেকনিক:</p>
            <div className=" text-sm md:text-base">
              <p className="">
                <span className="font-medium text-pink-600">Rule-36. </span>{" "}
                <br />
                Word এর মধ্যে GH পাশাপাশি থাকলে তা উচ্চারিত হয় না। <br />
                Right - (রাইট) - সঠিক <br />
                Night - (নাইট) - রাত <br />
                <span className="font-medium text-pink-600">
                  Rule-37.{" "}
                </span>{" "}
                <br />
                কোন শব্দে U এরপর consonant + vowel+..... থাকলে U এর উচ্চারণ
                সাধারণত "ইউ" হয়। <br />
                Mute - (মিউট) - স্তব্ধ, নির্বাক। <br />
                <span className="font-medium text-pink-600">
                  Rule-38.{" "}
                </span>{" "}
                <br />
                কোন শব্দে CC+O/U consonant থাকলে CC এর উচ্চারণ হবে "ক"। উদাহরণ:
                <br />
                Accuse - (এ্যাকিউজ) - অভিযুক্ত করা। <br />
                According - (এ্যাকর্ডিং) - অনুযায়ী। <br />
                <span className="font-medium text-pink-600">
                  Rule-39.{" "}
                </span>{" "}
                <br />
                Consonant এর পর "AI" এর উচ্চারণ সবসময় "এই" বা "এয়‍্যা" হয়।
                উদাহরণ: <br />
                Rail - (রেইল) - রেলের লাইন। <br />
                Nail - (নেইল) - পেরেক
              </p>
            </div>
          </div>
        </div>

        {/* page 52 শব্দের উচ্চারণ টেকনিক */}
        <div className="p-3 text-black lg:p-8 bg-[#EFE5D6] book-shadow">
          <div className="flex justify-start gap-10 md:justify-start md:gap-96 mb-2">
            <h2 className="text-base lg:text-xl font-bold ">Page 52</h2>
            <button
              onClick={goToContents}
              className=" px-2 py-1 bg-blue-500 text-white text-xs md:text-base rounded hover:bg-white hover:text-blue-500"
            >
              Back to index
            </button>
          </div>
          <hr className="border border-gray-400" />
          <div className="">
            <p className="font-medium py-1">শব্দের উচ্চারণ টেকনিক:</p>
            <div className=" text-sm md:text-base">
              <p className="">
                <span className="font-medium text-pink-600">Rule-41. </span>{" "}
                <br />
                I+ R+ E বর্ণ তিনটি যদি word এর শেষে থাকে তবে এর উচ্চারণ "আয়‍্যা"
                <br />
                Dire - (ডায়‍্যার) - ভয়ংকর। <br />
                Admire - (এ্যাডমায়‍্যার) - তারিফ করা। <br />
                <span className="font-medium text-pink-600">
                  Rule-42.{" "}
                </span>{" "}
                <br />
                কোন শব্দে U এর পূর্বে consonant + R/L+...... থাকলে U এর উচ্চারণ
                সাধারণত "উ" হয়। উদাহরণ: <br />
                Blue - (ব্লু) - নীল। <br />
                True - (ট্র) - সত্য। <br />
                <span className="font-medium text-pink-600">
                  Rule-43.{" "}
                </span>{" "}
                <br />
                U এর পর যদি এমন দুটি Consonant থাকে যাদেরকে আলাদাভাবে উচ্চারণ
                করতে হয় (ফলে প্রথমটিতে একটি syllable শেষ হয় এবং পরেরটিতে আরেকটি
                syllable শুরু হয়) তাহলে ঐ দুটি consonant এর পর E/I/A থাকা সত্বেও
                U - "আ"- এর মত হয়। উদাহরণ: <br />
                Incumbent - (ইনকামবেন্ট) - বাধ্যতামূলক। <br />
                Number - (নাম্বার) - সংখ্যা।
              </p>
            </div>
          </div>
        </div>

        {/* page 53 শব্দের উচ্চারণ টেকনিক */}
        <div className="p-3 text-black lg:p-8 bg-[#EFE5D6] book-shadow">
          <div className="flex justify-start gap-10 md:justify-start md:gap-96 mb-2">
            <h2 className="text-base lg:text-xl font-bold ">Page 53</h2>
            <button
              onClick={goToContents}
              className=" px-2 py-1 bg-blue-500 text-white text-xs md:text-base rounded hover:bg-white hover:text-blue-500"
            >
              Back to index
            </button>
          </div>
          <hr className="border border-gray-400" />
          <div className="">
            <p className="font-medium text-base py-1">শব্দের উচ্চারণ টেকনিক:</p>
            <div className=" text-sm md:text-base">
              <p className="">
                <span className="font-medium text-pink-600">Rule-44. </span>
                <br />
                শব্দের মধ্যে DG বা DJ একত্রে থাকলে তার উচ্চারণ হবে 'জ'। D এর
                উচ্চারণ উহ্য থাকবে। <br />
                Badge - (ব্যায) <br />
                Adjective - (অ্যাযিকটিভ) <br />
                <span className="font-medium text-pink-600">
                  Rule-45.{" "}
                </span>{" "}
                <br />
                শব্দের শেষে GUE থাকলে তার উচ্চারণ হবে "গ"। <br />
                Fatigue - (ফেটিগ) <br />
                Rogue - (রৌগ) <br />
                <span className="font-medium text-pink-600">
                  Rule-46.{" "}
                </span>{" "}
                <br />
                Consonant + IA+ Consonant এভাবে Word গঠিত হলে, IA এর উচ্চারণ
                (আইঅ্যা) মত হয়। উদাহরণ: <br />
                Dialogue - (ডায়ালগ) - কথোপকথন। <br />
                Diamond - (ডায়ামন্ড) - হীরক। <br />
                <span className="font-medium text-pink-600">
                  Rule-47.{" "}
                </span>{" "}
                <br />
                শব্দের মধ্যে Ph একসাথে থাকলে Ph' এর উচ্চারণ (ফ) হবে।উদাহরণ:
                <br />
                Phone -ফৌন <br />
                Pharmacy -ফাম'সী
              </p>
            </div>
          </div>
        </div>

        {/* page 00 শব্দের উচ্চারণ টেকনিক */}
        <div className="p-3 text-black lg:p-8 bg-[#EFE5D6] book-shadow">
          <div className="flex justify-start gap-10 md:justify-start md:gap-96 mb-2">
            <h2 className="text-base lg:text-xl font-bold ">Page 00</h2>
            <button
              onClick={goToContents}
              className=" px-2 py-1 bg-blue-500 text-white text-xs md:text-base rounded hover:bg-white hover:text-blue-500"
            >
              Back to index
            </button>
          </div>
          <hr className="border border-gray-400" />
          <div className="">
            <p className="font-medium py-1">শব্দের উচ্চারণ টেকনিক</p>
            <div className=" text-sm md:text-base">
              <p className="">
                <span className="font-medium text-pink-600">Rule-48 </span>{" "}
                <br />
                P+ S পরপর থাকলে এবং P এর আগে কোন vowel না থাকলে P অনুচ্চারিত
                থাকে। উদাহরণ: <br />
                Psycho- (সাইকো)- মন।
              </p>
              <p className="">
                <span className="font-medium text-pink-600">Rule-49. </span>{" "}
                <br />
                Word এর শেষে IGN থাকলে তার উচ্চারণ "আইন” হয়। এ ক্ষেত্রে G
                অনুচ্চারিত থাকে। <br />
                Sign (সাইন) - দস্তখত <br />
              </p>
              <p className="pt-2">
                <span className="font-medium text-pink-600">Rule-50. </span>{" "}
                <br />
                EA+ R+ consonant এভাবে word গঠিত হলে, EA এর উচ্চারণ "আ" হবে।
                উদাহরণ: <br />
                Heart -(হার্ট) - হৃদয়। <br />
              </p>
              <p className="">
                <span className="font-medium text-pink-600">Rule-51. </span>{" "}
                <br />
                শব্দস্থিত STL এর উচ্চারণ হয় "সল্” এখানে T অনুচ্চারিত থাকে।{" "}
                <br />
                উদাহরণ: <br />
                Nestle - (নেসল) - বাসা বাঁধা Feed - (fid) -
              </p>
            </div>
          </div>
        </div>

        {/* page 00 শব্দের উচ্চারণ টেকনিক */}
        <div className="p-3 text-black lg:p-8 bg-[#EFE5D6] book-shadow">
          <div className="flex justify-start gap-10 md:justify-start md:gap-96 mb-2">
            <h2 className="text-base lg:text-xl font-bold ">Page 00</h2>
            <button
              onClick={goToContents}
              className=" px-2 py-1 bg-blue-500 text-white text-xs md:text-base rounded hover:bg-white hover:text-blue-500"
            >
              Back to index
            </button>
          </div>
          <hr className="border border-gray-400" />
          <div className="">
            <p className="font-bold py-1">শব্দের উচ্চারণ টেকনিক:</p>
            <div className=" text-sm md:text-base">
              <p className="">
                <span className="font-medium text-pink-600">Rule-52. </span>{" "}
                <br />
                Word-এর মধ্যে।I+ R+ Consonant এভাবে Word গঠিত হলে "।" এর উচ্চারণ
                "আই" না হয়ে "আ" হয়। <br /> উদাহরণ: <br />
                First (ফাস্ট) - প্রথম। <br />
                Bird (বাড) - পাখি। <br />
              </p>
              <p className="py-2">
                <span className="font-medium text-pink-600">Rule-53. </span>{" "}
                <br />
                EA + R এভাবে ব্যবহৃত হলে এবং R যদি word এর শেষ বর্ণ হয় তাহলে EA
                এর উচ্চারণ "ঈঅ্যা" হবে। <br />
                Dear - (ডিয়্যার) - প্রিয়। <br />
                Fear - (ফিয়্যার) - ভয়। <br />
              </p>
              <p className="">
                <span className="font-medium text-pink-600">Rule-54. </span>{" "}
                <br />
                "IO" এর উচ্চারণ সাধারণত "আইয়" হয়। <br /> উদাহরণ: <br />
                Violet - (ভাইয়লেইট) - বেগুনী রঙ।
              </p>
            </div>
          </div>
          <p className="heading2 text-center pt-3">ASM English Academy</p>
        </div>

        {/* page 54 শব্দের উচ্চারণ টেকনিক */}
        <div className="p-3 text-black lg:p-8 bg-[#EFE5D6] book-shadow">
          <div className="flex justify-start gap-10 md:justify-start md:gap-96 mb-2">
            <h2 className="text-base lg:text-xl font-bold ">Page 54</h2>
            <button
              onClick={goToContents}
              className=" px-2 py-1 bg-blue-500 text-white text-xs md:text-base rounded hover:bg-white hover:text-blue-500"
            >
              Back to index
            </button>
          </div>
          <hr className="border border-gray-400" />
          <div className="">
            <p className="font-bold py-2">Y এর উচ্চারণঃ</p>
            <div className="text-sm md:text-base">
              <p className="">
                👉 ইংরেজিতে Y এর উচ্চারণ কখনও long 'e' অর্থাৎ বাংলা "ঈ” উচ্চারণ
                হয়। আবার কখনও short/e/ অর্থাৎ "ই" এবং কখনও "এই" এর মতো উচ্চারণ
                হবে। <br />
              </p>
              <p className="py-2">
                <span className="font-medium text-pink-600">Rule-1. </span>
                <br /> শব্দের শেষে 'ly' থাকলে তার উচ্চারণ হবে এর মতো হয়। <br />
                যেমন: <br />
                Friendly - ফ্রেন্ডলি - বন্ধুত্বপূর্ণ; বন্ধুসুলভ <br />
                Hardly - হাডলি - খুব কমই <br />
              </p>
              <p className="">
                <span className="font-medium text-pink-600">Rule-2. </span>
                <br />
                শব্দের শেষে 'ty' থাকলে তার উচ্চারণ হবে long 'e' অর্থাৎ বাংলা "ঈ"
                এর মতো। <br />
                যেমন: <br />
                Ability - অ্যবিলিটি - সক্ষমতা <br />
                Activity - অ্যকটিভ্যটি - কর্মকান্ড <br />
              </p>
            </div>
          </div>
        </div>

        {/* page 55 */}
        <div className="p-3 text-black lg:p-8 bg-[#EFE5D6] book-shadow">
          <div className="flex justify-start gap-10 md:justify-start md:gap-96 mb-2">
            <h2 className="text-base lg:text-xl font-bold ">Page 55</h2>
            <button
              onClick={goToContents}
              className=" px-2 py-1 bg-blue-500 text-white text-xs md:text-base rounded hover:bg-white hover:text-blue-500"
            >
              Back to index
            </button>
          </div>
          <hr className="border border-gray-400" />
          <div className="">
            <p className="font-bold py-1">Y এর উচ্চারণঃ</p>
            <div className=" text-sm md:text-base">
              <p className="">
                <span className="font-medium text-pink-600">Rule-3. </span>{" "}
                <br />
                শব্দের শেষে /ey/ থাকলে এবং তা যদি এক syllable-এ উচ্চারিত হয়, তখন
                তার উচ্চারণ হবে long /e/ অর্থাৎ বাংলা "ঈ" এর মতো।যেমন: <br />
                Honey - হানি - মধু <br />
                Key - কী - চাবি <br />
              </p>
              <p className="pt-2">
                <span className="font-medium text-pink-600">Rule-4. </span>{" "}
                <br />
                শব্দের শেষে /ay/ থাকলে এবং তা যদি এক syllable-এ উচ্চারিত হয়, তখন
                তার উচ্চারণ হবে বাংলা "এই" এর মতো। যেমন: <br />
                Bay - বেই - উপসাগর <br />
                May - মেই - সম্ভাবনা সূচক ক্রিয়া <br />
                Pay - ফেই
              </p>
            </div>
          </div>
          <p className="heading2 text-center pt-10">ASM English Academy</p>
        </div>

        {/* page 56 */}
        <div className="p-3 text-black lg:p-8 bg-[#EFE5D6] book-shadow">
          <div className="flex justify-start gap-10 md:justify-start md:gap-96 mb-2">
            <h2 className="text-base lg:text-xl font-bold ">Page 56</h2>
            <button
              onClick={goToContents}
              className=" px-2 py-1 bg-blue-500 text-white text-xs md:text-base rounded hover:bg-white hover:text-blue-500"
            >
              Back to index
            </button>
          </div>
          <hr className="border border-gray-400" />
          <div className="">
            <p className="font-bold py-1">X এর উচ্চারণঃ</p>
            <div className=" text-sm md:text-base">
              <p className="font-semibold"> </p>
              <p className="">
                👉 ইংরেজিতে X এর উচ্চারণ কখনও 'ks'; কখনও বা /gz/ এর মতো হয়; আবার
                কখনও শুধু /z/ এর মতো হয়। <br />
                <span className="font-medium text-pink-600">Rule-1. </span>{" "}
                <br />
                শব্দের শেষে বা মাঝে 'X' থাকলে তা 'ks' অর্থাৎ বাংলায় 'ক্স' এর মতো
                হয়। যেমন: <br />
                Fox - ফক্স - শেয়াল <br />
                Extra - এক্সট্রা - অতিরিক্ত <br />
                <span className="font-medium text-pink-600">Rule-2. </span>{" "}
                <br />
                শব্দের শুরুতে 'vowel+x+vowel' থাকলে তা জোর দিয়ে উচ্চারণ করতে হয়,
                তখন তা 'gz' অর্থাৎ বাংলায় 'ইগ্‌জ' এর মতো হয়। এক্ষেত্রে 'x'
                stressed syllable এর আগে বসে। যেমন: <br />
                Exam - ইগজ্যাম - পরীক্ষা <br />
                Exactly - ইগজাক্টলি - হুবুহু; যথাযথভাবে <br />
                Example - ইগজাম্পল -
              </p>
            </div>
          </div>
          <p className="heading2 text-center pt-5">ASM English Academy</p>
        </div>

        {/* page 57 */}
        <div className="p-3 text-black lg:p-8 bg-[#EFE5D6] book-shadow">
          <div className="flex justify-start gap-10 md:justify-start md:gap-96 mb-2">
            <h2 className="text-base lg:text-xl font-bold ">Page 57</h2>
            <button
              onClick={goToContents}
              className=" px-2 py-1 bg-blue-500 text-white text-xs md:text-base rounded hover:bg-white hover:text-blue-500"
            >
              Back to index
            </button>
          </div>
          <hr className="border border-gray-400" />
          <div className="">
            <p className="font-bold py-1">L এর উচ্চারণঃ</p>
            <div className=" text-sm md:text-base">
              <p className="">
                👉 ইংরেজিতে L এর উচ্চারণ কখনও স্পষ্ট অর্থাৎ 'Clear L' sound হয়;
                আবার কখনও অস্পষ্ট হয় অর্থাৎ 'Dark L' sound । <br />
                ❇️ যে L - এর উচ্চারণ জিহ্বার সামনের অংশ দিয়ে উচ্চারণ করা হয়,
                তাকে 'Clear L' sound বলে; <br />
                ❇️ আর যে L - এর উচ্চারণ জিহ্বার পেছনের অংশ দিয়ে উচ্চারণ করা হয়
                তাকে 'Dark L' sound বলে। <br />
                <span className="font-medium text-pink-600">Rule-1. </span>{" "}
                <br />
                'L+vowel' থাকলে তা স্পষ্ট অর্থাৎ 'Clear L' sound হয়। অর্থাৎ
                এখানে L-এর উচ্চারণ করতে হবে জিহ্বার সামনের অংশ দিয়ে। <br />
                যেমনঃ শব্দের শুরুতে 'L' থাকলে উচ্চারণ হবে স্পষ্ট অর্থাৎ 'Clear
                L'
                <br />
                Late - লেইট - দেরী; বিলম্বে <br />
                Last - লাস্ট - শেষ; গত <br />
                Little - লিট ('ল) - অল্প; ছোট্ট <br />
                later -লেইটার -
              </p>
            </div>
          </div>
        </div>

        {/* page 58 */}
        <div className="p-3 text-black lg:p-8 bg-[#EFE5D6] book-shadow">
          <div className="flex justify-start gap-10 md:justify-start md:gap-96 mb-2">
            <h2 className="text-base lg:text-xl font-bold ">Page 58</h2>
            <button
              onClick={goToContents}
              className=" px-2 py-1 bg-blue-500 text-white text-xs md:text-base rounded hover:bg-white hover:text-blue-500"
            >
              Back to index
            </button>
          </div>
          <hr className="border border-gray-400" />
          <div className="">
            <p className="font-bold py-1">L Sound:</p>
            <div className=" text-sm md:text-base">
              <p className="">
                <span className="font-medium text-pink-600">Rule-2. </span>{" "}
                <br />
                L + consonant' অথবা 'L' যদি শব্দের শেষে বসে, কিংবা শব্দের শেষে
                যদি 'll' বা 'le' হয়, তাহলেও সেখানে L-এর উচ্চারণ করতে হবে জিহ্বার
                পেছনের অংশ দিয়ে, তখন তাকে বলা হবে অস্পষ্ট বা 'Dark L' sound ।
                <br />
                যেমনঃ
                <br />
                Ball - ব('ল) - বল <br />
                Fool - ফু('ল) - বোকা <br />
                Little - লিট ('ল) - অল্প; ছোট্ট <br />
              </p>

              <p className="text-center pt-16 heading2">ASM English Academy</p>
            </div>
          </div>
        </div>

        {/* page 59 Chunking */}
        <div className="p-3 text-black lg:p-8 bg-[#EFE5D6] book-shadow">
          <h2 className="text-base lg:text-xl font-bold mb-2">Page 59</h2>
          <div className="">
            <p className="font-semibold">Chunking: </p>
            <div className=" text-sm md:text-base">
              <p className="">
                ব্রিটিশ ও আমেরিকানরা একেকটি word এক সাথে নয়; বরং গুচ্ছ আকারে করে
                থাকেন। এই ধরনের মাধ্যমকে 'Chunking' বলা হয়ে থাকে। 'Chunk' শব্দের
                অর্থ 'বেশ খানিকটা'। কাজেই এই পদ্ধতিতে ব্রিটিশ ও আমেরিকানরা বেশ
                কয়েকটি শব্দকে একসাথে যতখানি মনে রেখে বলা যায় ততখানিই একসাথেই
                উচ্চারণ করে থাকে। <br />
                যেমনঃ <br />
                It's my new smartphone.= It'smy newsmartphone. <br />
                এখানে প্রথমে /It'smy newsmartphone/ এক সাথে অর্থাৎ "ইটসমাই
                নিউস্মাটফৌন" একসাথে উচ্চারণ করা হয়েছে <br />
                একইভাবে, <br />I would like to order. = /IWoul<sup>dʒ</sup>
                liketo order/ "আউজলাইখঠু অডা (র)" <br />
                I know his father.= /Iknowwizfather/ "আনৌইজফাদা (র)" <br />
              </p>
              <div className=""></div>
            </div>
          </div>
        </div>
        {/* page 60 */}
        <div className="p-3 text-black lg:p-8 bg-[#EFE5D6] book-shadow">
          <h2 className="text-base lg:text-xl font-bold mb-2">Page 60</h2>
          <div className="">
            <p className="font-semibold">Chunking: </p>
            <div className=" text-sm md:text-base">
              <p className="">Coming sooooooon.....</p>
              <div className=""></div>
            </div>
          </div>
        </div>

        {/* Back Cover */}
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600  text-white text-base lg:text-xl font-bold">
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
            onClick={() => flipBook.current.pageFlip().turnToNextPage()}
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
              const value = e.target.value;
              setJumpPage(value === "" ? "" : parseInt(value, 10));
            }}
            className="border px-2 py-1 rounded w-20 text-center"
            placeholder="Go to..."
          />
          <button
            className="px-3 py-1 bg-indigo-600 text-white rounded disabled:opacity-50"
            disabled={jumpPage === "" || jumpPage < 1 || jumpPage > totalPages}
            onClick={() => {
              playFlipSound();
              if (
                typeof jumpPage === "number" &&
                jumpPage >= 1 &&
                jumpPage <= totalPages
              ) {
                flipBook.current.pageFlip().flip(jumpPage);
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
      <div className=""></div>

      <div className="">
        <p className="text-base leading-relaxed">
      `    <span className="font-bold">/n/ → /m/</span><br />
          o<span className="font-bold">n</span>e more /wʌmmɔː/<br />
          O<span className="font-bold">n</span>e pair /wʌmpeə/<br />
          Te<span className="font-bold">n</span> more<br />
          Ca<span className="font-bold">n</span> buy<br />
          Ca<span className="font-bold">n</span> make<br />
          Ca<span className="font-bold">n</span> please<br />
          O<span className="font-bold">n</span>e more time<br />
          Quatio<span className="font-bold">n</span> mark<br /><br />

          If the first word ends with <span className="font-bold">/n/</span> and the next word starts with <span className="font-bold">/m/</span>,<br />
          then <span className="font-bold">/n/</span> sound এর পরিবর্তে <span className="font-bold">/m/</span> sound উচ্চারণ করুন।<br /><br />

          <span className="font-bold">/t/ → /p/</span><br />
          Bes<span className="font-bold">t</span> man<br />
          Fron<span className="font-bold">t</span> bench<br />
          Pos<span className="font-bold">t</span> man<br />
          Tes<span className="font-bold">t</span> match<br />
          Tha<span className="font-bold">t</span> man<br />
          Whi<span className="font-bold">te</span> bag<br /><br />

          If the first word ends with <span className="font-bold">/t/</span> and the next word starts with <span className="font-bold">/m/</span> or <span className="font-bold">/b/</span>,<br />
          then <span className="font-bold">/t/</span> sound এর পরিবর্তে <span className="font-bold">/p/</span> sound উচ্চারণ করুন।<br /><br />

          <span className="font-bold">/d/ → /b/</span><br />
          ba<span className="font-bold">d</span> pain<br />
          goo<span className="font-bold">d</span> man<br />
          goo<span className="font-bold">d</span> bye<br />
          goo<span className="font-bold">d</span> morning<br />
          stan<span className="font-bold">d</span> by<br />
          ba<span className="font-bold">d</span> boy<br /><br />

          If the first word ends with <span className="font-bold">/d/</span> and the next word starts with<br />
          <span className="font-bold">/m/, /p/ or /b/</span>,<br />
          then <span className="font-bold">/d/</span> sound এর পরিবর্তে <span className="font-bold">/b/</span> sound উচ্চারণ করুন।
        </p>
        <div className="">
          <p className="text-base leading-relaxed">

            <span className="font-bold">/d/ → /k/</span><br />
            ba<span className="font-bold">d</span> girl<br />
            re<span className="font-bold">d</span> carpet<br />
            ha<span className="font-bold">d</span> cut<br /><br />

            If the first word ends with <span className="font-bold">/d/</span> and the next word starts with 
            <span className="font-bold">/g/</span> or <span className="font-bold">/k/</span>,<br />
            then <span className="font-bold">/d/</span> sound এর পরিবর্তে <span className="font-bold">/k/</span> sound উচ্চারণ করুন।<br /><br />


            <span className="font-bold">/n/ → /ŋ/</span><br />
            Ca<span className="font-bold">n</span> go<br />
            Ca<span className="font-bold">n</span> cut<br />
            Ope<span className="font-bold">n</span> court<br />
            Te<span className="font-bold">n</span> cats<br /><br />

            If the first word ends with <span className="font-bold">/n/</span> and the next word starts with 
            <span className="font-bold">/g/</span> or <span className="font-bold">/k/</span>,<br />
            then <span className="font-bold">/n/</span> sound এর পরিবর্তে <span className="font-bold">/ŋ/</span> sound উচ্চারণ করুন।<br /><br />


            <span className="font-bold">/z/ → /ʒ/</span><br />
            chee<span className="font-bold">se</span> chop<br />
            ro<span className="font-bold">se</span> show<br />
            i<span className="font-bold">s</span> young<br />
            wa<span className="font-bold">s</span> yes<br />
            i<span className="font-bold">s</span> yours<br />
            the<span className="font-bold">se</span> shops<br /><br />

            If the first word ends with <span className="font-bold">/z/</span> and the next word starts with 
            <span className="font-bold">/tʃ/</span> or <span className="font-bold">/ʃ/</span> or <span className="font-bold">/j/</span>,<br />
            then <span className="font-bold">/z/</span> sound এর পরিবর্তে <span className="font-bold">/ʒ/</span> sound উচ্চারণ করুন।<br /><br />


            <span className="font-bold">/θ/ → /s/</span><br />
            Bo<span className="font-bold">th</span> services<br />
            Nor<span className="font-bold">th</span> south<br />
            Wi<span className="font-bold">th</span> sir<br /><br />

            If the first word ends with <span className="font-bold">/θ/</span> or <span className="font-bold">/ð/</span> and the next word starts with 
            <span className="font-bold">/s/</span>,<br />
            then <span className="font-bold">/θ/</span> or <span className="font-bold">/ð/</span> sound এর পরিবর্তে <span className="font-bold">/s/</span> sound উচ্চারণ করুন।

          </p>

        </div>
        <div className="">
          <p className="text-base leading-relaxed">

          <span className="font-bold">/d/ → /dʒ/</span><br />
          Woul<span className="font-bold">dʒ d</span> you<br />
          an<span className="font-bold">dʒ d</span> you<br />
          coul<span className="font-bold">dʒ d</span> you<br />
          di<span className="font-bold">dʒ d</span> you<br /><br />

          If the first word ends with <span className="font-bold">/d/</span> and the next word starts with 
          <span className="font-bold">/j/</span> then<br />
          <span className="font-bold">/d/</span> sound এর পরিবর্তে <span className="font-bold">/dʒ/</span> sound উচ্চারণ করুন।<br /><br />


          <span className="font-bold">/t/ → /tʃ/</span><br />
          mee<span className="font-bold">tʃ t</span> you<br />
          abou<span className="font-bold">tʃ t</span> you<br />
          a<span className="font-bold">tʃ t</span> you<br />
          bi<span className="font-bold">tʃ te</span> you<br /><br />

          If the first word ends with <span className="font-bold">/t/</span> and the next word starts with 
          <span className="font-bold">/j/</span> then<br />
          <span className="font-bold">/t/</span> sound এর পরিবর্তে <span className="font-bold">/tʃ/</span> sound উচ্চারণ করুন।
          
        </p>

        </div>

      </div>
    </div>
  );
};

export default Pronunciation;
