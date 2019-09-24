import React, { Component } from 'react';

class Form extends Component {

    render() {
        return (
            <div>
                <form onSubmit={(e) => this.props.handleSubmit(e)}  >
                    {/* NAME */}
                    <input
                        className="input"
                        value={this.props.name}
                        name="name"
                        onChange={(e) => this.props.handleChange(e)}
                        type="text"
                        placeholder="Food Name" />
                    {/* CALORIES */}
                    <input
                        value={this.props.calories}
                        name="calories"
                        onChange={e => this.props.handleChange(e)}
                        className="input"
                        type="number"
                        placeholder="calories "
                    />

                    {/* IMAGE URL */}
                    <input
                        value={this.props.image}
                        name="image"
                        onChange={e => this.props.handleChange(e)}
                        className="input"
                        type="text"
                        placeholder="image url" />
                    <button
                        className="button"
                    >Submit</button>
                </form>
            </div>
        );
    }
}

export default Form;