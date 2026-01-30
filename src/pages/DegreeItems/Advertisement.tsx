function Advertisement() {
  return (
    <div className="h-full md:w-[85%] mx-auto  ">
      <h1 className="text-center font-semibold text-md py-20 text-green-400">
        Advertisement
      </h1>
      <div className="px-3 text-lg md:text-xl max-w-4xl mx-auto">
        <div className="border p-6 mb-10 ">
          {/* To Let Section */}
          <div className="border p-6 mb-6 max-w-md mx-auto shadow-md transition-transform duration-300 ease-in-out hover:scale-105">
            <h3 className="font-semibold underline mb-4 text-center">To Let</h3>
            <ul className="list-disc pl-2">
              <li>Aristocratic Area.</li>
              <li>Overlooking Lake.</li>
              <li>All time Security.</li>
              <li>Near School/College/Varsity/Market.</li>
              <li>Pollution Free.</li>
              <li>Beside Highway.</li>
              <li>Reasonable Price/Rent.</li>
              <li>3 Bed, 2 Bath, 1 Spacious Dining.</li>
            </ul>
            <p className="mt-4 font-semibold text-end">Please Contact:</p>
            <p className="text-end">Mobile: 017513337773</p>
          </div>

          {/* Rent A Car Section */}
          <div className="border p-4 mb-6 max-w-md mx-auto shadow-md">
            <h3 className="font-semibold underline mb-4 text-center">
              Rent A Car
            </h3>
            <ul className="list-disc pl-6">
              <li>All Automatic Option.</li>
              <li>Charming Color.</li>
              <li>Attractive Design.</li>
              <li>Latest Model.</li>
              <li>A/C Operated.</li>
              <li>Owner Driven.</li>
            </ul>
            <p className="mt-4 font-semibold text-end">Please Contact:</p>
            <p className="text-end">Mobile: 017513337773</p>
          </div>

          {/* First Come, First Served Section */}
          <div className="border p-4 mb-6 max-w-md mx-auto shadow-2xl">
            <h3 className="font-semibold underline mb-4 text-center">
              First Come, First Served
            </h3>
            <ul className="list-disc pl-6">
              <li>Charming Color.</li>
              <li>Attractive Design.</li>
              <li>Latest Model.</li>
              <li>Environment Friendly.</li>
              <li>Money Saving.</li>
              <li>8 Years Warranty.</li>
              <li>Longer Lasting.</li>
              <li>Available Spare parts.</li>
            </ul>
            <p className="mt-4 font-semibold text-end">Please Contact:</p>
            <p className="text-end">Mobile: 017513337773</p>
          </div>
        </div>
      </div>

      <div className="p-6 my-10 bg-white max-w-4xl mx-auto text-black">
        {/* Advertisement Section */}
        <h2 className="text-center font-bold text-lg underline mb-4">
          ADVERTISEMENT
        </h2>
        <div className="">
          <span className="font-bold">Questions:</span>
          <ol className="list-decimal list-inside space-y-2">
            <li>
              Suppose you are the editor of a daily newspaper. You want to
              appoint some journalists for the daily. Now write an
              advertisement.
            </li>
            <li>
              Suppose you are a director of a company. Some employees are needed
              for your company. Now write an advertisement for the daily.
            </li>
            <li>
              Suppose you are the manager of a bank. You want to recruit some
              management trainee. Write an advertisement for a daily.
            </li>
            <li>
              Suppose, you are the principal of a private college. You need to
              appoint a part time English teacher. Make an advertisement for
              this.
            </li>
            <li>
              Suppose, you are the MD of a pharmaceutical company and you want
              to appoint some representative in your company. Now write an
              advertisement for a daily.
            </li>
            <li className="">
              Write an advertisement from a university who wants to recruit some
              teachers for different subjects/ for English.
            </li>
            <li>
              Suppose, you are the guardian of a student. You need a private
              tutor. Now, an advertisement for a daily.
            </li>
          </ol>
          <span className="font-bold">Answer:</span>
        </div>

        {/* Career Opportunity Section */}
        <div className="mt-8 border border-black p-4">
          <h3 className="text-center font-bold underline mb-4">
            CAREER OPPORTUNITY
          </h3>
          <p>
            [AB University/ College/Pharmaceutical Company] is one of the
            reputed [University/College/Company]. The University/College/Company
            is looking for some smart and energetic young teachers in
            (different) the subjects of English/ marketing officers.
          </p>
          <p>Number of posts: 10 </p>
          <p>Age: not over 32 years.</p>
          <p>
            Qualification: MA/ MBBS/ MBA.
            <span className="underline">[MBA]</span> will be preferred.
            Interested candidates are requested to send their application with
            CV and two copies of passport size photographs on or before 10 April
            2010 to <span className="underline">MD</span>.
          </p>
        </div>

        {/* Language Learning Course Section */}
        <div className="pt-10">
          <p className="mt-2 font-bold">
            Q: Suppose a coaching center will start a course on the subject of
            English language/ Different subject. Now write an advertisement.
          </p>
          <span className="font-bold">Answer:</span>
        </div>

        <div className="border border-black p-4">
          <h3 className="text-center font-bold underline mb-4">
            Language Learning Course
          </h3>
          <p>English language learning course starting from 10 April 2010.</p>
          <p>Don’t forget, we serve the best please write to:</p>
          <p>Course co-ordinator:</p>
          <p>Creative English Home,</p>
          <p>22, Palton</p>
          <p>Dhaka-1000.</p>
        </div>

        <div className="mt-4 font-bold self-end">
          By
          <br />
          Alim
        </div>
      </div>

      <div className="">
        {/* <img src="img/advertise2.jpg" alt="" /> */}
        {/* <img src="img/adv1.jpg" alt="" /> */}
      </div>
      <div className="text-center py-4 sticky bottom-0 left-0 right-0">
        <a
          href="img/advertise2.jpg"
          download
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Download PDF
        </a>
      </div>
      <div className="text-center py-5">
        <p className="">
          Note: পিডিএফ ফাইল ডাউনলড করলে মোবাইলের File manager/ My File-এ জমা হয়।
          গেলারিতে পাওয়া যাবে না।
        </p>
      </div>
    </div>
  );
}

export default Advertisement;
