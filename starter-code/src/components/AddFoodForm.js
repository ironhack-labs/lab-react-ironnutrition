import React, {Component} from 'react';

class AddFoodForm extends Component {

  state = {
    'name': '',
    'calories': '',
    'image' : '',
  };

  handleInputChange = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    //validaciones...

    this.props.handleSubmit({quantity:0, ...this.state});
  };

  render() {
    const {name, calories, image} = this.state;
    return (
        <form onSubmit={this.handleSubmit}>
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input onChange={this.handleInputChange} className="input " type="text" name={'name'} value={name} />
            </div>
          </div>
          <div className="field">
            <label className="label">Calories</label>
            <div className="control">
              <input onChange={this.handleInputChange} className="input" type="number" name={'calories'} value={calories} />
            </div>
          </div>
          <div className="field">
            <label className="label">Image</label>
            <div className="control">
              <input onChange={this.handleInputChange} className="input" type="text" name={'image'} value={image} />
            </div>
          </div>
          <div className="field">
            <div className="control">
              <button className={'button is-link'}>Create</button>
            </div>
          </div>
        </form>
    );
  }
}

export default AddFoodForm;