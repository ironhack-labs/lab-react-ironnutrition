import React, { Component } from 'react'
import {Button} from 'react-bootstrap'

class AddItem extends Component {
    render() {
        return (
            <div>
                <form className="form"
                onSubmit = {this.props.onAdd}>
                    <div className="eachInput">
                        <label>Image Url</label>
                        <input name ="itemImage" type="text"></input>
                    </div>

                    <div className="eachInput">
                        <label>Food</label>
                        <input name ="itemName" type="text"></input>
                    </div>

                    <div className="eachInput">
                        <label>Calories</label>
                        <input name ="itemCalories" type="text"></input>
                    </div>


                    <Button className="add-btn" variant="outline-dark" type="submit" >Add</Button>
                </form>
            </div>
        )
    }
}


export default AddItem