import React, { useState } from 'react'

export default function AddFoodForm(props) {
    const [form, setForm] = useState({name: "", calories: "", image: "", quantity: 0});
    const {handleAddNew} = props;
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(e);
        handleAddNew(form)
    }
    const handleInputChange = (e) => {
        const formCopy = {...form};
        formCopy[e.target.name] = e.target.value;
        formCopy["quantity"] = 0;
        setForm(formCopy);
    }
  return (
    <form>
        <div className="columns">
            <div className="column">
                <label className='label' htmlFor="name">Name: </label>
            </div>
            <div className="column is-11">
                <input type="text" name="name" className="input is-primary" onChange={handleInputChange}/>            
            </div>
        </div>     
        <div className="columns">
            <div className="column">
                <label className='label' htmlFor="quantity">Calories: </label>
            </div>
            <div className="column is-11">        
                <input type="text" name="quantity" className="input is-primary" onChange={handleInputChange}/> 
            </div>
        </div> 
        <div className="columns">
            <div className="column">
                <label className='label' htmlFor="image">Image URL: </label>
            </div>
            <div className="column is-11">            
                <input type="text" name="image" className="input is-primary" onChange={handleInputChange}/>
            </div>
        </div>
        <div className="columns">
            <div className="column">
                <button className='button is-success' onClick={handleSubmit}>Add new</button>
            </div>
        </div>
    </form>
  )
}
