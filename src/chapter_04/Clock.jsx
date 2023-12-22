//시계 컴포넌트 만든다

import React from "react";

function Clock(props){
  return(
    <div>
      <h1>리리 리짜로 끝나가는말!</h1>
      <h2>현재 시간: {new Date().toLocaleTimeString()}</h2>
    </div>
  );
}

export default Clock;