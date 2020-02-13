import React, { Component } from 'react';

class Search extends Component {
    state = {
        initialItems: [],
        items: []
    }
  //   // TODO: change the state searchText
  // }

  filterList = (event) => {
    let items = this.state.initialItems;
    items = items.filter((item) => {
      return item.toLowerCase().search(event.target.value.toLowerCase()) !== -1;
    });
    this.setState({items: items});
  }

  componentWillMount = () => {
    this.setState({
        initialItems: this.props.content,
        items: this.props.content
    })
  }

  render() {
    return (
      <div>
        <h2>Search</h2>
        <form>
            <input type="text" placeholder="Search" onChange={this.filterList}/>
      </form>
      <div>
        {
            this.state.items.map(function(item) {
                return <div key={item}>{item}</div>
            })
        }
        </div>
      </div>
    );
  }
};

export default Search;