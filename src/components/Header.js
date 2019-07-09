import React, {Component} from 'react';
import logo from '../logo.svg';

/* You can make another component, it can be rendered in other component */
export default class Header extends Component {
    render(){
      return (
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">{this.props.title}</h1>
            <div>
              <p>Object: {JSON.stringify(this.props.myObj)}</p>
              <p>Array: {this.props.myArr}</p>
              <p>Function: {this.props.myFunc(10,12)}</p>  
            </div>
          </header>
      )
    }
  }