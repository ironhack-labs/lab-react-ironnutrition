import React, { Component } from "react";
import "./App.css";
import foods from "./foods.json";
import { Header } from "./components/Header";
import Modal from "./components/Modal";
import FoodList from "./components/FoodList";
import TdayFood from "./components/TdayFood";

class App extends Component {
  constructor() {
    super();
    this.state = {
      foodArr: foods,
      tDayList: []
    };
  }

  handleAdd(newFood) {
    this.state.foodArr.push(newFood);
    this.setState({ foodArr: this.state.foodArr });
  }

  handleAddToList(todayListItem) {
    let index = this.state.tDayList.findIndex(
      p => p.name === todayListItem.name
    );
  
    if (index < 0) {
      this.state.tDayList.push(todayListItem);
      this.setState({ tDayList: this.state.tDayList });

    } else {
      let todayList = this.state.tDayList;
      
      let calPrev = todayList[index].calories;
      let calNew = todayListItem.calories;
      let qtyPrev = todayList[index].quantity;
      let qtyNew = todayListItem.quantity;

      todayList[index] = {
        name: todayListItem.name,
        calories : calPrev + calNew,
        quantity : parseInt(qtyPrev) + parseInt(qtyNew)
      }

      this.setState({tDayList : todayList})
    }

  }

  render() {
    return (
      <div className="App">
        <Header />
        <Modal add={newFood => this.handleAdd(newFood)} />
        <div className="section">
          <div className="columns">
            <FoodList
              foodArr={this.state.foodArr}
              foodDetail={todayListItem => this.handleAddToList(todayListItem)}
            />
            <TdayFood foodList={this.state.tDayList} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
