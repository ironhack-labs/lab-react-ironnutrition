import React from 'react';
import { Input } from 'antd';

export default function Search (props) {
    const handleInputChange = e => {
        props.setQueryProp(e.target.value)
    }
    return (
        <Input value={}type="text" onChange={handleInputChange} />
    )
}