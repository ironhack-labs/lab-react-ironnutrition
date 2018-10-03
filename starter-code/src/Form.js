import React, {Component} from 'react';

export class Form extends Component {
    constructor(){
        super()
        this.state = {
            name: '',
            calories: '',
            image: ''
        }
    }

    handleSubmit(){
        let { name, calories, image, error} = this.state;
        if(name === '') return this.setState({error:'Empty name'});
        if(calories === '') return this.setState({error:'Empty calories'});
        if(image === '') return this.setState({error:'Empty image'});

        this.setState({name:'', calories:'', image: ''});
        this.props.onSubmit(this.state);
    }

    render(){
        let { name, calories, image, error} = this.state;
        return (
            <div>
                <p style={{color:"red"}}>{error}</p>
                <label>Name</label>
                <input type="text" value={name} onChange={(e) => this.setState({name:e.target.value})} />
                <label>Calories</label>
                <input type="text" value={calories} onChange={(e) => this.setState({calories:e.target.value})}/>
                <button onClick={this.handleSubmit.bind(this)}>Submit food</button>
            </div>
        )
    }
}

export default Form