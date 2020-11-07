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
      name: "Setup development environment",
      isComplited: true,
      },
      {
      // id: uuid.v4(),
      id: 2,
      name: "Develop website and add content",
      isComplited: false,
      },
      {
      // id: uuid.v4(),
      id: 3,
      name: "Deploy to live server",
      isComplited: false,
      },
  ],
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

addTodoItem = (title) => {
  const newTodo = {
    // id: uuid.v4(),
    id: this.state.todos.length+1,
    name: title,
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
        <TodoNav />
        <div className="App-body-view">
          <Route exact path="/" render={(props) => <Inbox 
                state={this.state} 
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
