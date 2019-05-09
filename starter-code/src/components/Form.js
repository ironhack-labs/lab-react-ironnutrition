import React from 'react'

function Form({ handleChange,handleSubmit}) {

    return (
        <div>
            <form onSubmit={handleSubmit} id="form">
                <input type="text" name='name' placeholder='Name' onChange={handleChange} />
                <input type="text" name='calories' placeholder='Calories' onChange={handleChange} />
                <input type="tex" name='image' placeholder='Image' onChange={handleChange} />
                <input type='submit' value='add' name='send' />
            </form>

        </div>
    )
}

export default Form