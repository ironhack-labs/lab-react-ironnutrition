import React from 'react'
import './Searchbar.css'

const Searchbar = ({ query, onChange, showFormComponent }) => {
    return (
        <div className="Searchbar">
            <input 
                type="text"
                id="search" 
                name="search" 
                placeholder="What's is your next meal?" 
                value={ query }
                onChange={ onChange }
            />
            <button 
            className="btn-searchbar"
            onClick={ showFormComponent }>
                Add a new meal
            </button>
        </div>
    )
}

export default Searchbar
