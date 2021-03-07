import React from 'react';

 class SearchBar extends React.Component {
   render() {
     return (
       <form >
         <input type="text" placeholder="Search for your favorite meal!" />
       </form>
     );
   }
 }

 export default SearchBar;