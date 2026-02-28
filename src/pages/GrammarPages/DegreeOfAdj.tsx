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
    {
      positive: "bad, evil, ill",
      meaning: "খারাপ, মন্দ, দুষ্ট",
      comparative: "worse",
      superlative: "worst",
    },
    {
      positive: "good, well",
      meaning: "ভাল",
      comparative: "better",
      superlative: "best",
    },
    {
      positive: "little",
      meaning: "কম, ছোট",
      comparative: "less",
      superlative: "least",
    },
    {
      positive: "much, many",
      meaning: "অনেক",
      comparative: "more",
      superlative: "most",
    },
    {
      positive: "fore",
      meaning: "অগ্রবর্তী",
      comparative: "former",
      superlative: "foremost, first",
    },
    {
      positive: "hind",
      meaning: "পশ্চাৎস্থিত",
      comparative: "hinder",
      superlative: "hindermost",
    },
  ];

  const ruleSevenData2 = [
    {
      positive: "late",
      meaning: "দেরি, বিলম্বিত",
      comparative: "later, latter",
      superlative: "latest, last",
    },
    {
      positive: "old",
      meaning: "বয়স্ক, পুরানো",
      comparative: "elder, older",
      superlative: "eldest, oldest",
    },
    {
      positive: "near",
      meaning: "নিকটবর্তী",
      comparative: "nearer",
      superlative: "nearest, next",
    },
    {
      positive: "far",
      meaning: "দূরবর্তী",
      comparative: "farther",
      superlative: "farthest",
    },
    {
      positive: "nigh",
      meaning: "নিকট",
      comparative: "nigher",
      superlative: "nighest, next",
    },
  ];

  const adverbTable = [
    {
      positive: "fore",
      meaning: "সম্মুখে, আগে",
      comparative: "further",
      superlative: "furthest (গতিসূচক)",
    },
    {
      positive: "far",
      meaning: "দূরবর্তী",
      comparative: "farther",
      superlative: "farthest",
    },
    {
      positive: "in",
      meaning: "ভিতরে",
      comparative: "inner",
      superlative: "inmost, innermost",
    },
    {
      positive: "out",
      meaning: "বাইরে",
      comparative: "outer",
      superlative: "outmost, outermost",
    },
    {
      positive: "up",
      meaning: "উপরে",
      comparative: "upper",
      superlative: "uppermost",
    },
  ];

  const comparisonData = [
    {
      positive: "beautiful",
      meaning: "সুন্দর",
      comparative: "more/less beautiful",
      superlative: "most/least beautiful",
    },
    {
      positive: "surprising",
      meaning: "বিস্ময়কর",
      comparative: "more/less surprising",
      superlative: "most/least surprising",
    },
    {
      positive: "famous",
      meaning: "বিখ্যাত",
      comparative: "more/less famous",
      superlative: "most/least famous",
    },
    // You can easily add more here later
    // {
    //   positive: 'interesting',
    //   meaning: 'আকর্ষণীয়',
    //   comparative: 'more/less interesting',
    //   superlative: 'most/least interesting',
    // },
  ];

  const comparisonData2 = [
    {
      positive: "useful",
      meaning: "উপকারী, প্রয়োজনীয়",
      comparative: "more/less useful",
      superlative: "most/least useful",
    },
    {
      positive: "painful",
      meaning: "বেদনাদায়ক",
      comparative: "more/less painful",
      superlative: "most/least painful",
    },
    // You can add more similar 2+ syllable adjectives here
  ];

  return (
    <div className="">
      <div className="py-20">
        <h1 className="text-center text-2xl font-bold mt-2">
          COMPARISON OF ADJECTIVE
        </h1>
      </div>

      <div className="min-h-screen bg-gray-100 flex justify-center items-start py-10">
        <div className="bg-white shadow-lg rounded-lg p-4 lg:p-8 max-w-3xl w-full text-gray-800 leading-relaxed">
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
            <div className="border border-gray-400 mt-5 p-3 mb-6">
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
            <p className="my-2 font-mono">
              gay (রঙ্গিন, প্রফুল্ল)—gayer—gayest
            </p>

            <h3 className="font-semibold mt-6 mb-2">RULE—7.</h3>
            <p>
              কতকগুলো adjective-এর comparative ও superlative অনিয়মিতভাবে গঠিত
              হয়। যেমনঃ
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
              Rahim and Karim came. Rahim stayed but the <strong>
                latter
              </strong>{" "}
              (পরবর্তজন) went away.
            </p>

            <p className="mt-2 underline">NOTE, Older, elder, oldest, eldest</p>

            <p className="mt-6 text-xs">APTEL—11</p>
          </div>

          <div className="">
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-indigo-700 mb-4">
                older – oldest
              </h2>
              <p className="text-gray-800 leading-relaxed mb-3">
                <span className="font-medium">older</span> ও{" "}
                <span className="font-medium">oldest</span> সাধারণ অর্থে ব্যবহৃত
                হয়।
              </p>
              <div className="bg-blue-50 p-5 rounded-lg border border-blue-200 mb-4">
                <p className="mb-2">
                  He is <strong>older</strong> (অধিকতর বয়স) than his brother.
                </p>
                <p>
                  Mr. Kalam is the <strong>oldest</strong> person in this
                  village.
                </p>
              </div>

              <p className="mb-2 font-medium">
                একই পরিবারের মধ্যে elder ও eldest ব্যবহৃত হয়।
              </p>
              <div className="bg-amber-50 p-5 rounded-lg border border-amber-200">
                <p className="mb-3">
                  I have two brothers; my <strong>elder</strong> (অধিকতর বড়)
                  brother is a student of class seven and my{" "}
                  <strong>eldest</strong> (সবচেয়ে বড়) brother is an M.A.
                </p>
                <p className="text-sm text-gray-600 italic">
                  NOTE: <strong>elder</strong>, <strong>eldest</strong> — mostly
                  family members-এর ক্ষেত্রে
                </p>
              </div>
            </section>

            {/* First, Foremost */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-indigo-700 mb-4">
                First, Foremost
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-50 p-5 rounded-lg border border-green-200">
                  <p className="font-medium mb-2">First</p>
                  <p>প্রথম ধাপ / ক্রমের প্রথম অংশ</p>
                  <p className="mt-3">
                    She is the <strong>first</strong> girl of class ten.
                  </p>
                </div>

                <div className="bg-purple-50 p-5 rounded-lg border border-purple-200">
                  <p className="font-medium mb-2">Foremost</p>
                  <p>সবচেয়ে গুরুত্বপূর্ণ / প্রধান</p>
                  <p className="mt-3">
                    This is your <strong>foremost</strong> duty.
                  </p>
                </div>
              </div>
            </section>

            {/* Next, Nearest, Further */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-indigo-700 mb-4">
                next – nearest – farther – further
              </h2>

              <div className="space-y-6">
                <div className="bg-gray-50 p-5 rounded-lg">
                  <p className="font-semibold">next</p>
                  <p className="text-gray-700">পরবর্তী (ক্রম অনুযায়ী)</p>
                  <p className="mt-2">
                    Go to the <strong>next</strong> door.
                  </p>
                </div>

                <div className="bg-gray-50 p-5 rounded-lg">
                  <p className="font-semibold">nearest</p>
                  <p className="text-gray-700">
                    সবচেয়ে কাছাকাছি (দূরত্বের বিচারে)
                  </p>
                  <p className="mt-2">
                    Go to the <strong>nearest</strong> market.
                  </p>
                </div>

                <div className="bg-gray-50 p-5 rounded-lg">
                  <p className="font-semibold">farther</p>
                  <p className="text-gray-700">
                    অধিকতর দূরত্ব (দূরত্বের ক্ষেত্রে)
                  </p>
                  <p className="mt-2">
                    Satkhira is <strong>farther</strong> from Jessore than
                    Khulna.
                  </p>
                </div>

                <div className="bg-gray-50 p-5 rounded-lg">
                  <p className="font-semibold">further</p>
                  <p className="text-gray-700">
                    আরও / অতিরিক্ত (আলোচনা, তথ্য ইত্যাদি)
                  </p>
                  <p className="mt-2">
                    No <strong>further</strong> discussion will be held on this
                    point.
                  </p>
                </div>
              </div>
            </section>

            {/* outer – utter */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-indigo-700 mb-4">
                outer – utter
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-orange-50 p-5 rounded-lg border border-orange-200">
                  <p className="font-medium mb-2">outer</p>
                  <p>বাইরের / বাহ্যিক</p>
                  <p className="mt-3">
                    Today we will travel along the <strong>outer</strong> region
                    of the island.
                  </p>
                </div>

                <div className="bg-red-50 p-5 rounded-lg border border-red-200">
                  <p className="font-medium mb-2">utter</p>
                  <p>পূর্ণ / সম্পূর্ণ / চরম</p>
                  <p className="mt-3">
                    It was an <strong>utter</strong> cruelty of the leader.
                  </p>
                </div>
              </div>
            </section>

            {/* less – fewer */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-indigo-700 mb-5">
                less – fewer
              </h2>

              <div className="bg-indigo-50 p-6 rounded-xl border border-indigo-200 mb-6">
                <p className="font-medium mb-3">
                  less → uncountable noun-এর ক্ষেত্রে
                </p>
                <p className="mb-4">
                  This mug contains <strong>less</strong> water than that.
                </p>

                <p className="font-medium mb-3">
                  fewer → countable noun-এর ক্ষেত্রে
                </p>
                <p className="mb-2">
                  No <strong>fewer</strong> than twenty boys were present there.
                </p>
                <p className="text-sm text-indigo-700 font-medium">
                  RULE: <strong>no fewer than</strong> → দুই-এর অধিক syllable
                  বিশিষ্ট সংখ্যার ক্ষেত্রে বেশি চলে
                </p>
              </div>

              {/* Dynamic table using .map() */}
              <div className="overflow-x-auto">
                <table className="min-w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-5 py-3 text-left font-semibold">
                        Positive
                      </th>
                      <th className="border border-gray-300 px-5 py-3 text-left font-semibold">
                        Meaning
                      </th>
                      <th className="border border-gray-300 px-5 py-3 text-left font-semibold">
                        Comparative / less ...
                      </th>
                      <th className="border border-gray-300 px-5 py-3 text-left font-semibold">
                        Superlative / least ...
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-800">
                    {comparisonData.map((item, index) => (
                      <tr
                        key={item.positive}
                        className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                      >
                        <td className="border border-gray-300 px-5 py-3 font-medium">
                          {item.positive}
                        </td>
                        <td className="border border-gray-300 px-5 py-3">
                          {item.meaning}
                        </td>
                        <td className="border border-gray-300 px-5 py-3">
                          {item.comparative}
                        </td>
                        <td className="border border-gray-300 px-5 py-3">
                          {item.superlative}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          </div>

          <div className="">
            {/* RULE 9 – Latin origin adjectives */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-indigo-700 mb-4">
                RULE—9: Latin শব্দ থেকে আসা কিছু Adjective
              </h2>

              <div className="bg-yellow-50 p-5 rounded-lg border border-yellow-200 mb-6">
                <p className="font-medium mb-3">
                  কিছু Adjective-এর শুধু comparative degree আছে — positive ও
                  superlative degree নেই।
                </p>
                <p>
                  এদের মধ্যে প্রধান:{" "}
                  <strong>exterior, interior, ulterior, major, minor</strong>
                </p>
              </div>

              <div className="overflow-x-auto mb-6">
                <table className="min-w-full border-collapse">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-5 py-3 text-left font-semibold">
                        Positive
                      </th>
                      <th className="border border-gray-300 px-5 py-3 text-left font-semibold">
                        Meaning
                      </th>
                      <th className="border border-gray-300 px-5 py-3 text-left font-semibold">
                        Comparative
                      </th>
                      <th className="border border-gray-300 px-5 py-3 text-left font-semibold">
                        Superlative
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-800">
                    {comparisonData2.map((item, index) => (
                      <tr
                        key={item.positive}
                        className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                      >
                        <td className="border border-gray-300 px-5 py-3 font-medium">
                          {item.positive}
                        </td>
                        <td className="border border-gray-300 px-5 py-3">
                          {item.meaning}
                        </td>
                        <td className="border border-gray-300 px-5 py-3">
                          {item.comparative}
                        </td>
                        <td className="border border-gray-300 px-5 py-3">
                          {item.superlative || "—"}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="space-y-4 bg-blue-50 p-5 rounded-lg border border-blue-200">
                <p>
                  The <strong>exterior</strong> (বাইরের) portion of the house is
                  worse than the <strong>interior</strong> (ভেতরের) portion.
                </p>
                <p>
                  He did it with some <strong>ulterior</strong> (দুরভিসন্ধি,
                  গোপন) motive.
                </p>
                <p>
                  The <strong>major</strong> (বড়) portion of the people are
                  illiterate.
                </p>
                <p>
                  Do not quarrel over such a <strong>minor</strong> (ছোট)
                  matter.
                </p>
              </div>

              <div className="mt-6 bg-purple-50 p-5 rounded-lg border border-purple-200">
                <p className="font-medium mb-3">
                  অন্যান্য একই ধরনের শব্দ (শুধু comparative ব্যবহার হয়):
                </p>
                <p className="mb-2">
                  superior, inferior, senior, junior, prior, ulterior, posterior
                </p>
                <div className="space-y-2 mt-4">
                  <p>
                    He is <strong>superior</strong> to me in rank.
                  </p>
                  <p>
                    She is <strong>senior</strong> to you by three years.
                  </p>
                  <p>
                    You are <strong>junior</strong> to me in age.
                  </p>
                  <p>We must give thought to this prior to that.</p>
                </div>
              </div>

              <div className="mt-6 bg-green-50 p-5 rounded-lg border border-green-200">
                <p className="font-medium">Preferable ব্যবহার:</p>
                <p className="mt-2">
                  Death is <strong>preferable</strong> to dishonour.
                </p>
                <p className="text-sm text-gray-600 mt-2 italic">
                  (অনেক ক্ষেত্রে than-এর পরে to বসে)
                </p>
              </div>
            </section>

            {/* RULE 10 – Special comparatives */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-indigo-700 mb-4">
                RULE—10
              </h2>

              <div className="bg-orange-50 p-6 rounded-xl border border-orange-200">
                <p className="font-medium mb-4">
                  inner, outer, latter, elder, hinder, upper, former, utter
                  ইত্যাদি শব্দগুলো ইতিমধ্যে comparative form-এ আছে।
                </p>
                <p className="mb-4">
                  এদের আগে more/less বসে না এবং পরে than বসে না (সাধারণত)।
                </p>

                <div className="space-y-3">
                  <p>
                    A horse is stronger than a tiger; but the{" "}
                    <strong>former</strong> (আগেরটি) is less ferocious than the{" "}
                    <strong>latter</strong> (পরেরটি).
                  </p>
                  <p>
                    They ran to the <strong>outer</strong> wall.
                  </p>
                </div>
              </div>
            </section>

            {/* EXERCISE */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-red-700 mb-5">
                EXERCISE: Correct the following.
              </h2>

              <div className="bg-red-50 p-6 rounded-xl border border-red-200 space-y-4">
                <ol className="list-decimal pl-6 space-y-3">
                  <li>
                    She is senior <del>than</del> <strong>to</strong> Anna.
                  </li>
                  <li>
                    Panna is junior <del>than</del> <strong>to</strong> Raba.
                  </li>
                  <li>
                    Raba is superior <del>than</del> <strong>to</strong> Rakeya
                    in intelligence.
                  </li>
                </ol>

                <p className="font-medium text-indigo-700 mt-4">
                  Ans: RULE—9 অনুসারে এদের পরে than নয়, to বসে।
                </p>
              </div>
            </section>

            {/* RULE 11 quick note */}
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-indigo-700 mb-3">
                RULE—11 (Quick Note)
              </h2>
              <div className="bg-gray-100 p-5 rounded-lg">
                <p>
                  সাধারণ comparative adjective-এর পরে <strong>than</strong> বসে।
                </p>
                <p className="mt-2">You are wiser than she.</p>
              </div>
            </section>
          </div>
          <div className="">
            {/* RULE—12: Superlative with the + in/of */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-indigo-700 mb-4">
                RULE—12
              </h2>

              <div className="bg-blue-50 p-6 rounded-xl border border-blue-200 mb-6">
                <p className="font-medium mb-4">
                  Superlative-এর আগে <strong>the</strong> বসে।
                </p>
                <p className="mb-4">
                  যাদের মধ্যে তুলনা করা হয়, তাদের নাম/গোষ্ঠী নির্দিষ্ট করতে{" "}
                  <strong>in / of</strong> ব্যবহার করা হয়।
                </p>

                <div className="space-y-4">
                  <div>
                    <p className="font-medium text-red-700">Incorrect:</p>
                    <p>She is best student in the class.</p>
                    <p>Among my friends he is eldest.</p>
                    <p>Of my friends he has won a first place.</p>
                  </div>

                  <div>
                    <p className="font-medium text-green-700">Correct:</p>
                    <p>
                      She is <strong>the best</strong> student{" "}
                      <strong>in</strong> the class.
                    </p>
                    <p>
                      Among my friends he is <strong>the eldest</strong>.
                    </p>
                    <p>
                      He has won <strong>the first</strong> place.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* RULE—13: No Double Comparative / Double Superlative */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-indigo-700 mb-4">
                RULE—13: Double Comparative & Double Superlative
              </h2>

              <div className="bg-purple-50 p-6 rounded-xl border border-purple-200">
                <p className="font-medium mb-4">
                  একই adjective-এর জন্য একসঙ্গে double comparative (more better)
                  বা double superlative (most tallest) ব্যবহার করা যায় না।
                </p>

                <div className="space-y-4 mt-4">
                  <div>
                    <p className="font-medium text-red-700">Incorrect:</p>
                    <p>I am more better today.</p>
                    <p>I am comparatively better today.</p>
                    <p>This tree is the most tallest of all in this jungle.</p>
                  </div>

                  <div>
                    <p className="font-medium text-green-700">Correct:</p>
                    <p>
                      I am <strong>better</strong> today.
                    </p>
                    <p>
                      Kobra is <strong>taller</strong> than Sogra.
                    </p>
                    <p>
                      This tree is <strong>the tallest</strong> of all in this
                      jungle.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* RULE—14: Superlative → Comparative with any other */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-indigo-700 mb-4">
                RULE—14
              </h2>

              <div className="bg-green-50 p-6 rounded-xl border border-green-200">
                <p className="font-medium mb-4">
                  Superlative-এর অর্থ যদি comparative-এ প্রকাশ করতে চাই, তাহলে{" "}
                  <strong>than any other</strong> /{" "}
                  <strong>than all other</strong> ব্যবহার করতে হয়।
                </p>

                <div className="space-y-4 mt-4">
                  <p>
                    Superlative: He is <strong>the best</strong> boy in the
                    class.
                  </p>
                  <p className="font-medium">Comparative রূপে:</p>
                  <p>
                    He is <strong>better than any other</strong> boy in the
                    class.
                  </p>
                  <p className="text-sm text-gray-600 italic">
                    অথবা → He is better than all other boys in the class.
                  </p>
                </div>
              </div>
            </section>

            {/* RULE—15: Two persons/things → more / the most */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-indigo-700 mb-5">
                RULE—15
              </h2>

              <div className="bg-orange-50 p-6 rounded-xl border border-orange-200 mb-6">
                <p className="font-medium mb-4">
                  দুইজন/দুইটির মধ্যে তুলনা করলে comparative degree ব্যবহার হয়।
                </p>
                <p className="mb-4">
                  দুইজন/দুইটির মধ্যে একজন/একটিকে সবচেয়ে বেশি বলতে superlative
                  ব্যবহার করা যায় — কিন্তু সাধারণত <strong>the more</strong>{" "}
                  ব্যবহারই ভালো।
                </p>

                <div className="space-y-4">
                  <div>
                    <p className="font-medium text-red-700">
                      Incorrect / Less preferred:
                    </p>
                    <p>She is the most beautiful of the two girls.</p>
                    <p>He is the tallest boy in the class. (দুজনের কথা বললে)</p>
                  </div>

                  <div>
                    <p className="font-medium text-green-700">
                      Correct / Preferred:
                    </p>
                    <p>
                      She is <strong>the more beautiful</strong> of the two
                      girls.
                    </p>
                    <p className="text-sm text-gray-600 italic">
                      NOTE: Comparative-এর আগে সাধারণত the বসে না। কিন্তু of the
                      two থাকলে the বসে।
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-5 rounded-lg border border-gray-200 mt-6">
                <p className="font-medium mb-3">Additional Examples:</p>
                <p>He is taller than any other boy in the class.</p>
                <p>
                  Two boys named Kalim and Salim came here — I know the{" "}
                  <strong>latter</strong>.
                </p>
                <p className="text-sm text-gray-600 mt-2">
                  (the former = আগেরটি, the latter = পরেরটি)
                </p>
              </div>
            </section>
          </div>

          <div className="">
            {/* RULE—16: Multiple adjectives in one sentence */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-indigo-700 mb-4">
                RULE—16
              </h2>

              <div className="bg-blue-50 p-6 rounded-xl border border-blue-200 mb-6">
                <p className="font-medium mb-4">
                  একই sentence-এ একই noun-কে qualify করার জন্য একাধিক adjective
                  ব্যবহৃত হলে তাদের মধ্যে comparison degree-এর ব্যবহার হয়।
                </p>
                <p className="mb-4">
                  যদি একাধিক adjective থাকে, তবে প্রত্যেকটির comparative বা
                  superlative form অনুসারে ব্যবহার করতে হবে।
                </p>

                <div className="space-y-4">
                  <div>
                    <p className="font-medium text-red-700">
                      Incorrect / Improper:
                    </p>
                    <p>Roni is intelligent and taller than Goni.</p>
                    <p>You are the wisest and beautiful of the three girls.</p>
                  </div>

                  <div>
                    <p className="font-medium text-green-700">Correct:</p>
                    <p>
                      Roni is <strong>more intelligent and taller</strong> than
                      Goni.
                    </p>
                    <p>
                      You are <strong>the wisest and most beautiful</strong> of
                      the three girls.
                    </p>
                    <p className="mt-2">
                      (যেখানে প্রয়োজন সেখানে more/most ব্যবহার করতে হবে — একই
                      degree-এ রাখা যায় না যদি form ভিন্ন হয়)
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* RULE—17: As...as structure */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-indigo-700 mb-4">
                RULE—17: As...as (সমান তুলনা)
              </h2>

              <div className="bg-green-50 p-6 rounded-xl border border-green-200 mb-6">
                <p className="font-medium mb-4">
                  দুই ব্যক্তি/বস্তুর মধ্যে সমান/সমতুল্য তুলনা (Affirmative) বা
                  অসমতা (Negative) বোঝাতে <strong>as...as</strong> ব্যবহার হয়।
                </p>

                <div className="space-y-4 mt-4">
                  <p className="font-medium">Structure:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>
                      Affirmative: Subject + be + as + Adjective + as + Object
                    </li>
                    <li>
                      Negative: Subject + be + not + so/as + Adjective + as +
                      Object
                    </li>
                  </ul>

                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <p className="font-medium">Examples:</p>
                    <p>
                      Affirmative: He is <strong>as strong as</strong> I. (সে
                      আমার মতো শক্তিশালী)
                    </p>
                    <p>
                      Negative: You are <strong>not so/as strong as</strong> he.
                    </p>
                  </div>

                  <p className="text-sm text-gray-600 italic mt-4">
                    NOTE: Affirmative-এ as...as ব্যবহার হয়। Negative-এ so...as
                    বা as...as উভয়ই চলে (কিন্তু so...as বেশি formal)।
                  </p>
                </div>
              </div>
            </section>

            {/* EXERCISE */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-red-700 mb-5">
                EXERCISE: Correct the following.
              </h2>

              <div className="bg-red-50 p-6 rounded-xl border border-red-200 space-y-5">
                <ol className="list-decimal pl-6 space-y-4">
                  <li>
                    He is richest man in the city.
                    <span className="block mt-1 text-green-700 font-medium">
                      → He is <strong>the richest</strong> man in the city.
                    </span>
                  </li>
                  <li>
                    Shuman is more stronger than Raman.
                    <span className="block mt-1 text-green-700 font-medium">
                      → Shuman is <strong>stronger</strong> than Raman. (no
                      double comparative)
                    </span>
                  </li>
                  <li>
                    He is bolder than all the boys.
                    <span className="block mt-1 text-green-700 font-medium">
                      → He is bolder than <strong>all other boys</strong> /{" "}
                      <strong>any other boy</strong>.
                    </span>
                  </li>
                  <li>
                    She is the fairest of the two girls.
                    <span className="block mt-1 text-green-700 font-medium">
                      → She is <strong>the fairer</strong> /{" "}
                      <strong>the more fair</strong> of the two girls.
                    </span>
                  </li>
                  <li>
                    Mali is more intelligent and wise than Dolli.
                    <span className="block mt-1 text-green-700 font-medium">
                      → Mali is <strong>more intelligent and wiser</strong> than
                      Dolli.
                    </span>
                  </li>
                </ol>

                <p className="font-medium text-indigo-700 mt-4">
                  Summary of Corrections: (1) the richest (2) remove more (3)
                  all other / any other (4) fairer / more fair (5) wiser
                </p>
              </div>
            </section>

            {/* RULE—18: The...the structure (Double Comparative) */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-indigo-700 mb-4">
                RULE—18: The + Comparative ... the + Comparative
              </h2>

              <div className="bg-purple-50 p-6 rounded-xl border border-purple-200">
                <p className="font-medium mb-4">
                  এক ক্ষেত্রে যত বেশি/কম হয়, অন্য ক্ষেত্রে তত বেশি/কম হয় — এই
                  ধরনের সম্পর্ক বোঝাতে{" "}
                  <strong>The + comparative, the + comparative</strong> ব্যবহার
                  হয়।
                </p>

                <div className="space-y-4 mt-4">
                  <p className="font-medium">Example:</p>
                  <p>
                    <strong>The more</strong> money he has,{" "}
                    <strong>the wilder</strong> he will be.
                  </p>
                  <p className="text-sm text-gray-600 italic">
                    (তার যত টাকা হবে সে তত হিংস্র হবে)
                  </p>

                  <p className="mt-4">
                    এটি proportional / cause-effect সম্পর্ক প্রকাশ করে।
                  </p>
                </div>
              </div>
            </section>
          </div>

          <div className="">
            {/* RULE—19: Comparative + and + Comparative */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-indigo-700 mb-4">
                RULE—19: Comparative + and + Comparative
              </h2>

              <div className="bg-blue-50 p-6 rounded-xl border border-blue-200 mb-6">
                <p className="font-medium mb-4">
                  ক্রমে ক্রমে বৃদ্ধি বা হ্রাস বোঝাতে একই adjective-এর
                  comparative form দুবার ব্যবহার করা হয় —{" "}
                  <strong>comparative + and + comparative</strong>
                </p>

                <div className="space-y-4">
                  <p>
                    The <strong>wiser</strong> you are, the{" "}
                    <strong>happier</strong> you will be.
                  </p>
                  <p>
                    Day by day he is getting <strong>older and older</strong>.
                  </p>
                  <p>
                    As days were passing by, she was becoming{" "}
                    <strong>more and more friendly</strong> with us.
                  </p>
                </div>
              </div>
            </section>

            {/* RULE—20: Possessive case in comparison */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-indigo-700 mb-4">
                RULE—20: Comparison of two nouns – Possessive case
              </h2>

              <div className="bg-green-50 p-6 rounded-xl border border-green-200">
                <p className="font-medium mb-4">
                  তুলনার সময় দুই noun-এর প্রথমটির possessive case ('s) ব্যবহার
                  করে দ্বিতীয়টির সাথে তুলনা করা হয়।
                </p>

                <div className="space-y-4 mt-4">
                  <div>
                    <p className="font-medium text-red-700">Incorrect:</p>
                    <p>Rahim house is better than Karim.</p>
                    <p>The climate of Dhaka is better than Khulna.</p>
                  </div>

                  <div>
                    <p className="font-medium text-green-700">Correct:</p>
                    <p>
                      Rahim's house is better than <strong>Karim's</strong>.
                    </p>
                    <p>
                      The climate of Dhaka is better than{" "}
                      <strong>that of Khulna</strong>.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* RULE—21: Intensifiers with adjectives */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-indigo-700 mb-4">
                RULE—21: very + Positive Adj. / much + Comparative Adj.
              </h2>

              <div className="bg-purple-50 p-6 rounded-xl border border-purple-200">
                <p className="font-medium mb-4">
                  Positive degree-এর সাথে <strong>very</strong> বসে। Comparative
                  degree-এর সাথে <strong>much</strong> বসে।
                </p>

                <div className="space-y-4 mt-4">
                  <div>
                    <p className="font-medium text-red-700">Incorrect:</p>
                    <p>I am much happy now.</p>
                    <p>I am very better today.</p>
                  </div>

                  <div>
                    <p className="font-medium text-green-700">Correct:</p>
                    <p>
                      I am <strong>very happy</strong> now.
                    </p>
                    <p>
                      I am <strong>much better</strong> today.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* RULE—22: Verb comparison – gerund / infinitive */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-indigo-700 mb-4">
                RULE—22: Comparison involving Verbs
              </h2>

              <div className="bg-orange-50 p-6 rounded-xl border border-orange-200 mb-6">
                <p className="font-medium mb-4">
                  Verb-এর তুলনা করার সময় একই রূপ (gerund বা infinitive) ব্যবহার
                  করতে হয়।
                </p>

                <div className="space-y-4">
                  <div>
                    <p className="font-medium text-red-700">Incorrect:</p>
                    <p>Going by bus is easier than to go by rickshaw.</p>
                    <p>It is better to go than staying.</p>
                  </div>

                  <div>
                    <p className="font-medium text-green-700">Correct:</p>
                    <p>
                      Going by bus is easier than <strong>going</strong> by
                      rickshaw.
                    </p>
                    <p>
                      It is better <strong>to go</strong> than{" "}
                      <strong>to stay</strong>.
                    </p>
                  </div>
                </div>

                <p className="mt-4 italic text-gray-600">
                  NOTE: Than-এর পরে to + verb বা gerund — উভয়ই চলে, কিন্তু একই
                  রূপ রাখতে হবে।
                </p>
              </div>
            </section>

            {/* RULE—23: very + present participle / much + past participle */}
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-indigo-700 mb-5">
                RULE—23: very + Present Participle / much + Past Participle
              </h2>

              <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-200">
                <p className="font-medium mb-4">
                  Present participle (-ing) এর সাথে <strong>very</strong> বসে।
                  Past participle (-ed) এর সাথে <strong>much</strong> বসে।
                </p>

                <div className="space-y-4 mt-4">
                  <div>
                    <p className="font-medium text-red-700">Incorrect:</p>
                    <p>It is much interesting.</p>
                    <p>I was very interested.</p>
                  </div>

                  <div>
                    <p className="font-medium text-green-700">Correct:</p>
                    <p>
                      It is <strong>very interesting</strong>.
                    </p>
                    <p>
                      I was <strong>much interested</strong>.
                    </p>
                  </div>
                </div>

                <p className="mt-4 text-sm text-gray-600 italic">
                  (very + present participle → active sense / much + past
                  participle → passive sense)
                </p>
              </div>
            </section>
          </div>
          <div className="">
            {/* RULE—24: more + comparative when two qualities compared */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-indigo-700 mb-4">
                RULE—24
              </h2>

              <div className="bg-blue-50 p-6 rounded-xl border border-blue-200 mb-6">
                <p className="font-medium mb-4">
                  যদি একই ব্যক্তি/বস্তুর দুটি গুণের (qualities) মধ্যে তুলনা করা
                  হয়, তাহলে দ্বিতীয় adjective-এর আগে <strong>more</strong>{" "}
                  ব্যবহার করা হয় — সরাসরি comparative form ব্যবহার করা যায় না।
                </p>

                <div className="space-y-4 mt-4">
                  <div>
                    <p className="font-medium text-red-700">Incorrect:</p>
                    <p>He is stronger than bold.</p>
                    <p>This rice is cheaper than good.</p>
                  </div>

                  <div>
                    <p className="font-medium text-green-700">Correct:</p>
                    <p>
                      He is <strong>more strong than bold</strong>. (সে সাহসী
                      হওয়ার চেয়ে শক্তিশালী)
                    </p>
                    <p>
                      This rice is <strong>more cheap than good</strong>. (এই
                      চাল সুস্বাদু হওয়ার চেয়ে সস্তা)
                    </p>
                  </div>
                </div>

                <p className="mt-4 text-sm text-gray-600 italic">
                  Explanation: এখানে একই subject-এর দুটি ভিন্ন adjective দিয়ে
                  তুলনা হচ্ছে, তাই more ব্যবহার হয়।
                </p>
              </div>
            </section>

            {/* RULE—25: as...as with comparative */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-indigo-700 mb-4">
                RULE—25
              </h2>

              <div className="bg-green-50 p-6 rounded-xl border border-green-200">
                <p className="font-medium mb-4">
                  <strong>as...as</strong> এর পরে comparative degree বসে না। যদি
                  "বা তার চেয়ে বেশি" বোঝাতে চাই, তাহলে{" "}
                  <strong>if not bolder</strong> /{" "}
                  <strong>or even bolder</strong> ইত্যাদি ব্যবহার করা যায়।
                </p>

                <div className="space-y-4 mt-4">
                  <div>
                    <p className="font-medium text-red-700">Incorrect:</p>
                    <p>He is as bold or bolder than you.</p>
                  </div>

                  <div>
                    <p className="font-medium text-green-700">Correct:</p>
                    <p>
                      He is <strong>as bold as</strong> you,{" "}
                      <strong>if not bolder</strong>.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* RULE—26: prefer + gerund/infinitive */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-indigo-700 mb-4">
                RULE—26: Prefer
              </h2>

              <div className="bg-purple-50 p-6 rounded-xl border border-purple-200">
                <p className="font-medium mb-4">
                  <strong>prefer</strong> এর পরে সাধারণত to + infinitive ব্যবহার
                  হয়। তুলনা করলে দুটি infinitive বা দুটি gerund ব্যবহার করতে
                  হবে।
                </p>

                <div className="space-y-4 mt-4">
                  <div>
                    <p className="font-medium text-red-700">Incorrect:</p>
                    <p>I prefer to read than to play.</p>
                  </div>

                  <div>
                    <p className="font-medium text-green-700">Correct:</p>
                    <p>
                      I prefer <strong>reading</strong> to{" "}
                      <strong>playing</strong>.
                    </p>
                    <p className="mt-2">or</p>
                    <p>
                      I prefer <strong>to read</strong> than{" "}
                      <strong>to play</strong>.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* RULE—27: Absolute adjectives – no most */}
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-indigo-700 mb-4">
                RULE—27: Absolute / Uncomparable Adjectives
              </h2>

              <div className="bg-orange-50 p-6 rounded-xl border border-orange-200 mb-6">
                <p className="font-medium mb-4">
                  কিছু adjective যেমন: supreme, unique, universal, complete,
                  false, perfect ইত্যাদি — এদের superlative degree-এ{" "}
                  <strong>most</strong> ব্যবহার করা যায় না কারণ এরা ইতিমধ্যেই
                  absolute অর্থ বহন করে।
                </p>

                <div className="space-y-4">
                  <div>
                    <p className="font-medium text-red-700">Incorrect:</p>
                    <p>It is the most unique opportunity.</p>
                    <p>He has the most supreme power.</p>
                  </div>

                  <div>
                    <p className="font-medium text-green-700">Correct:</p>
                    <p>
                      It is a <strong>unique</strong> opportunity.
                    </p>
                    <p>
                      He has the <strong>supreme</strong> power.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* RULE—28: else / alternate */}
<section className="mb-12">
  <h2 className="text-2xl font-semibold text-indigo-700 mb-5">RULE—28: else ও alternate</h2>

  <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-200">
    <p className="font-medium mb-4">
      <strong>else</strong> ও <strong>alternate</strong> (বিকল্প) word দিয়ে comparative adjective-এর পরে <strong>than</strong> বসে।
    </p>

    <div className="space-y-4 mt-4">
      <div>
        <p className="font-medium text-red-700">Incorrect:</p>
        <p>Nobody else but Rahim can do it.</p>
        <p>I can do nothing else but go there.</p>
      </div>

      <div>
        <p className="font-medium text-green-700">Correct:</p>
        <p><strong>Nobody else than Rahim</strong> can do it.</p>
        <p>I can do <strong>nothing else than go</strong> there.</p>
      </div>
    </div>

    <p className="mt-4 text-sm text-gray-600 italic">
      (এই দুটি word এর সাথে than বসে)
    </p>
  </div>
</section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DegreeOfAdj;
