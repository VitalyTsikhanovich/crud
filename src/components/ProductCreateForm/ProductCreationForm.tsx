import {ProductModel} from "../../models/product.model";
import {ChangeEvent, FC, FormEvent, memo, useState} from "react";
import {Button} from "../Button/Button";
import noImg from '../../assets/img/noImg.jpg'
import {Input} from "../Input/Input";
import {InputLabel} from "../Input/input.styles";
import {FormContainer} from "./productCreateForm.styles";

type TProductCreationForm = {
    onSubmit: (product: Partial<ProductModel>) => void;
}


export const ProductCreationForm: FC<TProductCreationForm> = memo(({onSubmit}) => {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [price, setPrice] = useState<number>(0)
    const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value);
    };
    const handlePriceChange = (e:ChangeEvent<HTMLInputElement>) => {
        const inputValue = e.currentTarget.valueAsNumber;
        if (inputValue >= 0) {
            setPrice(inputValue);
        }
    };
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const partialProduct: Partial<ProductModel> = {
            title,
            description,
            price,
            image: noImg
        };
        onSubmit(partialProduct);
    }

    return (
        <FormContainer onSubmit={handleSubmit} action="">
            <div>
                <Input
                    type="text"
                    value={title}
                    required
                    onChange={handleTitleChange}
                    placeholder='Title*'
                />
                <Input
                    type="text"
                    value={description}
                    required
                    onChange={(e) => setDescription(e.currentTarget.value)}
                    placeholder="Description*"

                />
                <Input onInput={(e) => {
                    const inputValue = e.currentTarget.valueAsNumber;
                    if (inputValue < 0) {
                        e.currentTarget.value = String(0);
                        setPrice(0);
                    }
                }} type="number" value={price} onChange={handlePriceChange}
                       placeholder="Price*" />
                <Button type="submit" className="btn-red">
                    Create
                </Button>
            </div>
        </FormContainer>

    )
})





