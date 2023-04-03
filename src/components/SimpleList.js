import React, { useState } from 'react'
import foods from "../foods.json";
import FoodBox from './FoodBox';
import SearchBar from './SearchBar';


function SimpleList({allFoods, onDeleteClick}) {
    const [search, setSearch] = useState('')
    const [products, setProducts] = useState(foods);


    const handleSearch = (value) => {
        setSearch(value)
        const filteredProducts = foods.filter((food) =>
        food.name.toLowerCase().includes(value.toLowerCase())
      )
      setProducts(filteredProducts)
    }

    return (
        
        <div>
        
            <div className='cards-plates'>
            <div className="div-title">
                <h2 className='title'>Food list</h2>
                <SearchBar onSearch={handleSearch} search={search} />
            </div>
                {products.map((food, i) => (
                    <FoodBox key={i} food={food} onDeleteClick={onDeleteClick}/>
                ))}
            
            </div>
        </div>
    )
}

export default SimpleList