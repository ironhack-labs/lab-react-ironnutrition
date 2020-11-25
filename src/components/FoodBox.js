import React, {useState} from 'react'

export default function FoodBox({name, calories, image, quantity}){
    const [quantity, setQuantity] = useState(0)
    
    return(
    <div className="box">
        <article className="media" style={{borderRadius:"3px", border:"1px grey solid", display:"flex", alignItems:"center", justifyContent:"space-evenly", margin:"10px", height:"70px"}}>
            <div className="media-left" style={{display:"flex", alignItems:"flex-start"}}>
            <figure className="image is-64x64">
                <img src={image} style={{height:"64px", width:"64px"}}/>
            </figure>
            </div>
            <div className="media-content">
            <div className="content">
                <p>
                <strong>{name}</strong> <br/>
                <small>{calories} cal</small>
                </p>
            </div>
            </div>
            <div className="media-right">
            <div className="field has-addons" style={{display:"flex", flexDirection:"row", justifyContent:"flex-end", alignItems:"center"}}>
                <div className="control">
                <input className="input" type="number" value={quantity} style={{border:"none"}}/>
                </div>
                <div className="control">
                <button className="button is-info" style={{color: "white", backgroundColor:"blue", border:"none", width:"70px", height:"70px"}}>
                    +
                </button>
                </div>
            </div>
            </div>
        </article>
    </div>
)}