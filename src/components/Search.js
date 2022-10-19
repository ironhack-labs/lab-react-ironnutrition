<<<<<<< HEAD
import { useState } from 'react';

// Iteration 5
function Search({ callbackToSearch }) {
  return (
    <>
      <label>Search</label>
      <input
        placeholder="Enter search query"
        type="text"
        onChange={(e) => {
          callbackToSearch(e.target.value);
        }}
      />
    </>
  );
}
=======
// import Foods from '..foods.json'
// import { useState } from "react"

// export default function Search(){

// // const [search, setSearch] = useState("")

// //     return(
// //         <div>
// //         <form>
// //         <label> Search </label>
// //             <input type="text" name="search" value="" onChange={(e)=>{setSearch(e.target.value)}}/>
// //         </form>
// //         {Foods.map((searchFood,index)=>{
// //            return(<p>{searchFood.name}</p>) 
// //         })}
// //         </div>
// //     )
// // }
>>>>>>> 98689bad481964aac87af2d9e2476f7404f868f0

export default Search;
