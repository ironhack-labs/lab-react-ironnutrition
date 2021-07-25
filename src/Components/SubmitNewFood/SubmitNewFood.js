import { Component } from "react";
import "./SubmitNewFood.css"
import foods from '../../Data/foods.json'

class SubmitNewFood extends Component {

    state = {
        name: '',
        calories: '',
        image: '',
        quantity: 0,
    }

    handleChanges = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    };


    addNewFood = async (event) => {
        await event.preventDefault();
        this.props.newFoods(this.state)
        this.setState({
            name: '',
            calories: '',
            image: '',
            quantity: 0,
        })
    }

    render() {
        return (
            <form className="form-new-food">
                <div class="field">
                    <label for="name" class="label">Nome</label>
                    <div class="control">
                        <input
                            type="text"
                            value={this.state.name}
                            onChange={this.handleChanges}
                            name="name"
                            placeholder="Digite o nome"
                            id="name"
                            class="input" />
                    </div>
                    <p class="help">Digite aqui o nome do alimento</p>
                </div>

                <div class="field">
                    <label class="label">Calorias</label>
                    <div for="calories" class="control">
                        <input id="calories"
                            class="input"
                            name="calories"
                            value={this.state.calories}
                            type="text"
                            placeholder="Digite as calorias"
                            onChange={this.handleChanges}
                        />
                    </div>
                    <p class="help">Digite aqui as calorias do alimento</p>
                </div>

                <div class="field">
                    <label for="image" class="label">Imagem</label>
                    <div class="control">
                        <input id="image"
                            class="input"
                            type="text"
                            name="image"
                            value={this.state.image}
                            placeholder="Digite a URL da imagem"
                            onChange={this.handleChanges}
                        />
                    </div>
                    <p class="help">Digite aqui a URL da imagem do alimento</p>
                </div>

                <div id="container-buttons" class="field is-grouped">
                    <div class="control">
                        <button class="button is-link" type="button"
                            onClick={(event) => { this.addNewFood(event) }}>Submit</button>
                    </div>
                </div>
            </form>
        );
    }
}

export default SubmitNewFood