import React from "react";
import Comment from "./Comment";


const comment = [
  {
    name:"최형석",
    comment:"안녕하세요, 한석규입니다."
  },
  {
    name:"최원석",
    comment:"안녕하세요, 한석규입니다."
  },
  {
    name:"반민애",
    comment:"안녕하세요, 한석규입니다."
  }
];

function CommentList(props){
  return(
    <div>
      {comment.map((comment)=>{
        return (
          <Comment name={comment.name} comment={comment.comment}/>
        );
      }
      )}
    </div>
  );
}

export default CommentList;