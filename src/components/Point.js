import React from "react";
import styled from "styled-components";

const Body = styled.div`
  padding: 10px;
  margin: 10px;
`

const Thumbnail = styled.img`
  padding: 10px;
  margin: 10px;
  width: 100%;
`

const About = () => {
  return (
    <Body className="container">
      <div className="row">
        <h2>About</h2>
      </div>
      <div className="row">
        <div className="col-sm-12 col-md-4">
          <Thumbnail className="img-thumbnail rounded float-left" src="humanPuppy.jpg" alt="dog" />
        </div>
        <div className="col-sm-12 col-md-8">
          <p>In our increasingly overly stimulating and connected world many people find relaxation in the company of a dog but due to the restrictions on housing and work hours many individuals find themselves unable to own a dog of their own.</p>
          <p>Pupster helps alleviate that connecting dogs and humans by allowing both parties to like one another prior to disclosing personal information. This also help prevent the awkward first meeting phase by allowing each individual to know who they are looking for at that meeting.</p>
      </div>
      </div>
    </Body>
  )
}

export default About;
