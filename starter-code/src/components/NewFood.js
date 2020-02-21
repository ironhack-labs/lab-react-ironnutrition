import React, { Component } from 'react'
import FoodInput from './FoodInput';
import FoodSelect from './FoodSelect';
import { roleOptions } from '../utils';

class Register extends Component {
    state = {
        paternalLastName: '',
        rfc: '',
        name: '',
        email: '',
        password: '',
        phoneNumber: '',
        disabled: true
    }

    handleChange = (e) => {
        let { name, value } = e.target; 
        this.setState({[name]: value}, this.checkIfReady)
    }

    checkIfReady = () => {
        let checkState = Object.assign({}, this.state);
        delete checkState.maternalLastName;
        delete checkState.disabled;
        let values = Object.values(checkState);
        let isReady = values.reduce((acu, current) => {
            console.log(acu, current)
            return acu && current;
        }, true);
        this.setState({disabled: !isReady});
    }

    sendInfo = () => {
        console.log(this.state);
    }

    render() {
        return (
            <div>
                <h1>Nuevo Alimento</h1>
                <p>Ingresa tus datos del alimento a registrar</p>
                <FoodInput label="Nombre(s)" type="text" name="name" placeholder="Andres" handleChange={this.handleChange}/>
                <FoodInput label="Primer Apellido" type="text" name="paternalLastName" placeholder="Cravioto" handleChange={this.handleChange}/>
                <FoodInput label="Segundo Apellido" type="text" name="maternalLastName" placeholder="Vélez" handleChange={this.handleChange}/>
                <FoodInput label="Email" type="email" name="email" placeholder="andres@email.com" handleChange={this.handleChange}/>
                <FoodInput label="Celular" type="number" name="phoneNumber" placeholder="5512232323" handleChange={this.handleChange}/>
                <FoodInput label="Contraseña" type="password" name="password" handleChange={this.handleChange}/>
                <h3>Ingresa el RFC con el que facturas</h3>
                <FoodInput label="RFC" type="text" name="rfc" handleChange={this.handleChange}/>
                {
                    this.state.rfc.length == 12 && 
                    <FoodSelect 
                        label="role"
                        name="role" 
                        handleChange={this.handleChange}
                        options={roleOptions}
                    />
                }
                <button disabled={this.state.disabled} onClick={this.sendInfo}>Submit</button>
            </div>
        )
    }
}

export default Register;