import { Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import Dashboard from "../components/dashboard/Index";
import DatatableIndex from "../components/datatable/Index";
import FormIndex from "../components/forms/Index";

function AppRoutes() {
    return (
        <Routes>
            <Route element={<MainLayout />}>
                <Route path="/" element={<Dashboard />} />
                <Route path="/datatable" element={<DatatableIndex />} />
                <Route path="/form" element={<FormIndex />} />
            </Route>
        </Routes>
    );
}

export default AppRoutes;