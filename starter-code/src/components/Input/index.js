import React, { Component } from 'react';
import "./style.css";

class Input extends Component {
    render(){
        const { id, type, name, value, action} = this.props;
        return (
            <div className="box-input">
                <input id={id} type={type} name={name} value={value} onChange={action}/>
            </div>
        )
    }
}

export default Input;