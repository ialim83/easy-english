import { Button } from "flowbite-react";
import { init } from "ityped";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
// import SearchBar from "../SearchBar";
const Banner = () => {
  const textRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    if (textRef.current) {
      init(textRef.current, {
        // showCursor: true,
        backDelay: 1500,
        backSpeed: 60,
        strings: ["Easy English Academy"],
      });
    }
  }, []);

  const scrollToCategory = () => {
    const formElement = document.getElementById("category");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
      // You can use "auto" instead of "smooth" for an instant scroll
    }
  };

  return (
    <div className="h-full">
      {/* <div className="hero bannerBg h-screen">
        <div className="hero-overlay bg-opacity-60"></div>

        <div className="flex flex-col items-center justify-normal text-center text-neutral-content gap-4">
          <div className="">
            <h1 className="text-2xl lg:text-5xl">Welcome to</h1>
          </div>

          <div className="max-w-fit ">
            <h1 className="mb-5 text-2xl md:text-5xl font-bold heading2">
              <span className="text-green-400" ref={textRef}></span>
            </h1>
          </div>
          <div className="">
            <Button
              gradientDuoTone="purpleToPink"
              onClick={() => scrollToCategory()}
              className=""
            >
              Let's Get Started
            </Button>
          </div>
        </div>
      </div> */}
      {/* <div className="hero bg-white">
        <div className="hero-overlay bg-black/10"></div>
        <div className="relative w-full flex justify-center h-screen">
          <section className="relative flex items-center justify-center py-16 lg:py-24 w-full">
            <div
              className="
                relative
                w-[380px] h-[380px]
                sm:w-[400px] sm:h-[400px]
                md:w-[450px] md:h-[450px]
                lg:w-[600px] lg:h-[600px]
                overflow-hidden
                rounded-3xl
              "
            >
              <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              >
                <source
                  src="https://d33vw3iu5hs0zi.cloudfront.net/media/exness_c76dfeb683.webm"
                  type="video/webm"
                />
              </video>

              <div className="absolute inset-0 bg-black/10" />

              <div className="relative z-10 flex flex-col items-center justify-center h-full text-center gap-4 px-4">
                <h1 className="text-pink-700 text-lg sm:text-xl lg:text-3xl">
                  Welcome to
                </h1>

                <h2 className="font-bold text-gray-700 text-xl sm:text-2xl md:text-4xl lg:text-5xl heading2">
                  <span ref={textRef}></span>
                </h2>

                <Button
                  gradientDuoTone="purpleToPink"
                  onClick={scrollToCategory}
                  className="mt-2"
                >
                  Let&apos;s Get Started
                </Button>
              </div>
            </div>
          </section>
        </div>
      </div> */}
      <div className="relative w-full bg-[#fff]">
        {/* Global overlay (same everywhere) */}
        {/* <div className="absolute inset-0 bg-black/20 pointer-events-none" /> */}
        {/* <div className="hero-overlay bg-opacity-20"></div> */}
        <div className="relative w-full flex justify-center min-h-screen">
          <section className="relative flex items-center justify-center py-16 lg:py-24 w-full">
            {/* Video Wrapper */}
            <div
              className="
          relative
          w-[380px] h-[380px]
          sm:w-[400px] sm:h-[400px]
          md:w-[450px] md:h-[450px]
          lg:w-[600px] lg:h-[600px]
          overflow-hidden
        "
            >
              {/* Background Video */}
              <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              >
                <source
                  src="https://d33vw3iu5hs0zi.cloudfront.net/media/exness_c76dfeb683.webm"
                  type="video/webm"
                />
              </video>

              {/* SAME overlay as page */}
              {/* <div className="absolute inset-0 bg-black/20" /> */}

              {/* Centered Content */}
              <div className="relative z-10 flex flex-col items-center justify-center h-full text-center gap-4 px-4">
                <h1 className="text-pink-700 text-lg sm:text-xl lg:text-3xl">
                  Welcome to
                </h1>

                <h2 className="font-bold text-black text-xl sm:text-2xl md:text-4xl lg:text-5xl heading2">
                  <span ref={textRef}></span>
                </h2>

                <Button
                  gradientDuoTone="purpleToPink"
                  onClick={scrollToCategory}
                  className="mt-2"
                >
                  Let&apos;s Get Started
                </Button>
              </div>
            </div>
          </section>
        </div>
      </div>

      <div className="h-full max-w-7xl  mx-auto py-20" id="category">
        {/* <div className="px-5 w-full flex items-center justify-center py-20">
          <div className="relative w-[600px] h-[300px] bg-black text-white flex items-center justify-center text-2xl font-bold rounded-2xl overflow-hidden">
            <span className="text-6xl text-green-400">Category</span>
            <div className="effect"></div>
          </div>
          <img src="/dialogTitle.png" alt="" /> 
        </div> */}
        <h1 className="py-4 text-center w-full text-4xl font-bold uppercase text-green-400">
          Category
        </h1>

        <div className="my-5">
          <ul className="grid grid-cols-2 md:grid-cols-3  gap-5 px-2 md:px-20 ">
            <Link to={"grammar"}>
              <li className="text-gray-300 bg-gradient-to-r from-sky-500 to-rose-700 dark:hover:shadow-yellow-400 dark:hover:border-gray-300 dark:hover:text-gray-400 text-center py-7 md:py-16 rounded-md font-bold md:text-2xl text-xl category hover:dark:shadow-md">
                Grammar
              </li>
            </Link>
            <Link to={"/dictionary"}>
              <li className="text-gray-300 bg-gradient-to-r from-sky-500 to-rose-700 dark:hover:shadow-yellow-400 dark:hover:border-gray-300 dark:hover:text-gray-400 text-center py-7 md:py-16 rounded-md font-bold md:text-2xl text-xl category hover:dark:shadow-md">
                Dictionary
              </li>
            </Link>

            <Link to={"/ssc"}>
              <li className="text-gray-300 bg-gradient-to-r from-sky-500 to-rose-700  border-yellow-400 dark:hover:shadow-yellow-400 dark:hover:border-gray-300 dark:hover:text-gray-400 text-center py-7 md:py-16 rounded-md font-bold md:text-2xl text-xl category">
                SSC
              </li>
            </Link>
            <Link to={"/hsc"}>
              <li className="text-gray-300 bg-gradient-to-r from-sky-500 to-rose-700  border-yellow-400 dark:hover:shadow-yellow-400 dark:hover:border-gray-300 dark:hover:text-gray-400 text-center py-7 md:py-16 rounded-md font-bold md:text-2xl text-xl category hover:dark:shadow-md">
                HSC
              </li>
            </Link>

            <Link to={"/degree"}>
              <li className="text-gray-300 bg-gradient-to-r from-sky-500 to-rose-700  border-yellow-400 dark:hover:shadow-yellow-400 dark:hover:border-gray-300 dark:hover:text-gray-400 text-center py-7 md:py-16 rounded-md font-bold md:text-2xl text-xl category">
                Degree
              </li>
            </Link>
            <Link to={"/words"}>
              <li className="text-gray-300 bg-gradient-to-r from-sky-500 to-rose-700 dark:hover:shadow-yellow-400 dark:hover:border-gray-300 dark:hover:text-gray-400 text-center py-7 md:py-16 rounded-md font-bold md:text-2xl text-xl category hover:dark:shadow-md">
                Oxford Words
              </li>
            </Link>
            <Link to={"/pronunciation"}>
              <li className="text-gray-300 bg-gradient-to-r from-sky-500 to-rose-700  border-yellow-400 dark:hover:shadow-yellow-400 dark:hover:border-gray-300 dark:hover:text-gray-400 text-center py-7 md:py-16 rounded-md font-bold md:text-2xl text-xl category">
                Pronunciation
              </li>
            </Link>
            <Link to={"/storyVocabulary"}>
              <li className="text-gray-300 bg-gradient-to-r from-sky-500 to-rose-700  border-yellow-400 dark:hover:shadow-yellow-400 dark:hover:border-gray-300 dark:hover:text-gray-400 text-center py-7 md:py-16 rounded-md font-bold md:text-2xl text-xl category">
                গল্পে গল্পে
              </li>
            </Link>
            <Link to={"/tense"}>
              <li className="text-gray-300 bg-gradient-to-r from-sky-500 to-rose-700  border-yellow-400 dark:hover:shadow-yellow-400 dark:hover:border-gray-300 dark:hover:text-gray-400 text-center py-7 md:py-16 rounded-md font-bold md:text-2xl text-xl category">
                Tense
              </li>
            </Link>
            <Link to={"/voice"}>
              <li className="lg:hidden text-gray-300 bg-gradient-to-r from-sky-500 to-rose-700  border-yellow-400 dark:hover:shadow-yellow-400 dark:hover:border-gray-300 dark:hover:text-gray-400 text-center py-7 md:py-16 rounded-md font-bold md:text-2xl text-xl category">
                Voice
              </li>
            </Link>

            <Link to={"/social"}>
              <li className="hidden text-gray-300 bg-gradient-to-r from-sky-500 to-rose-700  border-yellow-400 dark:hover:shadow-yellow-400 dark:hover:border-gray-300 dark:hover:text-gray-400 text-center py-7 md:py-16 rounded-md font-bold md:text-2xl text-xl category  ">
                Social English
              </li>
            </Link>
          </ul>
        </div>
      </div>

      {/* Background Video */}
      {/* <div className=" relative w-full h-screen overflow-hidden">
        <div className="">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover mx-auto"
          > */}
      {/* <source src="/video/introVideo.webm" type="video/webm" /> */}
      {/* </video>
        </div> */}
      {/* Overlay (optional) */}
      {/* <div className="absolute inset-0 bg-black/40" /> */}

      {/* Content */}
      {/* <div className="relative z-10 flex items-center justify-center h-full ">
          <div className="flex flex-col items-center justify-normal text-center text-neutral-content gap-4">
            <div className="">
              <h1 className="text-2xl md:text-5xl">Welcome to</h1>
            </div>

            <div className="max-w-fit ">
              <h1 className="mb-5 text-2xl md:text-5xl font-bold heading2">
                <span className="text-green-400" ref={textRef}></span>
              </h1>
            </div>
            <div className="">
              <Button
                gradientDuoTone="purpleToPink"
                onClick={() => scrollToCategory()}
                className=""
              >
                Let's Get Started
              </Button>
            </div>
          </div>
        </div> */}
      {/* </div> */}
    </div>
  );
};

export default Banner;
