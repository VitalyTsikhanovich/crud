import {Modal} from "./Modal";
import {CreateButton} from "./CreateButton";
import {useId, useState} from "react";
import {ProductCreationForm} from "./ProductCreationForm";
import {ProductModel} from "../models/product.model";
import {createProductApi} from "../services/product-api.service";
import {AppDispatch} from "../store/store";
import {useDispatch} from "react-redux";
import {addProductLocally} from "../store/product/product.slice";


export const ProductCreationContainer = () => {
    const [visible, setVisible] = useState(false)
    const onClose = () => {
        setVisible(false)
    }
    const dispatch: AppDispatch = useDispatch()
    const id = useId()
    const handleCreateProduct = (product: Partial<ProductModel>) => {
        console.log("Product :", product);
        // dispatch(createProductApi(product));
        const newProduct: ProductModel = {
            id: id,
            title: product.title || '',
            description: product.description || '',
            price: 0,
            category: '',
            image: '',
            rating: {
                rate: 0,
                count: 0
            }
        }
        dispatch(addProductLocally(newProduct))
        onClose()
    };
    return (
        <>
            {visible && (
                <Modal title='Create Product' visible={visible} onClose={onClose}>
                    <ProductCreationForm onSubmit={handleCreateProduct}/>
                </Modal>
            )
            }
            <CreateButton onClick={() => {
                setVisible(true)
            }}/>
        </>
    )
}