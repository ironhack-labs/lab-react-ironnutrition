import { Divider, Input } from 'antd';
import { useState } from 'react';

function SearchBar(props){
    
    const { foods, setFoods, foodFiltered, setFoodFiltered } = props
    const copyOfFoods = [...foods]
    
    

    const filterHandle = (event) =>{
        
        const userInput = event.target.value
        
        
        let filteredArray;
        if (userInput === ''){
            filteredArray = foodFiltered
        }
        else {
            filteredArray = foodFiltered.filter((food)=>{
                return food.name.toLowerCase().includes(userInput.toLowerCase())
            })
        }
        setFoods(filteredArray)
       
        
    }

    return(
        <>
      <Divider>Search</Divider>

      <Input className='margin-b' value={undefined} type="text" onChange={(e) => filterHandle(e)} />
    </>
    )
}

export default SearchBar

