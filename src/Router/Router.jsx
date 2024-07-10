import {
    createBrowserRouter,
  } from "react-router-dom";
import Mainlayout from "../layout/Mainlayout";
import Home from "../pages/Home";
import AvailableFoods from "../pages/AvailableFoods";
import AddFood from "../pages/AddFood";
import FoodRequest from "../pages/FoodRequest";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Error from "../pages/Error";
import ViewDetails from "../pages/ViewDetails";
import PrivateRoute from './PrivateRoute';
import ManageMyFoods from "../pages/ManageMyFoods";
import Update from "../pages/Update";
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Mainlayout></Mainlayout>,
      errorElement: <Error></Error>,
      children: [
        {
            path: '/',
            element: <Home></Home>,
        },
        {
            path: '/availablefoods',
            element: <AvailableFoods></AvailableFoods>,
            
        },
        {
            path: '/addfood',
            element: <AddFood></AddFood>
        },
        {
            path: '/request',
            element: <FoodRequest></FoodRequest>
        },
        {
            path: '/register',
            element: <Register></Register>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/manage',
            element: <ManageMyFoods></ManageMyFoods>
        },
        {
            path: '/updated/:id',
            element: <Update></Update>,
            loader: ({params}) => fetch(`https://food-sharing-self.vercel.app/food/${params.id}`)
        },
        {
          path: '/viewdetails/:id',
          element: <PrivateRoute><ViewDetails></ViewDetails></PrivateRoute>,
          loader: ({params}) => fetch(`https://food-sharing-self.vercel.app/food/${params.id}`)
        }
      ]
    },
  ]);
  export default router;