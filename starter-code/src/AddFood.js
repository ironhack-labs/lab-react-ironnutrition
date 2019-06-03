import React from  'react'


class AddFood extends React.Component {
    state = {
        touch: false,
        foodText: '',
        imgURL: '',
        calories: '',
    }

    handleChange = (e) => {
        this.setState({
          [e.target.name]: e.target.value
        })
    }
    
    handleBlur = (e) => {
        this.setState({
          touch: true
        })
    }
   
    handleSubmit = (e) => {
        e.preventDefault()

        this.props.addFood(this.state) 

        this.setState({
          touch: false,
          foodText: '',
          imgURL: '',
          calories: ''
        })
    }

        render(){
            return (
                <div className="AddFood" style={{'margin-bottom': '5%'}}>
                    <button className="btn btn-primary btn-small" onClick={this.handleBlur} disabled={this.state.touch}>Add Food</button>
                    
                    {this.state.touch && 
                    <form onSubmit={this.handleSubmit} style={{'margin-top': '2%'}}>
                        <div className="form-group" style={{width: '50%'}}>
                            <input type="text" className="input " id="FoodName" name="name" value={this.state.foodText} onChange={this.handleChange} placeholder="Name" />
                        </div>
                        <div className="form-group" style={{width: '50%'}}>
                            <input type="number" className="input" id="NumberOfCalories" name="calories" value={this.state.calories} onChange={this.handleChange} onBlur={this.handleBlur}placeholder="Calories" />
                        </div>
                        <div className="form-group" >
                            <input type="file" className="form-control-file" id="image" name="imgURL" value={this.state.imgURL} onChange={this.handleChange} onBlur={this.handleBlur} />
                        </div>
                        <button type="submit" className="btn btn-success" style={{'margin-top': '2%', 'margin-left': '50%'}}>Submit</button>
                    </form>}
                </div>
            )
        }
        
  }
  
  export default AddFood