import React from 'react';


const initialState = {
    name: "",
    calories:"",
    image:""
};


function InputForm(){

    const [formState, setFormState] = React.useState(initialState);






    return (
        <div className="container">
            <form className="form" >
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    value={formState.name}
                    // onChange={handleChange}
                />
                <label htmlFor="calories">Calories</label>
                <input
                    type="text"
                    name="calories"
                    id="calories"
                    required
                    value={formState.calories}
                    // onChange={handleChange}
                />
                <label htmlFor="image">Image Url</label>
                <input
                    type="text"
                    name="image"
                    id="image"
                    required
                    value={formState.image}
                    // onChange={handleChange}
                />
                <button type="submit">Add</button>
            </form>

            </div>
    )

}

export default InputForm;