import { Link } from "react-router-dom";

function Ssc() {
  return (
    <div className="max-w-[95%] md:max-w-[65%] h-screen mx-auto ">
      <h1 className="py-24 text-center w-full text-4xl font-bold ">SSC</h1>
      <div className="mb-10">
        <ul className="flex items-center justify-center flex-wrap gap-3 px-2 md:px-20">
          <Link to={"/article"}>
            <li className="bg-rose-500 px-3 py-2 rounded-sm text-white transition hover:bg-black dark:border dark:border-slate-400">
              Article
            </li>
          </Link>
          <Link to={"/tag"}>
            <li className="bg-rose-500 px-3 py-2 rounded-sm text-white hover:bg-black transition dark:border dark:border-slate-400">
              Tag Question
            </li>
          </Link>
          <Link to={"/suffix"}>
            <li className="bg-rose-500 px-3 py-2 rounded-sm text-white hover:bg-black transition dark:border dark:border-slate-400">
              Suffix-Prefix
            </li>
          </Link>

          <Link to={"/completing"}>
            <li className="bg-rose-500 px-3 py-2 rounded-sm text-white hover:bg-black transition dark:border dark:border-slate-400">
              Completing Sentence
            </li>
          </Link>
          <Link to={"/verbs"}>
            <li className="bg-rose-500 px-3 py-2 rounded-sm text-white hover:bg-black transition dark:border dark:border-slate-400">
              Right Form of Verbs
            </li>
          </Link>
          <Link to={"/narration"}>
            <li className="bg-rose-500 px-3 py-2 rounded-sm text-white hover:bg-black transition dark:border dark:border-slate-400">
              Narration
            </li>
          </Link>
          <Link to={"/transformation"}>
            <li className="bg-rose-500 px-3 py-2 rounded-sm text-white hover:bg-black transition dark:border dark:border-slate-400">
              Transformation
            </li>
          </Link>

          <Link to={"/connectors"}>
            <li className="bg-rose-500 px-3 py-2 rounded-sm text-white hover:bg-black transition dark:border dark:border-slate-400">
              Connectors
            </li>
          </Link>
          <Link to={"/punctuation"}>
            <li className="bg-rose-500 px-3 py-2 rounded-sm text-white hover:bg-black transition dark:border dark:border-slate-400">
              Punctuation
            </li>
          </Link>

          {/* Writing section */}
          <Link to={"/paragraph"}>
            <li className="bg-rose-500 px-3 py-2 rounded-sm text-white hover:bg-black transition dark:border dark:border-slate-400">
              Paragraph
            </li>
          </Link>
          <Link to={"/essay"}>
            <li className="bg-rose-500 px-3 py-2 rounded-sm text-white hover:bg-black transition dark:border dark:border-slate-400">
              Composition
            </li>
          </Link>
          <Link to={"/email"}>
            <li className="bg-rose-500 px-3 py-2 rounded-sm text-white hover:bg-black transition dark:border dark:border-slate-400">
              Email
            </li>
          </Link>
          <Link to={"/letter"}>
            <li className="bg-rose-500 px-3 py-2 rounded-sm text-white hover:bg-black transition dark:border dark:border-slate-400">
              Letter
            </li>
          </Link>
          <Link to={"/application"}>
            <li className="bg-rose-500 px-3 py-2 rounded-sm text-white hover:bg-black transition dark:border dark:border-slate-400">
              Application
            </li>
          </Link>
          <Link to={"/dialog"}>
            <li className="bg-rose-500 px-3 py-2 rounded-sm text-white">
              Dialog
            </li>
          </Link>
          <Link to={"/graph"}>
            <li className="bg-rose-500 px-3 py-2 rounded-sm text-white">
              Graph Chart
            </li>
          </Link>
          <Link to={"/story"}>
            <li className="bg-rose-500 px-3 py-2 rounded-sm text-white">
              Completing Story
            </li>
          </Link>
          <Link to={"/sscQuestion"}>
            <li className="bg-rose-500 px-3 py-2 rounded-sm text-white">
              Board Question
            </li>
          </Link>
        </ul>

        {/* <div className="">
          <h1 className="text-center">Writing Section</h1>
        </div>

        <ul className="flex flex-wrap gap-3 p-20"></ul> */}
      </div>
    </div>
  );
}

export default Ssc;
