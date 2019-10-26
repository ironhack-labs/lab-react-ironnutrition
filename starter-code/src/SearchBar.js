import React, { Component } from 'react';

export class SearchBar extends Component {

    state = {
        stringToFilterFor: ""
    }

    changeHandler = (event) => {
        const inputName = event.target.name
        this.setState({
            [inputName]: event.target.value
        })
        this.props.stateLocation(this.state)
    }


    render() {
        return (
            <div >
                <form>
                    <input
                        name="stringToFilterFor"
                        placeholder=""
                        onChange={this.changeHandler} />
                </form>
            </div>
        )
    }
};

export default SearchBar