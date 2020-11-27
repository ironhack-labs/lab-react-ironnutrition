import React, {useState} from 'react';
import foods from '../foods.json'

function Search(props){
    const [searchState, setSearch] = useState("");

    function handleChange(event){
        const value = event.target.value;
        const lowvalue = value.toLowerCase();
        setSearch(lowvalue);

        if (event !== ""){
            let newList = [];
            newList = foods.filter(oneFood =>
                  oneFood.name.toLowerCase().includes(searchState))
                 props.setApp(newList); 
                   }else{
                     props.setApp(foods)
                         }}

    return(
    <input
        type="text"
        placeholder="Search"
        value={searchState}
        onChange={handleChange}
  />)
}

export default Search;

// function Search (props){
//     const [word, setWord] = useState("");
//     const [filterDisplay, setFilterDisplay] = useState(props.foods);

//     function handleChange(event){
//         setWord(event.target.value)
//         let oldList = props.foods
//         if(event !== ""){
//             let newList = [];
//             newList = oldList.filter(oneFood =>
//             oneFood.toLowerCase().includes(word)
//             )
                
//                 setFilterDisplay(newList); 
//         }else{
//             setFilterDisplay(props.foods)
//         }
//     };
//     return(
//        <div>
//         <input
//                 type="text"
//                 placeholder="Search"
//                 value={word}
//                 onChange={handleChange}
//                 />
//             <ul>
//                 {filterDisplay.map(item => (
//                     <li>{[item]}</li>
//                 ))}
//             </ul>

//            {/* filter: <input 
//             onChange={event => handleChange(event.target.value)}
//              />
//             {filterDisplay.map((oneFood, index) => (
//             <div key={index}>
//             <li>{oneFood.name}</li>
//             </div>))} */}
//        </div>
         
        
//     )
// }

// export default Search;