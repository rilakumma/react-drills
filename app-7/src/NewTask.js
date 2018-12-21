import React, {Component} from 'react';

class NewTask extends Component {
    constructor(){
        super();
        this.state={
            userInput: ''
        }
        this.updateInput = this.updateInput.bind(this);
    }

    updateInput(event){
        this.setState({ userInput: event.target.value })
    }

    handleTask(){
        this.props.add(this.state.userInput)
        this.setState({ userInput:'' });
    }
    render(){
        
        return (
            <div>
                <input value={this.state.userInput} placeholder="Enter new task" onChange={this.state.userInput} />
                <button onClick={this.handleTask}>Add</button>
            </div>
        )
    }
} 
export default NewTask;