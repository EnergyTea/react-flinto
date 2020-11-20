import React from 'react';

import './Today.css';
import TodoList from '../tasks/TodoList';
import CompletedList from '../tasks/CompletedList';

class Today extends React.Component {
    render() {
        return (
            <div>
                <p className="Today-label">Today</p>              
                <TodoList                             
                    add={this.props.state.add} 
                    DeleteTasksProps={this.props.DeleteTasksProps}  
                    addTaskProps={this.props.addTodoProps}
                    updateTodoProps={this.props.updateTodoProps}
                    tasks={this.props.state.todos} 
                    handleChangeProps={this.props.handleChangeProps}
                    delTodoProps={this.props.delTodoProps}  
                />
                <CompletedList  
                    DeleteTasksProps={this.props.DeleteTasksProps}                
                    updateTodoProps={this.props.updateTodoProps}  
                    tasks={this.props.state.todos} 
                    handleChangeProps={this.props.handleChangeProps} 
                    delTodoProps={this.props.delTodoProps}
                />
            </div>
        )
    }
}


export default Today;