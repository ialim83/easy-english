const Pronoun = () => {
  const pronounTable = [
    {
      person: "1st person",
      rows: [
        { number: "Singular", subject: "I", object: "me", possessive: "my" },
        { number: "Plural", subject: "We", object: "us", possessive: "our" },
      ],
    },
    {
      person: "2nd person",
      rows: [
        {
          number: "Singular",
          subject: "You",
          object: "you",
          possessive: "your",
        },
        { number: "Plural", subject: "You", object: "you", possessive: "your" },
      ],
    },
    {
      person: "3rd person",
      rows: [
        {
          number: "Singular",
          subject: "Kamal, he, she",
          object: "him, her",
          possessive: "his, her",
        },
        {
          number: "Plural",
          subject: "Kamal and Limon / they",
          object: "them",
          possessive: "their",
        },
      ],
    },
    {
      person: "3rd person (জড় প্রাণী)",
      rows: [
        {
          number: "Singular",
          subject: "The dog, It",
          object: "It",
          possessive: "Its",
        },
        {
          number: "Plural",
          subject: "The dogs, they",
          object: "them",
          possessive: "their",
        },
      ],
    },
  ];

  const technique2Table = [
    { left: "বস্তুর ক্ষেত্রে", right: "Which / that" },
    { left: "ব্যক্তির ক্ষেত্রে", right: "Who" },
    { left: "সময়ের ক্ষেত্রে", right: "When" },
    { left: "একবচনের জন্য", right: "This" },
    { left: "অধিকবচনের জন্য", right: "These" },
    { left: "ছেলের ক্ষেত্রে", right: "He, him, his" },
    { left: "মেয়ের ক্ষেত্রে", right: "She, her" },
    { left: "Plural হলে", right: "They" },
  ];

  return (
    <div className="max-w-5xl mx-auto select-none">
      <div className="text-center py-20 capitalize">
        <h1 className="text-green-400 text-3xl md:text-6xl  font-semibold">
          Pronoun Reference
        </h1>
        <h2 className="text-xl font-semibold ">Clear the unclear pronoun</h2>
        <p className="font-bold ">Question No: 08</p>
      </div>

      <div className="bg-white text-base">
        {/* কিছু বিষয় সম্পর্কে ধারণা */}
        <div className="  mx-auto p-6 text-gray-800  leading-relaxed">
          {/* Heading */}
          <h2 className="text-center font-bold border px-3 py-1 inline-block mb-4">
            কিছু বিষয় সম্পর্কে ধারণা থাকতে হবে
          </h2>

          {/* Bullet points */}
          <ul className="list-disc ml-6 space-y-1 mb-4">
            <li>Pronoun, Number ও Person সম্পর্কে ধারণা থাকতে হবে।</li>
            <li>ইংরেজি বাক্যের অর্থ বুঝতে হবে।</li>
            <li>
              কোন কিছুর নামকে <span className="font-semibold">Noun</span> বলে।
              Noun এর পরিবর্তে যা ব্যবহার করা হয় তাই pronoun।
            </li>
          </ul>

          {/* Examples */}
          <div className="mb-6 space-y-4">
            <p>
              <span className="font-semibold">Example :</span>
            </p>

            <p>
              i) <span className="underline">Bina</span> lost her pen.
              <br />
              <span className="italic">Noun → Pronoun</span>
            </p>

            <div className="border p-3 inline-block">
              এখানে <span className="font-semibold">her</span> শব্দটি Bina Noun
              এর পরিবর্তে ব্যবহার হয়েছে।
            </div>

            <p>
              ii) Elina drank her <u>coffee</u> even though
              <span className="underline"> it </span> was cold.
              <br />
              <span className="italic">Noun → Pronoun</span>
            </p>

            <div className="border p-3 inline-block">
              এখানে <span className="font-semibold">it</span> শব্দটি coffee Noun
              এর পরিবর্তে ব্যবহার হয়েছে।
            </div>
          </div>

          {/* Table */}
          <p className="font-semibold mb-2">
            ❇️ নিচে Noun এর number ও Person অনুযায়ী ব্যবহৃত Pronoun এর একটি
            তালিকা
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="w-full border border-collapse text-center">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border p-2">Person</th>
                  <th className="border p-2">Number</th>
                  <th className="border p-2">Subject</th>
                  <th className="border p-2">Object</th>
                  <th className="border p-2">Possessive</th>
                </tr>
              </thead>
              <tbody>
                {pronounTable.map((group, i) =>
                  group.rows.map((row, j) => (
                    <tr key={`${i}-${j}`}>
                      {j === 0 && (
                        <td
                          rowSpan={group.rows.length}
                          className="border p-2 font-semibold align-middle"
                        >
                          {group.person}
                        </td>
                      )}
                      <td className="border p-2">{row.number}</td>
                      <td className="border p-2">{row.subject}</td>
                      <td className="border p-2">{row.object}</td>
                      <td className="border p-2">{row.possessive}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Technique */}
        <div className=" mx-auto p-6 text-gray-800 leading-relaxed">
          <p className="font-semibold mb-2">➡️ তিনটি Technique জানতে হবে</p>

          {/* Technique -1: */}
          <div className="">
            <div className="text-center mb-4">
              <span className="border px-4 py-1 font-semibold shadow-2xl">
                Technique -1: Pronoun Reference
              </span>
            </div>

            <ul className="list-decimal ml-6 mb-4">
              <li>Direct Mistake</li>
              <li>Confusion</li>
            </ul>

            {/* Direct mistake explanation */}
            <p className="mb-2">
              <span className="font-semibold">➤ Direct mistake :</span> এই ধরনের
              ভুলের ক্ষেত্রে সরাসরি Passage এ He এর জায়গায় she, She এর জায়গায়
              it, It এর জায়গায় They – এই ধরনের সরাসরি ভুল থাকবে।
            </p>

            <p className="font-semibold">Example :</p>

            <p className="mt-2">
              <span className="font-semibold">Incorrect :</span> A cook once
              roasted a duck for its master. He looked so delicious.
            </p>

            <p>
              <span className="font-semibold">Correct :</span> A cook once
              roasted a duck for{" "}
              <span className="underline font-semibold">his</span> master.{" "}
              <span className="underline font-semibold">It / The roast</span>{" "}
              looked so delicious.
            </p>
            {/* Confusion */}
            <p className="mt-4">
              <span className="font-semibold my-2">➤ Confusion :</span>
              এই ধরনের ভুলের ক্ষেত্রে একটি Pronoun এর পরিবর্তে এর আগের লাইনে
              একাধিক Noun থাকবে। তখন তোমাকে Clear করে বলতে হবে যে pronoun টি
              আসলে কোন Noun এর পরিবর্তে ব্যবহার হয়েছে।
            </p>

            <p className="font-semibold">Example :</p>

            <p className="mt-2">
              <span className="font-semibold">Incorrect :</span> There are 10
              crore men and 8 crore women in Bangladesh.{" "}
              <span className="underline font-semibold">They</span> are working
              hard to develop the nation. But we can't forget the contribution
              of the women also.
            </p>

            <p className="mt-2">
              <span className="font-semibold">Correct :</span> There are 10
              crore men and 8 crore women in Bangladesh.{" "}
              <span className="underline font-semibold">Men</span> are working
              hard to develop the nation. But we can't forget the contribution
              of the women also.
            </p>

            <p className="mt-1 italic">
              N.B: Confusion ভুল incorrect থেকে Correct করতে সরাসরি Noun এর
              ব্যবহার করতে হবে।
            </p>
          </div>

          {/* Technique 2 */}
          <div className="">
            <div className="text-center my-6">
              <span className="border px-4 py-1 font-semibold shadow-2xl">
                Technique -2 : Gender & Number
              </span>
            </div>

            <div className="overflow-x-auto mb-6">
              <table className="w-full border border-collapse text-center">
                <tbody>
                  {technique2Table.map((row, index) => (
                    <tr key={index}>
                      <td className="border p-2 w-1/2">{row.left}</td>
                      <td className="border p-2 w-1/2">{row.right}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Technique 3 */}
          <div className="">
            <div className="text-center my-6">
              <span className="border px-4 py-1 font-semibold">
                Technique -3 : Subject chain
              </span>
            </div>

            <p className="mb-2">
              Pronoun ব্যবহৃত হলে সব সময় Noun এর পরিবর্তে আসে। যদি একটি Noun
              বাক্যে একবার থাকে তবে পরের লাইনে আবার pronoun ব্যবহার করতে পারি।
              আর এই Noun টি যখন subject হিসেবে ব্যবহৃত হয় তখন একটি subject chain
              তৈরি হয়।
            </p>

            <p className="font-semibold">Example :</p>

            <p className="mt-2">
              (i) Sourav is a student. He reads in class Seven. He has a sister
              named Trina.
            </p>

            <p className="italic mb-2">
              Subject হিসেবে Noun 'Sourav' প্রথমে এর পরে লাইনে Subject এর জায়গায়
              pronoun 'He' ব্যবহৃত হয়েছে।
            </p>

            {/* Incorrect */}
            <p className="font-semibold">Incorrect :</p>
            <ul className="list-disc ml-6 mb-4">
              <li>Kamal is a brilliant student.</li>
              <li>It reads in class Ten.</li>
              <li>He has a cousin named Maria.</li>
              <li>It / She / Maria also read in class Ten.</li>
              <li>She always help his brother.</li>
              <li>He also takes care of her sister.</li>
            </ul>

            {/* Correct */}
            <p className="font-semibold">Correct :</p>
            <ul className="list-disc ml-6 mb-6">
              <li>Kamal is a brilliant student.</li>
              <li>
                <span className="underline font-semibold">He</span> reads in
                class Ten.
              </li>
              <li>
                <span className="underline font-semibold">He</span> has a cousin
                named Maria.
              </li>
              <li>
                <span className="underline font-semibold">Maria</span> also read
                in class Ten.
              </li>
              <li>
                <span className="underline font-semibold">She</span> always
                helps <span className="underline font-semibold">her</span>{" "}
                brother.
              </li>
              <li>
                <span className="underline font-semibold">Kamal</span> also
                takes care of{" "}
                <span className="underline font-semibold">his</span> sister.
              </li>
            </ul>
          </div>

          {/* Extra Info */}
          <div className="">
            <div className="text-center my-6">
              <span className="border px-4 py-1 font-semibold">
                Extra 5 টি Information
              </span>
            </div>

            <p className="mb-2">
              ❇️ One, anyone, everyone, everybody, someone, somebody, none,
              nobody, each, either, neither ইত্যাদি Indefinite pronoun সর্বদা
              singular ব্যক্তি ধরা হয়। এজন্য pronoun singular হবে।
            </p>

            <p className="font-semibold">Example :</p>
            <ul className="list-decimal ml-6">
              <li>
                <span className="underline font-semibold">Everyone</span> should
                do <span className="underline font-semibold">his</span> duty.
              </li>
              <li>
                <span className="underline font-semibold">One</span> of the boys
                said <span className="underline font-semibold">he</span> would
                be an hour late.
              </li>
              <li>
                <span className="underline font-semibold">One</span> of the
                girls said <span className="underline font-semibold">she</span>{" "}
                would be an hour late.
              </li>
              <li>
                <span className="underline font-semibold">Somebody</span> left{" "}
                <span className="underline font-semibold">his</span> bag in the
                room.
              </li>
              <li>
                <span className="underline font-semibold">Each</span> boy took{" "}
                <span className="underline font-semibold">his</span> turn.
              </li>
              <li>
                <span className="underline font-semibold">Each</span> girl took{" "}
                <span className="underline font-semibold">her</span> turn.
              </li>
            </ul>
            <div className="p-4 text-gray-900 leading-relaxed">
              <p className="mb-2">
                <span className="font-bold">vii)</span> Everyone in the club
                must pay <span className="font-bold">his</span> dues next week.
              </p>

              <p className="mb-2">
                আধুনিক grammarian বা Indefinite pronoun এর পরে he/she এবং
                his/her ব্যবহার করেন।
              </p>

              <p className="mb-2 font-semibold">Example:</p>
              <p className="mb-2">
                i) Everyone should do <u>his/her </u> duty.
              </p>

              <p className="mb-2">
                আবার, অনেক Grammarian-রা Indefinite pronoun এর পরে they, their
                ব্যবহার করেন।
              </p>

              <p className="mb-2 font-semibold">Example:</p>
              <p className="mb-2">
                i) Everyone in the time has <u>their </u> tickets ready.
              </p>
              <p className="mb-2">
                ii) No one in the class remembered to bring <u>their </u> books.
              </p>

              <p className="mb-2">
                ➤ কোনো pronoun অস্পষ্ট প্রকাশ করলে, তারপরে পূর্বোল্লিখিত noun
                লিখতে হয়।
              </p>

              <p className="mb-2 font-semibold">Example:</p>
              <p className="mb-1">
                i) <span className="font-semibold">Incorrect :</span>{" "}
                <u>They </u> are our best friends.
              </p>
              <p className="mb-2">
                <span className="font-semibold">Correct :</span> <u>Books </u>{" "}
                are our best friends.
              </p>

              <p className="mb-1">
                ii) <span className="font-semibold">Incorrect :</span>{" "}
                <u>They</u> go to school together.
              </p>
              <p className="mb-2">
                <span className="font-semibold">Correct :</span>{" "}
                <u>Salam and Salma </u>
                go to school together.
              </p>

              <p className="mb-2">
                ➤ Verb-এর পরে Subject form নয়, Verb-এর পরে object form বসে।
              </p>

              <p className="mb-2 font-semibold">Example:</p>
              <p className="mb-1">
                i) <span className="font-semibold">Incorrect :</span> ..... as
                will certainly happen if <u> ourselves </u> are disable.
              </p>
              <p className="mb-2">
                ii) <span className="font-semibold">Correct :</span> ..... as
                will certainly happen if <u> we </u> are disable.
              </p>

              <p className="mb-2">
                ➤ Demonstrative Pronoun “this, that, these, those” এই চার জায়গায়
                pronoun এর জন্য থাকবার সম্ভাবনা থাকে। তাই এই জায়গাগুলোতে
                পরিবর্তনের বিষয়ে মাথায় রাখতে হবে।
              </p>

              <p className="mb-2">
                এক্ষেত্রে অধিকাংশ ক্ষেত্রে “demonstrative pronoun + noun” বসে
                অথবা সঠিক demonstrative pronoun বসে।
              </p>

              <p className="mb-2 font-semibold">Example:</p>
              <p className="mb-1">
                i) <span className="font-semibold">Incorrect :</span> The
                sorrows and sufferings of the parents of <u>those</u> know no
                bounds.
              </p>
              <p className="mb-2">
                <span className="font-semibold">Correct :</span> The sorrows and
                sufferings of the parents of <u>those autistic children</u> know
                no bounds.
              </p>

              <p className="mb-1">
                ii) <span className="font-semibold">Incorrect :</span>{" "}
                <u> These </u>
                giver one the opportunity to see the unseen and know the
                unknown.
              </p>
              <p className="mb-2">
                <span className="font-semibold">Correct :</span> <u>It/this</u>{" "}
                gives one the opportunity to see the unseen and know the
                unknown.
              </p>

              <p className="mb-2">
                ➤ Subject অনুযায়ী তার reflexive থাকতে পারে। যেমন:-
              </p>

              <p className="mb-1">You – Yourself</p>
              <p className="mb-1">He – Himself</p>
              <p className="mb-1">She – Herself</p>
              <p className="mb-1">them – themselves</p>
              <p className="mb-2">It – itself</p>

              <p className="mb-2 font-semibold">Example:</p>
              <p className="mb-1">
                i) <span className="font-semibold">Incorrect :</span> So, if you
                want <u> themselves </u> to be in their league.
              </p>
              <p className="mb-2">
                ii) <span className="font-semibold">Correct :</span> So, if you
                want <u>yourself</u> to be in their league.
              </p>
            </div>
          </div>

          {/* Exercise */}
          <div className="space-y-6  leading-relaxed text-gray-900">
            <p className="font-semibold">
              2.{" "}
              <span className="text-pink-600">[Rajshahi Board‑2019, 2016]</span>
            </p>
            <p>
              Salam and Salma are siblings. They read in a local primary school.
              Salam is in class five whereas her sister, Salma reads in class
              three. They go to school together. Sometimes they take rickshaw
              because it is five kilometers away from his home. Today, she is
              going to school with her father because her brother, Salam is
              sick. He is taking medicine and bed rest.
            </p>

            <p className="font-medium">Answer:</p>
            <p>
              Salam and Salma are siblings. They read in a local primary school.
              Salam is in class five whereas his sister Salma reads in class
              three. They go to school together. Sometimes they take rickshaw
              because <span className="underline">their school</span> is five
              kilometers away from their home. Today, Salma is going to school
              with <span className="underline">their</span> father because her
              brother, Salam is sick. He is taking medicine and bed rest.
            </p>

            <p className="font-semibold">
              3. <span className="text-pink-600">[Jashore Board‑2019]</span>
            </p>
            <p>
              Both educated and uneducated women are at present as important as
              men in our society. She constitutes nearly half of our total
              population. No country can make real progress keeping half of it
              in darkness. Without the upliftment of our women, it is not at all
              possible. Again, without education, women cannot be uplifted. So
              proper education should be given to her in order that they can
              work hand in hand with them in all development programmes.
            </p>

            <p className="font-medium">Answer:</p>
            <p>
              Both educated and uneducated women are at present as important as
              men in our society. <span className="underline">Women</span>{" "}
              constitute nearly half of our total population. No country can
              make real progress keeping half of{" "}
              <span className="underline">its population</span> in darkness.
              Without the upliftment of our women,{" "}
              <span className="underline">real progress</span> is not at all
              possible. Again, without education, women cannot be uplifted. So
              proper education should be given to{" "}
              <span className="underline">womenfolk</span> in order that they
              can work hand in hand with men in all development programmes.
            </p>

            <p className="font-semibold">
              4.{" "}
              <span className="text-pink-600">
                [Cumilla Board‑2019, 2016; Barishal Board‑2016]
              </span>
            </p>
            <p>
              Women are nowadays as important as men in society. She constitutes
              nearly half of the total population. No nation can make real
              progress keeping half of it in the dark. Without the improvement
              of the women's status, it is not at all possible. Again, without
              education, women cannot be uplifted. So, proper education should
              be given to her so that they can work hand in hand with them in
              all development programmes.
            </p>

            <p className="font-medium">Answer:</p>
            <p>
              Women are nowadays as important as men in society.{" "}
              <span className="underline">They</span> constitute nearly half of
              the total population. No nation can make real progress keeping
              half of <span className="underline">its population</span> in the
              dark. Without the improvement of the women's status,{" "}
              <span className="underline">real progress</span> is not at all
              possible. Again, without education, women cannot be uplifted. So,
              proper education should be given to{" "}
              <span className="underline">them / womenfolk</span> so that they
              can work hand in hand with men in all development programmes.
            </p>

            <p className="font-semibold">
              5. <span className="text-pink-600">[Chattogram Board‑2019]</span>
            </p>
            <p>
              Do you know the importance of trees? They are our best friends.
              Our existence on earth will be at stake without it. We inhale
              oxygen which trees produce. Again, we exhale carbon dioxide which
              it absorbs. Besides, we get food from trees and firewood to cook
              it. But some irresponsible people cut down trees indiscriminately.
              It should be brought to light. Furthermore, one should take keen
              interest to plant more trees so that we can live comfortably on
              earth.
            </p>

            <p className="font-medium">Answer:</p>
            <p>
              Do you know the importance of trees? They are our best friends.
              Our existence on earth will be at stake without{" "}
              <span className="underline">them</span>. We inhale oxygen which
              trees produce. Again, we exhale carbon dioxide which{" "}
              <span className="underline">trees</span> absorb. Besides, we get
              food from trees and firewood to cook food. But some irresponsible
              people cut down trees indiscriminately.{" "}
              <span className="underline">They</span> should be brought to
              light. Furthermore, <span className="underline">we</span> should
              take keen interest to plant more trees so that we can live
              comfortably on earth.
            </p>

            <p className="font-semibold">
              6. <span className="text-pink-600">[Sylhet Board‑2019]</span>
            </p>
            <p>
              Robin hates people who are mean to animals. Last afternoon, as he
              was walking home from work, he saw some boys throwing stones at an
              old lame dog. Immediately, he rushed to help the animal. “Stop
              it!” he shouted as he ran towards the unruly boys, “Leave it
              alone!” Startled by the big man's shouts, they ran away. One of
              them jeered at him while running away. Robin, however, was totally
              unmoved by the jeering. He was happy that he could save it. Robin
              has always felt affection for animals. Once he even went to the
              police station to complain about a neighbour who threw a cat out
              of the window. Instead of taking any action, they laughed at him
              and advised him not to worry about such ‘petty’ matters.
            </p>

            <p className="font-medium">Answer:</p>
            <p>
              Robin hates people who are mean to animals.{" "}
              <span className="underline">Yesterday</span> afternoon, as he was
              walking home from work, he saw some boys throwing stones at an old
              lame dog. Immediately, he rushed to help the animal. “Stop it!” he
              shouted as he ran towards the unruly boys, “Leave it alone!”
              Startled by the big man's shouts,{" "}
              <span className="underline">the boys</span> ran away. One of them
              jeered at <span className="underline">Robin</span> while running
              away. Robin, however, was totally unmoved by the jeering. He was
              happy that he could save{" "}
              <span className="underline">the dog</span>. Robin has always felt
              affection for animals. Once he even went to the police station to
              complain about a neighbour who threw a cat out of the window.
              Instead of taking any action,{" "}
              <span className="underline">the police</span> laughed at him and
              advised him not to worry about such ‘petty’ matters.
            </p>

            <p className="font-semibold">
              7. <span className="text-pink-600">[Barishal Board‑2019]</span>
            </p>
            <p>
              Honesty is the best policy. It is honesty which brings happiness
              in life. Without it, none can dream of a great life. Those who
              were great in their lifetime were honest. They worked with
              sincerity, lived earnestly and died with honour. Their
              contributions to this world are unforgettable. So if you want
              yourselves to be in their league, be honest. Remember, there is no
              shortcut way to a great life.
            </p>
            <div className="">
              9. Combined floard-Ka Set-2018) <br />
              There lived a man in a village which had a great attraction to
              English. He went to a teacher in order to learn English well
              though he was dull-headed. He tried his best to teach him but the
              man learnt only three English words yes, no and very good. Though
              the man did not know the meaning of it, he used them frequently in
              his conversation. He did not understand that a little learning is
              a dangerous thing and very soon he would be a victim of it
              <br />
              <br />
              Answer: There lived a man in a village who had a great attraction
              to English. <span className="underline">The man </span> went to a
              teacher in order to learn English well though he was dull headed.{" "}
              <span className="underline"> The teacher </span> tried his best to
              teach him but the man learnt only three Inglish words-yes, no and
              very good. Though the man did not know the meaning of{" "}
              <span className="underline"> these words </span> , he used them
              frequently in his conversation.
              <span className="underline"> The man </span> did not understand
              that a little learning is a dangerous thing and very soon. he
              would be a victim of it
              <br />
              <br />
              10. (Combined Board-Kha Set-2018) <br />
              The Egyptians believed that after death, people would go to
              another world. One thought that in that world, people still would
              need many things he had on earth. Their kings had many wonderful
              treasures. They loved and respected them very much. So, they
              buried them with dood kings.
              <br /> <br />
              <br /> <br />
              Answer: The Egyptians believed that after death, people would go
              to another world.{" "}
              <span className="underline"> The Egyptians/ they </span> thought
              that in that world, people still would need many things{" "}
              <span className="underline">They</span> had on earth. Their kings
              had many wonderful treasures.{" "}
              <span className="underline">The Egyptians/The people</span> loved
              and respected kinga very much. So, they buried{" "}
              <span className="underline">their treasures </span> with dead
              kings.
              <br /> <br />
              11. (Dhaka Board 2017, Cumilla Board 2017. Dinajpur Board 2016){" "}
              <br />
              Travelling is a part of education. These means going from place to
              place. One can enhance knowledge by going from place to place.
              Thus gives one the opportunity to see the unseen and know the
              unknown. Some people are averse to travelling. This limits his
              vision, However, by travelling different parts of the world, my
              knowledge may be enriched.
              <br />
              <br />
              Answer: Travelling is a part of education.{" "}
              <span className="underline"> This/it </span> means going from
              place to place. One can enhance knowledge by going from place to
              place.
              <span className="underline">It/ This</span> gives one the
              opportunity to see the unseen and know the unknown. Some people
              are averse to travelling.{" "}
              <span className="underline"> This anversion </span> limits
              <span className="underline"> their/people's </span>
              vision. However, by travelling different parts of the world,
              <span className="underline"> one's/our </span> knowledge may be
              enriched.
              <br /> <br />
              12. Rajshahi Board-28171 <br />
              Education is the birthright of every man. But even then many
              people in our country are deprived of this for many reasons. They
              are unconscious and unskilled for want of it. For this, they are
              unable not only to develop their own fate or their family, but
              also unable to play any role for the development of society or the
              state. If the people are not properly educated, that is not
              possible. 50, the more we can educate our people, the more the
              country will be developed. With a view to developing human
              resource, the government has given many benefits in the field of
              expanding the primary and secondary education. We must ensure
              these for every child of the country.
              <br />
              <br />
              Answer: Education is the birthright of every man. But even then
              many people in our country are deprived of
              <span className="underline"> education </span>,
              <span className="underline"> this </span> right for many reasons.
              They are unconscious and unskilled for want of{" "}
              <span className="underline">
                education. For this unconsciousness and unskilledness,
              </span>{" "}
              they are unable not only to develop their own fate or their
              family, but also unable to play any role for the development of
              society or the state. If the people are not properly educated,{" "}
              <span className="underline">
                {" "}
                the development of society or the state,{" "}
              </span>
              is not possible. 50, the more we can educate our people, the more
              the country will be developed. With a view to developing human
              resource, the government has given many incentives in the field of
              expanding the primary and secondary education. We must ensure
              these
              <span className="underline"> incentives </span> for every child of
              the country.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pronoun;
