import React from 'react';

import './Inbox.css';
import TodoList from '../tasks/TodoList';
import CompletedList from '../tasks/CompletedList';


class Inbox extends React.Component {
    render() {
        return (
            <div className="Inbox">
                <p className="Inbox-Name">Inbox</p>    
                <TodoList />              
                <CompletedList />
            </div>
        )
    }
}


export default Inbox;