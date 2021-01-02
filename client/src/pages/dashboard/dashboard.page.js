import React, { Component } from 'react';
import Styled from 'styled-components';

const Styles = Styled.div`
  
`;

export default class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <Styles>
        <h1>Dashboard</h1>
      </Styles>
    )
  }
}
