import {ProductModel} from "../models/product.model";
import {FC, FormEvent, useState} from "react";
import {Button} from "./Button";


type TProductCreationForm = {
    onSubmit: (product: Partial<ProductModel>) => void;
}


export const ProductCreationForm: FC<TProductCreationForm> = ({onSubmit}) => {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [error, setError] = useState('')


    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const partialProduct: Partial<ProductModel> = {
            title,
            description,
        };
        onSubmit(partialProduct);
    }

    return (

        <form onSubmit={handleSubmit} action="">
            <div>
                <label htmlFor='title'>Title</label>

                <input
                    type="text"
                    value={title}
                    required
                    onChange={(e) => setTitle(e.currentTarget.value)}
                />
                <label htmlFor="description">Description</label>
                <input
                    type="text"
                    value={description}
                    required
                    onChange={(e) => setDescription(e.currentTarget.value)}
                />
                <Button type="submit" className="btn-red">
                    Create
                </Button>
            </div>
        </form>

    )
}
