import React from 'react'

const Button = ({children, onClick, disabled, className}) => {
    return (
        <button onClick={onClick} className={className} disabled={disabled}>{children}</button>
    )
}

Button.defaultProps = {
    disabled: false
}

export default Button