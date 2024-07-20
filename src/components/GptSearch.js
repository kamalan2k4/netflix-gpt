import { LOGO } from "../constants/constants";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestion";



const GPTSearch = () => {
    return (
      <>
      <div className="fixed -z-10">
        <img className="h-screen w-screen object-cover" src={LOGO} alt="logo" />
        </div>
        <div className="">
        <GptSearchBar />
        <GptMovieSuggestions />
      </div>
    </>
    );
  };
  export default GPTSearch;