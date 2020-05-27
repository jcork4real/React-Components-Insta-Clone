// You will add code to this file
import React from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = props => {

  return (
    <div>
      {/* map through the comments data and return the Comment component */}
      {props.comments.map((comment, idx) => {
        return <Comment key={`${comment.username}-${idx}`} comment={comment} />
      })}
      <CommentInput setComments={props.setComments}
                    comments={props.comments} />
    </div>
  );
};

export default CommentSection;