import React from 'react';
import HomeScene from './components/HomeScene';
import UserManagerScene from './components/UserManagerScene';
import OrderListScene from './components/OrderListScene';


const MainScene = ({currentPage, ...props}) => {
  switch (currentPage) {
    case 'userManager':
      return <UserManagerScene {...props} />;
    case 'orderList':
      return <OrderListScene {...props} />;
    case 'home':
    default:
      return <HomeScene {...props} />
  }
};

export default MainScene;
