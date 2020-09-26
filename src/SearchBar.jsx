import React from 'react';

class SearchBar extends React.Component {
  render() {
    const {handleOnChange} = this.props;
    return (
      <div>
        <input type="text" onChange={handleOnChange} placeholder='Search'/>
      </div>
    );
  };
}

export default SearchBar