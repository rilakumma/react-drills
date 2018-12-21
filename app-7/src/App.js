import React, { Component } from 'react';
import './App.css';
import NewTask from './NewTask';

class App extends Component {
  constructor(){
    super();
    this.state={
      taskList: [],
    }
    this.addTask = this.addTask.bind(this);
  }
  addTask(task){
    this.setState({ taskList: [...this.state.taskList, task]});
  }
  render() {
    return (
      <div className="App">
      <h1>My To-do List:</h1>
      <NewTask add={this.addTask} />
       
      </div>
    );
  }
}

export default App;
