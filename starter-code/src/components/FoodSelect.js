import React from 'react'

const IronInput = props => {
    return (
            <div>
                <label>{props.label}</label>
                <select name={props.name} onChange={props.handleChange}>
                    {
                        props.options.map(opt=>{
                        return <option key={opt.name} value={opt.value}>{opt.name}</option>
                        })
                    }
                </select>
            </div>
        )
}

export default IronInput;