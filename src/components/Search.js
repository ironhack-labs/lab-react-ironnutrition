import React from 'react'

class Search extends React.Component {
    constructor() {
        super()
        this.state = {
            name: ''
        }
    }

    handleInputChange(e) {
        this.setState({ name: e.target.value }, () => this.props.searchFood(this.state))
    }

    render() {
        return (
            <div className="field">
                <label className="label">Search food</label>
                <div className="control">
                    <input className="input" type="text" name="name" value={this.state.name} onChange={e => this.handleInputChange(e)} />
                </div>
            </div>
        )
    }
}

export default Search