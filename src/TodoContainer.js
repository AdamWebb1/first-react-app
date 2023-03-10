import React from "react"
import { v4 as uuidv4 } from "uuid"

import TodosList from "./TodosList"
import Header from "./Header"
import InputTodo from "./InputTodo"

import "./App.css"


class TodoContainer extends React.Component {

    state = {
        todos: [
            {
                id: uuidv4(),
                title: "Setup development environment",
                completed: false
            },
            {
                id: uuidv4(),
                title: "Develop website and add content",
                completed: false
            },
            {
                id: uuidv4(),
                title: "Deploy to live server",
                completed: false
            }
        ]
       };

    handleChange = (id) => {
        this.setState({
            todos: this.state.todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed
                }
                return todo
            })
        })
    }

    delTodo = (id) => {
        this.setState({
            todos: this.state.todos.filter(todo => {
                return todo.id !== id;
            })
        })
    }

    addTodoItem = title =>{
        const newTodo = {
            id: uuidv4(),
            title: title,
            completed: false
        }

        this.setState({
            todos: [...this.state.todos, newTodo]
        })
    }

    setUpdate = (updatedTitle, id) => {
        this.setState({
            todos: this.state.todos.map(todo => {
                if (todo.id === id){
                    todo.title = updatedTitle
                }
                return todo
            })
        })
    }

    render() {
        return (
            <div className = "container">
                <div className = "inner">
                    <Header 
                        titleProp={"Todos"}
                    />
                    <InputTodo 
                        addTodoProps={this.addTodoItem}
                    />
                    <TodosList 
                        todos={this.state.todos} 
                        handleChangeProps={this.handleChange}
                        delTodoProps={this.delTodo}
                        setUpdate={this.setUpdate}
                    />
                </div>
            </div>
        );
    }
}
export default TodoContainer