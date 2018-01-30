import React from 'react'

export default class TodoForm extends React.Component {

  submitTodo(e) {
    e.preventDefault()
    let todo = this.refs.input.value
    if (todo === '') {
      return
    } else {
      this.props.addHandler(todo)
      this.refs.input.value = ''
    }
  }

  render() {
    return(
      <div className="checkbox">
        <form onSubmit={this.submitTodo.bind(this)}>
          <input type="text" ref="input"/>
            <button>
              Add Todo
            </button>
        </form>
      </div>
    )
  }
}
