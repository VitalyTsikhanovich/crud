import {Modal} from "./Modal/Modal";
import {CreateButton} from "./CreateButton/CreateButton";
import {FC, memo, useId, useState} from "react";
import {ProductCreationForm} from "./ProductCreateForm/ProductCreationForm";
import {ProductModel} from "../models/product.model";
import {createProductApi} from "../services/product-api.service";
import {AppDispatch} from "../store/store";
import {useDispatch} from "react-redux";
// import {addProductLocally} from "../store/product/product.slice";

export const ProductCreationContainer:FC = memo(() => {
    const [visible, setVisible] = useState(false)
    const onClose = () => {
        setVisible(false)
    }
    const dispatch: AppDispatch = useDispatch()
    // const id = useId()
    const handleCreateProduct = (product: Partial<ProductModel>) => {
        console.log("Product :", product);
        dispatch(createProductApi(product));
        // const newProduct: ProductModel = {
        //     id: id,
        //     title: product.title || '',
        //     description: product.description || '',
        //     price: product.price || 0,
        //     category: '',
        //     image: product.image || img,
        //     rating: {
        //         rate: 0,
        //         count: 0
        //     }
        // }
        // dispatch(addProductLocally(newProduct))


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
})
