// import axios, {AxiosResponse} from "axios";
// import {PRODUCTS_URL} from "../constants/api.constants";
// import {ProductModel} from "../models/product.model";
// import {store} from "../store/store";
// import {setProductAction} from "../store/product/product.slice";
//
//
// export async function fetchProductsApi():Promise<AxiosResponse<ProductModel[]>>{
//
//         return await axios.get(PRODUCTS_URL)
//             // .then((response)=>{
//             //         store.dispatch(setProductAction(response.data))
//             //         return response
//             // })
//
// }
// product-api.service.ts
import axios, { AxiosResponse } from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { ProductModel } from "../models/product.model";
import { PRODUCTS_URL } from "../constants/api.constants";

export const fetchProductsApi = createAsyncThunk<ProductModel[], void>(
    "product/fetchProducts",
    async () => {
            const response: AxiosResponse<ProductModel[]> = await axios.get(PRODUCTS_URL);
            return response.data;
    }
);
export const createProductApi = createAsyncThunk<Required<ProductModel> ,Partial<ProductModel>>(
    "product/createProduct",
    async function (product) {
        const response = await axios.post(PRODUCTS_URL, product);
        return response.data
    }
);






