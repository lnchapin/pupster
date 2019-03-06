import axios from "axios";

export default {
  newDogImage: function() {
    return axios.get("https://dog.ceo/api/breeds/image/random");
  },

  getBreedList: function() {
    return axios.get("https://dog.ceo/api/breeds/list");
  },

  getOneBreed: function(breedKey) {
    return axios.get(`https://dog.ceo/api/breed/${breedKey}/images`)
  }
}
