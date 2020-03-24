import React, { useState, useContext } from "react";
import { Form, FormControl, Button } from "react-bootstrap";
import { DataContext } from "/src/contexts/DataContext";

export const Search = () => {
  const { searchFood } = useContext(DataContext);
  const [nameSearch, setNameSearch] = useState("");

  const handleSearch = name => {
    setNameSearch(name);
    searchFood(name);
  };

  return (
    <Form inline>
      <FormControl
        type="text"
        placeholder="Search"
        className="mr-sm-2"
        value={nameSearch}
        onChange={e => handleSearch(e.target.value)}
      />
    </Form>
  );
};
