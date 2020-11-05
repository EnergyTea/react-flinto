import React from 'react';

import TASKS from '../../store/TasksReducer';
import Task from './Task';

export default function TodoList() {
    return (
        <div>
            <div className="Inbox-Todo">
                <label className="Inbox-Todo-Label">ToDo</label>
                <button className="Incox-Todo-Delete-Button">Clear not completed</button>
            </div>
            <div className="Inbox-Todo-Tasks">
                {
                    TASKS.map(function(task) {
                        return <Task task={task} />                        
                    })
                }
            </div>  
        </div>
    )
}