import React from 'react'

class TodaysFood extends React.Component {
    render() {
        return (
            <div>
                <h1>Today's Food</h1>
                <ul>
                    {this.props.foodList.map((food) => {
                        return (
                            <li>{`${this.props.foodQuantity} ${food.name} = cal`}</li>

                        )


                    })}

                </ul>

            </div>
        )
    }
}

export default TodaysFood;