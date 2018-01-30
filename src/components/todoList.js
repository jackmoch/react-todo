import React from 'react'
import Todo from './singleTodo'

export default class TodoList extends React.Component {

  listElements() {
    let elements = this.props.todos.map((todo) =>
      <Todo todo={todo} key={todo.id} removeHandler={this.props.removeHandler} toggleHandler={this.props.toggleHandler} />)
    return elements
  }

  render() {
    return (
      <div className="checkbox">
        <div>
          <ul>
            {this.listElements()}
          </ul>
        </div>
      </div>
    )
  }
}
