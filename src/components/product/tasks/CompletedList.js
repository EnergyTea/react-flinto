import React from 'react';

import TASKS from '../../store/TasksReducer';
import Task from './Task';

export default function CompletedList() {   
    return (
        <div>
            <div className="Inbox-Completed">
                <label className="Inbox-Completed-Label">Completed</label>                
                <button className="Incox-Completed-Delete-Button">Clear completed</button>
            </div>
            {
                TASKS.map(function(task) {
                    return <Task key={task.key} task={task} />                        
                })
            } 
        </div>
    )
}