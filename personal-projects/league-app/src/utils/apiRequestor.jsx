import React, { Component } from "react";

class ApiRequestor extends Component {
  state = {
    champion_id: '1'
  };

  getInformation = () => {
    const champion_id = this.state.champion_id;
    const xhr = new XMLHttpRequest();

    xhr.open('GET', `https://na1.api.riotgames.com/lol/platform/v3/champions/${champion_id}/RiotSchmick?api_key="RGAPI-d2d08187-b675-45f1-97fb-091cdcc411c0"`, true);

    xhr.onload = function() {
      if(this.status === 200) {
        const response = JSON.parse(this.responseText);
        console.log(response);

        let output = '';

        if(response.type === 'success') {
          response.value.forEach(function(freeToPlay) {
            output += `<li>${freeToPlay}</li>`
          });
        }
      }
    }
  }

  render() {
    return <div>{this.getInformation}</div>;
  }
}

export default ApiRequestor;
