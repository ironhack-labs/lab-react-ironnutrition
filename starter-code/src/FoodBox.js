import React from 'react';

class FoodBox extends React.Component {

    changeFormData (e, key) {
        const newState = {...this.state}
        newState[key] = e.target.value

        console.log(e.target.value)

        this.setState(newState);
    }

    collectFoodInfo(e) {
        e.preventDefault();

        this.setState({
            ...this.state,
        }, function () {
            this.props.newBook(this.state)
        })
    }

    render() {
        return (
            <div className = "box" >
                <article className="media">
                    <div className="media-left">
                        <figure className="image is-64x64">
                            <img src={this.props.image} alt="image" />
                        </figure>
                    </div>
                    <div className="media-content">
                        <div className="content">
                            <p>
                                <strong>{this.props.name}</strong> <br />
                                <small>{this.props.calories} cal</small>
                            </p>
                        </div>
                    </div>
                    <div className="media-right">
                        <div className="field has-addons">
                            <div className="control">
                                <input
                                    className="input"
                                    type="number"
                                    value={this.props.quantity}
                                    /*onChange={(e) => this.changeFormData(e)}*/
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
                </div >
        )
    }
}

export default FoodBox;
