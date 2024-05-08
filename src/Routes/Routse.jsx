import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Home/Home";
import Login from "../Login/Login";
import SignUp from "../SignUp/SignUp";
import Checkout from "../Pages/Checkout/Checkout";
import OrderDetails from "../Pages/OrderDetails/OrderDetails";
import PrivateRoutes from "./PrivateRoutes";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path:'/login',
        element: <Login></Login>
      },
      {
        path:'/signup',
        element:<SignUp></SignUp>
      },
      {
        path:'/checkout/:id',
        element:<PrivateRoutes><Checkout></Checkout></PrivateRoutes>,
        loader:({params})=>fetch(`https://cars-doctor-server-rotons-projects.vercel.app/services/${params.id}`)
      },
      {
        path:'/bookings',
        element:<PrivateRoutes><OrderDetails></OrderDetails></PrivateRoutes>
      }
    ],
  },
]);
export default router;
