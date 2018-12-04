import React from 'react';

class Form extends React.Component {
    constructor() {
        super()
        // this.state = {
        //     name,
        //     calories,
        //     image
        // }
    }
    render() {
        return (
            <div>
                <form>
                    <label>Name:</label>
                    <input type="text" name="title" value={this.state.name} /> <br /><br />

                    <label>Number of Caloriess:</label>
                    <input type="text" name="calories" value={this.state.calories} /><br /><br />

                    <label>Image:</label>
                    <input type="file" name="image" value={this.state.image} /><br /><br />

                    <input type="submit" value="Submit" /><br /><br />
                </form>
            </div>
        );
    }
}

export default Form;