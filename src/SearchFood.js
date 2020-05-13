import React, {Component} from 'react'

export default class SearchFood extends Component {

    state = {
        findThis: ""
    }

    handleInput = (event) => {
        let {value} = event.target;
        console.log('value from handleinput', value)
        this.setState({ findThis: value }, () => this.props.search(value) ) // maybe take another look at this
    }

    render() {
        
        return (
            <div>
                {/* <label>"Search:</label> */}
                <input type="text" value={this.state.findThis} 
                onChange={this.handleInput} placeholder="Search" />
            </div>
        )
    }
}
