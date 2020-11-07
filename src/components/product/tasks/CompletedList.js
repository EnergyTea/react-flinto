import React from 'react';

import TASKS from '../../store/TASKS';
import Task from './Task';

export default class CompletedList extends React.Component {   
    todos = [];
    selectTodo() {
        this.todos = [];
        this.props.tasks.map((task) => {
                if (task.isComplited) 
                    this.todos.push(task);
            }
            
        )
    }

    render() {
        this.selectTodo();
        return (
            <div>
                <div className="Inbox-Completed">
                    <label className="Inbox-Completed-Label">Completed</label>                
                    <button className="Incox-Completed-Delete-Button">Clear completed</button>
                </div>
                {this.todos.map(task => (
                    <Task 
                        key={task.id} 
                        task={task} 
                        handleChangeProps={this.props.handleChangeProps} 
                        deleteTodoProps={this.props.delTodoProps}
                    /> 
                )
                )}
            </div>
        )
    }
}