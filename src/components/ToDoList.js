import React, { Component } from 'react';
import Task from './Task'

export default class extends Component {
    state = {
        newTaskName: '',
        tasks: [],
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    addTask = () => {
        if (this.state.newTaskName !== '')
            this.setState({
                tasks: [...this.state.tasks, [this.state.newTaskName, true]],
                newTaskName: '',
                TasksCounter: this.state.TasksCounter + 1
            })
    }

    toggleTask = index => {
        console.log('fe');

        this.setState({
            tasks: this.state.tasks.map((e, i) => {
                if (index === i)
                    e[1] ? e[1] = false : e[1] = true
                return e
            })
        })
    }

    removeTask = index => this.setState({
        tasks: this.state.tasks.filter((e, i) => i !== index)
    })

    clearFinnishedTasks = () => {
        this.setState({
            tasks: this.state.tasks.filter(i => i[1])
        })
    }

    render() {
        return <>
            <input
                name='newTaskName'
                value={this.state.newTaskName}
                placeholder='Add new task'
                type='text'
                onChange={this.handleChange}
            >

            </input>
            <button onClick={this.addTask}>+</button>
            <div className='toDoList-tasktable'>{this.state.tasks.map((name, key) => <Task
                toggleTask={this.toggleTask}
                removeTask={this.removeTask}
                key={key}
                id={key}
                name={name[0]}></Task>)}</div>
            <div>Unfinnished tasks:{this.state.tasks.reduce((acc, item) => acc + item[1], 0)}</div>
            <button onClick={this.clearFinnishedTasks}>Clear Finnished Tasks</button>
        </>
    }
}
