import React, { Component } from 'react';
import Title from './components/Title/'
import CreateTodo from './components/CreateTodo/'
import TodoList from './components/TodoList/'
import AllGroupsTabContent from './components/AllGroupsTabContent/'


class App extends Component {
  constructor(){
    super()

    let todos = [
      {
        text:'吃飯',
        groupId:'living'
      },
      {
        text:'睡覺',
        groupId:'work'
      },
      {
        text:'打東東',
        groupId:'family'
      }
    ];

    let groups = [
      { name: '全部', id: undefined },
      { name: '生活', id: 'living' },
      { name: '工作', id: 'work' },
      { name: '家庭', id: 'family' }
    ];

    this.state = {
      todos: todos,
      groups: groups,
      activeGroupId: undefined,
    }
  }

  createTodo = (newTodo) => {
    this.setState({
      todos:[...this.state.todos,newTodo]
    })
  }

  render() {
    let tabContent = <AllGroupsTabContent todos={this.state.todos} />
    return (
      <div className="App">
        {/* <Title todos={this.state.todos}/>
        <CreateTodo createTodo={this.createTodo}/>
        <TodoList todos={this.state.todos}/> */}
        <AllGroupsTabContent todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
