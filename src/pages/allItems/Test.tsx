import { useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import data from "../../../data.json";

interface VocabularyItem {
  word: string;
  phonetic: string;
  banglaPronunciation: string;
  BengaliMeaning: string;
  examples: string;
  link: string;
}

function Test() {
  const typedData: VocabularyItem[] = data as VocabularyItem[];

  // state for search
  const [searchTerm, setSearchTerm] = useState("");

  // filter data
  const filteredData = typedData.filter((item) =>
    item.word.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="py-10">

      

      <div className="py-10 ">
        <a href="https://translate.google.com/?sl=en&tl=bn&op=translate">
          Gtranslate
        </a>
      </div>
      <div className="container mx-auto p-2">
        {/* Search box */}
        <div className="mb-4 relative w-full ">
          <MagnifyingGlassIcon className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search words..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full  border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="overflow-x-auto">
          <table className="md:w-full min-w-[300px] table-auto border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="py-1 px-1 border-b">Words</th>
                <th className="py-1 px-1 border-b">Phonemic transcription</th>
                <th className="py-1 px-1 border-b">Bangla Pronunciation</th>
                <th className="py-1 px-1 border-b">Meaning</th>
                <th className="py-1 px-1 border-b">Examples</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((item, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="py-1 px-1 border-b hover:bg-blue-50">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={item.link}
                      className="text-blue-600 hover:underline"
                    >
                      {index + 1}. <br /> {item.word}
                    </a>
                  </td>
                  <td className="py-1 px-1 border-b">{item.phonetic}</td>
                  <td className="py-1 px-1 border-b">
                    {item.banglaPronunciation}
                  </td>
                  <td className="py-1 px-1 border-b">{item.BengaliMeaning}</td>
                  <td className="py-1 px-1 border-b">{item.examples}</td>
                </tr>
              ))}
              {filteredData.length === 0 && (
                <tr>
                  <td
                    colSpan={5}
                    className="text-center py-3 text-gray-500 italic"
                  >
                    No matching words found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Test;
