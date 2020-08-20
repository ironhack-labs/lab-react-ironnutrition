import React from 'react'

export default function AddForm (props){
  return(
    <form onSubmit={()=>props.addFood()}>
      <div className="field">
        <label className="label">Name</label>
        <div className="control">
          <input className="input" type="text" name='name' placeholder="Hawaian pizza not supported"/>
        </div>
      </div>
      <div className="field">
        <label className="label">Calories</label>
        <div className="control">
          <input className="input" type="text" name='calories' placeholder="How many calories does it have?"/>
        </div>
      </div>
      <div className="field">
        <label className="label">Image url</label>
        <div className="control">
          <input className="input" type="text" name='image' placeholder="Link to the picture"/>
        </div>
      </div>
      <button type='submit' className="button is-info is-light">Add to the list</button>
    </form>
  )
}