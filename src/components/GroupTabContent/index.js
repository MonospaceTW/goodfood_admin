import React, { Component } from 'react';
import Title from '../Title/';
import TodoList from '../TodoList/';
import CreateTodo from '../CreateTodo/'
class GroupTabContent extends Component {

  constructor() {
    super();
  }

  createTodo = (newTodo) =>{
    this.props.createTodo(newTodo)
  }

  render() {
    return (
      <div>
        <Title todos={this.props.todos}/>
        <TodoList todos={this.props.todos}/>
        <CreateTodo createTodo={this.createTodo}/>
      </div>
    );
  }
}

export default GroupTabContent;
