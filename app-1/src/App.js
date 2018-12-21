import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state={
      userInput: ''
    }
    this.changeInput = this.changeInput.bind(this);
  }

  changeInput(event){
    this.setState({ userInput:  event.target.value})
  }

  render() {
    return (
      <div className='App'>
      <input onChange={this.changeInput} type="text" /> 
      <p>{this.state.userInput}</p>
      </div>
    );
  }
}

export default App;
