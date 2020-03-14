import React from 'react'
import './AddForm.css'

const AddNewFood = ({ handleSubmit, handleChange}) => {
    return (
        <div className='main-form'>
            <form  id='main-form' className='form-control hide' onSubmit={handleSubmit} encType="multipart/form-data"> 
                             <div className="field">
                                <label className="label">Name</label>
                                <div className="control">
                                    <input className="input input-form" onChange={handleChange} type="text" name="name" placeholder="Name" />
                                </div>
                            </div>

                            <div className="field">
                                <label className="label">Calories</label>
                                <div className="control">
                                    <input className="input input-form" onChange={handleChange} type="number" name='calories' placeholder="Calories" />
                                </div>
                            </div>   

                            <div className="field">
                                <label className="label">Image</label>
                                <div className="control">
                                    <input id='image-file' className="input input-form" onChange={handleChange} type="file" name='image' placeholder="Image" />
                                </div>
                            </div>  
                            <button className='button is-info'>Save +</button>    
                    </form>
        </div>
    )
}

export default AddNewFood
