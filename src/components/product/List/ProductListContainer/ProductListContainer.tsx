import {FC, memo} from "react";
import {ProductList} from "../ProductList";
import {useProducts} from "../../../../hooks/products.hook";
import {CreateButton} from "../../../CreateButton/CreateButton";
import {ProductCreationContainer} from "../../../ProductCreationContainer";
import {ContainerProductList} from "./productListContainer.styles";



export const ProductListContainer  = memo(() => {

    const {
        products,
        loading,
        error
    } = useProducts()

    return (
        <ContainerProductList>
            {loading && <div>Loading...</div>}
            {error && <div>Something went wrong! {error}</div>}
            {!loading && !error && <ProductList products={products}/>}
            {/*<CreateButton/>*/}
            <ProductCreationContainer/>
        </ContainerProductList>


    )

})

