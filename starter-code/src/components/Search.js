import React,{Component} from 'react'

class Search extends Component{
    constructor(props) {
        super(props)
        this.filterHandle= this.filterHandle.bind(this)
    }
    

    filterHandle(e) {
        this.props.filterFood(e.target.value)
    }

    render() {
        return(
            <input type='text' onChange={this.filterHandle}/>
        )
    }
}

export default Search;