import { useState } from "react";
import PartsOfSpeechBeginner from "../../components/PartsOfSpeechBeginner";
import DPartsOfSpeech from "../DegreeItems/DPartsOfSpeech";
import { PartsOfSpeechAdvanced } from "../../components/PartsOfSpeechAdvanced";

const PartsOfSpeech = () => {
  const [activeTab, setActiveTab] = useState<
    "beginner" | "ShortTechnique" | "Advanced"
  >("beginner");

  return (
    <div className="min-h-screen lg:w-10/12 mx-auto">
      <div className="py-20 text-center">
        <h1 className="">Parts Of Speech</h1>
      </div>
      {/* Tabs */}
      <div className="flex justify-center space-x-4 mb-6 border-b border-gray-300">
        <button
          onClick={() => setActiveTab("beginner")}
          className={`py-2 px-2 font-semibold ${
            activeTab === "beginner"
              ? "border-b-2 border-blue-500 text-blue-500"
              : "text-gray-500"
          }`}
        >
          Beginner Level
        </button>
        <button
          onClick={() => setActiveTab("ShortTechnique")}
          className={`py-2 px-2 font-semibold ${
            activeTab === "ShortTechnique"
              ? "border-b-2 border-blue-500 text-blue-500"
              : "text-gray-500"
          }`}
        >
          Short Tech
        </button>
        <button
          onClick={() => setActiveTab("Advanced")}
          className={`py-2 px-2 font-semibold ${
            activeTab === "Advanced"
              ? "border-b-2 border-blue-500 text-blue-500"
              : "text-gray-500"
          }`}
        >
          Advanced Level
        </button>
      </div>

      {/* Tab Content */}
      <div className=" py-3 overflow-x-auto text-base">
        {activeTab === "beginner" && <PartsOfSpeechBeginner />}
        {activeTab === "ShortTechnique" && <DPartsOfSpeech />}
        {activeTab === "Advanced" && <PartsOfSpeechAdvanced />}
      </div>
    </div>
  );
};

export default PartsOfSpeech;
