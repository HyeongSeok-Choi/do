import React, {useState} from "react";
import Toolbar from "./Toolbar";

function LandingPage(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const onClickLogin = () => {
        setIsLoggedIn(true);
  };
  const onClickLogout = () => {
        setIsLoggedIn(false);
  };


  return(
    <div>
      <Toolbar
          isLoggedIn={isLoggedIn}
          onClickLogin={onClickLogin}
          onClickLogout={onClickLogout}
          />

          <div style={{padding:16}}> 형석이와 함께하는 리액트 스터디 !</div>   
          </div>
  );
}

export default LandingPage;