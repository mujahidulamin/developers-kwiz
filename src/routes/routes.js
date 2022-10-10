import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import Main from '../layout/main'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: 
        [
           {
             path: '/home',
             element: <Home></Home>
           },
        ]
      },

])


export default router