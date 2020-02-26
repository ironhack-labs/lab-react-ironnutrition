import React, {Component} from "react";



class SearchForm extends Component {

    state = {
        searchWord: ''
    }

    handleChange = (e) => {
        
        let {value} = e.target;
        
        this.setState({searchWord:value})
        this.props.filterFoodDisplay(value);
    
    }
    render () {
        return (

            <div>
                <form >

                <input 
                    type="text"
                    name="searchWord"
                    value={this.state.searchWord}
                    onChange={this.handleChange}
                />
                

                </form>

            </div>

        )
    }

}

export default SearchForm;


