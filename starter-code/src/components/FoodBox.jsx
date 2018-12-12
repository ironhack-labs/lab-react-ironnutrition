import React, {Component} from 'react';
import foods from '../foods.json';
import Food from './Food';
import 'bulma/css/bulma.css'
import Form from './Form'

class FoodBox extends Component{

state={
  showForm:false,
  promo:{},
  food:foods,
  items: {},
}
toggleForm = () => {
  let { showForm } = this.state;
    showForm = !showForm;
    this.setState({ showForm });
  };
  onChange = e => {
    const value = e.target.value;
    const field = e.target.name;
    const { promo } = this.state;
    promo[field] = value;
    this.setState({ promo });
  };
  handleSubmit = e => {
    e.preventDefault();
    const { food, promo } = this.state;
    promo.id = promo.name;
    food.unshift(promo);
    this.setState({ food });
  };
  buscar = e=>{
    const searc = e.target.value;
    var updatedList = this.state.food;
    updatedList = updatedList.filter(function(item){
      return item.name.toLowerCase().search(
       searc.toLowerCase())!==-1  

    })
    this.setState({items:updatedList})
   
  }
  componentWillMount = function(){ 
  this.setState({items: this.state.food})}

render(){
  const {items, showForm} = this.state;

  return(<div>
    <button onClick={this.toggleForm}> 
    {showForm ? "Cancelar" : "Agrea una Comida"}
  
  {showForm && <Form onChange={this.onChange} handleSubmit = {this.handleSubmit}/>}
     </button>
    <input type='text' onChange={this.buscar} placeholder= 'buscador'/> 
    {items.map((items,key)=><Food key={key} {...items}/>)}

    </div>
  )
}
}




export default FoodBox 