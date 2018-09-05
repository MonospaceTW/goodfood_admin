import React from 'react';
import { Grid, Divider, Tab } from 'semantic-ui-react';

const {Column, Row} = Grid;

const OrderMenuItems = () =>
  <Grid as={Tab.panes}>
    <Row>
      <Column  width={8} textAlign='center'>菜名</Column>
      <Column  width={8} textAlign='center'>金額</Column>
    </Row>
    <Divider />
    <Row>
      <Column  width={8} textAlign='center'>生魚片定食</Column>
      <Column  width={8} textAlign='center'>$160</Column>
    </Row>
    <Row>
      <Column  width={8} textAlign='center'>秋刀魚定食</Column>
      <Column  width={8} textAlign='center'>$160</Column>
    </Row>
    <Row>
      <Column  width={8} textAlign='center'>鰻魚定食</Column>
      <Column  width={8} textAlign='center'>$160</Column>
    </Row>
  </Grid>

export default OrderMenuItems;
