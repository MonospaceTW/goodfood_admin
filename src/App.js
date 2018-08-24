import React, { Component } from 'react';
import LoginScene from './components/LoginScene';
import MainScene from './MainScene';
import {fetchPOST,fetchGET} from './apis/libs/fetch';
import 'semantic-ui-css/semantic.min.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      auth: {
        isLogin: false,
        message: ''
      },
      routes: {
        currentPage: 'Home'
      },
      orderListData:{
        items:'',
        paging:''
      }
    };
  }

  componentDidMount(){
    this.getOrderList()
  }

  setOrderListData = (updatedOrderListData) =>{
    this.setState({
      orderListData:{
        items:updatedOrderListData.items,
        paging:updatedOrderListData.paging
      }
    })
  }
  getOrderList = async () => {
    const {success,result} = await fetchGET('/groups')

    const updatedData = {items: result.data.items,paging: result.data.paging}

    this.setOrderListData(updatedData)
  }

  setLoginState = (updatedAuthData) =>
    this.setState({auth: {...this.state.auth, ...updatedAuthData}});

  changeCurrentPage = (currentPage) =>
    this.setState({routes: {currentPage}});

  handleLogin = async (payload) => {
    const {success} = await fetchPOST('/login', payload);

    const updatedData = success ? {isLogin: true} : {message: '登入失敗'};

    this.setLoginState(updatedData);
  }

  MainScene = () =>
    <MainScene
      currentPage={this.state.routes.currentPage}
      changePage={this.changeCurrentPage}
      logout={() => this.setLoginState(false)} />

  LoginScene = () =>
    <LoginScene handleLogin={this.handleLogin}/>

  render() {
    return this.state.auth.isLogin
      ? this.MainScene()
      : this.LoginScene();
  }
}

export default App;
