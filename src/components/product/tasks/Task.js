import { render } from '@testing-library/react';
import React from 'react';

class Task extends React.Component {
    render() {
        return (
            <div>
                <input type="checkbox" />
                <input value={this.props.task.name} />
            </div>
        )
    }
} 

export default Task;