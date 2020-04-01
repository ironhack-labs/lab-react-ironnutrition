import React, { Component } from 'react';

class AddNewFoods extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
			calories: '',
			image: '',
			quantity: '',
			show: false
		};
	}

	handleFormSubmit = (event) => {
		event.preventDefault();
		this.props.addTheFood(this.state);
		this.setState({
			name: '',
			calories: '',
			image: '',
            quantity: '',
            show: false
		});
	};

	handleChange = (event) => {
		let { name, value } = event.target;
		this.setState({ [name]: value });
    };
    

    showForm = () => {
        this.setState({show: !this.state.show})
    }

	render() {
        
        if(this.state.show){
            return(<div>
                <button onClick={() => this.showForm()}>Hide</button>       
                <form onSubmit={this.handleFormSubmit}>
                    <label>Name:</label>
                    <input type="text" name="name" value={this.state.name} onChange={(e) => this.handleChange(e)} />

                    <label>Calories:</label>
                    <input
                        type="text"
                        name="calories"
                        value={this.state.calories}
                        onChange={(e) => this.handleChange(e)}
                    />

                    <label>Quantity:</label>
                    <input
                        type="text"
                        name="quantity"
                        value={this.state.quantity}
                        onChange={(e) => this.handleChange(e)}
                    />

                    <label>Image:</label>
                    <input
                        type="file"
                        name="image"
                        value={this.state.image}
                        onChange={(e) => this.handleChange(e)}
                    />

                    <input type="submit" value="Submit" />
                </form>
            </div>

            )
        } else {
            return(

                <button onClick={() => this.showForm()}>Add New food</button>  
            )
        }
    }
}

     
    
 



				
			
		
	


export default AddNewFoods;
