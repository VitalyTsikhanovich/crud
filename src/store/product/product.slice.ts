import {createSlice, Draft, PayloadAction} from "@reduxjs/toolkit";
import {createProductApi, fetchProductsApi} from "../../services/product-api.service";
import {ProductModel} from "../../models/product.model";
import {Writable} from "stream";

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
    reducers: {
        addProductLocally: (state, action:PayloadAction<ProductModel>) => {
            state.products.unshift(action.payload);
        },
    },
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
            })
            .addCase(createProductApi.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(createProductApi.fulfilled, (state, action) => {
                state.products.push(action.payload)

                state.loading = false;
                state.error = null;

            })
            .addCase(createProductApi.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || "Произошла ошибка при создании продукта!";
            });
    },

});
export const { addProductLocally } = productSlice.actions;
export default productSlice.reducer;
