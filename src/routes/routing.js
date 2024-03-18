import { createBrowserRouter } from "react-router-dom";
import HomeComp from "../component/HomeComp";
import AboutComp from "../component/AboutComp"
import ServicesComp from "../component/ServicesComp"
import ContactComp from "../component/ContactComp"
import CarouselImage from "../component/CarouselImage";
import ProtectedRoute from "./ProtectedRoute";
import LoginComp from "../component/LoginComp";

const router = createBrowserRouter([
    {path : '/', element:<HomeComp/> , children : [
        {path :'', element:<CarouselImage/>},
        {path : '/about' , element: <AboutComp/>},
        {path : '/services' , element:<ProtectedRoute RoutingComponent={ServicesComp}/>},
        {path : '/contact' , element:<ContactComp/>},
        {path : '/login' , element:<LoginComp/>}

    ]}
])

export default router