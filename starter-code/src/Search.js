import React from "react";

class Search extends React.Component {
        

    render () {
        console.log(this.props);
        // const { userInput } = this.state;
        return (
        <div className="field is-grouped">
            <p className="control is-expanded">
                <input value={ this.props.inputValue } onChange= {this.props.onFoodSearch}
                className="input" type="search" placeholder="Search" />
            </p>
      </div>)
    }
}

export default Search;