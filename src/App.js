import React, {Component} from 'react';
import Header from './components/Header'
import Body from './components/Body'
import Counter from './components/Counter'
import ImageSlider from './components/ImageSlider'
import NewForm from './components/NewForm'
import FetchUser from './components/FetchUser'
import './App.css';

/**
 * Class Components
 * props
 * code spliting of components
 * export and import file
 * import {named Export method} from ''
 * we can use same name here
 * state
 * setState
 * 
 */

/* Class Components combines to become huge, render() is actually displayed by return which is in JSX */
class App extends Component {
  state = {
    visible: true,
    count: 0
  }
  multiply = (a, b) => a * b
  
  increment = () => {
    this.setState({
        count: this.state.count + 1
    })
  }

  decrement = () => {
      let dec = this.state.count - 1
      if(dec <= 0){
          dec = 0
      }
      this.setState({
          count: dec
      })
  }

  render(){
    const btnText = this.state.visible ? "hide": "show";
    let slider = this.state.visible ? <ImageSlider/> : "I am hidden"
    return (
      <div className="App">
          <Header
            myFunc={this.multiply} 
            title={"Hello from App"}
            num={7}
            myObj={{
              a:5,
              b:6
            }}
            myArr={[1,2,3]}
          />
          {slider}
          <button
            onClick={() => {
              this.setState(prevState => ({
                visible: !prevState.visible
              }))
            }}
          >
            {btnText}
          </button>
          <Body
            text="To get started, edit and save to reload."
            textSubject="I'm learning react using props after component"
          />
          <div style={this.state.visible ? {}: {display:"none"}}>
            <Counter
                count={this.state.count}
                decrement={this.decrement}
                increment={this.increment}
            />
          </div>
          <NewForm/>
          <FetchUser/>

      </div>
    );
  }
}

export default App;
