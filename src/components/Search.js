import React, {Component} from 'react'
export default function Search(props){
    return <input className="input" type="text" onChange={props.onChange} placeholder="search"/>
}