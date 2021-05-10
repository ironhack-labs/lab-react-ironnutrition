import React, { Component } from 'react'

export default class Form extends Component {
    
  state = {
    fields: {
      name: '',
      calories: '',
      
      
      },
      
    };
    
    handleSubmit(event) {
        event.preventDefault();
    
        this.props.addFood(this.state.fields);
        this.setState({
            fields: {
                name: '',
                calories: '',
                
                
            }
        })
        this.props.toggleForm();
    }
  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      fields: {
        ...this.state.fields,
        [name]: value
      }
    });
  }
  
    render() {
        const { fields } = this.state
    return (<form onSubmit={(e) => this.handleSubmit(e)} style={{ marginBottom: 50 }} >
        <div className="form-item">
          <label htmlFor="name">Name: </label>
          <input   type="text" name="name" value={fields.name} onChange={(e) => this.handleChange(e)} />
          
        </div>
        <div className="form-item">
          <label htmlFor="calories">Calories: </label>
          <input type="text" name="calories" value={fields.calories} onChange={(e) => this.handleChange(e)} />
          
        </div>
       
        
        <button  type="submit">Create food</button>
    </form>
    )
  }
}
