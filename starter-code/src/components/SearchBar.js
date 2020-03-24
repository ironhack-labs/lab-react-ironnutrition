import React, { useContext } from "react";
import { FoodContext } from "../App";

export const SearchBar = () => {
    const { filtered, setFiltered } = useContext(FoodContext);

    return (
        <div>
            <input type="text" className="input search-bar" name="search" placeholder="Search" onChange={e => setFiltered(e.target.value)} value={filtered} />
        </div>
    )
};