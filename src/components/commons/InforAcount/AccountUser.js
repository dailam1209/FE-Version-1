import React, { useEffect } from 'react';
// import { fetchProductList } from '../../../redux/product/fetchProductApi';
import { useDispatch } from "react-redux";

function AccountUser() {



    const dispatch = useDispatch();
    const dispatchProduct = (text) => {
        // dispatch(fetchProductList(text));
    }


    

    const optionsDay = [
        "",1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31
    ]

    return (
        <div className="warrper-account">
            <div className="account-page-title">
                <h1 className="title">Thông tin tài khoản</h1>
            </div>
            <div className="account-setting-form">
                <div className="form-group ">
                    <label>Họ tên</label>
                    <input type="text" name="firstName" className="form-control"></input>
                </div>
                <div className="form-group ">
                    <label>Số điện thoại</label>
                    <input disabled="disabled" type="text" name="phone" className="form-control"></input>
                </div>
                <div className="form-group ">
                    <label>Email</label>
                    <input type="text" name="email" className="form-control"></input>
                </div>
                {/* infor birthDay */}
                <div className="label">
                    <strong>Sinh nhật</strong>
                     (nhập thông tin để nhận ưu đãi sinh nhật) 
                </div>
                <div className="row">
                    <div className="col">
                        <div className="form-group">
                            <label>Ngày</label>
                            <select className="form-control" >
                                {
                                    optionsDay.map((day, index) => (
                                        <option value={day}>{day}</option>
                                        ))
                                    }
                                    </select>
                        </div>
                    </div>
                    <div className="col">
                        <div className="form-group">
                            <label>Tháng</label>
                            <select className="form-control">
                            {
                                    optionsDay.map((day, index) => (
                                        <option value={day}>{day}</option>
                                        ))
                                    }
                            </select>
                        </div>
                    </div>
                    <div className="col">
                        <div className="form-group">
                            <label>Năm sinh</label>
                            <select className="form-control">
                            {
                                    optionsDay.map((day, index) => (
                                        <option value={day}>{day}</option>
                                        ))
                                    }
                            </select>
                        </div>
                    </div>
                </div>
                {/* action btn */}
                <div className="action">
                    <button className="btn" onClick={() => dispatchProduct("HJGasdss") }>Lưu</button>
                </div>
            </div>
        </div>
    )
}

export default AccountUser;