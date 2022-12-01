import React, { useState } from 'react';
import { Input,  } from 'antd';

const Search = (props) =>{
    const {Searchfm} = props
    const [serchterm, setserchterm] = useState ('')
    const handlesearch = (e) =>{
        setserchterm(e.target.value)
        Searchfm(e.target.value)
    }
    return(
        <div>
            <h1>Search</h1>
            <label>Search</label>
            <Input type='text' value ={serchterm} onChange={handlesearch} />
        </div>
    )
}

export default Search