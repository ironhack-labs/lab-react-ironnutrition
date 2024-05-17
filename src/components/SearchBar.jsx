// function SearchBar({ searchWord, searchWordHandler }) {
//   return (
//     <div>
//       <label>
//         Search <br />
//         <input
//           name="myInput"
//           type="text"
//           value={searchWord}
//           onChange={searchWordHandler}
//         />
//       </label>
//     </div>
//   );
// }

// export default SearchBar;

import React from "react";
import { Input } from "antd";

function SearchBar({ searchWord, searchWordHandler }) {
  return (
    <div style={{ maxWidth: 400, margin: "20px auto" }}>
      <label>Search</label>
      <Input
        name="myInput"
        type="text"
        value={searchWord}
        onChange={searchWordHandler}
        placeholder="Search for food..."
      />
    </div>
  );
}

export default SearchBar;

