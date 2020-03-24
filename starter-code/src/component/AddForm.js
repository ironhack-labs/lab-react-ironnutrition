import React from "react"

export default function AddForm({handleChange, handleSubmit, newFood}) {
  return (
    <form className="addFormBox" onSubmit={handleSubmit}>
        <div className="field">
          <label className="label">Name</label>
          <div className="control">
            <input onChange={handleChange}
              className="input .input-form"
              type="text"
              name="name"
              value={newFood.name}
              placeholder="Tag Name"
            />
          </div>
        </div>

        <div className="field">
          <label className="label">Calories</label>
          <div className="control">
            <input onChange={handleChange}
              className="input .input-form"
              type="number"
              name="calories"
              value={newFood.calories}              
              placeholder="100"
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Image</label>
          <div className="control">
            <input onChange={handleChange}
              id="image-file"
              className="input .input-form"
              type="file" 
              name="image"
              value={newFood.image}
              placeholder="Load image"
            />
          </div>
        </div>
        <button type="submit">Add Food</button>

    </form>
  );
}
