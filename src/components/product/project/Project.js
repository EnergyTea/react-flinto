import React from 'react';

import PROJECTS from '../../Store/ProjectReducer';

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
                <h5>{project.id}</h5>
            </div>
            );
        }
    }
}

export default Project;