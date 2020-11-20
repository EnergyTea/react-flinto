import React from 'react';

import './Project.css';
import TodoList from '../tasks/TodoList';
import CompletedList from '../tasks/CompletedList';
import edit from '../../../icon/edit-proj.svg';
import del from '../../../icon/delete-proj.svg';
import AlertModal from '../../alert/AlertModal';

class Project extends React.Component {
    constructor(props) {
        super(props);
        this.state = {name: this.props.state.projects[this.props.match.params.id-1].name};
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this); 
    }

    state = {      
        editName: false,  
        showModal: false,
    }



    delButtonSwitch = () => {
        this.setState({ showModal: !this.state.showModal })
    }

    EditSwitch = () => {
        this.setState({ editName: !this.state.editName })
    }                       


    confirm(check) {
        if (check) {
            return <AlertModal 
                        label="Delete project ?"
                        name="Are you sure you want to delete this project?"
                        toConfirm={this.delProject}
                        Exit={this.delButtonSwitch}
                    />;
        }            
    }

    delProject = () => {
        this.props.delProjectProps(this.props.match.params.id);
        this.delButtonSwitch();        
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.updateProjectName(this.state.name, this.props.match.params.id);
        this.EditSwitch();
    }
    
    handleEmailChange(event) {
        this.setState({name: event.target.value})
    }

    ViewName(check) {
        if (check) {
            return  (
                <form onSubmit={this.handleSubmit}>
                    <input type="text" className="Project-Main-Name-Input" value={this.state.name} onChange={this.handleEmailChange}/>
                </form>
            )
        } else {
            this.state.name =  this.props.state.projects[this.props.match.params.id-1].name;
            return <p className="Project-Main-Name">{this.state.name}</p>
        }
    }

    render() {
        const projId = this.props.match.params.id;
        let project = this.props.state.projects[projId-1];
        function filterBy(date, filed, value) {
            return date.filter(item => item[filed] == value);
        }

        if (project == undefined) {
            return <h2>no project</h2>;
        }
        else {
            const tasks = filterBy(this.props.state.todos, 'projId', projId)
            return (
            <div>
                <div className="Project-Main">  
                    {this.ViewName(this.state.editName)} 
                    <img className="Project-Main-Edit" onClick={this.EditSwitch} src={edit}/>                     
                    {this.confirm(this.state.showModal)}             
                    <img onClick={this.delButtonSwitch} src={del} />
                </div>
                <TodoList
                    projId={projId}
                    add={this.props.state.add}                  
                    DeleteTasksProps={this.props.DeleteTasksProps}
                    addTaskProps={this.props.addTodoProps}
                    updateTodoProps={this.props.updateTodoProps}
                    tasks={tasks} 
                    handleChangeProps={this.props.handleChangeProps}
                    delTodoProps={this.props.delTodoProps}   />
                <CompletedList                    
                    DeleteTasksProps={this.props.DeleteTasksProps}
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