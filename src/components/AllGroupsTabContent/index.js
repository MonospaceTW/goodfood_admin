import React, { Component } from 'react';
import Title from '../Title/';
import TodoList from '../TodoList/';

class AllGroupsTabContent extends Component {

  constructor() {
    super();
  }


  render() {
    return (
      <div>
        <Title todos={this.props.todos}/>
        <TodoList todos={this.props.todos}/>
      </div>
    );
  }
}

export default AllGroupsTabContent;
