import React from 'react'

export default function FoodSearch(props) {
    return (
        <div className="field">
            <label className="label">Food Name</label>
            <div className="control">
                <input className="input" type="text" placeholder="Search Food" name="search" onChange={props.onChange} value={props.value} />
            </div>
        </div>
    )
}
