import React from 'react'
import './Header.css'

const Header = () => {
    return (
        <div className="Header">
            <div className="Brand">
                <img className="logo" src="/images/title.png" alt="Naked Food" />
                <img className="subLogo" src="/images/aubtitle.png" alt="Learn what you eat" />
            </div>
        </div>
    )
}

export default Header
