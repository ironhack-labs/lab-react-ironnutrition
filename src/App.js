import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import AddFood from './components/Addfood';

export default class App extends Component{

  state = {
    foods:[...foods],

    showForm: false,
    search=''
}
showForm =() =>{
  this.setState({this.state.showForm: true})

};
onAddFoodSubmit =(food) =>{
  this.setState((old) => ({foods: [{...food, id: uuidv4(),quantity: 0}, ...old.foods]})) 
  this.setState({this.state.showForm: false})
}

render() {
  return (
    <button className="button is-info" onClick={this.showForm}>
    +
</button>
{
  this.state.showForm && <AddFood  onSubmit={this.onAddFoodSubmit} />
}
{
    this.state.foods.map((food)=>(
      <div key={food.name}>
        <FoodBox {...food}/>
      </div>
    ))
  }
    )
}
 
}
    
   


