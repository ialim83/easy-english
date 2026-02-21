function Voice() {
  const assertiveSentences = [
    "Farmers grow vegetables.",
    "I don't like him.",
    "The boys are flying kites.",
    "Everybody loves him very much.",
    "The Chinese invented paper.",
    "Books introduce us to the realm of knowledge.",
    "We all should read books.",
    "Pramila has painted the picture.",
    "My mother was making tea.",
    "The police have arrested him.",
    "Bees gather honey.",
    "I did not do it.",
    "My father will build a new house.",
    "Saif sent the parcel yesterday.",
    "We use them for various purposes.",
    "Every student should go through many good books.",
    "So, we should never forget this thing.",
    "Ruplal wanted a peaceful life.",
    "People of all ages enjoy this game.",
    "I gladly accepted the invitation.",
    "Some books give us immense pleasure.",
    "They built the house long ago.",
    "They are repairing the car now.",
    "They don't sell stamps in book shops.",
    "I have lost my purse.",
    "I have lent him the book for a week.",
    "The giant told the children to leave his garden.",
    "The idle only curse their fate.",
    "Tourists from home and abroad visit its shore.",
    "We should follow him.",
  ];

  const imperativeSentences = [
    "Don't look at the tree.",
    "Empty the glass.",
    "Do not look down upon the poor.",
    "Change the form of voice.",
    "Pluck me a flower.",
    "Write a letter to your friend.",
    "Stop talking.",
    "Get out of here.",
    "Don't touch it.",
    "Carry him home.",
    "Do not insult the beggar.",
    "Obey the rules of the road.",
    "Do not abuse others.",
    "Please help the needy.",
    "Clean the floor immediately.",
    "Please speak a bit loudly.",
    "Listen to him carefully.",
    "Solve these sums without any help.",
    "Follow his instructions strictly.",
    "Finish your work in time.",
  ];

  return (
    <div className="h-full md:w-[65%] mx-auto px-5">
      <div className="py-20">
        <h1 className="text-center text-green-400">Voice</h1>
      </div>

      {/* Active to passive */}
      <div className="text-lg md:text-xl">
        <div className="">
          <p className="py-3">
            Voice: <br /> Verb এর যে রুপ তার Subject সক্রিয় না নিস্ক্রিয় তা
            বুঝায় তাকে Voice বলে।
          </p>
        </div>

        <h3 className="underline text-green-500">From Active to Passive</h3>
        <p className="text-blue-500 dark:text-gray-300 font-extrabold">
          <span className="text-rose-500">Rule: </span> Obj কে Sub বানাতে হবে +
          (helping verb) + V<sub>3</sub> + by + sub কে obj বানাতে হবে।
        </p>
        <p className="py-2">
          (1) প্রদত্ত বাক্যের মুল Verb যদি V<sub>1</sub> থাকে তাহলে Passive
          voice এর helping verb হয় - am/is/are <br />
          যেমনঃ <br />
          Q. She makes tea. <br />
          ➡️Tea is made by her. <br />
        </p>
        <p className="py-2">
          (2) প্রদত্ত বাক্যের সাহায্যকারী Verb যদি do not/ does not থাকে তাহলে
          এগুলোর পরিবর্তে Passive voice এর helping verb হবে = am not/ is not/
          are not <br />
          যেমনঃ <br />
          Q. She does not make tea. <br />= Tea is not made by her.
        </p>
        <p className="py-2">
          (3) প্রদত্ত বাক্যের মুল Verb যদি V<sub>2</sub> থাকে তাহলে Passive
          voice এর helping verb হয় ➡️ Was/ were <br />
          যেমনঃ
          <br />
          Q. She made tea.
          <br />
          ➡️ Tea was made by her. <br />
        </p>
        <p className="py-2">
          (2) প্রদত্ত বাক্যের সাহায্যকারী Verb যদি did not থাকে তাহলে এগুলোর
          পরিবর্তে Passive voice এর helping verb হবে ➡️ was not/ were not <br />
          যেমনঃ <br />
          Q. She did not make tea.
          <br />
          ➡️ Tea was not made by her.
        </p>

        <p className="py-2">
          (4) প্রদত্ত বাক্যে am/is/are, was/ were, shall be/ will be যদি থাকে
          তাহলে এগুলোর সাথে Passive voice এর helping verb হয় = being <br />
          যেমনঃ <br />
          Q. She was making tea.
          <br />= Tea was being made by her. <br />
        </p>
        <p className="py-2">
          (5) প্রদত্ত বাক্যে can/ could/ may/ might/ shall/ should/ will/ would/
          must/ ought to/ have to/ has to/ had to/ am going to/ is going to/ are
          going to যদি থাকে তাহলে এগুলোর সাথে Passive voice এর helping verb হবে
          = be. <br />
          যেমনঃ <br />
          Q. She can make tea. <br />
          👉 Tea can be made by her.
        </p>
        <p className="py-2">
          (5) প্রদত্ত বাক্যে have/ has/ had যদি থাকে তাহলে এগুলোর সাথে Passive
          voice এর helping verb হবে = been. <br />
          যেমনঃ <br />
          Q. She has made tea. <br />
          👉 Tea has been made by her.
        </p>
      </div>

      {/* Tense */}
      <div className="pt-5">
        <h1>Tense অনুসারে Passive Voice এর সাহায্যকারী Verb: </h1>
        <br />
        বাক্যটি Present Indefinite Tense হলে Passive Voice এর সাহায্যকারী Verb
        হবে - am/ is/ are.
        <br />
        বাক্যটি Present Perfect Tense হলে Passive Voice এর সাহায্যকারী Verb হবে
        - have been/ has been.
        <br />
        বাক্যটি Present Indefinite Tense হলে Passive Voice এর সাহায্যকারী Verb
        হবে - am/ is/ are. <br />
        <br />
        বাক্যটি Past Indefinite Tense হলে Passive Voice এর সাহায্যকারী Verb হবে-
        was/ were. <br />
        <br />
        বাক্যটি Past Perfect Tense হলে Passive Voice এর সাহায্যকারী Verb হবে-
        had been. <br />
        <br />
        বাক্যটি Future Indefinite Tense হলে Passive Voice এর সাহায্যকারী Verb
        হবে- will be/ shall be. <br />
        <br />
        <br />
        বাক্যটি Future Indefinite Tense হলে Passive Voice এর সাহায্যকারী Verb
        হবে- will be/ shall be. <br />
        <br />
        বাক্যটি Present Continuous Tense হলে Passive Voice এর সাহায্যকারী Verb
        হবে 👉 am being/ is being/ are being. <br />
        আবার, <br />
        বাক্যটি Past Continuous Tense হলে Passive Voice এর সাহায্যকারী Verb হবে
        👉 was being/ were being. <br />
        আবার, <br />
        বাক্যটি Future Continuous Tense হলে Passive Voice এর সাহায্যকারী Verb
        হবে 👉 shall be being/ will be being. <br />
      </div>

      {/* PASSIVE TO ACTIVE */}
      <div className="mt-5 mb-10 text-lg md:text-xl">
        <h3 className="underline text-green-400">From Passive to Active</h3>
        <p className="text-blue-500 dark:text-gray-300">
          <p className="font-extrabold">
            <span className="text-rose-500">Rule: </span> Obj কে Sub + (helping
            verb)? উঠে যাবে + V<sub>?</sub> এর Form পরিবর্তন হতে পারে + Sub কে
            obj বানাতে হবে।
          </p>
        </p>
        <p>** By/ In/ at/ with উঠিয়ে দিতে হবে।</p>
        <p>
          (i) প্রদত্ত বাক্যের Helping verb যদি am/is/are থাকে উঠিয়ে V
          <sub>1</sub>(s/es) হবে। যেমনঃ <br />
          Q. Tea is made by her. <br />
          👉 She makes tea.
          <br />
          কিন্তু ➡️ Helping verb এর সাথে not থাকলে Helping verb উঠিয়ে do
          not/does not + V<sub>1</sub> হবে। <br />
          যেমনঃ <br />
          Q. Tea is not made by her. <br />
          👉 She does not make tea.
        </p>
        <p>
          (ii) প্রদত্ত বাক্যের Helping verb যদি was/ were থাকে উঠিয়ে V
          <sub>2</sub> হবে। <br />
          যেমনঃ
          <br />
          Q. Tea was made by her. <br />
          👉 She made tea.
          <br />
          কিন্তু Helping verb এর সাথে not থাকলে Helping verb উঠিয়ে did not + V
          <sub>1</sub> হবে। <br />
          যেমনঃ <br />
          Q. Tea was not made by her. <br />
          👉 She did not make tea.
        </p>

        <p className="">
          (iii) প্রদত্ত বাক্যে am being, is being, are being, was being, were
          being, shall be being, will be being থাকলে being উঠিয়ে V<sub>1</sub>{" "}
          এর সাথে ing হবে।
          <br />
          যেমনঃ <br />
          Q. Tea was being made by her. <br />
          👉 She was making tea.
        </p>
        <p className="">
          (iii) প্রদত্ত বাক্যে have been/ has been/ had been থাকলে been উঠিয়ে
          Verb এর V<sub>3</sub> হবে।
          <br />
          যেমনঃ <br />
          Q. Tea was being made by her. <br />
          👉 She was making tea.
        </p>

        <p>
          (vi)প্রদত্ত বাক্যে যদি can be/ could be/ may be/ might be/ shall be/
          should be/ will be/ would be/ must be/ ought to be/ have to be/ has to
          be/ had to be/ am going to be/ is going to be/ are going to be ইত্যাদি
          থাকলে be উঠিয়ে মুল Verb এর V<sub>1</sub>
          করতে হবে। <br />
          যেমনঃ <br />
          Q. Tea can be made by her. <br />
          👉 She can make tea.
        </p>
      </div>

      {/* Some More Examples */}
      <div className="py-5">
        Some More Examples <br />
        01. I have to do this. <br />
        02. What did you do yesterday? <br />
        03. Change the dress. <br />
        04. He is not known here. <br />
        05. He listened to me.. <br />
        06. You made me king. <br />
        07. Let me have a cup of coffee. <br />
        Ans: This has to be done by me. <br />
        Ans: What was done by you yesterday? <br />
        Ans: Let the dress be changed. <br />
        Ans: Nobody knows him here. <br />
        Ans: I was listened to by him. <br />
        Ans: I was made king by you. <br />
        Ans: Let a cup of coffee be had by me. <br />
        08. Am I wanted by you? <br />
        09. Did you eat the guava? <br />
        10. How can you do this? <br />
        11. Allah loves us all. <br />
        12. Let him do whatever he likes.. <br />
        13. Rahul saw the boy crying. <br />
        14. He is going to catch fish. <br />
        15. Fortune favours the brave. <br />
        16. I asked them their name. <br />
        17. The pen is well when it is used in writing. <br />
        18. Steps will be taken. <br />
        19. Rome was not built in a day. <br />
        20. Eat a balanced diet. <br />
        21. The man helps himself. <br />
        22. People call the lion the king of beasts. <br />
        23. I saw him do it. <br />
        24. I often help the poor. <br />
        25. Don't call him by <br />
        Ans : Do you want me? <br />
        Ans: Was the guava eaten by you? <br />
        Ans: How can this be done by you? <br />
        Ans: We are all loved by Allah. <br />
        Ans: Let whatever he likes be done by him. <br />
        Ans: The boy was seen crying by Rahul. <br />
        Ans: Fish is going to be caught by him. <br />
        Ans: The brave are favoured with fortune. <br />
        Ans: They were asked their name by me. <br />
        Ans: The pen writes well. <br />
        Ans: The authority will take steps. <br />
        Ans: The Romans did not build Rome in a day. <br />
        Ans: Let a balanced diet be eaten. <br />
        Ans: The man is helped by himself. <br />
        Ans: The lion is called the king of beasts. <br />
        Ans: He was seen to do it by me. <br />
        Ans: The poor are often helped by <br />
      </div>
      {/* Exercise */}
      <div className="pt-4 text-lg md:text-xl">
        <h3 className="font-bold text-green-400">
          Change the following sentences into passive
        </h3>

        <div className="">
          <h2>Voice Self Assessment (Assertive Sentences)</h2>
          <ol className="list-decimal list-inside">
            {assertiveSentences.map((sentence, index) => (
              <li key={`assertive-${index}`}>{sentence}</li>
            ))}
          </ol>

          <h2 className="py-5">Voice Self Assessment (Imperative Sentences)</h2>
          <ol className="list-decimal list-inside">
            {imperativeSentences.map((sentence, index) => (
              <li key={`imperative-${index}`}>{sentence}</li>
            ))}
          </ol>
        </div>

        {/* Exercise */}
        <div className="pb-10">
          <h3 className="font-bold mt-4 text-green-400">
            Change the following sentences into active
          </h3>
          <ol className="list-decimal list-inside mt-2">
            <li>
              Water hyacinths have been used to make all these beautiful things.
            </li>
            <li>The piece of land was chosen for three reasons.</li>
            <li>A magazine was being read by Mrs. Salam.</li>
            <li>All our lovely young plants have been eaten.</li>
            <li>This song was written by Mr. Grasshopper.</li>
            <li>The soil must be made fertile by us.</li>
            <li>The eggplants weren’t eaten by animals.</li>
            <li>She was being introduced to Mrs. Green.</li>
            <li>The students were showed his list by Mr. Ahmed.</li>
            <li> Four actors and three actresses will be needed by us.</li>
            <li>Has a play been written by Mr. Ahmed?</li>
            <li>He was caught by the ghost?</li>
            <li>He should be taught a good lesson.</li>
            <li>He must be stopped.</li>
            <li>A flood was experienced by Hans.</li>
            <li>What will be eaten tonight by you?</li>
            <li>Let your things be taken off.</li>
            <li>Let the torches be focused.</li>
            <li>He was recognized by everyone.</li>
            <li>Has a play ever been seen by you?</li>
            <li>The students were taught a lot by Mr. Ahmed's play.</li>
            <li>Frankel's spell can be used by me for housework.</li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Voice;
