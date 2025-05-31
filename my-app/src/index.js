import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
// import 'flowbite';
import reportWebVitals from './reportWebVitals';
import Header from './Components/m-wael/Header/Header';
import Footer from './Components/m-wael/Footer/Footer';
import HomeContent from './Components/m-wael/Home/homeContent';
import LookBook from './Components/m-wael/LookBook/LookBook'
import Cart from './Components/m-wael/Cart/Cart'
import Checkout from './Components/m-wael/Checkout/Checkout'
import Account from './Components/m-wael/Account/Account'
import OurStory from './Components/m-wael/OurStory/OurStory';
import Men from "./Components/m-hamza/Men/menPage";
import Women from "./Components/m-hamza/Women/womenPage";
import Collection from "./Components/m-hamza/Collection/menNWomen";
import Sale from "./Components/m-hamza/Sale/Sale";
import Contact from "./Components/m-hamza/Contact/Conatact";

const router = createBrowserRouter([
  { path: '/',
  element: 
    <App/>
  },
  {path: '/men',
    element: 
    <>
      <Header/>
      <Men/>
      <Footer/>
    </>
  },
  {path: '/women',
    element: 
    <>
      <Header/>
      <Women/>
      <Footer/>
    </>}
  ,
  {path: '/collection',
    element: 
    <>
      <Header/>
      <Collection/>
      <Footer/>
    </>
  },
  {path: '/sale',
    element: 
    <>
      <Header/>
      <Sale/>
      <Footer/>
    </>
  },
  {path: '/contact',
    element:
    <>
      <Header/>
      <Contact/>
      <Footer/>
    </>
  },
  { path: '/lookbook',
    element: 
    <>
      <Header/>
      <LookBook />
      <Footer/>
    </>
  },
  { path: '/ourstory', 
    element: 
    <>
      <Header/>
      <OurStory/>
      <Footer/>
    </>
  },
  { path: '/cart',
     element:
     <>
      <Header/>
      <Cart />
      <Footer/>
     </> 
  },
  { path: '/checkout', 
    element:
      <Checkout /> 
  },
  { path: '/account', 
    element: 
      <Account /> 
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
    {/* <App/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

