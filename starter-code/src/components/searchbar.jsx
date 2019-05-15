import React, {Component} from 'react'




class Searchbar extends Component {

  render() {
    return (
      <div class="searchhold">
      <form>
        <div class="field has-addons">
  <div class="control">
    <input onChange={this.props.Search} class="input" type="text" placeholder="Search Foods" />
  </div>
  <div class="control">
    <a class="button is-info">
      Search
    </a>
  </div>
</div>
      </form>
      </div>
    )
  }
}

export default Searchbar