import {FC, memo} from "react";
import {ProductModel} from "../../../models/product.model";
import {Container,  Description, Img, Price, Title} from "../../../assets/styles/product-card.styles";


type TProductCard = ProductModel
export const ProductCard: FC<TProductCard> = memo(({title, image, price, description}) => {


    return (
        <Container>
            <Img src={image} alt="image"/>
            <Title>{title}</Title>
            <Price>{price}$</Price>
            <Description>{description}</Description>
        </Container>
    )
})
