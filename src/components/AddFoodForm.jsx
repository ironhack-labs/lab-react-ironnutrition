import React, {useState} from "react";

const AddFoodForm = ({ addNewFood}) =>{

    const [inputName, setInputName] = useState("")
    const [inputImage, setInputImage] = useState("")
    const [inputCalories, setInputCalories] = useState(0)
    const [inputServings, setInputServings] = useState(0)

    const submit = (e) => {
        e.preventDefault()
        addNewFood ({inputName, inputImage, inputCalories, inputServings})
        setInputName("")
        setInputImage("")
        setInputCalories(0)
        setInputServings(0)


        return (
            <form onSubmit={{submit}}>
                <label htmlFor="name"> Food Name: </label>
                <input 
                    type="text"
                    name="name"
                    id="name"
                    value={inputName}
                    onChange={(e) => setInputName(e.target.value)} />

                <label htmlFor="image"> Image URL: </label>
                <input 
                    type="text"
                    name="image"
                    id="image"
                    value={inputImage}
                    onChange={(e) => setInputImage(e.target.value)} />

                <label htmlFor="calories"> Calories: </label>
                <input 
                    type="number"
                    name="calories"
                    id="calories"
                    value={inputCalories}
                    min={0}
                    onChange={(e) => setInputCalories(e.target.value)} />

                <label htmlFor="servings"> Servings: </label>
                <input 
                    type="number"
                    name="servings"
                    id="servings"
                    value={inputServings}
                    min={0}
                    onChange={(e) => setInputServings(e.target.value)} />

                <button htmlType="submit">Create</button>
            </form>
        )
    }
}

export default AddFoodForm