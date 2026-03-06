import {
  Accordion,
  AccordionContent,
  AccordionPanel,
  AccordionTitle,
} from "flowbite-react";
import { FaHandPointRight } from "react-icons/fa";

const Accordions = () => {
  return (
    <div className="py-14 mx-2 md:mx-12 text-justify">
      
      <Accordion>
        <AccordionPanel>
          <AccordionTitle>What is Tense?</AccordionTitle>
          <AccordionContent>
            <div className="mb-2 dark:text-gray-400">
              <p>
                <strong>Tense: </strong>
                ক্রিয়া বা কাজ সম্পন্ন হওয়ার সময়কে Tense বলে। <br />
                যেমনঃ <br />
                আমরা ভাত খাই। <br />
                আমরা ভাত খেয়েছিলাম। <br />
                আমরা ভাত খাবো।
                <br />
              </p>
            </div>
          </AccordionContent>
        </AccordionPanel>

        <AccordionPanel>
          <AccordionTitle>Classification of Tense?</AccordionTitle>
          <AccordionContent>
            <div className="mb-2 dark:text-gray-400">
              <div className="py-5 dark:text-gray-400">
                Tense তিন প্রকারঃ <br />
                ১। Present tense বা বর্তমান কাল <br />
                ২। Future tense বা ভবিষ্যৎ কাল। <br />
                ৩। Past tense বা অতীত কাল।
                <br />
                <br />
                Present tense (বর্তমান কাল) আবার চার প্রকারঃ <br />
                ১। Present Indefinite Tense (অনির্দিষ্ট বর্তমান কাে)। <br />
                ২। Present Continuous Tense (বর্তমান চলামান কাল)। <br />
                ৩। Present Perfect Tense (পুরঘটিত বর্তমান কাল)। <br />
                ৪। Present Perfect Continuous Tense (পুরঘটিত চলমান বর্তমান কাল)।
                <br />
                <br />
                {/* PAST TENSE */}
                <strong>Past Tense </strong>(অতীত কাল) চার প্রকারঃ <br />
                ১। Past Indefinite Tense (অনির্দিষ্ট অতীত কাল)। <br />
                ২। Past Continuous Tense (চলমান অতীত কাল)। <br />
                ৩। Past Perfect Tense (পুরঘটিত অতীত কাল)। <br />
                ৪। Past Perfect Continuous Tense (পুরঘটিত চলমান অতীত কাল)।
                <br />
                <br />
                {/* <!-- FUTURE TENSE --> */}
                <strong>Future Tense </strong>(ভবিষ্যৎ কাল) চার প্রকারঃ <br />
                ১। Future Indefinite Tense (অনির্দিষ্ট ভবিষ্যৎ কাল)। <br />
                ২। Future Continuous Tense (চলমান ভবিষ্যৎ কাল)। <br />
                ৩। Future Perfect Tense (পুরঘটিত ভবিষ্যৎ কাল)। <br />
                ৪। Future Perfect Continuous Tense (পুরঘটিত চলমান ভবিষ্যৎ কাল)।
              </div>
            </div>
          </AccordionContent>
        </AccordionPanel>

        {/* 1। Present Indefinite Tense */}
        <AccordionPanel>
          <AccordionTitle>১। Present Indefinite Tense</AccordionTitle>
          <AccordionContent>
            <div className="dark:text-gray-400">
              <strong>
                ১। Present Indefinite Tense (অনির্দিষ্ট বর্তমান কাল)
              </strong>
              <div className="">
                <strong>সংজ্ঞাঃ</strong> কোন কাজ সচরাচর বা মাঝে মধ্যে বা সর্বদা
                করা বা হওয়া বুঝালে তাকে Present Indefinite Tense বলা হয় । <br />
                যেমনঃ আমরা ভাত খাই। <br />
                চিনার উপায়ঃ <br />
                বাংলা ক্রিয়ার শেষে - ই, ি, ঈ , ী ,এ , ে , য় ইত্যাদি থাকে।
                <br />
                যেমনঃ <br />
                আমি ভাত খাই, আমরা ঘুমায়। <br />
                <p className="my-3">
                  <strong>গঠন</strong> (<strong>Structure</strong>): <br />
                  হা-বোধক বাক্যের <strong>গঠন</strong>: <br />
                  <strong>
                    👉 Sub + V<sub>1</sub> (s/es) + obj + others.
                  </strong>
                  <br />
                  যেমনঃ <br />
                  আমরা ভাত খাই - We eat rice. <br />
                  সে ভাত খায় - He eats rice.
                  <br />
                </p>
                <br />
                <div className="border p-2 rounded-sm">
                  <span className="text-pink-700 font-bold">
                    S/ ES: <br />
                  </span>
                  (১) হা-বোধক Sentence এর Subject যদি 3rd person + singular হয়
                  তবে verb এর সাথে s/ es যুক্ত হয় <br />
                  যেমনঃ <br />
                  He eats rice. <br />
                  <strong>👉 (২)</strong> Verb এর শেষে যদি = s, sh, ch, x, o, y,
                  z থাকে তবে Verb এর শেষে = es যুক্ত হয়। <br />
                  যেমনঃ <br />
                  He goes (go = goes) <br />
                  <strong>👉 (৩)</strong> অন্যান্য সকল verb এর শেষে = S যুক্ত
                  হয়,
                  <br />
                  <br />
                  <strong>কিন্তু O এবং Y ব্যতিক্রম: </strong> <br />
                  O এবং Y এর আগের অক্ষরটি যদি Consonant হয় তবে = es যুক্ত হয়।
                  <br />
                  কিন্তু O এবং Y এর আগের অক্ষরটি Vowel (a, e, i, o, u) হলে
                  শুধুমাত্র S যুক্ত হয়। <br />
                  যেমনঃ <br />
                  He plays (play = plays).
                  <br />
                  <strong>Y ব্যতিক্রম: </strong> Y এর পরে es যুক্ত করার ক্ষেত্রে
                  Y এর স্থানে = i হয় তার পরে es হয়। <br />
                  যেমনঃ <br />
                  He cries (cry = cries).
                </div>
                <br />
                <br />
                না-বোধক বাক্যের <strong>গঠন</strong>: <br />
                <strong>
                  * Sub + do not/ does not + V<sub>1</sub> + obj + others.
                </strong>
                <br />
                যেমনঃ <br />
                আমরা ভাত খাই না - We do not eat rice. <br />
                সে ভাত খায় না - He does not eat rice.
                <br />
                <br />
                <strong>NOTE: </strong> হা-বোধক বাক্যের Subject যদি 3rd person +
                singular হয় তবে সাহায্যকারি verb = does হয় অন্যান্য subject এর
                সাথে = do হয়।
                <br />
                <br />
                প্রশ্ন-বোধক - হা-বোধক বাক্যের <strong>গঠন</strong>: <br />* Do/
                does + Sub + V<sub>1</sub> + obj? <br />
                যেমনঃ <br />
                আমরা কি ভাত খাই? - Do we eat rice? <br />
                সে কি ভাত খায়? - Does he eat rice? <br />
                <br />
                প্রশ্ন-বোধক না-বোধক বাক্যের <strong>গঠন</strong>: <br />* Don't/
                doesn't + Sub+ V<sub>1</sub> + obj? <br />
                অথবাঃ <br />
                Do/ does + Sub + not + V<sub>1</sub> + obj?
                <br />
                যেমনঃ <br />
                আমরা কি ভাত খাই না? – Do we not eat rice? <br />
                সে কি ভাত খায় না? -Doesn't he eat rice? <br />
              </div>
            </div>
          </AccordionContent>
        </AccordionPanel>

        {/* <!-- PRESENT CONTINUOUS TENSE --> */}
        <AccordionPanel>
          <AccordionTitle>২। Present Continuous Tense</AccordionTitle>
          <AccordionContent>
            <div className="dark:text-gray-400 text-base">
              <strong> ২। Present Continuous Tense </strong>(বর্তমান চলামান
              কাল):
              <br />
              <strong>সংজ্ঞাঃ</strong> <br />
              বর্তমান কোন কাজ চলতেছে বা হইতেছে বুঝালে Present Continuous Tense
              হয় । <br />
              যেমনঃ আমরা ভাত খাইতেছি/ খাচ্ছি <br />
              চিনার উপায়ঃ <br />
              বাংলা ক্রিয়ার শেষে - তেছি/চ্ছি, তেছ/চ্ছ, তেছেন/চ্ছেন ইত্যাদি
              থাকবে। <br />
              যেমনঃ আমি চা খাইতেছি/খাচ্ছি। <br />
              <br />
              <strong>গঠন</strong> (<strong>Structure</strong>): <br />
              হা-বোধক বাক্যের গঠন:
              <br />
              {/* <span className="animateText font-bold">*Rule*: </span> */}
              <strong>
                👉 Sub + am/ is/ are + V<sub>1</sub> এর সাথে ing + obj + others.
              </strong>
              <br />
              যেমনঃ <br />
              আমরা ভাত খাইতেছি/খাচ্ছি - We are eating rice. <br />
              সে ভাত খাচ্ছে/খাইতেছে - He is eating rice.
              <br />
              <br />
              <p className="border p-2">
                <strong> NOTE: </strong>বাক্যে*র Subject অনুসারে সাহায্যকারি
                verb হবে। যেমনঃ <br />
                ১। 3rd person + singular sub এর সাথে = is হয়, <br />
                ২। শুধুমাত্র i এর সাথে = am হয়, <br />
                ৩। অন্যান্য সকল sub এর সাথে = are হয়।
              </p>
              <br />
              <br />
              না-বোধক বাক্যের গঠন: <br />
              Sub + am not/ is not/ are not + V<sub>1</sub>-ing + obj +
              extension. <br />
              Or, Sub + ain't + V<sub>1</sub>-ing + obj + extension. <br />
              যেমনঃ <br />
              আমরা ভাত খাইতেছি/খাচ্ছি - We aren't/aint eating rice. <br />
              সে ভাত খাচ্ছে/খাইতেছে - He ain't eating rice.
              <br /> Or, সে ভাত খাচ্ছে/খাইতেছে - He is not eating rice.
              <br />
              <br />
              প্রশ্ন-বোধক-হা-বোধক বাক্যের গঠন: <br />
              Am/ is/ are + sub + V<sub>1</sub>-ing + obj?
              <br />
              প্রশ্ন-বোধক–না-বোধক বাক্যের গঠন: <br />
              Am/ is/ are + sub + not + V<sub>1</sub> + ing + obj? <br />
              Or, Amn't/ isn't/ aren't + sub + + V<sub>1</sub> + ing + obj?
              <br />
              Or, Ain't + sub + + V<sub>1</sub> + ing + obj? <br />
              যেমনঃ <br />
              আমরা কি ভাত খাইতেছি/খাচ্ছি? - Aren’t we eating rice?/ Are We not
              eating rice?
              <br />
              সে কি ভাত খাইতেছে/খাচ্ছে? - Ain't he eating rice?/ Is he not
              eating rice? <br />
              <br />
            </div>
          </AccordionContent>
        </AccordionPanel>

        {/* <!-- PRESENT PERFECT TENSE --> */}
        <AccordionPanel>
          <AccordionTitle>৩। Present Perfect Tense</AccordionTitle>
          <AccordionContent>
            <div className="mb-2 dark:text-gray-400">
              <div className="">
                <strong>৩। Present Perfect Tense </strong>
                (পুরঘটিত বর্তমান কাল): <br />
                <strong>সংজ্ঞাঃ</strong> কোন কাজ করা শেষ হয়েছে কিন্তু তার ফলাফল
                এখনও বিদ্যমান আছে এরুপ বুঝালে Present Perfect Tense হয় । <br />
                যেমনঃ আমরা ভাত খাইয়াছি/খেয়েছি <br />
                চিনার উপায়ঃ বাংলা ক্রিয়ার শেষে - ইয়াছি, ইয়াছ, ইয়াছেন বা য়াছি
                য়াছ, য়াছেন, ইত্যাদি থাকে।
                <br />
                <br />
                <strong>গঠন(Structure):</strong>
                <br />
                <strong>
                  👉 Sub + have/ has + V<sub>3</sub> + obj + others.
                </strong>
                <br />
                যেমনঃ <br />
                আমরা ভাত খাইয়াছি/খেয়েছি - We have eaten rice. <br />
                সে ভাত খাইয়াছে/খেয়েছে - He has eaten rice.
                <br />
                <br />
                <strong>NOTE: </strong> বাক্যের Subject অনুসারে সাহায্যকারি verb
                হবে। যেমনঃ <br />
                ১। <sub>3</sub>rd person + singular sub এর সাথে = has হয়, <br />
                ২। অন্যান্য সকল sub এর সাথে = have হয়।
                <br />
                <br />
                না-বোধক বাক্যের<strong>গঠন</strong>: <br />* Sub + have not/ has
                not + V<sub>3</sub> + obj + others. <br />
                Or, Sub + ain't + V<sub>3</sub> + obj + others. <br />
                যেমনঃ আমরা ভাত খাইনি - We have not eaten rice.
                <br />
                <br />
                প্রশ্ন-বোধক-হা-বোধক বাক্যের <strong>গঠন</strong>: <br />* Have/
                has + Sub + V<sub>3</sub> + obj? <br />
                যেমনঃ আমরা কি ভাত খাইইয়াছি/খেয়েছি? - Have we not eaten rice?
                <br />
                <br />
                প্রশ্ন-বোধক–না-বোধক বাক্যের <strong>গঠন</strong>: <br />* Have/
                has + Sub + not + V<sub>3</sub> + obj? <br />
                অথবাঃ <br />
                Haven't/ hasn't + Sub + V<sub>3</sub> + obj? <br />
                অথবাঃ <br />
                Ain't + Sub + V<sub>3</sub> + obj? <br />
                যেমনঃ আমরা কি ভাত খাইনি? - Ain't we not eaten rice?
                <br />
                <br />
              </div>
            </div>
          </AccordionContent>
        </AccordionPanel>

        {/* <!-- PRESENT PERFECT CONTINUOUS TENSE --> */}
        <AccordionPanel>
          <AccordionTitle>৪। Present Perfect Continuous Tense</AccordionTitle>
          <AccordionContent>
            <div className="mb-2 dark:text-gray-400">
              <div className="">
                <strong> ৪। Present Perfect Continuous Tense </strong>(পুরঘটিত
                চলমান বর্তমান কাল):
                <br />
                <strong>সংজ্ঞাঃ</strong> বর্তমান কোন কাজ কিছু সময় ধরে চলতেছে বা
                হইতেছে বুঝালে Present Perfect Continuous Tenseহয় ।
                <br />
                যেমনঃ <br />
                আমরা ১০ মিনিট ধরে ভাত খাচ্ছি/খাইতেছি <br />
                চিনিবার উপায়ঃ <br />
                বাংলা ক্রিয়ার শেষে - তেছি/চ্ছি, তেছ/চ্ছ, তেছেন/চ্ছেন ইত্যাদি এবং
                বাক্যের মধ্যে ধরিয়া/ধরে, হইতে/হতে, থাকিয়া/থেকে শব্দ থাকবে।
                <br />
                <br />
                <strong>গঠন(Structure): </strong>
                <br />
                হা-বোধক বাক্যের <strong>গঠন</strong> :
                <br />
                <span className="animateText font-bold"></span>
                <strong>
                  👉 Sub + have been/ has been + V<sub>1</sub> এর সাথে ing + obj
                  + others + for/since + time.
                </strong>
                <br />
                <br />
                <div className="border p-2">
                  <strong>NOTE: </strong> <br />
                  বাক্যের মধ্যে ধরিয়া/ধরে থাকলে সময়ের আগে for বসে, হইতে/হতে,
                  থাকিয়া/থেকে থাকলে since বসে। <br />
                  <br />
                  NOTE: <br />
                  বাক্যের Subject অনুসারে সাহায্যকারি verb হবে। যেমনঃ
                  <br />
                  ১। Subject - 3rd person + singular এর সাথে = has been হয়,
                  <br />
                  ২। অন্যান্য সকল Sub এর সাথে = have been হয়। <br />
                  যেমনঃ <br />
                  আমরা ১০ মিনিট ধরে ভাত খাচ্ছি - <br />
                  We have been eating rice for ten minutes. <br />
                  সে সকাল থেকে বল খেলতেছে - <br />
                  He has been playing football since morning.
                </div>
                <br />
                <br />
                না-বোধক বাক্যের <strong>গঠন</strong>: <br />* Sub + have not
                been/ has not been + V<sub>1</sub> এর সাথে ing + obj + for/
                since + time.
                <br />
                <br />
                প্রশ্ন-বোধক হা-বোধক বাক্যের <strong>গঠন</strong>: <br />* have
                been/ has been + Sub + V<sub>1</sub> এর সাথে ing + obj + for/
                since + time?
                <br />
                <br />
                প্রশ্ন–বোধক না-বোধক বাক্যের<strong>গঠন</strong>: <br />
                Have / has + Sub + not + been + V<sub>1</sub> এর সাথে ing + obj
                + for/ since + time? <br />
                অথবাঃ <br />
                Haven't / hasn't + Sub + been +V<sub>1</sub> এর সাথে ing + obj +
                for/ since + time?
                <br />
                যেমনঃ <br />
                আমরা কি ১০ মিনিট ধরে ভাত খাচ্ছি? - <br />
                Haven't we been eating rice for ten minutes?/ Have we not been
                eating rice for ten minutes?
              </div>
            </div>
          </AccordionContent>
        </AccordionPanel>

        {/* <!-- PAST INDEFINITE TENSE --> */}
        <AccordionPanel>
          <AccordionTitle>১। Past Indefinite Tense</AccordionTitle>
          <AccordionContent>
            <div className="mb-2 dark:text-gray-400">
              <div className="">
                <strong> ১। Past Indefinite Tense </strong>(অনির্দিষ্ট অতীত
                কাল):
                <br />
                <strong>সংজ্ঞাঃ</strong> অতীতে কোন কাজ করা হয়েছিল বুঝালে Past
                Indefinite Tense হয় ।
                <br />
                যেমনঃ <br />
                আমরা ভাত খাইয়াছিলাম/ খেয়েছিলাম। <br />
                চিনার উপায়ঃ <br />
                বাংলা ক্রিয়ার শেষে লে, ল, লাম, তে, ত, তাম থাকবে।
                <br />
                যেমনঃ খাইলাম/খেলাম/খাইয়াছিলাম
                <br />
                <br />
                <strong>গঠন(Structure): </strong>: <br />
                হা-বোধক বাক্যের <strong> গঠন</strong>:
                <br />
                <strong>
                  👉 Sub + V<sub>2</sub> + obj + others{" "}
                </strong>
                <br />
                যেমনঃ <br />
                আমরা ভাত খেয়েছিলাম/ - We ate rice.
                <br />
                <br />
                না-বোধক বাক্যের<strong> গঠন</strong>: <br />
                <strong>
                  👉 Sub + did not + V<sub>1</sub> + obj + others.
                </strong>
                <br />
                যেমনঃ <br />
                আমরা ভাত খেলাম না - We did not eat rice.
                <br />
                <br />
                প্রশ্ন-বোধক হা-বোধক বাক্যের <strong>গঠন</strong>: <br />* Did +
                Sub + V<sub>1</sub> + obj + others? <br />
                যেমনঃ <br />
                আমরা কি ভাত খাইলাম? – Did we eat rice?
                <br />
                <br />
                প্রশ্ন-বোধক না-বোধক বাক্যের <strong>গঠন</strong>: <br />* Didn't
                + Sub+ V<sub>1</sub> + obj + others?
                <br />
                যেমনঃ <br />
                আমরা কি ভাত খেলাম না? - Do we not eat rice? <br />
                <div className="pt-10">
                  <div className="flex gap-2">
                    <span className="animateText text-2xl">
                      <FaHandPointRight />
                    </span>
                    কিন্তু -
                  </div>
                  <p className="">
                    বাংলা ক্রিয়ার শেষে যদি তে, ত, তাম ইত্যাদি থাকে তবে বাক্যের
                    গঠন হবে নিম্নরূপঃ <br />
                    👉 Sub + used to + V <sub>1</sub> + Obj + Extension. <br />
                    যেমনঃ <br /> আমি চা খাইতাম - I used to sip tea.
                  </p>
                </div>
              </div>
            </div>
          </AccordionContent>
        </AccordionPanel>

        {/* <!-- PAST CONTINUOUS TENSE --> */}
        <AccordionPanel>
          <AccordionTitle>২। Past Continuous Tense</AccordionTitle>
          <AccordionContent>
            <div className="mb-2 dark:text-gray-400">
              <div className="">
                <p>
                  <strong>২। Past Continuous Tense </strong>(চলমান অতীত কাল)।
                </p>
                <strong>সংজ্ঞাঃ</strong> অতীতে কোন কাজ চলতেছিল বা হইতেছিল বুঝালে
                Past Continuous Tenseহয় ।
                <br />
                চিনার উপায়ঃ <br /> বাংলা ক্রিয়ার শেষে - তেছিল/চ্ছিল,
                তেছিলে/চ্ছিলে, তেছিলেন/চ্ছিলে থাকবে।
                <br />
                <br />
                <strong>গঠন</strong> (Structure): <br />
                হা-বোধক বাক্যের <strong>গঠন</strong> :<br />
                <strong>
                  👉 Sub + was/ were + V<sub>1</sub> এর সাথে ing + obj + others.
                </strong>
                <br />
                যেমনঃ <br />
                আমরা ভাত খাচ্ছিলাম - We were eating rice.
                <br />
                <br />
                <strong>NOTE: </strong>বাক্যের Subject অনুসারে সাহায্যকারি verb
                হবে। যেমনঃ <br />
                ১। 3rd person এবং <sub>1</sub>st person + singular sub এর সাথে =
                was হয়, <br />
                ২। অন্যান্য সকল sub এর সাথে = were হয়।
                <br />
                <br />
                না-বোধক বাক্যের <strong>গঠন</strong>: <br />* Sub + was not/
                were not + V<sub>1</sub> এর সাথে ing + obj + others.
                <br />
                অথবাঃ * Sub + wasn't/ weren't + V<sub>1</sub> এর সাথে ing +
                obj + others.
                <br />
                <br />
                প্রশ্ন-বোধক হা-বোধক বাক্যের <strong>গঠন</strong>: <br />*
                Was/Were + Sub + V<sub>1</sub> এর সাথে ing + obj + others.
                <br />
                সে কি ভাত খাচ্ছিল? - Wasn't he eating rice?
                <br />
                <br />
                প্রশ্ন–বোধক না-বোধক বাক্যের<strong>গঠন</strong>: <br />
                Was/ Were + Sub + not + V<sub>1</sub> এর সাথে ing + obj +
                others? <br />
                অথবাঃ <br />
                Wasn't / Weren't + Sub + V<sub>1</sub> এর সাথে ing + obj +
                others?
                <br />
                যেমনঃ <br />
                আমরা কি ভাত খাচ্ছিলাম না? - Weren't we eating rice / Were we not
                eating rice? <br />
              </div>
            </div>
          </AccordionContent>
        </AccordionPanel>

        {/* <!-- PAST PERFECT TENSE --> */}
        <AccordionPanel>
          <AccordionTitle>৩। Past Perfect Tense </AccordionTitle>
          <AccordionContent>
            <div className="mb-2 dark:text-gray-400">
              <div className="">
                <strong> ৩। Past Perfect Tense </strong>( পুরঘটিত অতীত কাল )।
                <br />
                <strong>(১) সংজ্ঞাঃ</strong> অতীতে কোন কাজ করা হয়েছিল বুঝালে
                Past Perfect Tense হয়।
                <br />
                যেমনঃ <br />
                আমরা ভাত খাইয়াছিলাম/ খেয়েছিলাম। <br />
                চিনার উপায়ঃ <br /> বাংলা ক্রিয়ার শেষে লে, ল, লাম থাকবে।
                <br />
                যেমনঃ খাইলাম/খেলাম/খাইয়াছিলাম <br />
                <br />
                <strong>গঠন</strong> (<strong>Structure</strong>): <br />
                হা-বোধক বাক্যের <strong>গঠন</strong>: <br />
                <strong>
                  👉 Sub + had + V <sub>3</sub> + obj + others.
                </strong>
                <br />
                যেমনঃ <br />
                আমরা ভাত খাইলাম/খেলাম - We had eaten rice. <br />
                না-বোধক বাক্যের<strong>গঠন</strong>: <br />
                👉 Sub + had not+ V3 + obj. <br />
                প্রশ্ন-বোধক হা-বোধক বাক্যের <strong>গঠন</strong>: <br />
                * Had + Sub + V3 + obj + others? <br />
                প্রশ্ন-বোধক না-বোধক বাক্যের <strong>গঠন</strong>:<br />
                * Hadn't + Sub+ V3 + obj + others?
                <br />
                <br />
                <strong>সংজ্ঞাঃ (2)</strong> অতীতে দুইটি কাজ হয়েছিল, সেই দুটি
                কাজের একটি আরেকটির আগে বা পরে করা হয়েছিল বুঝালে Past Perfect
                Tense হয়। যে কাজটি আগে হওয়া বুঝায় সেই বাক্যটির গঠন Past Perfect
                Tense এ হবে আর যে কাজটি পরে হয় সেটি Past Indefinite tense এ হবে।
                <br />
                <strong>গঠন(Structure)</strong>:
                <br />
                <br />
                বাক্যের মধ্যে before/আগে থাকলেঃ <br />
                1. Past Perfect Tense + before + Past Indefinite Tense <br />
                বাক্যের মধ্যে after/পরে থাকলেঃ <br />
                2. Past Indefinite Tense + after + Past Perfect Tense <br />
                যেমনঃ <br />
                আমরা ভাত খাওয়ার আগে সে বড়ি ফিরল - He had returned home before We
                ate rice. <br />
                সে ভাত খাওয়ার পর সে বড়ি ফিরল - He returned home after We had
                eaten rice. <br />
                <br />
                <div className="flex gap-2">
                  <span className="animateText text-2xl">
                    <FaHandPointRight />
                  </span>{" "}
                  Short Technique:
                </div>
                Before এ before এবং after এ after হয়: <br />
                অর্থাৎ বাক্যের মধ্যে "আগে/পূর্বে/before" থাকলে Past Perfect
                Tense এর বাক্যটি "আগে/পূর্বে/before" শব্দটির আগেই লিখতে হবে।
                "after/পরে" থাকেলে "after/পরে" শব্দটির পরেই Past Perfect Tense
                এর বাক্যটি লিখতে হবে।
              </div>
            </div>
          </AccordionContent>
        </AccordionPanel>

        {/* <!-- PAST PERFECT CONTINUOUS TENSE --> */}
        <AccordionPanel>
          <AccordionTitle>৪। Past Perfect Continuous Tense </AccordionTitle>
          <AccordionContent>
            <div className="mb-2 dark:text-gray-400">
              <div className="">
                <strong> ৪। Past Perfect Continuous Tense </strong>(পুরঘটিত
                চলমান অতীত কাল):
                <br />
                <strong>সংজ্ঞাঃ</strong> অতীতে একটি কাজ কিছু সময় ধরে চলতেছিল বা
                হইতেছিল বুঝালে তাকে Present Continuous Tense বলা হয় ।
                <br />
                যেমনঃ সে আসার পূর্বে আমরা ১০ মিনিট ধরে ভাত খাচ্ছিলাম/খাইতেছিলাম
                <br />
                চিনার উপায়ঃ বাংলা ক্রিয়ার শেষে - তেছিল/চ্ছিল, তেছিলে/চ্ছিলে,
                তেছিলেন/চ্ছিলে থাকবে। ইত্যাদি বাক্যের মধ্যে ধরিয়া/ধরে, হইতে/হতে,
                থাকিয়া/থেকে শব্দ থাকবে।
                <br />
                <strong>গঠন</strong> (<strong>Structure</strong>): <br />
                হা-বোধক বাক্যের <strong>গঠন</strong> :<br />
                <strong>
                  * (1) Sub + had been + V<sub>1</sub> এর সাথে ing + obj +
                  for/since + time + others
                </strong>
                <br />
                <strong>NOTE: </strong>বাক্যের মধ্যে ধরিয়া/ধরে থাকলে সময়ের আগে
                for বসে, হইতে/হতে, থাকিয়া/থেকে থাকলে since বসে। <br />
                যেমনঃ <br />
                সে আসার পূর্বে আমরা ১০ মিনিট ধরে ভাত খাচ্ছিলাম/খাইতেছিলাম - We
                had been eating rice for ten minutes before he came. <br />
                অথবাঃ <br />
                We had been eating rice for ten minutes before his coming.{" "}
                <br />
                সে সকাল থেকে ভাত খাচ্ছীল - He had been eating rice since ten
                minutes.
                <br />
                (or) <br />
                <strong>সংজ্ঞাঃ (2) </strong> অতীতে একটি কাজ অন্য একটি কাজের
                পূর্বে কিছু সময় ধরে চলতেছিল বা হইতেছিল বুঝালে তাকে Present
                Continuous Tense বলা হয় ।
                <br />
                যেমনঃ <br />
                সে আসার পূর্বে আমরা ১০ মিনিট ধরে ভাত খাচ্ছিলাম/খাইতেছিলাম
                <strong>
                  * (2) Sub + had been + V<sub>1</sub> এর সাথে ing + obj +
                  others + for/since + time + before + Past Indefinite Tense/
                  Past Perfect Tense.
                </strong>
                <br />
                যেমনঃ <br />
                সে আসার পূর্বে আমরা ১০ মিনিট ধরে ভাত খাচ্ছিলাম/খাইতেছিলাম He had
                been eating rice for ten minutes before he came
                <br />
                না-বোধক বাক্যের <strong>গঠন</strong>: <br />* Sub + had not been
                + V<sub>1</sub> এর সাথে ing + obj + for/ since + time.
                <br />
                আমরা ১০ মিনিট ধরে ভাত খাচ্ছিলাম/খাইতেছিলাম না - We had not been
                eating rice for ten minutes? <br />
              </div>
            </div>
          </AccordionContent>
        </AccordionPanel>

        {/* <!-- FUTURE INDEFINITE TENSE --> */}
        <AccordionPanel>
          <AccordionTitle>১। Future Indefinite Tense</AccordionTitle>
          <AccordionContent>
            <div className="mb-2 dark:text-gray-400">
              <div className="">
                <strong> ১। Future Indefinite Tense </strong>( অনির্দিষ্ট
                ভবিষ্যৎ কাল ) : <br />
                <strong>সংজ্ঞাঃ</strong> কোন কাজ ভবিষ্যতে হবে বুঝালে তাকে Future
                Indefinite Tense বলা হয় ।
                <br />
                যেমনঃ <br />
                আমরা ভাত খাইবো/ খাবো। <br />
                চিনার উপায়ঃ <br />
                বাংলা ক্রিয়ার শেষে- বে, ব, বা, বেন ইত্যাদি থাকে।
                <br />
                যেমনঃ খাইবো, ঘুমাবো।
                <br />
                <br />
                <strong>
                  <strong>গঠন(Structure)</strong> :
                </strong>
                <br />
                হা-বোধক বাক্যের <strong>গঠন</strong>: <br />
                <strong>
                  👉 Sub + shall/ will + V<sub>1</sub> + obj + others.
                </strong>
                <br />
                যেমনঃ <br />
                আমরা ভাত খাইবো/ খাবো - We will eat rice. <br />
                সে ভাত খাবে - He will eats rice.
                <br />
                <br />
                <p className="border p-2">
                  <strong>
                    NOTE: <br /> (1){" "}
                  </strong>
                  বাক্যের Subject অনুসারে সাহায্যকারি verb হবে। যেমনঃ <br />
                  ১। 1st person subject এর সাথে = shall হয়, <br />
                  ২। অন্যান্য সকল sub এর সাথে = will হয়। <br />
                  <strong>
                    NOTE: <br /> (2){" "}
                  </strong>{" "}
                  American English এ সকল Subject এর সাথে will ব্যবহার হয়।{" "}
                </p>
                <br />
                <br />
                না-বোধক বাক্যের <strong>গঠন</strong>: <br />
                <strong>
                  * Sub + Will not (/ shall not) + V<sub>1</sub> + obj + others.
                </strong>
                <br />
                or, <br />
                <strong>
                  * Sub + Won't (/ shan't) + V<sub>1</sub> + obj + others.{" "}
                </strong>
                <br />
                যেমনঃ <br />
                আমরা ভাত খাবো না - We Will not eat rice. <br />
                সে ভাত খাবে না - He Will not eat rice.
                <br />
                <br />
                প্রশ্ন-বোধক - হা-বোধক বাক্যের <strong>গঠন</strong>: <br />*
                Will(/ Shall) + Sub + V<sub>1</sub> + obj? <br />
                যেমনঃ <br />
                আমরা কি ভাত খাবো? - Will we eat rice?
                <br />
                <br />
                প্রশ্ন-বোধক না-বোধক বাক্যের <strong>গঠন</strong>: <br />* Will
                (/Shall) + Sub + V<sub>1</sub> + obj? <br />
                অথবাঃ <br />
                Will(/ Shall) + Sub + not + V<sub>1</sub> + obj?
                <br />
                অথবাঃ <br />
                Won't + Sub + V<sub>1</sub> + obj?
                <br />
                যেমনঃ <br />
                আমরা কি ভাত খাবো না? – Will we not eat rice? <br />
                সে কি ভাত খাবে না? - Won't he eat rice? <br />
                <br />
              </div>
            </div>
          </AccordionContent>
        </AccordionPanel>

        {/* <!-- FUTURE CONTINUOUS TENSE --> */}
        <AccordionPanel>
          <AccordionTitle>২। Future Continuous Tense </AccordionTitle>
          <AccordionContent>
            <div className="mb-2 dark:text-gray-400">
              <div className="">
                <p>
                  <strong>২। Future Continuous Tense </strong>(চলমান ভবিষ্যৎ
                  কাল)।
                </p>
                <strong>সংজ্ঞাঃ</strong> ভবিষ্যতে কোন কাজ চলিতে থাকিবে বা হইতে
                থাকিবে বুঝালে তাকে Future Continuous Tense বলা হয় ।
                <br />
                চিনার উপায়ঃ <br />
                বাংলা ক্রিয়ার শেষে - তেথাকিবে/তেথাকবে, তেথাকিবো/তেথাকবো,
                তেথাকিবেন/তেথাকবেন ইত্যাদি থাকবে।
                <br />
                <br />
                <strong>গঠন(Structure)</strong> : <br />
                হা-বোধক বাক্যের <strong>গঠন</strong> :<br />
                <strong>
                  👉 Sub + shall be/ will be + V<sub>1</sub> এর সাথে ing + obj +
                  others.
                </strong>
                <br />
                যেমনঃ <br />
                আমরা ভাত খেতে থাকবো - We will be eating rice.
                <br />
                <br />
                <strong>NOTE: </strong>বাক্যের Subject অনুসারে সাহায্যকারি verb
                হবে। যেমনঃ <br />
                ১। 1st person subject এর সাথে = shall হয়, <br />
                ২। অন্যান্য সকল sub এর সাথে = will হয়।
                <br />
                <br />
                না-বোধক বাক্যের <strong>গঠন</strong>: <br />* Sub + shall not
                be/ will not be + V<sub>1</sub> এর সাথে ing + obj + others.
                <br />
                অথবাঃ * Sub + shan't be/ won't be + V<sub>1</sub> এর সাথে ing +
                obj + others.
                <br />
                <br />
                প্রশ্ন-বোধক হা-বোধক বাক্যের <strong>গঠন</strong>: <br />*
                Shall/Will + Sub + be + V<sub>1</sub> এর সাথে ing + obj +
                others?
                <br />
                <br />
                প্রশ্ন–বোধক না-বোধক বাক্যের <strong> গঠন</strong>:
                <br />
                *Shall/ Will + Sub + not + be + V<sub>1</sub> এর সাথে ing + obj
                + others.? <br />
                অথবাঃ <br />
                Shan't/ Won't + Sub + be + V<sub>1</sub> এর সাথে ing + obj +
                others?
                <br />
                যেমনঃ <br />
                আমরা কি ভাত খেতে থাকবো না? - Will we not be eating rice?
                <br />
                সে কি ভাত খেতে থাকবে? - Won't he be eating rice?
              </div>
            </div>
          </AccordionContent>
        </AccordionPanel>

        {/* <!-- Future Perfect Tense --> */}
        <AccordionPanel>
          <AccordionTitle>৩। Future Perfect Tense </AccordionTitle>
          <AccordionContent>
            <div className="mb-2 dark:text-gray-400">
              <div className="">
                <strong>৩। Future Perfect Tense (পুরঘটিত ভবিষ্যৎ কাল)।</strong>
                <p className="">
                  Definition:- <br /> ভবিষ্যতে দুটিকাজ একত্রে সংঘটিত হবে এইরূপ
                  বুঝালে যে কাজটি পূর্বে হয় সেটি Future Perfect Tense পরেরটি
                  Future Indefinite অথবা Present Indefinite Tense হয়।
                </p>
                <p>
                  Identification:- <br /> বাংলা বাক্যের ক্রিয়ার শেষে ব, বে, বেন
                  এবং পূর্ব ও পরে কথা উল্লেখ থাকে এবং ইয়া থাকিব, ইয়া থাকিবে, ইয়া
                  থাকিবেন কথা উল্লেখ থাকে।
                </p>
                <br />
                <p className="">
                  <strong>Structure-1</strong>: <br /> subject + shall have
                  /will have + V<sub>3</sub> + others.
                </p>
                <p className="">
                  <strong>Structure-2</strong>: <br /> subject + shall have
                  /will have + V<sub>3</sub> + others + before/ after + future
                  indefinite tense.
                </p>
                <br />
                <p>
                  <strong>Example:-</strong> <br />
                  আমি সেখানে গিয়া থাকিব। <br />
                  I shall have gone there.
                  <br />
                  আমি তোমার কথা স্বরণ করিয়া থাকিব - <br />
                  I shall have remembered your word.
                  <br />
                  তাহারা পুকুরটি খনন করিয়া থাকিবে -
                  <br />
                  They will have dug the pond . <br />
                  তাহারা কাজটি শেষ করার পূর্বে সে টাকা নিবে - <br />
                  They will have took money before they will finish the work.
                  <br />
                  লোকটি বাজারে যাওয়ার পূর্বে সে এ বিষয় চিন্তা করিয়া থাকিবে -{" "}
                  <br />
                  The man will have thought this matter before he goes to
                  market.
                </p>
              </div>
            </div>
          </AccordionContent>
        </AccordionPanel>

        {/* <!-- Future Perfect Continuous Tense --> */}
        <AccordionPanel>
          <AccordionTitle>৪। Future Perfect Continuous Tense </AccordionTitle>
          <AccordionContent>
            <div className="mb-2 dark:text-gray-400">
              <div className="">
                <strong className="">
                  ৪। Future Perfect Continuous Tense (পুরঘটিত চলমান ভবিষ্যৎ
                  কাল)।
                </strong>
                <p>
                  <strong>Definition : </strong> <br /> ভবিষৎতে দুটো কাজের মধ্যে একটি
                  কাজ কিছু সময়ের জন্য চলিতে থাকিবে এইরূপ বুঝালে verb এর Future
                  Perfect Continuous Tense হয় । <br />
                </p>
                <br />
                <p className="">
                  <strong># Way to know– (চেনার উপায়) :</strong>
                  <br />
                  # বাংলা বাক্যের ক্রিয়ার শেষে –তে থাকবো, -তে থাকবে, -তে থাকবেন
                  ইত্যাদি বিভক্তি থাকে । <br />
                  # বাংলা বাক্যের মধ্যে আগে/পূর্বে/পূর্ব, যাবৎ, ধরে, ব্যাপিয়া,
                  হতে, থেকে ইত্যাদি শব্দ থাকে । <br /># বাংলা বাক্যের মধ্যে না
                  আসা পযর্ন্ত, না হওয়া পযর্ন্ত, না শেষ হওয়া পযর্ন্ত ইত্যাদি শব্দ
                  থাকে ।
                </p>
                <br />
                <p className="">
                  <strong>
                    গঠন (<strong>Structure</strong> ):
                  </strong>{" "}
                  <br />
                  <strong>Structure - 1: </strong> Sub + shall have been / will
                  have been + V<sub>1</sub>-ing + before + Present / Future
                  Indefinite Tense.
                  <br />
                  <strong>Structure - 2: </strong> Sub + shall have been / will
                  have been + V<sub>3</sub>-ing + for + period of time / since +
                  point of time.
                  <br />
                  <strong>Structure - 3: </strong> Sub + shall have been / will
                  have been + V<sub>1</sub>-ing + until + Present / Future
                  Indefinite Tense.
                </p>

                <br />
                <p className="">
                  <strong>Example-(উদাহরণ ) :</strong>
                  <br />
                  -তুমি আসিবার পূর্বেই আমি এখানে অপেক্ষা করিতে থাকিব - <br />
                  I will have been waiting here before you come / you will come.
                  <br />
                  <br />
                  তুমি না আসা পযর্র্ন্ত আমি এখানে অপেক্ষা করিতে থাকিব - <br />
                  I will have been waiting here until you come / you will come.
                  <br />
                  <br />
                  অন্ধকার না হওয়া পযর্ন্ত আমি এখানে অপেক্ষা করিতে থাকিব - I will
                  have been waiting here until it is dark / it will be dark.
                  <br />
                  <br />
                  তুমি না আসা পযর্ন্ত আমি এখানে দুই ঘন্টটা যাবৎ অপেক্ষা করিতে
                  থাকিব - <br />
                  I will have been waiting here for two hours until you come /
                  you will come.
                  <br />
                  <br />
                  তুমি আসারর পূর্বেই সে ৫০ মিনিট যাবৎ ছবিগুলো অংকন করিতে
                  থাকিবে - <br />
                  She will have been drawing the pictures for 50 minutes before
                  you come / you will come.
                  <br />
                  <br />
                  Note : we shall, I shall এর ব্যবহার খুবই কম , নাই বললেই চলে ।
                  <br />
                </p>
              </div>
            </div>
          </AccordionContent>
        </AccordionPanel>
      </Accordion>
    </div>
  );
};

export default Accordions;
