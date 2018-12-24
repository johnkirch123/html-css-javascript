import React, { Component } from "react";
import axios from "axios";
import apiKey from "./keys/keys";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false
    };
  }

  async componentDidMount() {
    // const api_key = apiKey;
    // const URL = `https://na1.api.riotgames.com/lol/platform/v3/champions/266?api_key=${api_key}`;
    // // const URL = "https://jsonplaceholder.typicode.com/todos";
    // const result = await axios.get(URL, {
    //   "Content-Type": "application/json",
    //   "Access-Control-Allow-Origin": "*"
    // });
    // this.state.items = result;
    // console.log(this.state.items.data[2]);
    // fetch(URL)
    //   .then(res => {
    //     console.log(res);
    //   })
    //   .then(json => {
    //     this.setState({
    //       isLoaded: true,
    //       items: json
    //     });
    //   });
  }

  render() {
    const { isLoaded, items } = this.state;

    if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return <div className="App">{items}</div>;
    }
  }
}

export default App;
