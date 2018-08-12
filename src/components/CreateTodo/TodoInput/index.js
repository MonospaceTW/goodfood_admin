import React, { Component } from 'react';

class TodoInput extends Component {
  
  render() {
    return (
      <input
        type="text"
        onChange={this.props.updateInputText}
      />
    );
  }
}

export default TodoInput;
