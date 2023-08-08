import {FC, memo} from "react";
import {ProductListComponent} from "./product-list.component";
import {useProducts} from "../../../hooks/products.hook";
import {CreateButton} from "../../CreateButton";
import {ProductCreationContainer} from "../../ProductCreationContainer";


export const ProductListContainer: FC = memo(() => {

    const {
        products,
        loading,
        error
    } = useProducts()

    return (
        <div>
            {loading && <div>Loading...</div>}
            {error && <div>Something went wrong! {error}</div>}
            {!loading && !error && <ProductListComponent products={products}/>}
            {/*<CreateButton/>*/}
            <ProductCreationContainer/>
        </div>


    )

})
