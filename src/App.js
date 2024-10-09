import logo from './logo.svg';
import './App.css';
// =========================================================
// * Volt React Dashboard
// =========================================================

// * Product Page: https://themesberg.com/product/dashboard/volt-react
// * Copyright 2021 Themesberg (https://www.themesberg.com)
// * Official Repository: https://github.com/themesberg/volt-react-dashboard
// * License: MIT License (https://themesberg.com/licensing)

// * Designed and coded by https://themesberg.com

// =========================================================

// * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software. Please contact us to request a removal.

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// core styles
import "../src/components/scss/volt.scss";

// vendor styles
import "react-datetime/css/react-datetime.css";

import HomePage from "../src/components/pages/HomePage copy";

import ScrollToTop from "../src/components/pages/utils/ScrollToTop";
import HomePageApp from './components/pages/HomePageApp';
import SignUp from './components/pages/SignUp';
import SignIn from './components/pages/SignIn';
import Feature from './components/pages/Feature';
import Faq from './components/pages/Faq';
import Blog from './components/pages/Blog';
import BlogDetails from './components/pages/BlogDetails';
import AboutUs from './components/pages/AboutUs';
import DashboardOverview from './components/pages/dashboard/DashboardOverview';
import Settings from './components/pages/Settings';
import Fund from './components/pages/Fund';
import Transaction from './components/pages/Transactions';
import UserList from './components/pages/UserList';
import Profile from './components/pages/widgets/MyProfile';
import CheckLogin from './components/Service/CheckLogin';
import FundAccount from './components/pages/fundaccount';
import Transfer from './components/pages/widgets/Transfer';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePageApp/>} exact />
      {/* <Route path="/signup" element={<SignUp/>} exact />
      <Route path="/signin" element={<SignIn/>} exact /> */}
      <Route path="/feature" element={<Feature/>} exact />
      <Route path="/faq" element={<Faq/>} exact />
      <Route path="/about" element={<AboutUs/>} exact />
      <Route path="/blog" element={<Blog/>} exact />
      <Route path="/detail" element={<BlogDetails/>} exact />
      <Route path="/dashboard" element={<DashboardOverview/>} exact />
      <Route path="/profile" element={<Settings/>} exact />
      <Route path="/profiles" element={<Profile/>} exact />
      <Route path="/transfer" element={<Transfer/>} exact />
      <Route path="/fund" element={<Fund/>} exact />
      <Route path="/fundaccount" element={<FundAccount/>} exact />
      <Route path="/transaction" element={<Transaction/>} exact />
      <Route path="/users" element={<UserList/>} exact />
      
      

  
       <Route element={<CheckLogin />}>
        <Route path="/signup" element={<SignUp />} /> 
      </Route>


      <Route element={<CheckLogin />}>
        <Route path="/signin" element={<SignIn />} /> 
      </Route>
  
    </Routes>
  </BrowserRouter>
  );
}



export default App;









