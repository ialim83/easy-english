import { Link } from "react-router-dom";

function Hsc() {
  return (
    <div
      className="
        w-full 
      "
    >
      
        <div className="hero bannerBg h-[360px]">
        <div className="hero-overlay bg-opacity-60"></div>

        <div className="flex flex-col items-center justify-normal text-center text-neutral-content gap-4">
          <div className="">
            <h1 className="text-5xl lg:text-8xl">HSC</h1>
          </div>

          
        </div>
      </div>

      {/* First paper */}
      <div className="my-20 md:my-48">
        <h1 className="text-center text-green-400 pb-5">First Paper</h1>
        <div
          className="
          max-w-7xl h-full
          mx-auto
        "
        >
          <ul
            className="
            grid grid-cols-2 md:grid-cols-4  gap-3 px-2 md:px-20 
          "
          >
            <Link to={"/QuestionOneTwo"}>
              <li className="text-black bg-gradient-to-r from-yellow-300 to-green-500 dark:hover:shadow-yellow-400 dark:hover:border-gray-300 dark:hover:text-gray-400 text-center py-2 md:py-4 font-bold md:text-xl text-base category hover:dark:shadow-md">
                Question 1 & 2
              </li>
            </Link>
            <Link to={"/QuestionThree"}>
              <li className="text-black bg-gradient-to-r from-yellow-300 to-green-500 dark:hover:shadow-yellow-400 dark:hover:border-gray-300 dark:hover:text-gray-400 text-center py-2 md:py-4 font-bold md:text-xl text-base category hover:dark:shadow-md">
                Summary-3
              </li>
            </Link>
            <Link to={"/QuestionFour"}>
              <li className="text-black bg-gradient-to-r from-yellow-300 to-green-500 dark:hover:shadow-yellow-400 dark:hover:border-gray-300 dark:hover:text-gray-400 text-center py-2 md:py-4 font-bold md:text-xl text-base category hover:dark:shadow-md">
                Question 4
              </li>
            </Link>
            <Link to={"/QuestionFive"}>
              <li className="text-black bg-gradient-to-r from-yellow-300 to-green-500 dark:hover:shadow-yellow-400 dark:hover:border-gray-300 dark:hover:text-gray-400 text-center py-2 md:py-4 font-bold md:text-xl text-base category hover:dark:shadow-md">
                Question 5
              </li>
            </Link>
            <Link to={"/QuestionSix"}>
              <li className="text-black bg-gradient-to-r from-yellow-300 to-green-500 dark:hover:shadow-yellow-400 dark:hover:border-gray-300 dark:hover:text-gray-400 text-center py-2 md:py-4 font-bold md:text-xl text-base category hover:dark:shadow-md">
                Question 6
              </li>
            </Link>
            <Link to={"/modelTestFirstPaper"}>
              <li className="text-black bg-gradient-to-r from-yellow-300 to-green-500 dark:hover:shadow-yellow-400 dark:hover:border-gray-300 dark:hover:text-gray-400 text-center py-2 md:py-4 font-bold md:text-xl text-base category hover:dark:shadow-md">
                MODEL TEST
              </li>
            </Link>

            <Link to={"/paragraph"}>
              <li className="text-black bg-gradient-to-r from-yellow-300 to-green-500 dark:hover:shadow-yellow-400 dark:hover:border-gray-300 dark:hover:text-gray-400 text-center py-2 md:py-4 font-bold md:text-xl text-base category hover:dark:shadow-md">
                Paragraph
              </li>
            </Link>

            <Link to={"/email"}>
              <li className="text-black bg-gradient-to-r from-yellow-300 to-green-500 dark:hover:shadow-yellow-400 dark:hover:border-gray-300 dark:hover:text-gray-400 text-center py-2 md:py-4 font-bold md:text-xl text-base category hover:dark:shadow-md">
                Email
              </li>
            </Link>
            <Link to={"/letter"}>
              <li className="text-black bg-gradient-to-r from-yellow-300 to-green-500 dark:hover:shadow-yellow-400 dark:hover:border-gray-300 dark:hover:text-gray-400 text-center py-2 md:py-4 font-bold md:text-xl text-base category hover:dark:shadow-md">
                Letter
              </li>
            </Link>

            <Link to={"/graph"}>
              <li className="text-black bg-gradient-to-r from-yellow-300 to-green-500 dark:hover:shadow-yellow-400 dark:hover:border-gray-300 dark:hover:text-gray-400 text-center py-2 md:py-4 font-bold md:text-xl text-base category hover:dark:shadow-md">
                Graph Chart
              </li>
            </Link>
            <Link to={"/story"}>
              <li className="text-black bg-gradient-to-r from-yellow-300 to-green-500 dark:hover:shadow-yellow-400 dark:hover:border-gray-300 dark:hover:text-gray-400 text-center py-2 md:py-4 font-bold md:text-xl text-base category hover:dark:shadow-md">
                Story
              </li>
            </Link>
            <Link to={"/theme"}>
              <li className="text-black bg-gradient-to-r from-yellow-300 to-green-500 dark:hover:shadow-yellow-400 dark:hover:border-gray-300 dark:hover:text-gray-400 text-center py-2 md:py-4 font-bold md:text-xl text-base category hover:dark:shadow-md">
                Theme-11
              </li>
            </Link>
          </ul>
        </div>
      </div>

      {/* Second Paper */}
      <div className="my-20 md:my-48">
        <h1 className="text-center text-green-400 pb-5">Second Paper</h1>
        <div
          className="
          max-w-7xl h-full
           mx-auto
          
        "
        >
          <ul
            className="
            grid grid-cols-2 md:grid-cols-4  gap-5 px-2 md:px-20 
          "
          >
            {/* <Link to={"/HSuggestion"}>
              <li className="text-black bg-gradient-to-r from-yellow-300 to-green-500 dark:hover:shadow-yellow-400 dark:hover:border-gray-300 dark:hover:text-gray-400 text-center py-2 md:py-4 font-bold md:text-xl text-base category hover:dark:shadow-md">
                Suggestion
              </li>
            </Link> */}

            <Link to={"/article"}>
              <li className="text-black bg-gradient-to-r from-yellow-300 to-green-500 dark:hover:shadow-yellow-400 dark:hover:border-gray-300 dark:hover:text-gray-400 text-center py-2 md:py-4 font-bold md:text-xl text-base category hover:dark:shadow-md">
                Article
              </li>
            </Link>
            <Link to={"/preposition"}>
              <li className="text-black bg-gradient-to-r from-yellow-300 to-green-500 dark:hover:shadow-yellow-400 dark:hover:border-gray-300 dark:hover:text-gray-400 text-center py-2 md:py-4 font-bold md:text-xl text-base category hover:dark:shadow-md">
                Preposition
              </li>
            </Link>
            <Link to={"/phrase"}>
              <li className="text-black bg-gradient-to-r from-yellow-300 to-green-500 dark:hover:shadow-yellow-400 dark:hover:border-gray-300 dark:hover:text-gray-400 text-center py-2 md:py-4 font-bold md:text-xl text-base category hover:dark:shadow-md">
                Phrase
              </li>
            </Link>
            <Link to={"/completing"}>
              <li className="text-black bg-gradient-to-r from-yellow-300 to-green-500 dark:hover:shadow-yellow-400 dark:hover:border-gray-300 dark:hover:text-gray-400 text-center py-2 md:py-4 font-bold md:text-xl text-base category hover:dark:shadow-md">
                Completing Sentence
              </li>
            </Link>
            <Link to={"/verbs"}>
              <li className="text-black bg-gradient-to-r from-yellow-300 to-green-500 dark:hover:shadow-yellow-400 dark:hover:border-gray-300 dark:hover:text-gray-400 text-center py-2 md:py-4 font-bold md:text-xl text-base category hover:dark:shadow-md">
                Right Form of Verbs
              </li>
            </Link>
            <Link to={"/narration"}>
              <li className="text-black bg-gradient-to-r from-yellow-300 to-green-500 dark:hover:shadow-yellow-400 dark:hover:border-gray-300 dark:hover:text-gray-400 text-center py-2 md:py-4 font-bold md:text-xl text-base category hover:dark:shadow-md">
                Narration
              </li>
            </Link>
            <Link to={"/transformation"}>
              <li className="text-black bg-gradient-to-r from-yellow-300 to-green-500 dark:hover:shadow-yellow-400 dark:hover:border-gray-300 dark:hover:text-gray-400 text-center py-2 md:py-4 font-bold md:text-xl text-base category hover:dark:shadow-md">
                Transformation
              </li>
            </Link>
            <Link to={"/pronoun"}>
              <li className="text-black bg-gradient-to-r from-yellow-300 to-green-500 dark:hover:shadow-yellow-400 dark:hover:border-gray-300 dark:hover:text-gray-400 text-center py-2 md:py-4 font-bold md:text-xl text-base category hover:dark:shadow-md">
                Pronoun
              </li>
            </Link>
            <Link to={"/modifier"}>
              <li className="text-black bg-gradient-to-r from-yellow-300 to-green-500 dark:hover:shadow-yellow-400 dark:hover:border-gray-300 dark:hover:text-gray-400 text-center py-2 md:py-4 font-bold md:text-xl text-base category hover:dark:shadow-md">
                Modifier
              </li>
            </Link>
            <Link to={"/connectors"}>
              <li className="text-black bg-gradient-to-r from-yellow-300 to-green-500 dark:hover:shadow-yellow-400 dark:hover:border-gray-300 dark:hover:text-gray-400 text-center py-2 md:py-4 font-bold md:text-xl text-base category hover:dark:shadow-md">
                Connectors
              </li>
            </Link>
            <Link to={"/syn-ant"}>
              <li className="text-black bg-gradient-to-r from-yellow-300 to-green-500 dark:hover:shadow-yellow-400 dark:hover:border-gray-300 dark:hover:text-gray-400 text-center py-2 md:py-4 font-bold md:text-xl text-base category hover:dark:shadow-md">
                Synonym/Antonym
              </li>
            </Link>
            <Link to={"/punctuation"}>
              <li className="text-black bg-gradient-to-r from-yellow-300 to-green-500 dark:hover:shadow-yellow-400 dark:hover:border-gray-300 dark:hover:text-gray-400 text-center py-2 md:py-4 font-bold md:text-xl text-base category hover:dark:shadow-md">
                Punctuation
              </li>
            </Link>

            <Link to={"/paragraph"}>
              <li className="text-black bg-gradient-to-r from-yellow-300 to-green-500 dark:hover:shadow-yellow-400 dark:hover:border-gray-300 dark:hover:text-gray-400 text-center py-2 md:py-4 font-bold md:text-xl text-base category hover:dark:shadow-md">
                Paragraph
              </li>
            </Link>
            <Link to={"/essay"}>
              <li className="text-black bg-gradient-to-r from-yellow-300 to-green-500 dark:hover:shadow-yellow-400 dark:hover:border-gray-300 dark:hover:text-gray-400 text-center py-2 md:py-4 font-bold md:text-xl text-base category hover:dark:shadow-md">
                Composition
              </li>
            </Link>
            <Link to={"/email"}>
              <li className="text-black bg-gradient-to-r from-yellow-300 to-green-500 dark:hover:shadow-yellow-400 dark:hover:border-gray-300 dark:hover:text-gray-400 text-center py-2 md:py-4 font-bold md:text-xl text-base category hover:dark:shadow-md">
                Email
              </li>
            </Link>
            <Link to={"/letter"}>
              <li className="text-black bg-gradient-to-r from-yellow-300 to-green-500 dark:hover:shadow-yellow-400 dark:hover:border-gray-300 dark:hover:text-gray-400 text-center py-2 md:py-4 font-bold md:text-xl text-base category hover:dark:shadow-md">
                Letter
              </li>
            </Link>
            <Link to={"/application"}>
              <li className="text-black bg-gradient-to-r from-yellow-300 to-green-500 dark:hover:shadow-yellow-400 dark:hover:border-gray-300 dark:hover:text-gray-400 text-center py-2 md:py-4 font-bold md:text-xl text-base category hover:dark:shadow-md">
                Application
              </li>
            </Link>

            <Link to={"/modelTest2"}>
              <li className="text-black bg-gradient-to-r from-yellow-300 to-green-500 dark:hover:shadow-yellow-400 dark:hover:border-gray-300 dark:hover:text-gray-400 text-center py-2 md:py-4 font-bold md:text-xl text-base category hover:dark:shadow-md">
                Model Test
              </li>
            </Link>
          </ul>
        </div>
      </div>

      {/* Suggestion */}
      <div className="mb-10 px-20 max-w-7xl mx-auto">
        <h1 className="text-center text-green-400 pb-5">Suggestions</h1>
        <Link to={"/HSuggestion"}>
          <li className="text-black bg-gradient-to-r from-yellow-300 to-green-500 dark:hover:shadow-yellow-400 dark:hover:border-gray-300 dark:hover:text-gray-400 text-center py-2 md:py-4  font-bold md:text-xl text-base category hover:dark:shadow-md">
           An Exclusive Suggestion
          </li>
        </Link>
      </div>
    </div>
  );
}

export default Hsc;
