import React, { Component } from 'react'
import Todos from './components/todos';
import AddTodo from './components/addTodo';

class App extends Component {
  state = {
    todo:[]
  }

  addTodo = (content) =>{
    content.id = Math.random();
    const todo = [...this.state.todo, content]
    this.setState({ todo })
  }

  toDelete = (e) =>{
    const todo = this.state.todo.filter(t => t.content !== e)
    this.setState({ todo })
    
  }

  render() { 
    return (
      <div className="App">
        <header className="bg-primary p-3 text-white text-center">
          <h1 className="container">Mike's Todos :)</h1>
        </header>
        <main className="container text-center">
          <Todos todos={this.state.todo} toDelete={this.toDelete} />
          <AddTodo addTodo={this.addTodo} />
        </main>
      </div>
    );
  }
}
 
export default App;

