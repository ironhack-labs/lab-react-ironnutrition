import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FoodBox from './components/FoodBox';
import foods from './foods.json'
import Search from './components/Search';

class App extends Component {
 constructor(props){
   super(props);

   this.state={
     inputValue: ""
   }
   
  }
   handleEvent(event){
     const {value} = event.target
     this.setState({inputValue:value})
    }

  render() {
    return (
      <div className="App">


        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>

        <section>
          <Search handleEvent={event => this.handleEvent(event)} inputValue={this.state.inputValue}/>
        </section>


        <section className="elements">
          {foods.map((oneFood, index)=> {
            // if condition
           return (oneFood.name.toLowerCase().includes(this.state.inputValue.toLowerCase()) &&
            <FoodBox oneFood={ oneFood }/>)
          })}
        </section>
      </div>
    );
  }
}

export default App;
