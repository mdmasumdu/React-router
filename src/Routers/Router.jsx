import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../assets/layout/Mainlayout";
import Home from "../assets/Components/Home";
import Products from "../assets/Components/Products";
import Productdeails from "../assets/Components/Productdeails";
import Dashboardlayout from "../assets/Components/Dashboardlayout/Dashboardlayout";
import Profile from "../assets/Components/Dashboardlayout/Profile";
import EditProfile from "../assets/Components/Dashboardlayout/EditProfile";
import Email from "../assets/Components/Dashboardlayout/Email";
import Your from "../assets/Components/Dashboardlayout/Your";

const mycreatedRouter = createBrowserRouter([
    {
        path:"/",
        element:<Mainlayout></Mainlayout>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            
               { path:"/products",
               loader:()=>fetch('https://dummyjson.com/products'),
                element:<Products></Products>
            },
            {
                path:"/dashboard",
                element:<Dashboardlayout></Dashboardlayout>,
                children:[
                    {
                        path:"/dashboard/profile",
                        element:<Profile></Profile>
                    },
                    {
                        path:"/dashboard/editprofile",
                        element:<EditProfile></EditProfile>
                    },
                    {
                        path:"/dashboard/email",
                        element:<Email></Email>
                    },
                    {
                        path:"/dashboard/youraccount",
                        element:<Your></Your>
                    },
                ]
            },
            {
                path:"/products/:id",
                loader:({params})=>fetch(`https://dummyjson.com/products/${params.id}`),
                element:<Productdeails></Productdeails>
            }
        ]

    }
])

export default mycreatedRouter;