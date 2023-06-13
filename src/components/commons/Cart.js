import React, { useState, useEffect, useRef} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAdd,
  faChevronCircleRight,
  faChevronLeft,
  faClose,
  faSubtract,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { empty_product } from "../../assets/cart";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { incProduct } from "../../redux/cartbuyRedux";
import { removeItem } from "../../redux/cartbuyRedux";
import { decProduct } from "../../redux/cartbuyRedux";

function Cart() {

  const dispatch = useDispatch();
  const cartBuyRedux = useSelector((state) => state.cart.productbuy);
  const listBuyRedux = useSelector((state) => state.cart);
  let lengthCart = cartBuyRedux.length;
  const [numberBuys, setNumberBuys] = useState(lengthCart);
  const [totalAmount, setTotalAmount] = useState(() => 0);

  let countTotal = 0;

  const handleClose = () => {
    document.querySelector(".cart").parentNode.style.display = "none";
  };


  const dispatchIncrProduct = (id , src, size) => {
    dispatch(
      incProduct([{
        id: id,
        src: src,
        size: size
      }])
    )
    total();
    
  }

  const total =  () => {
    let count = 0;
    if(cartBuyRedux) {

      cartBuyRedux.map((iterm) => {
        count = count +  iterm.quantity * iterm.price ;
      })
    }
    countTotal = count;
    // setTotalAmount(() => count)
  }


  
  const dispatchRemoveProduct = (index) => {
    dispatch(
      removeItem([{
        index: index
      }])
    )
    total();
    console.log("lengthCart", lengthCart);
  }

  const dispatchDecProduct = (id , src, size, index) => {
    dispatch(
      decProduct([{
        id: id,
        src: src,
        size: size
      }])
    )
    total();
  }


  useEffect(() => {
    setNumberBuys(lengthCart)
    if(numberBuys === 1) {
        document.querySelector('.pc').style.display = "block";
    }
    total();
},[lengthCart])
  
  
  return (
    <div className="cart">
      <div className="cart-padding">
        {lengthCart > 0 ? (
          <>
            <div className="cart-count-check">
              <FontAwesomeIcon
                className="icon-check-out"
                icon={faChevronLeft}
                onClick={handleClose}
              />
              <p className="cart-count">({lengthCart}) sản phẩm trong giỏ hàng</p>
              <p className="cart-count">Giỏ hàng (cartBuyRedux.length)</p>
            </div>

            <div className="wapper-scroll">
              {/* product detail */}
              <div className="warrper">
                {
                  cartBuyRedux.map((_, index) => (
                    <div className="cart-detail">
                      <div className="cart-image">
                        <NavLink to="/product">
                          <img
                            className="img-product"
                            src={_.src}
                            alt={_.src}
                          />
                        </NavLink>
                      </div>
                      <div className="cart-infor">
                        <div className="title-close">
                          <NavLink
                            to="/product"
                            className="navlink"
                            style={{ textDecoration: "none" }}
                          >
                            <p className="title">Ao phong dai tay nu co hinh in</p>
                          </NavLink>
                          {/* <FontAwesomeIcon className="close" icon={faClose}/> */}
                        </div>
                        <div className="cart-size">
                          <p>{_.size}</p>
                          <p>/</p>
                          <img
                            className="img"
                            src={_.color}
                            alt=""
                          />
                        </div>
                        <div className="cart-price">
                          <p>{String(_.price * _.quantity).replace(/\B(?=(\d{3})+(?!\d))/g, '.')}.000 ₫</p>
                          <div className="tongle">
                            <FontAwesomeIcon
                              className="cart-icon"
                              icon={faSubtract}
                              onClick={() => dispatchDecProduct(`${_.id}`, `${_.src}`, `${_.size}`, {index})}
                            />
                            <p>{_.quantity}</p>
                            <FontAwesomeIcon 
                            className="cart-icon" 
                            icon={faAdd} 
                            onClick={() => dispatchIncrProduct(`${_.id}`, `${_.src}`, `${_.size}`)}/>
                          </div>
                        </div>
                      </div>
                      <FontAwesomeIcon className="close-pos" icon={faClose} onClick={() => dispatchRemoveProduct({index})} />
                    </div>
                  ))
                }
                

                {/* suggesst */}
              </div>
              <div className="suggest">
                <p className="suggest-title">Có thể bạn sẽ thích</p>
                <div className="product-suggest">
                  <div className="products">
                    <div className="product">
                      <a href="/" alt="" className="product-link">
                        <img
                          className="image-suggest"
                          src="https://canifa.com/img/210/300/resize/6/t/6tl22w010-sk010-1-thumb.webp"
                          alt=""
                        ></img>
                        <p className="price-suggest">299.000 ₫</p>
                      </a>
                    </div>
                    <div className="product">
                      <a href="/" alt="" className="product-link">
                        <img
                          className="image-suggest"
                          src="https://canifa.com/img/210/300/resize/6/t/6tl22w010-sk010-1-thumb.webp"
                          alt=""
                        ></img>
                        <p className="price-suggest">299.000 ₫</p>
                      </a>
                    </div>
                    <div className="product">
                      <a href="/" alt="" className="product-link">
                        <img
                          className="image-suggest"
                          src="https://canifa.com/img/210/300/resize/6/t/6tl22w010-sk010-1-thumb.webp"
                          alt=""
                        ></img>
                        <p className="price-suggest">299.000 ₫</p>
                      </a>
                    </div>
                    <div className="product">
                      <a href="/" alt="" className="product-link">
                        <img
                          className="image-suggest"
                          src="https://canifa.com/img/210/300/resize/6/t/6tl22w010-sk010-1-thumb.webp"
                          alt=""
                        ></img>
                        <p className="price-suggest">299.000 ₫</p>
                      </a>
                    </div>
                    <div className="product">
                      <a href="/" alt="" className="product-link">
                        <img
                          className="image-suggest"
                          src="https://canifa.com/img/210/300/resize/6/t/6tl22w010-sk010-1-thumb.webp"
                          alt=""
                        ></img>
                        <p className="price-suggest">299.000 ₫</p>
                      </a>
                    </div>
                    <div className="product">
                      <a href="/" alt="" className="product-link">
                        <img
                          className="image-suggest"
                          src="https://canifa.com/img/210/300/resize/6/t/6tl22w010-sk010-1-thumb.webp"
                          alt=""
                        ></img>
                        <p className="price-suggest">299.000 ₫</p>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="chech-out-and-total">
              <p className="sum-mobile">Tổng:{String(totalAmount).replace(/\B(?=(\d{3})+(?!\d))/g, '.')}.000 ₫</p>
              {/* check all */}
              <button className="check-cart">Đặt hàng</button>
              {/* total */}
              <p className="sum">Tổng: {String(countTotal).replace(/\B(?=(\d{3})+(?!\d))/g, '.')}.000 ₫</p>
            </div>
          </>
        ) : (
            <div className="empty-cart">
              <p>Giỏ hàng(0)</p>
              <div className="empty-cart-margin">
                <img src={empty_product} alt="empty"></img>
                <p>Chưa có sản phẩm</p>
                <p>trong giỏ hàng của bạn.</p>
                <FontAwesomeIcon
                  className="close-cart"
                  icon={faClose}
                  onClick={handleClose}
                />
                <FontAwesomeIcon
                  className="close-cart-mobile"
                  icon={faChevronLeft}
                  onClick={handleClose}
                />
              </div>
            </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
