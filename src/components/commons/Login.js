import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRegister, fetchLogin  } from "../../redux/user/fetchUserApi";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';



export default function Login() {

  const notice = (text) => {
    toast.warning(text, {
      height: "100%",
      borderLeft: "5px solid green",
      position: "top-center",
      autoClose: 4000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      minHeight: "200px",
      theme: "light",
    });
  }

  const noticeSuccess = (text) => {
    toast.success(text, {
      height: "100%",
      borderLeft: "5px solid green",
      position: "top-center",
      autoClose: 4000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      minHeight: "200px",
      theme: "light",
    });
  }
 

  const re = "/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i";
  
    const [haveAccount, setHaveAccount] = useState(true);

    const dispatch = useDispatch();
    const isSuccess = useSelector((state) => state.user.isSuccess)

    const handleSubmitSign = async (event) => {
      console.log("register");
      event.preventDefault()
      const {email, password, confirmpassword } = event.target.elements;
      console.log({email: email.value, password: password.value, confirmpassword: confirmpassword.value })
      if(email.value.toLowerCase().match(re) === false) {
        notice('Please check email again!');
        return 0;
      }
      if(password.value.toLowerCase() === confirmpassword.value.toLowerCase() ) {

        const res = await dispatch(
          fetchRegister({
            "username": password.value.slice(0,-9),
            "email": email.value  ,
            "password": password.value,
            "article_image": ""
          })
        )
        if(isSuccess &&  res.payload.success ) {
          noticeSuccess("Account have sign up success!");
        }
        else {
            notice(res.payload.message);
        }
      }
      else {
        notice("Please check password or confirmpassword again!")
      }
      
    };

    const handleSubmitLogin = async (event) => {
      event.preventDefault()
      const {email, password } = event.target.elements;
      console.log({email: email.value, password: password.value})
      
      const user = await dispatch(
        fetchLogin({
          "email": email.value ,
          "password": password.value
        })
      )

      if(user.payload.success) {
        noticeSuccess("Login success.");
        localStorage.setItem('userShop', JSON.stringify(user));
      } else  {
        notice(user.payload.message);
      }

    }

  const signupBtn = () => {
    document.querySelector(".title-text .login").style.marginLeft = "-50%";
    document.querySelector("form.login").style.marginLeft = "-50%";
  };

  const loginBtn = () => {
    document.querySelector(".title-text .login").style.marginLeft = "0%";
    document.querySelector("form.login").style.marginLeft = "0%";
  };
  const signupLink = () => {
    signupBtn();
    return false;
  };

  return (
    <div className="wrapper">
      <div className="title-text">
        <div className="title login" >Login</div>
        <div className="title signup">Signup</div>
      </div>
      <div className="form-container">
        <div className="slide-controls">
          <input type="radio" name="slide" id="login" />
          <input type="radio" name="slide" id="signup" />
          <label for="login" className="slide login" onClick={loginBtn}>
            Login
          </label>
          <label for="signup" className="slide signup" onClick={signupBtn}>
            Signup
          </label>
          <div className="slider-tab"></div>
        </div>
        <div className="form-inner">
          {/* login */}
          <form action="#" className="login" onSubmit={handleSubmitLogin}>
            <div className="field">
              <input id="email" type="email" placeholder="Email Address" required />
            </div>
            <div className="field">
              <input id="password" type="password" placeholder="Password" required />
            </div>
            <div className="pass-link">
              <a href="/">Forgot password?</a>
            </div>
            <div className="field btn">
              <div className="btn-layer"></div>
              <input type="submit" value="Login" />
            </div>
            <div  className="signup-link" onClick={signupLink}>
              Not a member? <a href="/">Signup now</a>
            </div>
          </form>
          {/* sign up */}
          <form action="#" className="signup" onSubmit={handleSubmitSign}>
            <div className="field">
              <input id="email" type="email" placeholder="Email Address" required />
            </div>
            <div className="field">
              <input id="password" type="password" placeholder="Password" required />
            </div>
            <div className="field">
              <input id="confirmpassword" type="password" placeholder="Confirm password" required />
            </div>
            <div className="field btn">
              <div className="btn-layer"></div>
              <input type="submit" value="Signup" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
