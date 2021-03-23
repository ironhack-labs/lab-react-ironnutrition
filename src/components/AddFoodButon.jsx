import React from 'react'
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

import '../assets/Modal.css'

const AddFoodButton = () => {

    const [modalIsOpen,setIsOpen] = React.useState(false);

    const onsubmit = (event)=>{
        event.preventDefault()
        console.log("add food")
    }

    const openModal = () => setIsOpen(true)
      
    const closeModal = () => setIsOpen(false);
      


    return (
        <div>
            <button onClick={openModal}>Add food</button>
            <Modal className="modal__content" isOpen={modalIsOpen} onRequestClose={closeModal} className="Modal" contentLabel="Example Modal">
                <h2>Hello</h2>
                <button onClick={closeModal}>close</button>
                <form>
                    <input type="text" name="name" />
                    <input type="text" name="calories" />
                    <input type="file" />
                    <button onClick={onsubmit}>Submit</button>
                </form>
            </Modal>
        </div>

    )
}

export default AddFoodButton