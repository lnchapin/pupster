import React from "react";
import styled from "styled-components";

const Body = styled.div`
  height: 90vh;
  background: url("beach.jpg") no-repeat fixed center center / cover rgba(0, 0, 0, 0);
`

const Headline= styled.h1`
  text-align:center;
  color: #212529;
`
const Tagline= styled.h1`
  color: #ffff;
`

const Home = () => {
  return (
    <Body>
      <Headline className="text-center">Pupster</Headline>
      <Tagline className="text-center">Where Dogs and Humans come to connect</Tagline>
    </Body>
  )
}

export default Home;
