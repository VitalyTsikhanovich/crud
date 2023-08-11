import {FC, memo} from "react";
import {ProductModel} from "../../../models/product.model";
import {ProductCard} from "../Card/ProductCard";
import {useNavigate} from "react-router-dom";


type TProductListComponent = {
    products: ProductModel[]
}

export const ProductList: FC<TProductListComponent> = memo(({products}) => {
    const navigate = useNavigate();
    const handleProductClick = (productId: string) => {
        navigate(`/product/${productId}`);
    };
    return (
        <>
            {products.map((p) => (
                <ProductCard key={p.id} id={p.id} title={p.title} price={p.price} description={p.description}
                             category={p.category}
                             image={p.image} rating={p.rating}

                           />
            ))}
        </>

    )
})
