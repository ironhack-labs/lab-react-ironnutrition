import React from 'react'

const AddFood = () => {
  state={
    name:'',
    calories:0,
    image:'',
  }

  return (
    <div>
        <form onSubmit={this.submit}>
          <input name="Name" type="text" placeholder="Name"/> 
          <input name="Number" type="number" placeholder="Calories"/> 
          <input name="image" type="text" placeholder="image"/> 
          <button type="submit"></button>
        </form>
    </div>
  )
}

export default AddFood
