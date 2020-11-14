import React,{useState} from "react";

function SearchBar(props){

const [foodList, setFood] = props.listFood;
const [searchKey, setSearch] = useState("");

function handleChange(e){
   

    setSearch(e.target.value);    
    setFood(foodList.filter(el=>el.name.toLowerCase().includes(e.target.value.toLowerCase())));
}
    return (
      <div className="field">
        <div className="control">
          <input
            className="input"
            type="text"
            name="searchBar"
            onChange={handleChange}
            placeholder="Está com fome de quê?"
          />
        </div>
      </div>
    );
}

export default SearchBar;