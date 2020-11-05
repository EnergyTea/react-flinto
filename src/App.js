import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import './App.css';
import logo from './logo.svg';
import Navigation from './components/navigation/TodoNav';
import Inbox from './components/product/Inbox';
import Today from './components/product/today';
import Iproject from './components/product/Iproject';
import NewProject from './components/product/project/NewProject';
import Project from './components/product/project/Project';


function App() {
  return (
    <BrowserRouter>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <button className="App-button">Add new task</button>    
      </header>
      <div className="App-body">
        <Navigation /> 
        <Route exact path="/" component={Inbox} />
        <Route path="/today" component={Today} />
        <Route exact path="/project" component={NewProject} />
        <Route path="/project/:id" component={Project} />
      </div>
    </BrowserRouter>
  );
}

export default App;
