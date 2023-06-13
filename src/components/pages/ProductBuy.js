import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faArrowRight
} from "@fortawesome/free-solid-svg-icons";
import { detailProduct } from "../../assets/cart";
import Glide from "@glidejs/glide";
import { Images, Translate } from "@glidejs/glide/dist/glide.modular.esm";
import Female from "./Female";
import Carousel from "../commons/Slide/Gilide";
import MyComponent from "../commons/Slide/Gilide";
import ProductSlick from "./ProductSlick";
import { useDispatch, useSelector } from "react-redux";
import { lastResult } from "../../data/dataImage";

import { fetchSameProduct } from "../../redux/product/fetchProductApi";

const ProductBuy = ( ) => {

  const [size, setSize] = useState([]);


  
  let listImage = [];
  const productDetails = useSelector((state) => state.product.product);
  let lengthOfListProduct = productDetails.length;

  for (let i = 0; i < lengthOfListProduct; i++) {
    for(let y = 0; y < productDetails[i].img.length; y++) {
      listImage.push({
            code: productDetails[i].color[0].url.slice(-9),
            public_id: productDetails[i].img[y].public_id,
            url: productDetails[i].img[y].url
        });
    }
  }

  let warrperCheck;
  let idCheckSize;
  let currentSizeCheck = 0;
  let currentNumberImageSlide = 0;
  let lengthListImage = listImage.length;
  let code = productDetails[0].color[0].url.slice(-9);
  let inputSmallImage = {
    "target" : {
      "id" : "0",
      "classList": ""
    }
}

  const handleSize = (e) => {
    if (typeof e === "undefined") {
      return;
    }
    warrperCheck = e.target.id;
    idCheckSize = warrperCheck.slice(0, warrperCheck.length - 1);
    currentSizeCheck = e.target.innerHTML;
    const arrSizeProductCheck = document.querySelectorAll(
      `.size${idCheckSize} `
    );

    Array.from(arrSizeProductCheck).map((_, index) => {
      _.style.border = "1px solid #d2d1d4";
      _.style.color = "#d2d1d4";
    });
    document.querySelector('p[id="' + warrperCheck + '"]').style.border =
      "2px solid #17242b";
    document.querySelector('p[id="' + warrperCheck + '"]').style.color =
      "#17242b";
    // document.querySelector(`.${idCheckSize}btn`).style.backgroundColor =
    //   "#4c5054";
    // document.querySelector(`.${idCheckSize}btn`).style.color = "white";
  };

  // zoom when hover image
  // const mounse = (e) => {
  //   console.log(e);
  //   const x = e.clientX - e.target.offsetLeft;
  //   const y = e.clientY - e.target.offsetTop;

  //   document.getElementsByClassName(
  //     `img-hover-${e.target.id}`
  //   ).style.transformOrigin = `${x}px ${y}px`;
  //   document.getElementsByClassName(`img-hover-${e.target.id}`).style.transform = "scale(2)";
  // };
  // const handleHoverOut = (e) => {
  //   document.getElementsByClassName(`img-hover-${e.target.id}`).style.transformOrigin = "center";

  //   document.getElementsByClassName(`img-hover-${e.target.id}`).style.transform = "scale(1)";
  // };

  // choose color
  let choose = productDetails[0].code + '0';
  const [img, setImg] = useState("");
  const [color, setColor] = useState("");



  const lengthOfListImage = (index) => {
    let listImg = []
    for (let i = 0; i <= index; i++) {
      for(let y = 0; y < productDetails[i].img.length; y++) {
        listImg.push({
          code: productDetails[i].color[0].url.slice(-9),
          public_id: productDetails[i].img[y].public_id,
          url: productDetails[i].img[y].url
      });
      }
    }
    return listImg.length;
  }


  // slide
  const  transfromImage = (type, number) => {

    const img = document.querySelector('.img');
    let getImage = document.querySelector('.img').offsetWidth;
      if(type === "add") {

        if(currentNumberImageSlide + 1  === lengthListImage) {
          let width = lengthListImage * getImage;
          img.style = `margin-right: ${width}px`;
          currentNumberImageSlide = 0;
          inputSmallImage.target.id =  currentNumberImageSlide;
          scrollImage("add",inputSmallImage);

        } 
        else {
          currentNumberImageSlide ++;
          let width = currentNumberImageSlide * getImage;
          img.style = `margin-left: -${width}px`;
          inputSmallImage.target.id =  currentNumberImageSlide;
          scrollImage("add",inputSmallImage);
        }
      }
      if(type === "incre"){
        if(currentNumberImageSlide === 0) {
          let width = (lengthListImage - 1 )* getImage;
          img.style = `margin-left: -${width}px`;
          currentNumberImageSlide = lengthListImage - 1 ;

          inputSmallImage.target.id =  currentNumberImageSlide;
          scrollImage("incre",inputSmallImage);
        } 
        else {
          currentNumberImageSlide --;
          let width = (lengthListImage - 1  - currentNumberImageSlide) * getImage;
          img.style.transform = `translateX(${width}px)`;

          inputSmallImage.target.id =  currentNumberImageSlide;
          scrollImage("incre",inputSmallImage);
        }
      }

      if(type === "small") {
         let  distance = (number - currentNumberImageSlide) * getImage;
         currentNumberImageSlide = number;
          document.querySelector('.img').style.transform = `translateX(${distance}px)`;
      }
      if(type === ""){
        if(currentNumberImageSlide > number) {
          // let width = (currentNumberImageSlide - number - 1 )* getImage;
          // img.style = `margin-left: ${width}px`;
          currentNumberImageSlide = number - 1;

          inputSmallImage.target.id =  currentNumberImageSlide;
          scrollImage("abc",inputSmallImage);
        } 
        else {
          // let width = (number - currentNumberImageSlide - 1 )* getImage;
          // img.style = `margin-left: -${width}px`;
          currentNumberImageSlide = number - 1;
          inputSmallImage.target.id =  currentNumberImageSlide;
          scrollImage("abc",inputSmallImage);
        } 
        
      }

  }

//  choose size
  const handleChoose = (e) => {
    let currentCode = '';
    if (typeof e === "string") {
      choose = e;
      setImg(productDetails[0].img.url);
      setSize(productDetails[0].size);
      setColor(productDetails[0].colortitle);
      
    } else {
      choose = e.target.id;
      currentCode = e.target.classList[1].slice(-9);
      let alt = e.target.alt;
      let slice = choose.slice(-1);
      let lenghImg = lengthOfListImage(slice);
      if(currentCode.toString() == code.toString()){
        console.log("STOP");
        let codeId = choose.slice(0,choose.length - 1);
        const arrColor = document.querySelectorAll(`.${codeId}`);
        Array.from(arrColor).map((_, index) => {
          _.style.padding = "0px";
          _.style.border = "0px";
        });
        document.querySelector('img[id="' + choose + '"]').style.border = "1px solid #757ca6";
        document.querySelector('img[id="' + choose + '"]').style.padding = "3px";
        code = currentCode;
      }
      
      inputSmallImage.target.classList = currentCode;
      transfromImage("",Number(lenghImg - alt + 1));
      code = currentCode;

      
      setImg(productDetails[slice].img.url);
      setSize(productDetails[slice].size);
      setColor(productDetails[slice].colortitle);

      let codeId = choose.slice(0,choose.length - 1);
      const arrColor = document.querySelectorAll(`.${codeId}`);
      Array.from(arrColor).map((_, index) => {
        _.style.padding = "0px";
        _.style.border = "0px";
      });
      
    }
    document.querySelector('img[id="' + choose + '"]').style.border = "1px solid #757ca6";
    document.querySelector('img[id="' + choose + '"]').style.padding = "3px";

  };

  

  // list small image handle
  const scrollImage = (type, input) => {
    code = input.target.classList[0] === undefined ? input.target.classList : input.target.classList[0];
    
    let number = input.target.id;
    const slider = document.querySelectorAll('.slider-img');
    Array.from(slider).map((_, index) => (
      document.getElementById(`${index}`).classList.remove('border-radius')
      ))
      let currentImageSmallSelect = document.getElementById(`${number}`);
      currentImageSmallSelect.classList.add('border-radius')
      let getImage = document.querySelector('.img').offsetWidth;

      if(type === "") {
        let  distance = (number ) * getImage;
        document.querySelector('.img').style.marginLeft = `-${distance}px`;

      }

      if(type === "abc") {
        const img = document.querySelector('.img');
        if(currentNumberImageSlide > number) {
          let width = (currentNumberImageSlide - number) * getImage;
          img.style = `margin-left: ${width}px`;
          code = input.target.classList;
          console.log("code2", code);
          return 0;
        }
        else {
          let width = (number ) * getImage;
          img.style = `margin-left: -${width}px`;
          code = input.target.classList;
          console.log("code2", code);
          return 0;

        }
       
      }
      currentNumberImageSlide = number;
      console.log(code);
    }

  

  useEffect( () => {
    handleChoose(choose.toString());
    scrollImage("", inputSmallImage);
  }, []);

  // chill list image

  // let arrayImage =  [...productDetails]
  // const container = document.querySelector('.list-imag-position')
  // const slider = document.querySelectorAll('.slider-img');

  

  // const slideWidth = 133;

  // let numberScroll = 0;
  // const scrollImage = (index) => {
  //   console.log(index);
  // //   const firstSlide = slider[0].cloneNode(true);
  // // const lastSlide = slider[slider.length - 1].cloneNode(true);

  // // firstSlide.id = 'first-clone';
  // // lastSlide.id = 'last-clone';
  
  // //   if (slider[index].id === firstSlide.id) {
                
  // //     container.style.transition = 'none';
  // //     container.style.transform = `translateY(${-slideWidth * index}px)`;
  // //   }
  
  // //   if (slider[index].id === lastSlide.id) {
  // //     container.style.transition = 'none';
  // //     index = slider.length - 2 ;
  // //     container.style.transform = `translateY(${-slideWidth * index}px)`;
  // //   }

  // // container.append(firstSlide);
  // //   container.prepend(lastSlide);

  
  // // if (index >= slider.length - 2) {
  // //   return 
  // // }
  // console.log("numberScroll",numberScroll);

  // index++;
  // container.style.transition = '.9s ease-out';
  // container.style.transform = `translateY(${-slideWidth * Math.abs(index - numberScroll)  }px)`;
  
  //   // for( let x= 0 ; x<= slider.length - 1; x++) {
  //   //   container.append(slider[x].cloneNode(true))
  //   // }
  // // let sliderCurrent = document.querySelectorAll('.slider-img');
  // // for( let x= 0 ; x<= index - 1; x++) {
  
  // //   container.removeChild(sliderCurrent[x]);
  // // }

  // numberScroll = index;

  // if(numberScroll = slider.length - 1) {
  //   numberScroll = 0;
  // }

  // }

  return (
  <>
      <div className="product-buy">
      {/* List big image */}
      <div className="view-product">
        <div
          className="img"
        >
          {
            listImage.map((img, index) => (
                <img 
                // onMouseMove={(e) => mounse(e)}
                // onMouseLeave={(e) => handleHoverOut(e)}
                // id={`${index}`}
                key ={index}
                className={`img-hover img-hover-${index}`}
                  src={img.url}
                  alt="image"
                ></img>
            ))
          }
        </div>
        <div className="slick-arrow-left" onClick={() => transfromImage("incre", currentNumberImageSlide)}>
              <div className="slick-arrow_icon"  >
                <FontAwesomeIcon className="icon icon-left" icon={faArrowLeft} />
              </div>
        </div>
          <div className="slick-arrow-right" onClick={() => transfromImage("add", currentNumberImageSlide)}>
                
                <div className="slick-arrow_icon" >
                  <FontAwesomeIcon className="icon icon-left" icon={faArrowRight} />
                </div>
          </div>
      </div>
      {/* List small image */}
        <div className="list-img glide" id="options-swipe-threshold-input">
          <div className="list-imag-position">
            {
              listImage.map((img, index) => (
                <div className="slider-img">

                  <img
                    className={`${img.code}`}
                    id={`${index}`}
                    src={img.url}
                    alt="listImagSmall"
                    onClick={(e) => scrollImage("", e)}
                  ></img>
                </div>
              ))

            }
          </div>
        </div>
        {/* infor image */}
      <div className="infor-product">
        <div className="name-product">
          <h1>Áo nỉ nam có hình in</h1>
          <div className="code">
            <span>Mã SP:</span>
            <span>{productDetails[0].code}</span>
          </div>
          <div className="price">
            <span>{productDetails[0].price} ₫</span>
            <span>{productDetails[0].stock} ₫</span>
          </div>
        </div>
        <div className="color-size">
          <div className="color">
            <span>Màu sắc:</span>
            <span>{color}</span>
            <div className={`check-color list-color ${productDetails[0].code}color`}>

            { 
              productDetails.map((colors, index) => (
                <>
                <img
                    id={productDetails[0].code + index}
                    className={`${productDetails[0].code} ${colors.color[0].url}`}
                    onClick={(e) => handleChoose(e)}
                    src={colors.color[0].url}
                    alt={`${colors.img.length}`}
                    key={index}
                />
                </>
              ))
            }

            {/* {newArrProduct[1].length > 3 ? (
              <div
                id={newArrProduct[1][0].code}
                // onClick={(e) => handleOverFllow(e.target.id)}
                className="color-more"
              >
                {" "}
                +{newArrProduct[1].length - 4}
              </div>
            ) : (
              <></>
            )} */}
          </div>
          </div>
          <div className="size">
            <span>Kích cỡ:</span>
            <div className="list-size">
              {size.length > 0 ? (
                size.map((_, index) => (
                  <div className={`size-name`} key={index}>
                    <p
                      className={`name size${productDetails[0].code}`}
                      id={`${productDetails[0].code}${index}`}
                      onClick={(e) => handleSize(e)}
                    >
                      {_}
                    </p>
                  </div>
                ))
              ) : (
                <></>
              )}
            </div>
          <div className="product-size-guide">
            <a href="#">Hướng dẫn chọn size</a>
          </div>
          </div>
        </div>
        <div className="following">
          <ul className="product-service">
            <li>Miễn phí vận chuyển toàn bộ đơn hàng</li>
            <li>Đổi trả miễn phí trong vòng 30 ngày kể từ ngày mua.</li>
          </ul>
        <div className="product-options-actions">
          <div className="product-wapper-btn">
            <button
              className="action btn action-tocart"
              type="submit"
              title="Thêm vào giỏ"
            >
              <span>Thêm vào giỏ</span>
            </button>
          </div>
          <div className="action btn action-store" type="button">
            <span>Tìm tại cửa hàng</span>
          </div>
        </div>
        <div className="product-options-actions-second">
          <div>
            <button
              className="action btn action-tocart"
              type="submit"
            >
              <img src={detailProduct.like} alt=""></img>
              <span>Thêm vào yêu thích</span>
            </button>
          </div>
          <div className="action btn action-store" type="button">
            <img src={detailProduct.share} alt=""></img>
            <span>Chia sẻ bạn bè</span>
          </div>
        </div>
        </div>
      </div>
    </div>
    
  </>
    
  );
};

export default ProductBuy;
