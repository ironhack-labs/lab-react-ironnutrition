import { useState } from "react"


function AddFoodForm(props) {

    const [ nameInput, setNameInput ] = useState("")
    const [ imageInput, setImageInput ] = useState("")
    const [ caloriesInput, setCaloriesInput ] = useState(0)
    const [ servingsInput, setServingsInput ] = useState(0)

    const handleFormSubmit = (event) => {
        event.preventDefault()

        const newFood = {
            name: nameInput,
            image: imageInput,
            calories: caloriesInput,
            servings: servingsInput
        }

        props.añadirComida(newFood)
    }

    const handleNameChange = (event) => setNameInput(event.target.value)

    const handleImageChange = (event) => setImageInput(event.target.value)

    const handleCaloriesChange = (event) => setCaloriesInput(event.target.value)

    const handleServingsChange = (event) => setServingsInput(event.target.value)


    


  return (
    <div>
        <h2>Formulario de agregar</h2>
        

        <form onSubmit={ handleFormSubmit }>

            <label htmlFor="name">Nombre: </label>
            <input type="text" name="name" onChange={handleNameChange} value={nameInput}></input>
    
            <br/>
            <label htmlFor="image">Imagen: </label>
            <input type="text" name="image" placeholder= "http://example.com/image.png" onChange={handleImageChange} value={imageInput}></input>

            <br/>
            <label htmlFor="calories">Calorias: </label>
            <input type="number" name="calories" onChange={handleCaloriesChange} value={caloriesInput}></input>
            <br/>

            <label htmlFor="servings">Porciones: </label>
            <input type="number" name="servings" onChange={handleServingsChange} value={servingsInput}></input>

            <br/>
            <button>Agregar</button>
        </form>
    </div>
  )
}

export default AddFoodForm;