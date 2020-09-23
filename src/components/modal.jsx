import React from 'react'
import Input from './Input'
import File from './File'
import foods from '../foods.json';



export default class Modal extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        mood: false,
        Name: "",
        Calories: "",
        Image: ""
      }
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    viewModal() {
      this.setState((state) => ({
        mood: !this.state.mood
      }))
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const newFood = {
            "name" : this.state.Name,
            "calories": this.state.Calories,
            "image" : this.state.Image,
            "quantity": 0
        }
        foods.push(newFood)
    }
  
    render() {
      return (
        <div>
            <button className="button is-success" onClick={() => this.viewModal()}>Add Food</button>
            {this.state.mood &&
            <div className="modal is-active is-medium">
                <div className="modal-background"></div>
                <div className="modal-card">
                <header className="modal-card-head">
                    <p className="modal-card-title">ADD FOOD</p>
                    <button onClick={() => this.viewModal()} className="delete" aria-label="close"></button>
                </header>
                    <form onSubmit={this.handleSubmit}>
                <section className="modal-card-body">
                    <Input name="Name" value={this.state.Name} onChange={this.handleChange} type="text"/>
                    <Input name="Calories" value={this.state.Calories} onChange={this.handleChange} type="number" />
                    <File name="Image" value={this.state.Image} onChange={this.handleChange} />
                </section>
                <footer className="modal-card-foot">
                    <button type="submit" className="button is-success">Save changes</button>
                    <button onClick={() => this.viewModal()} className="button">Cancel</button>
                </footer>
                    </form>
                </div>
            </div>
            }
        </div>
      );
    }
  }
  
