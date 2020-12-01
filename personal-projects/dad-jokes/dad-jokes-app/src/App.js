import React from 'react';
import Navbar from './components/layout/Navbar';
import Joke from './components/Joke';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Joke />
      </div>
    </div>
  );
}

export default App;
