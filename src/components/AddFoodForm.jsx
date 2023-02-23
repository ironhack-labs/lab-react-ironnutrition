import React, { useState } from 'react'


const AddFoodForm = ({createNewElement}) => {

   const [inputName, setInputName] = useState("") 
   const [inputImage, setInputImage] = useState("") 
   const [inputCalories, setInputCalories] = useState("") 
   const [inputServings, setInputServings] = useState("") 

   const submit = (e) => {
        e.preventDefault()
        createNewElement(
          { inputName,
            inputImage, 
            inputCalories, 
            inputServings
          })
        setInputName("")
        setInputImage("")
        setInputCalories("")
        setInputServings("")
   }


  return (
    <form onSubmit={submit} 
      style={{
      marginTop: "1rem"
    }}>
        <label>Food Name</label>
        <input 
            type="text" 
            value={inputName} 
            id="name"
            onChange={(e) => setInputName(e.target.value)} 
            />
        <label>Image URL</label>
        <input 
            type="text" 
            value={inputImage} 
            id="image"
            onChange={(e) => setInputImage(e.target.value)} 
            />
        <label>Calories</label>
        <input
            type="number"
            value={inputCalories}
            id="calories"
            min={0}
            onChange={(e) => setInputCalories(e.target.value)}
        />
        <label>Servings</label>
        <input
          type="number"
          value={inputServings}
          id='servings'
          min={0}
          onChange={(e) => setInputServings(e.target.value)}
        />
        <button type="submit">Submit</button>
    </form>
  )
}

export default AddFoodForm