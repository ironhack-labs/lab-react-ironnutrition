import React from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';

class FilterBar extends React.Component {

    searchBar = (event) => {
        this.props.filterFood(event.target.value);
    }

    render() {
    return(
        <div>
        <input type="text" name="foodName" placeholder="Search by food name" onChange={(event) => this.searchBar(event)}>
        </input>
        </div>

        //     <InputGroup className="mb-3">
        //     <FormControl
        //       placeholder="Food's name"
        //       aria-label="Food's name"
        //       aria-describedby="basic-addon2"
        //     />
        //     <InputGroup.Append>
        //       <Button variant="outline-secondary">Search</Button>
        //     </InputGroup.Append>
        //   </InputGroup>
        );
    }
}

export default FilterBar;