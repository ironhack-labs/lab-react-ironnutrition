import React from 'react'
import foods from '../foods.json'
import InputWithLabel from './form/InputWithLabel'

export default class FoodBox extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            name: "Insert a new food",
            calories: "Insert number of calories",
            picture: React.createRef(),
            viewForm: false,
            display: 'none',
            showCards: foods,
            search: 'Search food'
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleSearch = this.handleSearch.bind(this)
    }

    showForm = () => {
        if (!this.state.viewForm) {
            this.setState({viewForm: true, display: 'block'})
        } else {
            this.setState({viewForm: false, display: 'none'})
        }
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    handleSubmit(e) {
        e.preventDefault()

        this.state.showCards.push({
            name: this.state.name,
            calories: this.state.calories,
            // image: this.state.picture.current.files[0].name
            image: './logo512.png'
        })

        console.log(this.state.picture.current.files[0])

        console.log(this.state.showCards)

        this.setState(this.state.showCards)
        this.setState({viewForm: false, display: 'none'})
        this.setState({
            name: "Insert a new food",
            calories: "Insert number of calories",
            picture: React.createRef()
        })
        document.querySelectorAll('input').forEach(el => el.value = '')
    }

    handleSearch(e) {
        let text = e.target.value
        const data = this.state.showCards
        const newData = data.filter(function (item) {
            const itemDataName = item.name.toUpperCase()
            const itemDataCals = item.calories
            const campo = itemDataName + " " + itemDataCals
            const textData = text.toUpperCase()
            return campo.indexOf(textData) > -1
        })
        this.setState({
            showCards: newData,
            text: text
        })
        if (text === '') {
            this.setState({
                showCards: foods
            })
        }
    }


    render() {
        const getCards = this.state.showCards.map((food, i) =>
            <div className="box" key={i}>
                <article className="media">
                    <div className="media-left">
                        <figure className="image is-64x64">
                            <img src={food.image} alt="" />
                        </figure>
                    </div>
                    <div className="media-content">
                        <div className="content">
                            <p>
                                <strong>{food.name}</strong> <br />
                                <small>{food.calories} cal</small>
                            </p>
                        </div>
                    </div>
                    <div className="media-right">
                        <div className="field has-addons">
                            <div className="control">
                                <input className="input" type="number" defaultValue="1" />
                            </div>
                            <div className="control">
                                <button className="button is-primary">+</button>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        )

        return (
            <div className="columns">
                <div className="column">
                    <div className="button-col">
                        <button className="button is-primary add-btn" onClick={() => this.showForm()}>Add new info</button></div>
                    <div className="form" style={{display: this.state.display}}>
                        <form onSubmit={this.handleSubmit}>
                            <InputWithLabel
                                label="title"
                                name="name"
                                type="text"
                                placeholder={this.state.name}
                                onChange={this.handleChange}
                            />
                            <InputWithLabel
                                label="calories"
                                name="calories"
                                type="number"
                                placeholder={this.state.calories}
                                onChange={this.handleChange}
                            />
                            <label className="file-label">
                                <input className="file-input" type="file" name="resume" ref={this.state.picture} />
                                <span className="file-cta">
                                    <span className="file-icon">
                                        <i className="fas fa-upload"></i>
                                    </span>
                                    <span className="file-label">Choose a file…</span>
                                </span>
                                <span className="file-name">Screen Shot 2017-07-29 at 15.54.25.png</span>
                            </label>
                            <button className="button is-primary" type="submit">Enviar</button>
                        </form>
                    </div>
                    <div className="search">
                        <InputWithLabel
                            label="search"
                            name="search"
                            type="text"
                            placeholder={this.state.search}
                            onChange={(text) => this.handleSearch(text)}
                        />
                    </div>
                    <div>{getCards}</div>
                </div>
                <div class="column"><h1 className="title">Today's Food</h1></div>
            </div>
        )
    }
}


