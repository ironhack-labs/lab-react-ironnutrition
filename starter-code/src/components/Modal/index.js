import React, { useContext } from "react";
import { FoodsContext } from "../../context/Context";
import { AddFood } from "../AddFood";

import { StyledModal } from "./style";

export const FormModal = () => {
  const { modalOpen } = useContext(FoodsContext);
  const { closeModal } = useContext(FoodsContext);

  return (
    <>
      <StyledModal
        id="formModal"
        className={`modal ${modalOpen ? "is-active" : ""} `}
      >
        <div className="modal-background"></div>
        <div className="modal-content">
          <AddFood />
        </div>
        <button
          onClick={closeModal}
          className="modal-close is-large"
          aria-label="close"
        ></button>
      </StyledModal>
    </>
  );
};
