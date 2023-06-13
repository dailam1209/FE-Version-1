import React, { useEffect, useState } from "react";
import MenuSidebarProfile from "../component/MenuSidebarProfile";
import ItermSidebar from "../component/ItermSidebar";
import { CartProfile } from "./CartProfile";
import { Logout, Account, AccountIconActive, Address, AddressIconActive, Card, CardIconActive, Cart, CartIconActive, PointIcon, PointIconActive, Sale, SaleIconActive, WishList, WishListIconActive } from "../../../assets/profile";
import config from "../../../config/config";
import Wishlist from "./Wishlist";
import AccountUser from "./AccountUser";
import { useDispatch } from "react-redux";
import { fetchLogout } from "../../../redux/user/fetchUserApi";


const Children = ({children}) => {

    return  (
        {children}
    )
};

function Profile() {

    const dispatch = useDispatch();
    const changeNumberChildren = async () => {
        console.log('out');
        // await dispatch(
        //     fetchLogout()
        // );
        localStorage.removeItem('userShop');
        window.location.replace("http://localhost:3000/");
    }
    


   

    return (
        <div className="profile-warrper">
            <div className="profile" >
                <div className="profile-user-title">
                    <div className="profile-usertitle">-</div>
                    <button className="btn-email">
                        <span className="count"></span>
                    </button>
                </div>
                <div className="cpoint">
                    <div className="profile-cpoint">
                        <div className="profile-cpoint-item">
                            <div className="title">C-point</div>
                            <div className="value color-cpoint"  >30</div>

                        </div>
                        <div className="profile-cpoint-line"></div>
                    </div>
                    <div className="profile-cpoint">
                        <div className="profile-cpoint-item">
                            <div className="title">Điểm KHTT</div>
                            <div className="value color-KHTT" >0</div>

                        </div>
                        <div className="profile-cpoint-line"></div>
                    </div>
                    <div className="profile-cpoint">
                        <div className="profile-cpoint-item">
                            <div className="title">Hạng thẻ</div>
                            <div className="value color-user-green" >Green</div>

                        </div>
                    </div>
                </div>
                <MenuSidebarProfile>
                    <ItermSidebar to={"/" + config.routers.profile + "-" + config.routers.cart}  title="Đơn hàng của tôi" icon={<Cart/>} active={<CartIconActive/>}  />
                    <ItermSidebar to={"/" + config.routers.profile + "-" + config.routers.sale}   title="Khuyến mại" icon={<Sale/>} active={<SaleIconActive/>}  />
                    <ItermSidebar to={"/" + config.routers.profile + "-" + config.routers.point}  title="C-points" icon={<PointIcon/>} active={<PointIconActive/>} />
                    <ItermSidebar to={"/" + config.routers.profile + "-" + config.routers.address}  title="Sổ địa chỉ" icon={<Address/>} active={<AddressIconActive/>} />
                    <ItermSidebar to={"/" + config.routers.profile + "-" + config.routers.card}  title="Thẻ KHTT" icon={<Card/>} active={<CardIconActive/>} />
                    <ItermSidebar to={"/" + config.routers.profile + "-" + config.routers.wishlist}  title="Yêu thích" icon={<WishList/>} active={<WishListIconActive/>} />
                    <ItermSidebar to={"/" + config.routers.account }  title="Tài khoản" icon={<Account/>} active={<AccountIconActive/>} />
                    {/* <ItermSidebar title="Đăng xuất" icon={<Logout/>} onClick={() => changeNumberChildren()} /> */}

                    <div onClick={() => changeNumberChildren()} >
                    <ItermSidebar title="Đăng xuất" icon={<Logout/>} />
                    </div>
                </MenuSidebarProfile>
                <div className="profile-support">
                    <b>Bạn cần hỗ trợ?</b>
                    <p>Vui lòng gọi 
                        <a href="#">1800 6061</a>
                        (miễn phí cước gọi)
                    </p>

                </div>
            </div>
            <div className="profile-content">
               
                {
                    window.location.pathname === '/profile-cart' ? (
                        <CartProfile/>
                    ) : (
                        <></>
                    )
                    
                }
                {
                     window.location.pathname === '/profile-wishlist' ? (
                        <Wishlist/>
                    ) : (
                        <></>
                    )
                }
                {
                     window.location.pathname === '/account' ? (
                        <AccountUser/>
                    ) : (
                        <></>
                    )
                }
                
            </div>
        </div>
    )
}

export default Profile;