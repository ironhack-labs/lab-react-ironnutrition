import React from 'react';

const AddButton = ({ showForm, toogleShowForm}) => {
  return (
    <>
      <button className="button is-link button-override is-justify-content-flex-end" onClick={toogleShowForm}>Add New Food</button>
    </>
  );
};

export default AddButton;


