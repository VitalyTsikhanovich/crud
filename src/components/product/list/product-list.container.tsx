import {FC, memo} from "react";
import {ProductListComponent} from "./product-list.component";
import {useProducts} from "../../../hooks/products.hook";


export const ProductListContainer: FC = memo(() => {

    const {
        products,
        loading,
        error
    } = useProducts()

    return (
        <div>
            {loading && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {!loading && !error && <ProductListComponent products={products}/>}
        </div>


    )

})
