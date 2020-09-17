import React, {useState, useEffect} from 'react'

const Form = ({onClick}) => {

    const [name, setName] = useState("")
    const [calories, setCalories] = useState("")
    const [picture, setPictures] = useState("")

    useEffect(() => {
    
        document.querySelector(".modal-close").addEventListener('click', () => {
            document.querySelector(".modal").classList.toggle("is-active")
        });    
        
        document.querySelector(".modal-background").addEventListener('click', () => {
            document.querySelector(".modal").classList.toggle("is-active")
        });
    
    })
    
    const sendInfo = (e) => {
        e.preventDefault();
        let newFood = {
            "name": name,
            "calories": Number(calories),
            "image": picture,
            "quantity": 0
          }
        setName("")
        setCalories("")
        setPictures("")

        onClick(newFood)
        document.querySelector(".modal").classList.toggle("is-active")
    }

    return (
        <div className="modal">
        <div className="modal-background"></div>
        <div className="modal-content" style={{backgroundColor:"white"}}>
            <form onSubmit={sendInfo}>
                <h2 className="title">Add Food</h2>
                <br/>
                <div className="field">
                    <label className="label">Name</label>
                    <div className="control">
                        <input className="input" name="name" id="name"type="text" placeholder="Name" onChange={e => setName(e.target.value)}/>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Calories</label>
                    <div className="control">
                        <input className="input" name="calories" id="calories" type="number" placeholder="Calories" onChange={e => setCalories(e.target.value)}/>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Picture</label>
                    <div className="control">
                        <input className="input" name="picture" id="picture"type="text" placeholder="Picture" onChange={e => setPictures(e.target.value)}/>
                    </div>
                </div>

                <div className="field is-grouped">
                    <div className="control">
                        <button className="button is-link">Submit</button>
                    </div>
                </div>
            </form>
        </div>
        <button className="modal-close is-large" aria-label="close" ></button>
        </div>
    )
}

export default Form
