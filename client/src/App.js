import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './pages/login/login.page';
import Dashboard from './pages/dashboard/dashboard.page';
import NoMatch from './pages/errorpages/nomatch.page';
import Styled from 'styled-components';

const Styles = Styled.div`
  
`;

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLog: false,
    }
  }

  handleLogin = (isLog) => {
    this.setState({ isLog })
  }

  render() {

    const { isLog } = this.state;

    return (
      <Styles>
        <Switch>
          <Route exact path='/' render={() =>
            !isLog ?
              <Login isLogin={this.handleLogin} /> :
              <Dashboard />
          } />
          <Route path='*' component={NoMatch} />
        </Switch>
      </Styles>
    )
  }
}
