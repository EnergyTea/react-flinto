import React from 'react';

import Task from '../tasks/Task';
import TASKS from '../../store/TasksReducer';

class Today extends React.Component {
    render() {
        return (
            <div>
                <label className="Today-label">Today</label>
                {
                    TASKS.map(function(task) {
                        return <Task key={task.id} task={task} />                        
                    })
                }
            </div>
        )
    }
}


export default Today;