import React, {FC, memo} from "react";
import {Button} from "./createButton.styles";


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


