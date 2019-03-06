import React from 'react';

class Addfood extends React.Component {

    constructor (props){
        super (props);
        this.state = {
            name: "",
            calories: "",
            image: "",
            quantity: ""
          };
      }

    handleChange(event) {
        let { name, value } = event.target;
        if (name === "calories" || name === "quantity") {
          value = parseInt(value);
        }
        this.setState({ [name]: value });
    }

    handleFormSubmit = (e) => {
        e.preventDefault();
        this.props.addNewFood(this.state);
    }


    render() {
      return (
    <div>
        <form onSubmit={this.handleFormSubmit}>
                <div className="field">
                <label className="label">Name:</label>
                <input className="input" type="text" name="name" placeholder="" onChange={(e) => this.handleChange(e)} />
                </div>

                <div className="field">
                <label className="label">Number of calories:</label>
                <input className="input" type="text" name="calories" placeholder="" onChange={(e) => this.handleChange(e)} />
                </div>
                
                <div className="field">
                <label className="label">Image</label>
                <input className="input" type="text" name="image" placeholder="" onChange={(e) => this.handleChange(e)} />
                </div>

                <div class="field">
                <label class="label">Quantity:</label>
                <div class="control">
                <input className="input" type="text" name="quantity" placeholder="1" onChange={e => {this.handleChange(e);}}/> 
            
                </div>
                </div>
                
                <button className="button" type="submit">Ajouter</button>
        </form>
    
            
    </div>

      );
    }
  }
  
  export default Addfood;