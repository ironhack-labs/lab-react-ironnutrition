import React, { useState } from 'react';

function SearchBox(props) {
  const initialState = {
    search: '',
  };

  const [state, setstate] = useState(initialState);
  const handleChange = (event) => {
    setstate({ ...state, [event.target.name]: event.target.value });
    props.onChange(event.target.value);
  };
  return (
    <div className="field">
      <label className="label">Name</label>
      <div className="control">
        <input
          className="input"
          type="text"
          placeholder="Search"
          name="search"
          onChange={handleChange}
        />
      </div>
    </div>
  );
}

export default SearchBox;
