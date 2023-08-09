import React, {FC, memo} from "react";
import {Button} from "../assets/styles/createButton.styles";


type TCreateButton = {
    onClick: () => void
}

export const CreateButton: FC<TCreateButton> = memo(({onClick}) => {
    const handleButtonClick = () => {
        onClick()
    };

    return (
        <Button onClick={handleButtonClick}>
            +
        </Button>
    );
})


