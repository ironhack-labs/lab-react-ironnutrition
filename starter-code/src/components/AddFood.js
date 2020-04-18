import React, { Component } from 'react';
import 'bulma/css/bulma.css';


class AddFood extends Component {

    state = {
        name: '',
        calories: 0,
        image: '',
        quantity: 0
    }

    updateForm(e){
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value
        });
    }

    render() {
        const { name, calories, image } = this.state;
        return (
            <div className="field">
                <form>
                <label htmlFor="name">name</label>
                    <input className="input is-rounded"
                        name='name'
                        type="text"
                        value={name}
                        onChange={e => this.updateForm(e)}
                    />
                    <label htmlFor="calories">calories</label>
                    <input className="input is-rounded"
                        name='calories'
                        type="number"
                        value={calories}
                        onChange={e => this.updateForm(e)}
                    />
                    <label htmlFor="image">Image</label>
                    <input className="input is-rounded"
                        name='image'
                        type="text"
                        value={image}
                        onChange={e => this.updateForm(e)}
                    />
                    <input className="button is-link"
                        name = 'submit'
                        type="submit"
                        value={"submit"}
                        onClick={e => this.props.clickToSubmit(e, this.state)}
                    />
                </form>
            </div>
        );
    }
}

export default AddFood;