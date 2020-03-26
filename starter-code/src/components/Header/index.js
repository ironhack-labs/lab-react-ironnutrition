import React, { useContext } from "react";
import { FoodsContext } from "../../context/Context";
import { StyledHeader } from "./style";

export const Header = () => {
  const { openModal } = useContext(FoodsContext);
  return (
    <StyledHeader>
      <div className="container">
        <div className="columns is-vcentered">
          <div className="column is-two-thirds">
            <h1 className="App-title">Iron Nutrition</h1>
          </div>
          <div className="column left">
            <button
              onClick={openModal}
              className="button is-link"
              type="submit"
            >
              Add new Food
            </button>
          </div>
        </div>
      </div>
    </StyledHeader>
  );
};
