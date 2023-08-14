import {ButtonHTMLAttributes, FC, memo} from "react";
import {StyledButton} from "./button.styles";

type TButton =ButtonHTMLAttributes<HTMLButtonElement> &{
    className: string
}
export const Button :FC<TButton> =memo(({className, ...rest})=>{

    return <StyledButton className={className} {...rest} ></StyledButton>


 })
