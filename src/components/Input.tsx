import {ChangeEvent, FC, InputHTMLAttributes, memo, useState} from "react";
import {InputContainer} from "../assets/styles/input.styles";


type TInput = InputHTMLAttributes<HTMLInputElement> & {
    className?: string
    defaultValue?: string;
}


export const Input: FC<TInput> = memo(({className, defaultValue, value,onChange, ...rest}) => {
    const [innerValue, setInnerValue] = useState(value ?? defaultValue ?? '')
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInnerValue(event.currentTarget.value);
        if (onChange) {
            onChange(event);
        }
    };
    return (
        <InputContainer
            value={innerValue}
            onChange={handleChange}
            className={className}
            {...rest}
        />
    )
})

