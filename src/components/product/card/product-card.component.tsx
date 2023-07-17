import {FC, memo} from "react";
import {ProductModel} from "../../../models/product.model";
import {Container, Img} from "../../../assets/styles/product-card.styles";


type TProductCard = ProductModel
export const ProductCard: FC<TProductCard> = memo(({title, image,price,description}) => {


    return (

        <Container>
            <Img src={image} alt=""/>
            <div>{title}</div>
            <div>{price}$</div>
            <div>{description}</div>

        </Container>

    )
})
