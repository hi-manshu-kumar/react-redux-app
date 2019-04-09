import React from 'react';

const Todos = ({todos, deleteTodo, toggleChecked}) => {

    const todoList = todos.length ? (
      todos.map(todo => {
        return (
            <div className="list-group-item" key={todo.id} >
                <span >
                    <input 
                        type="checkbox" 
                        checked={todo.checked} 
                        className="form-check-input mx-1" 
                        onChange={() => toggleChecked(todo.id-1)
                    }/>
                    {todo.checked ? 
                        <s className="mx-4">{todo.task}</s>
                        : 
                        <span className="mx-4">{todo.task}</span>
                    }
                    &nbsp; 
                    <i className="far fa-trash-alt text-danger float-right deleteIcon" onClick={() => deleteTodo(todo.id)}></i>
                </span>
            </div>
        )
        })
    ) : (
        <p className="text-center text-danger list-group-item">No todos left, create a new one</p>
    );
  
    return (
      <div className="todos collection">
        {todoList}
      </div>
    )
}
  

export default Todos;