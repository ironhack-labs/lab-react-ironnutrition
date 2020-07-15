import React from "react";

export default function AddForm(props) {


    return (

        <>
            <form onSubmit={props.submitForm}>
                <label>Name:</label><br />
                <input type="text" name="name" /><br />
                <label>Number of calories:</label><br />
                <input type="text" name="calories" />
                <button type="submit" >Submit</button>
            </form>
        </>
    )


}

