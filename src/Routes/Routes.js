import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import About from "../Pages/About/About";
import Blog from "../Pages/Blog/Blog";
import ContactMe from "../Pages/ContactMe/ContactMe";
import Home from "../Pages/Home/Home/Home";
import ProjectDetails from "../Pages/Home/ProjectDetails";
import Projects from "../Pages/Home/Projects";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/aboutMe",
                element: <About></About>
            },
            {
                path: "/contactMe",
                element: <ContactMe></ContactMe>
            },
            {
                path: "/blog",
                element: <Blog></Blog>
            },
            // {
            //     path: '/category/:id',
            //     element: <AllModels></AllModels>,
            //     loader: ({ params }) => fetch(`https://y-five-snowy.vercel.app/category/${params.id}`)
            // },
            {
                path: "/projects",
                element: <Projects></Projects>
            },
            {
                path: "/projectDetails",
                element: <ProjectDetails></ProjectDetails>,
                loader: ({ params }) => fetch(`http://localhost:3000/productDetails/${params.id}`)
            },
        ]
    },
]);

export default router;