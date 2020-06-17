import React from 'react';

export default function AddForm (props){

    //when you want to acces whatever is inside the input you have to give it a name, reason why we use the name
    //Buttons doesnthave info, you just click on it, it doesnt need a name, doesnt hold info

return (
    
    <>
    <form onSubmit={props.onAddForm}>
  <label >Name:</label><br/>
  <input type="text" name="name"/><br/>
  <label >Number of calories:</label><br/>
  <input type="text" name="calories"/>
  <button name="image">Upload Image</button>
  <button type="submit">Submit</button>
</form>

</>

)}
