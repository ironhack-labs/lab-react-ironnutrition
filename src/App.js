import React from 'react';
import './App.css';
import Food from './components/Food'
import Modal from './components/modal'
import Input from './components/Input'


export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = ({
      Search : ""
    })
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  render() {
    return (
      <div className="App">
        <h1 className="title">Iron Nutrition</h1>
       <div>
       <Input name="Search" value={this.state.Search} onChange={this.handleChange} type="text"/>
       <Modal />
        <Food/>
       </div>
      </div>
    );
  }
}

