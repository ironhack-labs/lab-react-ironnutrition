import { useState } from 'react';

function AddFood(props) {

    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [calories, setCalories] = useState("");
    const [servings, setServings] = useState("");

    const handleSubmit= (e) => {
        e.preventDefault();
        const newFood= {
            name: name,
            image: image,
            calories: calories,
            servings: servings
    };
    
    props.callbackToAdd(newFood);
    setName("");
    setImage("");
    setCalories("");
    setServings("");
}
return (
    <section className='AddFood'>

        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input type="text" name="name" value={name} onChange={(e) => {setName(e.target.value)}}></input>
          </label>
          <label>
            Image:
            <input type="text" name="image" value={image} onChange={(e) => {setImage(e.target.value)}}></input>
          </label>
          <label>
            Calories:
            <input type="number" min="1" name="calories" value={calories} onChange={(e) => {setCalories(e.target.value)}}></input>
          </label>
          <label>
            Servings:
            <input type="number" name="servings" value={servings} onChange={(e) => {setServings(e.target.value)}}></input>
          </label>

          <button>Create</button>
         </form>
    </section>
)
}

export default AddFood;