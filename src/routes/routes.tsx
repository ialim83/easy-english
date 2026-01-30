import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage";
import About from "../pages/About";
import Dashboard from "../pages/Dashboard";
import DashboardLayout from "../layouts/DashboardLayout";
import Login from "../pages/Login";
import Registration from "../pages/Registration";
import PrivateRoute from "./private/PrivateRoute";
import Profile from "../pages/Profile";
import EditProfile from "../pages/EditProfile";
import Ssc from "../pages/Ssc";
import Hsc from "../pages/Hsc";
import Degree from "../pages/Degree";
import Article from "../pages/hscItems/Article";
import Phrase from "../pages/hscItems/Phrase";
import Completing from "../pages/hscItems/Completing";
import Verbs from "../pages/hscItems/Verbs";
import Preposition from "../pages/hscItems/Preposition";
import Connectors from "../pages/hscItems/Connectors";
import Modifier from "../pages/hscItems/Modifier";
import Transformation from "../pages/hscItems/Transformation";
import Punctuation from "../pages/hscItems/Punctuation";
import Suggestion from "../pages/DegreeItems/Suggestion";
import Advertisement from "../pages/DegreeItems/Advertisement";
import DCompleting from "../pages/DegreeItems/DCompleting";
import Dialog from "../pages/DegreeItems/Dialog";
import Poster from "../pages/DegreeItems/Poster";
import Report from "../pages/DegreeItems/Report";
import HSuggestion from "../pages/hscItems/HSuggestion";
import Wh from "../pages/DegreeItems/Wh";
import Tense from "../pages/allItems/Tense";
import Narration from "../pages/hscItems/Narration";
import StrongVerb from "../pages/allItems/StrongVerb";
import Voice from "../pages/allItems/Voice";
import SynAnt from "../pages/hscItems/SynAnt";
import Paragraph from "../pages/composition/Paragraph";
import Application from "../pages/composition/Application";
import Essays from "../pages/composition/Essays";
import Letter from "../pages/composition/Letter";
import Email from "../pages/composition/Email";
import Pronoun from "../pages/hscItems/Pronoun";
import TagQuestion from "../pages/sscItems/TagQuestion";
import SSuggestion from "../pages/sscItems/SSuggestion";
import Notice from "../pages/DegreeItems/Notice";
import Suffix from "../pages/DegreeItems/Suffix";
import Rearrange from "../pages/DegreeItems/Rearrange";
import SearchResults from "../pages/SearchResults";
import BoardQuestion from "../pages/hscItems/BoardQuestion";
import DPartsOfSpeech from "../pages/DegreeItems/DPartsOfSpeech";
import Sentence from "../pages/allItems/Sentence";
import SscQuestion from "../pages/sscItems/SscQuestion";
import ModelTest from "../pages/hscItems/ModelTest";
import CompetingStory from "../pages/hscItems/CompetingStory";
import Graph from "../pages/hscItems/Graph";
import FirstPaperModel from "../pages/hscItems/FirstPaperModel";
import Correction from "../pages/DegreeItems/Correction";
import Test from "../pages/allItems/Test";
import OxfordWords from "../pages/allItems/OxfordWords";
import Pronunciation from "../pages/allItems/Pronunciation";
import StoryVocabulary from "../pages/allItems/StoryVocabulary";
import Dictionary from "../pages/allItems/Dictionary";
import Grammar from "../pages/allItems/Grammar";
import PaOfSp from "../pages/allItems/PartsOfSpeech";
import There from "../pages/allItems/There";
import Number from "../pages/allItems/Number";
import UseOfIt from "../components/UseOfIt";
import LetterAlphabets from "../pages/allItems/LetterAlphabets";
import QuestionOneTwo from "../pages/hscItems/QuestionOneTwo";
import QuestionFour from "../pages/hscItems/QuestionFour";
import QuestionThree from "../pages/hscItems/QuestionThree";
import QuestionFive from "../pages/hscItems/QuestionFive";
import QuestionSix from "../pages/hscItems/QuestionSix";
import ThemeWriting from "../pages/hscItems/ThemeWriting";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        // loader: () => fetch("http://localhost:5000/shoes"),
      },
      {
        path: "/search",
        element: <SearchResults />,
      },
      {
        path: "/ssc",
        element: <Ssc />,
      },
      {
        path: "/modelTestFirstPaper",
        element: <FirstPaperModel />,
      },
      {
        path: "/hsc",
        element: <Hsc />,
      },
      {
        path: "/theme",
        element: <ThemeWriting />,
      },
      {
        path: "/degree",
        element: <Degree />,
      },
      {
        path: "/HQuestion",
        element: <BoardQuestion />,
      },
      {
        path: "/modelTest",
        element: <ModelTest />,
      },
      {
        path: "/article",
        element: <Article />,
      },
      {
        path: "/story",
        element: <CompetingStory />,
      },
      {
        path: "/graph",
        element: <Graph />,
      },
      {
        path: "/preposition",
        element: <Preposition />,
      },
      {
        path: "/phrase",
        element: <Phrase />,
      },
      {
        path: "/completing",
        element: <Completing />,
      },
      {
        path: "/sscQuestion",
        element: <SscQuestion />,
      },
      {
        path: "/tag",
        element: <TagQuestion />,
      },
      {
        path: "/S-Suggestion",
        element: <SSuggestion />,
      },
      {
        path: "/verbs",
        element: <Verbs />,
      },
      {
        path: "/narration",
        element: <Narration />,
      },
      {
        path: "/transformation",
        element: <Transformation />,
      },
      {
        path: "/pronoun",
        element: <Pronoun />,
      },
      {
        path: "/connectors",
        element: <Connectors />,
      },
      {
        path: "/modifier",
        element: <Modifier />,
      },

      {
        path: "/punctuation",
        element: <Punctuation />,
      },

      {
        path: "/syn-ant",
        element: <SynAnt />,
      },
      {
        path: "/HSuggestion",
        element: <HSuggestion />,
      },
      {
        path: "/QuestionOneTwo",
        element: <QuestionOneTwo />,
      },
      {
        path: "/QuestionThree",
        element: <QuestionThree />,
      },
      {
        path: "/QuestionFour",
        element: <QuestionFour />,
      },
      {
        path: "/QuestionFive",
        element: <QuestionFive />,
      },
      {
        path: "/QuestionSix",
        element: <QuestionSix />,
      },
      {
        path: "/modelTest2",
        element: <ModelTest />,
      },

      // Degree
      {
        path: "/advertisement",
        element: <Advertisement />,
      },
      {
        path: "/correction",
        element: <Correction />,
      },
      {
        path: "/DPartsOfSpeech",
        element: <DPartsOfSpeech />,
      },
      {
        path: "/word-rearrange",
        element: <Rearrange />,
      },
      {
        path: "/suffix",
        element: <Suffix />,
      },
      {
        path: "/notice",
        element: <Notice />,
      },
      {
        path: "/dCompleting",
        element: <DCompleting />,
      },
      {
        path: "/dialog",
        element: <Dialog />,
      },
      {
        path: "/Letter",
        element: <LetterAlphabets />,
      },
      {
        path: "/paOfSp",
        element: <PaOfSp />,
      },
      {
        path: "/number",
        element: <Number />,
      },
      {
        path: "/there",
        element: <There />,
      },
      {
        path: "/it",
        element: <UseOfIt />,
      },

      {
        path: "/poster",
        element: <Poster />,
      },
      {
        path: "/report",
        element: <Report />,
      },
      {
        path: "/wh",
        element: <Wh />,
      },
      {
        path: "/suggestion",
        element: <Suggestion />,
      },
      // all items
      { path: "/pronunciation", element: <Pronunciation /> },
      { path: "/storyVocabulary", element: <StoryVocabulary /> },
      {
        path: "/test",
        element: <Test />,
      },
      {
        path: "/grammar",
        element: <Grammar />,
      },
      {
        path: "/words",
        element: <OxfordWords />,
      },
      {
        path: "/dictionary",
        element: <Dictionary />,
      },
      {
        path: "/sentence",
        element: <Sentence />,
      },
      {
        path: "/tense",
        element: <Tense />,
      },
      {
        path: "/strongVerb",
        element: <StrongVerb />,
      },
      {
        path: "/voice",
        element: <Voice />,
      },
      //composition
      {
        path: "/paragraph",
        element: <Paragraph />,
      },
      {
        path: "/application",
        element: <Application />,
      },
      {
        path: "/essay",
        element: <Essays />,
      },
      {
        path: "/letter",
        element: <Letter />,
      },
      {
        path: "/email",
        element: <Email />,
      },
      // main menu
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Registration />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
    ],
  },

  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        // path: "dashboard/home",
        index: true,
        element: (
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        ),
      },

      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "profile/edit/:id",
        element: <EditProfile />,
        // loader: ({ params }) =>
        // fetch(`http://localhost:5000/user/get/${params.id}`),
      },
    ],
  },
]);
