// import React, { useState, useEffect } from 'react';
// import { Route, BrowserRouter } from "react-router-dom";
// import { Routes } from "../data/routes";

// // pages
// import Presentation from "./Presentation";
// import Upgrade from "./Upgrade";
// import DashboardOverview from "./dashboard/DashboardOverview";
// import Transactions from "./Transactions";
// import Settings from "./Settings";
// import BootstrapTables from "./tables/BootstrapTables";
// import Signin from "./examples/Signin";
// import Signup from "./examples/Signup";
// import Lock from "./examples/Lock";
// import NotFoundPage from "./examples/NotFound";
// import ServerError from "./examples/ServerError";


// // components
// import Sidebar from "../pages/utils/Sidebar";
// import Navbar from "../pages/utils/Navbar";
// import Footer from "../pages/utils/Footer";
// import Preloader from "../pages/utils/Preloader";

// import Accordion from "../pages/widgets/Accordion";
// import Alerts from "../pages/widgets/Alerts";
// import Badges from "../pages/widgets/Badges";
// import Breadcrumbs from "../pages/widgets/Breadcrumbs";
// import Buttons from "../pages/widgets/Buttons";
// import Forms from "../pages/widgets/Forms";
// import Modals from "../pages/widgets/Modals";
// import Navs from "../pages/widgets/Navs";
// import Navbars from "../pages/widgets/Navbars";
// import Pagination from "../pages/widgets/Pagination";
// import Popovers from "../pages/widgets/Popovers";
// import Progress from "../pages/widgets/Progress";
// import Tables from "../pages/widgets/Tables";
// import Tabs from "../pages/widgets/Tabs";
// import Tooltips from "../pages/widgets/Tooltips";
// import Toasts from "../pages/widgets/Toasts";
// import HomePageApp from './HomePageApp';

// // const RouteWithLoader = ({ component: Component, ...rest }) => {
// //   const [loaded, setLoaded] = useState(false);

// //   useEffect(() => {
// //     const timer = setTimeout(() => setLoaded(true), 1000);
// //     return () => clearTimeout(timer);
// //   }, []);

// //   return (
// //     <Route {...rest} render={props => ( <> <Preloader show={loaded ? false : true} /> <Component {...props} /> </> ) } />
// //   );
// // };

// // const RouteWithSidebar = ({ component: Component, ...rest }) => {
// //   const [loaded, setLoaded] = useState(false);

// //   useEffect(() => {
// //     const timer = setTimeout(() => setLoaded(true), 1000);
// //     return () => clearTimeout(timer);
// //   }, []);

// //   const localStorageIsSettingsVisible = () => {
// //     return localStorage.getItem('settingsVisible') === 'false' ? false : true
// //   }

// //   const [showSettings, setShowSettings] = useState(localStorageIsSettingsVisible);

// //   const toggleSettings = () => {
// //     setShowSettings(!showSettings);
// //     localStorage.setItem('settingsVisible', !showSettings);
// //   }

// //   return (
// //     <Route {...rest} render={props => (
// //       <>
// //         <Preloader show={loaded ? false : true} />
// //         <Sidebar />

// //         <main className="content">
// //           <Navbar />
// //           <Component {...props} />
// //           <Footer toggleSettings={toggleSettings} showSettings={showSettings} />
// //         </main>
// //       </>
// //     )}
// //     />
// //   );
// // };

// function HomePageCopy(){
//   return (
//     <BrowserRouter>
//     <Routes>
//       <Route path="/" element={<HomePageApp/>} exact />
//       {/* <PrivateRoute path="/" element={<HomePage/>} exact/> */}
//       {/* <Route path="/vendor" element={<VendorMenu />} /> */}
//       {/* <Route path="/menu" element={<VendorPage />} />
//       <Route path="/vendors" element={<AllVendors />} /> */}
    
  
//       {/* <Route element={<CheckLogin />}>
//         <Route path="/forget" element={<Forget />} /> 
//       </Route>
  
//       <Route element={<CheckLogin />}>
//         <Route path="/login" element={<Login />} />
//       </Route>
  
//       <Route element={<CheckLogin />}>
//         <Route path="/register" element={<Register />} />
//       </Route>
  
//       <Route element={<PrivateRoute />}>
//         <Route path="/cart" element={<Cart />} />
//       </Route>
  
//       <Route element={<PrivateRoute />}>
//         <Route path="/order" element={<Orders />} />
//       </Route>
  
//       <Route element={<PrivateRoute />}>
//         <Route path="/checkout" element={<Checkout />} />
//       </Route> */}
//     </Routes>
//   </BrowserRouter>
//   )
// }

// export default HomePageCopy;
