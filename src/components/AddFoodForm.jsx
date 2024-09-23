import { useState } from "react"
import { Divider, Input } from "antd";


function AddFoodForm({handleAddNewFood}) {

  const [name, setName] = useState("")
  const [calories, setCalories] = useState("")
  const [image, setImage] = useState("")
  const [servings, setServings] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault()

    const newFood = {
      id:name,
      name: name,
      calories: calories,
      image: image,
      servings: servings
    }

    handleAddNewFood(newFood)

    setName("")
    setCalories("")
    setImage("")
    setServings("")

  }

  return (
    
    <form onSubmit={handleSubmit}>
      <Divider>Agregar nueva receta:</Divider>
      <div>
        <label htmlFor="name">Nombre: </label>
        <Input
          type="text"
          name="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </div>
      <div>
      <label htmlFor="calories">Calorias: </label>
      <Input
          type="number"
          name="calories"
          value={calories}
          onChange={(event) => setCalories(event.target.value)}
        />
        </div>
      <div>
      <label htmlFor="imgage">Foto de la receta: </label>
      <Input
          type="text"
          name="image"
          value={image}
          onChange={(event) => setImage(event.target.value)}
        />
        </div>
        <div>
      <label htmlFor="servings">Cantidad de porciones: </label>
      <Input
          type="number"
          name="servings"
          value={servings}
          onChange={(event) => setServings(event.target.value)}
        />
        </div>
        <button type="submit">Create</button>

    </form>
  )
}

export default AddFoodForm