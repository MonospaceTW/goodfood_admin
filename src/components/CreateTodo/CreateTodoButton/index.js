import React, { Component } from 'react';

class CreateTodoButton extends Component {

  render() {
    return (
        <input type='button' value='新增代辦事項' onClick={this.props.createTodo}/>
    );
  }
}

export default CreateTodoButton;
