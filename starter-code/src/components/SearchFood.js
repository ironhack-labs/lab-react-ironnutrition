import React, {useContext, useState} from 'react';
import { FoodContext} from './../contexts/FoodContext';

const SearchFood = () => {
  const {SearchFoods} = useContext(FoodContext);
  const [nameSearch, setNameSearch] = useState("");

  const handleSearch = name => {
    setNameSearch(name);
    SearchFoods(name);
  }

  return (
    <input value={nameSearch} onChange={e => handleSearch(e.target.value)} />
  )
}

export default SearchFood;