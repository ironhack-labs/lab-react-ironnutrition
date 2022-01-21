import React from 'react';

const FormAddFood = (props) => {
    const {name, calories, image, onChangeHandle, onSubmitHandle} = props;

    return (
        <>
          <form onSubmit={onSubmitHandle}>
            <label>Name of the food
            <input 
              type="text" 
              name="name"
              value={name}
              onChange={onChangeHandle}
              placeholder='name'/>
            </label>
            <label>Name of the food
            {/* <label htmlFor="calories">Name of the food</label> */}
            <input 
              type="number"
              name="calories"
              value={calories} 
              onChange={onChangeHandle}
              placeholder='number of calories'/>
            </label>
            <label >Name of the food
            <input type="text"
              placeholder="url of image"
              name="image"
              value={image} 
              onChange={onChangeHandle}
            /></label>
          <button>Submit food</button>
        </form>
        </>
        
    )
}

export default FormAddFood;