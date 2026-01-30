function Graph() {
  return (
    <div className="px-5 h-full md:w-[60%] mx-auto">
      <div className="">
        <h1 className="text-center font-semibold text-md py-20 text-green-400">
          Graph-Chart
        </h1>
      </div>
      <div className="">
        {/* model-1 */}
        <div className="">
          <h3 className="">Model-1</h3>

          <p className="text-rose-500">[##] ডাটা এবং পারচেন্টেজ দেওয়া থাকলেঃ</p>
          <p className="pb-10 text-justify">
            The [graph/ pie] chart shows [shows er por theke full stop
            porjontu]. In the [ graph/pie chart] the data shown are of [farming,
            business, govt. job and intellectual work]. The [graph/ pie] chart
            shows that .............[DESCRIPTION]
            ............................... . Analyzing the [graph/pie] we find
            that the highest percentage is [name] which is [%] and the lowest
            percentage is [name] which is [%]. Finally we can say that the
            information given in the [graph/pie chart] are highly significant
            for us.
          </p>
        </div>

        {/* model-2 */}
        <div className="">
          <h3 className="">Model-2</h3>
          <p className="text-green-500">[##] সাল এবং পারচেন্টেজ দেওয়া থাকলেঃ</p>

          <p className="pb-10 text-justify">
            The graph/ pie chart shows [shows er por theke full stop porjontu].
            The most striking feature of the graph/ pie chart is the increase/
            decrease of [NAME] users during this period. The graph chart/ pie
            chart shows that..........[DESCRIPTION]............ . Analyzing the
            graph/pie we find that the highest percentage is [%] in [DATE] and
            the least percentage is [%] in [DATE]. Finally we can say that the
            information given in the [graph/pie chart] are highly significant
            for us.
          </p>
        </div>

        {/* pollution-1 */}
        <div className="">
          <h2 className="">Example of Model-1</h2>
          <p className="">
            <strong>Question-1:</strong> Look at the following pie-chart. It
            shows the sources of air pollution in Dhaka city. Now, describe the
            pie-chart in your own words. Highlight and Summarize the information
            given in the pie chart.
          </p>
          <div className="w-full flex items-center justify-center py-5">
            <img src="/pieChart.png" alt="" className="w-[600px] " />
          </div>
          <h3 className="">Answer:</h3>
          <p className="">
            {" "}
            [DESCRIPTION]: Occupying half of the pie chart, [DATA NAME] cause[s]
            [50] percent air pollution of Dhaka city. On the contrary, [DATA
            NAME] cause ...... . Then [DATA NAME] ...... . Lastly, [DATA NAME]
            ..... .
          </p>
        </div>

        {/* family expenditure-2 */}
        <div className="py-10">
          <h2 className="">Example of Model-1</h2>
          <p className="text-justify">
            <strong>Question-2:</strong> Look at the following pie-chart. It
            shows the percentage of a family's household expenditure distributed
            into different categories. Now, describe the pie-chart in your own
            words. Highlight and Summarize the information given in the pie
            chart.
          </p>
          <div className="w-full flex items-center justify-center py-5">
            <img src="/familyExpenditure.jpg" alt="" className="w-[600px] " />
          </div>
          <h3 className="">Answer:</h3>
          <p className="">
            {" "}
            [DESCRIPTION]: [30%] of the total income of the family is spent on
            [DATA NAME = food]. On the contrary, [%]..... . Then [%]...... .
            Lastly, [%]..... .
          </p>
        </div>

        <div className="">
          <h2 className="">Example of Model-1</h2>
          <p className="text-justify">
            <strong>Question-3:</strong> Look at the following pie-chart. It
            shows the choice of profession by different educated people. Now,
            describe the pie-chart in your own words. Highlight and Summarize
            the information given in the pie chart.
          </p>
          <div className="w-full flex items-center justify-center py-5">
            <img src="/profession.jpg" alt="" className="w-[600px] " />
          </div>
          <h3 className="">Answer:</h3>
          <p className="">
            {" "}
            [DESCRIPTION]: as a profession [Govt. job] is liked by [30%] while
            [private job] is liked by [%] . On the contrary, [DATA NAME]..... .
            Then [DATA NAME]...... . Lastly, [DATA NAME]..... .
          </p>
        </div>

        <div className="py-10">
          <h2 className="">Example of Model-2</h2>
          <p className="text-justify">
            <strong>Question-4:</strong> Look at the following graph-chart. It
            shows the comparative number of death caused by road accident in the
            first six months of the year 2022 and 2023. Now, describe the
            pie-chart in your own words. Highlight and Summarize the information
            given in the pie chart.
          </p>
          <div className="w-full flex items-center justify-center py-5">
            <img src="/roadAccident.jpg" alt="" className="w-[600px] " />
          </div>
          <h3 className="">Answer:</h3>
          <p className="">
            [DESCRIPTION]: there were [427] death in February [2022] while
            [private job] is liked by [%] . On the contrary, [DATA NAME]..... .
            Then [DATA NAME]...... . Lastly, [DATA NAME]..... .
          </p>
        </div>
      </div>

      {/* DOwnload button */}
      <div className="text-center py-4 sticky bottom-0 left-0 right-0">
        <a
          href="/suffix-prefix.pdf"
          download
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Download PDF
        </a>
      </div>
      <div className="text-center pb-10">
        <p className="">
          Note: পিডিএফ ফাইল ডাউনলড করলে মোবাইলের File manager/ My File-এ জমা হয়।
          গেলারিতে পাওয়া যাবে না।
        </p>
      </div>
    </div>
  );
}

export default Graph;
