import React, { useContext } from "react";

import { FoodsContext } from "../../context/Context";

export const Input = () => {
  const { setFilter } = useContext(FoodsContext);
  return (
    <input
      className="input"
      onChange={e => setFilter(e.target.value)}
      type="search"
      placeholder="
      🔍 Find a food"
    />
  );
};
