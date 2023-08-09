import {FC, memo} from "react";
import {ProductModel} from "../../../models/product.model";
import {Description} from "../../Description";
import {
    ProductCardContainer,
    ProductDetails,
    ProductImage,
    ProductImageElement, ProductPrice, ProductTitle
} from "../../../assets/styles/product-card.styles";


type TProductCard = ProductModel
export const ProductCard: FC<TProductCard> = memo(({title, image, price, description}) => {


    return (
        <ProductCardContainer>
            <ProductImage>
                <ProductImageElement src={image} alt="image"/>

            </ProductImage>
            <ProductDetails>
                <ProductTitle>{title}</ProductTitle>
                <Description text={description}/>

            </ProductDetails>
            <ProductPrice>{price}$</ProductPrice>

            {/*<Description>{description}</Description>*/}
        </ProductCardContainer>
    )
})
