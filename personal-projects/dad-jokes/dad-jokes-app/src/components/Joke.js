import Axios from 'axios';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Joke() {

  const [ joke, setJoke ] = useState('');

  useEffect( () => {

    axios.get('https://icanhazdadjoke.com/', {headers: {Accept: 'application/json'}})
    .then(res => setJoke(res.data))
    .catch(err => console.log(err));

  }, []);

  const fetchJoke = () => {
    axios.get('https://icanhazdadjoke.com/', {headers: {Accept: 'application/json'}})
    .then(res => setJoke(res.data))
    .catch(err => console.log(err));
  }

  return (
    <div className="mt-4">
      <div className="card">
        <div className="card-header">
          Dad Joke
        </div>
        <div className="card-body">
          <p className="card-text">{joke.joke}</p>
          <a  className="btn btn-primary text-white" onClick={fetchJoke}>Get another Joke</a>
        </div>
      </div>
    </div>
  )
}
