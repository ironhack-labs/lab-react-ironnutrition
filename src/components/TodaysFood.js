import React, { Component } from 'react'


class TodaysFood extends Component {

    

    render() {
        const { list } = this.props

        return (
            <div>

                {
                    list.map((element) => {
                        return (
                            <div>
                                <p>{element.name}</p>
                                <p>{Number(element.calories)}</p>
                                <p>Total: { Number(element.calories) * Number(element.quantity)}</p>
                            </div>

                        )
                    })
                }
                         
            </div>
        )
    }
}

export default TodaysFood
