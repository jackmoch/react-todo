import React from 'react';
import TodoForm from './todoForm'
import TodoList from './todoList'
import myTodos from '../db/todos.js'

export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      todos: myTodos,
      idTracker: 2
    }
  }

  addTodo(text) {
    let todo = {text: text, id: this.state.idTracker, complete: false}
    let newTodos = this.state.todos.concat(todo)
    let currentId = this.state.idTracker

    this.setState({
      todos: newTodos,
      idTracker: ++currentId
    })
  }

  removeTodo(id) {
    console.log(id)
    let newTodos = this.state.todos.filter((todo) => todo.id !== id)

    this.setState({
      ...this.state,
      todos: newTodos
    })
  }

  toggleComplete ({id, complete, text}) {
    let newTodos = this.state.todos.map(function(todo) {
      return todo.id === id ? {...todo, complete: !todo.complete} : todo
    })

    this.setState({
      ...this.state,
      todos: newTodos
    })
  }

  render() {
    return(
      <div>
        <TodoList todos={this.state.todos}
                  removeHandler={this.removeTodo.bind(this)}
                  toggleHandler={this.toggleComplete.bind(this)}
                  />
        <TodoForm addHandler={this.addTodo.bind(this)} />
      </div>
    )
  }
}
