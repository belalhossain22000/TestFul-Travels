import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import Layout from "../LayOut/Layout";
import Home from "../Home/Home";
import Blog from "../Blog/Blog";
import ChefRecipes from "../ChefRecipes";
import ErrorPage from "../ErrorPage/ErrorPage";
import LoginPage from "../LoginPage/LoginPage";
import Registration from "../Registation/Registration ";


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
                path:'/cheprecipes',
                element:<ChefRecipes></ChefRecipes>
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