import React from 'react';
import Input from './Input';
import File from './File';

export default class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      name : "",
      calories : "",
      mood : false
    })
    this.fileInput = React.createRef();
  }
  handleSubmit = (e) => {
    e.preventDefault()
    const newFood = {
			name: this.state.name,
			calories: this.state.calories,
			image: this.fileInput.current.files[0].name,
			quantity: 0
    };

    this.setState({
      mood: false
    })
    
    this.props.submit(newFood)
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  viewModal = () => {
		this.setState((state) => ({
			mood: !this.state.mood
		}));
	}

  render() {

    return (
      <div>
        <button className="button is-success" onClick={this.viewModal}>
          Add Food
        </button>
        {this.state.mood && (
          <div className="modal is-active is-medium">
            <div className="modal-background"></div>
            <div className="modal-card">
              <header className="modal-card-head">
                <p className="modal-card-title">ADD FOOD</p>
                <button
                  onClick={this.viewModal}
                  className="delete"
                  aria-label="close"
                ></button>
              </header>
              <form onSubmit={this.handleSubmit} encType="multipart/form-data">
                <section className="modal-card-body">
                  <Input
                    name="name"
                    value={this.state.name}
                    onChange={this.handleChange}
                    type="text"
                  />
                  <Input
                    name="calories"
                    value={this.state.calories}
                    onChange={this.handleChange}
                    type="number"
                  />
                  <File
                    name="Image"
                    reference={this.fileInput}
                  />
                </section>
                <footer className="modal-card-foot">
                  <button type="submit" className="button is-success">
                    Save changes
                  </button>
                  <button onClick={this.viewModal} className="button">
                    Cancel
                  </button>
                </footer>
              </form>
            </div>
          </div>
        )}
      </div>
    );
  }
}
