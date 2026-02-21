import React from "react";

const DegreeOfAdj: React.FC = () => {
  const tableData = [
    {
      serial: "১ম",
      position: "একজন (Rahim)",
      form: "good",
      degree: "positive",
    },
    {
      serial: "২য়",
      position: "দুজন (Rahim ও Karim)",
      form: "better",
      degree: "comparative",
    },
    {
      serial: "৩য়",
      position: "দুজনের অধিক (সবার সাথে)",
      form: "the best",
      degree: "superlative",
    },
  ];

  const tableData1 = [
    { positive: "high", comparative: "higher", superlative: "highest" },
    { positive: "fine", comparative: "finer", superlative: "finest" },
    {
      positive: "thin (পাতলা)",
      comparative: "thinner",
      superlative: "thinnest",
    },
  ];

  const ruleOneData = [
    {
      positive: "great",
      syllables: "1",
      meaning: "বড়, বিখ্যাত",
      comparative: "greater",
      superlative: "greatest",
    },
    {
      positive: "high",
      syllables: "1",
      meaning: "উঁচু",
      comparative: "higher",
      superlative: "highest",
    },
    {
      positive: "long",
      syllables: "1",
      meaning: "লম্বা",
      comparative: "longer",
      superlative: "longest",
    },
    {
      positive: "small",
      syllables: "1",
      meaning: "ছোট",
      comparative: "smaller",
      superlative: "smallest",
    },
    {
      positive: "weak",
      syllables: "1",
      meaning: "দুর্বল",
      comparative: "weaker",
      superlative: "weakest",
    },
    {
      positive: "happy",
      syllables: "2",
      meaning: "সুখী",
      comparative: "happier",
      superlative: "happiest",
    },
    {
      positive: "ugly",
      syllables: "2",
      meaning: "কুৎসিত",
      comparative: "uglier",
      superlative: "ugliest",
    },
    {
      positive: "easy",
      syllables: "2",
      meaning: "সহজ",
      comparative: "easier",
      superlative: "easiest",
    },
  ];

  const ruleTwoData = [
    {
      positive: "tall",
      meaning: "লম্বা",
      comparative: "taller",
      superlative: "tallest",
    },
    {
      positive: "small",
      meaning: "ছোট",
      comparative: "smaller",
      superlative: "smallest",
    },
    {
      positive: "apt",
      meaning: "চটপটে",
      comparative: "apter",
      superlative: "aptest",
    },
    {
      positive: "soft",
      meaning: "কোমল, নরম",
      comparative: "softer",
      superlative: "softest",
    },
    {
      positive: "short",
      meaning: "খাটো",
      comparative: "shorter",
      superlative: "shortest",
    },
  ];

  const ruleThreeData = [
    {
      positive: "deep",
      meaning: "গভীর",
      comparative: "deeper",
      superlative: "deepest",
    },
    {
      positive: "weak",
      meaning: "দুর্বল",
      comparative: "weaker",
      superlative: "weakest",
    },
    {
      positive: "great",
      meaning: "বড়",
      comparative: "greater",
      superlative: "greatest",
    },
  ];

  const ruleFourData = [
    {
      positive: "big",
      meaning: "বড়",
      comparative: "bigger",
      superlative: "biggest",
    },
    {
      positive: "hot",
      meaning: "গরম",
      comparative: "hotter",
      superlative: "hottest",
    },
    {
      positive: "fat",
      meaning: "মোটা",
      comparative: "fatter",
      superlative: "fattest",
    },
  ];

  const ruleFiveData = [
    {
      positive: "safe",
      meaning: "নিরাপদ",
      comparative: "safer",
      superlative: "safest",
    },
    {
      positive: "wise",
      meaning: "জ্ঞানী",
      comparative: "wiser",
      superlative: "wisest",
    },
    {
      positive: "true",
      meaning: "সত্য",
      comparative: "truer",
      superlative: "truest",
    },
    {
      positive: "large",
      meaning: "বড়",
      comparative: "larger",
      superlative: "largest",
    },
    {
      positive: "noble",
      meaning: "মহৎ",
      comparative: "nobler",
      superlative: "noblest",
    },
    {
      positive: "brave",
      meaning: "সাহসী",
      comparative: "braver",
      superlative: "bravest",
    },
    {
      positive: "fine",
      meaning: "সুন্দর, নরম",
      comparative: "finer",
      superlative: "finest",
    },
  ];

  const ruleSixData = [
    {
      positive: "happy",
      meaning: "সুখী",
      comparative: "happier",
      superlative: "happiest",
    },
    {
      positive: "ugly",
      meaning: "কুৎসিত",
      comparative: "uglier",
      superlative: "ugliest",
    },
    {
      positive: "dry",
      meaning: "শুষ্ক",
      comparative: "drier",
      superlative: "driest",
    },
    {
      positive: "easy",
      meaning: "সহজ",
      comparative: "easier",
      superlative: "easiest",
    },
    {
      positive: "shy",
      meaning: "লাজুক",
      comparative: "shier",
      superlative: "shiest",
    },
    {
      positive: "sly",
      meaning: "চালাক, ধূর্ত",
      comparative: "slier",
      superlative: "sliest",
    },
  ];

  const ruleSevenData1 = [
  { positive: "bad, evil, ill", meaning: "খারাপ, মন্দ, দুষ্ট", comparative: "worse", superlative: "worst" },
  { positive: "good, well", meaning: "ভাল", comparative: "better", superlative: "best" },
  { positive: "little", meaning: "কম, ছোট", comparative: "less", superlative: "least" },
  { positive: "much, many", meaning: "অনেক", comparative: "more", superlative: "most" },
  { positive: "fore", meaning: "অগ্রবর্তী", comparative: "former", superlative: "foremost, first" },
  { positive: "hind", meaning: "পশ্চাৎস্থিত", comparative: "hinder", superlative: "hindermost" },
];

const ruleSevenData2 = [
  { positive: "late", meaning: "দেরি, বিলম্বিত", comparative: "later, latter", superlative: "latest, last" },
  { positive: "old", meaning: "বয়স্ক, পুরানো", comparative: "elder, older", superlative: "eldest, oldest" },
  { positive: "near", meaning: "নিকটবর্তী", comparative: "nearer", superlative: "nearest, next" },
  { positive: "far", meaning: "দূরবর্তী", comparative: "farther", superlative: "farthest" },
  { positive: "nigh", meaning: "নিকট", comparative: "nigher", superlative: "nighest, next" },
];

const adverbTable = [
  { positive: "fore", meaning: "সম্মুখে, আগে", comparative: "further", superlative: "furthest (গতিসূচক)" },
  { positive: "far", meaning: "দূরবর্তী", comparative: "farther", superlative: "farthest" },
  { positive: "in", meaning: "ভিতরে", comparative: "inner", superlative: "inmost, innermost" },
  { positive: "out", meaning: "বাইরে", comparative: "outer", superlative: "outmost, outermost" },
  { positive: "up", meaning: "উপরে", comparative: "upper", superlative: "uppermost" },
];

  return (
    <div className="">
      <div className="py-20">
        <h1 className="text-center text-2xl font-bold mt-2">
          COMPARISON OF ADJECTIVE
        </h1>
      </div>

      <div className="min-h-screen bg-gray-100 flex justify-center items-start py-10">
        <div className="bg-white shadow-lg rounded-lg p-8 max-w-3xl w-full text-gray-800 leading-relaxed">
          {/* <h2 className="text-center text-lg font-semibold tracking-widest">
          CHAPTER ▲ 13
        </h2> */}
          <div className="">
            <h3 className="mt-6 font-semibold">1. DEGREE OF COMPARISON</h3>

            <p className="mt-4">নিচের বাক্যগুলো পড়ঃ</p>

            <p className="mt-2">
              Rahim is a <strong>good</strong> boy.
            </p>
            <p>
              Rahim is <strong>better</strong> than Karim. (রহিম করিমের চেয়ে
              ভাল)
            </p>
            <p>
              Rahim is <strong>the best</strong> boy in the class. (রহিম ক্লাসের
              সবার মধ্যে শ্রেষ্ঠ ছেলে)
            </p>

            <p className="mt-4">
              উপরের বাক্যগুলিতে একই adjective বিভিন্ন প্রয়োজন অনুসারে ভিন্ন রূপ
              (form) ব্যবহৃত হয়েছে। Adjective টি হল <strong>good</strong>{" "}
              (ভাল)। নিচের ছকের মাধ্যমে পরিবর্তন দেখানো যায়ঃ
            </p>

            <div className="overflow-x-auto mt-4">
              <table className="w-full border border-gray-400 text-sm">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="border border-gray-400 px-2 py-1">ক্রম</th>
                    <th className="border border-gray-400 px-2 py-1">
                      তুলনার অবস্থান
                    </th>
                    <th className="border border-gray-400 px-2 py-1">
                      Adjective এর রূপ
                    </th>
                    <th className="border border-gray-400 px-2 py-1">
                      Degree of Comparison
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {tableData.map((row, index) => (
                    <tr key={index}>
                      <td className="border border-gray-400 px-2 py-1">
                        {row.serial}
                      </td>
                      <td className="border border-gray-400 px-2 py-1">
                        {row.position}
                      </td>
                      <td className="border border-gray-400 px-2 py-1">
                        {row.form}
                      </td>
                      <td className="border border-gray-400 px-2 py-1">
                        {row.degree}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="mt-4">
              দুটি বা ততোধিক ব্যক্তির মধ্যে তুলনা করতে হলে একই adjective বিভিন্ন
              sentence-এ ভিন্ন ভিন্ন রূপে ব্যবহৃত হয়। adjective-এর যে রূপ
              নির্ধারণ করে তুলনার মাত্রা বা অবস্থান প্রকাশ করে তাকে degree of
              comparison বলে। উপরের Table থেকে আমরা জানতে পারি যে degree of
              comparison তিন প্রকার, যথাঃ
            </p>

            <ul className="list-disc ml-6 mt-2">
              <li>(a) Positive</li>
              <li>(b) Comparative</li>
              <li>(c) Superlative</li>
            </ul>

            <p className="mt-4">
              নিচে adjective-এর degree পরিবর্তন করে আরও কিছু উদাহরণ দেখানো হলোঃ
            </p>

            <p className="mt-2">
              He has <strong>much</strong> (অনেক) money.
            </p>
            <p>
              He has <strong>more</strong> money than I. (তার আমার চেয়ে বেশি
              টাকা আছে)
            </p>
            <p>
              He has <strong>the most</strong> money in the village. (এই গ্রামে
              তার সবচেয়ে বেশি টাকা আছে)
            </p>

            <p className="mt-4">
              তবে little-এর degree of comparison আছে। কিন্তু কিছু adjective of
              quantity যেমন I no, none, some, enough, sufficient ইত্যাদির কোন
              degree of comparison নাই।
            </p>
          </div>

          <div className="">
            <p>
              প্রায় সমস্ত adjective of quality-এর degree of comparison আছে।
              যেমনঃ
            </p>

            <div className="overflow-x-auto mt-3">
              <table className="w-full border border-gray-400">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="border border-gray-400 px-2 py-1">
                      Positive
                    </th>
                    <th className="border border-gray-400 px-2 py-1">
                      Comparative
                    </th>
                    <th className="border border-gray-400 px-2 py-1">
                      Superlative
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {tableData1.map((row, index) => (
                    <tr key={index}>
                      <td className="border border-gray-400 px-2 py-1">
                        {row.positive}
                      </td>
                      <td className="border border-gray-400 px-2 py-1">
                        {row.comparative}
                      </td>
                      <td className="border border-gray-400 px-2 py-1">
                        {row.superlative}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="mt-4">
              Many (many—more—most) এবং few (few—fewer—fewest) ছাড়া অন্যান্য
              numeral adjective গুলোর degree of comparison নেই। যেমনঃ Two,
              seven, sixth, double ইত্যাদির কোন degree of comparison হয় না।
            </p>

            <p className="mt-3">
              কোন pronominal adjective-এর degree of comparison নাই। যেমনঃ this,
              that, which, what, each, any ইত্যাদির degree of comparison নাই।
            </p>

            <p className="mt-3">
              কিছুকিছু descriptive adjective যেমন dead, lame (খোঁড়া), blind
              (অন্ধ), one-eyed (কানা) ইত্যাদির কোন degree of comparison নাই।
            </p>

            <p className="mt-3">
              বিভিন্ন রং যেমন white (সাদা), black (কালো), green (সবুজ), yellow
              (হলুদ), pink (গোলাপী), brown (বাদামী), blue (নীল) ইত্যাদির কোন
              degree of comparison নাই।
            </p>

            <p className="mt-3">
              বিভিন্ন আকৃতি বাচক adjective যেমন round (গোলাকার), square (চৌকো)
              —প্রভৃতির কোন degree of comparison নাই।
            </p>

            <p className="mt-3">
              এছাড়া yearly (বার্ষিক), half-yearly (ষান্মাসিক), perennial
              (বহুবর্ষজীবী), centennial (শতবার্ষিক), millenarian (সহস্র বার্ষিক
              সংক্রান্ত), monthly (মাসিক), weekly (সাপ্তাহিক), fortnightly
              (পাক্ষিক), several (কয়েকটি), lunar (চন্দ্র), solar (সৌর) প্রভৃতি
              adjective-গুলোর কোন degree of comparison নাই।
            </p>

            <div className="border border-gray-400 mt-6 p-4">
              <h3 className="font-semibold text-center mb-3">EXERCISE</h3>
              <p>সত্য (True) হলে T এবং মিথ্যা (False) হলে F লিখঃ</p>

              <p className="mt-3">
                (1) সকল pronominal adjective (যেমন which, that) এর degree of
                comparison হয়।
              </p>

              <p className="mt-2">
                (2) much ও little বাদে সব quantitative adjective এর degree of
                comparison আছে।
              </p>

              <p className="mt-2">
                (3) প্রায় সকল adjective of quality-এর degree of comparison হয়।
              </p>

              <p className="mt-2">
                (4) many ও few বাদে সকল adjective of number-এর degree of
                comparison হয়।
              </p>

              <p className="mt-2">
                (5) oblong (আয়ত), square (বর্গ), circular (গোলাকার), round
                (গোলাকার)—এই adjective গুলোর degree of comparison নাই।
              </p>

              <p className="mt-3">Ans: (5) T (4) F (3) T (2) F (1) F</p>
            </div>
          </div>

          <div className="">
            <h3 className="mt-6 font-semibold">
              II. RULES FOR FORMING COMPARATIVES AND SUPERLATIVES
            </h3>

            <p className="mt-2">
              (Comparative এবং Superlative গঠন করার নিয়মাবলী)
            </p>

            <p className="mt-2">
              RULE—1. এক syllable বিশিষ্ট adjective সমূহ ও দুই syllable বিশিষ্ট
              কিছু adjective-এর শেষে er যোগ করে comparative এবং est যোগ করে
              superlative করা হয়। যেমনঃ
            </p>
            {/* RULE 1 TABLE */}
            <div className="overflow-x-auto">
              <table className="w-full border border-gray-400 mb-6">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="border px-2 py-1">Positive</th>
                    <th className="border px-2 py-1">No. of Syllables</th>
                    <th className="border px-2 py-1">Meaning</th>
                    <th className="border px-2 py-1">Comparative</th>
                    <th className="border px-2 py-1">Superlative</th>
                  </tr>
                </thead>
                <tbody>
                  {ruleOneData.map((item, index) => (
                    <tr key={index}>
                      <td className="border px-2 py-1">{item.positive}</td>
                      <td className="border px-2 py-1 text-center">
                        {item.syllables}
                      </td>
                      <td className="border px-2 py-1">{item.meaning}</td>
                      <td className="border px-2 py-1">{item.comparative}</td>
                      <td className="border px-2 py-1">{item.superlative}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h3 className="font-semibold mb-2">RULE—2.</h3>
            <p>
              Adjective এর শেষে দুটি consonant (a, e, i, o, u বাদে যে কোন
              letter) থাকলে তার শেষে comparative-এ er এবং superlative-এ est যোগ
              করতে হয়। অর্থাৎ, এক্ষেত্রে positive adjective-এর গঠন হবে এরূপঃ
            </p>
            <p className="my-2 font-mono">........ consonant consonant</p>
            <p>যেমনঃ Tall—এর শেষে দুটি consonant আছে।</p>

            <div className="overflow-x-auto my-4">
              <table className="w-full border border-gray-400">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="border px-2 py-1">Positive</th>
                    <th className="border px-2 py-1">Meaning</th>
                    <th className="border px-2 py-1">Comparative</th>
                    <th className="border px-2 py-1">Superlative</th>
                  </tr>
                </thead>
                <tbody>
                  {ruleTwoData.map((item, index) => (
                    <tr key={index}>
                      <td className="border px-2 py-1">{item.positive}</td>
                      <td className="border px-2 py-1">{item.meaning}</td>
                      <td className="border px-2 py-1">{item.comparative}</td>
                      <td className="border px-2 py-1">{item.superlative}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h3 className="font-semibold mb-2">RULE—3.</h3>
            <p>
              Adjective-এর শেষে একটি consonant ও তার আগে দুটি vowel থাকলে তাকে
              comparative করতে er এবং superlative করতে est ব্যবহার করতে হয়।
              অর্থাৎ, adjective টির গঠন হবে এরূপঃ
            </p>
            <p className="my-2 font-mono">........ vowel vowel consonant</p>
            <p>যেমনঃ deep—এর শেষে একটি consonant এবং তার আগে দুটি vowel আছে।</p>

            <div className="overflow-x-auto my-4">
              <table className="w-full border border-gray-400">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="border px-2 py-1">Positive</th>
                    <th className="border px-2 py-1">Meaning</th>
                    <th className="border px-2 py-1">Comparative</th>
                    <th className="border px-2 py-1">Superlative</th>
                  </tr>
                </thead>
                <tbody>
                  {ruleThreeData.map((item, index) => (
                    <tr key={index}>
                      <td className="border px-2 py-1">{item.positive}</td>
                      <td className="border px-2 py-1">{item.meaning}</td>
                      <td className="border px-2 py-1">{item.comparative}</td>
                      <td className="border px-2 py-1">{item.superlative}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h3 className="font-semibold mb-2">RULE—4.</h3>
            <p>
              Adjective-এর শেষে একটি consonant এবং তার আগে একটি vowel থাকলে তাকে
              comparative করার সময় er এবং superlative করার সময় est যোগ করতে হয়
              এবং উভয় ক্ষেত্রে শেষের consonant দ্বিগুণ ব্যবহৃত হয়। অর্থাৎঃ
            </p>

            <div className="my-2 font-mono">
              <p>Positive → ..vowel-consonant</p>
              <p>Comparative → ..vowel cons. cons + er</p>
              <p>Superlative → ..vowel cons. cons + est</p>
            </div>

            <div className="overflow-x-auto mt-4">
              <table className="w-full border border-gray-400">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="border px-2 py-1">Positive</th>
                    <th className="border px-2 py-1">Meaning</th>
                    <th className="border px-2 py-1">Comparative</th>
                    <th className="border px-2 py-1">Superlative</th>
                  </tr>
                </thead>
                <tbody>
                  {ruleFourData.map((item, index) => (
                    <tr key={index}>
                      <td className="border px-2 py-1">{item.positive}</td>
                      <td className="border px-2 py-1">{item.meaning}</td>
                      <td className="border px-2 py-1">{item.comparative}</td>
                      <td className="border px-2 py-1">{item.superlative}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="">
            {/* Exercise 1 */}
            <div className="border border-gray-400 p-3 mb-6">
              <h3 className="font-semibold">EXERCISE</h3>
              <p>Correct the spelling (বানান সঠিক কর):</p>

              <div className="overflow-x-auto mt-3">
                <table className="w-full border border-gray-400">
                  <thead>
                    <tr className="bg-gray-200">
                      <th className="border px-2 py-1">Positive</th>
                      <th className="border px-2 py-1">Comparative</th>
                      <th className="border px-2 py-1">Superlative</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border px-2 py-1">fat</td>
                      <td className="border px-2 py-1">fater</td>
                      <td className="border px-2 py-1">fatest</td>
                    </tr>
                    <tr>
                      <td className="border px-2 py-1">hot</td>
                      <td className="border px-2 py-1">hoter</td>
                      <td className="border px-2 py-1">hotest</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* RULE 5 */}
            <h3 className="font-semibold mb-2">RULE—5.</h3>
            <p>
              Adjective-এর শেষে e থাকলে comparative-এ er এবং superlative-এ est
              যোগ করা হয়। যেমনঃ
            </p>

            <div className="overflow-x-auto my-4">
              <table className="w-full border border-gray-400">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="border px-2 py-1">Positive</th>
                    <th className="border px-2 py-1">Meaning</th>
                    <th className="border px-2 py-1">Comparative</th>
                    <th className="border px-2 py-1">Superlative</th>
                  </tr>
                </thead>
                <tbody>
                  {ruleFiveData.map((item, index) => (
                    <tr key={index}>
                      <td className="border px-2 py-1">{item.positive}</td>
                      <td className="border px-2 py-1">{item.meaning}</td>
                      <td className="border px-2 py-1">{item.comparative}</td>
                      <td className="border px-2 py-1">{item.superlative}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Exercise 2 */}
            <div className="border border-gray-400 p-3 mb-6">
              <h3 className="font-semibold">EXERCISE</h3>
              <p>বানান ঠিক কর:</p>

              <div className="grid grid-cols-3 gap-4 mt-3">
                <div>
                  <p className="font-semibold">Pos.</p>
                  <p>wise</p>
                  <p>noble</p>
                  <p>fine</p>
                </div>
                <div>
                  <p className="font-semibold">Comp.</p>
                  <p>wiseer</p>
                  <p>nobleer</p>
                  <p>fineer</p>
                </div>
                <div>
                  <p className="font-semibold">Super.</p>
                  <p>wiseest</p>
                  <p>nobleest</p>
                  <p>fineest</p>
                </div>
              </div>

              <p className="mt-3">Ans. RULE 5. দেখ।</p>
            </div>

            {/* RULE 6 */}
            <h3 className="font-semibold mb-2">RULE—6.</h3>
            <p>
              Adjective-এর শেষ অক্ষর y হলে এবং তার আগে consonant থাকলে
              comparative ও superlative করার সময় শেষে y বাদ দিয়ে যথাক্রমে ier ও
              iest যোগ করতে হয়।
            </p>

            <p className="my-2 font-mono">
              Positive → ...... consonant + y (যেমন heavy) <br />
              Comparative → ...... consonant + ier (যেমন heavier) <br />
              Superlative → ...... consonant + iest (যেমন heaviest)
            </p>

            <div className="overflow-x-auto mt-4">
              <table className="w-full border border-gray-400">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="border px-2 py-1">Positive</th>
                    <th className="border px-2 py-1">Meaning</th>
                    <th className="border px-2 py-1">Comparative</th>
                    <th className="border px-2 py-1">Superlative</th>
                  </tr>
                </thead>
                <tbody>
                  {ruleSixData.map((item, index) => (
                    <tr key={index}>
                      <td className="border px-2 py-1">{item.positive}</td>
                      <td className="border px-2 py-1">{item.meaning}</td>
                      <td className="border px-2 py-1">{item.comparative}</td>
                      <td className="border px-2 py-1">{item.superlative}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="">
             {/* Exercise */}
        <div className="border border-gray-400 p-4 mb-6">
          <h3 className="font-semibold">EXERCISE</h3>
          <p>Correct the spelling (বানান ঠিক কর):</p>

          <div className="grid grid-cols-3 gap-4 mt-3">
            <div>
              <p className="font-semibold">Positive</p>
              <p>happy</p>
              <p>easy</p>
              <p>sly</p>
              <p>ugly</p>
            </div>
            <div>
              <p className="font-semibold">Comparative</p>
              <p>happyer</p>
              <p>easyier</p>
              <p>slyer</p>
              <p>uglyer</p>
            </div>
            <div>
              <p className="font-semibold">Superlative</p>
              <p>happyest</p>
              <p>easyiest</p>
              <p>slyest</p>
              <p>uglyest</p>
            </div>
          </div>

          <p className="mt-3">Ans. RULE—6 দেখ।</p>
        </div>

        <p>
          কিন্তু y এর আগে যদি consonant না থেকে vowel (a, e, i, o, u) থাকে
          তাহলে y অপরিবর্তিত থাকে। যেমনঃ
        </p>
        <p className="my-2 font-mono">gay (রঙ্গিন, প্রফুল্ল)—gayer—gayest</p>

        <h3 className="font-semibold mt-6 mb-2">RULE—7.</h3>
        <p>
          কতকগুলো adjective-এর comparative ও superlative অনিয়মিতভাবে গঠিত হয়।
          যেমনঃ
        </p>

        {/* Table 1 */}
        <div className="overflow-x-auto my-4">
          <table className="w-full border border-gray-400">
            <thead>
              <tr className="bg-gray-200">
                <th className="border px-2 py-1">Positive</th>
                <th className="border px-2 py-1">Meaning</th>
                <th className="border px-2 py-1">Comparative</th>
                <th className="border px-2 py-1">Superlative</th>
              </tr>
            </thead>
            <tbody>
              {ruleSevenData1.map((item, index) => (
                <tr key={index}>
                  <td className="border px-2 py-1">{item.positive}</td>
                  <td className="border px-2 py-1">{item.meaning}</td>
                  <td className="border px-2 py-1">{item.comparative}</td>
                  <td className="border px-2 py-1">{item.superlative}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Table 2 */}
        <div className="overflow-x-auto my-4">
          <table className="w-full border border-gray-400">
            <thead>
              <tr className="bg-gray-200">
                <th className="border px-2 py-1">Positive</th>
                <th className="border px-2 py-1">Meaning</th>
                <th className="border px-2 py-1">Comparative</th>
                <th className="border px-2 py-1">Superlative</th>
              </tr>
            </thead>
            <tbody>
              {ruleSevenData2.map((item, index) => (
                <tr key={index}>
                  <td className="border px-2 py-1">{item.positive}</td>
                  <td className="border px-2 py-1">{item.meaning}</td>
                  <td className="border px-2 py-1">{item.comparative}</td>
                  <td className="border px-2 py-1">{item.superlative}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p>
          নিচের adjective গুলো কখনও comparative ও superlative-এ ব্যবহৃত হয়।
          positive-এ এগুলো adverb রূপে ব্যবহৃত হয়।
        </p>

        {/* Adverb Table */}
        <div className="overflow-x-auto my-4">
          <table className="w-full border border-gray-400">
            <thead>
              <tr className="bg-gray-200">
                <th className="border px-2 py-1">Positive-Adv.</th>
                <th className="border px-2 py-1">Meaning</th>
                <th className="border px-2 py-1">Com-Adj</th>
                <th className="border px-2 py-1">Super-Adj.</th>
              </tr>
            </thead>
            <tbody>
              {adverbTable.map((item, index) => (
                <tr key={index}>
                  <td className="border px-2 py-1">{item.positive}</td>
                  <td className="border px-2 py-1">{item.meaning}</td>
                  <td className="border px-2 py-1">{item.comparative}</td>
                  <td className="border px-2 py-1">{item.superlative}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-4">
          NOTE. I will go <strong>later</strong> (পরে)। <br />
          Rahim and Karim came. Rahim stayed but the <strong>latter</strong> (পরবর্তজন) went away.
        </p>

        <p className="mt-2 underline">
          NOTE, Older, elder, oldest, eldest
        </p>

        <p className="mt-6 text-xs">APTEL—11</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DegreeOfAdj;
