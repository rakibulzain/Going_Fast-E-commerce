import { createBrowserRouter } from "react-router";
import Home from "./Component/Page/Home";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Home/>,
        children: [
            {
                path: "about",
                element: <div>About Page</div>
            }
        ]
    },

])


export default router;