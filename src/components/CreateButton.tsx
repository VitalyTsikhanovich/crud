import React, {FC} from "react";
import styled from "styled-components";
// import { ReactComponent as CloseIcon } from "../../assets/icons/cross.svg";

const Button = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 60px;
  height: 60px;
  background-color: #007bff;
  border-radius: 50%;
  border: none;
  color: white;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;
type TCreateButton={
    onClick: ()=> void
}

export const CreateButton:FC<TCreateButton> = ({onClick}) => {
    const handleButtonClick = () => {
onClick()
    };

    return (
        <Button onClick={handleButtonClick}>
            +
        </Button>
    );
};


