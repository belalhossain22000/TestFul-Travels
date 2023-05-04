import { createBrowserRouter } from "react-router-dom";

import Layout from "../LayOut/Layout";
import Home from "../Home/Home";
import Blog from "../Blog/Blog";
import ChefRecipes from "../ChefRecipes";
import ErrorPage from "../ErrorPage/ErrorPage";
import LoginPage from "../LoginPage/LoginPage";
import Registration from "../Registation/Registration ";
import PrivetRout from "../PrivetRout";



export const router=createBrowserRouter([
    {
        path:"/",
        element:<Layout></Layout>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            },
            {
                path:'/chefrecipes/:id',
                element:<PrivetRout><ChefRecipes></ChefRecipes></PrivetRout>,
            },
            {
                path:'/register',
                element:<Registration></Registration>
            },
            {
                path:'/login',
                element:<LoginPage></LoginPage>
            },
        ]
    }
])