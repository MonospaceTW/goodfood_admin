import React from 'react';
import { Grid, Divider, Tab, Button, Modal, Select, Input } from 'semantic-ui-react';

const {Column, Row} = Grid;

const foodOptions = [
  {text: '炒飯', value: 'firerice', key: 'firerice'},
  {text: '炒麵', value: 'firenoodle', key: 'firenoodle'},
];

const userOptions = [
  {text: 'tomas', value: 'tomas', key: 'tomas'},
  {text: 'simon', value: 'simon', key: 'simon'},
];
class RestaurantMenuItems extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showCreateOrderModal: false
    };
  }

  showCreateOrderModal = () => this.setState({showCreateOrderModal: true});

  closeCreateOrderModal = () => this.setState({showCreateOrderModal: false});

  render() {
    return (
      <Tab.Pane>
        <Modal open={this.state.showCreateOrderModal}>
          <Modal.Content>
            <Grid>
              <Row>
                <Column width={5} textAlign='center'>訂購者</Column>
                <Column  width={6} textAlign='center'>菜名</Column>
                <Column  width={5} textAlign='center'>金額</Column>
              </Row>
              <Row>
                <Column width={5} textAlign='center'><Select options={userOptions} value='tomas'/></Column>
                <Column  width={6} textAlign='center'><Select options={foodOptions} value='firerice'/></Column>
                <Column  width={5} textAlign='center'><Input /></Column>
              </Row>
            </Grid>
          </Modal.Content>
          <Modal.Actions>
            <Button primary>新增</Button>
            <Button color='red' onClick={this.closeCreateOrderModal}>取消</Button>
          </Modal.Actions>
        </Modal>
        <Grid>
        <Row>
          <Column width={5} textAlign='center'>訂購者</Column>
          <Column  width={6} textAlign='center'>菜名</Column>
          <Column  width={5} textAlign='center'>金額</Column>
        </Row>
        <Divider />
        <Row>
          <Column  width={5} textAlign='center'>Mike</Column>
          <Column  width={6} textAlign='center'>生魚片定食</Column>
          <Column  width={5} textAlign='center'>$160</Column>
        </Row>
        <Row>
          <Column  width={5} textAlign='center'>Annie</Column>
          <Column  width={6} textAlign='center'>秋刀魚定食</Column>
          <Column  width={5} textAlign='center'>$160</Column>
        </Row>
        <Row>
          <Column  width={5} textAlign='center'>Judy</Column>
          <Column  width={6} textAlign='center'>鰻魚定食</Column>
          <Column  width={5} textAlign='center'>$160</Column>
        </Row>
        <Row>
          <Column  width={10}>
            <Button onClick={this.showCreateOrderModal}>新增訂單</Button>
          </Column>
          <Column  width={2} textAlign='center'>Total</Column>
          <Column  width={4} textAlign='center'>$1234</Column>
        </Row>
        </Grid>
      </Tab.Pane>
    );
  }
}

export default RestaurantMenuItems;
