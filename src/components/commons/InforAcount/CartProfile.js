import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export const CartProfile = () => {

    let currentPage = 1;        
    function pageChangeHandler(event, pageNumber)  {
        currentPage = pageNumber;
        console.log(currentPage);

    }

    return (
        <div className="wrapper-cartprofile">
            <div className="invoice-of-you">
                <p>Đơn hàng của tôi</p>
            </div>
            <div className="all">
                <span>Tất cả đơn hàng</span>
            </div>
            <div className="row-cart">
                <div className="row-cart-text">
                    <span>Đơn hàng</span>
                </div>
                <div className="row-cart-text">
                    <span>Ngày mua</span>
                </div>
                <div className="row-cart-text">
                    <span>Số lượng</span>
                </div>
                <div className="row-cart-text">
                    <span>Tổng tiền</span>
                </div>
            </div>
            <div className="carts-detail">
                <div className="wrapper-img">
                    <img src="https://canifa.com/img/1000/1500/resize/6/t/6ts23s021-sp235-3.webp"  alt=""></img>
                </div>
                <div className="date">
                    <span>12/09/2023</span>
                </div>
                <div className="count">
                    <span>x1</span>
                </div>
                <div className="total">
                    <span>123</span>
                </div>
            </div>
            <div className='pagination'>
                <Stack className='stack'  spacing={2}>
                    <Pagination count={5} onChange={(event, pageNumber) => pageChangeHandler(event, pageNumber)} />
                </Stack>
            </div>
     
        </div>
    )
}