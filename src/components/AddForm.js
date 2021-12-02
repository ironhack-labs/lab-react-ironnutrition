import React from 'react';

function AddForm(props) {
  const { btnSubmit } = props;

  return (
    <div>
      <h1>Add new Food</h1>
      <form onSubmit={btnSubmit}>
        <div className="field">
          <label className="label">Name</label>
          <div className="control">
            <input
              name="name"
              className="input"
              type="text"
              placeholder="Enter of your food"
            />
          </div>
        </div>

        <div className="field">
          <label className="label">Calories</label>
          <div className="control has-icons-left has-icons-right">
            <input
              name="calories"
              className="input is-success"
              type="number"
              placeholder="Enter the number of calories"
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Image</label>
          <div className="control has-icons-left has-icons-right">
            <input
              name="image"
              className="input is-success"
              type="url"
              placeholder="Enter food image"
            />
          </div>
        </div>
        <div className="field is-grouped">
          <div className="control">
            <button type="submit" className="button is-link">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddForm;
