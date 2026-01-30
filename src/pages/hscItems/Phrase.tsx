import { Button } from "flowbite-react";

function Phrase() {
  const images = [
    { url: "/phrase1.jpg", name: "phrase1.jpg" },
    { url: "/phrase2.jpg", name: "phrase2.jpg" },
    { url: "/phrase3.jpg", name: "phrase3.jpg" },
  ];

  const handleDownload = () => {
    images.forEach((image) => {
      const link = document.createElement("a");
      link.href = image.url;
      link.download = image.name;
      link.click();
    });
  };


    const column1 = [
  "It is high time",
  "Would you mind",
  "As if",
  "Unless",
  "Would rather",
  "What does…look like",
  "As soon as",
  "There",
  "Had better",
  "Let alone",
  "It",
  "How to",
  "What's it like",
  "Lest",
  "What if",
  "No sooner had",
];

 const column2 = [
  "It is high time",
  "Lest",
  "Had to",
  "In order to",
  "As though",
  "As far as",
  "Used to",
  "As long as",
  "Has to",
];

 const column3 = [
  "In order that",
  "How to",
  "It is about time",
  "Feel like",
  "Blow one’s own trumpet",
  "Is used to",
  "When it comes to",
  "Needn’t have",
  "So that",
  "In case",
  "What…look like",
  "What’s like",
  "If",
  "Neither will",
  "The older…the more",
  "Whenever",
  "But for",
  "What do you mean",
];


  return (
    <div className="h-full md:w-[85%]  mx-auto px-4">
      <div className="my-20 ">
        <h1 className="text-center text-green-400">Phrase</h1>

      </div>
      <div className="">
        <p className="">
          Phrase/ Words পরীক্ষায় আসে Oucation No-3 এ, শূন্যস্থান থাকে ১০ টি, মার্কস-5. এই গুলিকে 5 out of 5 পাওয়ার জন্য নিচের রুলস গুল্যে পড়লেই যথেষ্ট। প্রত্যেকটা লাইনের অর্থ বুঝে উত্তর করার চেষ্টা করবে। বিগত বছরের board question Practice এর কোন বিকল্প নেই।
        </p>
        <div className="py-5">
      <table className="w-full border border-gray-300">
        <thead>
          <tr className="bg-gray-200 text-4xl text-pink-600">
            <th className="border px-1 py-1 lg:px-4 lg:py-2 text-center ">***</th>
            <th className="border px-1 py-1 lg:px-4 lg:py-2 text-center">**</th>
            <th className="border px-1 py-1 lg:px-4 lg:py-2 text-center">*</th>
          </tr>
        </thead>

        <tbody>
          {Array.from({
            length: Math.max(column1.length, column2.length, column3.length),
          }).map((_, i) => (
            <tr key={i}>
              <td className="border px-1 py-1 lg:px-4 lg:py-2 ">{column1[i] || ""}</td>
              <td className="border px-1 py-1 lg:px-4 lg:py-2">{column2[i] || ""}</td>
              <td className="border px-1 py-1 lg:px-4 lg:py-2">{column3[i] || ""}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    
        <div className="py-10">
          <h2 className="">Rules:</h2>
          <div className="mb-6">
            <h3 className="font-semibold">1. Let alone:</h3>
            <ul className="list-disc pl-5">
              <li>বাক্যের শেষে দিকে শূন্যস্থান থাকবে ।</li>
              <li>শূন্যস্থানের আগে (,) কোমা থাকব</li>
            </ul>
            <h3 className="mt-2 font-semibold italic">Less important:</h3>
            <p>i. বাক্যের শুরুতে sub এর পরে not থাকবে ।</p>
          </div>

          <div className="mb-6">
            <h3 className="font-semibold animateText">
              2. What's it like/ Would you mind:
            </h3>
            <ul className="list-disc pl-5">
              <li>বাক্যের শুরুতে শূন্যস্থান থাকবে ।</li>
              <li>শূন্যস্থানের পরে ing যুক্ত verb থাকবে ।</li>
              <li>বাক্যের শেষে (?) প্রশ্নবোধক চিহ্ন থাকবে ।</li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="font-semibold">
              3. What's like/ What does look like/ How like:
            </h3>
            <ul className="list-disc pl-5">
              <li>বাক্যের শুরুতে এবং শেষে দুটি শূন্যস্থান থাকবে ।</li>
              <li>বাক্যের শেষে প্রশ্নবোধক ( ? ) চিহ্ন থাকবে ।</li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="font-semibold">4. Would rather:</h3>
            <ul className="list-disc pl-5">
              <li>
                Sub এবং Verb এর মাঝখানে শূন্যস্থান থাকবে/ শূন্যস্থানের আগে sub
                এবং পরে verb থাকবে ।
              </li>
              <li>শূন্যস্থানের পরে বাক্যের শেষের দিকে than থাকবে ।</li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="font-semibold">5. What if:</h3>
            <ul className="list-disc pl-5">
              <li>বাক্যের শুরুতে শূন্যস্থান থাকবে ।</li>
              <li>শূন্যস্থানের পরে sub থাকবে ।</li>
              <li>বাক্যের শেষে প্রশ্নবোধক ( ? ) চিহ্ন থাকবে ।</li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="font-semibold">6. Wish/ Fancy:</h3>
            <ul className="list-disc pl-5">
              <li>
                শূন্যস্থানের আগে এবং পরে একই subject থাকবে ।
                <i>যেমনঃ I ....... I were a king.</i>
              </li>
              <li>শূন্যস্থানের পরের subject এর পরে were থাকবে ।</li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="font-semibold">7. Was born:</h3>
            <ul className="list-disc pl-5">
              <li>শূন্যস্থানের আগে subject থাকবে এবং পরে verb থাকবে না ।</li>
              <li>শূন্যস্থানের পরে in/ on/ at/ of থাকবে ।</li>
              <li>Preposition এর পরে জন্ম সাল বা বছরের উল্লেখ থাকবে ।</li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="font-semibold animateText">
              8. Had better/ have to/ has to/ had to/ used to:
            </h3>
            <ul className="list-disc pl-5">
              <li>শূন্যস্থানের আগে sub এবং পরে V-1 থাকবে ।</li>
            </ul>
            <h3 className="mt-2 font-semibold italic">Less important:</h3>
            <ul className="list-disc pl-5">
              <li>শূন্যস্থানের আগে you থাকলে had better বসানোই ভালো।</li>
              <li>শূন্যস্থানের পরে not থাকলে have to/ has to বসানোই ভালো ।</li>
              <li>
                শূন্যস্থানের পরে ing যুক্ত verb থাকলে used to বসানোই ভালো।
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="font-semibold">9. There/it:</h3>
            <ul className="list-disc pl-5">
              <li>বাক্যের শুরুতে শূন্যস্থান থাকবে ।</li>
              <li>
                শূন্যস্থানের পরে am/ is/ are/ was/ were/had/ been/ has been /
                V-1 / V-2 থাকবে ।
              </li>
            </ul>
            <h3 className="mt-2 font-semibold italic">অন্যান্য:</h3>
            <ul className="list-disc pl-5">
              <li>
                There এর জন্য ক্ষেত্রে বাক্যের শেষে in/on/at থাকবে এবং স্থানবাচক
                শব্দ থাকবে।
              </li>
              <li>
                There এর ক্ষেত্রে বাক্যের শুরতে শূন্যস্থানের আগে once/ once upon
                a time/ long ago থাকতে পারে।
              </li>
              <li>
                বাক্যের মধ্যে কোন সময়ের উল্লেখ থাকলে শূন্যস্থানে it বসে (তবে
                বাক্যের শুরতে শূন্যস্থানের আগে once/ once upon a time/ long ago
                ছাড়া)।
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="font-semibold">10. As if/ as though:</h3>
            <ul className="list-disc pl-5">
              <li>দুই বাক্যের মাঝখানে শূন্যস্থান থাকবে ।</li>
              <li>
                শূন্যস্থানের পরে sub থাকবে এবং sub এর পরে বেশিরভাগ সময় were থাকে
                কিছু সময় was/ had/had been/V-2 থাকতে পারে।
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="font-semibold">11. As soon as:</h3>
            <ul className="list-disc pl-5">
              <li>বাক্যের শুরতে শূন্যস্থান থাকবে ।</li>
              <li>দুই বাক্যের মাঝখানে কমা(,) থাকবে ।</li>
            </ul>
            <h3 className="mt-2 font-semibold italic">অন্যান্য:</h3>
            <ul className="list-disc pl-5">
              <li>অনেক সময় শূন্যস্থানের পরে possible থাকে ।</li>
              <li>অনেক সময় দুই বাক্যের মাঝখানে শূন্যস্থানে as soon as বসে।</li>
              <li>শূন্যস্থানের পরের বাক্যে V-2 থাকে ।</li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="font-semibold">12. As long as/ as fast as:</h3>
            <ul className="list-disc pl-5">
              <li>দুই বাক্যের মাঝখানে শূন্যস্থান থাকবে ।</li>
              <li>শূন্যস্থানের পরের বাক্যে V-2 থাকবে ।</li>
              <li>অনেক সময় পরের বাক্যে can/could থাকবে ।</li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="font-semibold">13. Unless:</h3>
            <ul className="list-disc pl-5">
              <li>দুই বাক্যের মাঝখানে শূন্যস্থান থাকবে ।</li>
              <li>
                প্রথম বাক্যের মধ্যে not থাকবে যদি দুই বাক্যের মাঝখানে শূন্যস্থান
                থাকে।
              </li>
              <li>
                প্রথম বাক্যের শুরুতে শূন্যস্থান থাকলে দুই বাক্যের মাঝখানে কোমা
                থাকে। সেক্ষেত্রে প্রথম বাক্যের মধ্যে not থাকবে না।
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="font-semibold">
              14. No sooner had/ hardly had/ scarcely had:
            </h3>
            <ul className="list-disc pl-5">
              <li>বাক্যের শুরতে শূন্যস্থান থাকবে ।</li>
              <li>শূন্যস্থানের পরে Sub থাকবে ।</li>
              <li>দুই বাক্যের মাঝখানে Than/before/ when থাকবে ।</li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="font-semibold"> 15. Whether........... OR:</h3>
            <ul className="list-disc pl-5">
              <li>বাক্যের শুরুতে এবং শেষের দিকে দুটি শূন্যস্থান থাকে ।</li>
              <li>দ্বিতীয় শূন্যস্থানের পরে not থাকে ।</li>
            </ul>
          </div>

          <div className="mb-6">
            <h2 className="font-semibold italic">Others:</h2>
            <h3 className="font-semibold"> 1. What do you mean?:</h3>
            <ul className="list-disc pl-5">
              <li>
                বাক্যের শুরতে শূন্যস্থানের পরে প্রশ্নবোধক(?) চিহ্ন থাকবে ।
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="font-semibold"> 2. What do the matter?:</h3>
            <ul className="list-disc pl-5">
              <li>
                বাক্যের শুরতে শূন্যস্থানের পরে with থাকবে এবং শেষে (?)
                প্রশ্নবোধক চিহ্ন থাকবে ।
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="font-semibold">3. It is high time:</h3>
            <ul className="list-disc pl-5">
              <li>বাক্যের শুরতে শূন্যস্থান থাকবে ।</li>
              <li>শূন্যস্থানের পরে sub + V-2 থাকবে ।</li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="font-semibold"> 4. Enough / in order to::</h3>
            <ul className="list-disc pl-5">
              <li>বাক্যের শেষের দিকে শূন্যস্থান থাকবে ।</li>
              <li>শূন্যস্থানের পরে to/ to+ V-1 থাকবে ।</li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="font-semibold"> 5. Lest::</h3>
            <ul className="list-disc pl-5">
              <li>শূন্যস্থানের পরের বাক্যে Sub এর পরে should/ might থাকবে ।</li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="font-semibold"> 6. So that / in order that: :</h3>
            <ul className="list-disc pl-5">
              <li>দুই বাক্যের মাঝখানে শূন্যস্থান থাকে।</li>
              <li>
                শূন্যস্থানের পরের বাক্যের গঠন হবে Sub+ can/ could/ may/ might +
                V-1 থাকবে ।
              </li>
            </ul>
          </div>
        </div>
      </div>

       

      <div className="w-full flex items-center justify-center py-4">
        <Button
          gradientDuoTone="purpleToPink"
          onClick={handleDownload}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Download PDF
        </Button>
      </div>

      {/* EXAmple */}
      <div className="mt-10">
        {/* EXAmple 1 */}
        <h3>Exercise - 1 </h3>
        <div className="overflow-x-auto">
          {/* Table for the top section */}
          <table className="min-w-full table-auto border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-100">
                <th className="border border-gray-300 px-2 py-1">there</th>
                <th className="border border-gray-300 px-2 py-1">
                  What does.... look like?
                </th>
                <th className="border border-gray-300 px-2 py-1">As soon as</th>
                <th className="border border-gray-300 px-2 py-1">was born</th>
                <th className="border border-gray-300 px-2 py-1">let alone</th>
                <th className="border border-gray-300 px-2 py-1">
                  would rather
                </th>
                <th className="border border-gray-300 px-2 py-1">
                  What's it like?
                </th>
                <th className="border border-gray-300 px-2 py-1">it</th>
                <th className="border border-gray-300 px-2 py-1">have to</th>
                <th className="border border-gray-300 px-2 py-1">had better</th>
              </tr>
            </thead>
          </table>

          {/* List of questions with alphabetic serial numbers */}
          <ul className="list-none pl-6 mt-4">
            <li className="before:content-['(a)'] before:mr-2">
              Time is very valuable. We _____ utilize time properly.
            </li>
            <li className="before:content-['(b)'] before:mr-2 mt-2">
              I _____ take a taxi than walk home. It is already too late.
            </li>
            <li className="before:content-['(c)'] before:mr-2 mt-2">
              Long ago _____ lived a mighty king Kubla Khan. He built an amazing
              palace in deep dark forest.
            </li>
            <li className="before:content-['(d)'] before:mr-2 mt-2">
              _____ watching a horror film at midnight? You are really scared.
            </li>
            <li className="before:content-['(e)'] before:mr-2 mt-2">
              It is winter. You _____ buy a coat.
            </li>
            <li className="before:content-['(f)'] before:mr-2 mt-2">
              _____ the balcony _____? It looks very beautiful but it is really
              small.
            </li>
            <li className="before:content-['(g)'] before:mr-2 mt-2">
              Bangladesh _____ as an independent state on 16 December 1971 after
              nine months bloody war against the occupation Pakistan Army.
            </li>
            <li className="before:content-['(h)'] before:mr-2 mt-2">
              _____ was in China that the art of Bonsai originated perhaps more
              than 1000 years ago.
            </li>
            <li className="before:content-['(i)'] before:mr-2 mt-2">
              I cannot ride a bicycle, _____ a motor cycle. I have no money to
              buy any of them.
            </li>
            <li className="before:content-['(j)'] before:mr-2 mt-2">
              _____ the rain stopped, I started for home.
            </li>
          </ul>
        </div>

        {/* EXAmple 2 */}
        <div className="p-4">
          <div className="mb-4">
            <h3>Exercise - 2</h3>

            <div className="grid grid-cols-3 gap-4 border p-2 font-bold">
              <div>there</div>
              <div>was born</div>
              <div>what does... look like</div>
              <div>had better</div>
              <div>it</div>
              <div>would rather</div>
              <div>as soon as</div>
              <div>let alone</div>
              <div>have to</div>
              <div>what’s it like</div>
            </div>
          </div>

          <div className="space-y-2">
            <p>(a) Anika can't afford a bus ticket, ______ air ticket.</p>
            <p>(b) It may rain today, you ______ reach home earlier.</p>
            <p>
              (c) ______ is many years since we first met. How time does fly!
            </p>
            <p>
              (d) As his brother met an accident, he needs to go to hospital
              ______ possible.
            </p>
            <p>
              (e) We ______ develop our view about hartal and strike. Let's
              change our destructive culture.
            </p>
            <p>
              (f) ______ have been remarkable changes in the behaviour of our
              young generation.
            </p>
            <p>
              (g) Maria Manda is a promising footballer of our country. She
              ______ in a remote village.
            </p>
            <p>
              (h) ______ having integrity in one's character? It is the best
              quality of a man.
            </p>
            <p>
              (i) He is very poor but honest. He ______ starve than cheat
              anybody.
            </p>
            <p>(j) ______ a squirrel ______?</p>
          </div>
        </div>

        {/* EXAmple 3*/}
        <div className="p-4 mt-10">
          <div className="mb-2">
            <h3 className="text-lg font-bold mb-2">Practice - 3</h3>
            <div className="grid grid-cols-3 gap-1 border p-2 text-blue-500 font-bold">
              <div>there</div>
              <div>let alone</div>
              <div>have to</div>
              <div>had better</div>
              <div>what does... look like</div>
              <div>it</div>
              <div>would rather</div>
              <div>as soon as</div>
              <div>was born</div>
              <div>what's like</div>
            </div>
          </div>

          <div className="space-y-2">
            <p>(a) The tennis match restarted ______ the rain had stopped.</p>
            <p>
              (b) In England, most school children ______ wear a uniform. Is it
              the same in Bangladesh?
            </p>
            <p>
              (c) In our country, rainy season is very different. ______ rains
              heavily During rainy season without any gap.
            </p>
            <p>
              (d) Socrates was a great Greek philosopher. He ______ in 469 BC.
            </p>
            <p>(e) Long ago, ______ lived a mighty warrior, Kublai Khan.</p>
            <p>(f) A warrior ______ die than surrender to enemies.</p>
            <p>(g) We ______ take an umbrella. It may rain today.</p>
            <p>(h) ______ the weather ______ today?</p>
            <p>(i) Baby: Mom, ______ a ghost ______?</p>
            <p>
              (j) ______ has been many years since I saw him. So, I cannot
              recognize him.
            </p>
          </div>
        </div>

        {/* Example 4*/}

        <div className="p-4 mt-10">
          <div className="mb-1">
            <h3 className="text-lg font-bold mb-2">Practice - 4</h3>
            <div className="grid grid-cols-3 gap-2 border text-blue-500 font-bold">
              <div>as soon as</div>
              <div>had better</div>
              <div>has to</div>
              <div>there</div>
              <div>would rather</div>
              <div>was born</div>
              <div>what does... look like</div>
              <div>it</div>
              <div>what's it like</div>
              <div>let alone</div>
            </div>
          </div>

          <div className="space-y-2">
            <p>(a) A good citizen ______ perform a lot of things.</p>
            <p>(b) ______ is no fish here. It's a swimming pool.</p>
            <p>
              (c) Mr. Habib is an honest man. He ______ starve than take bribe.
            </p>
            <p>
              (d) ______ walking alone through a forest? I had never faced such
              a situation.
            </p>
            <p>(e) ______ she finished her work, she called her father.</p>
            <p>(f) Sumi: Mom, ______ a fox ______?</p>
            <p>Mother: Well, it is somewhat like a dog.</p>
            <p>
              (g) He is very miserly. He doesn't help his neighbors, ______ the
              villagers.
            </p>
            <p>(h) ______ took me two hours to reach there.</p>
            <p>(i) The weather is getting worse. I ______ start for home.</p>
            <p>
              (j) Tennyson was a great Victorian poet. He ______ in England.
            </p>
          </div>
        </div>
      </div>
   
    </div>
  );
}

export default Phrase;
