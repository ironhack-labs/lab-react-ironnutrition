
import React, { Component } from 'react';

class Search extends Component {

  state = {
    search: '',
  }
  handleChange = (e) => {
      this.setState({search : e.target.value});
      this.props.search(e.target.value);
  }

  handleSubmit =  (e) =>{
    
    this.props.search(this.state.search)
 
    
  }


  render() {

    return(

<div>
<div className="field has-addons">
  <div className="control">
    <input className="input" type="text" placeholder="Find " value={this.state.search} onChange={this.handleChange}/>
  
  </div>
  <div className="control">
    <a className="button is-info" onClick = {() => {this.handleSubmit()}}>
      Search
    </a>

  </div>
</div>
</div>

  )}
  
}
export default Search