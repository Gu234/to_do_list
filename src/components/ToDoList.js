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
                tasks: [...this.state.tasks, [this.state.newTaskName, true,Date.now()]],
                newTaskName: '',
                TasksCounter: this.state.TasksCounter + 1
            })
    }

    toggleTask = date => {
        this.setState({
            tasks: this.state.tasks.map((e) => {
                if (date === e[2])
                    e[1] ? e[1] = false : e[1] = true
                return e
            })
        })
    }

    removeTask = date => this.setState({
        tasks: this.state.tasks.filter((e) => e[2] !== date)
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
            <div className='toDoList-tasktable'>{this.state.tasks.map((task) => <Task
                toggleTask={this.toggleTask}
                removeTask={this.removeTask}
                key={task[2]}
                id={task[2]}
                task={task[0]}></Task>)}</div>
            <div>Unfinnished tasks:{this.state.tasks.reduce((acc, item) => acc + item[1], 0)}</div>
            <button onClick={this.clearFinnishedTasks}>Clear Finnished Tasks</button>
        </>
    }
}
