import React, {Component} from 'react'


class AddFood extends Component {
  state = {
    active: false,
    name: '',
    calories:'',
    image:'',
    quantity:''
  }

  handleClickAdd = () => {
    this.setState({
      active: !this.state.active,
    })
  }

  handleClickSubmit =(e) => {
    this.setState({
      [e.target.name] : e.target.value,
      active: !this.state.active
    })
  }

  render() {
    return (
      <div className='m-4'>
        <div className={this.state.active ? 'd-none' : '' }>
          <button type="button" className="btn btn-primary" onClick = {this.handleClickAdd}>Add Food</button>
        </div>
        <div className={`w-25 ml-auto mr-auto mt-4 ${this.state.active? '' : 'd-none'}`}>
          <form>
            <div className="form-group row">
              <label className ="col-sm-2 col-form-label">Name</label>
              <div className="col-sm-10">
                <input type="text" name='name' className="form-control" placeholder="Enter name"/>
              </div>
            </div>
            <div className="form-group row">
              <label className = "col-sm-2 col-form-label">Calories</label>
              <div className="col-sm-10">
                <input type="text" name='calories' className="form-control" placeholder="Enter calories"/>
              </div>
            </div>
            <div className="form-group row">
              <label className = "col-sm-2 col-form-label">Image</label>
              <div className="col-sm-10">
                <input type="text" name='image' className="form-control" placeholder="Upload an image"/>
              </div> 
            </div>
            <button type="submit" className="btn btn-primary" onClick = {this.handleClickSubmit}>Submit</button>
          </form>
        </div>
        <div>{JSON.stringify(this.state)}</div>
      </div>

    )
  }
}

export default AddFood