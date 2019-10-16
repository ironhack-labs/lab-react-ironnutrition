import React, { Fragment, Component } from 'react';
import FoodBox from './FoodBox'
class Search extends Component {
    constructor(props){
        super(props)
        this.state ={
            search: '',
        }
    }
    inputSearch(e){
        let {value} = e.target
        this.setState({
            search: value
        },  this.props.handleSearchFood(value))
    }
	render() {
		return (
            <Fragment>
                <input type="text" onChange={(e) => this.inputSearch(e)} className="input search-bar" name="search" placeholder="Search" value={this.state.search}/> 
            </Fragment>
		);
	}
}

export default Search;
