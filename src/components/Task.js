import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faCheck } from '@fortawesome/free-solid-svg-icons'

export default class extends Component {

    render() {
        return <div className='line'>
            <div className='line-rightSide'>
                <button onClick={() => this.props.toggleTask(this.props.id)}
                    className='smallButton'>
                    {this.props.isDone && <FontAwesomeIcon size='xs' icon={faCheck} />}
                </button>
                <div className='taskName'>{this.props.task}</div>
            </div>
            <button
                className='smallButton'
                onClick={() => this.props.removeTask(this.props.id)}>
                <FontAwesomeIcon size='xs' icon={faTimes} />
            </button>
        </div>
    }
}