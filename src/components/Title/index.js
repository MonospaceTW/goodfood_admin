import React, { Component } from 'react';

class Title extends Component {
  render() {
    return (
      <div>
        代辦清單 ({this.props.todos.length})
      </div>
    );
  }
}

export default Title;
