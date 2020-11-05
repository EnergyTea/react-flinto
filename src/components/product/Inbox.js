import React from 'react';

import './Inbox.css';
import Task from './tasks/Task';
import TASKS from '../Store/TasksReducer';


class Inbox extends React.Component {
    render() {
        return (
            <div>
                <p className="Inbox-label">Inbox</p>
                <label>ToDo</label>
                <button>Clear not completed</button>
                {
                    TASKS.map(function(task) {
                        return <Task key={task.id} task={task} />                        
                    })
                }
                <label>Completed</label>                
                <button>Clear completed</button>
                {
                    TASKS.map(function(task) {
                        return <Task key={task.id} task={task} />                        
                    })
                }
            </div>
        )
    }
}


export default Inbox;