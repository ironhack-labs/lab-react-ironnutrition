import React ,{Component}from 'react';
import './FormNewFood.css';
import Button from '../Button/Button';
import Input from '../Input/Input';


class FormNewFood extends Component{
    constructor(props) {
        super(props);
        this.state = {
            name:'',
            calories:'',
            image:''
        }
      }
    addNewFood = (e)=>{
        const {addFood} = this.props
        console.log(this.state)
        const newFood = {...this.state,quantity:0}
        addFood(newFood)
        this.setState({
            name:'',
            calories:'',
            image:''
        })
    }

    
    changeInputs = (evt)=> {
        this.setState({ [evt.target.name]: evt.target.value });
  
    }
    
    render(){
        return (
          <div class="control">
              <Input name='name' placeholder='Food Name' value={this.state.name} onChange={this.changeInputs} />
              <Input name='calories' placeholder='Quantity of Calories' type='number' value={this.state.calories} onChange={this.changeInputs}/>
              <Input name='image' placeholder='Image URL' value={this.state.image} onChange={this.changeInputs}/>
              <Button className='button is-info' method={this.addNewFood}>Submit</Button>
          </div>
        );
    }
}

export default FormNewFood;
