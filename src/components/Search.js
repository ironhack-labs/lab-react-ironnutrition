import React from 'react'


export default function Search(props){

    let myStyle = {
        width: "50%",
        height: '20px', 
        justifyContent: "center"
    }
    return <input style={myStyle} type="text" onChange={props.onFilter}></input>
}