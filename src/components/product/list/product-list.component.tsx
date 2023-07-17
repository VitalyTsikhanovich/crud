import {FC, memo} from "react";
import {ProductModel} from "../../../models/product.model";
import {ProductCard} from "../card/product-card.component";


type TProductListComponent = {
    products: ProductModel[]
}

export const ProductListComponent: FC<TProductListComponent> = memo(({products}) => {


    return (
       <>
            {products.map((p) => (
                <ProductCard key={p.id} id={p.id} title={p.title} price={p.price} description={p.description} category={p.category}
                             image={p.image} rating={p.rating}/>
            ))}
       </>

    )
})
