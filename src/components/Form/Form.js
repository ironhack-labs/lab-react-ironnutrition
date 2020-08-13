import React, {useState} from 'react';

const Form = (props) => {

    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState(0);
    const [image, setImage] = useState('');
    const [calories, setCalories] = useState(0);

    const classResult = `modal ${props.isActive ? 'is-active' : ''}`

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if(name === '' || image === '' && quantity === 0 || calories === 0){
            return;
        }

        props.handleNewProduct(
            {
                name,
                quantity,
                image, 
                calories
            }
        )
        const refModal = e.currentTarget.getAttribute('data-target')
        document.querySelector(`.${refModal}`).classList.remove('is-active')
    }

    const handleModalState = () => {
        let isModal = false;
    }

    const handleInput = (e) => {
        let {value, name} = e.target;
        const nameConvesion = name.split('').map((letter,i) => (i===0) ? letter.toUpperCase() : letter).join('');
        eval('set'+nameConvesion)(value)
    }

    return (
        <div className={classResult}>
            <div className="modal-background"></div>
            <div className="modal-content">
                <div className="box modal_box has-text-left">
                    <h2 className="title">Add a new product</h2>
                    <form name="addFood">
                        <div className="columns">
                            <div className="column">
                                <div className="field">
                                    <label className="label">Name</label>
                                    <div className="control">
                                        <input className="input" type="text" name="name" placeholder="Introduce your product name" onChange={(e) => handleInput(e)} />
                                    </div>
                                </div>
                            </div>
                            <div className="column">
                                <div className="field">
                                    <label className="label">Number</label>
                                    <div className="control">
                                        <input className="input" type="number" name="quantity" onChange={(e) => handleInput(e)} />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="columns">
                            <div className="column">
                                <div className="field">
                                    <label className="label">Calories</label>
                                    <div className="control">
                                        <input className="input" type="number" name="calories" onChange={(e) => handleInput(e)}/>
                                    </div>
                                </div>
                            </div>
                            <div className="column">
                                <div className="field">
                                    <label className="label">Image</label>
                                    <div className="control">
                                        <input className="input" type="text" name="image" placeholder="Introduce an url" onChange={(e) => handleInput(e)}/>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <button className="button is-primary" type="submit" data-target="modal" onClick={(e) => handleSubmit(e)}>Add product</button>
                    
                    </form>
                </div>
            </div>
            <button className="modal-close is-large" aria-label="close"></button>
        </div>
    )
}

export default Form;