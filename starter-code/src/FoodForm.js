import React, {Component} from 'react';


export class FoodForm extends Component {
    constructor(){
        super()
        this.state = {
            name: '',
            calories: '',
            image: ''
        }
    }
    render(){
        return (
            <div>
      <form onSubmit={this.handleFormSubmit}>
          <label>Food:</label>
          <input type="text" name="name" value={this.state.name} />

          <label>Calories:</label>
          <input type="text" name="calories" value={this.state.calories} />

          <label>Image:</label>
          <img src={this.state.image} />
                    
          
          <input type="submit" value="Submit" />
      </form>
    </div>
        )


    }


}
export default FoodForm;


    // handleSubmit(){
    //     let { name, calories, image} = this.state;
//         if(title === '') return this.setState({error:'Empty title'});
//         if(director === '') return this.setState({error:'Empty director'});

//         if(title === "crepusculo") return this.setState({error:'Esta ni se te ocurra'});

//         console.log("FORM OK");
//         this.setState({error: '', title:'', director:''});
//         this.props.movieReady({title, director});
//     }

//     render(){
//         let { title, director, error} = this.state;
//         return (
//             <div>
//                 <p style={{color:"red"}}>{error}</p>
//                 <label>Titulo de la peli</label>
//                 <input type="text" value={title} onChange={(e) => this.setState({title:e.target.value})} />
//                 <label>Director</label>
//                 <input type="text" value={director} onChange={(e) => this.setState({director:e.target.value})}/>
//                 <button onClick={this.handleSubmit.bind(this)}>Add movie</button>
//             </div>
//         )
//     }
// }