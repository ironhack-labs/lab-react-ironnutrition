import { useState } from "react";

function AddNewFood(props){
    const {addNewFood} = props;
    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [calories, setCalories] = useState('');
    const [servings, setServings] = useState('');

    function handleNameInput(e){
        setName(e.target.value);
    }

    function handleImageInput(e){
        setImage(e.target.value);
    }

    function handleCaloriesInput(e){
        setCalories(e.target.value);
    }

    function handleServingsInput(e){
        setServings(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const newFood = {
            name,
            image,
            calories,
            servings
        }

        addNewFood(newFood);

        setName("");
        setImage("");
        setCalories("");
        setServings("");
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={name} onChange={handleNameInput} />
                </label>
                <label>
                    Image:
                    <input type="text" value={image} onChange={handleImageInput} />
                </label>
                <label>
                    Calories:
                    <input type="number" value={calories} onChange={handleCaloriesInput} />
                </label>
                <label>
                    Servings:
                    <input type="number" value={servings} onChange={handleServingsInput} />
                </label>
                <button>Add a Food</button>
            </form>
        </div>
    );
}

export default AddNewFood;