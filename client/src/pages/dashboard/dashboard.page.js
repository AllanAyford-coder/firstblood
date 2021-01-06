import React, { Component } from 'react';
import Styled from 'styled-components';
import Header from '../../components/header/header.component'

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
        <Header />
      </Styles>
    )
  }
}
