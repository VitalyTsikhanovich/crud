import React, {FC, memo, useState} from 'react';
import {MAX_LENGTH_DEFAULT} from "../../constants/description.constant";
import {DescriptionButton, DescriptionContainer, DescriptionText} from "./description.styles";

type TDescription = {
    text: string,
    maxLength?: number
}


export const Description: FC<TDescription> = memo(({text, maxLength = MAX_LENGTH_DEFAULT}) => {

    const [show, setShow] = useState<boolean>(false)
    const handleShow = () => {
        setShow(!show)
    }

    const croppedText = text.slice(0, maxLength)

    return (
        <DescriptionContainer>
            <DescriptionText>{show ? text : croppedText + (text.length < maxLength ? '' : '...')}</DescriptionText>
            {text.length > maxLength && (
                <DescriptionButton onClick={handleShow}>{show ? "Hide Details" : "Show Details"}</DescriptionButton>
            )
            }
        </DescriptionContainer>
    );
})


