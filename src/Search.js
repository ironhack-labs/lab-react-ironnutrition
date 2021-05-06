import React from 'react';

class Search extends React.Component {
  render() {
    return (
      <div className="Search">
        <h3>Search</h3>
        <input
        onChange={(event)=> this.props.filterFoods(event)}
          type="text"
          placeholder="Search..."
        />
      </div>
    );
  }
}

export default Search
