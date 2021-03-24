import React from 'react'

import '../assets/InfoCard.css'

const InfoCard = ({name, calories, value, onDelete}) => {

        return(
        <table class="table">
            <tbody>
            <tr className="tr__style">
                <th>{name}  x{value}</th>
                <td>{calories*value} cal</td>
                <td><i className="fa fa-times text-danger delete__info" onClick={onDelete}></i></td>
            </tr>
            </tbody>
        </table>
        )
    
}

export default InfoCard