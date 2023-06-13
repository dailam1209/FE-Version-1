import React from "react";

function Price(price) {
  return (
    <>
      <p className="description">Ao phong dai tay be trai</p>
      <p className="price">119.200 ₫</p>
      <p className="stock">149.000 ₫</p>
      {
        price.show ? (

          <div className="sale-onday">Ưu đãi trong ngày</div>
        ) : (
          <></>
        )
      }
    </>
  );
}

export default Price;
