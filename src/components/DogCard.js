import React from "react";
import styled from "styled-components";

const Card = styled.div`
  padding: 10px;
  margin: 10px;
`


const DogCard = props => {
  return (
      <div className="col-sm-4">
        <Card className="card">
          <img className="card-img-top" src={props.src} key={props.keys} alt="dog" />
        </Card>
      </div>
  )
}

export default DogCard;
