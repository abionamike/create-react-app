import React, { Component } from 'react'

class AddTodo extends Component {
    state = {
        content: ''
    }

    handleTodo = (e) =>{
        this.setState({content : e.target.value});
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        this.props.addTodo(this.state);
        this.setState({content : ''});
    }

    render() { 
        return (
            <form className="add-todo" onSubmit={this.handleSubmit} >
                <label htmlFor="Todo">Add a todo...</label>
                
                <input type="text" onChange={this.handleTodo} value={this.state.content} />
                
            </form>
            
        );
    }
}
 
export default AddTodo;