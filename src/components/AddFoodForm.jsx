// Your code here

import {useState} from "react";

function AddFoodForm(props) {

    const {addFood} = props;

    const[name, setName] = useState('');
    const[image, setImage] = useState('');
    const[calories, setCalories] = useState(0);
    const[servings, setServings] = useState(0);


    function handleNameInput(e) {
        setName(e.target.value);
    }
    function handleImageInput(e) {
        setImage(e.target.value);
    }
    function handleCaloriesInput(e) {
        setCalories(e.target.value);
    }
    function handleServingsInput(e) {
        setServings(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();

        const food = {
            name: name,
            image: image,
            calories: calories,
            servings: servings
        }

        console.log(food);

        addFood(food);


    }



    return (
        <form onSubmit={handleSubmit}>
            <fieldset>
                <label htmlFor="food-name">Name</label>
                <input type="text" id="food-name" name="food-name" onChange={handleNameInput} value={name}/>
            </fieldset>
            <fieldset>
                <label htmlFor="food-image">Image</label>
                <input type="text" id="food-image" name="food-image" onChange={handleImageInput} value={image}/>
            </fieldset>
            <fieldset>
                <label htmlFor="food-calories">Calories</label>
                <input type="number" id="food-calories" name="food-calories" onChange={handleCaloriesInput}
                       value={calories}/>
            </fieldset>
            <fieldset>
                <label htmlFor="food-servings">Servings</label>
                <input type="number" id="food-servings" name="food-servings" onChange={handleServingsInput}
                       value={servings}/>
            </fieldset>

            <button>Add Food</button>

        </form>
    )
}

export default AddFoodForm;