import React, { Component } from "react";

class SearchBar extends Component {
    state = {
        search: "",
    };

    searchHandler = event => {
        //Se pasa el metódo con props
        this.props.onFilter(event.target.value);
        this.setState({ search: event.target.value });
    };

    render() {
        return (
            <div className="field">
                <div className="control">
                    <input
                        className="input is-primary"
                        type="text"
                        placeholder="Buscar Alimento"
                        value={this.state.search}
                        onChange={this.searchHandler}
                    />
                </div>
            </div>
        );
    }
}

export default SearchBar;