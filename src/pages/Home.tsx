import Banner from "../components/home/Banner";
import GrammarItem from "../components/grammar/GrammarItem";
import useAuth from "../hooks/useAuth";
import Welcome from "../components/Welcome";
import Glob from "../components/home/Glob";
import LoadingSpinner from "../components/LoadingSpinner";
import Composition from "../components/Composition";

const Home = () => {
  const auth = useAuth();
  // console.log(auth);
  if (auth?.loading) {
    return <LoadingSpinner />;
  }
  return (
    <div className="">
      {auth?.user ? (
        <div>
          <Banner />
          {/* <Video /> */}
          <div className="py-10">
            <Glob />
          </div>
          <div className="md:max-w-[65%]  mx-auto">
            <GrammarItem />
            <Composition />
            {/* <Accordian /> */}
          </div>
        </div>
      ) : (
        <>
          <Welcome />
        </>
      )}
    </div>
  );
};

export default Home;
