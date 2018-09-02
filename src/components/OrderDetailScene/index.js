import React from 'react';
import RestaurantMenuItems from './RestaurantMenuItems';
import OrderMenuItems from './OrderMenuItems';
import { Segment, Header, Tab } from 'semantic-ui-react';

const panes = [
  { menuItem: '餐廳菜單', render: () => <OrderMenuItems /> },
  { menuItem: '訂單明細', render: () => <RestaurantMenuItems /> }
]

const OrderDetailScene = () =>
  <Segment basic>
    <Header as='h1'>甲揪團</Header>
    <Header as='p'>揪團時間: 10:00 - 20:00</Header>
    <Header as='h2'>揪團餐廳: A餐廳</Header>
    <Header as='h2'>營業時間: 10:00 - 22:00</Header>
    <Header as='h2'>電話: (04)22223456</Header>
    <Tab menu={{ secondary: true }} panes={panes} />
  </Segment>

export default OrderDetailScene;
