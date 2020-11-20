import React from 'react';


import AlertModal from '../../alert/AlertModal';
import Task from './Task';

export default class CompletedList extends React.Component {   
    state = {        
        showModal: false,
        name: "Are you sure you want to clear finished tasks?",        
        label: "Clear finished?"
    }
    todos = [];

    ButtonSwitch = () => {
        this.setState({ showModal: !this.state.showModal })
    }

    confirm(check) {
        if (check) {
            return <AlertModal     
                        label={this.state.label}                    
                        name={this.state.name} 
                        toConfirm={this.delAllTask}
                        Exit={this.ButtonSwitch} 
                    />;
        }            
    }

    selectTodo() {
        this.todos = [];
        this.props.tasks.map((task) => {
                if (task.isComplited) 
                    this.todos.push(task);
            }
            
        )
    }

    Info() {
        return (
                <div className="Inbox-Completed">
                    <label className="Inbox-Completed-Label">Completed</label>                
                    <button onClick={() => this.ButtonSwitch()} className="Incox-Completed-Delete-Button">Clear completed</button>
                </div>
        )
    }

    delAllTask = () => {
        this.props.DeleteTasksProps(this.todos);
    }

    render() {
        this.selectTodo();
        if (this.todos.length == 0) {            
            
            return (
                <div>
                    {this.Info()}
                    <p style={{color: "#404040"}}>No tasks</p>
                </div>            
            )
        }
        return (
            <div>              
                {this.Info()}                
                {this.confirm(this.state.showModal)}
                {this.todos.map(task => (
                    <Task 
                        key={task.id} 
                        task={task}                       
                        updateTodoProps={this.props.updateTodoProps}               
                        isDelete={this.state.isDelete} 
                        handleChangeProps={this.props.handleChangeProps} 
                        deleteTodoProps={this.props.delTodoProps}
                    /> 
                )
                )}
            </div>
        )
    }
}