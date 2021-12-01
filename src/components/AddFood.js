import React from 'react'

function AddFood(props) {

    let {handleSubmit} = props
    return (
        <div>
        <h1>Add an item</h1>
        <form onSubmit={handleSubmit}>
         <div class="field">
             <label class="label">Name</label>
             <div class="control">
             <input name="name"class="input" type="text" placeholder="Text input" />
             </div>
         </div>
     
         <div class="field">
             <label class="label">calories</label>
             <div class="control has-icons-left has-icons-right">
             <input
             class="input is-success"
             type="text"
             placeholder="Enter Price"
             name="calories"
             />
             </div>
         </div>
         <div class="field">
             <label class="label">Image</label>
             <div class="control has-icons-left has-icons-right">
             <input
             class="input is-success"
             type="text"
             placeholder="Eenter image"
             name="image"
             />
             </div>
         </div>
         <div class="field is-grouped">
             <div class="control">
             <button class="button is-link">Submit</button>
             </div>
         </div>
        </form>
        </div>
    )
}

export default AddFood
