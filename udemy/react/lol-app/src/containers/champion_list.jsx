import React, { Component } from "react";
import { connect } from "react-redux";

class ChampionList extends Component {
  renderChampions(cityData) {
    const name = cityData.city.name;
    const temps = cityData.list.map(champion => champion.main.temp);
    return (
      <tr key={name}>
        <td>{name}</td>
      </tr>
    );
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Champ info</td>
          </tr>
        </tbody>
      </table>
    );
  }
}

function mapStateToProps({ champion }) {
  return { champion };
}

export default connect(mapStateToProps)(ChampionList);
