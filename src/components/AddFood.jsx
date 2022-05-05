import React, { useState } from "react";
 
function AddFood(props) {
  const [ toggleForm, setToggleForm  ] = useState(false);
  const [ name,       setName        ] = useState("");
  const [ calories,   setCalories    ] = useState(0);
  const [ image,      setImage       ] = useState("");
  const [ quantity,   setQuantity    ] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newFood = { 
      name, 
      calories,
      image,
      quantity,
    };
    console.log("Submitted", newFood);
    props.addFood(newFood);
    // Reset the state
    setName("");
    setCalories("");
    setImage("");
    setQuantity(1);
    setToggleForm(false);
}

const displayForm = (e)=>(toggleForm ? setToggleForm(false) : setToggleForm(true));

    // e -> short-hand for 'event', passed automatically by input(s)
  const handleNameInput     = e => setName(e.target.value);
  const handleCaloriesInput = e => setCalories(e.target.value);
  const handleImageInput    = e => setImage(e.target.value);
  const handleQuantityInput = e => setQuantity(e.target.value);
 
if(toggleForm){
    return (
    <div className="new-food">
        <div className="message is-info is-light">
            <div className="message-header">
                New Food <button className="delete" onClick={displayForm}></button>
            </div>
          <div className="message-body">
          <form onSubmit={handleSubmit}>
            <div className="field">
                <label className="label">Name: 
                <div className="control">
                    <input type="text" className="input" name="name" value={name} onChange={handleNameInput} />
                </div>    
                </label>
            </div>
            <div className="field">
                <label className="label">Calories: 
                <div className="control">
                    <input type="number" className="input" name="calories" value={calories} onChange={handleCaloriesInput} />
                </div>
                </label>
            </div>
            <div className="field">
                <label className="label">Image: 
                <div className="control">
                    <input type="text" className="input" name="image" value={image} onChange={handleImageInput} />
                </div>
                </label>
            </div>
            <div className="field">
                <label className="label">Quantity: 
                <div className="control">
                    <input type="number" className="input" name="quantity" value={quantity} onChange={handleQuantityInput} />
                </div>
                </label>                    
            </div>
            <div className="field is-grouped">
            <div className="field is-grouped">
                <div className="control">
                    <button className="button is-primary" type="submit">Add</button>
                </div>
                <div className="control">
                    <button className="button is-light is-pulled-right" onClick={displayForm}>Cancel</button>
                </div>
                </div>            
            </div>
          </form>
          </div>  
         </div>
    </div>        
      );
}else{
    return (
        <div className="new-food">
            <button className="button is-primary is-large is-pulled-right" onClick={displayForm}>New Food</button>
        </div>
      );    
}  

}
 
export default AddFood;