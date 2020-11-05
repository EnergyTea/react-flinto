import React from 'react';

import more from '../../../icon/more-vertical.svg';
import './Task.css';

class Task extends React.Component {
    render() {
        return (
            <div className="Task">
                <input className="Task-Checkbox" type="checkbox" />
                <label for="checkbox"></label>
                <input className="Task-Name" value={this.props.task.name} />
                <img className="Task-Setting" src={more} alt="setting"/>
            </div>
        )
    }
} 

export default Task;