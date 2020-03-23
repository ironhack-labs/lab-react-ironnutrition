import React from "react";

export default function AddFood({handleChange, handleSubmit, newFood}) {
  return (
    <form className="add-food-box" onSubmit={handleSubmit}>
      <div className="field">
        <label className="label">Food</label>
        <div className="control">
          <input onChange={handleChange} 
            className="input input-form"
            type="text"
            placeholder="e.g Pasta"
            name="name"
            value={newFood.name}

          />
        </div>
      </div>

      <div className="field">
        <label className="label">Calories</label>
        <div className="control">
          <input onChange={handleChange} 
          className="input input-form" 
          type="number" 
          placeholder="100" 
          name="calories" 
         
         value={newFood.calories}/>
        </div>
      </div>

      <div className="field">
        <label className="label">Upload image</label>
        <div className="control">
          <input onChange={handleChange} 
          id='image-file'
          className="input input-form" 
          type="file" 
          name="image" 
         
         value={newFood.image}/>
        </div>
          <button  type='submit'>
            Submit
          </button>
      </div>
    </form>
  );
}
