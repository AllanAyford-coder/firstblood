import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import Styled from 'styled-components';
import { ReactComponent as Instagram } from '../../assets/images/Instagram.svg';
import { ReactComponent as Home } from '../../assets/images/Home.svg';
import { ReactComponent as Explore } from '../../assets/images/Explore.svg';

const Styles = Styled.nav`
  height: 50px;
  border: 1px solid #dfdfdf;

  .div-header {
    width: 80%;
    margin: 0 auto;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
  }

  .div-navigation {
    display: flex;
    flex-flow: row nowrap;
  }

  .div-svg {
    height: 30px;
    width: 30px;
    padding: 0 20px;
  }

`;

export default class Header extends Component {
  render() {
    return (
      <Styles>
        <div>
          <div className='div-header'>
            <Instagram />
          </div>
          <div className='div-navigation'>
            <NavLink to='/'><Home className='div-svg' /></NavLink>
            <NavLink to='/explore'><Explore className='div-svg' /></NavLink>
            <button>Log Out</button>
          </div>
        </div>
      </Styles>
    )
  }
}
