import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import foods from "./foods.json";
import "bulma/css/bulma.css";
import Ejemplo1 from "./components/Ejemplo1";
import Search from './components/Search'
import FoodBox from "./components/FoodBox";
import Add from './components/Add'
class App extends Component {

  state = {
    allfood: foods,
    SearchValue: ""
  }
  handleSearch = (e) => {


    this.setState({
      SearchValue: e.target.value
    })
    if (this.state.SearchValue.trim() == "") {
      this.setState({
        allfood: foods
      })

    } else {

      this.setState({
        allfood: foods.filter((pilot) => pilot.name.indexOf(e.target.value) > -1)
      })


    }



  }

  render() {

    const { SearchValue, allfood } = this.state
    return (


      < div className="root" >

        <Add />
        <div className="container">
          <div className="column">
            <Search onChange={this.handleSearch} value={SearchValue} />


            {allfood.map((data, i) => {
              return (
                <FoodBox key={i} name={data.name} cal={data.calories} img={data.image} />

              )

            })}


          </div>
        </div>

      </div >

    );
  }
}

export default App;
