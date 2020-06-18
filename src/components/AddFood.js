import React from 'react'

class AddFood extends React.Component { 
    render(){
        return(
            <>
                <form onSubmit={this.props.onAddItem}>
                    <input name ='name' type='text' placeholder='name'></input>
                    <input name ='calories' type='number' placeholder='calories'></input>
                    <input name ='image' type='text' placeholder='image'></input>
                    <button type='submit'>AddFood</button>
                </form>

                <input  type='text'  onChange={this.props.onFilter}></input>
            </>
        )
    }
}

export default AddFood