import { useState } from "react"
import FoodBox from "./FoodBox";
function FilteredFood(props) {
    const [searchWord, setSearchWord] = useState('')
    

    
    const workSearch = () => {
        const filteredProducts = props.foodState.filter((oneFood) => {
          const nameMatch = oneFood.name.toLowerCase().includes(searchWord.toLowerCase());
         
          return nameMatch ;
        });
        props.onSearch(filteredProducts);
      };
    
    return(
        <div className="search">
        <h3>Search</h3>
        <input onChange={(e) => setSearchWord(e.target.value)} type="text" value={searchWord} id="qery" placeholder="Search here."/>
        <span>
        
        
        </span>
        
        <button onClick={workSearch}>Search</button>
        <ul>
            {props.filteredProducts.map((food)=> (
                <FoodBox key={food.name} food={food} />
            ))}
        </ul>
        </div>
    )
}

export default FilteredFood