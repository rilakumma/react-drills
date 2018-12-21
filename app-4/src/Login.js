import React, { Component } from 'react';
import './App';

class Login extends Component {
    constructor(){
        super();
        this.state={
            username: '',
            password: ''
        }
        this.alertLogin = this.alertLogin.bind(this);
    }

    updateUsername(val){
        this.setState({ username: val })
    }

    updatePassword(val){
        this.setState({ password: val })
    }

    alertLogin(){
        alert(`Username: ${this.state.username} Password: ${ this.state.password }`)
    }

render(){
    return(
        
        <div>
        <input onChange={e=> this.updateUsername(e.target.value)}/>
        <input onChange={e=> this.updatePassword(e.target.value)}/>
        <button onClick={this.alertLogin}>Login</button>
        </div>
        
    )
    }
}

export default Login;