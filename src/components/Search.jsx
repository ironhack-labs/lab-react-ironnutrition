import { Divider, Input, Row, Card, Button } from "antd";
import { useState } from "react";

function Search(props) {
  const [searchText, setSearchText] = useState("");

  const handleSearch = (e) => {
    setSearchText(e.target.value);
    props.searchFood(e.target.value); //from Parent (App.jsx)
  };

  return (
    <Row style={{ justifyContent: "center" }}>
      <Card style={{ width: "80%", margin: 10, backgroundColor: "#ffb6c1" }}>
        <Divider>Search</Divider>

        <Input
          value={searchText}
          type="text"
          placeholder="Search here"
          onChange={handleSearch}
        />
        <Button
          type="primary"
          onClick={() => {
            handleSearch;
          }}
        >
          Search Food
        </Button>
      </Card>
    </Row>
  );
}

export default Search;
