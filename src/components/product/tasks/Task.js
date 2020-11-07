import React from 'react';

import more from '../../../icon/more-vertical.svg';
import './Task.css';

class Task extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: props.task.name}       
    }

    render() {
        return (
            <div className="Task">
                <input 
                    className="Task-Checkbox" 
                    type="checkbox"
                    onChange={ () => this.props.handleChangeProps(this.props.task.id) }
                    checked={this.props.task.isComplited}
                />
                <label for="checkbox"></label>
                <input  type="text" className="Task-Name" value={this.state.value} onChange={ () => this.props.updateTodoProps(this.state.value, this.props.task.id)}/>
                    <button onClick={() => this.props.deleteTodoProps(this.props.task.id)}></button>
                <img className="Task-Setting" src={more} alt="setting"/>        
            </div> 
        )
    }
}

export default Task;