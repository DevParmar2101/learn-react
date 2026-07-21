import { Link } from "react-router-dom";
function Sidebar() {
    return (
        <aside className="left-sidebar">
            <div>
                <div className="brand-logo d-flex align-items-center justify-content-between">
                    <Link className="text-nowrap logo-img" to="/">
                        <img src="./src/assets/images/logos/dark-logo.svg" className="dark-logo" width="180" alt=""/>
                    </Link>
                    <div className="close-btn d-lg-none d-block sidebartoggler cursor-pointer" id="sidebarCollapse">
                        <i className="ti ti-x fs-8"></i>
                    </div>
                </div>
                <nav className="sidebar-nav scroll-sidebar" data-simplebar>
                    <ul id="sidebarnav">
                        <li className="nav-small-cap">
                            <i className="ti ti-dots nav-small-cap-icon fs-4"></i>
                            <span className="hide-menu">Home</span>
                        </li>

                        <li className="sidebar-item">
                            <Link className="sidebar-link" aria-expanded="false" to="/">
                                <span>
                                    <i className="ti ti-aperture"></i>
                                </span>
                                <span className="hide-menu">Dashboard</span>
                            </Link>
                        </li>

                    </ul>
                </nav>
            </div>
        </aside>
    );
}

export default Sidebar