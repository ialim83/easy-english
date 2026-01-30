import { Link } from "react-router-dom";

function Composition() {
  return (
    <div className="w-full h-full">
      <div className="">
        <h1 className="text-center w-full text-xl lg:text-4xl font-bold uppercase text-green-400">
          Composition
        </h1>
      </div>

      <div className="mt-10 mb-20 max-w-7xl h-full mx-auto ">
        <ul className="flex items-center justify-center flex-wrap gap-3 px-2 md:px-20">
          <Link to={"/paragraph"}>
            <li className="bg-rose-500 px-3 py-2 rounded-sm text-white hover:bg-black transition dark:border dark:border-slate-400">
              Paragraph
            </li>
          </Link>
          <Link to={"/essay"}>
            <li className="bg-rose-500 px-3 py-2 rounded-sm text-white hover:bg-black transition dark:border dark:border-slate-400">
              Essay/ Composition
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

          <Link to={"/advertisement"}>
            <li className="bg-rose-500 px-3 py-2 rounded-sm text-white">
              Advertisement
            </li>
          </Link>
          <Link to={"/dialog"}>
            <li className="bg-rose-500 px-3 py-2 rounded-sm text-white">
              Dialog
            </li>
          </Link>
          <Link to={"/notice"}>
            <li className="bg-rose-500 px-3 py-2 rounded-sm text-white">
              Notice
            </li>
          </Link>
          <Link to={"/poster"}>
            <li className="bg-rose-500 px-3 py-2 rounded-sm text-white">
              Poster
            </li>
          </Link>

          <Link to={"/report"}>
            <li className="bg-rose-500 px-3 py-2 rounded-sm text-white">
              Report
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Composition;
