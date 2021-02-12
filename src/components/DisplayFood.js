import React, {useState} from 'react';
import 'bulma/css/bulma.css';
import FoodBox from './FoodBox'


function DisplayFood({foods}) {

    const [foodList, setFoods] = useState({foods}) 
    console.log("foodlist", foodList) 
    let [food, setFood] = useState(foods) 
    console.log("food", food) 
    const [todaysFoodList, setTodayFoodList] = useState([])

    //Toogle. --> Cambia estado en consola true <-> false pero no sé cómo relacionarlo
    const [form, setForm] = useState(false)
    const handleDisplayForm = () => {
        setForm(!form)
        console.log("displayform after", form)
    }

    //Añadir comida nueva IT3. Funciona --> falta poner input vacio después de click
    const handleChange = (event) => {
        const {value, name} = event.target;
        setFoods(state => ({
            ...state,
            [name]: value
        }))
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        setFood(food.concat(foodList))
    }

    //Search bar IT4 --> Funciona bien hasta que el usuario borra
    const handleSearch = (event) => {
        const searchInput = event.target.value;
        console.log("searchinput", searchInput)
        setFood(list => list.filter(item => item.name.toLowerCase().includes(searchInput)))
    }

    //Añadir Comida a la lista de la derecha IT5. Intento de recoger el name para añadirlo a un array vacío y luego mapearlo para pintarlo. 
    const addFoodHandler = (userFoodName) => {
        let onefood = [...foods].filter( food => food.name === userFoodName)
        console.log("onefood", onefood)
        let foodList = [].concat(onefood)
        setTodayFoodList(foodList)
    }

    return (
        <div>
            <div className="addNewFood">
                <button onClick={handleDisplayForm} >Add new food</button>
                <div className="formAdd">
                    <form onSubmit={handleSubmit} >
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="name" value={foodList.name} onChange={handleChange} />
                        <label htmlFor="calories">Calories</label>
                        <input type="number" name="calories" id="calories" onChange={handleChange} />
                        <button>Add</button>
                    </form>
                </div>
            </div>
            <div className="searchBar">
                <form>
                    <input type="text" name="search" id="search" placeholder="search something" onChange={handleSearch} />
                </form>
            </div>
            <div className="leftList"></div>
            {
                food.map((food, idx) => {
                    return <div>
                    <FoodBox food={food} clickToAdd = {() => addFoodHandler(foods.name)} />
                    </div>
                })
            }
            <div className="rightList">
            <h2>Today's List</h2>
                {
                    todaysFoodList.map((food, idx) => {
                    return <div>
                        <ul>
                            <li>Food: {food}</li>
                        </ul>
                    </div>
                })
                }
            </div>
        </div>
    )
}

export default DisplayFood;

