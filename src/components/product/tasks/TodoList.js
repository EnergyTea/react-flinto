import React from 'react';
import AlertModal from '../../alert/AlertModal';
import AddTask from './AddTask';

import Task from './Task';

export default class TodoList extends React.Component {
    state = {        
        showAdd: false,
        showModal: false,
        label: "Clear not finished?",
        name: "Are you sure you want to clear not finished tasks?"
    }
    todos = [];     
    selectTodo() {        
        this.todos = [];
        this.props.tasks.map((task) => {
                if (!task.isComplited) 
                    this.todos.push(task);
            }
            
        )
    }

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

    infoTodo() {
        return(
            <div className="Inbox-Todo">
                    <label className="Inbox-Todo-Label">ToDo</label>
                    <button onClick={() => this.ButtonSwitch()} className="Incox-Todo-Delete-Button">Clear not completed</button>
            </div>
        )
    }

    delAllTask = () => {
        this.props.DeleteTasksProps(this.todos);
    }

    addTask(check) {
        if (check) {
            return <AddTask 
                        addTaskProps={this.props.addTaskProps}  
                        projId={this.props.projId}/>  
        }
    }

    render() {     
        this.selectTodo();

console.log(this.props.add)
        if (this.todos.length == 0) {            
            
            return (
                <div>
                    {this.infoTodo()}
                    <p style={{color: "#404040"}}>No tasks</p>
                </div>            
            )
        }
        return (
            <div>                
                <div className="Inbox-Todo-Tasks">                    
                    {this.infoTodo()}
                    {this.confirm(this.state.showModal)}
                    {this.addTask(this.props.add)}
                    {this.todos.reverse().map(task => (
                        <Task 
                            key={task.id} 
                            task={task}
                            isDelete={this.state.isDelete}
                            updateTodoProps={this.props.updateTodoProps}
                            handleChangeProps={this.props.handleChangeProps}
                            deleteTodoProps={this.props.delTodoProps} 
                        /> 
                    )
                    )}
                </div>  
            </div>
        )
    }    
}