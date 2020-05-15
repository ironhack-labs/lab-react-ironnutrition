import React ,{Component}from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox/FoodBox'
import FormNewFood from './components/FormNewFood/FormNewFood'
import Button from './components/Button/Button'
import Search from './components/Search/Search'
import Cart from './components/Cart/Cart'

class App extends Component{
  state ={
    foods:foods,
    allFoods:foods,
    showFormsNewFood:false,
    cart:[]
  }

  addFood = newFood =>{
    this.state.foods.unshift(newFood)
    this.setState({
      foods:this.state.foods,
      allFoods:this.state.foods,
      showFormsNewFood:false
    })
  }
  showFormNewFood = evt =>{
    this.setState({
      showFormsNewFood:true
    })
  }

  findFood = evt=>{
    const foodName = evt.target.value
    const showFood = []
    for(let foods of this.state.allFoods){
      if(foods.name.includes(foodName))
        showFood.push(foods)
    }

    this.setState({
      foods:showFood,
    })
  }

  addItems = newItem=>{
    const cart = this.state.cart
    let found=false
    for(let i=0;i<cart.length;i++){
      if(cart[i].name===newItem.name){
        found=true
        cart[i].quantity +=newItem.quantity
        break
      }
    }
    if(!found)
      cart.push(newItem)

    this.setState({cart:cart})
  }

  removeItem = idx=>{
    this.state.cart.splice(idx,1)
    this.setState({cart:this.state.cart})
  }

  render(){
    const foodsComponents = this.state.foods.map((food) =>{
      return (<FoodBox food={food} addItems={this.addItems}/>)
    })
    return (
      <div className="App">
      <h1 className="title is-1">Iron Nutrion</h1>
          <Search name='search' type='search' placeholder='Find Food' onChange={this.findFood}></Search>
          <Button method={this.showFormNewFood} className='button is-info'>Add New Food</Button>
          { this.state.showFormsNewFood ? <FormNewFood addFood={this.addFood}/>: null} 
          <div className='principal'>
            <div className='foods'>
              {foodsComponents}
            </div>
            <Cart cart={this.state.cart} removeItem={this.removeItem}/>
          </div>
      </div>
    );
  }
}

export default App;
