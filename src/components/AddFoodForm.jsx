import { useState } from "react"

function AddFoodForm(props) {
    const [name, setName] = useState("")
    const [image, setImage] = useState("")
    const [calories, setCalories] = useState("")
    const [servings, setServings] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();

        const foodDetails = {
            name: name,
            calories: calories,
            servings: servings
        }

        props.callbackToAddFood(foodDetails)

        setName("")
        setImage("")
        setCalories("")
        setServings("")
    }

    return (
        <section>
            <form onSubmit={handleSubmit}>
                <label>
                    Name
                    <input
                        name="name"
                        type="text"
                        required={true}
                        placeholder="enter your product"
                        value={name}
                        onChange={(e) => { setName(e.target.value) }}
                    />
                </label>
                <label>
                    Image
                    <input
                        name="image"
                        type="text"
                        value={image}
                        placeholder="add your URL here"
                        onChange={(e) => { setImage(e.target.value) }} />
                </label>
                <label>
                    Calories
                    <input
                        name="calories"
                        type="number"
                        required={true}
                        placeholder="enter the calories"
                        min={1}
                        max={500}
                        value={calories}
                        onChange={(e) => { setCalories(e.target.value) }} />
                </label>
                <label>
                    Servings
                    <input
                        name="servings"
                        type="number"
                        required={true}
                        placeholder="enter your servings"
                        min={1}
                        max={10}
                        value={servings}
                        onChange={(e) => { setServings(e.target.value) }} />
                </label>

                <button>Create</button>
            </form>
        </section>
    )
}

export default AddFoodForm
