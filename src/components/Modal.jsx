import React, { Component } from 'react'
import { faUpload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export class Modal extends Component {
    constructor(props){
        super(props)
        this.state = {
            name: '',
            calories: '',
            image: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event){
        const field = event.target.name
        if(field === "calories" && event.target.value < 0) this.setState({calories: 0})
        this.setState({[field]: event.target.value})
    }
    
    handleSubmit(){
        this.props.addFood(this.state)
        this.props.toggleModal()
    }

    render() {
        return (
            <div className="modal is-active">
                <div className="modal-background"></div>
                <div className="modal-content" style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <form encType='multipart/form-data' style={{minHeight: 500, width: 400, display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', alignItems: 'flex-start'}}>
                        <input className="input" type="text" name="name" placeholder="Food name" onChange={this.handleChange} value={this.state.name}/>
                        <input className="input" type="number" name="calories" placeholder="Number of Calories" style={{width: '50%'}} onChange={this.handleChange} value={this.state.calories}/>

                        <div className="file has-name">
                            <label className="file-label">
                                <input className="file-input" type="file" name="image" onChange={this.handleChange} value={this.state.image}/>
                                <span className="file-cta">
                                    <span className="file-icon">
                                        <FontAwesomeIcon icon={faUpload} />
                                    </span>
                                    <span className="file-label">
                                        Choose a file…
                                    </span>
                                    <span className="file-name">
                                        {this.state.image}
                                    </span>
                                </span>
            
                            </label>
                        </div>

                        <button onClick={this.handleSubmit} className="button is-primary is-outlined" style={{alignSelf:'flex-end'}}>Submit</button>
                    </form>
    
                </div>
                <button onClick={this.props.toggleModal} className="modal-close is-large" aria-label="close"></button>
            </div>
        )
    }
}

export default Modal
