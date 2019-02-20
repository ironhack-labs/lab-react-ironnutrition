import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';

class App extends Component {
  constructor(props) {
    super(props);
    this.foods = foods;
    this.clickHandler = this.clickHandler.bind(this);
    this.addFood = this.addFood.bind(this);
    this.state = {
      newFormOn: false
    }
  }
  addFood(e) {

    this.foods.push({
      "name": e.target.name.value,
      "cal": e.target.cal.value,
      "img": e.target.img.value,
      "quantity": 0,
    })
    this.setState({
      newFormOn: false
    })
  }

  showFoods() {
    return foods.map((food, index) => 
    <FoodBox 
    key={index} 
    name={food.name} 
    cal={food.calories} 
    img={food.image}
    qty={food.qantity}
    />)
  }

  clickHandler() {
    this.setState({
      newFormOn: true
    })
  }

  render() {
    return (
      <div className="App">
        {!this.state.newFormOn && <button className="button is-primary" onClick={this.clickHandler}>Add new food</button>}
        {this.state.newFormOn && <NewForm addFood={(event)=>this.addFood(event)} />}
        {this.showFoods()}
      </div>
    );
  }
}

export class FoodBox extends Component {
  render() {
    return (
      <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={this.props.img} />
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{this.props.name}</strong> <br />
                <small>{this.props.cal}</small>
              </p>
            </div>
          </div>
          <div className="media-right">
            <div className="field has-addons">
              <div className="control">
                <input className="input" type="number" value={this.props.qty} />
              </div>
              <div className="control">
                <button className="button is-info">+</button>
              </div>
            </div>
          </div>
        </article>
      </div>
    );
  }
}

export class NewForm extends Component {

  render () {
  return (
    <form className="box" onSubmit={(event)=> this.props.addFood(event)}>
      <div className="field">
        <label className="label">Name</label>
          <div className="control">
            <input className="input" type="text" name="name" placeholder="Name your food"/>
          </div>
      </div>
      <div className="field">
        <label className="label">Calories</label>
        <div className="control">
          <input className="input" type="number" name="cal" placeholder="0" />
        </div>
      </div>
      <div className="field">
        <label className="label">Image Path</label>
        <div className="control">
          <input className="input" type="url" name="img" placeholder="Path to image" />
        </div>
      </div>
      <button className="button is-primary" type="submit" >Submit</button>
    </form>
  )
  }
}

export default App;
