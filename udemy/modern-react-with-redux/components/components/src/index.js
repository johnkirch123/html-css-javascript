import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import Comment from './CommentDetail';

const App = () => {
  return (
    <div className="ui container comments">
      <Comment />
      <Comment />
      <Comment />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
