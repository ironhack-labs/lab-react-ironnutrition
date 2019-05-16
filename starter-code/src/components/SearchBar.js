import React from "react";

 class SearchBar extends React.Component {
  render() {
    let {handleChangeSearch, search}=this.props
    return <div className='search'><input type="text" onChange={handleChangeSearch} /></div>;
    
  }
}

export default SearchBar