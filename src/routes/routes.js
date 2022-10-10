import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Home from "../components/Home/Home";
import QuizDetails from "../components/QuizDetails/QuizDetails";
import Main from '../layout/main'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: 
        [
           {
             path: '/',
             loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
             element: <Home></Home>
           },
           {
            path: '/category',
            loader: () => fetch('https://openapi.programming-hero.com/api/quiz'),
            element: <Home></Home>
          },
          {
            path: '/category/:categoryId',
            loader: async ({params}) =>{
                return fetch(`https://openapi.programming-hero.com/api/quiz/${params.categoryId}`)
            },
            element: <QuizDetails></QuizDetails>
          },
        ]
      },

])


export default router