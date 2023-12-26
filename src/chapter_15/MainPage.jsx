import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    padding: 1em;
    background: #FFD2D7;
    width: 100%;
    height 2rem;
    border-radius:100px;
    `;

const Title = styled.h3`
    font-size: 3rem;
    color:white;
    text-align:center;
    `

function MainPage(props){
  return(
    <Wrapper>
      <Title>
        안녕, 리액트 !
      </Title>
    </Wrapper>
  );
}

export default MainPage;