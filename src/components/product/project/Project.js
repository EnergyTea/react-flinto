import React from 'react';

import TodoList from '../tasks/TodoList';
import CompletedList from '../tasks/CompletedList';

class Project extends React.Component {
    render() {
        const projId = this.props.match.params.id;
        let project;

        function filterBy(date, filed, value) {
            return date.filter(item => item[filed] == value);
        }

        for (var i=0; i<this.props.state.projects.length; i++) {
            if (this.props.state.projects[i].id == projId) {
                project = this.props.state.projects[i];             
                break;
            }            
        }
        if (project == undefined) {
            return <h2>no project</h2>;
        }
        else {
            const tasks = filterBy(this.props.state.todos, 'projId', projId)
            return (
            <div>                
                <h1>{project.name}</h1>
                <TodoList
                    addInProj={projId}
                    addTaskProps={this.props.addTodoProps}
                    updateTodoProps={this.props.updateTodoProps}
                    tasks={tasks} 
                    handleChangeProps={this.props.handleChangeProps}
                    delTodoProps={this.props.delTodoProps}   />
                <CompletedList
                    updateTodoName={this.props.updateTodoName}
                    tasks={tasks} 
                    handleChangeProps={this.props.handleChangeProps} 
                    delTodoProps={this.props.delTodoProps} />
            </div>
            );
        }
    }
}

export default Project;