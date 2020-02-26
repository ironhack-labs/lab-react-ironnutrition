import React from 'react';
export default class Search extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            foods: []
        }
        this.handleChange = this.handleChange.bind(this);
    }
    componentDidMount() {
        this.setState({
            filtered: this.props.foods
        });
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            filtered: nextProps.foods
        });
    }


    handleChange(e) {
        console.log(e.target.value)
        // Variable to hold the original version of the list
        let foodsCopie = [...this.state.foods];
        console.log(this.state.foods)
        // Variable to hold the filtered list before putting into state
        let newList = [];
        // If the search bar isn't empty
        if (e.target.value !== "") {
            // Assign the original list to currentList
            // foodsCopie = this.props.foods;
            // Use .filter() to determine which foodss should be displayed
            // based on the search terms
            newList = foodsCopie.filter(foods => {
                
                // change current foods to lowercase
                const lc = foods.toLowerCase();
                // change search term to lowercase
                const filter = e.target.name.toLowerCase();

                return lc.includes(filter);
            });
            console.log(newList)
        } else {
            // If the search bar is empty, set newList to original task list
            newList = this.props.foods;
        }
        // Set the filtered state based on what our rules added to newList
        this.setState({
            filtered: newList
        });
    }




    render() {
        return (

            <form>
                <div>
                <input type="text" className="input" onChange={this.handleChange} placeholder="Search..." />

                </div>
            </form>


        )


    }
}