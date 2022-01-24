import React from 'react';

const AddButton = ({ toogleShowForm }) => {
  return (
    <>
      <button
        className="button is-info button-override is-justify-content-flex-end"
        onClick={() => toogleShowForm()}
      >
        Add New Food
      </button>
    </>
  );
};

export default AddButton;
