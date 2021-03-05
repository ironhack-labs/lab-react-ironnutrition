import { Component } from 'react';

class TodaysFood extends Component {

    render() {
        const foods = this.props.selectedFood.map((f, i) => {
            return <li key={i}>{f.quantity} {f.name} = {f.quantity * f.calories} calories</li>
        })
        return (
            <div>
                <h2>Today's foods</h2>
                <ul>
                    {foods}
                </ul>
            </div>
        )
    }
}

export default TodaysFood;