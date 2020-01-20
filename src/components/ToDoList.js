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
        if (this.state.newTaskName === '') return;
        const newTask = {
            name: this.state.newTaskName,
            isDone: false,
            id: Date.now()
        };
        this.setState({
            tasks: [...this.state.tasks, newTask],
            newTaskName: '',
        })
    }

    toggleTask = id => {
        this.setState({
            tasks: this.state.tasks.map((task) => {
                if (id === task.id)
                    task.isDone = !task.isDone
                return task
            })
        })
    }

    removeTask = id => this.setState({
        tasks: this.state.tasks.filter((task) => task.id !== id)
    })

    clearDoneTasks = () => {
        this.setState({
            tasks: this.state.tasks.filter(task => !task.isDone)
        })
    }

    render() {
        return <div>
            <div className='line'>
                <input
                    className='toDoList-newTaskName'
                    name='newTaskName'
                    value={this.state.newTaskName}
                    placeholder='Add new task'
                    type='text'
                    onChange={this.handleChange}
                >

                </input>
                <button className='leftButtons' onClick={this.addTask}>+</button>
            </div>
            <div className='toDoList-tasks'>{this.state.tasks.map((task) => <Task
                toggleTask={this.toggleTask}
                removeTask={this.removeTask}
                key={task.id}
                id={task.id}
                task={task.name}></Task>)}</div>
            <div className='line'>
                <div>Tasks Left:{this.state.tasks.filter(task => !task.isDone).length}</div>
                <button onClick={this.clearDoneTasks}>Clear Completed Tasks</button>
            </div>
        </div>
    }
}
