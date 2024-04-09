import React, { useEffect, useState } from "react";
import foodsJson from "../../foods.json";
import FoodBox from "../foodBox/FoodBox";
import AddFoodForm from "../addFoodForm/AddFoodForm";
import SearchBar from "../searchBar/Searchbar";

function Foodlist() {
    const [originalFoods, setOriginalFoods] = useState(foodsJson);
    const [foods, setFoods] = useState(foodsJson);
    const [searchTerm, setSearchTerm] = useState("");


    useEffect(() => {
        setFoods(originalFoods.filter(food => food.name.toLowerCase().includes(searchTerm.toLowerCase())));//*1
    }, [searchTerm, originalFoods]);




    const handleDelete = (id) => {
        const updateFoods = foods.filter((food) => food.id !== id);
        setFoods(updateFoods);

    };

    const handleCreate = (food) => {
        setFoods([...foods, { ...food, id: Math.random() }]);
    };

    const handleSearch = (term) => {
        setSearchTerm(term)
        const foodsFiltered = foods.filter((data) => data.name.includes(searchTerm.toLocaleLowerCase()))
        setFoods(foodsFiltered)



    };


    return (
        <>
            <div className="App">
                <h1>LAB | React IronNutrition</h1>
            </div>
            <div className="container">

                <AddFoodForm onCreate={handleCreate} />
                <SearchBar onSearchTerm={handleSearch} />
                <div className="row">
                    {foods.length > 0 ? (foods.map((food) => (
                        <FoodBox
                            key={food.id}
                            handleDelete={handleDelete}
                            food={food}
                        />
                    ))
                    ) : <h1 className="text-danger">Noy alimentos que mostrar</h1>}
                </div>
            </div>
        </>
    );
}

export default Foodlist;
//*useEffect Nos permite ejecutar el código que nosotros queramos y podemos decirle cuando queremos que se ejecute mediante las dependencias . Siempre se ejecutara cada vez que se renderice el componente si en las dependencias le ponemos un [ ] se ejecutara solo una vez al pintarse la pigina al principio sino ponemos nada cada vez que se renderice y si le ponemos valores dentro del array [couter] por ejemplo.Cada vez que cambie este valor se ejecutara el código que hayamos dicho .
//Cada vez que cambien alguno de los elementos que estan dentro del array eejecutara el codigo 