import React from 'react';
import './foodBox.css';
import 'bulma/css/bulma.css';
import foods from '../../foods.json';
import AddFoodForm from '../addfoodform/addFoodForm';

export default class FoodBox extends React.Component {
  constructor(props){
    super()
    this.state = {
      foodList: foods,
      isFormVisible: false,
      searchInput: ''
    }
  }

  seeForm = () => {
    this.setState({
      foodList: foods,
      isFormVisible: true
    })
  }

  formHandler = () => {
    this.setState({

    })
  }

  addNewFood = (props) => {
    const copyFoodList = this.state.foodList;
    copyFoodList.push(props);
    this.setState({
      foodList:copyFoodList,
      isFormVisible: false,
    })
  }

  render() {

    const foodList = this.state.foodList.map((food, index) => {
    return (
        <div className="box" key={index}>
  <article className="media">
    <div className="media-left">
      <figure className="image is-64x64">
        <img src={food.image} />
      </figure>
    </div>
    <div className="media-content">
      <div className="content">
        <p>
          <strong>{food.name}</strong> <br />
          <small>{food.calories}</small>
        </p>
      </div>
    </div>
    <div className="media-right">
      <div className="field has-addons">
        <div className="control">
          <input className="input" type="number" defaultValue={food.quantity} />
        </div>
        <div className="control">
          <button className="button is-info">
            +
          </button>
        </div>
      </div>
    </div>
  </article>
</div>
    )
  })
  if(this.state.isFormVisible === true) {
    return (
      <div>
      {foodList}
        <button onClick={() => this.seeForm()}>Add New Food</button>
        <AddFoodForm addNewFood={() => this.addNewFood}/>
      </div>
    )
  } else {
    return (
      <div>
      {foodList}
        <button onClick={() => this.seeForm()}>Add New Food</button>
      </div>
    )
  }
}}