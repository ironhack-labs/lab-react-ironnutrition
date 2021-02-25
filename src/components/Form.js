/* import React, {useState} from 'react'

export default function Form(props) {

    const [newFood, setNewFood] = useState({
        name: "",
        image: "",
        calories: 0,
        quantity: 0
    })

    const [error, setError] = useState(null)

    const handleChange = (event) => {
        setNewFood({
            ...newFood,
            [event.target.name]: event.target.value
        })
        console.log(newFood)
    }

    const addFood = (event) => {
        event.preventDefault()

        if(!newFood.name.trim() || !newFood.calories.trim()) {
            setError('Fields name and calories must be filled.')
            return;
        }
        setFoodList([
            ...props.food, 
            newFood
        ])
        setError(null)
        setNewFood({
            name: "",
            image: "",
            calories: 0,
            quantity: 0
        })
    }

    return (
        <>
           <h2>Add Food Form</h2> 
           <form onSubmit={(e) => addFood(e)} >
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
               <h3>Image</h3>
               <input
                   name="image"
                   onChange={(e) => {handleChange(e)}}
                   value={newFood.image}
               />
               <h3>Quantity</h3>
               <input
                   name="quantity"
                   onChange={(e) => {handleChange(e)}}
                   value={newFood.quantity}
               />
               <button>Add Food</button>
           </form>
            
        </>
    )
}
 */