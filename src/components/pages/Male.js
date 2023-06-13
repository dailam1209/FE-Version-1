import React, { useEffect, useState } from "react";
import BackgroundImage from "../commons/BackgroundImage";
import Sidebar from "../commons/component/Sidebar";
import TopSildeDown from "../commons/Slide/TopSildeDown";
import { CustomSidebar } from "../commons/component/Sidebar";
import { arrDetail } from "../../data/dataSidebar";
import Products from "../commons/Product/Products";
import { filterProduct } from "../../assets/cart";
import CustomViewProduct from "../commons/CustomViewProduct";
import Zoom from "@mui/material/Zoom";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Female from "./Female";
import { lastResult } from "../../data/dataImage";
import { useSelector } from "react-redux";
import SliderDown from "../commons/Slide/SliderDown";


const icon = (
  <Paper sx={{ m: 1 }} elevation={4} style={{
    position: 'absolute',
    zIndex: '10',
    width: '100%',
    height: 'auto',
  }}>
  <Box>
    <Box>
    <CustomViewProduct/>
    </Box>
  </Box>
  </Paper>
);

const Male = () => {
  const [checked, setChecked] = useState(false);
  const newListProduct = useSelector((state) => state.product.product);
  const newArrProduct = lastResult('code', newListProduct)

  const handleChange = () => {
    document.querySelector('.custom-product').style.display = 'block';
    setChecked((prev) => !prev);
  };

 

  return (
    <div className="male">
      <SliderDown/>
      <TopSildeDown />
      <Sidebar />
      <div style={{ paddingTop: "0", paddingBottom: "20px" }}>
        <BackgroundImage/>
      </div>
      <div className="wapper-male">
        <div className="sidebar-left">
          <CustomSidebar title={arrDetail} />
        </div>
        <div className="content">
          <div className="filters">

          {
            !checked ? (
           <>
           <div onClick={handleChange} className="filter filter-product">
              <span >Bộ lọc</span>
              <img src={filterProduct.filter} alt=""></img>
            </div>
            <div className="filter filter-sort">
              <span>Sắp xếp</span>
              <img src={filterProduct.sort} alt=""></img>
            </div>
           </>
            ) : (
              <div onClick={handleChange} className="filter filter-product">
                <span className="close-options" >Đóng</span>
            </div>
            )
          }
          </div>
          <div className="content-products">
          <Box>
            <Zoom
              in={checked}
              style={{ transitionDelay: checked ? "100ms" : "0ms",
              transform: 'translateX(-10px)' }}
            >
              {icon}
            </Zoom>
          </Box>

            {newArrProduct.map((product, index) => (
              <Products img={product} key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Male;
