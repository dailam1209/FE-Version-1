import React from "react";
import Box from "@mui/material/Box";
import { Autoplay, Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


function BackgroundImage() {

  const listBackground = ["https://media.canifa.com/Simiconnector/banner_name_tablet1686199274.webp", "https://media.canifa.com/Simiconnector/banner_name_tablet1685154770.webp", "https://media.canifa.com/Simiconnector/banner_name_tablet1685331169.webp" ]
  return (
    <Box
      sx={{
        width: "100%",
        height: "auto",
      }}
    >
      
      <Swiper
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {
          listBackground.map((img, index) => (
            <SwiperSlide>
              <div key={index}>
                <img
                
                style={{
                  objectFit: "cover",
                  backgroundImage: "cover",
                  maxWidth: "100%",
                }}
                src={img}
                alt="index"
              ></img>

              </div>
            </SwiperSlide>

          )) 
        }
      </Swiper>
    </Box>
  );
}

export default BackgroundImage;
