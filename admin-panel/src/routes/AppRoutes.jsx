import { Routes, Route } from "react-router-dom";

import Login from "../components/auth/Login";
import Register from "../components/auth/Register";
import MainLayout from "../layouts/MainLayout";
import AuthLayout from "../layouts/AuthLayout";
import FormIndex from "../components/forms/Index";
import Dashboard from "../components/dashboard/Index";
import DatatableIndex from "../components/datatable/Index";
import ForgotPassword from "../components/auth/ForgotPassword";
import UserIndex from "../components/users/Index";
import UserCreate from "../components/users/Create";

function AppRoutes() {
    return (
        <Routes>

            {/*  MainLayout link  */}
            <Route element={<MainLayout />}>
                <Route path="/" element={<Dashboard />} />
                <Route path="/datatable" element={<DatatableIndex />} />
                <Route path="/form" element={<FormIndex />} />
                <Route path="/users/index" element={<UserIndex />} />
                <Route path="/users/create" element={<UserCreate />} />
            </Route>

            {/*  AuthLayout link  */}
            <Route element={<AuthLayout />}>
                <Route path="/login" element={<Login />}/>
                <Route path="/register" element={<Register />}/>
                <Route path="/forgot-password" element={<ForgotPassword />}/>
            </Route>

        </Routes>
    );
}

export default AppRoutes;