import React,{useState} from "react";

function SearchBar(props){

  const [foodList, setFood] = props.listFood;
  const [searchKey, setSearch] = useState("");

  function handleSearch(e){
    setSearch(e.target.value);    
    setFood(foodList.filter(food=>food.name.toLowerCase().includes(e.target.value.toLowerCase())));
  }
    return (
      <div className="field">
        <div className="control">
          <input
            className="input"
            type="text"
            name="searchBar"
            onChange={handleSearch}
            placeholder="What would you like to eat?"
          />
        </div>
      </div>
    );
}

export default SearchBar; 