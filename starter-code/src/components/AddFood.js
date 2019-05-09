import React from 'react';

function AddFood({ handleSubmit, handleInput }) {
  return(
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" onChange={handleInput}/>
        <input type="text" name="image" placeholder="Image URL" onChange={handleInput}/>
        <input type="number" name="calories" placeholder="Calories" onChange={handleInput}/>
        <input type="submit" value="Create" onChange={handleInput}/>
      </form>
    </div>
  )
}

export default AddFood