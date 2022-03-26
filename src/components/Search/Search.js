import React from 'react'

const Search = (props) => {
    return(
        <div>
            <div className="field has-addons mb-3 mt-4">
                <div className="control">
                    <input 
                        className="input" 
                        name="food"
                        type="text" 
                        placeholder="Find a food"
                        onChange={props.filterFoods}
                        value={props.filter}
                    />
                </div>
            </div>
        </div>
    )
}

export default Search