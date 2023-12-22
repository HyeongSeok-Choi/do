import React from "react";
import Book from "./Book";

function Library(props){
  return(
      <div>
            <Book name="나무를 심은 사람" numOfPage={300}/>
            <Book name="마시멜로 이야기" numOfPage={400}/>
            <Book name="Do It ! 가즈아" numOfPage={500}/>
      </div>
  );
}

export default Library;