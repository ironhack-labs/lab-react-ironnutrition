import React from 'react';

class SearchBar extends React.Component {
    state = {
        searchText: '',
        error: true,
        touch: false
    }

    handleChange = (e) => { 
        this.setState({
            [e.target.name]: e.target.value,
            error: (e.target.value.length < 3 )
        })
    }

    handleBlur = (e) => {
        this.setState({ touch: true })
    }
    
    handleSubmit = (e) => {
        e.preventDefault()

        this.props.onSearch(this.state.searchText)
    }

    render() {
        return (
        <div className="SearchBar row mb-4" >
            <div className="col-8">
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <input type="text"className="form-control" style={{width: '100%'}}
                        name="searchText"
                        autoComplete="off"
                        value={this.state.searchText}
                        onChange={this.handleChange}
                        onBlur={this.handleBlur}
                        />

                        {this.state.touch && this.state.error && (
                            <div style={{color: 'red'}}>
                                Invalid field
                            </div>
                        )}

                    </div>
                    <button type="submit" className="btn btn-primary" disabled={this.state.error}>Search</button>
                </form>
            </div>
        </div>
        )
    }
}

export default SearchBar;