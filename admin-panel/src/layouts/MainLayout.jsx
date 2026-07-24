import {Outlet} from "react-router-dom";
import Sidebar from "../components/layouts/Sidebar";
import Header from "../components/layouts/Header";
import ShoppingCart from "../components/layouts/ShoppingCart";

function MainLayout() {

    return(
        <div className="page-wrapper" id="main-wrapper" data-theme="blue_theme" data-layout="vertical"
             data-sidebartype="full" data-sidebar-position="fixed" data-header-position="fixed"><Sidebar/>
            <div className="body-wrapper">
                <Header/>
                <div className="container-fluid">
                    <Outlet/>
                </div>
            </div>
            <ShoppingCart/>
        </div>
    );
}

export default MainLayout;