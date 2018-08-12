import React, { Component } from 'react';

class LoginScene extends Component {
  constructor(props) {
    super(props);
    this.state = {
      accountErrMsg: '',
      passwordErrMsg: '',
      account: '',
      password: ''
    };
  }

  render() {
    return (
      <div>
        <input />
        <input />
        <button onClick={() => this.props.login(true)}>
          登入
        </button>
        <h1>Login Scene</h1>
      </div>
    );
  }
}

export default LoginScene;
