import React from "react";

function Test(props){
 return(
  <div>
  <h1><b>{`난이도 ${props.name} 이다`}</b></h1>
  <h2><b>{`점수는 ${props.sdajk} 이다`}</b></h2>
  </div>
 );
}

export default Test;