import React from 'react'

export default class Todo extends React.Component {

  render() {
    return(
      <li className={this.props.todo.complete ? "check" : ""}
            >
          {this.props.todo.text}
          <button onClick={() => this.props.removeHandler(this.props.todo.id)}>
            Remove
          </button>
          <button onClick={() => this.props.toggleHandler(this.props.todo)}>
            Complete?
          </button>
      </li>
    )
  }
}
