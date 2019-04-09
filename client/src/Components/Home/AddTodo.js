import React, {Component} from 'react';

class AddTodo extends Component{

    state={
        task: ''
    }

    handleChange = (e) => {
        this.setState({
            task: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state);
        this.setState({
            task: ''
        })
    }

    render(){
        return (
        <div className="container my-4">
            <form action="" onSubmit={this.handleSubmit}>
            <div className="form-group">
                <label htmlFor="addTodoinput"> Add new todo:</label>
                <input id="addTodoinput" type="text" onChange={this.handleChange} value={this.state.task} className="form-control"/>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
        )}
}

export default AddTodo;