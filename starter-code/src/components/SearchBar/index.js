import React from "react";

import { StyledSearchBar } from "./style";
import { Input } from "../Input/index";

export const SearchBar = () => {
  return (
    <>
      <StyledSearchBar>
        <form>
          <div className="field is-grouped">
            <p className="control is-expanded">
              <Input />
            </p>
          </div>
        </form>
      </StyledSearchBar>
    </>
  );
};
