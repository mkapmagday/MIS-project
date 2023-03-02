import {createBrowserRouter} from "react-router-dom";
import App from "./App";
import Layout from "./components/Layout";
import About from "./views/About";
import Careers from "./views/Careers";
import Clients from "./views/Clients";
import Contact from "./views/Contact";
import Homepage from "./views/homepage";
import ServicesAndSolutions from "./views/ServicesAndSolutions";
const router=createBrowserRouter([
    {
        path:'/',
        element: <Layout />,
        children:[
            {
                path:'/',
                element: <Homepage />
            },
            {
                path:'/about',
                element: <About />
            },
            {
                path:'/services&solutions',
                element: <ServicesAndSolutions />
            },
            {
                path:'/clients',
                element: <Clients />
            },
            {
                path:'/careers',
                element: <Careers />
            },
            {
                path:'/contact',
                element: <Contact />
            },
        ]
    },
   
])

export default router;