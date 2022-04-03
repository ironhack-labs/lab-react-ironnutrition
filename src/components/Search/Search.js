import React from 'react';


const Search = ({ setSearch }) => {

  return (
    <div>
      <form onSubmit={() => {}} className="mt-4 mx-3">
        <div className="field">
          <label className="label"></label>
          <div className="control">
            <input name="name" onChange={(event) => setSearch(event.target.value)} 
              className="input" type="text" placeholder="search food" />
          </div>
        </div>
      </form>
    </div>
  )
}
// class Search extends Component{
//   constructor(props){
//     super(props);
//       this.state = {
//       search: ""
//     }
//   }

//   render(){
//     return (
//       <div className="field is-grouped">
//   <p className="control is-expanded">
//     <input className="input" type="text" 
//       placeholder="Find food"
//       value={this.state.search}
//       onChange={this.props.searchFood}  
//       />
//   </p>
//   <p className="control">
//     <button className="button is-info">
//       Search
//     </button>
//   </p>
// </div>
//     )
//   }
// }

export default Search;
