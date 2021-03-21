import React from 'react'


class SearchBar extends React.Component {

    handleChange = (event) => {
        let inputText = event.target.value;
        this.props.searchText(inputText)
    }

    render(){
    return (
        <div>

            <form>

                <input onChange={this.handleChange}
                type="text"
                placeholder="Search..."
                />


            </form>
            
        </div>
    )

    }
}

export default SearchBar
