import React, {useState} from 'react'
import foods from '../foods.json';
import { nanoid } from 'nanoid'
import Search from './Search'
export default function FoodBox(props) {
//STATES
    const [newFood, setNewFood]= useState({
        image:"",
        name:"",
        calories:""
    })
    const [food, setFood] = useState(foods)
    const [searchFood, setSearchFood] = useState(food)
    const [addMode, setEdition] = useState(false)
    const [error, setError] = useState(null)
    const [id, setId] = useState("")
//FUNCIONES CRUD
const handleChange = (event) => {
    console.log("Hola! Acaban de tocar una tecla")
    setNewFood({
        ...newFood,
        id: nanoid(),
        [event.target.name]: event.target.value
    })
}
    const addFood = (event) => {
        event.preventDefault()
        if(!newFood.name.trim() || !newFood.calories.trim()){
            setError("Inserta el nombre de la comida y sus calorias por favor.")
            return;
        }
        setFood([
            ...food,
            newFood
        ])
        setError(null)
        setNewFood({
            image: "",
            name: "",
            calories: ""
        })
    setSearchFood([
        ...searchFood,
            newFood
    ])
    }
    return (
        <>
        <Search data={food} setSearchFood={setFood} searchFood={searchFood}/>
        {food.map((e, id) => {
            return(
                    <div className="box" key={id}>
                    <article className="media">
                        <div className="media-left">
                        <figure className="image is-64x64">
                            <img src={e.image} />
                        </figure>
                        </div>
                        <div className="media-content">
                        <div className="content">
                            <p>
                            <strong>{e.name}</strong> <br />
                            <small>{e.calories}</small>
                            </p>
                        </div>
                        </div>
                        <div className="media-right">
                        <div className="field has-addons">
                            <div className="control">
                            <input className="input" type="number" value="1" />
                            </div>
                            <div className="control">
                            <button className="button is-info">
                                +
                            </button>
                            </div>
                        </div>
                        </div>
                    </article>
                    </div>
            )
        })
        }
        <form onSubmit={addFood}>
        <h3>Image</h3>
                <input
                    name="image"
                    onChange={(e) => {handleChange(e)}}
                    value={newFood.image}
                />
            <h3>Name</h3>
                <input
                    name="name"
                    onChange={(e) => {handleChange(e)}}
                    value={newFood.name}
                />
            <h3>Calories</h3>
                <input
                    name="calories"
                    onChange={(e) => {handleChange(e)}}
                    value={newFood.calories}
                />
            <button>Add Food</button>
        </form>
        </>
    )
}