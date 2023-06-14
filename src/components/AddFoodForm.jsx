
import {useState} from "react";

function AddFoodForm(props) {
    const [name, setName] = useState('')
    const [image, setImage] = useState('')
    const [calories, setCalories] = useState('')
    const [servings, setServings] = useState('')

    const handleNameInput = (e) => setName(e.target.value);
    const handleImageInput = (e) => setImage(e.target.value);
    const handleCaloriesInput = (e) => setCalories(e.target.value);
    const handleServingsInput = (e) => setServings(e.target.value);
    return(
        <form
            onSubmit={(e) => {
            e.preventDefault(); // empecher l'action par defaut de l'event submit
// 2.
            const o = {
            name: name,
            image: image,
            calories: calories,
            servings: servings,
            };
            props.addTheFood(o);

            // reset
            setName('');
            setImage('');
            setCalories(0);
            setServings(0);
            }}
            >

            <label>Name
                <input name="name" type="text" value={name} onChange={handleNameInput}/>
            </label>
            <label>Image
                <input name="image" type="text" value={image} onChange={handleImageInput}/>
            </label>
            <label>Calories
                <input name="calories" type="number" value={calories} onChange={handleCaloriesInput}/>
            </label>
            <label>Servings
                <input name="servings" type="number" value={servings} onChange={handleServingsInput}/>
            </label>
            <button type="submit">Add Food</button>
        </form>
    )
}

export default AddFoodForm