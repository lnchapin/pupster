import React, { Component } from "react";
import API from "../utils/API";
import DogCard from "./DogCard";
import styled from "styled-components";

const Form = styled.form`
  padding: 10px;
  margin: 10px;
`

class Search extends Component {
  state = {
    breedList: [],
    breed: '',
    breedImg: [],
    matched: 0
  }

  componentDidMount(){
    API.getBreedList()
      .then(res=>this.setState({breedList:res.data.message}))
      .catch(err=>console.log(err))
  }

  updateBreed = event =>{
    this.setState({matched: 0, breed: event.target.value})
  }

  handleButtonClick = (event) =>{
    event.preventDefault();
    if (this.state.breed === "") {
      this.setState({matched:1})
    } else{
      API.getOneBreed(this.state.breed)
      .then(res=>this.setState({breedImg:res.data.message}))
      .catch(err=>console.log(err))
    }
  }


  render(){
    return (
      <>
      <h2>Search</h2>
      <Form onSubmit={this.handleButtonClick}>
        <label htmlFor="breed-choice">Breed name:</label>
        <input list="breeds" id="breed-choice" name="breed-choice" className="form-control" placeholder="Choose a Breed"
        onChange={this.updateBreed}/>
        <datalist id="breeds">
          {this.state.breedList.map(breed=>
            <option
              key={breed}
              value={breed}
              >
              {breed}
            </option>)}
        </datalist>
        {this.state.matched ? <div className="alert alert-danger" role="alert">Please select a breed</div> : ""}
        <button type="submit" className="btn btn-success btn-block mt-2">Search</button>
      </Form>
      <div className="row">
        {this.state.breedImg.map(img=><DogCard src={img} key={img} keys={img} alt="dog"/>)}
      </div>
      </>
  )}
}

export default Search;
