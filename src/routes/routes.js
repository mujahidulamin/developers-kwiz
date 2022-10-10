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
             path: '/',
             loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
             element: <Home></Home>
           },
        ]
      },

])


export default router