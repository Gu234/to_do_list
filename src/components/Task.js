import React, { Component } from 'react';

export default class extends Component {

    render() {
        return <div>
            <input onChange={() => this.props.toggleTask(this.props.id)}
                type="checkbox"
            />
            <span>{this.props.name}</span>
            <button onClick={() => this.props.removeTask(this.props.id)}>x</button>
        </div>
    }
}