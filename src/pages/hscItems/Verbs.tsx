// import { Link } from "react-router-dom";
import "pdfjs-dist/build/pdf.worker.entry";
import { useRef, useState, useEffect } from "react";
import HTMLFlipBook from "react-pageflip";
// import frontCover from "../../../public/bookCover.jpg";

function Verbs() {
  const flipBook = useRef<any>(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [jumpPage, setJumpPage] = useState<number | "">("");
  const [isPortrait, setIsPortrait] = useState(false); // 🔥 auto mode

  const totalPages = 24; // Update when you add more pages

  // 🔊 Add audio ref for page flip sound
  const flipSound = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    flipSound.current = new Audio("/sounds/mixkit-page-turn-single-1104.wav");
    flipSound.current.volume = 1.0; // optional: adjust volume
  }, []);

  // Play sound on flip
  const onFlip = (e: any) => {
    setCurrentPage(e.data);
    if (flipSound.current) {
      flipSound.current.currentTime = 0;
      flipSound.current.play();
    }
  };

  const FlipBook = HTMLFlipBook as any;

  // 🔥 Detect screen size & adjust orientation
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        // Mobile & small tablets → Portrait
        setIsPortrait(true);
      } else {
        // Desktop → Landscape
        setIsPortrait(false);
      }
    };

    handleResize(); // Run once on mount
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Helper: play sound when flipping manually
  const playFlipSound = () => {
    if (flipSound.current) {
      flipSound.current.currentTime = 0;
      flipSound.current
        .play()
        .catch((err) => console.warn("Playback prevented:", err));
    }
  };

  return (
    <div className="h-full text-base text-justify">
      <div className="flex flex-col items-center py-10 px-5 md:px-10 overflow-hidden">
        <FlipBook
          width={isPortrait ? 400 : 500} // smaller width for portrait
          height={isPortrait ? 600 : 300} // taller height for portrait
          className="shadow-2xl rounded"
          style={{
            margin: "0 auto",
            backgroundImage: "url('/bookBg.jpg')",
            backgroundSize: "cover",
          }}
          showCover={true}
          size="stretch"
          minWidth={300}
          maxWidth={1200}
          minHeight={300}
          maxHeight={900}
          drawShadow={true}
          flippingTime={800}
          usePortrait={isPortrait} // 🔥 auto toggle
          autoSize={true}
          clickEventForward={true}
          startZIndex={0}
          maxShadowOpacity={0.5}
          mobileScrollSupport={true}
          useMouseEvents={true}
          swipeDistance={30}
          showPageCorners={true}
          disableFlipByClick={false}
          onFlip={onFlip}
          ref={flipBook}
        >
          {/* Cover Page */}
          <div
            data-density="hard"
            className="font-bold relative book"
            // style={{
            //   backgroundImage: `url(${frontCover})`,
            //   backgroundSize: "cover",
            //   backgroundPosition: "center",
            //   backgroundRepeat: "no-repeat",
            //   width: "100%",
            //   height: "100%",
            // }}
          >
            <div className="absolute top-1/4 left-[18%] sm:left-[27%] sm:top-[30%]  md:top-[12%] md:left-[20%] lg:top-[10%] lg:left-[25%] xl:left-[30%] 2xl:left-[35%] 2xl:top-[25%] px-5">
              <h1 className="text-center text-9xl">📖</h1>
              <h1 className="text-pink-700 text-xl md:text-3xl text-center py-3">
                Right Form of Verbs
              </h1>
              <p className="text-center text-blue-600">
                Click/touch to read the book
              </p>
            </div>

            <img src="/bookCover3.jpg" className="w-full h-full" alt="" />
          </div>

          {/* page1 */}
          <div className="p-3 text-black lg:p-5 bg-[#FDFAF7] book-shadow">
            <h2 className="text-xl font-bold ">Page 1</h2>
            {/* 1 */}
            <div className="text-base">
              <p>
                <span className=" font-bold">Rule: 1.</span> <br /> Always,
                regularly, daily, often, sometimes, normally,
                generally,occasionally, every + time (যেমন: Everyday), ইত্যাদি
                বাক্যের মধ্যে থাকলে, বা বাক্যটি চির সত্য হলে - বাক্যটি Present
                Indefinite Tense-এ হয়। যেমন:
              </p>
              <p className="dark:text-green-400">
                Q. I often (take) tea. <br />= I often <u>take</u> tea. <br />{" "}
                Q. He often (take) tea. <br />= He often <u>takes</u> tea.
              </p>

              {/* 2 */}
              <p className="pt-1">
                <strong>Rule:-2. </strong> <br />
                বাক্যের মধ্যে Now, at this moment, day by day থাকলে বাক্যটি
                সাধারণত Present Continuous Tense এ হয়। যেমন:
                <br />
                <span className="dark:text-green-400">
                  Q. She is (write) an email now.
                  <br />
                  =She is <u>writing</u> an email now.
                </span>
              </p>
            </div>
          </div>

          {/* page 2 */}
          <div className="p-3 text-black lg:p-5 bg-[#EFE5D6] book-shadow">
            <h2 className="text-xl font-bold">Page 2</h2>

            {/* 3 */}
            <div className="">
              <p>
                <strong>Rule: 3. </strong> <br />
                বাক্যর মধ্যে Already, recently, just, just now, lately, yet,
                ever, immediately, in the mean time থাকলে - বাক্যটি Present
                Perfect Tense এ হয়। যেমন: <br />
                Q. He not (choose) her career yet. <br />
                =He <u>has not chosen</u> her career yet.
              </p>
            </div>
            {/* 4 */}
            <div className="pt-1 text-base">
              <p>
                <span className=" font-bold">Rule: 4. </span> <br />
                বাক্যর মধ্যে Once, last, yesterday, ago, one day, in the past,
                long since
                <span className="bengali">
                  ইত্যাদি অতীত নির্দেশক শব্দ থাকলে ব্রাকেটের Verb টি V2 হবে বা
                  বাক্যটি Past Indefinite Tense হয়। যেমন:
                </span>
              </p>
              <p className="dark:text-green-400">
                Q. He (return) last night.
                <br />= He <u>returned</u> last night.
              </p>
              {/* 5 */}
              <p className="pt-1">
                <span className=" font-bold">Rule: 5. </span>
                <br />
                <strong> (a). </strong> Am, is, are, was, were, be, being, been,
                ...
                <br />
                pto-
              </p>
            </div>
          </div>

          {/* page 3 */}
          <div className="p-3 text-base text-black md:p-20 bg-[#EFE5D6]  book-shadow">
            <h2 className="text-xl font-bold ">Page 3</h2>
            <p className="">
              <span className=" font-bold">Rule: 5. </span>
              <br />
              <strong> (a). </strong> Am, is, are, was, were, be, being, been,
              (passive Voice এর ক্ষেত্রে ) এবং having get, got, gotten, be,
              become ইত্যাদির পরে ব্রাকেটে Verb থাকলে ব্রাকেটের Verb এর V
              <sub>3</sub> হয়। যেমন: <br />
              Q. Rice is (sell) in the market. <br />
              =Rice is <u>sold</u> in the market. <br />
              Q. I went out having (close) the door.
              <br />= I went out having closed the door.
            </p>

            <div>
              {/* <p className="py-1 font-bold"> আবার-</p>
              <p>
                <strong> (b). </strong>having এবং get, got, gotten এবং
                Linking-verb (be, become) এর পর ব্রাকেটের Verb টি V<sub>3</sub>
                হয়। <br />
                যেমনঃ
                <br />
                <span className="dark:text-green-400">
                  Q. I went out having (close) the door.
                  <br />= I went out having closed the door.
                </span>
              </p> */}
              <p className="text-rose-500 mt-4 font-semibold">কিন্তু</p>
              <p>
                <strong> (c). </strong>
                Hold, locate, bear, situate ইত্যাদি Verb ব্রাকেটে থাকলে বাক্যটি
                passive voice এ হয়। যেমনঃ
                <br />
                <span className="dark:text-green-400">
                  Q. The festival (hold). <br />= The festival was held.
                </span>
              </p>
            </div>
          </div>

          {/* page 4 */}
          <div className="p-3 text-base text-black lg:p-5 bg-[#EFE5D6]  book-shadow">
            <h2 className="text-xl font-bold">Page 4</h2>

            {/* 6 */}
            <div className="">
              <p>
                <strong>Rule: 6. </strong> <br />
                Can, could, may, might, shall, should, will, would, must, need,
                dare, had better, would rather, would better এর পরের ব্রাকেটের
                Verb টি V<sub>1</sub> হয় । যেমন:
              </p>
              <p className="dark:text-green-400">
                Q. Imran can (play) football.
                <br />= Imran can <u>play</u> football.
              </p>
            </div>
            {/* 7 */}
            <div className="pt-3">
              <p>
                <span className=" font-bold">Rule: 7.</span> <br />
                <strong> (a). </strong>সাধারণত To এর পরের ব্রাকেটের Verb টি V
                <sub>1</sub> হয়। যেমন:
              </p>
              <p className="dark:text-green-400">
                Q. He wanted to (live) in Dhaka.
                <br />= He wanted to <u>live</u> in Dhaka. <br />
                <span className="text-rose-600 font-bold">কিন্তু:-</span>
              </p>
              <p>
                <strong> (b). </strong> Be used to, with a view to, look forward
                to, get used to, addicted to, devoted to, with an eye to, be
                accustomed to, be opposed to, worth, 
              </p>
            </div>
          </div>

          {/* page 5 */}
          <div className="p-3 text-black lg:p-5 bg-[#EFE5D6] book-shadow">
            <h2 className="text-xl font-bold ">Page 5</h2>

            <p className="dark:text-green-400">
              cannot help, could not help, confess to ইত্যাদির পরে ব্রাকেটের
              Verb এর সাথে ing যুক্ত হয় । যেমন: <br />
              Q. She is used to (read) Quran.
              <br />= She is used to <u>reading</u> Quran.
            </p>
            <p className="font-bold">কিন্তু:-</p>
            <p>
              <strong> Rule-(c). </strong> <br />
              শুধু used to এর পরে verb এর V<sub>1</sub> হয়। যেমন:
            </p>
            <p className="dark:text-green-400">
              Q. He used to (drive) a car.
              <br />= He used to <u>drive</u> a car. <br />
            </p>
            <p className="text-rose-600 font-bold ">কিন্তু-</p>
            {/* 8 */}
            <p>
              <strong>Rule: 8. </strong>(To ছাড়া) অনান্য সকল preposition
              (যেমনঃ in, into, on, over, up, upon, of, by, with, without,
              before, after, away) এর পরের ব্রাকেটের verb এর সাথে ing হয়। যেমন:
            </p>
            <p className="dark:text-green-400">
              Q. He is tired of (drive) car.
              <br />= He is tired of <u>driving</u> car.
            </p>
          
          </div>

          {/* page 6 */}
          <div className="p-3 text-black lg:p-5 bg-[#EFE5D6] book-shadow">
            <h2 className="text-xl font-bold ">Page 6</h2>
            {/* 9 */}
            <p className="">
              <strong>Rule: 9. </strong> <br />
              Stop, finish, miss, risk, answer, continue, admit, deny,
              avoid, enjoy, fancy, imagine, delay, suggest, postpone, mind,  involve, practice ইত্যাদি Verb গুলোর পরে
              ব্রাকেটের Verb এর সাথে ing হয়।যেমনঃ
            </p>

            <p className="dark:text-green-400">
              Q. You tried to finish (write).
              <br />= You tried to finish <u>writing</u>.
            </p>
            <strong>কিন্তু:-</strong>
            <p>
              সাধারণত এই Verb গুলো ছাড়া অন্য কোন Verb এর পরে ব্রাকেটের verb এর
              V1 হয়। যেমনঃ <br />
              <span className="dark:text-green-400">
                Q. He tried hard (pass) the exam.
              </span>
              <br />
              <span className="dark:text-green-400">
                = He tried har <u>pass</u> the exam
              </span>
            </p>
            
          </div>

          {/* page 7 */}
          <div className="p-2 text-black lg:p-5 bg-[#EFE5D6] book-shadow">
            <h2 className="text-xl font-bold ">Page 7</h2>

            {/* 10 */}
            <p className="">
              <strong>Rule: 10. </strong> <br />
              <strong> (a). </strong> প্রথম বক্যে Fancy, wish, it is time, it is
              high time থাকলে পরের বাক্যের ব্রাকেটের verb এর V <sub>2</sub> হয়।{" "}
              যেমন:
            </p>
            <p className="dark:text-green-400">
              Q. He wishes he (sing) a song.
              <br />= He wishes he <u>sang</u> a song.
            </p>
            <p>
              <strong> (b). </strong>কিন্তু প্রথম বক্যে Fancy, wish, it is time,
              it is high time, as if, if, as though, থাকলে পরের বাক্যের ব্রাকেটে
              be এর স্থলে সাধারণত were হয়। যেমনঃ <br />
              Q. He wishes he (be) a king. <br />
              =He wishes he <u>were</u> a king.
            </p>
            <p>
              <strong>Rule: 11. </strong> <br />
              <strong> (a). </strong> প্রথম বক্যে Fancy, wish, it is time, it is
              high time থাকলে পরের বাক্যের ব্রাকেটের Verb এর V<sub>2</sub>
              হয়। যেমন: <br />
              Q. He wishes he (sing) a song.
              <br />= He wishes he <u>sang</u> a song.
            </p>
          </div>

          {/* page 8 */}
          <div className="p-3 text-black lg:p-5 bg-[#EFE5D6] book-shadow">
            <p className="text-xl font-bold mb-1">Page 8</p>
            <div className="">
              কিন্তু
              <p className="py-">
                <strong> (b). </strong> প্রথম বক্যে Fancy, wish, it is time, it
                is high time, as if, as though, if থাকলে পরের বাক্যের ব্রাকেটে
                be এর স্থলে সাধারণত were হয়। <br />
                যেমনঃ <br />
                Q. He wishes he (be) a king. <br />
                =He wishes he <u>were</u> a king.
              </p>
              {/* 12 */}
              <p>
                <strong>Rule: 12. </strong> <br />
                As if, as though, এবং since দ্বারা দুটি বক্য যুক্ত হলে এদের
                প্রথমটি Present Indefinite tense পরেরটি Past Indefinite tense
                হয়, এবং প্রথমটি Past Indefinite tense হলে পরেরটি Past Perfect
                tense হয়। যেমন: <br />
                Q. Shohel talks as though he (become) a leader. <br />
                =Shohel talks as though he <u>became</u> a leader. <br />
                Q. Rohim talks as though he (be) a leader. <br />
                =Rohim talks as though he <u>had been</u> a leader.
              </p>
            </div>
          </div>

          {/* page 9 */}
          <div className="p-2 text-black md:p-14 bg-[#EFE5D6] book-shadow">
            <h2 className="text-xl font-bold">Page 9</h2>
            {/* 13 */}
            <div className="">
              <p>
                <span className=" font-bold">Rule: 13. </span> <br />
                <strong> (a). </strong> If দ্বারা শুরু বাক্যটি Present
                Indefinite tense হলে if ছাড়া বাক্যে Future Indefinite Tense হয়।
                <br />
                Q. If He comes, I (go) to his house. <br />
                =If He comes, I <u>will go</u> to his house. <br />
                <strong>(b). </strong>If দ্বারা শুরু বাক্যটি Past Indefinite
                tense হলে if ছাড়া বাক্যটি Subject + would/could /might
                + V<sub>1</sub> হবে। যেমন:
                <br />
                Q. If he came, I (go) there.
                <br />= If he came, I <u>would go</u> there.
              </p>

              <p>
                <strong> (c). </strong> If বাক্যটি Past Perfect
                tense হলে if ছাড়া বাক্যটি Subject + would have/could have/might have + V<sub>3</sub> হবে। যেমন:
                <br />
                Q. If you had told me this, I (buy) a car. <br />= If you had
                told me this, I <u>would have bought</u> a car.
              </p>
            </div>
          </div>

          {/* page 10 */}
          <div className="p-3  text-black md:p-12 bg-[#EFE5D6] book-shadow">
            <h2 className="text-xl font-bold mb-2">Page 10</h2>

            <p className="">
              <strong> (d) </strong>যদি Had + Subject + V<sub>3</sub> থাকে
              তাহলে had ছাড়া বাক্যেটি- Subj + would have/could have/might have + V<sub>3</sub> হবে/হয়। যেমন: <br />
              Q. Had Muni told me this, I (buy) a car. <br />
              =Had Muni told me this, I<u> would have bought</u> a car.
            </p>
            <div className="pb-">
              {/* 14 */}
              <p>
                <span className=" font-bold">Rule: 14. </span> <br />
                V + object + (Verb) এভাবে ব্যবহার হলে ব্রাকেটে Verb এর সাথে ing
                যুক্ত হয়। যেমন: <br />
                Q. I saw him (play) card. <br />= I saw him playing card.
              </p>

              {/* 15 */}
              <p className="">
                <strong>Rule: 15. </strong>
                সাধারণত ব্রাকেটে verb দ্বারা বাক্য শুরু হলে সেই verb এর সাথে ing
                যুক্ত হয়। যেমন: <br />
                Q. (Go) home, Ruhul will sleep. <br />
                =Going home, Ruhul will sleep.
              </p>
            </div>
          </div>

          {/* page 11 */}
          <div className="p-3 text-black lg:p-5 bg-[#EFE5D6] book-shadow">
            <h2 className="text-xl font-bold mb-2">Page 11</h2>
            {/* 16 */}
            <div className="">
              <p>
                <strong>Rule: 16. </strong> <br />
                objective এবং possessive case এর পর verb এর সাথে ing হয়। যেমন:{" "}
                <br />
                Q. Zahid insisted on my (go) his home. <br />
                =Zahid insisted on my going his home.
              </p>
              {/* 17 */}
              <p>
                <strong>Rule: 17. </strong> <br />
                Since/for এর পর সময় বা (period of time) থাকলে Present Perfect
                Continuous tense হয়। যেমন: <br />
                Q. Ruhul (read) in our college for two years. <br />
                =Ruhul has been reading in our college for two years. <br />
                <span className="text-rose-600 font-bold ">কিন্তু-</span> <br />
                Since/ for এর পরে সময় বা (period of time) থাকলে এবং ব্রাকেটে be
                থাকলে Present Perfect tense হয়। যেমন:
              </p>
            </div>
          </div>

          {/* page 12 */}
          <div className="p-3 text-black md:p-12 bg-[#EFE5D6] book-shadow">
            <h2 className="text-xl font-bold ">Page 12</h2>

            <div className="">
              <p className="">
                Q. He (be) in Dhaka for two years. <br />
                =He has been in Dhaka for two years.
              </p>

              {/* 18 */}
              <p>
                <strong>Rule-18: </strong> <br />
                Next, tomorrow, ইত্যাদি বাক্যে থাকলে Future Indefinite হয়। যেমনঃ
              </p>
              <p className="dark:text-green-400">
                Q. He (return) home next day.
                <br />= He Will return home next day.
              </p>
            </div>
            {/* 19 */}
            <div className="">
              <p>
                <strong>
                  Rule-19: <br />
                </strong>
                While এর পরে Subject + V থাকলে Past Continuous Tense হয়। যেমন:{" "}
                <br />
                Q. While (Walk) I saw him. <br />
                =While Walking, I saw him.
                <br />
                <span className="text-pink-600 font-bold">কিন্তু- </span>
                While + (V) থাকলে ব্রাকেটের Verb এর সঙ্গে ing যুক্ত হয়। <br />
                Q. While he (Walk), I saw him. <br />
                =While I Was walking, I saw him.
              </p>
            </div>
          </div>

          {/* page 13 */}
          <div className="p-3 text-black md:p-11 bg-[#EFE5D6] book-shadow">
            <h2 className="text-xl font-bold mb-2">Page 13</h2>
            {/* 20 */}
            <div className="">
              <p className="">
                <strong>Rule-20: </strong> <br />
                Subject এর পরে Not থাকলে Subject এবং tense অনুসারে সাহায্যকারী
                Verb এবং principal verb হয়। যেমন: <br />
                Q. He not always (drink) tea.
                <br />= He does not always drink tea.
              </p>
            </div>
            {/* 21 */}
            <div className="">
              <p className="bengali">
                <strong>Rule-21: </strong> <br />
                Lest এর বাক্যাংশের subject এর পরে verb আগে should/ might বসে।
                যেমন:
              </p>
              <p className="dark:text-green-400">
                = He walked fast lest he (miss) the train. <br />
                =He walked fast lest he might miss the train.
              </p>
            </div>
            {/* 22 */}
            <p className="py-2 font-bold">Subject-verb Agreement</p>
            <div className="">
              <p className="">
                <strong>Rule-22: </strong> <br />
                ব্রাকেটে Be/to be এর স্থলে Tense অনুসারে am, ...
              </p>
            </div>
          </div>

          {/* page 14 */}
          <div className="p-3 text-black lg:p-5 bg-[#EFE5D6] book-shadow">
            <p className="text-xl font-bold ">Page 14</p>
            <p className="">
              am, is, are, was, were, be, being, been এর যেকোন একটি হতে পারে।
              যেমন: <br />
              Q. The rich (to be) not always happy. <br />
              =The poor are not always happy.
            </p>

            {/* 23 */}
            <div className="py-2">
              <p className="">
                <strong>Rule-23: </strong> <br />
                দৈঘ বা পরিমাণ বাচক শব্দ Sub হেল সেটি Singular হয়। যেমন: <br />
                Q. Ten kgs (be) heavy weight. <br />
                =Ten kgs is heavy weight.
              </p>
            </div>
            {/*24 */}
            <div className="">
              <p className="bengali">
                <strong>Rule-24: </strong> <br /> Wh (যেমন: who, which) এর পরে
                Verb থাকলে Wh এর পূর্বের subject অনুসারে verb হয়। <br />
                যেমন: <br />
                Q. It is I who (be) to blame.
                <br />= It is I who am to blame.
              </p>
            </div>
          </div>

          {/* page 15 */}
          <div className="p-4 lg:p-5 text-black bg-[#EFE5D6] book-shadow">
            <h2 className="text-xl font-bold mb-2">Page 15</h2>
            {/* 25 */}
            <div className="pb-3">
              <p className="bengali">
                <strong>Rule-25: </strong> Nobody, no one, none, one, somebody,
                someone, something এগুলো Subject হলে বা No, each, every, any,
                either of, neither of, each of বা এগুলোর পরে Noun থাকলে Subject
                singular হয়। <br />
                যেমন:
              </p>
              <p className="dark:text-green-400">
                Q. Something (be) wrong.
                <br />= Something is wrong.
              </p>
              {/* 26 */}
            <p className="">
              <strong>Rule: 26. </strong> <br />
              Before/after দ্বারা দুটি বাক্য যুক্ত হলে এদের একটি Past Indefinite
              Tense হলে অন্যটি Past Perfect Tense হয়। যেমন: <br />
              Q. He came home after I (eat) rice. <br />
              =He came home after I <u> had eaten</u> rice.
              <br />
              <span className="text-pink-600 font-bold">Note: </span>{" "}
              Before-এ-Before এবং after-এ-after হয়।
            </p>
            </div>
          </div>

          {/* page 17 */}
          <div className="p-6 lg:p-5 text-black bg-[#EFE5D6] book-shadow">
            <h2 className="text-xl font-bold mb-2">Page 17</h2>
            <h2>Exercise</h2>
            <p>1. The moon (shine) at night.</p>
            <p>2. Flowers (be) gift of nature.</p>
            <p>3. It (dew) in winter.</p>
            <p>4. The rich (be) not always happy.</p>
            <p>5. They (be) blessed.</p>
            <p>6. The pious (be) always happy.</p>
            <p>7. Ice (float) on water.</p>
            <p>8. Muni (carry) an umbrella daily.</p>
            <p>9. What you (do) now?</p>
            <p>10. Why Mr. Roni (look) so angry?</p>
            <p>11. Munira (watch) television often?</p>
            <p>
              12. Mim usually (go) to school by bus, but today he (go) by train.
            </p>
            <p>13. Size do not matter (chop) wood.</p>
            <p>14. The baby (cry) because it is hungry now.</p>
          </div>

          {/* page 18 */}
          <div className="p-6 lg:p-5 text-black bg-[#EFE5D6] book-shadow">
            <h2 className="text-xl font-bold mb-2">Page 18</h2>
            <p>15. What you (go) to drink now?</p>
            <p>16. Rina (return) home just now.</p>
            <p>17. The play just (begin).</p>
            <p>18. He not yet (finish) the work.</p>
            <p>19. I just (have) a snack.</p>
            <p>20. Have you ever (be) to Cox’s Bazar?</p>
            <p>21. Why she (look) so nervous?</p>
            <p>22. My brother just (move) to a new place.</p>
            <p>23. Rahul can’t help (listen) to them.</p>
            <p>18. You (see) her lately?</p>
            <p>25. I have a boy (come) from the orphanage.</p>
            <p>26. We are none of us (get) any younger.</p>
            <p>27. I don’t mind (have) asparagus.</p>
            <p>28. Shikha saw him (go) to the town.</p>
            <p>29. I answered (thank) her.</p>
          </div>
          {/* page 19 */}
          <div className="p-3 text-black md:p-18 bg-[#EFE5D6] book-shadow">
            <h2 className="text-xl font-bold mb-2">Page 19</h2>
            <p>30. The old sailor went away (leave) the marriage guest.</p>
            <p>31. They just (reach) playground.</p>
            <p>32. What you generally (do) for living?</p>
            <p>33. Salma just (get) her new job.</p>
            <p>34. I just (receive) my father’s letter.</p>
            <p>35. The tree not (bear) any fruit yet.</p>
            <p>36. He recently (return) home from abroad.</p>
            <p>37. I found the boy (sleep) on the bed.</p>
            <p>38. They saw the drunk porter (lie) on the floor.</p>
            <p>39. It is many years since they first (meet).</p>
            <p>40. Ten years have passed since he (come) here.</p>
            <p>41. It was long sine I (see) her last.</p>
            <p>42. Eight years have passed since I (come).</p>
            <p>43. They (play) football since morning.</p>
          </div>

          {/* page 20 */}
          <div className="p-6 md:p-18 text-black bg-[#EFE5D6] book-shadow">
            <h2 className="text-xl  font-bold mb-2">Page 20</h2>
            <p>45. I not (choose) my career yet.</p>
            <p>46. I (see) her long since.</p>
            <p>47. Last night I (have) a wonderful dream.</p>
            <p>48. He (go) ten minutes ago.</p>
            <p>49. Lucy (break) her leg in a car accident last year.</p>
            <p>50. Lucy (be) in Dhaka since last week.</p>
            <p>51. The boy (suffer) from fever for five days.</p>
            <p>52. It is high time we (start) the work.</p>
            <p>53. It is high time they (leave) home.</p>
            <p>54. Imran talks as though he (be) a king.</p>
            <p>55. I wish she (be) a millionaire.</p>
            <p>56. She sings as if she (to be) mad.</p>
            <p>57. He proceeded as though I not (speak).</p>
            <p>58. It reflects the matter as if he (know) it.</p>
          </div>

          {/* page 21 */}
          <div className="p-6 md:p-18 text-black bg-[#EFE5D6] book-shadow">
            <h2 className="text-xl font-bold mb-2">Page 21</h2>
            <p>59. Fancy (turn) a trifle pale.</p>
            <p>60. The door was (open) by a Christian.</p>
            <p>61. Munir was greatly (hug) by Della.</p>
            <p>62. When was the book (buy)?</p>
            <p>63. The beggar went away (cry).</p>
            <p>64. The children came to us (run).</p>
            <p>65. He looked at his mother (smile).</p>
            <p>
              66. They (sail) away to the south until they arrived in cold grey
              sea.
            </p>
            <p>67. Della (save) every penny she could.</p>
            <p>68. Today she (weight) twenty one stone.</p>
            <p>69. Fifty miles (be) a long way.</p>
            <p>70. Why (be) you not with her?</p>
            <p>71. It (be) like him.</p>
            <p>72. His eyes (be) fixed upon Della.</p>
            <p>73. Jim’s income (be) shrunk to twenty dollars.</p>
          </div>

          {/* page 22 */}
          <div className="p-6 md:p-18 text-black bg-[#EFE5D6] book-shadow">
            <h2 className="text-xl font-bold mb-2">Page 22</h2>
            <p>
              74. The headmaster and the secretary (be) present in the meeting
              yesterday.
            </p>
            <p>75. When you (come) last night?</p>
            <p>76. When he (go) to market yesterday?</p>
            <p>77. Where they (see) him last week?</p>
            <p>78. It is high time we (start) for the station.</p>
            <p>79. If I were a bird, I (fly) in the sky.</p>
            <p>80. Would that I (enter) the room.</p>
          </div>
          {/* page 23 */}
          <div className="p-6 md:p-18 text-black bg-[#EFE5D6] book-shadow">
            <h2 className="text-xl font-bold mb-2">Page 23</h2>
            <p>
              When sentences contain <b>now, at this moment, at present</b> →
              use <b>Present Continuous</b>.
            </p>
          </div>

          {/* Back Cover */}
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600  text-white text-xl font-bold">
            <div className="w-full h-full text-7xl flex flex-col items-center justify-center">
              <p className="">🔚 </p>
              <p className="">The End</p>
            </div>
          </div>
        </FlipBook>

        {/* Button section */}
        <div className="flex flex-col items-center">
          {/* Navigation Controls */}
          <div className="flex items-center gap-4 mt-6">
            <button
              className="px-3 py-1 bg-gray-700 text-white rounded"
              onClick={() => {
                playFlipSound();
                flipBook.current.pageFlip().turnToPrevPage();
              }}
            >
              ◀ Prev
            </button>

            <span className="text-lg font-semibold">
              Page {currentPage + 1} / {totalPages}
            </span>

            <button
              className="px-3 py-1 bg-gray-700 text-white rounded"
              onClick={() => {
                playFlipSound();
                flipBook.current.pageFlip().turnToNextPage();
              }}
            >
              Next ▶
            </button>
          </div>

          {/* Jump to Page */}
          <div className="w-full mt-4 flex items-center justify-center gap-2">
            <input
              type="number"
              min="1"
              max={totalPages}
              value={jumpPage}
              onChange={(e) => {
                playFlipSound();
                const value = e.target.value;
                setJumpPage(value === "" ? "" : parseInt(value, 10));
              }}
              className="border px-2 py-1 rounded max-w-fit text-center"
              placeholder="Put a page number and click Go to..."
            />
            <button
              className="px-3 py-1 bg-indigo-600 text-white rounded disabled:opacity-50"
              disabled={
                jumpPage === "" || jumpPage < 1 || jumpPage > totalPages
              }
              onClick={() => {
                if (
                  typeof jumpPage === "number" &&
                  jumpPage >= 1 &&
                  jumpPage <= totalPages
                ) {
                  flipBook.current.pageFlip().flip(jumpPage - 1);
                }
              }}
            >
              Go
            </button>
          </div>

          {/* Numbered Page Buttons */}
          <div className="flex flex-wrap justify-center gap-2 mt-4">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                className={`px-3 py-1 rounded border ${
                  currentPage === i
                    ? "bg-indigo-600 text-white"
                    : "bg-gray-200 hover:bg-gray-300"
                }`}
                onClick={() => {
                  playFlipSound();
                  flipBook.current.pageFlip().flip(i);
                }}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* scrolling page */}
      <div className="h-full px-4 md:w-[60%] mx-auto ">
        <div className="px-5 w-full flex items-center justify-center py-20">
          <div className="relative w-11/12 md:w-10/12 h-[400px] bg-black text-white flex items-center justify-center text-2xl md:text-6xl font-bold rounded-2xl overflow-hidden">
            <span className="text-white">Right Form of Verbs</span>

            <div className="effect"></div>
          </div>
        </div>

        <div className="">
          {/* Rules */}
          <h2 className="mt-5">Rules:</h2>
          <div className="text-lg md:text-xl">
            {/* 1 */}
            <div className="pb-3">
              <p>
                <span className=" font-bold">Rule: 1.</span> Always, regularly,
                daily, often, sometimes, normally, generally,occasionally, every
                + time (যেমন: Everyday),
                <br />
                <span className="bengali">
                  ইত্যাদি থাকলে, বা বাক্যটি চির সত্য হলে - বাক্যটি Present
                  Indefinite Tense-এ হয়। <br />
                  যেমন:
                </span>
              </p>
              <p className="dark:text-green-400">
                Q. I often (take) tea. <br />= I often <u>take</u> tea. <br />{" "}
                Q. He often (take) tea. <br />= He often <u>takes</u> tea.
              </p>
            </div>

            {/* 2 */}
            <p>
              <strong>Rule:-2. </strong> বাক্যের মধ্যে Now, at this moment, day
              by day, ইত্যাদি থাকলে বাক্যটি সাধারণত Present Continuous Tense এ
              হয়। <br />
              যেমন:
              <br />
              <span className="dark:text-green-400">
                Q. She is (write) an email now.
                <br />
                =She is <u>writing</u> an email now.
              </span>
            </p>

            {/* 3 */}
            <div className="pb-3">
              <p>
                <strong>Rule: 3. </strong> Before/after দ্বারা দুটি বাক্য যুক্ত
                হলে
                <span className="bengali">
                  এদের একটি Past Indefinite Tense হলে অন্যটি Past Perfect Tense
                  হয়। Before-এ-Before এবং after-এ-after হয় । <br />
                  যেমন:
                </span>
              </p>
              <p className="dark:text-green-400">
                Q. He came home after I (eat) rice.
                <br />= He came home after I <u> had eaten</u> rice.
              </p>
            </div>

            {/* 4 */}
            <div className="pb-3">
              <p>
                <strong>Rule: 4. </strong> বাক্যর মধ্যে Already, recently, just,
                just now, lately, yet, ever, immediately, in the mean time
                <span className="bengali">
                  থাকলে - বাক্যটি Present Perfect Tense এ হয়। <br />
                  যেমন:
                </span>
              </p>
              <p className="dark:text-green-400">
                Q. He not (choose) her career yet.
                <br />= He <u>has not chosen</u> her career yet.
              </p>
            </div>

            {/* 5 */}
            <div className="pb-3">
              <p>
                <span className=" font-bold">Rule: 5. </span> বাক্যর মধ্যে Once,
                last, yesterday, ago, one day, in the past, long since
                <span className="bengali">
                  ইত্যাদি অতীত নির্দেশক শব্দ থাকলে ব্রাকেটের Verb টি V2 হবে বা
                  বাক্যটি Past Indefinite Tense হয়।
                  <br />
                  যেমন:
                </span>
              </p>
              <p className="dark:text-green-400">
                Q. He (return) last night.
                <br />= He <u>returned</u> last night.
              </p>
            </div>

            {/* 6 */}
            <div className="pb-3">
              <p>
                <span className=" font-bold">Rule: 6. </span>
                <br />
                <strong> (a). </strong> Am, is, are, was, were, be, being, been,
                <span className="bengali">
                  ইত্যাদির পরে ব্রাকেটে Verb থাকলে passive Voice এর ক্ষেত্রে
                  ব্রাকেটের Verb এর V<sub>3</sub> হয়।
                  <br /> যেমন:
                </span>
              </p>
              <p className="dark:text-green-400">
                Q. Rice is (sell) in the market.
                <br />= Rice is <u>sold</u> in the market.
              </p>
              <strong> আবার- </strong>
              <p>
                <strong> (b). </strong>having এবং get, got, gotten এবং
                Linking-verb (be, become) এর পর ব্রাকেটের Verb টি V<sub>3</sub>{" "}
                হয়। <br />
                যেমনঃ
                <br />
                <span className="dark:text-green-400">
                  Q. I went out having (close) the door.
                  <br />= I went out having closed the door.
                </span>
              </p>
              <strong className="text-rose-500">কিন্তু</strong>

              <p>
                <strong> (c). </strong>
                Hold, locate, bear, situate ইত্যাদি Verb ব্রাকেটে থাকলে বাক্যটি
                passive voice এ হয়। <br />
                যেমনঃ
                <br />
                <span className="dark:text-green-400">
                  Q. The festival (hold). <br />= The festival was held.
                </span>
              </p>
            </div>

            {/* 7 */}
            <div className="pb-3">
              <p>
                <strong>Rule: 7. </strong> Can, could, may, might, shall,
                should, will, would, must, need, dare, had better, would rather,
                would better এর পরের ব্রাকেটের Verb টি V<sub>1</sub> হয় । <br />
                যেমন:
              </p>
              <p className="dark:text-green-400">
                Q. Imran can (play) football.
                <br />= Imran can <u>play</u> football.
              </p>
            </div>

            {/* 8 */}
            <div className="pb-3">
              <p>
                <span className=" font-bold">Rule: 8.</span> <br />
                <strong> (a). </strong>সাধারণত To এর পরের ব্রাকেটের Verb টি V
                <sub>1</sub> হয়। <br />
                যেমন:
              </p>
              <p className="dark:text-green-400">
                Q. He wanted to (live) in Dhaka.
                <br />= He wanted to <u>live</u> in Dhaka.
              </p>
              <strong className="text-rose-600 font-bold">কিন্তু:-</strong>
              <p>
                <strong> (b). </strong> Be used to, with a view to, look forward
                to, get used to, addicted to, devoted to, with an eye to, be
                accustomed to, be opposed to, worth, cannot help, could not
                help, confess to ইত্যাদির পরে ব্রাকেটের Verb এর সাথে ing যুক্ত
                হয় । <br />
                যেমন:
              </p>
              <p className="dark:text-green-400">
                Q. She is used to (read) Quran.
                <br />= She is used to <u>reading</u> Quran.
              </p>
              <strong>কিন্তু:-</strong>
              <p>
                <strong> (c). </strong> শুধু used to এর পরে verb এর V
                <sub>1</sub> হয়। <br />
                যেমন:
              </p>
              <p className="dark:text-green-400">
                Q. He used to (drive) a car.
                <br />= He used to <u>drive</u> a car.
              </p>
            </div>

            {/* 9 */}
            <strong className="text-rose-600 font-bold">কিন্তু-</strong>
            <div className="pb-3">
              <p>
                <strong>Rule: 9. </strong> অনান্য সকল preposition (যেমনঃ in,
                into, on, over, up, upon, of, by, with, without, before, after,
                away) এর পরের ব্রাকেটের verb এর সাথে ing হয়। <br />
                যেমন:
              </p>
              <p className="dark:text-green-400">
                Q. He is tired of (drive) car.
                <br />= He is tired of <u>driving</u> car.
              </p>
            </div>

            {/* 10 */}
            <div className="pb-3">
              <p>
                <strong>Rule: 10. </strong> Stop, mind, finish, miss, risk,
                answer, continue, admit, deny, avoid, enjoy, fancy, imagine,
                delay, suggest, postpone, involve, practice ইত্যাদি Verb গুলোর
                পরে ব্রাকেটের Verb এর সাথে ing হয়।
              </p>
              যেমনঃ
              <p className="dark:text-green-400">
                Q. You tried to finish (write).
                <br />= You tried to finish <u>writing</u>.
              </p>
              <strong>কিন্তু:-</strong>
              <p className="">
                সাধারণত এই Verb গুলো ছাড়া অন্য কোন Verb এর পরে ব্রাকেটের verb এর
                V1 হয়। <br />
                যেমনঃ <br />
                <span className="dark:text-green-400">
                  {" "}
                  Q. He tried hard (pass) the exam.
                </span>{" "}
                <br />
                <span className="dark:text-green-400">
                  = He tried har <u>pass</u> the exam
                </span>
              </p>
            </div>

            {/* 11 */}
            <div className="pb-3">
              <p>
                <strong>Rule: 11. </strong> <br />
                <strong> (a). </strong> প্রথম বক্যে Fancy, wish, it is time, it
                is high time থাকলে পরের বাক্যের ব্রাকেটের verb এর V <sub>2</sub>{" "}
                হয়। <br />
                যেমন:
              </p>
              <p className="dark:text-green-400">
                Q. He wishes he (sing) a song.
                <br />= He wishes he <u>sang</u> a song.
              </p>

              <p>
                <strong> (b). </strong>কিন্তু প্রথম বক্যে Fancy, wish, it is
                time, it is high time, as if, as though, if
                <span className="bengali">
                  থাকলে পরের বাক্যের ব্রাকেটে be এর স্থলে সাধারণত were হয়।{" "}
                  <br />
                  যেমনঃ
                </span>
              </p>
              <p className="dark:text-green-400">
                Q. He wishes he (be) a king.
                <br />= He wishes he <u>were</u> a king.
              </p>
            </div>

            {/* 12 */}
            <div className="pb-3">
              <p>
                <strong>Rule: 12. </strong> As if, as though, এবং since দ্বারা
                দুটি বক্য যুক্ত
                <span className="bengali">
                  হলে এদের প্রথমটি Present Indefinite tense পরেরটি Past
                  Indefinite tense হয়, এবং প্রথমটি Past Indefinite tense হলে
                  পরেরটি Past Perfect tense হয়। <br />
                  যেমন:
                </span>
              </p>
              <p className="dark:text-green-400">
                Q. Shohel talks as though he (become) a leader.
                <br />= Shohel talks as though he <u>became</u> a leader.
                <br />
                Q. Rohim talks as though he (be) a leader. <br />= Rohim talks
                as though he <u>had been</u> a leader.
              </p>
            </div>

            {/* 13 */}
            <div className="pb-3">
              <p>
                <span className=" font-bold">Rule: 13. </span>
                <strong> (a). </strong> If দ্বারা শুরু বাক্যটি
                <span className="bengali">
                  Present Indefinite tense হলে পরের বাক্যের/ if ছাড়া বাক্যের
                  Subject এর পরে will হবে এবং Verb এর V<sub>1</sub> হয়। <br />
                  যেমন:
                </span>
                <br />
                Q. If He comes, I (go) to his house.
                <br />= If He comes, I <u>will go</u> to his house.
              </p>

              <p>
                <strong>(b). </strong>If দ্বারা শুরু বাক্যটি Past Indefinite
                tense হলে পরের বাক্যের/ if ছাড়া বাক্যের Subject এর পরে would/
                could / might হবে এবং verb এর <sub>1</sub> হয়। <br />
                যেমন:
                <br />
                Q. If he came, I (go) there.
                <br />= If he came, I <u>would go</u> there.
              </p>

              <p>
                <strong> (c). </strong> If দ্বারা শুরু বাক্যটি Past Perfect
                tense হলে পরের বাক্যের/ if ছাড়া বাক্যের Subject এর পরে would
                have/ could have/ might have হবে এবং verb এর V<sub>3</sub> হয়।{" "}
                <br />
                যেমন:
                <br />
                Q. If you had told me this, I (buy) a car.
                <br />= If you had told me this, I <u>would have bought</u> a
                car.
              </p>

              <p>
                <strong> (d) </strong> Had + Subject + V<sub>3</sub>- থাকলে পরের
                বাক্যের/ had ছাড়া বাক্যের Subject এর পরে would have/ could have/
                might have হবে এবং Verb এর V<sub>3</sub> হয়। <br />
                যেমন:
              </p>
              <p className="dark:text-green-400">
                Q. Had Muni told me this, I (buy) a car.
                <br />= Had Muni told me this, I<u> would have bought</u> a car.
              </p>
            </div>

            {/* 14 */}
            <div className="pb-3">
              <p>
                <span className=" font-bold">Rule: 14. </span>V + object +
                (Verb) এভাবে ব্যবহার হলে ব্রাকেটে Verb এর সাথে ing যুক্ত হয়।{" "}
                <br />
                যেমন:
              </p>
              <p className="dark:text-green-400">
                Q. I saw him (play) card.
                <br />= I saw him playing card.
              </p>
            </div>

            {/* 15 */}
            <div className="pb-3">
              <p className="bengali">
                <strong>Rule: 15. </strong>
                <span>
                  সাধারণত ব্রাকেটে verb দ্বারা বাক্য শুরু হলে সেই verb এর সাথে
                  ing যুক্ত হয়। <br />
                  যেমন:
                </span>
              </p>
              <p className="dark:text-green-400">
                Q. (Go) home, Ruhul will sleep.
                <br />= Going home, Ruhul will sleep.
              </p>
            </div>

            {/* 16 */}
            <div className="pb-3">
              <p>
                <strong>Rule: 16. </strong> objective এবং possessive case এর পর
                verb এর সাথে ing হয়। <br />
                যেমন:
              </p>
              <p className="dark:text-green-400">
                Q. Zahid insisted on my (go) his home.
                <br />= Zahid insisted on my going his home.
              </p>
            </div>

            {/* 17 */}
            <div className="pb-3">
              <p>
                <strong>Rule: 17. </strong> Since/for এর পর সময় বা (period of
                time) থাকলে Present Perfect Continuous tense হয়। <br />
                যেমন:
                <br />
                <span className="dark:text-green-400">
                  Q. Ruhul (read) in Tilokpur College for two years. <br />=
                  Ruhul has been reading in Tilokpur College for two years.
                </span>
                <br />
                <strong className="text-rose-600 font-bold">
                  কিন্তু-
                </strong>{" "}
                <br />
                Since/ for এর পরে সময় বা (period of time) থাকলে এবং ব্রাকেটে be
                থাকলে Present Perfect tense হয়। <br />
                যেমন:
                <br />
                <span className="dark:text-green-400">
                  Q. He (be) in Tilokpur College for two years.
                  <br />= He has been in Tilokpur College for two years.
                </span>
              </p>
            </div>

            {/* 18 */}
            <div className="pb-3">
              <p>
                <strong>Rule-18: </strong> Next, tomorrow, ইত্যাদি phrase থাকলে
                Future Indefinite হয়। Subject এর পরে will থাকে।
              </p>
              <p className="dark:text-green-400">
                Q. He (return) home next day.
                <br />= He Will return home next day.
              </p>
            </div>

            {/* 19 */}
            <div className="pb-3">
              <p>
                <strong>Rule-18: </strong> 19. While এর পরে Subject + V থাকলে
                Past Continuous Tense হয়। কিন্তু While + (V) থাকলে ব্রাকেটের
                Verb এর সঙ্গে ing যুক্ত হয়।
                <br />
                যেমন:
              </p>
              <p className="dark:text-green-400">
                Q. While (Walk) I saw him.
                <br />
                = While Walking, I saw him.
                <br />
                Q. While he (Walk), I saw him.
                <br />= While I Was walking, I saw him.
              </p>
            </div>

            {/* 20 */}
            <div className="pb-3">
              <p className="bengali">
                <strong>Rule-20: </strong>
                <span>
                  Subject এর পরে Not থাকলে Subject এবং tense অনুসারে সাহায্যকারী
                  Verb এবং principal verb হয়। <br />
                  যেমন:
                </span>
                <p className="dark:text-green-400">
                  Q. He not always (drink) tea.
                  <br />= He does not always drink tea.
                </p>
              </p>
            </div>

            {/* 21 */}
            <div className="pb-3">
              <p className="bengali">
                <strong>Rule-21: </strong> Second Clause এর আগে lest থাকলে, সেই
                বাক্যাংশের subject এর পরে verb আগে should/ might বসে।
                <br />
                যেমন:
              </p>
              <p className="dark:text-green-400">
                = He walked fast lest he (miss) the train.
                <br />= He walked fast lest he might miss the train.
              </p>
            </div>

            <div className="mt-5">
              {/* 22 */}
              <h2>Subject-verb Agreement</h2>
              <div className="pb-3">
                <p className="bengali">
                  <strong>Rule-22: </strong> ব্রাকেটে Be/to be থাকলে be এর স্থলে
                  Tense অনুসারে am, is, are, was, were, be, being, been এর যেকোন
                  একটি হতে পারে। <br />
                  যেমন:
                </p>
                <p className="dark:text-green-400">
                  Q. The rich (to be) not always happy.
                  <br />= The poor are happy.
                </p>
              </div>

              {/* 23 */}
              <div className="pb-3">
                <p className="bengali">
                  <strong>Rule-23: </strong> দৈঘ বা পরিমাণ বাচক শব্দ Sub হেল সেই
                  Sub এর পরে verb singular হয়। <br />
                  যেমন:
                </p>
                <p className="dark:text-green-400">
                  Q. Ten kgs (be) heavy weight.
                  <br />= Ten kgs is heavy weight.
                </p>
              </div>

              <div className="pb-3">
                <p className="bengali">
                  <strong>Rule-24: </strong> Wh (who, which) এর পরে Verb থাকলে
                  Wh এর পূর্বের subject অনুসারে verb হয়। <br />
                  যেমন:
                </p>
                <p className="dark:text-green-400">
                  Q. It is I who (be) to blame.
                  <br />= It is I who am to blame.
                </p>
              </div>

              {/* 25 */}
              <div className="pb-3">
                <p className="bengali">
                  <strong>Rule-25: </strong> Nobody, no one, none, somebody,
                  someone, something, each, every, either of, neither of, any,
                  one, each of, every এগুলো Subject হলে থাকলে বা এগুলোর পরে Noun
                  থাকলে Subject singular হয় এবং verb singular হয়। <br />
                  যেমন:
                </p>
                <p className="dark:text-green-400">
                  Q. Something (be) wrong.
                  <br />= Something is wrong.
                </p>
              </div>
            </div>

            {/* DOwnload button */}
            <div className="text-center py-4 sticky bottom-0 left-0 right-0">
              <a
                href="/RightFormOfVerbs.pdf"
                download
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Download PDF
              </a>
            </div>
            <div className="text-center">
              <p className="">
                Note: পিডিএফ ফাইল ডাউনলড করলে মোবাইলের File manager/ My File-এ
                জমা হয়। গেলারিতে পাওয়া যাবে না।
              </p>
            </div>

            {/* exercise */}
            <div className="my-10">
              <h2>Exercise</h2>
              <p>1. The moon (shine) at night.</p>
              <p>2. Flowers (be) gift of nature.</p>
              <p>3. It (dew) in winter.</p>
              <p>4. The rich (be) not always happy.</p>
              <p>5. They (be) blessed.</p>
              <p>6. The pious(be) are happy.</p>
              <p>7. Ice (float) on water.</p>
              <p>8. Muni (carry) Jan umbrella daily.</p>
              <p>9. What you (do) now?</p>
              <p>10. Why Mr. Roni (look) so angry?</p>
              <p>11. Munira (watch) television often?</p>
              <p>
                12. Mim usually (go) to school by bus, but today he (go) by
                train.
              </p>
              <p>13. Size do not matter (chop) wood.</p>
              <p>14. The baby (cry) because it is hungry now.</p>
              <p>15. What you (go) to drink now?</p>
              <p>16. Rina (return) home just now.</p>
              <p>17. The play just (begin).</p>
              <p>18. He not yet (finish) the work.</p>
              <p>19. I just (have) a snack.</p>
              <p>20. Have you ever (be) to Cox’s Bazar?</p>
              <p>21. Why she (look) so nervous?</p>
              <p>22. My brother just (move) to a new place.</p>
              <p>23. Rahul can’t help (listen) to them.</p>
              <p>24. You (see) her lately?</p>
              <p>25. I have a boy (come) from the orphanage.</p>
              <p>26. We are none of us (get) any younger.</p>
              <p>27. I don’t mind (have) asparagus.</p>
              <p>28. Shikha saw him (go) to the town.</p>
              <p>29. I answered (thank) her.</p>
              <p>30. The old sailor went away (leave) the marriage guest.</p>
              <p>31. They just (reach) playground.</p>
              <p>32. What you generally (do) for living?</p>
              <p>33. Salma just (get) her new job.</p>
              <p>34. I just (receive) my father’s letter.</p>
              <p>35. The tree not (bear) any fruit yet.</p>
              <p>36. He recently (return) home from abroad.</p>
              <p>37. I found the boy (sleep) on the bed.</p>
              <p>38. They saw the drunk porter (lie) on the floor.</p>
              <p>39. It is many years since they first (meet).</p>
              <p>40. Ten years have passed since he (come) here.</p>
              <p>41. It was long sine I (see) her last.</p>
              <p>42. Eight years have passed since I (come).</p>
              <p>43. They (play) football since morning.</p>
              <p>44. Their family (live) in Dhaka for the last five years.</p>
              <p>45. I not (choose) my career yet.</p>
              <p>46. I (see) her long since.</p>
              <p>47. Last night I (have) a wonderful dream.</p>
              <p>48. He (go) ten minutes ago.</p>
              <p>49. Lucy (break) her leg in a car accident last year.</p>
              <p>50. Lucy (be) in Dhaka since last week.</p>
              <p>51. The boy (suffer) from fever for five days.</p>
              <p>52. It is high time we (start) the work.</p>
              <p>53. It is high time they (leave) home.</p>
              <p>54. Imran talks as though he (be) a king.</p>
              <p>55. I wish she (be) a millionaire.</p>
              <p>56. Shes sing as if she(be) mad.</p>
              <p>57. He proceeded as though I not (speak).</p>
              <p>58. It reflects the matter as if he (know) it.</p>
              <p>59. Fancy (turn) a trifle pale.</p>
              <p>60. The door was (open) by a Christian.</p>
              <p>61. Munir was greatly (hug) by Della.</p>
              <p>62. When was the book (buy)?</p>
              <p>63. The beggar went away (cry).</p>
              <p>64. The children came to us (run).</p>
              <p>65. He looked at his mother (smile).</p>
              <p>
                66. They (sail) away to the south until they arrived in cold
                grey sea.
              </p>
              <p>67. Della (save) every penny she could.</p>
              <p>68. Today she (weight) twenty one stone.</p>
              <p>69. Fifty miles (be) a long way.</p>
              <p>70. Why (be) you not with her?</p>
              <p>71. It (be) like him.</p>
              <p>72. His eyes (be) fixed upon Della.</p>
              <p>73. Jim’s income (be) shrunk to twenty dollars.</p>
              <p>
                74. The headmaster and the secretary (be) present in the meeting
                yesterday.
              </p>
              <p>75. When you (come) last night?</p>
              <p>76. When he (go) to market yesterday?</p>
              <p>77. Where they (see) him last week?</p>
              <p>78. It is high time we (start) for the station.</p>
              <p>79. If I were a bird, I (fly) in the sky.</p>
              <p>80. Would that I (enter) the room.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Verbs;
