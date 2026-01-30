import { Link } from "react-router-dom";

function Degree() {
  return (
    <div className="max-w-7xl h-full mx-auto ">
      <h1 className="py-24 text-center w-full text-4xl font-bold ">Degree</h1>
      <div className="mt- h-screen">
        <ul className=" flex items-center justify-center flex-wrap gap-3 px-2 md:px-20">
          <Link to={"/suggestion"}>
            <li className="bg-rose-500 px-3 py-2 rounded-sm text-white hover:bg-black hover:border hover: border-green-400 transition">
              Suggestion
            </li>
          </Link>
          <Link to={"/DPartsOfSpeech"}>
            <li className="bg-rose-500 px-3 py-2 rounded-sm text-white hover:bg-black hover:border hover: border-green-400 transition">
              Changing Parts of Speech
            </li>
          </Link>
          <Link to={"/wh"}>
            <li className="bg-rose-500 px-3 py-2 rounded-sm text-white hover:bg-black hover:border hover: border-green-400 transition">
              Wh-question
            </li>
          </Link>
          <Link to={"/suffix"}>
            <li className="bg-rose-500 px-3 py-2 rounded-sm text-white hover:bg-black hover:border hover: border-green-400 transition">
              Suffix & Prefix
            </li>
          </Link>
          <Link to={"/word-rearrange"}>
            <li className="bg-rose-500 px-3 py-2 rounded-sm text-white hover:bg-black hover:border hover: border-green-400 transition">
              Word Re-arrange
            </li>
          </Link>

          <Link to={"/dCompleting"}>
            <li className="bg-rose-500 px-3 py-2 rounded-sm text-white hover:bg-black hover:border hover: border-green-400 transition">
              Completing Sentence
            </li>
          </Link>
          <Link to={"/verbs"}>
            <li className="bg-rose-500 px-3 py-2 rounded-sm text-white hover:bg-black hover:border hover: border-green-400 transition">
              Right Form of Verbs
            </li>
          </Link>

          <Link to={"/punctuation"}>
            <li className="bg-rose-500 px-3 py-2 rounded-sm text-white hover:bg-black hover:border hover: border-green-400 transition">
              Punctuation
            </li>
          </Link>
          <Link to={"/syn-ant"}>
            <li className="bg-rose-500 px-3 py-2 rounded-sm text-white hover:bg-black hover:border hover: border-green-400 transition">
              Synonym & Antonym
            </li>
          </Link>
          <Link to={"/correction"}>
            <li className="bg-rose-500 px-3 py-2 rounded-sm text-white hover:bg-black hover:border hover: border-green-400 transition">
              Correction
            </li>
          </Link>
          <Link to={"/advertisement"}>
            <li className="bg-rose-500 px-3 py-2 rounded-sm text-white hover:bg-black hover:border hover: border-green-400 transition">
              Advertisement
            </li>
          </Link>
          <Link to={"/dialog"}>
            <li className="bg-rose-500 px-3 py-2 rounded-sm text-white hover:bg-black hover:border hover: border-green-400 transition">
              Dialog
            </li>
          </Link>
          <Link to={"/notice"}>
            <li className="bg-rose-500 px-3 py-2 rounded-sm text-white hover:bg-black hover:border hover: border-green-400 transition">
              Notice
            </li>
          </Link>
          <Link to={"/poster"}>
            <li className="bg-rose-500 px-3 py-2 rounded-sm text-white hover:bg-black hover:border hover: border-green-400 transition">
              Poster & Slogan
            </li>
          </Link>
          <Link to={"/paragraph"}>
            <li className="bg-rose-500 px-3 py-2 rounded-sm text-white hover:bg-black hover:border hover: border-green-400 transition">
              Paragraph
            </li>
          </Link>
          <Link to={"/report"}>
            <li className="bg-rose-500 px-3 py-2 rounded-sm text-white hover:bg-black hover:border hover: border-green-400 transition">
              Report
            </li>
          </Link>
          <Link to={"/essay"}>
            <li className="bg-rose-500 px-3 py-2 rounded-sm text-white hover:bg-black hover:border hover: border-green-400 transition">
              Composition
            </li>
          </Link>
          <Link to={"/email"}>
            <li className="bg-rose-500 px-3 py-2 rounded-sm text-white hover:bg-black hover:border hover: border-green-400 transition">
              Email
            </li>
          </Link>
          <Link to={"/letter"}>
            <li className="bg-rose-500 px-3 py-2 rounded-sm text-white hover:bg-black hover:border hover: border-green-400 transition">
              Letter
            </li>
          </Link>
          <Link to={"/application"}>
            <li className="bg-rose-500 px-3 py-2 rounded-sm text-white hover:bg-black hover:border hover: border-green-400 transition">
              Application
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Degree;
