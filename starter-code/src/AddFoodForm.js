class AddFoodForm extends React.Component {
    state = {
        foodName: '',
        url:'',
        calories:''
    }
  
    handleChange = (event) => {
        this.setState({
          [name]: event.target.name,
        });
    }
  
    handleSubmit = (event) => {
      alert('A name was submitted: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" name="foodName" value={this.state.foodName} onChange={this.handleChange} />
          </label>

          <label>
            Image url:
            <input type="text" name="url" value={this.state.url} onChange={this.handleChange} />
          </label>

          <label>
            calories:
            <input type="text" name="calories" value={this.state.calories} onChange={this.handleChange} />
          </label>

          <input type="submit" value="Submit" />
        </form>
      );
    }
  }