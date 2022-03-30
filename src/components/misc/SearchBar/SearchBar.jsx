import React from 'react'

const Search = (props) => {
    return(
        <>
            <div className=" mb-3 mt-4">
                <div className="control">
                    <input 
                        className="input" 
                        name="food"
                        type="text" 
                        placeholder="Looking for a food?"
                        onChange={props.filterFoods}
                        value={props.filter}
                    />
                </div>
            </div>
        </>
    )
}

export default Search