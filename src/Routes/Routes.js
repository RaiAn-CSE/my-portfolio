import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import About from "../Pages/About/About";
import ContactMe from "../Pages/ContactMe/ContactMe";
import Home from "../Pages/Home/Home/Home";

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
            }
        ]
    },
]);

export default router;