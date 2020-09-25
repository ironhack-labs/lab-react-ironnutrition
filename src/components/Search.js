import React from 'react';

const Search = (props) => {
    return (
        <form>
            <div className="field">
                <div className="control">
                    <input className="input is-info" type="text" onChange={props.onSearch}
                    placeholder="Search for an item"></input>
                </div>
                </div>
        </form>
    )
}

export default Search