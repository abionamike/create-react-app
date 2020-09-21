import React from 'react'

const Todos = ({ todos, toDelete }) => {

    const handleDelete = (e) =>{
        toDelete(e.target.innerText)
    }

    return (
        todos.length === 0 ? (
            <div className="todos m-3">
                <h4 className="mb-3">You have no todo's left, yayy! :)</h4>
            </div>
        ) : 
        (
            <div className="todos m-3">
                {todos.map(todo => <h4 className="mb-3" key={todo.id} onClick={handleDelete}>{todo.content}</h4>)}
            </div>
        )
        
    );
}
 
export default Todos;
