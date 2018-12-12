import React from "react"

const AddFoodForm = ({onSubmit, onChange, name, calories, image}) => (
  <form onSubmit={onSubmit}>
    <p>
      Name:
      <input type="text" name="name" value={name} onChange={onChange}/>
    </p>
    <p>
      Calories:
      <input type="text" name="calories" value={calories} onChange={onChange}/>
    </p>
    <p>
      Image:
      <input type="text" name="image" value={image} onChange={onChange}/>
    </p>
    <button type="submit">Add Food</button>
  </form>
)

export default AddFoodForm