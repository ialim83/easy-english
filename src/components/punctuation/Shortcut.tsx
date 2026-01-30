export const Shortcut = () => {
  const technique3Data = [
    ["Do", "Do not", "Don't"],
    ["Does", "Does not", "Doesn't"],
    ["Did", "Did not", "Didn't"],
    ["am", "am not", "ain't"],
    ["is", "is not", "isn't"],
    ["are", "are not", "aren't"],
    ["was", "was not", "wasn't"],
    ["were", "were not", "weren't"],
    ["have", "have not", "haven't"],
    ["has", "has not", "hasn't"],
    ["had", "had not", "hadn't"],
    ["shall", "shall not", "shan't"],
    ["should", "should not", "shouldn't"],
    ["will", "will not", "won't"],
    ["would", "would not", "wouldn't"],
    ["can", "can not", "can't"],
    ["could", "could not", "couldn't"],
    ["may", "may not", "mayn't"],
    ["might", "might not", "mightn't"],
    ["must", "must not", "mustn't"],
  ];

  const contractionData = [
    ["It is", "It's"],
    ["I am", "I'm"],
    ["I have", "I've"],
    ["What is", "what's"],
    ["That is", "That's"],
    ["It will", "It'll"],
    ["You are", "You're"],
    ["Let us", "Let's"],
    ["I will", "I'll"],
    ["We are", "We're"],
    ["That will", "That'll"],
    ["Is not", "Isn't"],
  ];

  return (
    <div className="h-full lg:w-1/2 mx-auto px-5 overflow-hidden">
      <div className="py-10">
        <h1 className="text-center text-3xl lg:text-5xl">Short Technique</h1>
      </div>
      <div className="">
        <div className="bg-white text-black font-sans px-6 py-8">
          {/* Title */}
          {/* <h1 className="text-3xl font-bold text-center underline mb-6">
            Punctuation
          </h1> */}

          {/* Table Section */}
          <div className="">
            <div className="w-full mb-6">
              <div className="bg-white text-[15px] border-b border-black p-2 font-semibold">
                ❖ Punctuation marks সাধারণত ১২ ধরনের। যেমনঃ
              </div>
              <table className="w-full border-collapse text-[15px]">
                <tbody>
                  <tr className="border border-black">
                    <td className="border border-black px-2 py-1 text-center w-1/12">
                      1
                    </td>
                    <td className="border border-black px-2 py-1">
                      Fullstop (.)
                    </td>
                    <td className="border border-black px-2 py-1 text-center w-1/12">
                      7
                    </td>
                    <td className="border border-black px-2 py-1">
                      Apostrophe (’)
                    </td>
                  </tr>
                  <tr className="border border-black">
                    <td className="border border-black px-2 py-1 text-center">
                      2
                    </td>
                    <td className="border border-black px-2 py-1">Comma (,)</td>
                    <td className="border border-black px-2 py-1 text-center">
                      8
                    </td>
                    <td className="border border-black px-2 py-1">Dash (–)</td>
                  </tr>
                  <tr className="border border-black">
                    <td className="border border-black px-2 py-1 text-center">
                      3
                    </td>
                    <td className="border border-black px-2 py-1">
                      Semicolon (;)
                    </td>
                    <td className="border border-black px-2 py-1 text-center">
                      9
                    </td>
                    <td className="border border-black px-2 py-1">
                      Hyphen (-)
                    </td>
                  </tr>
                  <tr className="border border-black">
                    <td className="border border-black px-2 py-1 text-center">
                      4
                    </td>
                    <td className="border border-black px-2 py-1">Colon (:)</td>
                    <td className="border border-black px-2 py-1 text-center">
                      10
                    </td>
                    <td className="border border-black px-2 py-1">
                      Parenthesis/Bracket ()
                    </td>
                  </tr>
                  <tr className="border border-black">
                    <td className="border border-black px-2 py-1 text-center">
                      5
                    </td>
                    <td className="border border-black px-2 py-1">
                      Question Mark (?)
                    </td>
                    <td className="border border-black px-2 py-1 text-center">
                      11
                    </td>
                    <td className="border border-black px-2 py-1">
                      Asterisk (*)
                    </td>
                  </tr>
                  <tr className="border border-black">
                    <td className="border border-black px-2 py-1 text-center">
                      6
                    </td>
                    <td className="border border-black px-2 py-1">
                      Exclamation Mark (!)
                    </td>
                    <td className="border border-black px-2 py-1 text-center">
                      12
                    </td>
                    <td className="border border-black px-2 py-1">
                      Question mark/Inverted comma (“ ”)
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="w-full mb-6">
              <div className="bg-white text-[15px] border-b border-black p-2 font-semibold">
                ✔️ এই ১২ টি Punctuation marks এর মধ্যে বারবার পরীক্ষাই আসে 6
                ধরনের। যেমনঃ
              </div>
              <table className="w-full border-collapse text-[15px]">
                <tbody>
                  <tr className="border border-black">
                    <td className="border border-black px-2 py-1 text-center w-1/12">
                      1
                    </td>
                    <td className="border border-black px-2 py-1">
                      Fullstop (.)
                    </td>
                    <td className="border border-black px-2 py-1 text-center w-1/12">
                      4
                    </td>
                    <td className="border border-black px-2 py-1">
                      Apostrophe (’)
                    </td>
                  </tr>

                  <tr className="border border-black">
                    <td className="border border-black px-2 py-1 text-center">
                      2
                    </td>
                    <td className="border border-black px-2 py-1">Comma (,)</td>
                    <td className="border border-black px-2 py-1 text-center">
                      5
                    </td>
                    <td className="border border-black px-2 py-1">
                      Question Mark (?)
                    </td>
                  </tr>

                  <tr className="border border-black">
                    <td className="border border-black px-2 py-1 text-center">
                      3
                    </td>
                    <td className="border border-black px-2 py-1">
                      Exclamation Mark (!)
                    </td>
                    <td className="border border-black px-2 py-1 text-center">
                      6
                    </td>
                    <td className="border border-black px-2 py-1">
                      Inverted comma (“ ”)
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Technique Section */}
          <div className="">
            <div className="text-center font-semibold mb-2">
              মাত্র তিনটি Rule এর মাধ্যমে Punctuation Complete
            </div>
            {/* tech 1 */}
            <div className="border border-black p-3 mb-6">
              <h2 className="font-bold text-center underline mb-3">Rule - 1</h2>
              <div className="">
                <img src="/Punctuation.jpg" alt="" className="w-full h-full" />
              </div>

              {/* Notes */}
              <div className="">
                <ul className="text-[15px] list-disc pl-6 space-y-1 text-left">
                  <li>উচ্চ শব্দ + Comma + Small Letter = Excuse me, sir.</li>
                  <li>
                    উচ্চ শব্দ + Fullstop + Capital Letter = Very well. There’s
                    the axe.
                  </li>
                  <li>Really + (!) হয়। = Really! You are good.</li>
                  <li>
                    (I) সর্বদা Capital Letter হয়। = Then, I will start reading
                    newspaper.
                  </li>
                  <li>
                    সবসময় নাম বড় হাতের Letter দিয়ে শুরু হয়। = Hi, Zakir.
                  </li>
                  <li>
                    May I coming / How is your father + comma হয়। = May I come
                    in, sir?
                  </li>
                  <li>= How is your father, Rana?</li>
                </ul>
              </div>
            </div>

            {/* tech 2 */}
            <div className="border border-black p-3 mb-6 my-5">
              <h2 className="font-bold text-center underline mb-3">Rule - 2</h2>
              <div className="w-full border border-black flex items-center justify-center gap-5 ">
                <div className="w-1/2 pr-10 border-r border-black p-3">
                  <p className="">Said/ say = </p>
                  <p className="">Sighed = </p>
                  <p className="">Answered = </p>
                  <p className="">Replied = </p>
                  <p className="">Asked/ ask = </p>
                </div>
                <div className="w-1/2 ">
                  <p className="">
                    এ শব্দগুলো যদি কোন Sentence এ থাকে তাহ্লে Double inverted
                    Comma("") বসে।
                  </p>
                </div>
              </div>
              {/* Double Inverted Comma Section */}
              <div className="mt-5">
                <p className="font-semibold mb-2">
                  ❖ Double Inverted comma " " ব্যবহার
                </p>
                <p className="mb-1">1) ".........."</p>
                <p className="ml-4">"I eat rice", replied she.</p>
                <p className="ml-4">= "I eat rice", replied she.</p>

                <p className="mt-2 mb-1">2) "........." </p>
                <p className="ml-4">She replied I eat rice.</p>
                <p className="ml-4">= She replied, "I eat rice."</p>

                <p className="mt-2">
                  <span className="font-semibold">Note:</span> যদি Sentence
                  (Q-?) হয়, তাহলে শেষে (
                  <span className="font-semibold">?</span>) ব্যবহার হবে।
                </p>
                <p className="ml-4 mt-1">"Do you eat rice?" asked Kamal.</p>
              </div>
            </div>
            {/* tech 3 */}
            <div className="border border-black p-3 mb-6 my-10">
              <h2 className="font-bold text-center underline mb-3">Rule - 3</h2>
              <table className="w-full border border-collapse text-center text-sm">
                <tbody>
                  {technique3Data.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                      {row.map((cell, cellIndex) => (
                        <td
                          key={cellIndex}
                          className={`border p-1 ${
                            rowIndex === 0 ? "font-semibold" : ""
                          }`}
                        >
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="mt-5">
                <table className="w-full border border-collapse text-sm mt-4">
                  <tbody>
                    {contractionData.map((row, index) => (
                      <tr key={index}>
                        <td className="border p-1">{row[0]}</td>
                        <td className="border p-1">{row[1]}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          
          {/* exercise */}
          <div className="">
            <div className="py-10">
              Exercise For Practice
              <br />
              Use capitals and punctuation marks where necessary in the
              following text.
              <br />
              <br />
              Exercise: 01
              <br />
              arent you going to have any said i no i never eat asparagus i know
              there are people who dont like them the fact is that you ruin your
              palate by all the meat you eat she said.
              <br />
              <br />
              Answer: “Aren’t you going to have any?” said I. “No, I never eat
              asparagus.” “I know there are people who don’t like them. The fact
              is that you ruin your palate by all the meat you eat,” she said.
              <br />
              <br />
              Exercise: 02
              <br />
              the teacher said to the girl do you think that honesty is the best
              policy yes sir i think so said the girl then learn to be honest
              from your childhood thank you sir said the girl may allah to bless
              you said the teacher
              <br />
              <br />
              Answer: The teacher said to the girl, “Do you think that honesty
              is the best policy?” “Yes, sir, think so,” said the girl. “Then
              learn to be honest from your childhood.” “Thank you sir,” said the
              girl. “May Allah bless you,” said the teacher.
              <br />
              <br />
              Exercise: 03
              <br />
              Use capitals and punctuation marks where necessary in the
              following text. [Barishal Board-2020]
              <br />
              <br />
              do not worry about a few mistakes said the teacher you can learn a
              lot through your mistakes do we learn from our mistakes asked the
              boy. <br />
              <br />
              Answer: “Do not worry about a few mistakes,” said the teacher,
              “you can learn a lot through your mistakes.” “Do we learn from our
              mistakes?” asked the boy.
              <br />
              <br />
              Exercise: 04
              <br />
              how is your father bilkis said mr rahman he is very well thank you
              bilkis replied i am glad to hear that he is in good health said mr
              Rahman
              <br />
              <br />
              Answer: “How is your father, Bilkis?” said Mr. Rahman. “He is very
              well. Thank you.” Bilkis replied. “I am glad to hear that he is in
              good health,” said Mr. Rahman.
              <br />
              <br />
              Exercise: 05
              <br />
              hello old lady what are you doing said the princess i am spinning
              a yarn around the spindle replied the old woman.
              <br />
              <br />
              Answer: “Hello, old lady, what are you doing?” said the Princess.
              “I am spinning a yarn around the spindle,” replied the old woman.
              <br />
              <br />
              Exercise: 06
              <br />
              would you please tell me one reason of air pollution yes the smoke
              from our household activities vehicles factories etc is mainly
              causing air pollution
              <br />
              <br />
              Answer: “Would you please tell me one reason of air pollution?”
              “Yes, the smoke from our household activities, vehicles, factories
              etc. is mainly causing air pollution.
              <br />
              <br />
              Exercise: 07
              <br />
              have you heard the name of alexander asked mr ahmed no sir razu
              replied how strange it is said he will you tell me about alexander
              please well he was the great king of macedonia
              <br />
              <br />
              Answer: “Have you heard the name of Alexander?” asked Mr. Ahmed.
              “No sir.” Razu replied. “How strange it is!” said he. “Will you
              tell me about Alexander, please?” “Well, he was the great king of
              Macedonia.” <br />
              <br />
              Exercise: 08
              <br />
              go to bed now mother said you can complete your assignment in the
              morning no mom ill finish it now
              <br />
              <br />
              Answer: “Go to bed now,” Mother said. “You can complete your
              assignment in the morning. “No, Mom! I’ll finish it now.”
              <br />
              <br />
              Exercise: 09
              <br />
              why ard you late always try to attend the class regularly yes sir
              the student said to the teacher
              <br />
              <br />
              Answer: “Why are you late? Always try to attend the class
              regularly.” “Yes sir,” the student said to the teacher.
              <br />
              <br />
              Exercise: 10
              <br />
              zaman can you tell me what i am teaching the teacher asked im
              sorry sir i can’t follow replied zaman you can’t because you are
              not attentive the teacher said
              <br />
              <br />
              Answer: “Zaman, can you tell me what I am teaching?” the teacher
              asked. “I’m sorry sir. I can’t follow,” replied Zaman. “You can’t
              because you are not attentive,” the teacher said.
              <br />
              <br />
              Exercise: 11
              <br />
              don’t you have any relative here to stay with no sir so i need a
              transfer certificate to be admitted there
              <br />
              <br />
              Answer: “Don’t you have any relative here to stay with?” “No, sir.
              So, I need a transfer certificate to be admitted there.”
              <br />
              <br />
              Exercise: 12
              <br />
              do you know me yes i know you from my childhood whats your name my
              name is sumon thank you a lot said mr jamal
              <br />
              <br />
              Answer: “Do you know me?” “Yes, I know you from my childhood.”
              “What’s your name?” “My name is Sumon.” “Thank you a lot.” said
              Mr. Jamal. <br />
              <br />
              Exercise: 13
              <br />
              stop you are eating all our bread shouted the two rats I M not
              doing My best but I have told you. that its difficult said the
              monkey give us that little Piece said the rats this is My Piece
              havent I laboured a lot for you replied the Monkey how foolish we
              are believing you said the two rats
              <br />
              <br />
              Answer: “Stop! You are eating all our bread,” shouted the two
              rats. “I’m doing my best, but I have told you that it’s
              difficult,” said the monkey. “Give us that little piece.” said the
              rats. “This is my piece. Haven’t I laboured a lot for you?”
              replied the Monkey..”How foolish we are believing you!” said the
              two rats.
              <br />
              <br />
              Exercise: 14
              <br />
              whats your programme after the examination asked ratul nabil said
              i havent yet decided can you suggest any lets go on a picnic said
              ratul what an excellent idea
              <br />
              <br />
              Answer: “What’s your programme after the examination?” asked
              Ratul. Nabil said, “I haven’t yet decided, Can you suggest any?”
              “Let’s go on a picnic,” said Ratul. “What an excellent idea!”
              <br />
              <br />
              Exercise: 15
              <br />
              in a certain school a student, once found a one hundred taka note
              in the play ground he took it to his teacher what shall i do with
              it asked the teacher
              <br />
              <br />
              Answer: In a certain school a student once found a one hundred
              taka note in the play ground. He took it to his teacher. “What
              shall I do with it?” asked the teacher.
              <br />
              <br />
              Exercise: 16
              <br />
              the teacher said to me dont you like to practise english its an
              important subject and you should be more careful about it
              <br />
              <br />
              Answer: The teacher said to me, “Don’t you like to practise
              English? It’s an important subject and you should be more careful
              about it.” <br />
              <br />
              Exercise: 17
              <br />
              how daring you are to wake me up the lion roared i shall kill you
              for that please let me go the mouse cried i did not mean to wake
              you up <br />
              <br />
              Answer: “How daring you are to wake me up?” the lion roared. “I
              shall kill you for that.” “Please, let me go”, the mouse cried.” I
              did not mean to wake you up.”
              <br />
              <br />
              Exercise: 18
              <br />
              my sons listen to me said rahman an old farmer a great treasure
              lies hidden in the land there i am going to leave it for you the
              sons asked how shall we find it
              <br />
              <br />
              Answer: “My sons, listen to me,” said Rahman, an old farmer. “A
              great treasure lies hidden in the land there. I am going to leave
              it for you.” The sons asked, “How shall we find it?”
              <br />
              <br />
              Exercise: 19
              <br />
              why don’t you attend classes regularly the teacher said to the boy
              you cannot expect good résult unless you attend classes be regular
              in class. <br />
              <br />
              Answer : Why don’t you attend classes regularly?” the teacher said
              to the boy. “You can’t expect good result unless you attend
              classes. Be regular in class.”
              <br />
              <br />
              Exercise: 20
              <br />
              oh my lord please dont kill the child said the first woman to the
              king solomon let her have it king solomon said to them now
              everything is clear to me pointing the first woman he said to the
              servant give her the child she is the mother of the baby.
              <br />
              <br />
              Answer: “Oh my lord! Please don’t kill the child,” said the first
              woman to the king Solomon. “Let her have it,” King Solomon said to
              them. “Now everything is clear to me.” Pointing the first woman he
              said to the servant, “Give her the child. She is the mother of the
              baby.”
              <br />
              <br />
              Exercise: 21
              <br />
              thomas alva edison a great scientist was born in 1847 in ohio
              america as a little boy he was very inquisitive he always wanted
              to know how things were done very early in life he showed that he
              was full of curiosity a quality which is so important to
              inventors.
              <br />
              <br />
              Answer: Thomas Alva Edison, a great scientist was born in 1847 in
              Ohio, America. As a little boy he was very inquisitive. He always
              wanted to know how things were done. Very early in life he showed
              that he was full of curiosity, a quality which is so important to
              inventors.
              <br />
              <br />
              Exercise: 22
              <br />
              why are you putting up the food in your pocket why don’t you eat
              asked the noble man i am doing the right thing replied sheikh
              saadi
              <br />
              <br />
              Answer: “Why are you putting up the food in your pocket? Why don’t
              you eat?” asked the noble man. “I am doing the right thing”,
              replied Sheikh Saadi.
              <br />
              <br />
              Exercise: 23
              <br />
              the lion roared how dare you wake me up ill kill you the mouse
              cried please let me go i didn’t mean to wake you up
              <br />
              <br />
              Answer: The lion roared, “How dare you wake me up? I’ll kill you.”
              The mouse cried, ” Please, let me go. I didn’t mean to wake you
              up.”
              <br />
              <br />
              Exercise: 24
              <br />
              who are jolly those who have. sound health are jolly sound mind
              lies in sound body minds become jolly when our life is filled with
              pleasure. <br />
              <br />
              Answer: Who are jolly? Those who have sound health are jolly.
              Sound mind lies in sound body. Minds become jolly when our life is
              filled with pleasure.
              <br />
              <br />
              Exercise: 25
              <br />
              my dear mother your letter is just to hand it seems to me that you
              are anxious for me why you need not think about me
              <br />
              <br />
              Answer: My dear mother, your letter is just to hand. It seems to
              me that you are anxious for me. Why? You need not think about me.
              <br />
              <br />
              Exercise: 26
              <br />
              give me a few grains of corns i am dying of hunger said the
              grasshopper but what did you do in the summer didn’t you store any
              grain the ant remarked to i was too busy in singing.
              <br />
              <br />
              Answer: “Give me a few grains of corns. I am dying of hunger,”
              said the grasshopper. “But what did you do in the summer? Didn’t
              you store any grain?” the ant remarked to. “I was too busy in
              singing.”
              <br />
              <br />
              Exercise: 27
              <br />
              are you ill he said coldly no i said then why are you sitting when
              all others are working go out at once and give them a hand
              <br />
              <br />
              Answer: “Are you ill?” he said coldly. “No”, I said. “Then why are
              you sitting when all others are working? Go out at once and give
              them a hand.
              <br />
              <br />
              Exercise: 28
              <br />i was born in a village near tangail a small river flows
              beside the village the villagers bathe in the river and catch fish
              how happy they are what they want is peace
              <br />
              <br />
              Answer: I was born in a village near Tangail. A small river flows
              beside the village. The villagers bathe in the river and catch
              fish. How happy they are! What they want is peace.
              <br />
              <br />
              Exercise: 29
              <br />
              did people use stamps in those days asked rafiq yes answered mr
              jamal the first stamps were used in 1840 are they easy to get now
              asked rafiq they are very difficult to get his uncle replied
              <br />
              <br />
              Answer: “Did people use stamps in those days?” asked Rafiq. “Yes,”
              answered Mr. Jamal. “The first stamps were used in 1840.” “Are
              they easy to get now?” asked Rafiq. “They are very difficult to
              get,” his uncle replied.
              <br />
              <br />
              Exercise: 30
              <br />
              after supper when I began to set out lucy trembled in fear and
              said alfred dear are you quite sure that the letter really came
              from your chief I laughed told her not to be afraid and hurried
              out of the room and walked down the street.
              <br />
              <br />
              Answer: After supper when I began to set out, Lucy trembled in
              fear and said, “Alfred dear, are you quite sure that the letter
              really came from your chief”?” I laughed, told her not to be
              afraid and hurried out of the room and walked down the street.
              <br />
              <br />
              Exercise: 31
              <br />
              the man said to me where are you going i am going to school said i
              did you go to school yesterday no i replied why didn’t you go i
              was very busy said i<br />
              <br />
              Answer: The man said to me, “Where are you going?” “I am going to
              school.” said I. “Did you go to school yesterday?” “No,” I
              replied. “Why didn’t you go?” “I was very busy.” said I.
              <br />
              <br />
              Exercise: 32
              <br />
              the teacher said to the boy where are you going now i am going to
              school said the boy did you go to school yesterday no the boy
              replied why did you not go i was suffering from fever said the boy
              <br />
              <br />
              Answer: The teacher said to the boy, “Where are you going now?” “I
              am going to school,” said the boy. “Did you go to school
              yesterday?” “No,” the boy replied. “Why did you not go?” “I was
              suffering from fever,” said the boy.
              <br />
              <br />
              Exercise: 33
              <br />
              robert bruce the king of scotland was defeated at a war and failed
              to regain his country’s freedom several times naturally he was in
              a very dejected mood sitting in his hide out he lost himself in
              deep thought. <br />
              <br />
              Answer: Robert Bruce, the king of Scotland, was defeated at a war
              and failed to regain his country’s freedom several times.
              Naturally he was in a very dejected mood. Sitting in his hide out,
              he lost himself in deep thought.
              <br />
              <br />
              Exercise: 34
              <br />
              the king said what harm did I do then that you should seek to take
              my life with your own hand you killed my father and my two
              brothers the young man replied.
              <br />
              <br />
              Answer: The King said, “What harm did I do then that you should
              seek to take my life with your own hand?” “You killed my father
              and my two brothers,” the young man replied.
              <br />
              <br />
              Exercise: 35
              <br />
              why are you going to barisal said father i want to buy some
              important books said saad do you need money yes father don’t go
              alone as time is not going well.
              <br />
              <br />
              Answer: “Why are you going to Barisal?” said father. “I want to
              buy some important books,” said Saad. “Do you need money?” “Yes,
              father.” “Don’t go alone as time is not going well.”
              <br />
              <br />
              Exercise: 36
              <br />
              once my mother said to me who came to you my friend Rafiq mom she
              asked what did he want i said his mother is ill he needs some
              money i have given him five hundred taka my mother said wonderful.
              <br />
              <br />
              Answer: Once my mother said to me, “Who came to you?” “My mother
              friend Rafiq, Mom.” She said, “What did he want?” I said, “His
              mother is ill. He needs some money. I have given him five hundred
              taka.” My mother said, “Wonderful!”
              <br />
              <br />
              Exercise: 37
              <br />
              bangladesh is a small country with a population of about sixteen
              crores she can hardly make headway so we should work hard to keep
              pace with the rest of the world
              <br />
              <br />
              Answer: Bangladesh is a small country. With a population of about
              sixteen crores, she can hardly make headway. So, we should work
              hard to keep pace with the rest of the world.
              <br />
              <br />
              Exercise: 38
              <br />
              is there anybody here who has ever crossed a river by a boat i
              have teacher i clearly remember what happened in that journey said
              Jamal. <br />
              <br />
              Answer: “Is there any anybody here who has ever crossed a river by
              a boat?” “I have, teacher. I clearly remember what happened in
              that Journey,” said Jamal.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
