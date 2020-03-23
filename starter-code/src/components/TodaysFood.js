import React from 'react'

export default function TodaysFood({ name, calories, quantity }) {
    return (
        <div>
            <ul>
                <li>{ quantity } { name } = { calories } cal</li>
            </ul>
        </div>
    )
}
