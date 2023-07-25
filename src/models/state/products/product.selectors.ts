import {RootState} from "../../../store/store";
import {ProductStateModel} from "../product-state.model";

 const selectProductState:(state: RootState)=> ProductStateModel= (state: RootState)=> state.product

export const selectProducts = (state: RootState) => selectProductState(state).products;
export const selectLoading = (state: RootState) => (state).product.loading
export const selectError = (state: RootState) => (state).product.error

