import React from 'react';

function Form(props){

  return (<form onSubmit={(e) => props.onSubmit(e)}>
   <label htmlFor="name">Name:</label><input name="name" onChange={(e) => props.onChange(e)}></input>
   <label htmlFor="calories">Calories:</label><input name="calories" onChange={(e) => props.onChange(e)}></input>
   <label htmlFor="image">Image:</label><input name="image" onChange={(e) => props.onChange(e)}></input>
   <button type="submit">confirm</button>
  </form>)

}

export default Form