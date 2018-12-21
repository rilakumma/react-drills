import React, { Component } from 'react';
import './App.css';
import Todo from './Todo';

class App extends Component {
  constructor(){
    super();
    this.state={
      newTask: '',
      taskList: []
    }
    this.updateTask = this.updateTask.bind(this);
  }

  updateTask(val){
    this.setState({ newTask: val })
  }

  addTask(){
    this.setState({ 
      newTask: '',
      taskList: [...this.state.taskList, this.state.newTask]
     })
  }

  render() {
    let taskList = this.state.taskList.map( (e,i) => {
      return (
        <Todo key={ i } task={ e } />
      )
    })

    return (
      <div className="App">
      <h1>My to-do list: </h1>
      <div>
        <input value={this.state.newTask} placeholder="Enter new task" onChange={e=> this.updateTask(e.target.value)} />
        <button onClick={e => this.addTask(e.target.value)}>Add</button>
        </div>
        <br />
        { taskList }
      </div>
    );
  }
}

export default App;
