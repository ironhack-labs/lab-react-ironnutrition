import './NewForm.scss'
import React, { Component } from 'react';

class NewForm extends Component {
    render(){
        return(
                <form className="NewForm" onSubmit={this.onSubmit}>
                    <div class="form-row">
                        <div >
                            <label htmlFor="name">Name of food</label>
                            <input type="text" class="form-control" placeholder="Name" name='name'/>
                        </div>
                        <div >
                            <label htmlFor="calorie">Calories</label>
                            <input type="text" class="form-control" placeholder="Calories" name='calorie'/>
                        </div>
                        <div>
                            <label htmlFor="">Image</label>
                            <input type="text" class="form-control" placeholder="image URL" name='image'/>
                        </div>
                    </div>
                    <button className='btn btn-primary'>Submit</button>

                </form>
        )
    }
}

export default NewForm