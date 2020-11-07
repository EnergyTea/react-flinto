import { NavLink }  from 'react-router-dom';

import './todo-nav.css';
import PROJECTS from '../store/PROJECTS';


function TodoNav() {
    return (
        <div className="Todo-Nav">
            <label className="Todo-Nav-Label">All</label>
            <nav className="Todo-Nav-Up">
                <NavLink exact to="/" className="Todo-Nav-Elem" activeClassName="Todo-Nav-Elem-active">Inbox</NavLink>
                <NavLink exact to="/today" className="Todo-Nav-Elem" activeClassName="Todo-Nav-Elem-active">Today</NavLink>
            </nav>
            <label className="Todo-Nav-Label">Projects</label>
            <nav className="Todo-Nav-Up">
            {
                PROJECTS.map(function(proj) {
                    return  <NavLink exact to={'/project/'+proj.id} className="Todo-Nav-Elem" activeClassName="Todo-Nav-Elem-active">{proj.name}</NavLink>          
                })
            }
            </nav>            
            <NavLink exact to="/project">
                <button className="Todo-Nav-Add-Proj">Add new project</button>
            </NavLink>     
        </div>

    )
}

export default TodoNav;