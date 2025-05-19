import Login from "../auth/Login";
import Register from "../auth/Register";
import StadiumDetails from "../components/StadiumDetails";
import Home from "../pages/Home";

export const routes = [
    {
        path: "/",
        element: <Home />
    },

    {
        path: "/stadium/:id",
        element: <StadiumDetails/>
    },
    {
        path: '/login',
        element: <Login/>
    },

    {
        path: '/register',
        element: <Register/>
    },
]