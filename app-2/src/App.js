import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state={
      list: ['spaghetti', 'ice cream', 'sushi', 'bologna', 'cheese']
    }
  }

  render() {
    let displayList = this.state.list.map((e,i) => {
      return(
        <h2 key={ i }>{ e }</h2>
      )
    })
    return (
      <div className='App'>
      {displayList}
      </div>
    )
  }
}

export default App;
