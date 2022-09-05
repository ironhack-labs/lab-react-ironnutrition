import { BoxFood, Search} from "../components"

import { useEffect, useState } from "react"

import './Foods.styles.css'


export const Foods = () => {
 let myData;

 const [data, setData] = useState([])
 const [initialData, setInitialData] = useState([])


 useEffect(() => {
  fetch('foods.json')
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setInitialData(data)

      })
      .catch((err) => {
        console.log(err.message)
      })
}, [])

 const handleSearch = (event) => {
  myData = [...data]
  const searchValue = myData.filter((food) => food.name.toLowerCase().includes(event.target.value.toLowerCase()))
  if(!event.target.value){
   setData(initialData)
  }else{
   setData(searchValue)
  }
 }

 const handleDeleteClick = (name) => {
  myData = [...data]
  const newData = myData.filter((values) => values.name !== name) 
  setData(newData)
 }


 return(
  <>
  <main>
   <div className="search">
    <h3><span>Search</span></h3>
    <Search placeholder="Enter search query" onChange={handleSearch}/>
   </div>
   <div className="food-page">
    <h3><span>Food List</span></h3>
    <div className="box">
     {data.map((food, index) => {
      return(
       <BoxFood
        key={`${index}+${food}`} 
        foodName={food.name} 
        imgFood={food.image} 
        calFood={food.calories} 
        sideFood={food.servings} 
        totalCalories={food.calories}
        handleClick={handleDeleteClick}
       />
      )
     })}

    </div>
   </div>
  </main>
   
   
  </>
 )
}