import React, {Component} from 'react';
import {Button, Table} from 'semantic-ui-react'

const OrderListScene = ({orderListData}) => {
  return(
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
        {
          orderListData.items.map((list, index) => {
            return (
              <Table.Row key={index}>
                <Table.Cell>{list.id}</Table.Cell>
                <Table.Cell>{list.restaurantName}</Table.Cell>
                <Table.Cell>{list.finishedAt}</Table.Cell>
                <Table.Cell>
                  <Button>Click Here</Button>
                </Table.Cell>
              </Table.Row>
            )
          })
        }
      </Table.Body>
    </Table>
  )
}

export default OrderListScene;
