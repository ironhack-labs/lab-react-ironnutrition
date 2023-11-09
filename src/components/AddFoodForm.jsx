// Your code here
import {useState} from "react"

function AddFoodForm(props) {
    
    const [foodName, setFoodName] = useState("")
    const [image, setImage] = useState("")
    const [calories, setCalories] = useState("")
    const [servings, setServings] = useState("")
    
    return (
      <>
        <form onSubmit={(e) => {
            props.callbackToAdd(e, {foodName, image, calories, servings})
            setFoodName("")
            setImage("")
            setCalories("")
            setServings("")
        }
        }>
          <label>
            {" "}
            Name:
            <input
              type="text"
              name="name"
              placeholder="food name"
              value={foodName}
              required={true}
              onChange={(e) => {setFoodName(e.target.value)}}
            />
          </label>
          <br />

          <label>
            {" "}
            Image URL:
            <input
              type="text"
              name="image"
              placeholder="imagem URL"
              value={image}
              required={true}
              onChange={(e) => {setImage(e.target.value)}}
            />
          </label>
          <br />

          <label>
            {" "}
            Calories:
            <input
              type="number"
              name="calories"
              placeholder="calories"
              value={calories}
              required={true}
              onChange={(e) => {setCalories(e.target.value)}}
            />
          </label>
          <br />

          <label>
            {" "}
            Servings:
            <input
              type="number"
              name="servings"
              placeholder="servings"
              value={servings}
              required={true}
              onChange={(e) => {setServings(e.target.value)}}
            />
          </label>
          <br />

          <button>Create</button>
        </form>
      </>
    );
}

export default AddFoodForm