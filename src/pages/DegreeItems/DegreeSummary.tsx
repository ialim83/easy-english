export const DegreeSummary = () => {
  return (
    <div className="h-screen lg:w-1/2 mx-auto">
      <div className="text-center py-10">
        <h1>Summary</h1>
        <p className="">Only for Degree/ Honors</p>
      </div>
      <div className="">
        <div className="my-10">
          <h3 className="text-green-400 text-center">
            Passage এর Summary/theme লেখার short technique:
          </h3>
          <p className="text-base">
            Summary: <br /> Here the writer has discussed about the importance of
            <span className="text-pink-700 font-bold px-4">
              {" "}
              [ main word ]
            </span>{" "}
            .
            <span className="font-bold px-5">
              [ এখানে passage থেকে দুই/তিনটি বাক্য লিখুন ]
            </span>
            . Here, by reading the passage we learned a lot of things and we
            should try to apply <span className="font-bold">[this/these]</span>
            <span className="font-bold"> [ idea(s)/ideal(s) ] </span> in our
            practical life.
          </p>
        </div>
      </div>
    </div>
  );
};
