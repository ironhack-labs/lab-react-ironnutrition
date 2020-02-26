import React from "react"

class Search extends React.Component {
state={
    seach:""
}

    render(){
        // let filterFood = this.props.food.filter((food)=>{return food.name.indeOf(this.state.seach()) !=1
        // })
        return(
<div>
<input type="text" placeholder="search" value={this.state.search} onChange={e => this.props.seachFood(e, "seach")}></input>
</div>

        
        )
    }
}

export default Search