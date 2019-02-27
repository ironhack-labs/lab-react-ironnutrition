import React,{Component} from 'react';

class Menu extends Component {
  constructor (props){
    super(props);

    this.state = {
      quantity : 1,
      actualItem : ''
    }
  }

  deleteItem = (e) => {
    this.setState({
      actualItem : e.currentTarget.dataset.item
    }, () =>  this.props.deleteFood(this.state.actualItem))
   

  }

  printMenu  = () => {
 
  return this.props.yourMenu.map((food,index) => 
      <li key={index}>
      {food.name}{' '}{food.quantity}
      <a data-item={food.name} className="button is-danger" onClick={this.deleteItem}>x</a>
      </li>)
  }

  printCalories = () => {
    return this.props.yourMenu.reduce((a, b) => ( a += (b.calories * b.quantity) ),0)
  }


  render(){
    return (

  <div>
    <h1>Your menu and calories</h1>
    <ul>{this.printMenu()}</ul>
    <h3>Total Calories : {this.printCalories()}</h3>
  </div>

);
}
}

export default Menu