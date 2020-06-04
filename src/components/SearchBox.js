import React from 'react';
import 'bulma/css/bulma.css';

class SearchBox extends React.Component {
    state = {
        name: "",
        calories: 0,
        image: "",
        quantity: 1,
        id: ""
    }

    nameChangeHandler = (event) => {
        let currentInputValue = event.target.value

        this.setState({
            name: currentInputValue
        })
    }

    formSubmitHandler = (event) => {
        event.preventDefault()

        this.props.SearchBoxHandler(this.state)

        this.setState({
            name: "",
            calories: 0,
            image: "",
            quantity: 1,
            id: ""
        })
    }


    render() {
        return (
            <div className="mb-3">
            <form onSubmit={this.formSubmitHandler}>
                <div className="field has-addons">
                    <div className="control">
                        <input className="input" type="text" placeholder="Find a food" name="searchPhrase"/>
                        </div>
                        <div className="control">
                            <button type="submit" className="button is-info">
                                Search
                            </button>
                        </div>
                    </div>
                    </form>
                </div>
        )
    }
}

export default SearchBox;