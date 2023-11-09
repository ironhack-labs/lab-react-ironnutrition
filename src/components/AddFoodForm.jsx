import { useState } from "react";

function AddFoodForm(props) {
    const [name, setName] = useState("")
    const [image, setImage] = useState("")
    const [calories, setCalories] = useState("")
    const [servings, setServings] = useState("")


    // Iteration 5:
  const handleSubmit = (e) => {
    e.preventDefault()

    const newFood = {
        name,
        image,
        calories,
        servings
    }

    props.addFood(newFood)
    
    setName("")
    setImage("")
    setCalories("")
    setServings("")

  }

    return (
        <section>

        <form onSubmit={handleSubmit}>
            <div>
            <label>
                Name:
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    required={true}
                    value={name}
                    onChange={(e) => {setName(e.target.value)}}
                />
            </label>
            </div>

            <div>
            <label>
                Image:
                <input
                    type="url"
                    name="image"
                    placeholder="https://image.com/im"
                    required={true}
                    value={image}
                    onChange={(e) => {setImage(e.target.value)}}
                />
            </label>
            </div>

            <div>
            <label>
                Calories:
                <input
                    type="number"
                    name="calories"
                    placeholder="0"
                    required={true}
                    value={calories}
                    onChange={(e) => {setCalories(e.target.value)}}
                />
            </label>
            </div>

            <div>
            <label>
                Servings:
                <input
                    type="number"
                    name="servings"
                    placeholder="0"
                    required={true}
                    value={servings}
                    onChange={(e) => {setServings(e.target.value)}}
                />
            </label>
            </div>

            <button>Create</button>
            </form>

        </section>


    )
}

export default AddFoodForm;