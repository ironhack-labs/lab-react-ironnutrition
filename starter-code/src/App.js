import React, { Component } from "react";
import foods from "./foods.json";
import "./App.css";
import { FoodBox } from "./components/FoodBox.js";
import { List } from "./components/List.js";
import { Form } from "./components/Form.js";

class App extends Component {
  constructor() {
    super();
    this.state = { foods,newmeal:false,search:""};
  }

  numberHandle(i, op) {
    if (op === "sum") {
      this.state.foods[i].quantity += 1;
    }
    if (op === "res" && this.state.foods[i].quantity > 0) {
      this.state.foods[i].quantity -= 1;
    }
    this.setState({ foods: this.state.foods });
  }
  
  filter(e){
    this.setState({search:e.target.value,foods:foods.filter(el=>el.name.includes(e.target.value))})

  }

  totalCal(){
    let sum=0
    this.state.foods.forEach(e=>{
      e.quantity>0 ? sum+=e.quantity*e.calories:null
    })
    return sum
  }

  getData(newobj){
    const {name,calories,image}=newobj
    if(name,calories,image==""){return}
    this.state.foods.push(newobj)
    this.setState({foods:this.state.foods,newmeal:!this.state.newmeal})
  }
  render() {
    return (
      <div className="container">
        <input
          className="input is-rounded"
          type="text"
          placeholder="Search"
          value={this.state.search}
          onChange={(e)=>this.filter(e)}
        />
      <div>
        <button className="button" onClick={()=>{this.setState({newmeal:!this.state.newmeal})}}>New Meal</button>
        {this.state.newmeal ? <Form submit={this}/>:null}
      </div>
        <div className="display">
          <div width="50%">
            {this.state.foods.map((e, i) => (
              <FoodBox
                key={i}
                food={e}
                action={{
                  sum: () => this.numberHandle(i, "sum"),
                  res: () => this.numberHandle(i, "res")
                }}
                ctx={this}
              />
            ))}
          </div>
          <div className="content"width="50%">
            <h2 className="is-large" >Today's foods</h2>
            <ul>
              {this.state.foods.map((e, i) =>
                e.quantity ? <List key={i} food={e} /> : null
              )}
              <h3>Total: {this.totalCal()} Cal</h3>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
