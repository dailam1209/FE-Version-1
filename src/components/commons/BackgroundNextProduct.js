import { useDispatch, useSelector } from "react-redux";
import { lastResult } from "../../data/dataImage";
import NextPreProduct from "./NextPreProduct";
import CountDownProduct from "./CountDownProduct";

function BackgroundNextProduct () {

    const newListProduct = useSelector((state) => state.product.product);
    const newArrProduct = lastResult('code', newListProduct);

    const PerViewDetail = [2,2,3,3];
    return (

        <div className="block">
            <h2 className="title">Sản phẩm mới</h2>
            <div className="wrapper-background-nextproduct">
                <div className="background-image" >
                    <img className="image" src="https://media.canifa.com/Simiconnector/list_image_tablet1685493878.webp" alt=""></img>
                </div>
                <div className="list-product">
                    <NextPreProduct products={newArrProduct} PerView={PerViewDetail} progressbuy={false}/>
                </div>
            </div>
        </div>
    )
}

export default BackgroundNextProduct;