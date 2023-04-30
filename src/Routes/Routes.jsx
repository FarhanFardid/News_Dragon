
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

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/home',
                element:<Category></Category>,
                loader: () => fetch(`http://localhost:5000/news`)
            },
            {
                path:'category/:id',
                element:<Category></Category>,
                loader : ({params}) => fetch(`http://localhost:5000/categories/${params.id}`)
            },
           
        ]
    },
    {
        path:'news',
        element: <NewsLayout></NewsLayout>,
        children:[
            {
                path:':id',
                element:<News></News>,
                loader: ({params}) => fetch(`http://localhost:5000/news/${params.id}`)
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
            }
        ]
    }
])

export default router;