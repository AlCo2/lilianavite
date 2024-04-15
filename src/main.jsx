import React from 'react'
import ReactDOM from 'react-dom/client'
import Welcome from './welcome.jsx'
import Login from './login/page.jsx'
import Store from './store/page.jsx'
import ProductPage from './store/product/page.jsx';
import Register from './register/page.jsx'
import Checkout from './checkout/page.jsx'
import Fastcheckout from './checkout/fastcheckout/page.jsx'
import Checkorder from './checkorder/page.jsx'
import Dashboard from './dashboard/layout.jsx'
import Overview from './dashboard/page.jsx'
import Customer from './dashboard/customer/page.jsx'
import Product from './dashboard/product/page.jsx'
import Category from './dashboard/category/page.jsx'
import Order from './dashboard/order/page.jsx'
import Message from './dashboard/message/page.jsx'
import Promotions from './promotions/page.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ThemeProvider } from '@mui/material'
import './index.css'
import { theme } from './theme.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Welcome/>,
  },
  {
    path:'/login',
    element: <Login/>,
  },
  {
    path:'/register',
    element: <Register/>,
  },
  {
    path:'/store',
    element: <Store/>,
  },
  {
    path:'/store/product',
    element: <ProductPage/>
  },
  {
    path:'/dashboard',
    element: <Dashboard/>,
    children:[
      {
        path:'/dashboard',
        element:<Overview/>,
      },
      {
        path:'/dashboard/customer',
        element:<Customer/>
      },
      {
        path:'/dashboard/product',
        element:<Product/>
      },
      {
        path:'/dashboard/order',
        element:<Order/>
      },
      {
        path:'/dashboard/category',
        element:<Category/>
      },
      {
        path:'/dashboard/message',
        element:<Message/>
      },
    ]
  },
  {
    path:'/checkout',
    element: <Checkout/>,
  },
  {
    path:'/checkout/fastcheckout',
    element: <Fastcheckout/>
  }
  ,
  {
    path:'/checkorder',
    element: <Checkorder/>
  },
  {path:'/promotions',
    element: <Promotions/>,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
)
