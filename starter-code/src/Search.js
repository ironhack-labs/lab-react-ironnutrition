import React, {Component} from 'react'

class Search extends Component{

    constructor(props){
        super(props)
        this.state = {
            search : "",
        }
    }

    genericSynchronize(event){
        const { value} = event.target;
        this.setState({search:value})
        this.props.searchFood(value);
        
    }

    render(){

        return(
               <div>
                    <h1>Search food : </h1>
                    <form >
                    <input onChange={event => this.genericSynchronize(event)} value = {this.state.search} type="text" name="search" placeholder="Search"/>
                    </form>
               </div>
        )
    }
}

export default Search;