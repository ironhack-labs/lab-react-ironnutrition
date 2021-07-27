import React, { Component } from 'react'


class AddButton extends Component {

    handleOpenForm(event) {
        event.preventDefault();       
             this.props.onShowForm()        
     }

    render(){
        return(
            <form onSubmit={(event) => this.handleOpenForm(event)}>
            <button type="submit" className="button is-link">Add an Item</button>
            </form>
        )}
}

AddButton.defaultProps = {
    onShowForm: () => {}
}


export default AddButton