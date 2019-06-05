import React, {Component} from 'react'

class Search extends Component{
    constructor(props){
        super(props)
        this.state={search: ''}
    }

    handleChange=e=>{
        let {name, value}=e.target
        this.setState({
            [name]:value
        })
        this.props.searching(value)
    }

    // handleFormSubmit=e=>{
    //     e.preventDefault()
    //     this.props.showSearch(this.state)
    //     this.setState({name: '', calories:'', image:''})
    // }


    render(){
        console.log(this.state)
        return(
            <form>
               <label>Busca pringao:
               <input type='text' name='search' value={this.state.search} onChange={(e) => this.handleChange(e)} />
               </label>
               <button type='submit'>Filtra gordo</button>
            </form>   
        )
    }
}

export default Search