import React from 'react'

import ReactDOM from 'react-dom'

import CommentDetail from './CommentDetail'

import ApprovalCard from './ApprovalCard'

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <div>
          <h4>Warning!</h4>
          Are you sure you want to do this?
        </div>
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail author="Zihan" timeAgo="Today at 8:00" content="This is content" />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail author="Yi" timeAgo="Yeterday" content="This is also content" />      
      </ApprovalCard>
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector('#root'))