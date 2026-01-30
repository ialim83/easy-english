import { useEffect, useState } from "react";

function PartsOfSpeechBeginner() {
  const [showButton, setShowButton] = useState(false);

  // Show button after scrolling down 200px
        useEffect(() => {
          const handleScroll = () => {
            setShowButton(window.scrollY > 200);
          };
        
          window.addEventListener("scroll", handleScroll);
          return () => window.removeEventListener("scroll", handleScroll);
        }, []);
        
        const scrollToTop = () => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        };
        
  return (
    <div className="w-full px-3">
      <div className="text-center py-10">
        <h2 className="text-green-500">
          A brief discussion on Parts of Speech
        </h2>
      </div>

      <div className="lg:w-[50%] mx-auto">
        <h3 className="text-pink-600">Parts of Speech</h3>
        <div className="text-lg md:text-xl">
          {/* definition */}
          <div className="">
            Parts মানে হলো অংশ/শব্দ/(word) আর Speech মানে হলো
            বক্তব্য/বাক্য(sentence)। সুতরাং বাক্যের মধ্যে ব্যবহৃত প্রত্যেকটি
            শব্দকে Parts of Speech বলে।
            <br />
            Parts of speech আট প্রকার: <br />
            1. Noun ( বিশেষ্য ) <br />
            2. Pronoun <br />
            3. Verb ( ক্রিয়া/ কাজ ) <br />
            4. Adjective ( বিশেষণ )<br />
            5. Adverb ( ক্রিয়া বিশেষণ ) <br />
            6. Preposition ( সমন্ধসূচক অব্যয় ) <br />
            7. Conjunction ( সংযোজক অব্যয় ) <br />
            8. Interjection ( আবেগসূচক অব্যয় )
          </div>
          <br />
          {/* noun */}
          <div className="">
            <h2 className="dark:text-green-400 text-pink-600">Noun</h2>
            Noun অর্থ নাম। সেজন্য যে কোন নামবাচক শব্দকে/পদকে Noun বলে। <br />
            Noun মূলত দুই প্রকার: <br />
            1. Concrete Noun : <br />
            যাকে দেখা যায়। যার বাহ্যিক অস্তিত্ব এবং শারীরিক গঠন আছে। <br />
            যেমন : <br />
            Table, Chair, Rahim, Karim, Dhaka, London ইত্যাদি <br />
            Concrete Noun আবার চার প্রকার (এগুলো পড়তে চাইলে এডভান্স লেভেলে ক্লিক
            করুন ) <br />
            2. Abstract Noun : <br />
            যাকে দেখা যায়না। এদের বাহ্যিক অস্তিত্ব নেই। এটা মূলত ব্যাক্তি বা
            বস্তুর অবস্থা, গুণ, প্রকৃতি সম্পর্কিত নামগুলো বুঝায়।
            <br />
            যেমন : <br />
            Love, Forgiveness, Honesty, Happiness, Friendship, Beauty ইত্যাদি...
            <br />
            এছাড়া, <br />
            গণনা যোগ্যতা অনুসারে প্রত্যেক প্রকার Noun এর আবার দু'টি ভাগ আছে :
            <br />
            ১. Countable Noun ২. Uncountable Noun <br />
            ১. Countable Noun : যে Noun গণনা করা যায়।
            <br />
            1. Singular / Plural দুইটাই হতে পারে. <br />
            2. শেষে s/es যুক্ত হয়। <br />
            যেমন : <br />
            Boy - Boys, Mango - Mangos For example: boy - age, mango - mangos{" "}
            <br />
            ২. Uncountable Noun : যে Noun গণনা করা যায় না- <br />
            1. always Singular. <br />
            2. এদের সাথে s/es বসে না।
            <br />
            যেমন : <br />
            Fun, News, Information, Wind etc. . <br />
            <br />
          </div>
          {/* Pronoun */}
          <div className="">
            <h2 className="dark:text-green-400 text-pink-600">Pronoun:</h2>
            Pronoun: Pro শব্দের অর্থ পরিবর্তে আর Noun শব্দের অর্থ নাম। অর্থাৎ,
            Noun/ নামের পরিবর্তে যে Word ব্যবহার করা হয় সেটাই Pronoun.
            <br />
            যেমন : I, you, she, they, who, what, this, that, myself, themselves
            etc. I, you, she, they, who, what, this, that, myself, themselves
            etc. <br />
            (বিস্তারিত পড়তে চাইলে এডভান্স লেভেলে ক্লিক করুন )
          </div>
          <br />
          {/* Adjective */}
          <div className="">
            <h2 className="text-pink-600">Adjective:</h2>
            যে word দ্বারা Noun/Pronoun এর দোষ, গুণ, অবস্থা, সংখ্যা, পরিমান
            ইত্যাদি নির্দেশ করে, তাকে Adjective বলে। <br />
            Examples: <br />
            দোষ বা গুণ : Bad, lazy, clever, honest etc. <br />
            অবস্থা : Poor, rich, noble, weak, old, Asian, Bangladeshi etc.
            <br />
            পরিমাণ : Much, little, a few, Enough etc. <br />
            সংখ্যা : First, one, two, Single, double etc. <br />
            (বিস্তারিত পড়তে চাইলে এডভান্স লেভেলে ক্লিক করুন )
          </div>
          <br />
          {/* Verb */}
          <div className="">
            <h2 className="text-pink-500">Verb</h2>
            <div className="">
              Verb: যে word দ্বারা কোনো কিছু করা বা হওয়া বা কোন কাজ করা বুঝায়,
              তাকে Verb বলে । <br />
              যেমন : <br />
              Sing, Think, Laugh, Cry, Jump etc. <br />
              Verb দুই প্রকার: <br />
              (i) Finite - সমাপিকা ক্রিয়া <br />
              (ii) Non-Finite - অসমাপিকা ক্রিয়া
              <br />
              <br />
              Finit Verb আবার দুই প্রকার:
              <br />
              (i) Principle verb (প্রধান ক্রিয়া) <br />
              (ii) Auxiliary verb (সাহায্যকারী ক্রিয়া) <br />
              <br />
              Principle Verb : <br />
              যে verb অন্য কোন Verb এর সাহায্য ছাড়া স্বাধীনভাবে সম্পূর্ণ অর্থ
              প্রকাশ করতে পারে, তাকে Principle Verb বলে । <br />
              Principal Verb আবার দুই প্রকার: <br />
              1. Transitive Verb - সকর্মক ক্রিয়া <br />
              2. Intransitive Verb - অকর্মক ক্রিয়া: <br />
              1. Transitive Verb : সকর্মক ক্রিয়া <br />
              Transitive verb বৈশিষ্ট্য : যে Verb, object ছাড়া অর্থ প্রকাশ করতে
              পারে না বা Verb এর Object থাকে তাকে Transitive verb বলে।
              <br />
              2. Intransitive Verb - অকর্মক ক্রিয়া: <br />
              Intransitive Verb বৈশিষ্ট্য : যে Verb, object ছাড়াই অর্থ প্রকাশ
              করতে পারে বা Verb এর Object থাকে না তাকে Transitive verb বলে।{" "}
              <br />
              Examples: <br />
              <div className="overflow-x-auto">
                <table className="min-w-[500px] table-auto dark:border-slate-400">
                  <thead>
                    <tr>
                      <th>Transitive Verb</th>
                      <th>Intransitive Verb</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Ring the bell.</td>
                      <td>The bell Ringed.</td>
                    </tr>
                    <tr>
                      <td>The driver stopped the bus.</td>
                      <td>The bus stopped. </td>
                    </tr>
                    <tr>
                      <td>the boys flew kites in the sky.</td>
                      <td>Birds flew in the sky.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <br />
              Auxiliary Verb : যে verb ক্রিয়ার কাল বা ভাব প্রকাশ করতে Principle
              Verb কে সাহায্য করে, তাকে Auxiliary verb বলে। এজন্য একে Helping
              Verb ও বলা হয়। The verb that helps the principle verb to express
              the tense or expression of the verb is called the auxiliary verb.
              That's why it's called a helping verb.
              <br />
              List of Auxiliary Verbs :<br />
              1. Be Verb : am, is, are, was, were, be, being, been. <br />
              2. Do Verb : do, does, did <br />
              3. Have Verb : have, has, had, hast <br />
              4.Modals : <br />
              can, could, may, might, shall, should, will, would, need, dare,
              must, had better, would rather. <br />
              5. to যুক্ত Modals : <br />
              ought to, have to, be to, used to, be going to, be about to.
              <br />
              <br />
              Non-Finite Verb: <br />
              Non-Finite Verb আবার তিন প্রকার: <br />
              1. Gerund <br />
              2. Participle <br />
              3. Infinitive
              <br />
              <br />
              Gerund:Gerund = ( verb + ing ) = Noun এর মত আচরণ করবে। <br />
              যেমন : 1. Writing letter is pleasant. <br />
              2. Running water is pure. <br />
              3. Swimming is a good exercise.
              <br />
              4. He likes gardening. <br />
              4. He likes gardening. <br />
              5. He is absorbed in dreaming. <br />
              6. Seeing is believing.
              <br />
              Short technique : Gerund দ্বারা স্থির অবস্থা বোঝায়। <br />
              <br />
              Participle: <br />
              Participle আবার তিন প্রকারঃ (a) Present Particle, (b) Past
              Participle, (c) Perfect Participle
              <br />
              (a) Present Participle = ( verb + ing ) = Adjective/ Adverb এর মত
              আচরণ করবে।
              <br />
              যেমন: <br />
              1. I saw him <span className="font-bold underline">
                passing
              </span>{" "}
              the shop. <br />
              2. <span className="font-bold underline">Dancing</span> the girl
              went away. <br />
              3. He smell the curry{" "}
              <span className="font-bold underline">burning</span>. <br />
              4. He will go to{" "}
              <span className="font-bold underline">swimming</span>. <br />
              5. He kept me <span className="font-bold underline">waiting</span>
              . <br />
              5. He kept me <span className="font-bold underline">waiting</span>
              . <br />
              6. I saw the baby there{" "}
              <span className="font-bold underline">sleeping</span>. <br />
              Technique : Participle দ্বারা চলমান অবস্থা বোঝায়।
              <br />
              <br />
              Infinitive:
              <br />
              Infinitive = ( to + verb ) = অর্থাৎ to যুক্ত verb. <br />
              যেমন : <br />
              1. I'm glad to receive your letter. <br />
              2. We eat food to live. <br />
              3. This is the home to let.
              <br />
              4. To err is human.
              <br />
              5. To speak the truth, he's honest. <br />
              (বিস্তারিত পড়তে চাইলে এডভান্স লেভেলে ক্লিক করুন )
            </div>
          </div>
          <br />
          {/* adverb */}
          <div className="">
            <h2 className="text-pink-500">Adverb</h2>
            <p className="">
              Adverb: যে Word সাধারণত Verb কে modify করে, তাকে Adverb বলে।
              <br />
              যেমন: <br />
              1. He started early. <br />
              2. He runs very fast. <br />
              3. I know better. <br />
              Short Techniq: Verb কে how(কিভাবে), when(কখন), where(কোথায়),
              why(কেন) দ্বারা প্রশ্ন করলে যে উত্তর পাওয়া যায় সেই শব্দ/পদকে
              Adverb বলা হয়।
              <br />
              “Adverb - Time (সময়), Place (স্থান), Manner (ধরণ), Number
              (সংখ্যা), Degree (মাত্রা), Reason (কারণ), Purpose (উদ্দেশ্য),
              Condition (শর্ত) ইত্যাদি প্রকাশ করবে।” <br />
              <br />
              যেমন:
              <br /> Time : now, then, soon, early etc. <br />
              Place : here,there, far, near etc. <br />
              Manner : slowly, quickly, surely, probably etc. <br />
              Number : once, twice, thrice, again, always etc. <br />
              Degree : very, much, partly, wholly etc. D<br />
              Reason : as, so, because etc. <br />
              Condition : if, unless etc. Condition : if, unless etc. <br />
              Technic : How, When, Where, Why দ্বারা প্রশ্ন করলেও Adverb পাওয়া
              যায়। <br />
              (বিস্তারিত পড়তে চাইলে এডভান্স লেভেলে ক্লিক করুন )
            </p>
          </div>
          <br />
          <div className="">
            <h2 className="text-pink-600">Preposition</h2>
            Preposition: Pre শব্দের অর্থ পূর্বে আর Position শব্দের অর্থ অবস্থান।
            অর্থাৎ, যে Word Noun/Pronoun এর পূর্বে বসে পূর্ববর্তী Word এর সাথে
            সম্পর্ক স্থাপন করে, তাকে Preposition বলে। <br />
            যেমন : to, of, in, at, on, into, below, under, beside, around, over,
            above, across, through etc..
          </div>
          <br />
          <div className="">
            <h2 className="text-pink-600">Conjunction:</h2>
            Con শব্দের অর্থ একত্রে আর Junction শব্দের অর্থ সংযুক্ত করা। অর্থাৎ,
            যে Word একাধিক শব্দ বা বাক্যকে সংযুক্ত করার জন্য ব্যবহার করা হয়,
            তাকে Conjunction বলে। <br />
            Example: <br />
            1. Do or Die. <br />
            2. Jack is good but Rose is not bad. <br />
            3. Jack and Rose are good Friends. <br />
            4. Syndrela is beautiful but Thor is powerful.
          </div>
          <br />
          <div className="">
            <h2 className="text-pink-600">Interjection</h2>
            Interjection: যে শব্দ মনের আকস্মিক আবেগ প্রকাশ করে, তাকে
            interjection বলে। <br />
            More Examples: - <br />
            Hurrah! We won the game! (Emotion of joy)
            <br />- Alas! I failed the exam! (Emotion of sorrow) <br />
            - Wow! What a beautiful car! (Emotion of surprise) <br />- Oh! I
            forgot to bring my purse! (Emotion of sorrow)
            <br />- Ouch! It hurts! - Ouch! It hurts! (Emotion of pain) (Emotion
            of pain)
            <br />
            -Eww! It tastes so bad! (Emotion of disliking)
            <br />
            - Yahoo! I got a job!(Emotion of joy) <br />
            -Huh! I don't care! <br />
            -Huh! I don't care! (Emotion of scorn)
          </div>
          <br />

          <br />
        </div>
        <div className="">
        {showButton && (
              <button
                onClick={scrollToTop}
                className="fixed bottom-3 right-1 bg-pink-600 text-white p-3 rounded-full shadow-lg hover:bg-pink-700 transition z-50"
              >
                ↑top
              </button>
            )}
      </div>
        
      </div>
    </div>
  );
}

export default PartsOfSpeechBeginner;
