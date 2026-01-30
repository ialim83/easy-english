export const PreposOfShortTec = () => {
  interface Row {
  prep: string;
  meaning: string;
  example: string;
}

const data: Row[] = [
  { prep: "On", meaning: "উপর লেগে থাকা বুঝাতে", example: "The book is on the table." },
  { prep: "Over", meaning: "সামান্য উপরে দিয়ে বুঝাতে", example: "The fan is over my head." },
  { prep: "Above", meaning: "অনেক উপরে বুঝাতে", example: "The star is above our head." },
  { prep: "Up", meaning: "খাড়া উপরে দিকে বুঝাতে", example: "Put up your hand." },
  { prep: "Down", meaning: "Up এর বিপরীত বুঝাতে ", example: "Please do it up and down." },
  { prep: "At", meaning: "কাছে অবস্থান বুঝাতে ", example: "I am at office." },
  { prep: "Through", meaning: "ভেতর দিয়ে বুঝাতে", example: "We went through the desert." },
  { prep: "In", meaning: "ভেতরে স্থিতি বুঝাতে বুঝাতে", example: "My mom is in the kitchen." },
  { prep: "Into", meaning: "ভেতরে দিকে গতি বুঝাতে", example: "Go into the room." },
  { prep: "Out of", meaning: "into এর বিপরীত বুঝাতে ", example: "He went out of the room sometime before." },
  { prep: "Under", meaning: "খাড়া নিচে বুঝাতে", example: "The pen is under the chair." },
  { prep: "Below", meaning: "তীর্জকভাবে নিচে বুঝাতে", example: "The river is below the town." },
  { prep: "Out", meaning: "in এর বিপরীত বুঝাতে ", example: "Get out." },
  
  
  { prep: "Of", meaning: "র বা এর বুঝাতে", example: "The English teaching method of Ram is very easy." },
  { prep: "To", meaning: "নিকট/প্রতি/দিকে গতি বুঝাতে", example: "Rana is going to school." },
  { prep: "From", meaning: "To এর বিপরীত বুঝাতে ", example: "He came from Chandpur." },
  { prep: "By", meaning: "দিয়ে/পাশ দিয়ে বুঝাতে", example: "The car passed by me." },
  { prep: "With", meaning: "সহ/সাথে বুঝাতে ", example: "We did not take any cook with us." },
  { prep: "Between", meaning: "মধ্যে (২ এর মধ্যে) বুঝাতে", example: "He divided the money between the two children." },
  { prep: "Among", meaning: "মধ্যে (অনেকের মধ্যে) বুঝাতে", example: "He was happy to be among us." },
  { prep: "About", meaning: "সম্পর্কে বুঝাতে", example: "The old man told him about his last journey on the sea." },
  { prep: "After", meaning: "পরে বুঝাতে", example: "After going to college, we completed our homework." },
  { prep: "Before", meaning: "আগে/পুর্বে ", example: "Rana came here before me." },
  { prep: "Towards", meaning: "দিকে/বরাবর ", example: "We are going towards College." },
  { prep: "Along", meaning: "লাগোয়া/বরাবর বুঝাতে", example: "Go along the road." },
  { prep: "Across", meaning: "এপার হতে ওপারে বুঝাতে", example: "Poverty is increasing across the country." },
  { prep: "Within", meaning: "নির্দিস্ট সময়ের মধ্যে/ভিতরে বুঝাতে", example: "I will come back within 20 minutes." },
  { prep: "Against", meaning: "বিরুদ্ধ বুঝাতে", example: "We fought against Pakistan in liberation war." },
  { prep: "Beside", meaning: "পাশে বুঝাতে", example: "She sat beside me." },
  { prep: "Behind", meaning: "পেছনে বুঝাতে", example: "The boy is behind the bed." },
  { prep: "Beyond", meaning: "ছাড়িয়ে/অতিক্রম করে বুঝাতে", example: "The price of the dress is beyond my budget." },
  { prep: "Since", meaning: "নির্দিস্ট সময়ের থেকে বুঝাতে", example: "It has been raining since morning." }

];
  return (
    <div>
      <div className="py-20 max-w-fit mx-auto">
        <h2 className="text-pink-700 text-center p-3 rounded-md border-2">Shortcut Rules</h2>
      </div>
     
      <div className="lg:w-1/2 mx-auto">
      <div className="">
        <div className="">
        <h3 className="text-green-500 py-8">❇️ Short technique one:</h3>
        <img src="/preposition1.png" alt="" />

        </div>
          
      </div>
      <div className="">
        <h3 className="text-green-500 py-5">❇️ Follow the chart:</h3>
        <img src="/preposition2.jpg" className="w-full" alt="" />
      </div>
      <div className="w-full lg:w-1/2]">
          <div className="overflow-x-auto p-4 ">
        <h3 className="py-5">❇️ উপরের চার্টটির ব্যাখ্যাঃ</h3>
      <table className="w-full border table-auto border-gray-300 text-left">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-1 lg:px-4 py-1 lg:py-2">Preposition</th>
            <th className="border px-1 lg:px-4 py-1 lg:py-2">Bangla Meaning</th>
            <th className="border px-1 lg:px-4 py-1 lg:py-2">Example</th>
          </tr>
        </thead>

        <tbody>
          {data.map((row, idx) => (
            <tr key={idx} className="hover:bg-gray-50">
              <td className="border px-1 py-1 lg:px-4 lg:py-2 font-semibold">{row.prep}</td>
              <td className="border px-1 py-1 lg:px-4 lg:py-2">{row.meaning}</td>
              <td className="border px-1 py-1 lg:px-4 lg:py-2">{row.example}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
      </div>
     </div>
      
    </div>
  );
};
