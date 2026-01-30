import {
  Accordion,
  AccordionContent,
  AccordionPanel,
  AccordionTitle,
} from "flowbite-react";

const Narration = () => {
  return (
    <div className="px-3 md:w-[65%] mx-auto ">
      <div className="py-20 md:py-40 overflow-hidden">
        <h1 className="text-center text-green-400 animate-smooth-ping">
          Narration
        </h1>
        <h3 className="text-center">Narration</h3>
      </div>

      <div className="py-5">
        <Accordion>
          {/* Steps */}
          <AccordionPanel>
            <AccordionTitle>Steps</AccordionTitle>
            <AccordionContent className="p-2 md:p-5">
              <div className="mb-2 dark:text-gray-400 text-lg md:text-xl">
                We will learn Narration by 3 steps -
                <p className="">
                  * Basic Discussion <br />
                  * Sentence Narration <br />* Passage Narration
                </p>
              </div>
            </AccordionContent>
          </AccordionPanel>

          {/* basic */}
          <AccordionPanel>
            <AccordionTitle>Basic</AccordionTitle>
            <AccordionContent className="p-2 md:p-5">
              <div className="mb-2 dark:text-gray-400 text-lg md:text-xl">
                Basic Discussion : <br />
                ◼◻ Narration/ Speech মনে উক্তি। একজন বক্তার বক্তব্য ব্যক্ত করার
                উপায়কে Narration/Speech বলে। <br />
                <br />
                Narration/Speech দুই প্রকার -
                <br />
                Direct Speech ( প্রত্যক্ষ উক্তি )
                <br />
                Indirect Speech ( পরোক্ষ উক্তি )
                <br />
                <br />
                ◽◾ Direct Speech - বক্তার দ্বারা বলা হুবহু বক্তব্য যা সে নিজের
                মুখ দিয়ে বলে তা হলো Direct Speech
                <br />
                ◽◾ Indirect Speech - বক্তার বক্তব্যের সারাংশ যা অন্য কেউ তার
                মত করে বলে তখন তা Indirect Speech. <br />
                <br />
                এটাতো গেলো Narration এর ভাষাগত পরিচয়। <br />
                কিন্তু Narration ভালোভাবে শিখতে হলে নিম্নোক্ত ছয়টি টপিক
                ভালোভাবে বুঝতে হবে:-
                <br />
                * Reporting Verb & Reported Speech <br />
                * Basic Sentence Structure <br />
                * Tense Changing <br />
                * Person Changing: Subject-Objective-Possessive <br />
                * Adverbial Phrases
                <br />
                <br />
                1. Reporting Verb & Reported Speech : <br />
                Direct Speech এর দুইটি অংশ থাকে। একটিকে Reporting Verb এবং
                অন্যটিকে Reported Speech বলে। <br />▫ Inverted Comma এর বাহিরের
                Verb কে বলে Reporting Verb.
                <br /> ▫ Inverted Comma এর ভিতরের Sentence কে বলে Reported
                Speech.
                <br /> Ex. He said to me, “You are involved in this matter.”
              </div>
            </AccordionContent>
          </AccordionPanel>

          {/* rule 1 Tense changing */}
          <AccordionPanel>
            <AccordionTitle>Rule-1: Tense/ Verb Changing</AccordionTitle>
            <AccordionContent className="p-2 md:p-5">
              <div className="dark:text-gray-400 text-lg md:text-xl">
                <div className="">
                  {/* <h2>Rule-1: Tense Changing</h2> */}
                  <p>
                    সাধারণত Reporting Verb(বা ইনভারটেড কোমার বাইরের বাক্যের Verb
                    টি) যদি V2 থাকে তাহলে Reported Speech এর (বা ইনভারটেড কোমার
                    ভেতরের বাক্যের) Verb/ helping verb টিকে পরিবর্তন করতে হয় বা
                    Past Tense করতে হয়।
                    <br />
                    যেমন:
                  </p>
                  <p>Am, is, are - থাকলে - Was, Were হয়</p>
                  <p>Was, were - থাকলে - had been হয়,</p>
                  <p>Have, has - থাকলে - had হয়,</p>
                  <p>will - থাকলে - would হয়,</p>
                  <p>Shall - থাকলে - Should হয়,</p>
                  <p>Can - থাকলে - could হয়,</p>
                  <p>may - থাকলে - might হয়,</p>
                  <p>Do not, does not - থাকলে - did not হয়,</p>
                  <br />
                  <p>
                    <strong>Note:</strong>
                    <br /> ### উপরের সাহায্যকারি Verb গুলোর পরে মুল Verb থাকলে
                    সেই Verb এর কোন পরিবর্তন হয় না ।
                    <br />
                    <br />
                    ### যদি উপরের সাহায্যকারি Verb গুলো না থাকে তাহলে মুল Verb
                    এর পরিবর্তন হয়।
                    <br /> যেমন:
                  </p>
                  <p>V1 - থাকলে V2 হয়,</p>
                  <p>V2 - থাকলে V2 হয় অথবা had + V3 হয়,</p>
                  যেমনঃ
                  <br />
                  Q. He said to me, "I have done my duty according to her
                  order". <br />= He said to me
                  <strong> that </strong> he
                  <strong> had </strong> done <strong> his</strong> duty
                  according to her order.
                  <br />
                  <p className="py-5">
                    <strong>Note:</strong> দ্বিতীয় বাক্যের (Reported Speech)
                    ing যুক্ত Verb এবং to এর পরে Verb এর কোন পরিবর্তন হয় না।
                  </p>
                </div>
              </div>
            </AccordionContent>
          </AccordionPanel>

          {/* rule 2 */}
          <AccordionPanel>
            <AccordionTitle>Rule-2: Person Changing</AccordionTitle>
            <AccordionContent className="p-2 md:p-5">
              <div className="dark:text-gray-400 text-lg md:text-xl">
                <div className="text-start">
                  {/* <h2 className="">Person Changing:</h2> */}
                  <p className="text-start">
                    দ্বিতীয় বাক্যের (অর্থাৎ Reporting Speech এর) Pronoun এর
                    পরিবর্তন হয়। <br /> অর্থাৎ- <br />
                    ### I - me - my/ We - us - our প্রথম বাক্যের Subject অনুসারে
                    পরিবর্তন হবে।
                    <br />
                    যেমনঃ
                    <br />
                    Q. He said to me, "I have done my duty according to her
                    order". <br />= He said to me tha <strong>he </strong>
                    had done <strong> his </strong> duty according to her order.
                    <br />
                    <br />
                    ### You - you - your প্রথম বাক্যের Object - অনুসারে পরিবর্তন
                    হয়। <br />
                  </p>

                  <p className="">
                    যেমনঃ
                    <br />
                    Q. He said to me, "You had done your duty." <br />= He said
                    to me that <strong> I </strong>had done <strong> my</strong>{" "}
                    duty according to her order.
                  </p>

                  <p className="py-3 text-rose-500 font-bold">
                    ### উক্ত Pronoun-গুলো ছাড়া আন্য কোন Pronoun পরিবর্তন হয় না।
                  </p>
                  <p className="py-2">
                    ### Subject/ Pronoun এর পরিবর্তন বুঝার জন্য নিচের টেবিলটি
                    মনে রাখতে হবেঃ
                  </p>
                  {/* Subject-Objective-Possessive  */}
                  <table className="min-w-[300px] dark:border-slate-400">
                    <thead>
                      <tr>
                        <th>Subject</th>
                        <th>Object</th>
                        <th>Possessive</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>I</td>
                        <td>me</td>
                        <td>my</td>
                      </tr>
                      <tr>
                        <td>We</td>
                        <td>us</td>
                        <td>our</td>
                      </tr>
                      <tr>
                        <td>You</td>
                        <td>you</td>
                        <td>your</td>
                      </tr>
                      <tr>
                        <td>He</td>
                        <td>him</td>
                        <td>his</td>
                      </tr>
                      <tr>
                        <td>She</td>
                        <td>her</td>
                        <td>her</td>
                      </tr>
                      <tr>
                        <td>They</td>
                        <td>them</td>
                        <td>their</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </AccordionContent>
          </AccordionPanel>

          {/* rule3 */}
          <AccordionPanel>
            <AccordionTitle>Changing adverbial phrase</AccordionTitle>
            <AccordionContent className="p-2 md:p-5 ">
              <div className="dark:text-gray-400 ">
                {/* Adverbial Clause */}
                <div className="overflow-x-auto">
                  {/* <h2 className="pb-3">Changing adverbial phrase:</h2> */}
                  <table className="min-w-full text-center text-lg">
                    <thead className="border-b bg-gray-50">
                      <tr>
                        <th className="px-3 py-2">Direct Speech</th>
                        <th className="px-3 py-2">Indirect Speech</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="px-3 py-2">Now (এখন)</td>
                        <td className="px-3 py-2">Then</td>
                      </tr>
                      <tr className="border-b bg-gray-50">
                        <td className="px-3 py-2">Here (এখানে)</td>
                        <td className="px-3 py-2">There</td>
                      </tr>
                      <tr className="border-b">
                        <td className="px-3 py-2">This (এখন)</td>
                        <td className="px-3 py-2">That</td>
                      </tr>
                      <tr className="border-b bg-gray-50">
                        <td className="px-3 py-2">These (এগুলো)</td>
                        <td className="px-3 py-2">Those</td>
                      </tr>
                      <tr className="border-b">
                        <td className="px-3 py-2">Ago (আগে)</td>
                        <td className="px-3 py-2">Before</td>
                      </tr>
                      <tr className="border-b bg-gray-50">
                        <td className="px-3 py-2">It (এটি)</td>
                        <td className="px-3 py-2">It</td>
                      </tr>
                      <tr className="border-b">
                        <td className="px-3 py-2">Today (আজ)</td>
                        <td className="px-3 py-2">That day</td>
                      </tr>
                      <tr className="border-b bg-gray-50">
                        <td className="px-3 py-2">Yesterday (গতকাল)</td>
                        <td className="px-3 py-2">The previous day</td>
                      </tr>
                      <tr className="border-b">
                        <td className="px-3 py-2">Tomorrow (আগামীকাল)</td>
                        <td className="px-3 py-2">
                          The next day/The following day
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </AccordionContent>
          </AccordionPanel>

          {/* Sentence Narration */}
          <AccordionPanel>
            <AccordionTitle>Sentence Narration</AccordionTitle>
            <AccordionContent className="p-2 md:p-5">
              <div className="dark:text-gray-400 ttext-lg md:text-xl">
                <div className="">
                  <h2>Assertive Sentence:</h2>
                  <div className="rule-section">
                    <p>
                      চিনার উপায়ঃ <br />
                      ** দ্বিতীয় বাক্যটি Subject দ্বারা শুরু হয় এবং <br />
                      ** বাক্যের শেষে full stop থাকে।
                    </p>
                    <h3>পরিবর্তনের নিয়ম:</h3>
                    <p>
                      ** সাধারণত প্রথম বাক্যের (Reporting Verb এর) Say বা Said
                      এর পরিবর্তন হয় না তবে <br />
                      (i) say/ says/ said এর পরে যদি to যদি থাকে তাহলে- <br />
                      <span className="text-rose-400"># </span>Say/ says to =
                      tell করা যায়।
                      <br />
                      <span className="text-rose-400">#</span> Said to এর
                      পরিবর্তে = told করা যায়।
                      <br />
                      ** আর দ্বিতীয় বাক্যের Subject এবং Verb এর পরিবর্তন আগের
                      নিয়মে হবে। <br />
                      ** দুটি বাক্যের মাঝখানে that বসে।
                    </p>
                    <p className="pt-5">
                      Exercise <br />
                      (i) Kabir said to me, "You have done your duty properly."
                      (ii) Father said to his daughters, "The more you read, the
                      more you learn." (iii) Rahim says, "I shall not do the
                      work tomorrow." (iv) Mother said to her son, "You are not
                      attentive." (v) Mr. Khan said to Alina, "I know you and
                      your father." (vi) Kamal said to Jamal, "I met him long
                      ago." (vii) I said to him, "You do not do your duty."
                      (viii) Iqra said to me, "I was ill." (ix) Elma said to her
                      mother, "I need a pencil." (x) They said, "It is time we
                      thought about settling this matter." (xi) Keya said to me,
                      "I went to market yesterday". (xii) Shila said to Mina
                      "You are wasting your time". (xiii) Father said to me,
                      "You should behave yourself." (xiv) He said, "I was ill".
                      (xv) "I have done the work." Kabir said to me. (xvi)
                      Rahman said to his brother, "You should study regularly."
                      (xvii) "I am going to open a bank account." he said to me.
                      (xviii) He said to Shila, "You were a lazy girl." (xix)
                      Karima said to me, "I always speak the truth." (xx) Shanta
                      said, "I have got GPA-5.”
                    </p>
                  </div>

                  <div className="rule-section">
                    <h2>Interrogative Sentence:</h2>
                    <div className="">
                      <p>
                        চিনার উপায়ঃ
                        <br />
                        ** দ্বিতীয় বাক্যটি Wh/ helping verb দ্বারা শুরু হয় এবং{" "}
                        <br />
                        ** বাক্যের শেষে প্রশ্নবোধক চিহ্ন থাকে (?)।
                      </p>
                      <h3>পরিবর্তনের নিয়ম:</h3>
                      <p>
                        (i) say/ says/ said to যদি থাকে তাহলে- <br />
                        <span className="text-rose-400"># </span>Say/ says to =
                        ask হবে।
                        <br />
                        <span className="text-rose-400">#</span> Said to এর
                        পরিবর্তে = asked হবে।
                      </p>
                      <p>
                        (ii) দ্বিতীয় বাক্যটি Wh দ্বারা শুরু হলে দুই বাকের
                        মাঝখানে কিছু বসে না। <br />
                        ** কিন্তু দ্বিতীয় বাক্যটি helping verb দ্বারা শুরু হলে
                        দুই বাকের মাঝখানে if বসে
                      </p>
                      <p>
                        (iii) দ্বিতীয় বাক্যটির Verb/ helping verb আগের নিয়মে
                        পরিবর্তন হবে। তবে সাহায্যকারি verb পরিবর্তন করে Subject
                        এর পর বসাতে হয়।
                      </p>
                      <p>
                        Q. He said to me, "How are you?"
                        <br />= He asked me how I was.
                      </p>
                      <p>
                        (iv) দ্বিতীয় বাক্যের Helping Verb যদি Do/does হয় তবে
                        তা তুলে দিয়ে মুল Verb এর V<sub>2</sub> হবে। <br />
                        ** কিন্তু দ্বিতীয় বাক্যের Helping verb যদি did হয় তবে
                        তা তুলে দিয়ে মুল Verb এর V2 করা যাবে। অথবা had + V
                        <sub>3</sub> করা যাবে।
                      </p>
                      <p>
                        Q. He said, "Which book does he want?" <br />
                        He asked which book he wanted.
                      </p>
                      <p className="">
                        Exercise <br />
                        (i) Mother said to father, "Where did you go yesterday?"
                        (ii) The teacher said to me, "Which book do you want?"
                        (iii) He said to me, "Are you coming home with me?" (iv)
                        Kamal said to Jamal, "Which way did he go?" (v) Iqra
                        said to Elma, "Have you done your homework?" (vi) He
                        said, "How is your father?" (vii) He said to me, "Where
                        have you come from?" (viii) He said to me, "Do you know
                        him?" (ix) The teacher said to me, "Why did you not go
                        to school yesterday?" (x) "Do you really come from
                        China?" said the man. (xi) "What do you want?" he said
                        to me. (xii) Rana said to Rita," Do you go there?"
                        (xiii) Karim said to me, "What are do doing now?" (xiv)
                        He said to me, "When did you come there?" (xv) Rayhan
                        said to me, "Which book do you like most? (xvi) "Where
                        do you go today?" he said to me. (xvii) The boy said to
                        his friend, "How did you go there?" (xviii) The Queen
                        said to the King, "Can you tell me which are the real
                        flowers?" (xix) Shawmpa said to me, "What are you
                        studying?" (xx) He said to me, "What do you intend to do
                        with the large amount of money?”
                      </p>
                    </div>
                  </div>

                  {/* Imperative sentence  */}
                  <div className="rule-section">
                    <h2>Imperative Sentence:</h2>
                    <div className="">
                      <p>
                        চিনার উপায়ঃ <br />
                        (দ্বিতীয় বাক্যে) Verb দ্বারা বাক্যে শুরু হয় এবং
                        আদেশ/অনুরোধ/উপদেশ বোঝায়।
                      </p>
                      <h3>পরিবর্তনের নিয়ম:</h3>
                      <p>
                        (i) say/ says/ said to যদি থাকে তাহলে- <br />
                        <span className="text-rose-400"># </span>Say/ says to
                        পরিবর্তে = tell/ ask হবে।
                        <br />
                        <span className="text-rose-400">#</span> Said to এর
                        পরিবর্তে = asked/ told হবে। <br /> ** দ্বিতীয় বাক্যটি
                        to দ্বারা শুরু হবে। <br />
                        Q. He said to me, "Go home directly". <br />= He asked
                        me to Go home directly.
                      </p>
                      <p>
                        (ii) কিন্তু দ্বিতীয় বাক্যটি Let us/ Let's দ্বারা শুরু
                        হলে say, say to, said, said to এর পরিবর্তে propose(d)/
                        suggest(ed) হবে এবং Let us/ Let's উঠিয়ে Let us এর পরের
                        V1 এর সাথে ing যোগ করতে হয় <br />
                        Q. He said, "Let us/ Let's rectify ourselves". <br />=
                        He proposed rectifying themselves.
                      </p>
                      <p>
                        (ii) কিন্তু দ্বিতীয় বাক্যটি Let me/ him/ them/ her
                        দ্বারা শুরু হলে say, say to, said, said to এর পরিবর্তে
                        tell/told/wish(ed)/ request(ed)/order(ed) হবে এবং <br />
                        ** Let এর পরের Object কে Subject বানিয়ে এর পরে
                        might/might be allowed to যোগ করতে হয় <br />
                        ** মাঝখানে that বসে। <br />
                        Q. He said, "Let me play in field". <br />
                        = He told that I might play in the field. <br />= He
                        wished that I might be allowed to play in the field.
                      </p>
                      <p className="pt-5">
                        Exercise <br />
                        (i) The teacher said to the students, "Sit down." (ii)
                        The boy said to me, "Let me write a letter." (iii) The
                        teacher said to the boy, "Do not read so fast." (iv)
                        "Take off your hat," Madam said to Della. (v) He said to
                        me, "Wait until I come." (vi) Teacher said to Joy, "Read
                        this book." (vii) The master said to the servant, "Bring
                        me a glass of milk." (viii) "Let us drop the matter," he
                        said. (ix) "Hurry up," he said to his maid, "Do not
                        waste time." (x) We said, "Let us wait till the rain
                        stops." (xi) Mother said to me, "Let me do the work."
                        (xii) He said to his brother, "Always speak the truth."
                        (xiii) He said to me, "Let us go to picnic." (xiv)
                        Kamrul said to me, "Do it at once." (xv) The teacher
                        said to the students, "Never tell a lie." (xvi) He said
                        to me, "Be careful about yourself". (xvii) "Let him do
                        whatever he likes," Kajol said to jerin. (xviii) Mother
                        said to her son, "Don't quarrel with anybody." (xix) The
                        prisoner said to the judge, "Let me see the real
                        matter." (xx) The boy said, "Brothers, please help me.”
                      </p>
                    </div>
                  </div>

                  {/* Exclamatory Sentence  */}
                  <div className="rule-section">
                    <h2>Exclamatory Sentence:</h2>
                    <div className="">
                      <p>
                        চিনার উপায়ঃ <br />
                        ** Alas, hurrah দ্বারা শুরু হয়ে এদের পরে exclaimation
                        চিহ্ন থাকে এবং বাকের শেষে ফুল স্টপ থাকে। <br />
                        ** কিন্তু what, how দ্বারা শুরু হলে বাক্যের শেষে
                        Exclaimation (!) চিহ্ন থাকে।
                      </p>
                      <h3>পরিবর্তনের নিয়ম:</h3>
                      <p>
                        (i) say/ says/ said to যদি থাকে তাহলে- <br />
                        <span className="text-rose-400"># </span>Say/ says to =
                        Exclaim/ Exclaim with joy বা Exclaim with sorrow হবে।
                        <br />
                        <span className="text-rose-400">#</span> Said to এর
                        পরিবর্তে = Exclaimed/ Exclaimed with joy বা Exclaimed
                        with sorrow হবে।
                      </p>
                      <p>(ii) বাক্যের মাঝখানে that হবে।</p>
                      <p>
                        (iii) Alas, hurrah দ্বারা শুরু হলে এগুলো উঠিয়ে
                        subject/verb আগের নিয়মে পরিবর্তন হবে।
                      </p>
                      <p>
                        Q. "Alas! I am undone", he said.
                        <br />= He exclaimed with sorrow that he was undone.
                      </p>
                      <p>
                        (iii) what how দ্বারা শুরু হলে এগুলো উঠিয়ে বাক্যটিকে
                        Assertive বাক্য বানাতে হবে।
                      </p>
                      <p>
                        Q. He said to me, "How nice your handwriting is!"
                        <br />= He exclaimed with joy that my handwriting was
                        very nice.
                      </p>
                      <p className="">
                        Exercise <br />
                        (i) He said, 'How time does fly!" (ii) He said, "Alas!
                        Our foes are too strong." (iv) Teacher said to the girl,
                        "What a beautiful girl you are!" (v) He angrily are!"
                        (vi) He said, "What a fool you are!" (vii) Rashed said,
                        "How charming (iii) He said, "How cruel he was!" said,
                        "What a stupid fellow you the picture is!" (viii) Rudro
                        said, "Alas! I am undone!" (ix) Pias said, "Hurrah! We
                        won the match!" (x) Pinky said, "What an honest man he
                        is!”
                      </p>
                    </div>
                  </div>

                  {/* <!-- Optative sentence --> */}
                  <div className="rule-section">
                    <h2>Optative Sentence:</h2>
                    <div className="">
                      <p>
                        চিনার উপায়ঃ <br />
                        দ্বিতীয় বাক্যে May দ্বারা শুরু হয় এবং বাকের শেষে ফুল
                        স্টপ থাকে।
                      </p>
                      <h3>পরিবর্তনের নিয়ম:</h3>
                      <p>
                        (i) say/ says/ said to যদি থাকে তাহলে- <br />
                        <span className="text-rose-400"># </span>Say/ says to =
                        Pray/ wish হবে।
                        <br />
                        <span className="text-rose-400">#</span> Said to এর
                        পরিবর্তে = Prayed/ wished হবে।
                        <p>
                          (ii) দ্বিতীয় বাক্যের May কে might করতে হবে এবং
                          subject এর এর পরে বসাতে হবে
                        </p>
                      </p>
                      <p>(iii) মাঝখানে that হবে।</p>
                      <p>
                        Q. The teacher said, "May Allah help you." = The teacher
                        prayed that Allah might help me.
                      </p>
                      <p className="">
                        Exercise <br />
                        (i) Helal said, "Long live our President." (ii) Saif
                        said, "May Bangladesh live long." (iii) "May Allah help
                        you," the teacher said to the student. (iv) Father said
                        to me, "May you live long." Father said to me, "May you
                        be happy in your life." (vi) He said to me, "May you
                        help me." (vii) The man said to me, "May you shine in
                        life." (viii) My friend said to me, "May you be happy."
                        (ix) The teacher said to the students, "May you be
                        happy." (x) I said to my students, "May Allah shower all
                        his blessings on you.”
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionPanel>

          {/* Passage Narration */}
          <AccordionPanel>
            <AccordionTitle>Passage Narration</AccordionTitle>
            <AccordionContent className="p-2 md:p-5">
              <div className=" dark:text-gray-400">
                <div className="tableSection overflow-x-auto">
                  <h2 className="text-center md:text-start">
                    Passage Narration
                  </h2>
                  <table className="min-w-[800px] md:w-full table-auto dark:border-slate-400 text-lg md:text-xl">
                    <thead>
                      <tr>
                        <th>Description</th>
                        <th>Examples</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          কোন বক্তার পর পর একাধিক উক্তি (Speech) থাকলে ২য় বা
                          তৎপরবর্তী উক্তিগুলির ক্ষেত্রে added, further added,
                          also said, again said ইত্যাদি ব্যবহার করতে হয়। কিন্তু
                          ২টি interrogative পর পর থাকলে দ্বিতীয়টির ক্ষেত্রে
                          again/also asked হয়।
                        </td>
                        <td>
                          <strong>Direct:</strong> He said, "I can chop wood
                          today. I shall come again tomorrow."
                          <br />
                          <strong>Indirect:</strong> He said that he could chop
                          some wood that day. He added that he would come again
                          the next day.
                        </td>
                      </tr>
                      <tr>
                        <td>
                          Reported Speech – এ "Yes" or "No” থাকলে Indirect করার
                          সময় যথাক্রমে replied in the affirmative that এবং
                          replied in the negative that ব্যবহার করতে হয়।
                        </td>
                        <td>
                          <strong>Direct:</strong> Jhumu said to Mitu, "Are you
                          going to Chittagong tomorrow?"
                          <br />
                          "No, I have changed my decision." said Mitu.
                          <br />
                          <strong>Indirect:</strong> Jhumu asked Mitu if she was
                          going to Chittagong the next day. Mitu replied in the
                          negative that she had changed her decision.
                        </td>
                      </tr>
                      <tr>
                        <td>
                          Direct Speech-এ" Sir" থাকলে Indirect Speech – এ "Sir"
                          এর পরিবর্তে respectfully ব্যবহার করতে হয়।
                        </td>
                        <td>
                          <strong>Direct:</strong> "Yes, sir," she replied, "I
                          have done my duty."
                          <br />
                          <strong>Indirect:</strong> She replied respectfully in
                          the affirmative that she had done her duty.
                        </td>
                      </tr>
                      <tr>
                        <td>
                          Direct Speech-এ by Allah, by Jove Allah/Jove/Good
                          ইত্যাদি ব্যাবহার করতে হয়। by God, by my life ইত্যাদি
                          থাকলে Swearing by by God,
                        </td>
                        <td>
                          <strong>Direct:</strong> "By Allah," he replied, "I
                          will not leave this house."
                          <br />
                          <strong>Indirect:</strong> Swearing by Allah, he
                          replied that he would not leave that house.
                        </td>
                      </tr>
                      <tr>
                        <td>
                          Direct Speech-এ Assertive Sentence –এর শেষে প্রশ্নবোধক
                          চিহ্ন থাকলে Indirect করার সময় Reporting Verb এর পূর্বে
                          Being surprised লিখতে হয় এবং Reporting Verb টিকে
                          ask/asked দিয়ে পরিবর্তন করতে হয়।
                        </td>
                        <td>
                          <strong>Direct:</strong> She said to me "You have
                          remembered how she looked all these years?"
                          <br />
                          <strong>Indirect:</strong> Being surprised, she asked
                          me if I had remembered how she had looked all those
                          years.
                        </td>
                      </tr>
                      <tr>
                        <td>
                          Direct: Good Morning/ Good Evening/ Happy Christmas:
                        </td>
                        <td>
                          <strong>Direct:</strong> I said to him, "Good
                          morning."
                          <br />
                          <strong>Indirect:</strong> I wished him good morning.
                          <br />
                          <strong>Direct:</strong> He said to me "Thank you".
                          <br />
                          <strong>Indirect:</strong> He thanked me.
                          <br />
                          <strong> Direct:</strong> I said to him, "Good night."
                          <br />
                          <strong>Indirect:</strong> I bade him good night.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                {/* Exercise */}
                <div className="">
                  <p className="pt-10">
                    Board Questions with Answers <br />
                    1. Change the narrative style by using indirect speeches:{" "}
                    <br />
                    "I will pay for it." he said. "I broke it. I brought the axe
                    down careless." "But no one hits accurately every time." I
                    told him. "The fault was in the wood of the handle. I will
                    see the man from whom i bought it "Thanks" he said. J. B.
                    251 <br />
                    Ans: He told me that he would pay for that. He added that he
                    had broken that because he had brought the axe down
                    careless. I told him that but no one hits accurately every
                    time. I added that the fault had been in the wood of the
                    handle. I also said that I would see the man from whoin I
                    had bought it. He thanked me <br />
                    2. Change the narrative style by using indirect speeches:{" "}
                    <br />
                    "Have you seen your mother, Jerry?" "I see her in every
                    summer. She sends for me". The authoress wanted to cry out.
                    "Why are you not with her? How can she let you go away
                    again?" He said. "She comes up here from Mannville whenever
                    she can. She does not have a job now" Syl. B. '251 <br />
                    Ans: The authoress asked Jerry if he had seen his mother.
                    Jerry replied that he (J) saw his mother in every summer and
                    added that she (his mother) sent for him. The authoress
                    wanted to cry out and asked why he was not with her. She (A)
                    also asked how she (his mother) could let him go away again.
                    Jerry replied that his mother came up there from Mannville
                    whenever she could and added that she (his mother) did not
                    have a job then. <br />
                    <br />
                    3. Change the narrative style by using indirect speeches:{" "}
                    <br />
                    "Why are you putting up the food in your pocket, Sir? Why
                    don't you eat?" asked the noble man. "I am doing the right
                    thing. My dress deserves these rich dishes." replied Sheikh
                    Saadi "I don't understand what you mean to say" said the
                    noble man "And I'm sorry." Ans: The noble man respectably
                    asked Sheikh Saadi why he (s) was putting up the food in his
                    (s) pocket [Dinaj. B. '25] <br />
                    and also asked why he(s) didn't eat. Sheikh saadi replied
                    that he (s) was doing the right thing and added that his (s)
                    dress deserved those rich dishes. The noble man said that he
                    (n) didn't understand what he (s) meant to say and added
                    that he was sorry. <br />
                    <br />
                    4. Change the narrative style be using indirect speeches:{" "}
                    <br />
                    "Why are your children crying, my daughter?" "They have been
                    starving." said the woman. "Have you none else in the
                    world?" "My husband died some months ago. He left them
                    neither money nor any property. So, they are in great
                    distress. They have to starve sometimes." "What a pity it
                    is!" said the Caliph. [R. B. '24] <br />
                    Ans: Addressing the women as his daughter, the caliph asked
                    her why her children were crying. The woman answered that
                    they had been starving. The caliph again asked his if she
                    had none else in the world. Then the woman replied that her
                    husband had died some months ago and added that he had left
                    them neither money nor any property. She also said that so,
                    they were in great distress and added that they had to
                    starve sometimes. Then the caliph exclaimed with grief and
                    said that it was a great pity. <br />
                    5. Change the narrative style by using indirect speeches:{" "}
                    <br />
                    The old man said, "Can you give me some food? I have been
                    starving for two days." The maid said, "Why do you beg?
                    Can't you work?" "No, I'm unable to work," said the man. The
                    maid again said, "Don't you have anyone to look after you?"
                    "No, I have none on this earth who can take care of me",
                    said the old man. <br />
                    [Β. Β. '24] <br />
                    Ans: The old man asked the maid if she could give him some
                    food. He added that he had been starving for two days. The
                    maid asked the old man why he begged. She also asked if he
                    couldn't work. The old man replied in the negative and said
                    that he was unable to work. The maid again asked if he
                    didn't have anyone to look after him. Then the old man
                    replied negatively and said that he had none on the earth
                    who could take care of him. <br />
                    6. Change the narrative style by using indirect speeches:{" "}
                    <br />
                    The class teacher said to the students, "Do you like to go
                    for study tour?" "Yes," said all the students. Then he said,
                    "Take permission of your parents." One of the students said,
                    "Let us go to Cox's Bazar." The Principal said, "May your
                    journey be safe and sound." <br />
                    [Dinaj. B. '24) <br />
                    Ans: The class teacher asked the students if they liked to
                    go for study tour. All the students replied in the
                    affirmative and said that they liked to go for study tour.
                    Then the teacher advised the students to take permission of
                    their parents. One of the students proposed to the teacher
                    that they should go to Cox's Bazar. Then the principal
                    wished that their journey might be safe and sound. <br />
                    7. Change the narrative style by using indirect speeches:{" "}
                    <br />
                    The king said to the astrologer, "How long do you want to
                    live? For you will be hanged very soon." Looking at the sky
                    the astrologer said, "My Lord, the positions of the stars
                    declare that I'll die only a week before your Majesty. Good
                    bye." The king turned pale and ordered his courtiers, "Drive
                    this wretch away and never allow him to come for disturbing
                    peace." <br />
                    My. B. '24) <br />
                    Ans: The king asked the astrologer how long he (A) wanted to
                    live and added that he (A) would be hanged very soon.
                    Looking at the sky, the astrologer addressed the king as his
                    (A) Lord and said that the positions of the starts declared
                    that he (A) would die only a week before his (k) Majesty.
                    Then the astrologer bade him (K) good bye. The king turned
                    pale and ordered his courtiers to drive that wretch away and
                    never allow him to come for disturbing peace. <br />
                    8. Change the narrative style be using indirect speeches:{" "}
                    <br />
                    "Where will you get admission after your HSC Examination? Do
                    you have any choice?" said the teacher to Susmita. "I'm not
                    yet sure what I have to do because everything depends on my
                    result." "You should have a choice. Be positive and
                    optimistic." <br />
                    [D. B. '231 <br />
                    Ans: The teacher asked Susmita where she would get admission
                    for her HSC Examination and if she had any choice. Susmita
                    replied that she was not yet sure get about what she had to
                    do because everything depended on her result. The teacher
                    encouraged her to have a choice and to remain positive and
                    optimistic. <br />
                    9. Change the narrative style be using indirect speeches:{" "}
                    <br />
                    "I can chop some wood today," said Jerry. "But I have a boy
                    coming from the orphanage." "I am the boy." "You? But you
                    are small." "Size does not matter, chopping wood," said
                    Jerry. "Some of the big boys don't chop wood. I've been
                    chopping wood for a long time," said Jerry to the writer.{" "}
                    <br />
                    [R. B. '231 <br />
                    Ans: Jerry said that he (J) could chop some wood that day.
                    The writer objected that she had a boy coming from the
                    orphanage. Jerry replied that he (J) was the boy. Being
                    surprised, the writer asked if it was he (J) and said that
                    he (J) was small, Jerry told that size does not matter
                    chopping wood and added that some of the big boys did not
                    chop wood. Jerry further said that he had been chopping wood
                    for a long time. <br />
                    <br />
                    10. Change the narrative style be using indirect speeches:{" "}
                    <br />
                    "What's a puppet show?" Mita said to her father. Father
                    said, "Let's go inside and you can see yourself." Inside the
                    tent Mita said, "How strange! A doll is dancing and talking"
                    Father said "A man behind the screen is moving the doll. Do
                    you understand who is talking?" <br />
                    [C. B. '23] <br />
                    Ans: Mita asked her father what a puppet show was. Her
                    father suggested that they should go inside and she could
                    see herself inside the tent. Mita was astonished and replied
                    that it was very strange that a doll was dancing and
                    talking. Her father replied that a man behind the screen was
                    moving the doll and asked her if she understood who was
                    talking. <br />
                    11. Change the narrative style of the passage by using
                    indirect speeches: <br />
                    "How is your mother, Habib?" said Fahim. "She is better
                    today," said Habib. "Did you take her to any doctor?" "Yes,
                    and the doctor has x-rayed her." "Now, take a good care of
                    her and ensure all medications as prescribed," said Fahim.
                    "Of course, thank you a lot." said Habib. <br />
                    Β. Β. '23] <br />
                    Ans: Fahim asked Habib how his (H) mother was. Habib replied
                    that she was better that day. Fahim again asked if he (H)
                    had taken her to any doctor. Habib replied affirmatively and
                    told that the doctor had X-rayed. Fahim suggested Habib to
                    take a good care of her then and to ensure all medications
                    that had been prescribed. Habib assured him (F) and thanked
                    him (F) a lot. <br />
                    <br />
                    12. Change the narrative style by using indirect speeches: 7{" "}
                    <br />
                    "What's your dream? Do you have any dream?" said Zayed.
                    "Yes, I have a dream. My dream is a full plate of rice."
                    said Robi, "Come with me. I am going to materlalize your
                    dream." "How kind you are!" said Robi. <br />
                    Ctg. B. '23] <br />
                    Ans: Zayed asked Robi what his (R) dream was and also asked
                    if he (R) had any dream. Robi replied in the affirmative and
                    added that he (R) had a dream. Robi further added that his
                    (R) dream was a full plate of rice. Then Zayed told Robi to
                    go with him (Z) and said that he (2) was going to
                    meterialize his (R) dream. Robi exclaimed with wonder that
                    he (Z) was very kind. <br />
                    13 . Change the narrative style be using indirect speeches;{" "}
                    <br />
                    "Follow my example," she said as we shook hands, "and never
                    eat more than one thing for luncheon." "Iוויז do better than
                    that," I retorted. "I'll eat nothing for dinner tonight."
                    "Humorist! you're quite a humorist," she cried gaily,
                    jumping into a cab. <br />
                    [D. B. '22] <br />
                    Ans: As we shook hands, she advised me to follow her example
                    and never to eat more than one thing for luncheon. Then I
                    retorted that I would do better than that. I again/ further/
                    also told her that I would eat nothing for dinner that
                    night. Jumping into a cab, she cried gaily and called me a
                    humorist, <br />
                    <br />
                    14. Change the narrative style by using indirect speeches:{" "}
                    <br />
                    "Why are you crying? Do you have any problem?" asked the
                    passer-by. "I am crying because I have none to look after
                    me," said the street child. "Are you hungry?" "Yes, I am,"
                    said the boy. <br />
                    [J. B. '221 <br />
                    Ans: The passer-by asked the street child why he (s) was
                    crying. He (p) again asked him (s) if he (s) had any
                    problem. The street child replied that he was crying because
                    he had none to look after him. Then the passer-by further
                    asked the child if he (s) was hungry. The street child
                    replied in the affirmative and said that he was hungry.{" "}
                    <br />
                    <br />
                    32. Change the narrative style by using indirect speeches:{" "}
                    <br />
                    "Could I help you, Sir?" said the receptionist. The man
                    replied, "Sure, I want to meet the Managing Director of the
                    company." The receptionist said, "Do you have an
                    appointment?" "Yes, I have." He said. "Wait for a while,"
                    said the receptionist. <br />
                    [Syl. B. '22] <br />
                    Ans: The receptionist respectfully asked the man if he (R)
                    could help him (M). The man replied in the affirmative and
                    said that he (M) wanted to meet the managing director of the
                    company. The receptionist then asked if he (M) had an
                    appointment. He (M) replied in the affirmative and said that
                    he (M) had an appointment. Then the receptionist told him
                    (M) to wait for a while. <br />
                    34. Change the narrative style by using indirect speeches:{" "}
                    <br />
                    "Where is the cattle which these people graze and where are
                    the fields they plough, uncle?" he asked, turning to Daya
                    Ram, "They have no cattle and no fields here," said the
                    chaprasi, pushing his neck back to stiff uprightness "It is
                    only the rustics in the villages who graze cattle and plough
                    the land," he said. <br />
                    Dinaj. B. '22] <br />
                    Ans: Addressing as uncle the boy asked Daya Ram where the
                    cattle was which those people grazed and where the field
                    were which they ploughed. Pushing his (D) neck back to stiff
                    uprightness, the chaprasi said that they had no cattle and
                    no fields there. He (C) added that it was only the rustics
                    in the villages who grazed cattle and ploughed the land.
                  </p>
                </div>
              </div>
            </AccordionContent>
          </AccordionPanel>
        </Accordion>
      </div>

      <div className="">
        {/* <!-- table of wish --> */}
        <div className="py-10 overflow-x-auto">
          <table className="min-w-[800px] table-auto dark:border-slate-400 text-lg md:text-xl">
            <thead>
              <tr>
                <th>Direct এ থাকলে</th>
                <th>Indirect এ হবে</th>
              </tr>
            </thead>
            <tr>
              <td>Good Morning/ Good Evening/ Happy Christmas:</td>
              <td>
                reporter + wished + good evening/good night/ good morning/ a
                happy Christmas
              </td>
            </tr>
            <tr>
              <td>I said to him, "Good morning."</td>
              <td>I wished him good morning.</td>
            </tr>
            <tr>
              <td>Thank you/ Curse the fog/ congratulations/ welcome:</td>
              <td>
                reporter + thanked/ cursed/ congratulated/ welcomed + listener
              </td>
            </tr>
            <tr>
              <td>He said to me "Thank you".</td>
              <td>He thanked me.</td>
            </tr>
            <tr>
              <td>Good night/ bye:</td>
              <td>reporter + bade + good night/bye</td>
            </tr>
            <tr>
              <td>I said to him, "Good night."</td>
              <td>I bade him good night.</td>
            </tr>
          </table>
        </div>

        {/* <!-- Excercise --> */}
        <div className="section my-10 text-lg md:text-xl">
          <h1 className="text-center md:text-start">Textual Exercise</h1>
          <h2 className="text-center md:text-start md:text-xl text-sm font-medium">
            Change the Following Sentences into Indirect Speech:
          </h2>
          <p>
            1. "Anwar, you're going to enjoy Nurpur High School" said Mr. Alam.
          </p>
          <p>
            2. "Do you want to use that piece of land over there?" Mr. Ahmed
            said to the students.
          </p>
          <p>
            3. Mr. Ahmed said to the students, "What do you know about
            gardening?"
          </p>
          <p>
            4. Mr. Ahmed said to the students, "Do you know that gardening is
            very hard work?"
          </p>
          <p>
            5. Mr. Ahmed says, "Some of my className 8 students want to make a
            school garden."
          </p>
          <p>
            6. "Did you enjoy your visit to the smithy, Anwar?" said his father.
          </p>
          <p>7. "Do you like these, Sarah?" asked Mrs. Amin.</p>
          <p>8. "Rina, look at the pond!" said Luna.</p>
          <p>
            9. Rina said to Luna, "Water hyacinths look lovely but everyone
            doesn't like them."
          </p>
          <p>10. "Come with me and I'll show you" said Rina's mother.</p>
          <p>11. Rina's mother said, "Why are you looking into the water?"</p>
          <p>
            12. "Some plants are useful" said Luna, "covered with water
            hyacinths."
          </p>
          <p>
            13. Luna said to Rina, "The water's nearly covered with water
            hyacinths."
          </p>
          <p>
            14. Luna said to Rina, "My father thinks they're worse than
            useless."
          </p>
          <p>
            15. Rina's mother said, "Water hyacinths can be made into
            fertilizer."
          </p>
          <p>
            16. "Come and look at the vegetables in my garden, Luna", said Mrs.
            Rehana Salam.
          </p>
          <p>
            17. Mrs. Rehana said to Rina and Luna, "Sit down and look at some of
            these pictures."
          </p>
          <p>
            18. "Did Aesop read the stories from books?" Klishan asked Mrs.
            Amin.
          </p>
          <p>
            19. "Anwar said to Mrs. Amin, "What kind of stories did Aesop tell?"
          </p>
          <p>20. "Do you know what fables are?" Mrs. Amin said to Anwar.</p>
          <p>
            21. "Do you want to use that piece of land?" Mr. Ahmed said to his
            students.
          </p>
          <p>22. Mr. Salam said, "Thank you, Mrs. Amin Ahmed."</p>
          <p>
            23. "Rina and Luna, come and look at the vegetables in my garden,
            Luna."
          </p>
          <p>24. Rupal said, "Ah! How happy I am now."</p>
          <p>
            25. Anwar said, "I am going to write some names down in my
            notebook."
          </p>
          <p>26. Anwar said to his father, "Don't worry."</p>
          <p>27. Frankel said to himself, "I must check it."</p>
          <p>
            28. Mrs. Amin said to her students, "Can any of you give me another
            example of honesty?"
          </p>
          <p>
            29. "Why do you work so hard when there is plenty of food to eat?"
            Mr. Grasshopper said to Mr. Ant.
          </p>
          <p>
            30. "Can we help Mr. Grasshopper, dear?" Mr. Ant said to his wife.
          </p>
          <p>
            31. "You are sure about the future, Mr. Ant" said Mr. Grasshopper.
          </p>
          <p>
            32. Frankel said to Hans, "A little learning is a dangerous thing."
          </p>
          <p>33. "We have worked for one hour and a half," said Anwar.</p>
          <p>
            34. Mrs. Salam said, "Don't forget about the water hyacinth, Luna."
          </p>
          <p>35. Mrs. Salam said, "What a sunny day it is!"</p>
          <p>36. Mr. Grasshopper said, "These mangoes don't taste sweet."</p>
          <p>37. Mrs. Salam said, "Come along, Rina."</p>
          <p>
            38. Anwar thought to himself, "I will discuss my feelings with my
            mother sometime."
          </p>
          <p>
            39. "What are all those people looking at, Anwar?" asked Kashem.
          </p>
          <p>40. Anwar said to Kashem, "Let's go and see."</p>
          <p>
            41. "Hello, Anwar," said Mrs. Salam, "Why have you been running?"
          </p>
          <p>42. "Shall we go and help her, Mrs. Salam?" Anwar said.</p>
          <p>43. Mrs. Salam said, "Yes, you will go and help her."</p>
          <p>44. "Have you ever been to Dhaka, Kashem?" Anwar said.</p>
          <p>45. "Don't worry," Rina's mother said to her.</p>
          <p>46. "Look at your grandmother," Rina's mother said to her.</p>
          <p>47. Rina's grandmother said, "People can fall over at any age."</p>
          <p>
            48. Mrs. Rehana Salam said to Rina, "If we went early, we could help
            them."
          </p>
          49. "Yes, I think so," Mrs. Rehana Salam replied.
          <br /> 50. Mrs. Murshed said to the guests. "I want you all to enjoy
          yourselves."
          <br /> 51. Salma said," Was she there?"
          <br /> 52. "Would you like some tea?" Salma asked Mrs. Green. <br />{" "}
          53. Mrs. Green said, "My husband and I are on holiday in Bangladesh."
          <br /> 54. Ruplal said. "I don't want to stay here one more day."{" "}
          <br /> 55. Ruplal said. "Ah! How happy I am now."
          <br /> 56. Ruplal shouted, "Go away and leave me alone."
          <br /> 57. Ruplal's mother said to him "Accept your responsibilities."{" "}
          <br /> 58. The six blind men said, "Let's go and find out."
          <br /> 59. The teacher said to the blind men, "Follow me and you will
          find out the elephant." <br /> 60. The blind men said. "We are going
          to learn something." <br /> 61. Frankel said, "There is no need to
          clean the laboratory today, Hans."
          <br /> 62. Frankel said to Han, "Now let's wash ourselves."
          <br /> 63. Frankel said to Hans. "The house is getting dirty."
          <br /> 64. Rina said, "Alas! My grandmother had an accident last
          week."
          <br /> 65. Rina said, Alas! I have broken all the eggs."
          <br /> 66. Mr. Janet said, "Alas! I have lost my bag."
          <br /> 67. Luna said, "How beautiful the water hyacinths look!."
          <br /> 68. Sarah said, "How fine the flowers arel." <br /> 69. The
          students said, "How deep they dug into the ground!"
          <br /> 70. The students said, "How nicely Mrs. Amin tells stories."{" "}
          <br /> 71. Mrs. Ayesha Amin said, "What a hard-working person Mr. Ant
          is!" <br /> 72. Mrs. Amin said to the student. "Aesop has liked to
          teach people."
        </div>
      </div>
    </div>
  );
};
export default Narration;
