import React from 'react'
import './Header.css'

const Header = ({ query, onChange }) => {
    return (
        <div className="Header">
            <div className="Brand">
                <img src="/images/side-food-2.png" alt="Neked Food" />
                <img className="logo" src="/images/HEADER-5.png" alt="Neked Food" />
                {/* <h1> Naked Food </h1>
                <p><small>Learn what you eat</small></p> */}
            </div>
            <div className="searchBar">
                <input 
                    type="text"
                    id="search" 
                    name="search" 
                    placeholder="What's is your next meal?" 
                    value={ query }
                    onChange={ onChange }
                />
            </div> 
        </div>
    )
}

export default Header
