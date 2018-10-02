import React, {
  Component
} from 'react';



class AddFood extends Component {

  constructor() {
    super();

    this.state = {
      name: "",
      calories: "",
      image: "",

    }
  }

  handleSubmit() {
    let {
      name,
      calories,
      image,
      error
    } = this.state;
    if (name === '') return this.setState({
      error: 'Empty name'
    });
    if (calories === '') return this.setState({
      error: 'Empty colories'
    });
    if (image === '') return this.setState({
      error: 'Empty image'
    });

    this.setState({
      error: '',
      name: '',
      calories: '',
      image: ''
    });
    this.props.newFood({
      name,
      calories,
      image
    });
  }

  render() {
    let {
      name,
      calories,
      image,
      error
    } = this.state;
    return ( <
      div >
      <
      p style = {
        {
          color: "red"
        }
      } > {
        error
      } < /p> <
      label > Food Name < /label> <
      input class = "input is-primary"
      type = "text"
      value = {
        name
      }
      onChange = {
        (e) => this.setState({
          name: e.target.value
        })
      }
      /> <
      label > Image < /label> <
      input class = "input is-primary"
      type = "text"
      value = {
        image
      }
      onChange = {
        (e) => this.setState({
          image: e.target.value
        })
      }
      /> <
      label > Calories < /label> <
      input class = "input is-primary"
      type = "number"
      value = {
        calories
      }
      onChange = {
        (e) => this.setState({
          calories: e.target.value
        })
      }
      /> <
      button onClick = {
        this.handleSubmit.bind(this)
      }
      className = "button is-info" > Add Food < /button>

      <
      /div>
    )
  }
}






export default AddFood;