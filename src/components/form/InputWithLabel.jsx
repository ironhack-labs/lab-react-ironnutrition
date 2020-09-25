import React from "react"

export default function InputWithLabel({name, label, value, type, onChange, placeholder}) {
    return (
        <div>
            <label htmlFor={name}>{label}</label>
            <input className="input" name={name} type={type} value={value} onChange={onChange} placeholder={placeholder} />
        </div>
    )
}
