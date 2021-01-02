import React, { Component } from 'react'
import Styled from 'styled-components';

const Styles = Styled.div`
  margin-left: 10px;

  .p-span-404page {
    color: dodgerblue;
  }
`;

export default class NoMatch extends Component {
  render() {

    const { history } = this.props

    return (
      <Styles>
        <h2>404 Page</h2>
        <p>Redirecting to <span className='p-span-404page' onClick={() => history.push('/')}>Login Page</span></p>
      </Styles>
    )
  }
}
