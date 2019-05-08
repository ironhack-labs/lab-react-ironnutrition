import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import FoodBox from './components/FoodBox';
import foods from './foods.json';

class App extends Component {
  constructor() {
    super();
    this.state = {
      foodList: foods,
      name: '',
      calories: 0,
      image: '',
      quantity: 0,
    }
    this.addName = this.addName.bind(this);
    this.addCal = this.addCal.bind(this);
    this.addImg = this.addImg.bind(this);
    this.addQtd = this.addQtd.bind(this);
  }

  addName(e) {
    this.setState({
      name: e.target.value
    });
  }
  addCal(e) {
    this.setState({
      calories: e.target.value
    });
  }
  addImg(e) {
    this.setState({
      image: e.target.value
    });
  }
  addQtd(e) {
    this.setState({
      quantity: e.target.value
    });
  }


  render() {

    return (
      <div className="app-master">
          <form className="form" onSubmit={this.submit}>
            <label>Name</label>
            <input type="text" name="name" value={this.state.name} onChange={(e) => this.addName(e)} />
            <label>Calories</label>
            <input type="text" name="calories" value={this.state.calories} onChange={(e) => this.addCal(e)} />
            <label>Image</label>
            <input type="text" name="image" value={this.state.image} onChange={(e) => this.addImg(e)} />
            <label>Quantity</label>
            <input type="text" name="quantity" value={this.state.quantity} onChange={(e) => this.addQtd(e)} />
            <button type="submit">Submit</button>
          </form>

        {
          this.state.foodList.map((food, idx) => {
            return <FoodBox food={ food } key={ idx } />
          }) 
        }
      </div>
    );
  }
}

export default App;
