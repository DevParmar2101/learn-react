import {Outlet} from "react-router-dom";

function AuthLayout() {
    return (

        <div className="page-wrapper" id="main-wrapper" data-layout="vertical" data-sidebartype="full" data-sidebar-position="fixed" data-header-position="fixed">
            <div className="position-relative overflow-hidden radial-gradient min-vh-100 d-flex align-items-center justify-content-center">
                <Outlet/>
            </div>
        </div>
    )
}
export default AuthLayout;