import React, { Component } from "react";
import API from "../utils/API"

class Discover extends Component{
  state={
    dogImage: "",
    matchCount: 0,
    matched: null
  }

  componentDidMount(){
    this.newDogImage()
  }

  newDogImage = () => {
    API.newDogImage()
      .then(res => this.setState({dogImage: res.data.message}))
      .catch(err => console.log(err))
  }

  handleButtonClick = event =>{
    event.preventDefault()
    const action = event.target.attributes.getNamedItem("data-action").value

    const newState = { ...this.state }

    if (action === "like") {
      const randomNum = Math.floor(Math.random()* 4) + 1;
      newState.matched =  randomNum === 3
      newState.matchCount = newState.matched ? newState.matchCount + 1 : newState.matchCount
    } else {
      newState.matched = false
    }


    this.setState(newState, function() {
      this.newDogImage()
    })
  }

  render(){
  return (
    <>
      <h2>Discover</h2>
      <h3>You have {this.state.matchCount} pupper friends!</h3>
      <div className="alert alert-success" role="alert" style={{ opacity: this.state.matched ? 1 : 0}}>
        Yay you made a pupper friend!
      </div>
      <img src={this.state.dogImage} alt="A potental dog friend" style={{ height: 250}}/>
      <p>
        <button
          data-action="like"
          type="button"
          className="btn btn-primary mr-2"
          onClick={this.handleButtonClick}>
          Like
        </button>
        <button
          data-action="dislike"
          type="button"
          className="btn btn-primary mr-2"
          onClick={this.handleButtonClick}>
          Dislike
        </button>
      </p>

    </>
  )
}
}

export default Discover;
