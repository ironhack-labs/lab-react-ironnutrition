import React from 'react'
import SearchBar from '../searchBar/Search'
import './Navbar.css'

const Navbar = ({searchItems}) => {
   function displayForm(){
        document.querySelector('#main-form').classList.toggle('show')
        document.querySelector('#main-form').classList.toggle('hide')
        document.querySelectorAll('.media').forEach(elem=> {
        elem.classList.toggle('blur')
        elem.classList.toggle('clear-blur')
    })
    }
    return (
        <div>
            <nav  className="navbar">
            <div className="navbar-brand">
                <div className="navbar-item">
                    <h2>IronNutrition</h2>
                </div>

                <div className="buttons">
                    <button onClick={()=> displayForm()} id='add-button' className="button is-primary">
                        <strong>+ Food</strong>
                    </button>
                </div>
            </div>
        </nav>
        <SearchBar searchItems={searchItems}/>
        </div>

    )
}

export default Navbar
