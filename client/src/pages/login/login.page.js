import React, { Component } from 'react';
import Styled from 'styled-components';

const Styles = Styled.div`
  width: 250px;
  height: 300px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-evenly;
  margin: 0 auto;
  border: 1px solid #dbdbdb;
  border-radius: 5px;
  margin-top: 10vh;
  padding: 20px;

  .div-login-logo {
    height: 50px;
    width: 200px;
    align-self: center;
  }

  input {
    width: 95%;
    border: 1px solid #dbdbdb;
    padding: 5px;
    margin: 2px 0;
    border-radius: 5px;
    background-color: #fafafa;
    box-shadow: none;
    line-height: 1.5;
  }

  button {
    width: 100%;
    margin: 5px 0;
    background-color: dodgerblue;
    font-family: 'Montserrat', sans-serif;
    padding: 7px;
    font-weight: 600;
    border: none;
    color: white;
    border-radius: 5px;
  }

  ::placeholder {
    text-align: center;
    font-family: 'Staatliches', cursive;
  }
`;

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.isLogin(true)
  }


  render() {
    return (
      <Styles>
        <div className="div-login-logo">
          <h1>Details</h1>
          <p htmlFor="email">Email: {this.state.email}</p>
          <p htmlFor="password">Password: {this.state.password}</p>
        </div>

        <form onSubmit={this.handleSubmit}>
          <input type="email" name="email" id="email" placeholder="email" required onChange={this.handleChange} />
          <input type="password" name="password" id="password" placeholder="password" required onChange={this.handleChange} />
          <button>Log In</button>
        </form>
      </Styles>
    )
  }
}
