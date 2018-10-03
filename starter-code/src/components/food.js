import React, { Component } from 'react';
import foods from '../foods.json'

const Food = ({ idx }) => {
    return (
        <div className="box">
            <article className="media">
                <div className="media-left">
                    <figure className="image is-64x64">
                        <img src={foods[idx].image} />
                    </figure>
                </div>
                <div className="media-content">
                    <div className="content">
                        <p>
                            <strong>{foods[idx].name}</strong> <br />
                            <small>400 cal</small>
                        </p>
                    </div>
                </div>
                <div className="media-right">
                    <div className="field has-addons">
                        <div className="control">
                            <input
                                className="input"
                                type="number"
                                value="1"
                            />
                        </div>
                        <div className="control">
                            <button className="button is-info">
                                +
          </button>
                        </div>
                    </div>
                </div>
            </article>
        </div>
    )
}

export default class FoodsList extends Component {
    constructor() {
        super();
        this.state = {
            list: foods,
            food: ''
        }
    }



    filterByInput(food) {
        food = this.state.food;
        
        let filtered = this.state.list.map(e => {
            if(e.name.includes(food)) {
                return e
            } else {
                return 'bad'
            }
        })

        this.state.list = filtered;

        return filtered.map((e, i) => {
            return <Food idx={i}/>
        })
        
    }

    render() {
        let { food } = this.state;
        return (
            <div>
                <input type="text" value={food} placeholder='Search 4 Food' onChange={(e) => this.setState({ food: e.target.value })} />

                {
                    this.filterByInput()
                }
            </div>
        );
    }
}

/*class DynamicList extends Component {
    constructor() {
        super()
        this.state = { celebrities: contacts.splice(0, 5) }
    }

    addRandomCeleb() {
        const randomCeleb = Math.floor(Math.random() * contacts.length)
        console.log(contacts[randomCeleb]);
        this.state.celebrities.unshift(contacts[randomCeleb])
        this.setState({ celebrities: this.state.celebrities })
    }

    sortByName() {
        console.log(this.state.celebrities);
        let copy = this.state.celebrities.sort((a,b)=> {
             return a.name.localeCompare(b.name) 
        })
        this.setState({ celebrities: copy })
    }

    deleteCeleb (idx) {
        this.state.celebrities.splice(idx,1)
        this.setState({celebrities:this.state.celebrities})
    }

    render() {
        return (
            <div>
                <div style={{ background: 'red', width: 50, height: 50 }} onClick={() => this.sortByName()}>sort by name</div>
                <br/>
                <div style={{ background: 'blue', width: 50, height: 50 }} onClick={() => this.addRandomCeleb()}>add random celeb</div>
                <br/>
                <TableOfCelebrities datasrc={this.state.celebrities} del={this.deleteCeleb}/>
            </div>
        );
    }
}
*/


