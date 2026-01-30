import queryString from "query-string";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Narration from "./hscItems/Narration";
import Tense from "./allItems/Tense";
import Paragraph from "./composition/Paragraph";
import Application from "./composition/Application";
import Essays from "./composition/Essays";
import TagQuestion from "./sscItems/TagQuestion";
import Article from "./hscItems/Article";
import Verbs from "./hscItems/Verbs";
import Suffix from "./DegreeItems/Suffix";
import Completing from "./hscItems/Completing";
import DCompleting from "./DegreeItems/DCompleting";
import Phrase from "./hscItems/Phrase";
import Preposition from "./hscItems/Preposition";
import Transformation from "./hscItems/Transformation";
import Pronoun from "./hscItems/Pronoun";
import Connectors from "./hscItems/Connectors";
import Modifier from "./hscItems/Modifier";
import Punctuation from "./hscItems/Punctuation";
import Suggestion from "./DegreeItems/Suggestion";
import HSuggestion from "./hscItems/HSuggestion";
import SSuggestion from "./sscItems/SSuggestion";
import Wh from "./DegreeItems/Wh";
import SynAnt from "./hscItems/SynAnt";
import Dialog from "./DegreeItems/Dialog";
import Advertisement from "./DegreeItems/Advertisement";
import Poster from "./DegreeItems/Poster";
import Notice from "./DegreeItems/Notice";
import PaOfSp from "./allItems/PartsOfSpeech";

// Define mockData with components
const mockData = [
  {
    id: 1,
    title: "Punctuation Punctuations",
    content: <Punctuation />,
  },
  {
    id: 2,
    title: "Modifier Modifiers",
    content: <Modifier />,
  },
  {
    id: 3,
    title: "connectors linkingWords linkingWord linking connector",
    content: <Connectors />,
  },

  {
    id: 4,
    title: "pronoun clearTheUnclearPronoun",
    content: <Pronoun />,
  },
  {
    id: 5,
    title: "transformation, Changing sentence ChangingSentence",
    content: <Transformation />,
  },
  {
    id: 6,
    title: "fillingGaps idiom phrase gapFilling",
    content: <Phrase />,
  },
  {
    id: 7,
    title: "fillingGaps idiom phrase gapFilling",
    content: <Phrase />,
  },
  {
    id: 8,
    title: "prep preposition",
    content: <Preposition />,
  },
  {
    id: 9,
    title: "Dcompleting, degreeCompleting",
    content: <DCompleting />,
  },
  {
    id: 10,
    title: "completing,hscCompleting",
    content: <Completing />,
  },
  {
    id: 11,
    title: "Tag, Tags,tag Question",
    content: <TagQuestion />,
  },
  {
    id: 12,
    title: "suffix, prefix",
    content: <Suffix />,
  },
  {
    id: 13,
    title: "Article",
    content: <Article />,
  },
  {
    id: 14,
    title: "Verbs, right form of verbs",
    content: <Verbs />,
  },
  {
    id: 15,
    title: "Narration practice",
    content: <Narration />,
  },
  {
    id: 16,
    title: "present indefinite tense Tense",
    content: <Tense />,
  },
  {
    id: 17,
    title: "Paragraph",
    content: <Paragraph />,
  },
  {
    id: 18,
    title: "Application",
    content: <Application />,
  },
  {
    id: 19,
    title: "Composition",
    content: <Essays />,
  },
  {
    id: 20,
    title: "Suggestion sscSuggestion DegreeSuggestion",
    content: <Suggestion />,
  },
  {
    id: 21,
    title: "Suggestion sscSuggestion DegreeSuggestion",
    content: <HSuggestion />,
  },
  {
    id: 22,
    title: "Suggestion sscSuggestion DegreeSuggestion",
    content: <SSuggestion />,
  },
  {
    id: 23,
    title: "wh whQuestion",
    content: <Wh />,
  },
  {
    id: 24,
    title: "Synonym antonym SynonymsAntonyms",
    content: <SynAnt />,
  },
  {
    id: 25,
    title: "PartsOfSpeech adjective noun conjunction",
    content: <PaOfSp />,
  },
  {
    id: 26,
    title: "Dialogue",
    content: <Dialog />,
  },
  {
    id: 27,
    title: "Advertisements",
    content: <Advertisement />,
  },
  {
    id: 28,
    title: "poster",
    content: <Poster />,
  },
  {
    id: 29,
    title: "notice",
    content: <Notice />,
  },
  // Add more items with different components
];

type ResultItem = {
  id: number;
  title: string;
  content: JSX.Element;
};

const SearchResults = () => {
  const location = useLocation();
  const { searchTerm } = queryString.parse(location.search);
  const [results, setResults] = useState<ResultItem[]>([]);

  useEffect(() => {
    if (typeof searchTerm === "string") {
      const filteredResults = mockData.filter((item) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setResults(filteredResults);
    } else {
      setResults([]);
    }
  }, [searchTerm]);

  return (
    <div className="">
      <h1>Results for: {searchTerm}</h1>
      <div>
        {results.length > 0 ? (
          results.map((item: any) => (
            <div key={item.id}>
              {/* <h2>{item.title}</h2> */}
              <div>{item.content}</div>
              {/* Render the component or JSX content */}
            </div>
          ))
        ) : (
          <p>No results found.</p>
        )}
      </div>
    </div>
  );
};

export default SearchResults;
