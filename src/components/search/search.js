import React, {Component} from 'react'

class Search extends Component {
    constructor (){
        super ()
        this.state = {
            name: ''
        }
    }

    handleInput = e => {
        const name = e.target.name
        const value = e.target.value
        this.setState({[name] : value})
    }

    handleFormSubmit = e => {
        e.preventDefault()
        this.props.searchFood(this.state.name)
        this.setState({
            name: '',
        })
    }

    render () {
        return (
            <form onSubmit={this.handleFormSubmit}>
                <div className="field">
                <div className="control">
                    <input className="input is-danger" name='name' type="text" placeholder="Search..." value={this.state.name} onChange={this.handleInput}/>
                </div>
                </div>
            </form>

        )
    }
}

export default Search

