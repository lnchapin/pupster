import React from "react";
import styled from "styled-components";

const Body = styled.div`
  padding: 100px;
  margin: 20%;
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
      <p>When Grace brought Piper into class with her Lindsay was smitten with her beautiful furry face. This lead to Lindsay conducting  an analysis of current culture with regards to human needs and pet interactions effects on health. Based on that research the team, comprised of Grace, Piper and Lindsay, built Pupster to help improve the lives of both humans and dogs. This team has also brought you class grading, project help, and dance breaks.</p>
    </Body>
  )
}

export default About;
