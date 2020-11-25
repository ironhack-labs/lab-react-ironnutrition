import React, { useState } from 'react'


function AddFood({addNewFood}) {

    const [name, setName] = useState('')
    const [calories, setCalories] = useState('')
    const [image, setImage] = useState('')

    function handleFormSubmit() {

    }

    return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
        />
        <br />
        <label>Calories:</label>
        <input
          type="text"
          name="calories"
        />
        <br />
        
        <br />
        <label>Image:</label>
        <input type="text" name="image" />
        <br />
        
        <button>Submit</button>
      </form>
    </div>
  )
}

export default AddFood
