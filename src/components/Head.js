import React, { useEffect, useState } from "react";
import { useDispatch, useSelector  } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";
import {GOOGLE_API_KEY} from "../utils/constants"
import { Link } from "react-router-dom";





const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const dispatch = useDispatch();
  const searchCache = useSelector(store => store.search);
  

  useEffect(() => {
    //api call for searchquery
    const timer = setTimeout(() => {
      if(searchCache[searchQuery]){
        setSuggestions(searchCache[searchQuery])
      }else {
        getSearchSuggestions()
    }
  }, 200);

    return () => {
      clearTimeout(timer); //clearing the previous timer when the key strike is <200
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);
    dispatch(cacheResults({
      [searchQuery] : json[1]
    }))
  };

  const handleSearch = async (suggestion) => {
    setSearchQuery(suggestion)
    const data = await fetch("https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=" + suggestion + "&type=video&key=" + GOOGLE_API_KEY);
    const json  = await data.json();
    console.log(json.items);
  }


  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col p-4 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          onClick={() => toggleMenuHandler()}
          className="h-8 cursor-pointer"
          alt="menu"
          src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png?f=webp"
        />
        <img
          className="h-8 p-1"
          alt="logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1280px-YouTube_Logo_2017.svg.png"
        />
      </div>
      <div className="col-span-10 px-10">
        <div>
          <input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            type="text"
            className="w-1/2 border border-gray-500 py-2 px-5 rounded-l-full"
            placeholder="Search"
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setTimeout(() => setShowSuggestions(false),1000) }
          />
          <button type="submit" className=" border border-gray-900 py-2 px-5 bg-gray-200 rounded-r-full">
            🔍
          </button>
        </div>
        {showSuggestions && (
          <div className="absolute bg-white px-5 py-2 w-[30rem] shadow-lg rounded-lg border border-gray-100">
            <ul>
            <Link to="/results">
              {suggestions.map((suggestion, index) => (
                <li
                onClick={() => handleSearch(suggestion)}
                  key={suggestion}
                  className="py-2 shadow-sm hover:bg-gray-200"
                >
                  🔍 {suggestion}
                </li>
              ))}
              </Link>
            </ul>
          </div>
        )}
      </div>
      <div className="col-span-1">
        <img
          className="h-8"
          alt="user"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        />
      </div>
    </div>
  );
};

export default Head;
