import React, { Component } from 'react';
import './App.css';
import Todo from './Todo.js'

class App extends Component {
  constructor() {
    super()

    this.state = {
      todos: []
    }
    this.todoInput = ""
  }

  addTodo() {
    let todoValue = this.todoInput.value

    let newTodos = this.state.todos
    newTodos.push(todoValue)

    this.setState({
      todos: newTodos
    })

    //Reset value in todoInput
    this.todoInput.value = ""
    //Set focus to todoInput
    this.todoInput.focus()
  }

  removeTodo(id) {
    let todos = this.state.todos.filter((todo, index) => {
      return id !== index
    })

    this.setState({
      todos: todos
    })
  }

  render() {
    return (
      <div class="main-container">
        <div class="header">
          <h1> React ToDo </h1>
        </div>

        <input type="text" class="input" placeholder="Enter todo" ref= {(input) => this.todoInput = input}/>
        <button onClick={this.addTodo.bind(this)}>Add</button>

        <p>Todos count: {this.state.todos.length}</p>
        <ul>
          { this.state.todos.map( (todo, index) => {
            return (<Todo class="li" id={index} key={index} todo={todo} onRemove={() => this.removeTodo(index)}/>)
          }) }
        </ul>
      </div>
    );
  }
}

export default App;
