import React, { Component } from 'react';

export default class extends Component {

    render() {
        return <div className='line'>
            <div>
                <input onChange={() => this.props.toggleTask(this.props.id)}
                    type="checkbox"
                />
                <span>{this.props.task}</span>
            </div>
            <button
                className='leftButtons'
                onClick={() => this.props.removeTask(this.props.id)}>x</button>
        </div>
    }
}