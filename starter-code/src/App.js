import React, { Component } from "react";

import "./App.css";
import "bulma/css/bulma.css";
import food from "./foods.json";
import Food from './components/Food';
import Detail from "./components/Detail";


class App extends Component {


  state = {
    foodArray: food
  }


  render() {
    console.log(this.state.foodArray)
    return (
    <div className="App">
      
        <div>
        <input  id="search-bar" class="input" type="text" placeholder="Text input" />
        </div>

      <div class="columns">
          
          <div className="column">
            {
              this.state.foodArray.map((e, i) => {
                return <Food key={i} info={e}  />
              })
            }
          </div>

          <div className="column">
              <Detail/>
          </div>
      </div>

    </div>
    );
  }
}

export default App;
