import React from 'react';
import Input from './Input';
import File from './File';

export default class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.reference = props.reference
  }

  render() {

    return (
      <div>
        <button className="button is-success" onClick={this.props.view}>
          Add Food
        </button>
        {this.props.mood && (
          <div className="modal is-active is-medium">
            <div className="modal-background"></div>
            <div className="modal-card">
              <header className="modal-card-head">
                <p className="modal-card-title">ADD FOOD</p>
                <button
                  onClick={this.props.view}
                  className="delete"
                  aria-label="close"
                ></button>
              </header>
              <form onSubmit={this.props.submit} encType="multipart/form-data">
                <section className="modal-card-body">
                  <Input
                    name="Name"
                    value={this.props.Name}
                    onChange={this.props.change}
                    type="text"
                  />
                  <Input
                    name="Calories"
                    value={this.props.Calories}
                    onChange={this.props.change}
                    type="number"
                  />
                  <File
                    name="Image"
                    // value={this.props.Image}
                    // onChange={this.props.change}
                    reference={this.props.reference}
                  />
                </section>
                <footer className="modal-card-foot">
                  <button type="submit" className="button is-success">
                    Save changes
                  </button>
                  <button onClick={this.props.view} className="button">
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
