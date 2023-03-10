import React, { Component } from "react";

const validInput = new RegExp("[a-zA-Z0-9._:!@#$%^&*()]")

class InputTodo extends Component {

    state ={
        title: ""
    }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    
    handleSubmit = e =>{
        e.preventDefault();
        if (this.state.title.trim()) {
            if (validInput.test(this.state.title)){
                this.props.addTodoProps(this.state.title)
                this.setState({
                    title: "",
                })
            } else {
                alert("Invalid characters used")
            }
        } else {
            alert("Cannot input blank field")
        }
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} className="form-container">
                <input 
                    type="text" 
                    placeholder="Add Todo..." 
                    value={this.state.title} 
                    name="title"
                    onChange={this.onChange}
                />
                <button className="input-submit">Submit</button>
            </form>
        )
    }
}

export default InputTodo