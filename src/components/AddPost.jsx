import React, { Component } from 'react';
import axios from 'axios';

export class AddPost extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      description: '',
      submited: false,
      saved: false,
    };
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  //HACIENDO EL POST CON AXIOS

  handleSubmit = (e) => {
    e.preventDefault();
    const body = {
      title: this.state.title,
      body: this.state.description,
    };

    //Renderizas el component despues de de guardar el pos

    this.setState({ submited: true });

    axios
      .post('https://jsonplaceholder.typicode.com/posts', body)
      .then((response) => {
        console.log('POST CREADO CON EXITO', response.data.id);
        this.setState({
          saved: true,
        });
      });
  };

  render() {
    //LLAMANDO AL RENDER
    console.log('rendering...');

    if (this.state.submited && !this.state.saved) {
      return <h1> ENVIANDO DATOS AL SERVIDOR</h1>;
    } else if (this.state.saved) {
      return <h1> DATOS GRABADOS CON ÉXITO</h1>;
    }

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          Title:
          <input
            type="text"
            name="title"
            value={this.state.title}
            onChange={this.handleChange}
          />
          Description
          <input
            type="text"
            name="description"
            value={this.state.description}
            onChange={this.handleChange}
          />
          <input type="submit" value="CREATE POST" />
        </form>
      </div>
    );
  }
}

export default AddPost;
