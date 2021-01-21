import React from 'react';

class AddFood extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            calories: 0,
            image: '',
            quantity: 0
        };
    }

    render() {
        return (
            <form>
                <label>
                    Name:
                    <input type="text" name="name" />
                </label>
                <label>
                    Calories:
                    <input type="number" name="calories" />
                </label>
                <label>
                    Image:
                    <input type="text" name="image" />
                </label>
                <button>Add</button>
            </form>
        )
    }
}

export default AddFood;