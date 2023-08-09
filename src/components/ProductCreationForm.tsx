import {ProductModel} from "../models/product.model";
import {ChangeEvent, FC, FormEvent, memo, useState} from "react";
import {Button} from "./Button";
import noImg from '../assets/img/noImg.jpg'
import {Input} from "./Input";
import {InputLabel} from "../assets/styles/input.styles";
import {FormContainer} from "../assets/styles/productCreateForm.styles";

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
                    placeholder='Add title'
                />
                <Input
                    type="text"
                    value={description}
                    required
                    onChange={(e) => setDescription(e.currentTarget.value)}
                    placeholder="Add description"
                />
                <Input type="number" value={price} onChange={(e) => setPrice(e.currentTarget.valueAsNumber)}
                       placeholder="Add price"/>
                <Button type="submit" className="btn-red">
                    Create
                </Button>
            </div>
        </FormContainer>

    )
})





