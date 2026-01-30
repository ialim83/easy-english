import { useState } from "react";

import Beginner from "../../components/punctuation/Beginner";
import { Shortcut } from "../../components/punctuation/Shortcut";
import Advance from "../../components/punctuation/Advance";
// import introVideo from "../../../src/assets/introVideo.webm";
// import introVideo from "../assets/introVideo.webm";

const Punctuation = () => {
  const [activeTab, setActiveTab] = useState<
    "beginner" | "ShortTechnique" | "Advanced"
  >("ShortTechnique");

  return (
    <div className="min-h-screen lg:w-10/12 mx-auto overflow-hidden">
      <div className="py-10 text-center px-5">
        <h1 className="text-2xl md:text-4xl text-center text-green-400">
          Punctuation
          <br />
          <span className="text-center text-rose-500"> &</span>
          <br />
          Capitalization
        </h1>
        <p className="text-[15px] leading-relaxed">
          এই topic টি পরীক্ষায় আসে Question No. 12 তে। Punctuation & use of
          capitals ব্যবহারে করতে হবে সাধারণত ১০ টা, মার্কস=৫।
        </p>
      </div>


      

      {/* Tabs */}
      <div className="flex justify-center space-x-2 mb-6 border-b border-gray-300">
        <button
          onClick={() => setActiveTab("beginner")}
          className={`mb-2 py-1 px-3 font-semibold ${
            activeTab === "beginner"
              ? "border-2 rounded-full border-blue-500 text-blue-500"
              : "text-gray-500"
          }`}
        >
          Beginner Level
        </button>
        <button
          onClick={() => setActiveTab("ShortTechnique")}
          className={`mb-2 py-1 px-3 font-semibold ${
            activeTab === "ShortTechnique"
              ? "border-2 rounded-full border-blue-500 text-blue-500"
              : "text-gray-500"
          }`}
        >
          Short Tech
        </button>
        <button
          onClick={() => setActiveTab("Advanced")}
          className={`mb-2 py-1 px-3 font-semibold ${
            activeTab === "Advanced"
              ? "border-2 rounded-full border-blue-500 text-blue-500"
              : "text-gray-500"
          }`}
        >
          Advanced Level
        </button>
      </div>
      {/* Tab Content */}
      <div className=" py-3 overflow-x-auto text-base">
        {activeTab === "beginner" && <Beginner />}
        {activeTab === "ShortTechnique" && <Shortcut />}
        {activeTab === "Advanced" && <Advance />}
      </div>
    </div>
  );
};

export default Punctuation;
