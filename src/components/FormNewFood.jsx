import React from 'react'

function FormNewFood({handleChangeForm, handleSubmitForm}) {
    return (
        <form onSubmit={handleSubmitForm} >
            <div className='field'>
                <label className='label'>Name</label>
                <div className='control'>
                    <input className='input' type="text" name='name' placeholder='Name of the new food' onChange={handleChangeForm} />
                </div>
            </div>
            <div className='field'>
                <label className='label'>Number of calories</label>
                <div className='control'>
                    <input className='input' type="number" name='calories' placeholder='Calories of the new food' onChange={handleChangeForm} />
                </div>
            </div>
            <div className='field'>
                <label className='label'>Image</label>
                <div className='control'>
                    <input className='input' type="text" name='image' placeholder='URL of the image' onChange={handleChangeForm} />
                </div>
            </div>
            <div className="control">
                <button className="button is-primary" type='submit'>Submit</button>
            </div>
        </form>
    )
}

export default FormNewFood
