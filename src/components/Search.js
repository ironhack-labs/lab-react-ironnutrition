import React from 'react'

export default function Search(props) {

    return (
        <input type='text' onChange={props.onSearch}/>
    );

}