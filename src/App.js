import React from 'react';
import { NavLink }  from 'react-router-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import './App.css';
import logo from './icon/logo.svg';
import TodoNav from './components/navigation/TodoNav';
import Today from './components/product/today/Today';
import NewProject from './components/product/project/add_project/NewProject';
import Project from './components/product/project/Project';
import Inbox from './components/product/inbox/Inbox';


class App extends React.Component {
  state = {
    todos: [
      {
      // id: uuid.v4(),
      id: 1,
      projId: 2,
      name: "Setup development environment",
      isComplited: true,
      },
      {
      // id: uuid.v4(),
      id: 2,      
      projId: 2,
      name: "Develop website and add content",
      isComplited: false,
      },
      {
      // id: uuid.v4(),
      id: 3,      
      projId: 1,
      name: "Deploy to live server",
      isComplited: false,
      },
      {
        // id: uuid.v4(),
        id: 4,
        projId: 3,
        name: "Setup development environment",
        isComplited: true,
        },
        {
        // id: uuid.v4(),
        id: 5,      
        projId: 3,
        name: "Develop website and add content",
        isComplited: false,
        },
        {
        // id: uuid.v4(),
        id: 6,      
        projId: 3,
        name: "Deploy to live server",
        isComplited: false,
        },
      
  ],
  projects: [
    {
      // id: uuid.v4(),
      id: 1,
      name: "MyFirstProject",
      },
      {
      // id: uuid.v4(),
      id: 2,
      name: "MySecondProject",
      },
      {
      // id: uuid.v4(),
      id: 3,
      name: "MyLastProject",
      },
  ]
};

handleChange = (id) => {
  this.setState({
      todos: this.state.todos.map((todo) => {
      if (todo.id === id) {
          todo.isComplited = !todo.isComplited;
          console.log(todo);
      }
      return todo;
      }),
  });
};

delTodo = (id) => {
  this.setState({
    todos: [
      ...this.state.todos.filter((todo) => {
        return todo.id !== id;
      }),
    ],
  });
};

addTodoItem = (title, projId) => {
  const newTodo = {
    // id: uuid.v4(),
    id: this.state.todos.length+1,
    name: title,
    projId: projId,
    completed: false,
  };
  this.setState({
    todos: [...this.state.todos, newTodo],
  });
};

updateTodoName = (title, id) => {
    console.log(title, ' + ', id)
}

render() {
  return (
    <BrowserRouter>
      <header className="App-header">
        <NavLink exact to="/" className="App-logo">
          <img src={logo} alt="logo"/>
        </NavLink>
        <NavLink exact to="/today" className="App-button">
          <button className="App-button-add-task">Add new task</button> 
        </NavLink>   
      </header>
      <div className="App-body">
        <TodoNav projectsName={this.state.projects} />
        <div className="App-body-view">
          <Route exact path="/" render={(props) => <Inbox 
                state={this.state}                 
                addTodoProps={this.addTodoItem}
                handleChangeProps={this.handleChange}
                delTodoProps={this.delTodo} 
              />} />
          <Route path="/today" render={(props) => <Today 
                updateTodoProps={this.updateTodoName}
                addTodoProps={this.addTodoItem}
                state={this.state} 
                handleChangeProps={this.handleChange}                
                delTodoProps={this.delTodo}  
              />} />
          <Route exact path="/project" render={(props) => <NewProject 
                state={this.state} 
                handleChangeProps={this.handleChange} 
                delTodoProps={this.delTodo} 
              />} />
          <Route path="/project/:id" render={(props) => <Project 
                {...props}                
                addTodoProps={this.addTodoItem}
                state={this.state} 
                handleChangeProps={this.handleChange} 
                delTodoProps={this.delTodo} 
              />} />
        </div>
      </div>
    </BrowserRouter>
  );
}  
}

export default App;
