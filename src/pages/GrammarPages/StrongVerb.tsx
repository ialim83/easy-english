const StrongVerb = () => {

  const verb1 = [
  {
    "base": "arise",
    "bengali": "উঠা",
    "past": "arose",
    "participle": "arisen"
  },
  {
    "base": "awake",
    "bengali": "জাগানো",
    "past": "awoke",
    "participle": "awoken"
  },
  {
    "base": "am/\nis/are",
    "bengali": "হওয়া/থাকা",
    "past": "was/\nwere",
    "participle": "been"
  },
  {
    "base": "beat",
    "bengali": "পেটানো",
    "past": "beat",
    "participle": "beaten"
  },
  {
    "base": "become",
    "bengali": "হওয়া",
    "past": "became",
    "participle": "become"
  },
  {
    "base": "bear",
    "bengali": "জন্ম দেওয়া",
    "past": "bore",
    "participle": "born/\nborne"
  },
  {
    "base": "begin",
    "bengali": "শুরু করা",
    "past": "began",
    "participle": "begun"
  },
  {
    "base": "bid",
    "bengali": "নির্দেশ দেওয়া",
    "past": "bade/\nbid",
    "participle": "bidden"
  },
  {
    "base": "bite",
    "bengali": "কামড়ানো",
    "past": "bit",
    "participle": "bitten"
  },
  {
    "base": "blow",
    "bengali": "প্রবাহিত হওয়া",
    "past": "blew",
    "participle": "blown"
  },
  {
    "base": "break",
    "bengali": "ভাঙা",
    "past": "broke",
    "participle": "broken"
  },
  {
    "base": "bring",
    "bengali": "নিয়ে আসা",
    "past": "brought",
    "participle": "brought"
  },
  // {
  //   "base": "broadcast",
  //   "bengali": "প্রচার করা",
  //   "past": "broadcast",
  //   "participle": "broadcast"
  // },
  {
    "base": "buy",
    "bengali": "ক্রয় করা",
    "past": "bought",
    "participle": "bought"
  },
  {
    "base": "catch",
    "bengali": "ধরা",
    "past": "caught",
    "participle": "caught"
  },
  {
    "base": "choose",
    "bengali": "বাছাই করা",
    "past": "chose",
    "participle": "chosen"
  },
  {
    "base": "come",
    "bengali": "আসা",
    "past": "came",
    "participle": "come"
  },
  {
    "base": "dig",
    "bengali": "খোঁড়া",
    "past": "dug",
    "participle": "dug"
  },
  {
    "base": "do",
    "bengali": "করা",
    "past": "did",
    "participle": "done"
  },
  {
    "base": "draw",
    "bengali": "আঁকা",
    "past": "drew",
    "participle": "drawn"
  },
  {
    "base": "drink",
    "bengali": "পান করা",
    "past": "drank",
    "participle": "drunk"
  },
  {
    "base": "drive",
    "bengali": "চালানো",
    "past": "drove",
    "participle": "driven"
  },
  {
    "base": "eat",
    "bengali": "খাওয়া",
    "past": "ate",
    "participle": "eaten"
  },
  {
    "base": "fall",
    "bengali": "পতন হওয়া",
    "past": "fell",
    "participle": "fallen"
  },
  {
    "base": "feed",
    "bengali": "খাওয়ানো",
    "past": "fed",
    "participle": "fed"
  },
  {
    "base": "feel",
    "bengali": "অনুভব করা",
    "past": "felt",
    "participle": "felt"
  },
  {
    "base": "fight",
    "bengali": "যুদ্ধ করা",
    "past": "fought",
    "participle": "fought"
  },
  {
    "base": "find",
    "bengali": "পাওয়া",
    "past": "found",
    "participle": "found"
  },
  {
    "base": "flee",
    "bengali": "পালানো",
    "past": "fled",
    "participle": "fled"
  },
  {
    "base": "fly",
    "bengali": "উড়া",
    "past": "flew",
    "participle": "flown"
  },
  // {
  //   "base": "forbid",
  //   "bengali": "নিষেধ করা",
  //   "past": "forbade",
  //   "participle": "forbidden"
  // },
  {
    "base": "forget",
    "bengali": "ভুলে যাওয়া",
    "past": "forgot",
    "participle": "forgotten"
  },
  // {
  //   "base": "forgive",
  //   "bengali": "মাফ করা",
  //   "past": "forgave",
  //   "participle": "forgiven"
  // },
  {
    "base": "freeze",
    "bengali": "জমা",
    "past": "froze",
    "participle": "frozen"
  },
  {
    "base": "give",
    "bengali": "দেওয়া",
    "past": "gave",
    "participle": "given"
  },
  {
    "base": "get",
    "bengali": "পাওয়া/ হওয়া",
    "past": "got",
    "participle": "got/\ngotten"
  },
  {
    "base": "go",
    "bengali": "যাওয়া",
    "past": "went",
    "participle": "gone"
  },
  {
    "base": "grow",
    "bengali": "বড় হওয়া",
    "past": "grew",
    "participle": "grown"
  },
  {
    "base": "have/has",
    "bengali": "থাকা",
    "past": "had",
    "participle": "had"
  },
  {
    "base": "hang",
    "bengali": "ফাসি দেওয়া",
    "past": "hanged",
    "participle": "hanged"
  },
  {
    "base": "hang",
    "bengali": "ঝুলানো",
    "past": "hung",
    "participle": "hung"
  },
  {
    "base": "hide",
    "bengali": "লুকানো",
    "past": "hid",
    "participle": "hidden"
  },
  {
    "base": "hold",
    "bengali": "ধরা",
    "past": "held",
    "participle": "held"
  },
  {
    "base": "keep",
    "bengali": "রাখা",
    "past": "kept",
    "participle": "kept"
  },
  {
    "base": "kneel",
    "bengali": "হামাগুড়ি দেওয়া",
    "past": "knelt",
    "participle": "knelt"
  },
  {
    "base": "know",
    "bengali": "জানা",
    "past": "knew",
    "participle": "known"
  },
  {
    "base": "lay",
    "bengali": "রাখা",
    "past": "laid",
    "participle": "laid"
  },
  {
    "base": "lead",
    "bengali": "নেতৃত্ব দেওয়া",
    "past": "led",
    "participle": "led"
  },
  {
    "base": "leave",
    "bengali": "ত্যাগ করা",
    "past": "left",
    "participle": "left"
  },
  {
    "base": "lie",
    "bengali": "শুয়ে থাকা",
    "past": "lay",
    "participle": "lain"
  },
  {
    "base": "lose",
    "bengali": "হারানো",
    "past": "lost",
    "participle": "lost"
  },
  {
    "base": "meet",
    "bengali": "মিলিত হওয়া",
    "past": "met",
    "participle": "met"
  },
  // {
  //   "base": "mistake",
  //   "bengali": "ভুল করা",
  //   "past": "mistook",
  //   "participle": "mistaken"
  // },
  {
    "base": "pay",
    "bengali": "দেওয়া",
    "past": "paid",
    "participle": "paid"
  },
  {
    "base": "ride",
    "bengali": "চালানো",
    "past": "rode",
    "participle": "ridden"
  },
  {
    "base": "rise",
    "bengali": "উঠা",
    "past": "rose",
    "participle": "risen"
  },
  {
    "base": "run",
    "bengali": "দৌড়ানো",
    "past": "ran",
    "participle": "run"
  },
  {
    "base": "say",
    "bengali": "বলা",
    "past": "said",
    "participle": "said"
  },
  {
    "base": "see",
    "bengali": "দেখা",
    "past": "saw",
    "participle": "seen"
  },
  {
    "base": "seek",
    "bengali": "খোঁজা",
    "past": "sought",
    "participle": "sought"
  },
  {
    "base": "sell",
    "bengali": "বিক্রি করা",
    "past": "sold",
    "participle": "sold"
  },
  {
    "base": "sew",
    "bengali": "সেলাই করা",
    "past": "sewed",
    "participle": "sewn/\nsewed"
  },
  {
    "base": "shake",
    "bengali": "ঝাকানো",
    "past": "shook",
    "participle": "shaken"
  },
  {
    "base": "shine",
    "bengali": "কিরন দেওয়া",
    "past": "shone",
    "participle": "shone"
  },
  {
    "base": "shoot",
    "bengali": "গুলি করা",
    "past": "shot",
    "participle": "shot"
  },
  {
    "base": "show",
    "bengali": "দেখানো",
    "past": "showed",
    "participle": "shown/\nshowed"
  },
  {
    "base": "shrink",
    "bengali": "সঙ্কুচিত হওয়া",
    "past": "shrank",
    "participle": "shrunk"
  },
  {
    "base": "strike",
    "bengali": "প্রহার করা",
    "past": "struck",
    "participle": "struck"
  },
  {
    "base": "swear",
    "bengali": "শপথ করা",
    "past": "swore",
    "participle": "sworn"
  },
  {
    "base": "swim",
    "bengali": "সাঁতার কাটা",
    "past": "swam",
    "participle": "swum"
  },
  {
    "base": "sing",
    "bengali": "গাওয়া",
    "past": "sang",
    "participle": "sung"
  },
  {
    "base": "sink",
    "bengali": "ডুবে যাওয়া",
    "past": "sank",
    "participle": "sunk"
  },
  {
    "base": "sit",
    "bengali": "বসা",
    "past": "sat",
    "participle": "sat"
  },
  {
    "base": "sleep",
    "bengali": "ঘুমানো",
    "past": "slept",
    "participle": "slept"
  },
  {
    "base": "slay",
    "bengali": "হত্যা করা",
    "past": "slew",
    "participle": "slain"
  },
  {
    "base": "speak",
    "bengali": "কথা বলা",
    "past": "spoke",
    "participle": "spoken"
  },
  {
    "base": "spit",
    "bengali": "থুথু ফেলা",
    "past": "spat",
    "participle": "spat"
  },
  {
    "base": "spring",
    "bengali": "লাফানো",
    "past": "sprang",
    "participle": "sprung"
  },
  {
    "base": "stand",
    "bengali": "দাঁড়ানো",
    "past": "stood",
    "participle": "stood"
  },
  {
    "base": "steal",
    "bengali": "চুরি করা",
    "past": "stole",
    "participle": "stolen"
  },
  {
    "base": "stick",
    "bengali": "লেগে থাকা",
    "past": "stuck",
    "participle": "stuck"
  },
  {
    "base": "sting",
    "bengali": "হুল ফোটানো",
    "past": "stung",
    "participle": "stung"
  },
  {
    "base": "stink",
    "bengali": "পঁচা গন্ধ হওয়া",
    "past": "stank",
    "participle": "stunk"
  },
  {
    "base": "swing",
    "bengali": "দোলানো",
    "past": "swung",
    "participle": "swung"
  },
  {
    "base": "take",
    "bengali": "নেওয়া",
    "past": "took",
    "participle": "taken"
  },
  {
    "base": "teach",
    "bengali": "শেখানো",
    "past": "taught",
    "participle": "taught"
  },
  {
    "base": "tear",
    "bengali": "ছিঁড়া",
    "past": "tore",
    "participle": "torn"
  },
  {
    "base": "tell",
    "bengali": "বলা",
    "past": "told",
    "participle": "told"
  },
  {
    "base": "think",
    "bengali": "ভাবা",
    "past": "thought",
    "participle": "thought"
  },
  {
    "base": "throw",
    "bengali": "নিক্ষেপ করা",
    "past": "threw",
    "participle": "thrown"
  },
  // {
  //   "base": "understand",
  //   "bengali": "বুঝতে পার",
  //   "past": "understood",
  //   "participle": "understood"
  // },
  {
    "base": "wake",
    "bengali": "জাগ্রত হওয়া",
    "past": "woke",
    "participle": "woken"
  },
  {
    "base": "wear",
    "bengali": "পরিধান করা",
    "past": "wore",
    "participle": "worn"
  },
  {
    "base": "weave",
    "bengali": "বোনা",
    "past": "wove",
    "participle": "woven"
  },
  {
    "base": "weep",
    "bengali": "ক্রন্দন করা",
    "past": "wept",
    "participle": "wept"
  },
  {
    "base": "win",
    "bengali": "জয় করা",
    "past": "won",
    "participle": "won"
  },
  {
    "base": "write",
    "bengali": "লিখা",
    "past": "wrote",
    "participle": "written"
  }
];

  const strongVerbsData = [
    {
      pattern: "i → a → u (The 'Sing' Pattern)",
      verbs: [
        {
          base: "begin",
          bengali: "শুরু করা",
          past: "began",
          participle: "begun",
        },
        {
          base: "drink",
          bengali: "পান করা",
          past: "drank",
          participle: "drunk",
        },
        {
          base: "ring",
          bengali: "ঘণ্টা বাজানো",
          past: "rang",
          participle: "rung",
        },
        {
          base: "shrink",
          bengali: "সংকুচিত হওয়া",
          past: "shrank",
          participle: "shrunked",
        },
        {
          base: "sing",
          bengali: "গান গাওয়া",
          past: "sang",
          participle: "sung",
        },
        {
          base: "sink",
          bengali: "ডুবে যাওয়া",
          past: "sank",
          participle: "sunk",
        },
        {
          base: "stink",
          bengali: "দুর্গন্ধ ছড়ানো",
          past: "stank",
          participle: "stunk",
        },
        {
          base: "swim",
          bengali: "সাঁতার কাটা",
          past: "swam",
          participle: "swum",
        },
      ],
    },
    {
      pattern: "i → o → o-en (The 'Drive' Pattern)",
      verbs: [
        {
          base: "drive",
          bengali: "চালানো",
          past: "drove",
          participle: "driven",
        },
        {
          base: "arise",
          bengali: "জেগে ওঠা / ঘটা",
          past: "arose",
          participle: "arisen",
        },
        {
          base: "ride",
          bengali: "আরোহণ করা",
          past: "rode",
          participle: "ridden",
        },
        {
          base: "rise",
          bengali: "ওঠা / উদিত হওয়া",
          past: "rose",
          participle: "risen",
        },
        {
          base: "smite",
          bengali: "আঘাত করা",
          past: "smote",
          participle: "smitten",
        },
        {
          base: "stride",
          bengali: "লম্বা পদক্ষেপে হাঁটা",
          past: "strode",
          participle: "stridden",
        },
        {
          base: "strive",
          bengali: "প্রচেষ্টা করা",
          past: "strove",
          participle: "striven",
        },
        {
          base: "write",
          bengali: "লেখা",
          past: "wrote",
          participle: "written",
        },
      ],
    },
    {
      pattern: "ow/ey → ew → own (The 'Blow' Pattern)",
      verbs: [
        {
          base: "blow",
          bengali: "বাতাস বওয়া / ফুঁ দেওয়া",
          past: "blew",
          participle: "blown",
        },
        { base: "fly", bengali: "ওড়া", past: "flew", participle: "flown" },
        {
          base: "grow",
          bengali: "জন্মানো / বৃদ্ধি পাওয়া",
          past: "grew",
          participle: "grown",
        },
        {
          base: "know",
          bengali: "জানা / চেনা",
          past: "knew",
          participle: "known",
        },
        {
          base: "throw",
          bengali: "নিক্ষেপ করা / ছুঁড়ে মারা",
          past: "threw",
          participle: "thrown",
        },
      ],
    },
    {
      pattern: "ea/a → o → o-en (The 'Break' Pattern)",
      verbs: [
        { base: "break", bengali: "ভাঙা", past: "broke", participle: "broken" },
        {
          base: "choose",
          bengali: "পছন্দ করা / নির্বাচন করা",
          past: "chose",
          participle: "chosen",
        },
        {
          base: "freeze",
          bengali: "জমে বরফ হওয়া",
          past: "froze",
          participle: "frozen",
        },
        {
          base: "speak",
          bengali: "কথা বলা",
          past: "spoke",
          participle: "spoken",
        },
        {
          base: "steal",
          bengali: "চুরি করা",
          past: "stole",
          participle: "stolen",
        },
        {
          base: "swear",
          font: "bold",
          bengali: "শপথ করা",
          past: "swore",
          participle: "sworn",
        },
        { base: "tear", bengali: "ছেঁড়া", past: "tore", participle: "torn" },
        {
          base: "wake",
          bengali: "জেগে ওঠা",
          past: "woke",
          participle: "woken",
        },
        {
          base: "wear",
          bengali: "পরিধান করা",
          past: "wore",
          participle: "worn",
        },
        {
          base: "weave",
          bengali: "বোনা (কাপড়)",
          past: "wove",
          participle: "woven",
        },
      ],
    },
    {
      pattern: "e/a → o → o (The 'Get' Pattern)",
      verbs: [
        {
          base: "get",
          bengali: "পাওয়া",
          past: "got",
          participle: "got / gotten",
        },
        {
          base: "forget",
          bengali: "ভুলে যাওয়া",
          past: "forgot",
          participle: "forgotten",
        },
        {
          base: "tread",
          bengali: "পদদলিত করা / হাঁটা",
          past: "trod",
          participle: "trodden",
        },
      ],
    },
    {
      pattern: "oo/ee → o → o (The 'Shoot' Pattern)",
      verbs: [
        {
          base: "shoot",
          bengali: "গুলি করা",
          past: "shot",
          participle: "shot",
        },
        {
          base: "bleed",
          bengali: "রক্তক্ষরণ হওয়া",
          past: "bled",
          participle: "bled",
        },
        { base: "feed", bengali: "খাওয়ানো", past: "fed", participle: "fed" },
        {
          base: "meet",
          bengali: "সাক্ষাৎ করা",
          past: "met",
          participle: "met",
        },
        {
          base: "lead",
          bengali: "পরিচালনা করা / নেতৃত্ব দেওয়া",
          past: "led",
          participle: "led",
        },
      ],
    },
    {
      pattern: "a → oo → a-en (The 'Take' Pattern)",
      verbs: [
        { base: "take", bengali: "নেওয়া", past: "took", participle: "taken" },
        {
          base: "forsake",
          bengali: "পরিত্যাগ করা",
          past: "forsook",
          participle: "forsaken",
        },
        {
          base: "shake",
          bengali: "ঝাঁকানো / কাঁপা",
          past: "shook",
          participle: "shaken",
        },
      ],
    },
    {
      pattern: "Miscellaneous Vowel Shifts (Irregular Strong Verbs)",
      verbs: [
        { base: "bite", bengali: "কামড়ানো", past: "bit", participle: "bitten" },
        { base: "come", bengali: "আসা", past: "came", participle: "come" },
        { base: "eat", bengali: "খাওয়া", past: "ate", participle: "eaten" },
        {
          base: "fall",
          bengali: "পড়ে যাওয়া",
          past: "fell",
          participle: "fallen",
        },
        {
          base: "forbid",
          bengali: "নিষেধ করা",
          past: "forbade",
          participle: "forbidden",
        },
        { base: "give", bengali: "দেওয়া", past: "gave", participle: "given" },
        { base: "hide", bengali: "লুকানো", past: "hid", participle: "hidden" },
        { base: "run", bengali: "দৌড়ানো", past: "ran", participle: "run" },
        { base: "see", bengali: "দেখা", past: "saw", participle: "seen" },
        {
          base: "slay",
          bengali: "হত্যা করা",
          past: "slew",
          participle: "slain",
        },
        {
          base: "spit",
          bengali: "থুতু ফেলা",
          past: "spat",
          participle: "spat",
        },
        {
          base: "strike",
          bengali: "আঘাত করা / ধর্মঘট করা",
          past: "struck",
          participle: "struck / stricken",
        },
      ],
    },
  ];


  // Global counter track across all pattern categories
  let absoluteSerialNumber = 1;

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

            <div className="space-y-8">
              {/* {strongVerbsData.map((group, groupIndex) => ( */}
                <div
                  // key={groupIndex}
                  className="overflow-hidden border border-slate-200 rounded-lg shadow-sm"
                >
                  <div className="bg-slate-100 px-2 py-3 border-b border-slate-200">
                    <p className="text-md font-bold text-slate-700 tracking-wide">
                      Pattern:{" "}
                      <span className="text-indigo-600">Alphabetic pattern</span>
                    </p>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-slate-200 text-left text-sm">
                      <thead className="bg-slate-50 uppercase text-xs font-semibold text-slate-500 tracking-wider">
                        <tr>
                          <th
                            scope="col"
                            className="px-2 py-3 w-16 text-center"
                          >
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
                        {verb1.map((verb, vIndex) => {
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
            <table border={1} className="w-full table-auto">
              <tr>
                <th>Serial</th>
                <th>Present</th>
                <th>Past</th>
                <th>Participle</th>
              </tr>
              <tr>
                <td>1</td>
                <td>Bet(বাজি ধরা)</td>
                <td>bet</td>
                <td>bet</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Burst(ফেটে যাওয়া)</td>
                <td>burst</td>
                <td>burst</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Cut(কাটা)</td>
                <td>cut</td>
                <td>cut</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Cast(নিক্ষেপ করা)</td>
                <td>cast</td>
                <td>cast</td>
              </tr>
              <tr>
                <td>5</td>
                <td>Cost (খরচ করা)</td>
                <td>cost</td>
                <td>cost</td>
              </tr>

              <tr>
                <td>6</td>
                <td>Hit (আঘাত করা)</td>
                <td>hit</td>
                <td>hit</td>
              </tr>
              <tr>
                <td>7</td>
                <td>Hurt (আঘাত করা)</td>
                <td>hurt</td>
                <td>hurt</td>
              </tr>
              <tr>
                <td>8</td>
                <td>Let (দেওয়া)</td>
                <td>let</td>
                <td>let</td>
              </tr>
              <tr>
                <td>9</td>
                <td>Put (রাখা)</td>
                <td>put</td>
                <td>put</td>
              </tr>

              <tr>
                <td>10</td>
                <td>Read (পড়া)</td>
                <td>read</td>
                <td>read</td>
              </tr>
              <tr>
                <td>11</td>
                <td>Rid (মুক্ত করা)</td>
                <td>rid</td>
                <td>rid</td>
              </tr>
              <tr>
                <td>12</td>
                <td>Split (বিদীর্ণ করা)</td>
                <td>split</td>
                <td>split</td>
              </tr>
              <tr>
                <td>13</td>
                <td>Shut (বন্ধ করা)</td>
                <td>shut</td>
                <td>shut</td>
              </tr>
              <tr>
                <td>14</td>
                <td>Set (স্থাপন করা)</td>
                <td>set</td>
                <td>set</td>
              </tr>

              <tr>
                <td>15</td>
                <td>quit (ছেড়ে দেওয়া)</td>
                <td>quit</td>
                <td>quit</td>
              </tr>
              <tr>
                <td>16</td>
                <td>spread(ছড়ানো)</td>
                <td>spread</td>
                <td>spread</td>
              </tr>
              <tr>
                <td>17</td>
                <td>broadcast(প্রচার করা)</td>
                <td>broadcast</td>
                <td>broadcast</td>
              </tr>
            </table>
          </div>
        </div>

        {/* Shortcut Technique */}
        <div className="">
          <div className="w-full max-w-6xl mx-auto p-3 bg-slate-50 rounded-xl shadow-md my-8">
            <div className="mb-6">
              <h2 className="text-3xl font-extrabold text-slate-800 tracking-tight">
                Shortcut Technique List
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                Strong verbs form their past tense and past participle through
                an internal vowel change.
              </p>
            </div>

            <div className="space-y-8">
              {strongVerbsData.map((group, groupIndex) => (
                <div
                  key={groupIndex}
                  className="overflow-hidden border border-slate-200 rounded-lg shadow-sm bg-white"
                >
                  <div className="bg-slate-100 px-4 py-3 border-b border-slate-200">
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
                            className="px-4 py-3 w-16 text-center"
                          >
                            S.N.
                          </th>
                          <th scope="col" className="px-3 py-3">
                            V1
                          </th>
                          <th scope="col" className="px-3 py-3">
                            Meaning
                          </th>
                          <th scope="col" className="px-3 py-3">
                              V2
                          </th>
                          <th scope="col" className="px-3 py-3">
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
                              <td className="px-4 py-4 text-center font-mono text-xs text-slate-400">
                                {currentSerialNumber}
                              </td>
                              <td className="px-3 py-4 font-semibold text-slate-900">
                                {verb.base}
                              </td>
                              <td className="px-3 py-4 font-normal text-slate-600 font-sans tracking-wide">
                                {verb.bengali}
                              </td>
                              <td className="px-3 py-4 font-medium text-indigo-600">
                                {verb.past}
                              </td>
                              <td className="px-3 py-4 font-medium text-emerald-600">
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
