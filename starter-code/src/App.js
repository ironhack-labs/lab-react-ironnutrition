import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json'

class App extends Component {

  createContent = () => {
    const arrFood =[]
    for(let i=0; i<foods.length;i++){
      console.log(foods[i])
      //arrFood.push(<tr>{`Column ${i + 1}`}</tr> )
      arrFood.push(
      <div className="box">
        <tr>
          <td><img src={foods[i].image} alt="food-pic"/></td>
          <td>{foods[i].name}</td>
          <td>{foods[i].calories} cal</td>
          <td>
            <div className="media-right">
              <div className="field has-addons">
                <div className="control">
                  <input className="input" type="number" value="1"/>
                </div>
                <div className="control">
                  <button className="button is-info">+</button>
                </div>
              </div>
            </div>
          </td>
        </tr> 
      </div>)}
    return arrFood
  }
  
  constructor(){
    super()

    const arrFood =[]
    for(let i=0; i<foods.length;i++){
      arrFood.push({...foods[i]})
    }

    this.state={
        arrFood
    }
   console.log(this.state.arrFood)
}
  
  
  render() {
    return (
      <div class="father">
        <h1 class="title">IronNutrition</h1>
        <input class="input" type="text" placeholder="Search"/><br/>
        <table>
          {this.createContent()}
        </table> <br/>
        <p class="control">
          <a class="button is-link" onClick="new">Create new food</a>
        </p>
      </div>
    );
  }
}

export default App;
