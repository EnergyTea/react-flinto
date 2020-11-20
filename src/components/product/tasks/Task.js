import React from 'react';

import more from '../../../icon/more-vertical.svg';
import './Task.css';

class Task extends React.Component {
    constructor(props) {
        super(props);
        this.state = {name: props.task.name};
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this); 
    }
    state = {      
        showSetting: false
    }

    ButtonSwitch = () => {
        this.setState({ showSetting: !this.state.showSetting })
    }

    delTask = () => {
        this.props.deleteTodoProps(this.props.task.id);
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.updateTodoProps(this.state.name, this.props.task.id);
    }
    
    handleEmailChange(event) {
        this.setState({name: event.target.value})
    }

    setting(check) {
        if (check) {
            return (
                <div className="Task-Settings">
                    <p onClick={this.delTask} className="Task-Settings-Delete">delete</p>
                    <p className="Task-Settings-Add">add to project</p>
                </div>
            )
        }
    }

    render() {      
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="Task" >
                        <input 
                            className="Task-Checkbox" 
                            type="checkbox"
                            onChange={ () => this.props.handleChangeProps(this.props.task.id) }
                            checked={this.props.task.isComplited}
                        />
                        <label for="checkbox"></label>
                        <input  type="text" className="Task-Name" value={this.state.name} onChange={this.handleEmailChange}/>
                        {this.setting(this.state.showSetting)}
                        <img className="Task-Setting" onClick={this.ButtonSwitch} src={more} alt="setting"/>
                    
                </div> 
            </form>   
        )
    }
}

export default Task;