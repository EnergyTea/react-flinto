import React from 'react';

import './AddTask.css';
import more from '../../../icon/more-vertical.svg';

class AddTask extends React.Component {      
    state = {
        name: "",
        projId: this.props.projId
      };
      onChange = e => {
        this.setState({
          [e.target.name]: e.target.value,
          [e.target.projId]: this.projId
        });
      };
    
      handleSubmit = e => {
        e.preventDefault();
        this.props.addTaskProps(this.state.name, this.state.projId);
        this.setState({
            name: ""
        });
      };
    render() {
      this.state.projId = this.props.projId;
      return (
          <form onSubmit={this.handleSubmit} className="Add-Task" >
              <input 
                  className="Task-Checkbox" 
                  type="checkbox"
              />
              <label for="checkbox"></label>
              <input 
                  className="Add-Task-Input"
                  placeholder="Enter something"
                  value={this.state.name}
                  name="name"
                  onChange={this.onChange}
              />
              <img className="Task-Setting" src={more} alt="setting"/>        
          </form> 
      )
    };
}

export default AddTask;