import React from 'react'



export default function Search(props) {

    


    return (
        <div className='top-search'>
            
            <input type="text" className="input search-bar" value={props.search} name="search" 
            onChange={(e) => props.handleSearchInput(e)}></input>

           {!props.form && <button className='button is-info' onClick={() => props.addFood() }>Add food </button>}

        {props.form && <div className='food-form'><form  onSubmit={(e) => props.handleSubmit(e)}>
        <div className="field">
        <div className="control">
        <label>Name food</label>
        <input className="input is-primary" name='name' onChange={(e) => props.handleInput(e)} value={props.name}></input>
        </div></div>
        <div className="field">
        <div className="control">
        <label>Total calories</label>
        <input className="input is-primary" type='number' name='calories' onChange={(e) => props.handleInput(e)} value={props.calories}></input>
        </div></div>
        
        <input type="submit" className="input search-bar" value="submit"/>
        </form> </div>}

        </div>
    )
}

