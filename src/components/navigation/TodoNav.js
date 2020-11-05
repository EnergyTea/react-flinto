import './TodoNav.css';
import { NavLink }  from 'react-router-dom';


function TodoNav() {
    return (
        <div className="Todo-Nav">
            <label className="Todo-Nav-Label">All</label>
            <nav className="Todo-Nav-All">
                <NavLink exact to="/" className="Todo-Nav-Elem" activeClassName="Todo-Nav-Elem.activ">Inbox</NavLink>
                <NavLink exact to="/today" className="Todo-Nav-Elem">Today</NavLink>
            </nav>
            <label className="Todo-Nav-Label">Projects</label>
            <p>.map Названия PROJECT</p>
            <NavLink exact to="/project">
                <button>Add new project</button>
            </NavLink>
        </div>

    )
}

export default TodoNav;