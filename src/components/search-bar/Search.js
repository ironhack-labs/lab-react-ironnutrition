import React from 'react'
function Search(props) {

    return (

        <form>
            <div className="mb-3">
                <input type="text" className="form-control"  onChange={(event) => props.onSearch(event.target.value)}/>
            </div>
        </form>
    )
}

export default Search