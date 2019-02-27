import React, { Component } from 'react';

class AddOne extends Component {


    state = {
        user: {},
        errors: {},
        users: [],
        quanty: "",
    }

    handleSubmit = (e) => {
        e.preventDefault()
        let user = {
            username: e.target.username.value,
            email: e.target.email.value,
            tel: e.target.tel.value
        }
        this.setState({ user })
    }

    onChange = e => {
        let { user } = this.state
        user[e.target.name] = e.target.value
        this.setState({ user })
        //validar
        let errors = {}
        if (user.username && user.username.length < 7) {
            errors.username = "Te faltan"
        }
        if (user.email && !user.email.includes("@")) {
            errors.email = "Y el arroba?"
        }
        this.setState({ errors })
    }

    agregarUsuario = () => {
        let { user, users } = this.state
        let freeObject = { ...user }
        let array = [...users, { ...user }]
        this.setState({ users: array })
    }

    addQuanty = (e) =>{
        let {quanty}= this.state;
        quanty=e.target.value;
        this.setState({quanty});
      };

    render() {
        let { user, errors, addQuanty } = this.state
        return (
                <div className="box">
                    <article className="media">
                        <div className="media-left">
                        <figure className="image is-64x64">
                            <input onChange={this.onChange} placeholder="image url" name="image" type="text" />
                            <span style={{ color: "red" }}>{errors.image}</span>
                        </figure>
                        </div>
                        <div className="media-content">
                        <div className="content">
                            <p>
                                <input onChange={this.onChange} placeholder="nombre" name="username" type="text" />
                                <span style={{ color: "red" }} >{errors.name}</span>
                                
                                <input onChange={this.onChange} placeholder="number of calories" name="calories" type="number" />
                                <span style={{ color: "red" }}>{errors.calories}</span>
                            </p>
                        </div>
                        </div>
                        <div className="media-right">
                        <div className="field has-addons">
                            <div className="control">
                            <input className="input" type="number" onChange={addQuanty} />
                            </div>
                            <div className="control">
                            <button className="button is-info" onClick={this.agregarUsuario}>
                            ¡Agregar!
                            </button>
                            </div>
                        </div>
                        </div>
                    </article>
            </div>
        )
    }
}

export default AddOne