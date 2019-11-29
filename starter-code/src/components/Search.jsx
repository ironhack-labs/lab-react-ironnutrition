import React from 'react'

export default function Search({clbk}) {
    return (
        <form onChange={clbk}>
            <input name="food" type="text" placeholder="search"/>
        </form>
    )
}
