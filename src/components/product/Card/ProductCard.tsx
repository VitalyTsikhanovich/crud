import {FC, memo} from "react";
import {ProductModel} from "../../../models/product.model";
import {Description} from "../../Description";
import {
    ProductCardContainer,
    ProductDetails,
    ProductImage,
    ProductImageElement, ProductPrice, ProductTitle
} from "../../../assets/styles/product-card.styles";
import {useNavigate} from "react-router-dom";


type TProductCard = ProductModel
export const ProductCard: FC<TProductCard> = memo(({id,title, image, price, description}) => {

    const navigate = useNavigate();

    const handleProductClick = () => {
        navigate(`/product/${id}`);
    };
    return (
        <ProductCardContainer>
            <ProductImage>
                <ProductImageElement src={image} alt="image"/>
            </ProductImage>
            <ProductDetails>
                <ProductTitle onClick={handleProductClick}>{title}</ProductTitle>
                <Description text={description}/>

            </ProductDetails>

                <ProductPrice>{price}$</ProductPrice>


            {/*<Description>{description}</Description>*/}
        </ProductCardContainer>
    )
})
