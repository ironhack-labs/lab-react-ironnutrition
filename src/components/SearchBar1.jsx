import { useState } from "react"
import foodsJson from "../foods.json";

function SearchBar1(props) {

    const [searchQuery, setSearchQuery] = useState("");
    const [filteredFoods, setFilteredFoods] = useState([]); // Estado para almacenar los resultados filtrados

    const handleSearch = (e) => {
        const query = e.target.value;
        setSearchQuery(query);

        // Filtra los datos en función de la consulta de búsqueda
        const filtered = foodsJson.filter(food => 
            food.name.toLowerCase().includes(query.toLowerCase())
        );

        setFilteredFoods(filtered); // Actualiza el estado con los resultados filtrados
    };

    const handleRemove = (indiceAlBorrar) => {
        console.log("borrando", indiceAlBorrar);
        let cloneFoodArr = JSON.parse(JSON.stringify(props.foods));
    
        cloneFoodArr.splice(indiceAlBorrar, 1);
        props.setFoods(cloneFoodArr);
      };

  return (
    <div>Search
       <input
                type="text"
                value={searchQuery}
                onChange={handleSearch}
            />
            <div>
                {filteredFoods.map((food, index) => (
                    <div key={index}>

                        <p >{food.name}</p>
                        <img src={food.image} height={60} alt="food" />
                        <p>{food.calories}</p>
                        <p>{food.servings}</p>
                        <button onSubmit={() => handleRemove(index)}>Delete</button>
                    </div>

                ))}
            </div>
        
    </div>
  )
}

export default SearchBar1