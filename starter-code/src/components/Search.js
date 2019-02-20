import React, { Component } from "react";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchString: "",
      displayedFoods: this.props.allFoods
    };
  }

  filterFoods(event) {
    console.log(event.target);

    const { name, value } = event.target;
    this.setState({ [name]: value });

    const allFoods = this.state.displayedFoods;

    const filteredArray = allFoods.filter(oneFood => {
      return oneFood.name.indexOf(value) !== -1;
    });

    this.props.foodsToDisplay(filteredArray);
  }

  render() {
    return (
      <section className="Search">
        {/* <form> */}
        <input
          onChange={event => this.filterFoods(event)}
          type="text"
          name="searchString"
          placeholder="search for food here!"
          value={this.state.searchString}
        />
        {/* </form> */}
      </section>
    );
  }
}

export default Search;
