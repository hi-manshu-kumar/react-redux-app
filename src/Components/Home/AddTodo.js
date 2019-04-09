import React, {Component} from 'react';
import DateTimePicker from 'react-datetime-picker';

class AddTodo extends Component{

    state={
        task: '',
        date: new Date()
    }

    handleChange = (e) => {
        this.setState({
            task: e.target.value
        })
    }

    handleDateChange = (date) => {
        this.setState({
            date
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
            <div className="form-row">

            <div className="form-group col-md-6">
                <label htmlFor="addTodoinput"> Add new todo:</label>
                <input id="addTodoinput" type="text" onChange={this.handleChange} value={this.state.task} className="form-control"/>
            </div>
  
            <div>
                <label htmlFor="">Due date:</label> <br/>
            <DateTimePicker className="form-group col-md-6 my-1"
                            onChange={this.handleDateChange}
                            value={this.state.date}
                        />
            </div>
            </div>
                <button type="submit" onChange={this.handleDateChange} value={this.state.date} className="btn btn-primary">Submit</button>
                        
            </form>
        </div>
        )}
}

export default AddTodo;