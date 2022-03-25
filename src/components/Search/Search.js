import React, {Component} from 'react';

class Search extends Component{
  constructor(props){
    super(props);
      this.state = {
      search: ""
    }
    this.props = this.getBooksBySearchFilter 

  }

  getBooksBySearchFilter = () => {
    const { books, search } = this.state

    // return books.filter(book => book.title.toLowerCase().includes(search.toLowerCase()))
    return books.filter(book => {
      if (book.title.toLowerCase().includes(search.toLowerCase())) {
        return true
      }

      if (book.description.toLowerCase().includes(search.toLowerCase())) {
        return true
      }

      return false
    })
  }

  toFilter = (event) => {
    this.setState({
      search: event.target.value 
    })
  }
  render(){
    return (
      <div className="field is-grouped">
  <p className="control is-expanded">
    <input className="input" type="text" placeholder="Find a repository"/>
  </p>
  <p className="control">
    <button className="button is-info">
      Search
    </button>
  </p>
</div>
    )
  }
}

export default Search;
