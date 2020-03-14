import React, { Component } from 'react';
import foods from './foods.json'
import FoodBox from './components/foodBox/FoodBox'
import Navbar from './components/navbar/Navbar'
import AddFoodForm from './components/foodBox/AddNewFood'
import TodaysFoods from './components/todaysFoods/TodaysFoods'

import './App.css';

const  foodsConst = foods.map((food, i) => {
  return {
    ...food,
    id: i + 1,
    cal: 0
  }
})
class App extends Component {
  state = {
    foodsConst,
    foods: [...foodsConst],
    newItem: {id: '', name: '', calories: '', image: '', quantity: 0, cal: 0 },
    itemsList:[],
    totalCalories: 0
  }
  //-=-==-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-==-=
  addNewItem = (e) =>{
    e.preventDefault()
    let { foods,foodsConst, newItem} = this.state
    const input = document.querySelectorAll('.input-form')
    if(!newItem.name || !newItem.calories || !newItem.image){
      input.forEach(i => i.classList.add('input-color'))
      return
    }
    newItem['id']= foodsConst.length + 1
    this.setState({newItem})
    const updatedFoodsConst = [...foodsConst, newItem]
    const updatedFoods = [...foods, newItem]
    this.setState({ foodsConst: updatedFoodsConst ,foods: updatedFoods })
    this.setState({ newItem: { name: '', calories: '', quantity: 0, cal: 0 } })

    input.forEach(i => {
      // eslint-disable-next-line
      i.value ? i.value = i.defaultValue: ''
      i.classList.remove('input-color')
    })
  }
  //-=-==-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-==-=
  updateStateNewItem = (e) =>{
  const { name, value } = e.target;
  const { newItem } =this.state
  document.querySelectorAll('.input-form')[1].type = 'number'
  if(name === 'image'){
      console.log("foods", foods)
      const input =document.getElementById("image-file");
      var fReader = new FileReader()
      fReader.readAsDataURL(input.files[0])
      fReader.onloadend = function(e){
        newItem[name] =  `${e.target.result}`
      }
  }
  newItem[name] = value
  this.setState({ newItem})
  }

  //-=-==-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-==-=
  clearBlur = (e) =>{
    const form = document.getElementById('main-form').classList
    if (form.contains('show') ){
      form.remove('show')
      form.add('hide')
      document.querySelectorAll('.media').forEach(elem=> {
        elem.classList.toggle('blur')
        elem.classList.toggle('clear-blur')
      })
    }
    
  }
  //-=-==-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-==-=
  searchItems = (e) =>{
    const { value }= e.target
    const { foodsConst } = this.state
    
    const searchItems = foodsConst.filter(food => food.name.toUpperCase().includes(value.toUpperCase()))
    this.setState({ foods: searchItems})
  }
  //-=-==-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-==-=
  addToIngredientList = (e) => {
    const {id, parentElement} = e.target
    const { foodsConst, itemsList, totalCalories } = this.state
    const quantity = parentElement.previousElementSibling.children[0].value
 
    const theItem = [...foodsConst].filter(food => food.id.toString() === id.toString())[0]
    const checkItem = itemsList.filter(item => item.id.toString() === id.toString())
    const isItem = checkItem.length > 0? true: false
    console.log("isItem", isItem)

    if(!isItem ){
      theItem.quantity = Number(quantity)
      const newCalories = Number(quantity)* Number(theItem.calories)
      theItem.cal = newCalories
        this.setState({ itemsList: [...itemsList, theItem]})
        this.setState({ totalCalories: totalCalories + newCalories})
    }
    if(isItem){
      checkItem[0].quantity += Number(quantity)
      const newCalories = Number(quantity)* Number(checkItem[0].calories)
      checkItem[0].cal += newCalories
        this.setState({ itemsList})
        this.setState({ totalCalories: totalCalories + newCalories})
    }
  }
  //-=-==-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-==-=
  removeIngredient = e =>{
    let {id} = e.target.closest('span')

    console.log("Output for: App -> e.target", e.target.parentElement.parentElement)
    const { itemsList , totalCalories} = this.state
    console.log("Output for: App -> id", id)

    const filterOut = itemsList.filter(item => item.id.toString() !== id.toString())
    const removedItem = itemsList.filter(item => item.id.toString() === id.toString())
    this.setState({totalCalories: totalCalories - removedItem[0].cal})
    this.setState({itemsList: filterOut})

  }
    //-=-==-=-=-=-==-=-=-=-=-=-=-=-=-=-=-=-==-=
  render() {
    const {foods, itemsList, totalCalories} = this.state
    return (
      <div className="App">
        <Navbar clearBlur={this.clearBlur.bind(this)}
        searchItems={this.searchItems.bind(this)}
        />
        <AddFoodForm handleSubmit={this.addNewItem.bind(this)}
         handleChange={this.updateStateNewItem.bind(this)}
         />
        <div className='food'>
          <div>
            {foods.map((food, i) => 
              <FoodBox key={i+1} {...food} 
                clearBlur={this.clearBlur.bind(this)}
                addToItemList={this.addToIngredientList.bind(this)}
              />)}
          </div>
          <div className='todays-list'>
            <h2 className='todays-title'>Today's Foods</h2>
            <div className='todays-foods'>
                <ul>
                {itemsList.map((item,i) =>  <TodaysFoods key={i+1} {...item} removeIngredient={this.removeIngredient.bind(this)}/> )}
                </ul>
            </div>
            <h1><strong>Total: {totalCalories} cal</strong></h1>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
