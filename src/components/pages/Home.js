import React, { useEffect } from 'react'
import BackgroundImage from '../commons/BackgroundImage';
import CountDownProduct from '../commons/CountDownProduct';
import SliderDown from '../commons/Slide/SliderDown';
import Content from '../commons/Content/ContentHome/Content';
import ProfileParent from '../commons/InforAcount/Parent';
import ProductSlick from './ProductSlick';
import { useDispatch, useSelector } from "react-redux";
import { lastResult } from '../../data/dataImage';
import BackgroundNextProduct from '../commons/BackgroundNextProduct';


const Home = () => {
  let filterProduct = [];
  const newArrProduct = useSelector((state) => state.product.product);
  useEffect(() => {
    filterProduct =[];
    filterProduct = lastResult('code', newArrProduct);

  }, [])
  return (
    <div>
      <SliderDown/>
      <BackgroundImage/>
      <div className='padding'>

        {
          newArrProduct.length > 4 ? (
            <>
              <CountDownProduct/>
            </>
          ) : (
            <></>
          )
        }
        <BackgroundNextProduct/>
        <Content/>
      </div>
      {/* <ProductSlick/> */}
    </div>
  )
}

export default Home;
