import React from 'react'
import SearchBar from '../searchBar/Search'
import './Navbar.css'

const Navbar = ({searchItems, clearBlur}) => {
   function displayForm(){
        document.querySelector('#main-form').classList.toggle('show')
        document.querySelector('#main-form').classList.toggle('hide')
        document.getElementsByClassName('todays-list')[0].classList.toggle('blur')
        document.getElementsByClassName('todays-list')[0].classList.toggle('clear-blur')
        document.querySelectorAll('.media').forEach(elem=> {
        elem.classList.toggle('blur')
        elem.classList.toggle('clear-blur')
    })
    }
    return (
        <div className='main-nav'>
            <nav onClick={clearBlur} className="navbar">
            <div className="navbar-brand">
                <div   className="navbar-item">
                    <h2>IronNutrition</h2>
                </div>

                <div className="buttons">
                </div>
            </div>
        </nav>
                    <button onClick={()=> displayForm()} id='add-button' className="button is-primary">
                        <strong>+ Food</strong>
                    </button>
        <SearchBar clearBlur={clearBlur} searchItems={searchItems}/>
        </div>

    )
}

export default Navbar
