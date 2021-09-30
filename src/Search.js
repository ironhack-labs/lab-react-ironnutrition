import React, { useState } from 'react';
import Scroll from './Scroll';
import SearchList from './SearchList';
import foods from './foods.json';

class Search extends React.Component {
  //const [searchField, setSearchField] = useState('');

  state = {
    searchField: '',
  };

  setSearchField = (searchTerm) => {
    this.setState({
      searchField: searchTerm,
    });
    this.props.searchHandler(searchTerm); // this function is defined in App.js under the name filterList
  };

  handleChange = (e) => {
    this.setSearchField(e.target.value);
  };

  //   const filteredFoods = details.filter((food) => {
  //     return food.name || food.calories;
  //   });

  //   function searchList() {
  //     return (
  //       <Scroll>
  //         <SearchList filteredFoods={filteredFoods} />
  //       </Scroll>
  //     );
  //   }

  render() {
    return (
      <section className="garamond">
        {/* <div className="navy georgia ma0 grow">
            <h2 className="f2">Search for a food</h2>
          </div> */}
        <div>
          <input
            className="border border-info border-3 rounded"
            type="search"
            placeholder="Search foods"
            onChange={this.handleChange}
          />
        </div>
        {/* {searchList()} */}
      </section>
    );
  }
}

export default Search;
