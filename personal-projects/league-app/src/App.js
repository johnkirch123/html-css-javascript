import React, { Component } from "react";
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

  componentDidMount() {
    const api_key = "RGAPI-d2d08187-b675-45f1-97fb-091cdcc411c0";
    const URL = `https://na1.api.riotgames.com/lol/platform/v3/champions/266?api_key=${api_key}`;
    fetch(URL)
      .then(res => {
        console.log(res);
      })
      .then(json => {
        this.setState({
          isLoaded: true,
          items: json
        });
      });

    console.log(this.state.items.id);
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
