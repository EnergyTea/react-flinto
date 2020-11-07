import React from 'react';
import AddTask from './AddTask';

import Task from './Task';

export default class TodoList extends React.Component {
    todos = [];
    selectTodo() {
        this.todos = [];
        this.props.tasks.map((task) => {
                if (!task.isComplited) 
                    this.todos.push(task);
            }
            
        )
    }

    render() {
        this.selectTodo();
        return (
            <div>
                <div className="Inbox-Todo">
                    <label className="Inbox-Todo-Label">ToDo</label>
                    <button className="Incox-Todo-Delete-Button">Clear not completed</button>
                </div>
                <div className="Inbox-Todo-Tasks">
                    
                    <AddTask addTaskProps={this.props.addTaskProps} />  
                    {this.todos.map(task => (
                        <Task 
                            key={task.id} 
                            task={task} 
                            updateTodoProps={this.props.updateTodoProps}
                            handleChangeProps={this.props.handleChangeProps}
                            deleteTodoProps={this.props.delTodoProps} 
                        /> 
                    )
                    )}
                </div>  
            </div>
        )
    }    
}