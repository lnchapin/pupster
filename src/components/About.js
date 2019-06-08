import React from "react";
import Point from "./Point";
import Who from "./WhoAreWe"
import styled from "styled-components";

const Break = styled.div`
  height: 5%;
  clear: both;
`

const About = () => {
  return (
    <>
      <Point />
      <Break>
        <br />
      </Break>
      <Who />
    </>
  )
}

export default About;
