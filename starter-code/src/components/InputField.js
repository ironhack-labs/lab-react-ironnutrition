import React, { Component } from 'react'

export const InputField = ({label= '', type= 'text', placeholder}) => {
    return (
        <div className="field">
            <label className="label">{label}</label>
            <div className="control">
                <input className="input" type={type} placeholder={placeholder} />
            </div>
        </div>
    )
}