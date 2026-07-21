import Sidebar from "../components/layouts/Sidebar";
import Header from "../components/layouts/Header";
import ShoppingCart from "../components/layouts/ShoppingCart";

function MainLayout() {

    return(
        <>
            <Sidebar/>
            <div className="body-wrapper">
                <Header />
            </div>
            <ShoppingCart />
        </>
    );
}

export default MainLayout;