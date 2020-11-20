import React from 'react';

import './Inbox.css';
import TodoList from '../tasks/TodoList';
import CompletedList from '../tasks/CompletedList';


class Inbox extends React.Component {
    render() {
        return (
            <div className="Inbox">
                <p className="Inbox-Name">Inbox</p>    
                <TodoList                   
                    add={this.props.state.add}   
                    addTaskProps={this.props.addTodoProps}                    
                    DeleteTasksProps={this.props.DeleteTasksProps}
                    tasks={this.props.state.todos}                     
                    updateTodoProps={this.props.updateTodoProps}
                    handleChangeProps={this.props.handleChangeProps}
                    delTodoProps={this.props.delTodoProps}  
                />
                <CompletedList 
                    tasks={this.props.state.todos}                        
                    DeleteTasksProps={this.props.DeleteTasksProps}                
                    updateTodoProps={this.props.updateTodoProps}  
                    handleChangeProps={this.props.handleChangeProps} 
                    delTodoProps={this.props.delTodoProps}
                />
            </div>
        )
    }
}


export default Inbox;