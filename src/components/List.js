import React from 'react'

export default function List(props) {
    return (
        <>
        <h2>Today's food</h2>
        {props.list.map((food) => {
            return (<p></p>)
        })}
        <p>Total:  cal</p>
        </>
    )

}