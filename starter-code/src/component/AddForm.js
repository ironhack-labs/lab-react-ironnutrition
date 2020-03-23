import React from "react"

export default function AddForm() {
  return (
    <div className='addFormBox'>
        <div className="field">
          <label className="label">Image</label>
          <div className="control">
            <input
              className="input"
              type="text" 
              name="image"
              placeholder="Load image"
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Name</label>
          <div className="control">
            <input
              className="input"
              type="text"
              name="name"
              placeholder="Tag Name"
            />
          </div>
        </div>

        <div className="field">
          <label className="label">Calories</label>
          <div className="control">
            <input
              className="input"
              type="number"
              name="calories"
            />
          </div>
        </div>
        <button>Add Food</button>

    </div>
  );
}
