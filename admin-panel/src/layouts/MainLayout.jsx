import {Outlet} from "react-router-dom";
import Sidebar from "../components/layouts/Sidebar";
import Header from "../components/layouts/Header";
import ShoppingCart from "../components/layouts/ShoppingCart";

function MainLayout() {

    return(
        <>
            <Sidebar/>
            <div className="body-wrapper">
                <Header />

                <Outlet />
            </div>
            <ShoppingCart />
        </>
    );
}

export default MainLayout;