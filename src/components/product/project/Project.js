import React from 'react';

import TodoList from '../tasks/TodoList';
import CompletedList from '../tasks/CompletedList';
import PROJECTS from '../../store/PROJECTS';

class Project extends React.Component {
    render() {
        const projId = this.props.match.params.id;
        let project;
        for (var i=0; i<PROJECTS.length; i++) {
            if (PROJECTS[i].id == projId) {
                project = PROJECTS[i];              
                break;
            }            
        }
        if (project == undefined) {
            return <h2>no project</h2>;
        }
        else {
            return (
            <div>                
                <h1>{project.name}</h1>
                <TodoList tasks="123" />
                <CompletedList />
            </div>
            );
        }
    }
}

export default Project;