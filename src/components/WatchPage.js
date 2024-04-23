import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";


const WatchPage = () => {
  const [searchParams] = useSearchParams();

  const dispacth = useDispatch();
  useEffect(() => {
    dispacth(closeMenu());
  }, []);
  return (
    <div className="flex flex-col">
    <div>
      <iframe
      className="mx-3"
        width="1000"
        height="500"
        src={"https://www.youtube.com/embed/" + searchParams.get("v") + "?si=jGa8mwU9cu87tIwO"}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
       <CommentsContainer />
    </div>
  );
};

export default WatchPage;
