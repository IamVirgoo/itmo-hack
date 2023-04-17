import { createBrowserRouter } from "react-router-dom";

import IndexPage from "./pages/indexPage";
import Welcome from "./pages/welcome";

export const Router = createBrowserRouter([
    {
        path : '/',
        element : <IndexPage/>
    },
    {
        path : '/welcome',
        element : <Welcome/>
    }
])