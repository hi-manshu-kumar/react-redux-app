import React, {Component} from 'react';
import Todos from './todo';
import AddTodo from './AddTodo'

class Home extends Component {
    constructor(){
        super();
        this.state= {
            todos: [
                {id : 1, task : 'buy eggs', checked: false, date: new Date('1/1/2019')},
                {id : 2, task : 'go gym', checked:true, date: new Date('1/1/2019')}
            ]
        }
    }
    
    deleteTodo = (id) => {
        const todos = this.state.todos.filter(todo => {
            return todo.id !== id;
        })
        this.setState({
            todos
        })
    }

    toggleChecked = (id) => {
        const {todos} = this.state;
        todos[id].checked = todos[id].checked? false: true;

        this.setState({todos})
    }

    addTodo = (todo) => {
        let {todos} =  this.state;
        todo.id = todos.length+1;
        todo.checked = false;

        todos = [...todos ,todo];

        this.setState({todos})
    }

    render(){
        return(
            <div className="todo-app container">
                <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} toggleChecked={this.toggleChecked}/>
                <AddTodo addTodo={this.addTodo}/>
            </div>
        );
    }
};

export default Home;