import React from 'react';
import ReactDom from 'react-dom';

function Greeting() {
  return (
    <h2>this is john and this is my first component</h2>
  );
}

ReactDom.render(<Greeting/>,document.getElementById('root'));
