import React from 'react'

export default function Search(props) {
    return (
        <div>
            <input onChange={props.change} className="input" type="text" placeholder="Text input"></input>
        </div>
    )
}
