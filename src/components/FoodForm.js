import React, { Component } from 'react';

class FoodForm extends Component {
    state = { 

     }

    render() { 
        return ( 
            <div className="FoodForm">
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="name">Name</label>
                        <input
                            id="name"
                            name="name"
                            value={this.state.name}
                            onChange={this.handleChange}
                        />
                        <div className="help">
                            i<div className="help-text">User's full name</div>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="bio">Bio</label>
                        <textarea
                            id="bio"
                            name="bio"
                            value={this.state.bio}
                            onChange={this.handleChange}
                        />
                        <div className="help">
                            i<div className="help-text">User's bio</div>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="private">Private profile</label>
                        <input
                            type="checkbox"
                            id="private"
                            name="private"
                            checked={this.state.private}
                            onChange={this.handleChange}
                        />
                        <div className="help">
                            i<div className="help-text">Set profile to non public</div>
                        </div>
                    </div>
                    
                    <button type="submit">Edit</button>
                </form>
            </div>
         );
    }
}
 
export default FoodForm;