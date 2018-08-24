import React, {Component} from 'react';
import {Icon, Label, Menu, Table} from 'semantic-ui-react'

// const OrderListScene = () =>{
//   <Table celled>
//     <Table.Header>
//       <Table.Row>
//         <Table.HeaderCell>揪團名稱</Table.HeaderCell>
//         <Table.HeaderCell>餐廳名稱</Table.HeaderCell>
//         <Table.HeaderCell>揪團時間</Table.HeaderCell>
//         <Table.HeaderCell></Table.HeaderCell>
//       </Table.Row>
//     </Table.Header>
//
//     <Table.Body>
//       <Table.Row>
//         <Table.Cell></Table.Cell>
//         <Table.Cell>Cell</Table.Cell>
//         <Table.Cell>Cell</Table.Cell>
//         <Table.Cell>Cell</Table.Cell>
//       </Table.Row>
//     </Table.Body>
//   </Table>
// }
class OrderListScene extends Component {

  // constructor(props){
  //   super(props)
  //
  //   this.state = {
  //
  //   }
  // }

  render() {
    return (
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>揪團名稱</Table.HeaderCell>
            <Table.HeaderCell>餐廳名稱</Table.HeaderCell>
            <Table.HeaderCell>揪團時間</Table.HeaderCell>
            <Table.HeaderCell></Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.Cell></Table.Cell>
            <Table.Cell>Cell</Table.Cell>
            <Table.Cell>Cell</Table.Cell>
            <Table.Cell>Cell</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    );
  }
}

export default OrderListScene;
