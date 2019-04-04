import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail author="Sam" timeAgo="Today At 5:45 PM" content="Nice Post!"/>
      <CommentDetail author="Emmet" timeAgo="Today At 2:00 AM" content="OK Post!"/>
      <CommentDetail author="Audrey" timeAgo="Yesterday At 5:00 PM" content="Poor Post!"/>
    </div>
  )
}

ReactDOM.render(<App />, document.querySelector('#root'));
