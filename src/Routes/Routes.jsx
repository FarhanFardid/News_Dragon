
import {
    createBrowserRouter,
  
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Category from "../Pages/Home/Category/Category";
import NewsLayout from "../Layout/NewsLayout";
import News from "../Pages/News/News";
import Login from "../Pages/Auth/Login";
import AuthLayout from "../Layout/AuthLayout";
import Register from "../Pages/Auth/Register";
import PrivateRoutes from "./PrivateRoutes";
import Terms from "../Pages/Auth/Terms";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/home',
                element:<Category></Category>,
                loader: () => fetch(`https://news-dragon-server-farhanfardid.vercel.app/news`)
            },
            {
                path:'category/:id',
                element:<PrivateRoutes><Category></Category></PrivateRoutes>,
                loader : ({params}) => fetch(`https://news-dragon-server-farhanfardid.vercel.app/categories/${params.id}`)
            },
           
        ]
    },
    {
        path:'news',
        element: <NewsLayout></NewsLayout>,
        children:[
            {
                path:':id',
                element:<PrivateRoutes><News></News></PrivateRoutes>,
                loader: ({params}) => fetch(`https://news-dragon-server-farhanfardid.vercel.app/news/${params.id}`)
            }
        ]
    },
    {
        path:'auth',
        element:<AuthLayout></AuthLayout>,
        children:[
            {
                path: 'login',
                element:<Login></Login>
            },
            {
                path:'register',
                element:<Register></Register>
            },
            {
                path:'terms',
                element:<Terms></Terms>
            }
        ]
    }
])

export default router;