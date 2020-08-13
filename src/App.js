import React, { useState, useEffect } from 'react';
import './App.css';
import foodsJSON from './foods.json';
import FoodBox from './components/FoodBox/Foodbox';
import { v4 as uuidv4 } from 'uuid';
import Form from './components/Form/Form';
import Search from './components/Search/Search'
import Cart from './components/Cart/Cart';

function App() {

  const [foodList, setFoodList] = useState(foodsJSON)
  const [isModal, setisModal] = useState(false)
  const [cartList, setCartList] = useState([])
  const [totalCalories, setTotalCalories] = useState(0)

  useEffect(() => {
    setFoodList(
      foodList.map ( item => 
        ({ 
          ...item, 
          id: uuidv4()
        })
      )
    )
  }, [])

  const handleNewProduct = (foodObj) => {
    const newList = [
      foodObj,
      ...foodList
    ]
    setFoodList(newList)

    if(foodObj.quantity > 0){
      addToCart(foodObj)
    }
  }

  const handleModal = (e) => {
    setisModal(true);
  }

  const handleModalState = (value) => {
    setisModal(value);
  }

  const deleteProduct = (id) =>{
    const restOfProducts = foodList.filter( product => product.id !== id);
    const restOfCartProducts = cartList.filter( product => product.id !== id);
    setFoodList(restOfProducts)
    setCartList(restOfCartProducts)
  }

  const filterProducts = (word) => {

    const listElements = document.querySelectorAll('.food-list .box');

    const listElementsArr = Array.from(listElements)

    listElementsArr.filter(box => {
      let name = box.getAttribute('data-name')
      if(name.indexOf(word) === 0){
        box.classList.remove('is-hidden')
      } else {
        box.classList.add('is-hidden')
      }
    })

  }

  const existCartListItem = newItem => {
      const isFinded = cartList.find(item => item.id === newItem.id);
      return isFinded;
  }

  const addToCart = (obj) => {

    if(obj.quantity === 0){
      return
    }

    const {id, calories, quantity, name} = obj;
    let newCartList = {}

    const newCartItem = {
      id,
      name,
      calories: quantity*calories,
      quantity
    }

    if(!existCartListItem(obj)){

      newCartList = [
        ...cartList,
        newCartItem
      ]

    } else {

        const restItems = cartList.filter( item => item.name !== obj.name)

        newCartList = [
          ...restItems,
          newCartItem
        ]

    }

    setCartList(newCartList)

  }
   
  return (
    <div className="App">
      <div className="container">
        <div className="columns mt-6">
          <div className="column is-three-fifths">
            <div className="toolBar">
                  <Search filterProducts={filterProducts} />
                  <button className="button is-primary" type="button" data-target="modal" aria-haspopup="true" onClick={(e) => handleModal(e)}>Add a new Food</button>
            </div>
            <div className="food-list">
              {
                foodList.map( box => <FoodBox deleteProduct={deleteProduct} addToCart={addToCart} id={box.id} key={box.id} name={box.name} calories={box.calories} image={box.image} quantity={box.quantity} /> )
              }
            </div>
          </div>
          <div className="column is-two-fifths">
            <Cart cartList={cartList} />
          </div>
        </div>
      </div>
      <Form isActive={isModal} handleNewProduct={handleNewProduct} handleModalState={handleModalState}/>
    </div>
  );
}

export default App;
