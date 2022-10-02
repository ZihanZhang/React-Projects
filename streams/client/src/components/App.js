import React from 'react'
import StreamCreate from './streams/StreamCreate'
import StreamEdit from './streams/StreamEdit'
import StreamDelete from './streams/StreamDelete'
import StreamList from './streams/StreamList'
import StreamShow from './streams/StreamShow'
import Header from './Header'
import {Router, Route, Link, Switch} from 'react-router-dom'
import history from '../history'

const PageOne = () => {
  return <div>PageOne<Link to="/pagetwo">Navigate to page two</Link></div>
}

const PageTwo = () => {
  return <div>PageTwo</div>
}

const App = () => {
  return (
    <div>
      <Router history={history}>
        <Header />
        <Switch>
          <Route path="/" exact component={StreamList} />
          <Route path="/stream/new" component={StreamCreate} />
          <Route path="/stream/edit/:id" component={StreamEdit} />
          <Route path="/stream/delete/:id" component={StreamDelete} />
          <Route path="/stream/:id" component={StreamShow} />
        </Switch>
      </Router>
    </div>
  )
}

export default App