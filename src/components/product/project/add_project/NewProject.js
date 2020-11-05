import React from 'react';

class NewProject extends React.Component {
    render() {
        return (
            <div>
                <input />
                <label>ToDo</label>
                <button>Clear not completed</button>
                <p>No tasks</p>
                <label>Completed</label>                
                <button>Clear completed</button>               
                <p>No tasks</p>
            </div>
        )
    }
}

export default NewProject;