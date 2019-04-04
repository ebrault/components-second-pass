import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import faker from 'faker';

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail author="Sam" timeAgo="Today At 5:45 PM" content="Nice Post!" avatar={faker.image.avatar()} />
      <CommentDetail author="Emmet" timeAgo="Today At 2:00 AM" content="OK Post!" avatar={faker.image.avatar()} />
      <CommentDetail author="Audrey" timeAgo="Yesterday At 5:00 PM" content="Poor Post!" avatar={faker.image.avatar()} />
    </div>
  )
}

ReactDOM.render(<App />, document.querySelector('#root'));
