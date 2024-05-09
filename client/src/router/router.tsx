import { createBrowserRouter } from 'react-router-dom';
import Clients from '../pages/Clients'
import Offers from '../pages/Offers';
import Dashboard from '../pages/Dashboard';
import Reports from "../pages/Reports"
import WorkTeam from "../pages/WorkTeam"
import AddClient from "../pages/AddClient";
import AddOffer from "../pages/AddOffer"
import Root from './Root';
import LoginForm from "../pages/LoginForm"
import RegisterForm from "../pages/RegisterForm"
import ExportCSV from '../components/ExportCSV';



const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/",
                element: <Dashboard/>
            },
            {
                path: "/clients",
                element: <Clients />
            },
            {
                path: "/offers",
                element: <Offers/>
            },
            {
                path: "/reports",
                element: <Reports/>
            },
            {
                path: "/workteam",
                element: <WorkTeam/>
            },
            {
                path: "/clients/addClient",
                element: <AddClient />
            },
            {
                path: "/offers/addOffer",
                element: <AddOffer/>
            }
        ],
    },
    {
        path: "/login",
        element: <LoginForm />
    },
    {
        path: "/register",
        element: <RegisterForm />
    },
])

export default router;