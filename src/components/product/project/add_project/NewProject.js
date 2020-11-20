import React from 'react';
import { withRouter } from 'react-router-dom';

import './NewProject.css';
import CompletedList from '../../tasks/CompletedList';
import TodoList from '../../tasks/TodoList';

class NewProject extends React.Component {
    state = {
        name: "",
      };
      onChange = e => {
        this.setState({
          [e.target.name]: e.target.value
        });
      };
    
      handleSubmit = e => {
        e.preventDefault();
        this.props.addProjectProps(this.state.name);
        this.setState({
            name: ""
        });
      };
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit} className="Add-Project" >    
                    <input 
                        className="Add-Project-Input"
                        placeholder="Enter name"
                        value={this.state.name}
                        name="name"
                        onChange={this.onChange}
                    />      
                </form> 
                <TodoList
                    addTaskProps={this.props.addTodoProps}
                    updateTodoProps={this.props.updateTodoProps}
                    tasks={[]} 
                    handleChangeProps={this.props.handleChangeProps}
                    delTodoProps={this.props.delTodoProps}  
                />
                <CompletedList 
                    updateTodoName={this.props.updateTodoName}
                    tasks={[]} 
                    handleChangeProps={this.props.handleChangeProps} 
                    delTodoProps={this.props.delTodoProps}
                />
            </div>
        )
    }
}

export default NewProject;