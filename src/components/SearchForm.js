import { Card, Row, Col, Divider, Input, Button } from 'antd';
import { useState } from 'react';

const SearchForm = ({searchTerm, setSearchTerm}) => {
    return (
        <form>
        <Input type='text' placeholder='Search' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
     </form>
    )
     
}

export default SearchForm