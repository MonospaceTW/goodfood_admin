import React, { Component } from 'react';
import propTypes from 'prop-types';
import { Form, Label } from 'semantic-ui-react'

class LoginScene extends Component {
  static propTypes = {
    handleLogin: propTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {
      emailErrMsg: '',
      passwordErrMsg: '',
      email: '',
      password: ''
    };
  }

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  verifyFields = ({email, password}) => {
    if(email === '') return {
      isVerify: false,
      error: {
        emailErrMsg: 'Email 不可為空'
      }
    };

    if(password === '') return {
      isVerify: false,
      error: {
        passwordErrMsg: 'Password 不可為空'
      }
    };

    return {isVerify: true};
  };

  handleSubmit = () => {
    const {isVerify, error} = this.verifyFields(this.state);

    isVerify
      ? this.props.handleLogin(this.state)
      : this.setState(error);
  }

  render() {
    return (
      <div>
        <Form>
          <Form.Field>
            <Form.Input
              name='email'
              error={this.state.emailErrMsg !== ''}
              placeholder='Email'
              onChange={this.handleInputChange}
              value={this.state.email} />
            <Label basic pointing style={{color: 'red'}}>
              {this.state.emailErrMsg}
            </Label>
          </Form.Field>
          <Form.Field>
            <Form.Input
              name='password'
              error={this.state.passwordErrMsg !== ''}
              onChange={this.handleInputChange}
              value={this.state.password}/>
            <Label basic pointing style={{color: 'red'}}>
              {this.state.passwordErrMsg}
            </Label>
          </Form.Field>
          <Form.Field>
            <Form.Button  onClick={this.handleSubmit}>
              登入
            </Form.Button>
            
          </Form.Field>
        </Form>
        <h1>Login Scene</h1>
      </div>
    );
  }
}

export default LoginScene;
