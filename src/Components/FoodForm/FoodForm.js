import React, { Component } from 'react'

class FoodForm extends Component {
    state = {
        name: '',
        calories: '',
        image: '',
        error: false,
        formState: true
    }

    onSubmit = (event) => {
        const { name, calories, image} = this.state

        event.preventDefault()
        
        //can't send a empty form and with no negatives numbers
        if (name && image && calories && Number(calories) >1) {
            this.props.addFood({
                name, // when the "key" and "value" are the same, you can write only the key!
                calories: Number(calories),
                image // image: image === image
            })
        } else {
            this.setState({
                error: true
            })
        }
    }
    // onCancel = (event) =>{
    //     const { formState } = this.state
    //     if( formState === true){
    //         this.setState({
    //             formState: false
    //         })
    //     }
    // }
    onHandleChange = (event) => {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }

    render() {
        const { name, calories, image } = this.state

        return (
            <div className='row justify-content-center mb-4'>
                <div className="col col-sm-8 col-md-6 col-lg-4">

                    <h1 className='fs-3 text-center'>Add Your Food</h1>
                    <form className="field mt-2" onSubmit={this.onSubmit}>
                        {/* NAME */}
                        <div>
                            <label htmlFor='name' className="label text-start">Name</label>
                            <div className="control">
                                <input className="input"
                                    id="name"
                                    name='name'
                                    type="text"
                                    placeholder="Food name"
                                    value={name}
                                    onChange={this.onHandleChange} />
                            </div>
                        </div>

                        {/* IMAGE */}
                        <div className='mt-2'>
                            <label htmlFor='image' className="label text-start">Image</label>
                            <div className="control d-flex">
                                <input className="input"
                                    id="image"
                                    name='image'
                                    type="text"
                                    placeholder=""
                                    value={image}
                                    onChange={this.onHandleChange} />
                                <div className="file">
                                    <label className="file-label">
                                        <input className="file-input" type="file" name="image" />
                                        <span className="file-cta">
                                            <span className="file-icon">
                                                <i className="fas fa-upload"></i>
                                            </span>
                                            <span className="file-label">
                                                Choose a file…
                                            </span>
                                        </span>
                                    </label>
                                </div>
                            </div>
                        </div>

                        {/* CALORIES */}
                        <div className='mt-2 col-4'>
                            <label htmlFor='calories' className="label text-start">Calories</label>
                            <div className="control">
                                <input className="input"
                                    id='calories'
                                    name='calories'
                                    type="number"
                                    placeholder="Calories"
                                    value={calories}
                                    min={1}
                                    onChange={this.onHandleChange} />
                            </div>
                        </div>

                        {/* BUTTONS */}
                        <div className="field is-grouped is-grouped-right mt-2">
                            <p className="control">
                                <button className="button is-primary">
                                    Submit
                                </button>
                            </p>
                            {/* <p className="control">
                                <button className="button is-light" onClick={this.onCancel}>
                                    Cancel
                                </button>
                            </p> */}
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
export default FoodForm