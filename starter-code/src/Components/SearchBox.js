import React from 'react';

class SearchBar extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(

      <div>
        <input className="input" type="text"  onChange={this.props.searchTheFood}  />
      </div>

    )
  }
}


export default SearchBar;