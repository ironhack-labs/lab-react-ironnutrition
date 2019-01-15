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

  getData(newobj){
    this.state.foods.push(newobj)
    this.setState({foods:this.state.foods,newmeal:!this.state.newmeal})
  }
  render() {
    return (
      <div>
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
          <div width="50%">
            <h3>Today's foods</h3>
            <ul>
              {this.state.foods.map((e, i) =>
                e.quantity ? <List key={i} food={e} /> : null
              )}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
