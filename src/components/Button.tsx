import {ButtonHTMLAttributes, FC} from "react";

type TButton =ButtonHTMLAttributes<HTMLButtonElement> &{
    className: string
}
export const Button :FC<TButton> =({className, ...rest})=>{

    return <button className={className} {...rest} ></button>


 }
