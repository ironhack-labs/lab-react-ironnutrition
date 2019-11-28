import React from 'react'

export default function SearchBar({ clbk }) {
    return (
        <div>
            <label htmlFor="">Search</label>
            <input className="input-search" type="text" name="search" onChange={(e) => clbk(e.target.value)} />
        </div>
    )
}
