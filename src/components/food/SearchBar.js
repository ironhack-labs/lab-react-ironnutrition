import React, {Component} from 'react'

class SearchBar extends Component {

        state = {
            food: {
            name : '',
            }
        }
   

    handleSearchBar(event) {
     
        const {name, value} = event.target
        this.setState((prevState) => ({
            ...prevState,
            [name]:value,         
        }))

    }


    render() {

        const {name, onClickSearch} = this.props

        return (
            <div className="Searchbar">
            <div className="field is-grouped">
                <p className="control has-icons-left has-icons-right">           
                    <input name="searchbar" className="input" type="text" placeholder="Search for a food" value={name} onChange = {(event) => this.handleSearchBar(event), onClickSearch} />
                    <span className="icon is-small is-right"><i class="fas fa-search"></i></span>
                </p>            
            </div>
            </div>
            

        )
    }
}

export default SearchBar