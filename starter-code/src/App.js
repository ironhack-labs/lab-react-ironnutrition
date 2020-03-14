import React, { Component } from 'react';
import foods from './foods.json'
import FoodBox from './components/foodBox/FoodBox'
import Navbar from './components/navbar/Navbar'
import AddFoodForm from './components/foodBox/AddNewFood'
import TodaysFoods from './components/todaysFoods/TodaysFoods'

import './App.css';

//modify foods - add id and cal props
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
  //-=-==-=-=-= Add new Item -==-=-=-=-=-=-=-=-=-=-=-=-==-=
  addNewItem = (e) =>{
    e.preventDefault()
    let { foods,foodsConst, newItem} = this.state
    const input = document.querySelectorAll('.input-form')
    //check inputs
    if(!newItem.name || !newItem.calories || !newItem.image){
      input.forEach(i => i.classList.add('input-color'))
      return
    }
    //if everything ok add the item
    newItem['id']= foodsConst.length + 1
    this.setState({newItem})
    const updatedFoodsConst = [...foodsConst, newItem]
    const updatedFoods = [...foods, newItem]
    this.setState({ foodsConst: updatedFoodsConst ,foods: updatedFoods })
    this.setState({ newItem: { name: '', calories: '', quantity: 0, cal: 0 } })

    //set the input value to default and remove/reset error color
    input.forEach(i => {
      // eslint-disable-next-line
      i.value ? i.value = i.defaultValue: ''
      i.classList.remove('input-color')
    })

    // remove form  after submit
    document.querySelector('#main-form').classList.toggle('show')
        document.querySelector('#main-form').classList.toggle('hide')
        document.querySelectorAll('.media').forEach(elem=> {
        elem.classList.toggle('blur')
        elem.classList.toggle('clear-blur')
        })
  }
  //-=-==-=-= Handle input changes on type and update state -=-==-=-=-=-=-=-=-=-=-=-=-=-==-=
  updateStateNewItem = (e) =>{
  const { name, value } = e.target;
  const { newItem } =this.state
  document.querySelectorAll('.input-form')[1].type = 'number'
  if(name === 'image'){
      // if image use FileReader to get url of image from laptop upload
      const input =document.getElementById("image-file");
      var fReader = new FileReader()
      fReader.readAsDataURL(input.files[0])
      fReader.onloadend = function(e){
        //add to state image url
        newItem[name] =  `${e.target.result}`
      }
  }
  //else add to state input values to newItem props
  newItem[name] = value
  this.setState({ newItem})
  }

  //-=-==-=-=-=-= if form when clicked on anywhere else close form  =-=-=-=-=-=-=-=-=-=-=-=-==-=
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
  //-=-==-=-=-=-==-= Search input handler -=-=-=-=-=-=-=-=-=-=-==-=
  searchItems = (e) =>{
    const { value }= e.target
    const { foodsConst } = this.state
    
    const searchItems = foodsConst.filter(food => food.name.toUpperCase().includes(value.toUpperCase()))
    this.setState({ foods: searchItems})
  }
  //-=-==-=-=-=-==-=  Add ingredients when clicked on add + button  -=-=-=-=-=-=-=-=-=-=-==-=
  addToIngredientList = (e) => {
    const {id, parentElement} = e.target
    const { foodsConst, itemsList, totalCalories } = this.state
    const quantity = parentElement.previousElementSibling.children[0].value
    //id, quantity are available
    // get the selected item from foodsConst
    const theItem = [...foodsConst].filter(food => food.id.toString() === id.toString())[0]
    //check if we have the item on ingredients list
    const checkItem = itemsList.filter(item => item.id.toString() === id.toString())
    const isItem = checkItem.length > 0? true: false

    //if item is not in our ingredients list, get it from foodsConst(which we already did - const theItem)
    if(!isItem ){
      // update the item props of the selected new item to add to the list
      theItem.quantity = Number(quantity)
      const newCalories = Number(quantity)* Number(theItem.calories)
      theItem.cal = newCalories
      //after updating the props update the state of itemsList by adding updated theItem
        this.setState({ itemsList: [...itemsList, theItem]})
        //also update the state of total calories
        this.setState({ totalCalories: totalCalories + newCalories})
    }
    //If the selected item is already in our ingredients list the just update it rather then adding again new item to the list
    if(isItem){
      checkItem[0].quantity += Number(quantity)
      const newCalories = Number(quantity)* Number(checkItem[0].calories)
      checkItem[0].cal += newCalories
      //after updating existing item props just setState to update state without adding the item because we already have it in our list, so just need to update state - no need to add
        this.setState({ itemsList})
        //after state updated also update new total calories
        this.setState({ totalCalories: totalCalories + newCalories})
    }
  }
  //-=-==-=-=-=-==-= Remove ingredient if clicked on remove icon -=-=-=-=-=-=-=-=-=-=-==-=
  removeIngredient = e =>{
    //Here i got issue with fontawesome icon, when I click on delete icon it can't find the ID of the button due to icon elem <svg>...</>
    //so i had to find solution to escape that. So found this awesome method on stockoverflow .closest(element)
    let {id} = e.target.closest('span')
    const { itemsList , totalCalories} = this.state
    //just filter out the item we need to delete
    const filterOut = itemsList.filter(item => item.id.toString() !== id.toString())
    //and get the removing item, so we can update totalCalories state by subtracting
    const removedItem = itemsList.filter(item => item.id.toString() === id.toString())
    //update total calories
    this.setState({totalCalories: totalCalories - removedItem[0].cal})
    //update ingredients list  - done !
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
        <div className='food' onClick={this.clearBlur.bind(this)}>
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
