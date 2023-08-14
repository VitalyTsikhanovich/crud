import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {selectProducts} from "../models/state/products/product.selectors";



export const ProductDetailsPage = () => {

    const {productId} = useParams<{ productId: string }>()
    const products = useSelector(selectProducts);

    console.log(products)
    console.log(productId)




    return (

            <div>
                <h1>Product Detail</h1>
                <p>id {productId}</p>


                <p>red</p>
            </div>

    )
}
