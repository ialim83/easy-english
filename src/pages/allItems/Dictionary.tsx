import { useState } from "react";
import DictionaryApi from "../../components/DictionaryApi";
import TranslateWidget from "../../components/TranslateWidget";
import Translator from "../../components/Translator";

const Dictionary = () => {
  const [activeTab, setActiveTab] = useState<
    "translate" | "dictionary" | "translator"
  >("translate");

  return (
    <div className="p-4 bg-gray-100 min-h-screen md:w-1/2 mx-auto">
      <div className="py-20 text-center">
        <h1 className="">Dictionary</h1>
      </div>
      {/* Tabs */}
      <div className="flex justify-center space-x-4 mb-6 border-b border-gray-300">
        <button
          onClick={() => setActiveTab("translate")}
          className={`py-2 px-2 font-semibold ${
            activeTab === "translate"
              ? "border-b-2 border-blue-500 text-blue-500"
              : "text-gray-500"
          }`}
        >
          G-Translate
        </button>
        <button
          onClick={() => setActiveTab("dictionary")}
          className={`py-2 px-2 font-semibold ${
            activeTab === "dictionary"
              ? "border-b-2 border-blue-500 text-blue-500"
              : "text-gray-500"
          }`}
        >
          E-To-E
        </button>
        <button
          onClick={() => setActiveTab("translator")}
          className={`py-2 px-2 font-semibold ${
            activeTab === "translator"
              ? "border-b-2 border-blue-500 text-blue-500"
              : "text-gray-500"
          }`}
        >
          Translator
        </button>
      </div>

      {/* Tab Content */}
      <div className="bg-white rounded-xl shadow-2xl p-6 overflow-x-auto">
        {activeTab === "translate" && <TranslateWidget />}
        {activeTab === "dictionary" && <DictionaryApi />}
        {activeTab === "translator" && <Translator />}
      </div>
    </div>
  );
};

export default Dictionary;
