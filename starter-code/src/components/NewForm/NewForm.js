import React, { Component } from 'react';

class NewForm extends Component {
  render() {
    return (
      <form>
        <label>name</label>
        <input className='input' autoComplete='off' type='text' name='newItemName' value={this.props.newItemName} onChange={this.props.updateNewItem}></input>
        <label>number of calories</label>
        <input className='input' autoComplete='off' type='text' name='newItemCal' value={this.props.newItemCal} onChange={this.props.updateNewItem}></input>
        <label>image url</label>
        <input className='input' autoComplete='off' type='text' name='newItemUrl' value={this.props.newItemUrl} onChange={this.props.updateNewItem}></input>
        <button type='submit' onClick={this.props.addNewItemToList }>Add to list</button>
      </form>
    )
  }
}
export default NewForm