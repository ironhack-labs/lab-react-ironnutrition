import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props)

    this.state = {

      field: ''
    }

  }
  //setState es asincrono, así que agregamos un callback

  handleChange = e => {
    let { name, value } = e.target
    this.setState({ [name]: value }, () => {
      this.props.search(this.state.field)
    })
  }

  render() {

    return (
      <form>
        <label>Search
          <input type='text' name='field' value={this.state.field} onChange={e => this.handleChange(e)} />
        </label>
      </form>
    )
  }

}

export default Search