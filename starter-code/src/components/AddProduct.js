import React, {Component}  from 'react';

export default class AddProduct extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      calories: 0,
      image: ""
    };
  }

  // al hacer submit enviamos al padre las nuevas props y ponemos de nuevo a cero el state

  handleFormSubmit = event => {
    event.preventDefault();
    this.props.addNewFood(this.state);
    this.setState({ 
      name: "",
      calories: 0,
      image: ""  
     });
  };

  handleChange = (e) => (
    this.setState({
      [e.target.name]: e.target.value,
      [e.target.calories]: e.target.value,
      [e.target.image]: e.target.value
    })
  )

  render (){
    const { name, image, calories } = this.state;
    const enabled = name.length > 0 && image.length > 0 && calories > 0;
    return (
      <article className="media">
      <form onSubmit={this.handleFormSubmit}>
          <div className="field is-horizontal">
            <div className="box">
                <div className="media-content">
                  <div className="content">
                    <label>Name</label>
                    <input className="input" name="name" 
                    type="text" placeholder="Name input" 
                    value={this.state.name}
                    onChange={e => this.handleChange(e)}>
                    </input>
                  </div>              
                </div>
                <div className="media-content">               
                  <div className="control">
                    <label>Image</label>
                      <input className="input" name="image"
                      type="text" placeholder="Image input" 
                      value={this.state.image}
                      onChange={e => this.handleChange(e)}>
                      </input>
                  </div>                
                </div>
                <div className="media-content">                 
                    <div className="control">
                      <label>Calories</label>
                        <input className="input" name="calories" 
                        type="number" placeholder="0" 
                        value={this.state.calories}
                        onChange={e => this.handleChange(e)}>
                        </input>
                    </div>                 
                </div>
                <div className="control">
                  <button disabled={!enabled}className="button is-info">Add new food</button>
                </div>
              </div>
            </div>
        </form>
    </article>                        
    )
  }
}