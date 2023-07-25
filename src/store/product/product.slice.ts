import { createSlice} from "@reduxjs/toolkit";
import { fetchProductsApi } from "../../services/product-api.service";
import {ProductModel} from "../../models/product.model";

interface ProductState {
    products: ProductModel[];
    loading: boolean;
    error: string | null;
}

const initialState: ProductState = {
    products: [],
    loading: false,
    error: null,
};

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProductsApi.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchProductsApi.fulfilled, (state, action) => {
                state.loading = false;
                state.products = action.payload;
            })
            .addCase(fetchProductsApi.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || "Произошла ошибка!";
            });
    },
});

export default productSlice.reducer;
