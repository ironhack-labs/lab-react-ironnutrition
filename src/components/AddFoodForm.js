import { Divider, Input } from 'antd';
import React from 'react';

const AddFoodForm = ({ name, image, calories, servings }) => {
  return (
    <div>
      <Divider>
        <h3>AddFoodForm</h3>
      </Divider>
      <form
        style={{
          width: '500px',
          height: '300px',
          margin: '0 auto',
        }}
      >
        <label htmlFor={name}>Name</label>
        <Input value={name} type="text" onChange={() => {}} />
        <label htmlFor={image}>Image</label>
        <Input value={image} type="text" onChange={() => {}} />
        <label htmlFor={calories}>Calories</label>
        <Input value={calories} type="number" onChange={() => {}} />
        <label htmlFor={servings}>Servings</label>
        <Input value={servings} type="number" onChange={() => {}} />
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default AddFoodForm;
