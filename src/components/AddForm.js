import React from 'react'

export default class AddForm extends React.Component {
    state = {
        formOn: false
    }

    handleForm = (e) => {
        this.setState({
        })
    }

    render() {
        return (
           

            <div>
                <form onSubmit={this.handleSubmit} className="container">
                    <div className="form-row" />
                    <label htmlFor="inputEmail4">Email</label>
                    <input
                        type="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                        className="form-control"
                        id="inputEmail4"
                        name="email"
                        placeholder="Email"
                    />
                    <label htmlFor="inputPassword4">Password</label>
                    <input
                        type="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                        className="form-control"
                        id="inputPassword4"
                        name="password"
                        placeholder="Password"
                    />
                    <div className="form-group" />
                    <label htmlFor="inputAddress">Address</label>
                    <input
                        type="text"
                        value={this.state.address}
                        onChange={this.handleChange}
                        className="form-control"
                        id="inputAddress"
                        name="address"
                        placeholder="1234 Main St"
                    />
                    <label htmlFor="inputCity">City</label>
                    <input
                        type="text"
                        value={this.state.city}
                        onChange={this.handleChange}
                        className="form-control"
                        id="inputCity"
                        name="city"
                        placeholder="Madriz"
                    />
                    <button type="submit" className="btn btn-primary button">
                        Fill it!
        </button>
                </form>
            </div>
        )
    }

}