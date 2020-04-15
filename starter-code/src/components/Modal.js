import React, {Component} from 'react';

class Modal extends Component {
  render() {
    const {title, children, closeModal, status} = this.props;
    return (
      <div className={"modal " + status} >
        <div className="modal-background" onClick={closeModal} />
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">{title}</p>
            <button className="delete" onClick={closeModal} />
          </header>
          <section className="modal-card-body">
            <div className="content">
              {children}
            </div>
          </section>
          <footer className="modal-card-foot">
            <a className="button" onClick={closeModal}>Cancel</a>
          </footer>
        </div>
      </div>
    );
  }
}

export default Modal;