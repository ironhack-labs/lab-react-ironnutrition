import React from 'react';
import './addFoodForm.css';
import 'bulma/css/bulma.css';
import foods from '../../foods.json';
import FoodBox from '../foodbox/foodBox';

export default class AddFoodForm extends React.Component {
    constructor(props){
    super()
    this.state = {
        name:'',
        calories:'',
        image:'',
        quantity: 0,
        isFormVisible: true,
    }
}

    onClickHandler = evt => {
        evt.preventdefault();
        this.props.addNewFood(this.state);
        this.setState({
            name:'',
            calories:'',
            image:''
        })
    }

    listenToInputChange = (evt) => {
        this.setState({[evt.target.name]: evt.target.value})
    }

    notSeeForm = () => {
        this.setState({
            isFormVisible: false
        })
    }

    render (){
        if(this.state.isFormVisible === true){
        return (
            <div>
                <h2>Add New Food</h2>
                <form onSubmit={this.onClickHandler}>
                <input type="text" name="name" placeholder="Name of food" onChange={(evt) => this.listenToInputChange(evt)} defaultValue={this.state.name}/>
                <input type="text" name="calories" placeholder="Number of calories" onChange={(evt) => this.listenToInputChange(evt)} defaultValue={this.state.calories}/> 
                <input type="text" name="image" placeholder="Image Url" onChange={(evt) => this.listenToInputChange(evt)} defaultValue={this.state.image}/>
                <button onClick={() => this.notSeeForm()} type="submit">Submit</button> 
                </form>
            </div>
        )
    }
}}