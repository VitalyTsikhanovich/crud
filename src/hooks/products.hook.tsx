import {useEffect, useState} from "react";
import {ProductModel} from "../models/product.model";
import {fetchProductsApi} from "../services/product-api.service";


export const useProducts = () => {
    const [products, setProducts] = useState<ProductModel[]>([])
    const [error, setError] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);


    useEffect(() => {
        setLoading(true)
        fetchProductsApi().then((response) => {
            setProducts(response.data)
        })
            .catch((e) => {
                setError(`Something went wrong! Error: ${e}`)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [])

    return {
        products,
        error,
        loading
    }
}
