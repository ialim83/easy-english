import { useState } from "react";
import { sameVerbs, strongVerbsData, verb1 } from "../../components/data/StrongWeakVerb";

const StrongVerb = () => {
  const [searchTerm, setSearchTerm] = useState("");

  

  

  // Global counter track across all pattern categories
  let absoluteSerialNumber = 1;

  // search function
  const matchesSearch = (data: unknown) => {
    if (!searchTerm.trim()) return true;

    return JSON.stringify(data)
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
  };

  return (
    <div className="px-3 md:w-[65%] mx-auto">
      <div className="w-full mx-auto">
        <div className="py-20">
          <h1 className="text-center text-green-400">Strong Verbs</h1>
        </div>

        <div className="">
          <div className="w-full max-w-6xl mx-auto p-3 bg-slate-5 rounded-xl shadow-md my-8">
            <div className="mb-6">
              <h2 className="text-3xl font-extrabold text-slate- tracking-tight">
                Strong Verb:
              </h2>
              <p className="mt-2 text-sm text-slate-">
                Strong verbs form their past tense and past participle through
                an internal vowel change.
              </p>
            </div>
            <div className="">
              <input
                type="text"
                placeholder="Search verbs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <div className="space-y-8">
              {/* {strongVerbsData.map((group, groupIndex) => ( */}
              <div
                // key={groupIndex}
                className="overflow-hidden border border-slate-200 rounded-lg shadow-sm"
              >
                <div className="bg-slate-100 px-2 py-3 border-b border-slate-200">
                  <p className="text-md font-bold text-slate-700 tracking-wide">
                    Pattern:{" "}
                    {/* <span className="text-indigo-600">Alphabetic pattern</span> */}
                  </p>
                </div>

                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-slate-200 text-left text-sm">
                    <thead className="bg-slate-50 uppercase text-xs font-semibold text-slate-500 tracking-wider">
                      <tr>
                        <th scope="col" className="px-2 py-3 w-16 text-center">
                          S.N.
                        </th>
                        <th scope="col" className="px-2 py-3">
                          V1
                        </th>
                        <th scope="col" className="px-2 py-3">
                          Meaning
                        </th>
                        <th scope="col" className="px-2 py-3">
                          V2
                        </th>
                        <th scope="col" className="px-2 py-3">
                          V3
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate- bg-">
                      {verb1
                        .filter((verb) => matchesSearch(verb))
                        .map((verb, vIndex) => {
                          const currentSerialNumber = absoluteSerialNumber++;
                          return (
                            <tr
                              key={vIndex}
                              className="hover:bg-slate-50 transition-colors duration-150 ease-in-out "
                            >
                              <td className="px-2 py-3 text-center font-mono text-xs text-slate-400">
                                {currentSerialNumber}
                              </td>
                              <td className="px-2 py-3 font-semibold text-slate-400">
                                {verb.base}
                              </td>
                              <td className="px-2 py-3 text-pink-500 font-sans font-bold tracking-wide">
                                {verb.bengali}
                              </td>
                              <td className="px-2 py-3 font-medium text-indigo-500">
                                {verb.past}
                              </td>
                              <td className="px-2 py-3 font-medium text-emerald-600">
                                {verb.participle}
                              </td>
                            </tr>
                          );
                        })}
                    </tbody>
                  </table>
                </div>
              </div>
              {/* ))} */}
            </div>
          </div>
        </div>

        <div className="">
          <div className="pb-10 w-full overflow-x-auto">
            <h3 className="my-3">
              Note: কিছু Verb আছে যাদের Present, Past ও Past Participle একইরুপঃ
            </h3>
            <table className="min-w-full divide-y divide-slate-200 text-left text-sm">
                    <thead className="bg-slate-50 uppercase text-xs font-semibold text-slate-500 tracking-wider">
                      <tr>
                        <th scope="col" className="px-2 py-3 w-16 text-center">
                          S.N.
                        </th>
                        <th scope="col" className="px-2 py-3">
                          V1
                        </th>
                        <th scope="col" className="px-2 py-3">
                          Meaning
                        </th>
                        <th scope="col" className="px-2 py-3">
                          V2
                        </th>
                        <th scope="col" className="px-2 py-3">
                          V3
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate- bg-">
                      {sameVerbs
                        .filter((verb) => matchesSearch(verb))
                        .map((verb, vIndex) => {
                          const currentSerialNumber = absoluteSerialNumber++;
                          return (
                            <tr
                              key={vIndex}
                              className="hover:bg-slate-50 transition-colors duration-150 ease-in-out "
                            >
                              <td className="px-2 py-3 text-center font-mono text-xs text-slate-400">
                                {currentSerialNumber}
                              </td>
                              <td className="px-2 py-3 font-bold text-sky-500">
                                {verb.present}
                              </td>
                              <td className="px-2 py-3 text-pink-500 font-sans font-bold tracking-wide">
                                {verb.meaning}
                              </td>
                              <td className="px-2 py-3 font-medium text-indigo-500">
                                {verb.past}
                              </td>
                              <td className="px-2 py-3 font-medium text-emerald-600">
                                {verb.participle}
                              </td>
                            </tr>
                          );
                        })}
                    </tbody>
                  </table>
          </div>
        </div>

        {/* Shortcut Technique */}
        <div className="">
          <div className="w-full max-w-6xl mx-auto p-3 bg-slate-50 rounded-xl shadow-md my-8">
            <div className="mb-6">
              <h2 className="text-3xl font-extrabold text-slate-800 tracking-tight">
                Shortcut Technique
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                Strong verbs form their past tense and past participle through
                an internal vowel change.
              </p>
            </div>

            <div className="space-y-8">
              {strongVerbsData
                .filter((verb) => matchesSearch(verb))
                .map((group, groupIndex) => (
                  <div
                    key={groupIndex}
                    className="overflow-hidden border border-slate-200 rounded-lg shadow-sm bg-white"
                  >
                    <div className="bg-slate-100 px-2 py-2 border-b border-slate-200">
                      <p className="text-md font-bold text-slate-700 tracking-wide">
                        Pattern:{" "}
                        <span className="text-indigo-600">{group.pattern}</span>
                      </p>
                    </div>

                    <div className="overflow-x-auto">
                      <table className="min-w-full divide-y divide-slate-200 text-left text-sm">
                        <thead className="bg-slate-50 uppercase text-xs font-semibold text-slate-500 tracking-wider">
                          <tr>
                            <th
                              scope="col"
                              className="px-2 py-2 w-16 text-center"
                            >
                              S.N.
                            </th>
                            <th scope="col" className="px-2 py-2">
                              V1
                            </th>
                            <th scope="col" className="px-2 py-2">
                              Meaning
                            </th>
                            <th scope="col" className="px-2 py-2">
                              V2
                            </th>
                            <th scope="col" className="px-2 py-2">
                              V3
                            </th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-200 bg-white">
                          {group.verbs.map((verb, vIndex) => {
                            const currentSerialNumber = absoluteSerialNumber++;
                            return (
                              <tr
                                key={vIndex}
                                className="hover:bg-slate-50 transition-colors duration-150 ease-in-out odd:bg-white even:bg-slate-50/50"
                              >
                                <td className="px-2 py-2 text-center font-mono text-xs text-slate-400">
                                  {currentSerialNumber}
                                </td>
                                <td className="px-2 py-2 font-semibold text-slate-900">
                                  {verb.base}
                                </td>
                                <td className="px-2 py-2 font-normal text-slate-600 font-sans tracking-wide">
                                  {verb.bengali}
                                </td>
                                <td className="px-2 py-2 font-medium text-indigo-600">
                                  {verb.past}
                                </td>
                                <td className="px-2 py-2 font-medium text-emerald-600">
                                  {verb.participle}
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StrongVerb;
