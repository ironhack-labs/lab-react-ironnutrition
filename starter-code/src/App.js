import React, { Component } from "react";
import "./App.css";
import foods from "./foods.json";
import "bulma/css/bulma.css";
import Search from "./components/Search";
import FoodBox from "./components/FoodBox";
import Add from "./components/Add";
import Today from "./components/Today";

class App extends Component {
  constructor(props) {
     super(props);
    this.state = {
      allfood: JSON.parse(localStorage.getItem("data")),
      img: "",
      SearchValue: "",
      nameAdd: "",
      calAdd: "",
      list: [],
      canti : 1
    };
  }
  
cantidad = (e) => {
 this.setState({
   [e.target.name] : e.target.value,
    });

}

  handleSearch = (e) => {
    this.setState({
      SearchValue: e.target.value,
    });
    if (this.state.SearchValue.trim() === "") {
      this.setState({
        allfood: JSON.parse(localStorage.getItem("data")),
      });
    } else {
      this.setState({
        allfood: JSON.parse(localStorage.getItem("data")).filter(
          (pilot) =>
            pilot.name.toLowerCase().indexOf(e.target.value.toLowerCase()) > -1
        ),
      });
    }

    if (this.state.SearchValue.trim() === "reset") {
      this.setState({
        allfood: foods,
      });

      localStorage.setItem("data", JSON.stringify(foods));
    }
  };
  handleNEw = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  addToList = (valor) => {
  
 this.obj={
  name:valor.name,
  quantity: this.state.canti,
  calories: valor.calories

}

    this.setState({
      list: [...this.state.list, this.obj],
    });

  };
  handleaddFood = () => {
    let newObj = {
      name: this.state.nameAdd,
      calories: this.state.calAdd,
      image: this.state.img,
      quantity: 0,
    };

    var Values = [];

    //get olds values
    Values = JSON.parse(localStorage.getItem("data"));

    //push new value
    Values.push(newObj);

    //saved values
    localStorage.setItem("data", JSON.stringify(Values));
  };
  delete = (item) => {
    var array = [...JSON.parse(localStorage.getItem("data"))]; // make a new copy of array instead of mutating the same array directly.
    /* var index = array.indexOf(item); */
    array.splice(item, 1);
    localStorage.setItem("data", JSON.stringify(array));
    this.setState({ allfood: JSON.parse(localStorage.getItem("data")) });
  };

  render() {
    console.log(this.state.list);

    const { SearchValue, allfood, nameAdd, calAdd, list, canti } = this.state;

    return (
      <div className="root">
        <header className="header">Food Calculator</header>

        <div className="conte">
          <div className="foodlistdiv DivWithScroll  ">
            <div className="searchdiv">
              <span>Search Food</span>
              <Search onChange={this.handleSearch} value={SearchValue} />
            </div>
            {allfood.map((data, i) => {
              return (
                <FoodBox
                  key={i}
                  cantiChange={this.cantidad} 
                  onClickElement={() => this.addToList(data)}
                  value={data.canti}
                  onClick={() => this.delete(i)}
                  name={data.name}
                  cal={data.calories}
                  img={data.image}
                  cantidadmas={data.quantity}
                />
              );
            })}
          </div>
          <div className="foodlistdiv">
            <Add
              nameAdd={nameAdd}
              nameChange={this.handleNEw}
              calAdd={calAdd}
              onClick={this.handleaddFood}
            />

            <div className="column  content">
              <h2 className="subtitle">Today's foods</h2>
             
                 
                {list.map((data, i) => {
              return (
                <Today key={i} name={data.name} cal={data.calories} q={data.quantity} />
              );
            })}
            
             
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
