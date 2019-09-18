import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom'
import history from './history';
import Search from './routes/Search'
import IssueList from './routes/IssueList'
import './index.scss';

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route exact path="/" render={props => <Search {...props} />} />
          <Route exact path="/IssueList" render={props => <IssueList {...props} />} />
        </Switch>
      </Router>
    )
  }
}

export default App;
