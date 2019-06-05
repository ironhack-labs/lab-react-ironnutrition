import React, {Component} from "react"



class Search extends Component {

    constructor (props) {
        super (props)

        this.state = {
            newFood: ''
        }
    }

    handleChange = e => {
        let { name, value} = e.target
        this.setState({ [name]: value })
        // console.log(name)
        // console.log(value)
        // console.log(this.props)
        
        this.props.filterFood(value)
       }


    render () {
        return (
            <input type="text" name="newFood" value={this.state.newFood} onChange={(e) => this.handleChange(e)} />
        )
    }
}


export default Search