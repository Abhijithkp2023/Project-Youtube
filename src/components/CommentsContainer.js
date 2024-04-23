import React from "react";
import { commentsData } from "../utils/mockComments";
import Comment from "./Comment";

const CommentsList = ({ comments }) => {
  return comments.map((comments, index) => (
    <div key={index}>
        <Comment data={comments}  />
        <div className="pl-5 ml-5 border border-l-gray-900">
            <CommentsList comments={comments.replies}/>
        </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments</h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
