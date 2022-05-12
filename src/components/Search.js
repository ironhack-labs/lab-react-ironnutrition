import React from "react"
import {useState} from 'react'
import foods from '../foods.json'


const Search = (props) => {

    const [search, setSearch] = useState('')

    const changeSearch = (e) => {
        e.preventDefault()
        let newArray = []
        let copy = [...foods]
        setSearch(e.target.value)
        let value = e.target.value

        props.setFood( (prevFoods) => {
            console.log(copy)
            foods.forEach( (food, index) => {
                console.log(value)
                if (food.name.toLowerCase().includes(value.toLowerCase())){
                    newArray.push(copy[index])
                }
            })
            let half = newArray.length / 2
            newArray.splice(half, half)
            // Feel like this was a very messy workaround 
            // but for some reason my app was doubling up on things so I just got rid of the extras.
            // I messed this all up tbh. 
            return newArray
        })
        
    }

    return(
        <input value={search} type="text" className="input search-bar" name="search" onChange={changeSearch} placeholder="Search"  />
    )
}

export default Search