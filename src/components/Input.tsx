import {ChangeEvent, FC, InputHTMLAttributes, useState} from "react";
import styled from "styled-components";


type TInput = InputHTMLAttributes<HTMLInputElement> & {
    className?: string
    defaultValue?: string;
    value: string
    // onChange: (event: ChangeEvent<HTMLInputElement>)=>void
}
const InputContainer = styled.input`
  /* Ваши стили для компоненты Input */
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;
`;

export const Input: FC<TInput> = ({className, defaultValue, value,onChange, ...rest}) => {
    const [innerValue, setInnerValue] = useState(value ?? defaultValue ?? '')
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInnerValue(event.currentTarget.value);
    };
    return (

        <InputContainer
            value={innerValue}
            onChange={handleChange}
            className={className}
            {...rest}
        />
    )
}
