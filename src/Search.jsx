import React from 'react'
import { useState } from 'react';
import { Divider, Input } from 'antd';

function Search({ searchFood }) {
    const [query, setQuery] = useState('');
    const handleQuery = (e) => {
        setQuery(e.target.value);
        searchFood(e.target.value);
    }
        return (
            <div>
              <Divider>Search</Divider>
        
              <label>Search</label>
              <Input value={query} type="text" onChange={handleQuery} />
            </div>
          );
        }
    
 
    
export default Search;



 

