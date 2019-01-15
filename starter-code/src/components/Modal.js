import React, { Component } from 'react';
import cx from 'classnames';

export class Modal extends Component {
    constructor() {
        super();
        this.state = {
            isActive: false,
        }
    }
    handleVisibility() {
        this.setState({isActive: !this.state.isActive});
    }
    render() {
        let modalClass = cx({
            modal: true,
            'is-active': this.props.isActive,
        });
        if(!this.props.isActive) {
            return null;
          }
        return (
            <div className={modalClass}>
                <div className="modal-background"></div>
                <div className="modal-card">
                    <header className="modal-card-head">
                    <p className="modal-card-title">{this.props.title}</p>
                    <button className="delete" aria-label="close"></button>
                    </header>
                    <section className="modal-card-body">
                        {this.props.children}
                    </section>
                    <footer className="modal-card-foot">
                    <button className="button is-success">Add food</button>
                    <button onClick={() => this.handleVisibility()} className="button">Cancel</button>
                    </footer>
                </div>
            </div>
        )
    }
}