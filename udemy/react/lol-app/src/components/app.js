import React, { Component } from "react";
import SearchBar from "../containers/searchbar";
import ChampionList from "../containers/champion_list";

export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <ChampionList />
      </div>
    );
  }
}
