import React, { useState, useContext } from "react";
import {FoodContext} from './foodContext';

const SearchBox = () => {
  const [searchFood, setSerchFood] = useState('');
  const [allFoods, setFoods] = useContext(FoodContext);
 
   const filterFood = (e) => {
     setSerchFood(e.target.value);
     let filterFoods = allFoods;
     filterFoods = filterFoods.filter(function(item) {
       return item.name.toLowerCase().search(e.target.value.toLowerCase()) !== -1});
     setFoods([...filterFoods]); 
   };

   return (
     <div>
       <h2 className="subtitle" >Search Food</h2>
       <input className="input" type="text" name="searchFoods" value={searchFood} onChange={(e)=> filterFood(e)}/>
     </div>
   )
};

export default SearchBox;
