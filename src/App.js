import React from 'react';
import {useState, useEffect} from 'react'
import './App.css';
import {Center, Input, Flex, Text, Spinner} from "@chakra-ui/react"
import foodList from "./foods.json"

import FoodBox from "./Components/FoodBox/Index";
import OrderBox from "./Components/OrderBox/Index";
import FormBox from "./Components/FormBox/Index";

function App() {
  const [foodArray, setFoodArray] = useState([...foodList]);
  const [order, setOrder] = useState([]);
  const [searchString, setSearchString] = useState('');

  function updateQuantity(foodQuantity, foodName) {
    //Buscar el item en el arreglo foodArray
    let newArray = foodArray;
    const index = foodArray.findIndex(element => element.name === foodName);

    //Actualizar la cantidad del objeto
    newArray[index]= {
      calories:newArray[index].calories,
      image:newArray[index].image,
      name:newArray[index].name,
      quantity:parseInt(foodQuantity),
    }

    //Actualizar arreglo foodArray
    setFoodArray(foodArray=> newArray);
  }

  function orderItem(foodName) {
    //Buscar el food item en el arreglo y buscar si existe el food item en el arreglo order
    const index = foodArray.findIndex(element => element.name === foodName);
    const orderIndex = order.findIndex(element => element.name === foodName);

    //Si el item no existia en el order, entonces agregarlo
    if(orderIndex<0){
      setOrder(order=> [...order,{name:foodName, calories:foodArray[index].calories ,quantity: foodArray[index].quantity}])
    }
    else{ //Si ya existia entonces actualizarlo
      let newArray = order;
      newArray[orderIndex]= {
        name:foodName,
        calories:foodArray[index].calories,
        quantity:order[orderIndex].quantity += foodArray[index].quantity
      }
      setOrder([...newArray]);
    }
  }

  function checkName(name, str){
    var pattern = str.split("").map((x)=>{
        return `(?=.*${x})`
    }).join("");
    var regex = new RegExp(`${pattern}`, "g")
    return name.match(regex);
  }

  function onSearch(e) {
    setSearchString(e.target.value);
  }

  function createNewFoodItem(itemName, itemCalories){
        //Buscar el item en el arreglo foodArray
        let newArray = foodArray;
        const index = foodArray.findIndex(element => element.name === itemName);

        if(index<0) {
          newArray.push({
            name:itemName,
            calories: itemCalories,
            quantity: 1
          })
          //Actualizar arreglo foodArray
          setFoodArray([...newArray]);
        }
        else {
          alert("Este item ya existe en la lista");
        }
  }

  return (
    <Flex
      display="flex"
      flexDir="column"
      alignItems="center"
      justifyContent="center"
      alignContent="center"
    >
      <Center><Text fontWeight="600" fontSize="4xl" margin="20px">IronNutrition</Text></Center>
      <Center><Input onChange={onSearch} placeholder="Buscar Comida" width="80vw" marginBottom="20px"/></Center>
      <Flex display="flex">
        <Flex marginRight="50px" overflowY="auto" height="70vh" width="550px" border="2px" borderRadius="8px" borderColor="gray.300"
          display="flex"
          flexDir="column"
          alignItems="center"
        >
          {foodArray.length === 0 ? <Spinner/> : foodArray.filter(food =>(checkName(food.name,searchString))).map((food, index) => (
            <FoodBox
              foodName={food.name}
              calories={food.calories}
              imageSrc={food.image}
              onBtnPress={()=>orderItem(food.name)}
              onQuantityChange={updateQuantity}
              key={index}
            />
          ))}
        </Flex>
        <OrderBox orderItems={order}/>
        <FormBox submitFood={createNewFoodItem} />
      </Flex>
    </Flex>

  );
}

export default App;
