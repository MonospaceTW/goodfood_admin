import React, { Component } from 'react';
import LoginScene from './components/LoginScene';
import MainScene from './MainScene';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      auth: {
        isLogin: false,
      },
      routes: {
        currentPage: 'Home'
      }
    };
  }

  setLoginState = (isLogin) =>
    this.setState({auth: {isLogin}});

  changeCurrentPage = (currentPage) =>
    this.setState({routes: {currentPage}});

  MainScene = () =>
    <MainScene
      currentPage={this.state.routes.currentPage}
      changePage={this.changeCurrentPage}
      logout={() => this.setLoginState(false)} />
  
  LoginScene = () =>
    <LoginScene login={this.setLoginState}/>

  render() {
    return this.state.auth.isLogin
      ? this.MainScene()
      : this.LoginScene();
  }
}

export default App;
