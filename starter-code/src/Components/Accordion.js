import React, {
    Component
} from 'react';


class Accordion extends Component {
    state = {
    name: "",
    calories: 0,
    image: "",
    quantity: 0
    }
 
  updateForm(e,field){
      this.setState({
          ...this.state,
          [field]: e.target.value
      });
  }
 

    render() {
        return (
          <div>
            <form>
              <input
                type="text"
                value={this.state.name}
                onChange={e => this.updateForm(e, "name")}
              />
              <input
                type="number"
                value={this.state.calories}
                onChange={e => this.updateForm(e, "calories")}
              />
              <input
                type="text"
                value={this.state.image}
                onChange={e => this.updateForm(e, "image")}
              />
              <input
                type="submit"
                value={"Send form"}
                onClick={e => this.props.clickToSubmit(e, this.state)}
              />
            </form>
          </div>
        );
    }
}
export default Accordion 