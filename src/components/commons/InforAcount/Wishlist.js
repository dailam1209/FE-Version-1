import React from "react";
import Male from "../../pages/Male";
import { useDispatch, useSelector } from "react-redux";
import { lastResult } from "../../../data/dataImage";
import Products from "../Product/Products";

function Wishlist () {

  const newListProduct = useSelector((state) => state.product.product);
  const newArrProduct = lastResult('code', newListProduct);

    return (
        <div className="content-wishlist">
          <div className="wishlist-title">
            <span>Sản phẩm yêu thích</span>
          </div>
          <div className="content-products">
        

            {newArrProduct.map((product, index) => (
              <Products img={product} key={index} />
            ))}
          </div>
        </div>
    )
};


export default Wishlist;