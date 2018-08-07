import React, { Component } from 'react';
import CreateTodoButton from './CreateTodoButton/'
import TodoInput from './TodoInput/'
class CreateTodo extends Component {
  constructor(){
    super()
    this.state = {
      inputText: ''
    }
  }

  createTodo = () =>{
    if(this.state.inputText){
      this.props.createTodo(this.state.inputText)
      this.setState({
        inputText: ''
      })
    }
  }

  updateInputText = (event) => {
    this.setState({
        inputText: event.target.value
    })
  }

  render() {
    return (
      <div>
        <TodoInput updateInputText={this.updateInputText}/>
        <CreateTodoButton createTodo={this.createTodo}/>
      </div>
    );
  }
}

export default CreateTodo;
