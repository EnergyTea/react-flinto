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


function App() {
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
          <Route exact path="/" component={Inbox} />
          <Route path="/today" component={Today} />
          <Route exact path="/project" component={NewProject} />
          <Route path="/project/:id" component={Project} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
