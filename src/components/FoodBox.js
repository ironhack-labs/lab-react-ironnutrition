import React,{useState} from 'react'
import foods from '../foods.json'

export default function FoodBox(props) {

    const [formState, setFormState] = useState(false)

    function displayForm(){
    setFormState(true)
    }
    function hideForm(){
        setFormState(false)
    }
    function form(){
        return (
            <form>
    <p><label >Name: </label>
    <input name="newName" type="text"/></p>
    <p><label>Number of calories: </label>
    <input name="newNumberOfCalories" type="number"/></p>
    <p><label>Image: </label>
    <input name="newImage" type="text"/></p>
    <button onClick={()=>hideForm()}type="submit">Add</button>
</form>
        )
    }
    return (
<div>
<button className="button is-info" onClick={()=>{displayForm()}}>Add New Food</button>
{formState? form() : null }
    {foods.map((e,id)=>{
        return(
    <div key={id}>
        <div className="box">
        <article className="media">
            <div className="media-left">
                <figure className="image is-64x64">
                    <img src={e.image} />
                </figure>
            </div>
        <div className="media-content">
            <div className="content">
                <p>
                <strong>{e.name}</strong> <br />
                <small>{e.calories} cal</small>
                </p>
            </div>
        </div>
        <div className="media-right">
            <div className="field has-addons">
                <div className="control">
                    <input className="input" type="number" value="1" />
                </div>
            <div className="control">
                <button className="button is-info">
                     +
                </button>
            </div>
        </div>
    </div>
            </article>
</div>
</div>
)
    })
}
        </div>
    )
}