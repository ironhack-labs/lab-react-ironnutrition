import React from "react";

class Search extends React.Component {

constructor(props) {
    super(props);

    this.state = {
        search: "",
    };
    }

genericUpdate(event) {
   
    this.setState({ search: event.target.value },
        () => {  
        const { onSearchType } = this.props;
        onSearchType(this.state);
        console.log("inside generic update",this.state); } )  
    }
    
handleSubmit(event) {
    // prevent the page reload of the form submission
    event.preventDefault();
    
}

render(){

    const {search} = this.state;
    console.log("state of search",this.state)
return(
<form onSubmit={event => this.handleSubmit(event)} >
    <label >
    <input value={search} onChange={event => this.genericUpdate(event)}
                type="text" name="search"  />
          
    </label>
</form>

)

}

}



export default Search;