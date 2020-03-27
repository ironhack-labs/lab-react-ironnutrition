import React from 'react';

export const Search = ({ query, setQuery }) => {
    return (
        <div className="field search-bar">
            <div className="control">
                <input
                    className="input"
                    id="search"
                    name="search"
                    type="search"
                    placeholder="Filter by food name..."
                    value={query}
                    onChange={e => setQuery(e.target.value)} />
            </div>
        </div>
    )
}