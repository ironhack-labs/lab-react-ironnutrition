import React from 'react';


export default function Search(props) {
    return (
        <div>
            <input onChange={props.search} type="text" placeholder="Search"/>
        </div>
    )
}

