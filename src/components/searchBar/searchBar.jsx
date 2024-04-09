
import React, { useState } from 'react';



function SearchBar({ onSearchTerm }) {
    const [term, setTerm] = useState("")

    const handleTerm = (event) => {
        const newTerm = event.currentTarget.value
        setTerm(newTerm)
        onSearchTerm(newTerm)
    }


    return (
        <div className="input-group">
            <div className="form-outline" data-mdb-input-init>
                <input
                 type="text"
                 value={term}
                 className="form-control"
                 onChange={handleTerm}/>
                <label className="form-label">Search</label>
            </div>
        </div>
    );
}

export default SearchBar;