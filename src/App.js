import React, { Component } from "react";
// Import Clarifai into our App
import Clarifai from "clarifai";
import ImageSearchForm from "./Components/ImageSearchForm/ImageSearchForm";
// Uncomment FaceDetect Component
import FaceDetect from "./Components/FaceDetect/FaceDetect";
import "./App.css";

// You need to add your own API key here from Clarifai.
const app = new Clarifai.App({
  apiKey: "ADD YOUR API KEY HERE",
});

class App extends Component {
  // Create the State for input and the fectch image
  constructor() {
    super();
    this.state = {
      input: "",
      imageUrl: "",
    };
  }

// setState for our input with onInputChange function
  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  };

// Perform a function when submitting with onSubmit
  onSubmit = () => {
        // set imageUrl state
    this.setState({ imageUrl: this.state.input });
    app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input).then(
      function (response) {
        // response data fetch from FACE_DETECT_MODEL 
        console.log(response);
        /* data needed from the response data from clarifai API, 
           note we are just comparing the two for better understanding 
           would to delete the above console*/ 
        console.log(
          response.outputs[0].data.regions[0].region_info.bounding_box
        );
      },
      function (err) {
        // there was an error
      }
    );
  };
  render() {
    return (
      <div className="App">
        // update your component with their state
        <ImageSearchForm
          onInputChange={this.onInputChange}
          onSubmit={this.onSubmit}
        />
        // uncomment your face detect app and update with imageUrl state
        <FaceDetect imageUrl={this.state.imageUrl} />
      </div>
    );
  }
}
export default App;