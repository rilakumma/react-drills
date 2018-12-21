import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state={
      userInput: '',
      groceryList: ['spaghetti', 'ice cream', 'sushi', 'bologna', 'cheese']
    }
  }

  updateInput(val){
    this.setState({ userInput: val  })
  }

  render() {
    const {userInput} = this.state;

    let displayList = this.state.groceryList.filter(e=> e.includes(this.state.userInput)).map((e,i)=> {
    return (
      <h2 key={i}>{e} </h2> 
            ) 
    } );

    return (
      <div className='App'>
        <input onChange={e=> this.updateInput(e.target.value)} />
        {displayList}
      </div>
    );
  }
}

export default App;
