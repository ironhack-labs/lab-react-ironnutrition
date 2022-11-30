import { useState } from 'react';
import { Divider, Input } from 'antd';

function Search (props) {
    const { filterFood } = props;
    const [query, setQuery] = useState('');

    const handleQuery = (e) => {
        setQuery(e.target.value);
        filterFood(e.target.value);
    }

    return (
        <div className="search">
            <Divider> Search </Divider>
            <label> Search </label>
            <Input type="text" value={query} onChange={handleQuery} />
        </div>
    )
}

export default Search;