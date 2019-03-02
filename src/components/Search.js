import React, { Component } from "react";
import API from "../utils/API"

class Search extends Component {
  state = {
    breedList: [],
    breed: '',
    breedImg: []
  }

  componentDidMount(){
    API.getBreedList()
      .then(res=>this.setState({breedList:res.data.message}))
      .catch(err=>console.log(err))
  }



  handleButtonClick = (event) =>{
    event.preventDefault()
    console.log("in handleButtonClick");
    console.log(this.state.breed);
    //grab the key from the option
    // API.getOneBreed(breedkey)
    // .then(res=>this.setState({breedImg:res.data.message}))
    // .catch(err=>console.log(err))
  }

  render(){
    return (
      <>
      <h2>Search</h2>
      <form>
        <label htmlFor="breed-choice">Breed name:</label>
        <input list="breeds" id="breed-choice" name="breed-choice" className="form-control" placeholder="Choose a Breed" />
        <datalist id="breeds">
          {this.state.breedList.map(breed=><option key={breed} onChange={()=>this.setState({breed: breed})}>{breed}</option>)}
        </datalist>
        <button type="submit" className="btn btn-success btn-block mt-2" onClick={this.handleButtonClick}>Search</button>
      </form>
      {this.state.breedImg.map(img=><img src={img} key={img} alt="dog"/>)}
      </>
  )}
}

export default Search;
