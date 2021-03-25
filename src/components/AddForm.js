import React from 'react'

const AddForm = ({ hideForm, addFood, handleChange, food }) => {
    return (
        <div>
            <button className='btn btn-outline-dark' onClick={hideForm}>X</button>
            <div className="col-6">
                <form onSubmit={addFood} >
                    <label htmlFor="inputEmail4">Name</label>
                    <input
                        type="text"
                        value={food.name}
                        className="form-control"
                        name="name"
                        onChange={handleChange}
                    />

                    <label htmlFor="inputEmail4">calories</label>
                    <input
                        type="text"
                        value={food.calories}
                        className="form-control"
                        name="calories"
                        onChange={handleChange}
                    />

                    <label htmlFor="inputEmail4">image</label>
                    <input
                        type="text"
                        value={food.image}
                        className="form-control"
                        name="image"
                        onChange={handleChange}
                    />

                    <button type="submit" className="btn btn-primary button my-4">
                        Fill it!</button>
                </form>
            </div>
        </div>
    )
}

export default AddForm