import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
import faker from 'faker';

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail author="Sam" timeAgo="Today At 5:45 PM" content="Nice Post!" avatar={faker.image.avatar()} />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail author="Emmet" timeAgo="Today At 2:00 AM" content="OK Post!" avatar={faker.image.avatar()} />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail author="Audrey" timeAgo="Yesterday At 5:00 PM" content="Poor Post!" avatar={faker.image.avatar()} />
      </ApprovalCard>
    </div>
  )
}

ReactDOM.render(<App />, document.querySelector('#root'));
