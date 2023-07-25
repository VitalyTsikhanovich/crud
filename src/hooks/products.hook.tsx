import {useEffect, useState} from "react";
import {ProductModel} from "../models/product.model";
import {fetchProductsApi} from "../services/product-api.service";
import {useDispatch, useSelector} from "react-redux";
import {selectError, selectLoading, selectProducts} from "../models/state/products/product.selectors";
import {AppDispatch} from "../store/store";


export const useProducts = () => {
    // const [products, setProducts] = useState<ProductModel[]>([])
    // const [error, setError] = useState<string>('');
    // const [loading, setLoading] = useState<boolean>(false);

    const dispatch: AppDispatch = useDispatch()
    const products = useSelector(selectProducts);
    const loading = useSelector(selectLoading);
    const error = useSelector(selectError);

    useEffect(() => {
        dispatch(fetchProductsApi())
    }, [dispatch])

    return {
        products,
        error,
        loading
    }
}
