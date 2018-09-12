import React from 'react'
import contacts from './contacts.json'
import Actor from './Actor'

class Application extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      actors: []
    }

    this._putActor = this._putActor.bind(this)
    this._sortActor = this._sortActor.bind(this)
    this._sortPop = this._sortPop.bind(this)
    this._deleteActor = this._deleteActor.bind(this)

  }

  componentDidMount() {
    this._createActor()
  }

  render() {

    console.log(contacts)

    const mappedActors = this.state.actors.map((actor, index) => (
      <Actor
        pictureUrl={actor.pictureUrl}
        name={actor.name}
        popularity={actor.popularity}
        key={index}
        index={index}
        deleteActor={this._deleteActor}
      />
    ));

    return (
      <div className="application">
        <h1>IronContacts</h1>
        <button onClick={this._putActor}>Add Randome Contact</button>
        <button onClick={this._sortActor}>Sort by Name</button>
        <table><tbody>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Action</th>
          </tr>
          {mappedActors}
        </tbody>
        </table>
      </div>
    )
  }

  _createActor() {
    const firstAct = [];
    for (let i = 0; i < 5; i++) {
      firstAct.push(contacts[i]
      )
    }
    this.setState({
      actors: firstAct
    })
  }

  _randomNum() {
    const min = 5;
    const max = contacts.length;
    return Math.floor(Math.random() * Math.floor(max - min)) + min
  }

  _putActor() {
    const newActor = contacts[this._randomNum()]
    this.setState({
      actors: [...this.state.actors, newActor]
    })
    console.log(this.state.actors);
  }

  _compareName(a, b) {
    if (a.name > b.name) {
      return 1;
    } else if (a.name < b.name) {
      return -1;
    } else {
      return 0;
    }

  }

  _sortActor() {

    this.setState({
      actors: this.state.actors.sort(this._compareName)
    })
    console.log(this.state.actors)
  }

  _comparePop(a, b) {
    if (a.popularity > b.popularity) {
      return -1;
    } else if (a.popularity < b.popularity) {
      return 1;
    } else {
      return 0;
    }

  }

  _sortPop() {
    this.setState({
      actors: this.state.actors.sort(this._comparePop)
    })
  }

  _deleteActor(index) {
    console.log(index)
    const array = [...this.state.actors]
    array.splice(index, 1)
    this.setState({
      actors: array
    })
  }
}


////// first iteration for App
<Food
  image={this.state.foods.image}
  name={this.state.foods.name}
  calories={this.state.foods.calories}
/>