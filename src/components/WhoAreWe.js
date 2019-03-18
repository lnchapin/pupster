import React from "react";
import styled from "styled-components";

const Body = styled.div`
  padding: 10px;
  margin: 10px;
  clear:both;
`

const Faces = styled.img`
  padding: 10px;
  margin: 10px;
  width: 50%;
  border-radius: 50%;
`

const About = () => {
  return (
    <Body>
      <h2 className="text-center">Who Are We?</h2>
      <div class="container">
      <div class="row align-items-center">
        <div class="col-sm">
          <Faces src="grace.JPG" alt="dog" />
        </div>
        <div class="col-sm">
          <Faces src="piper.jpg" alt="dog" />
        </div>
        <div class="col-sm">
          <Faces src="lindsay.png" alt="dog" />
        </div>
      </div>
    </div>
      <p>The team behind Pupster is comprised of Grace, Piper and Lindsay. This team has also brought you </p>
    </Body>
  )
}

export default About;
