import './App.css';
import React, { useEffect }  from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { Box } from '@mui/material';
import Header from './components/commons/component/Header';
import { publicRouter } from './router';

import { fetchAllProduct } from './redux/product/fetchProductApi';
import { useDispatch } from "react-redux";



function App() {

  const dispatch = useDispatch();
  const handleProduct = async () => {
    const listProduct = await dispatch(fetchAllProduct());
  }
  useEffect( () => {
    let pathname = window.location.pathname?.split("/")?.[1];
    if(pathname === "/" || pathname === "" ) {

      handleProduct()
    }
  },[])



  return (
    <>
        <ToastContainer
            position="top-right"
            top= '50%'
            autoClose={100000}
            hideProgressBar={true}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            />

      <Router> 
        <div className="App">
        <Routes>
          { publicRouter.map((route,index) => {
            const Page = route.component;
            return (
              <Route
                key = {index}
                path = {route.path}
                element = {
                  <>
                      <Header/>
                      <Page/>
                  </>
                }
              />
            );
          })}
        </Routes>
      </div>
    </Router>
  </>
  );
}


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
export default App;
