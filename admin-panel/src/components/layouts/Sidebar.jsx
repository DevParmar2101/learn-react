import { NavLink, useLocation } from "react-router-dom";

function Sidebar() {
    const location = useLocation();

    return (
        <aside className="left-sidebar">
            <div>
                <div className="brand-logo d-flex align-items-center justify-content-between">
                    <NavLink className="text-nowrap logo-img" to="/">
                        <img src="./src/assets/images/logos/dark-logo.svg" className="dark-logo" width="180" alt="" />
                    </NavLink>

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

                        <li className={location.pathname === "/" ? "sidebar-item selected" : "sidebar-item"}>
                            <NavLink to="/" end className={({ isActive }) => isActive ? "sidebar-link active" : "sidebar-link" }>
                                <span>
                                    <i className="ti ti-aperture"></i>
                                </span>
                                <span className="hide-menu">Dashboard</span>
                            </NavLink>
                        </li>

                        <li className={location.pathname === "/datable" ? "sidebar-item selected" : "sidebar-item"}>
                            <NavLink to="/datatable" className={({ isActive }) => isActive ? "sidebar-link active" : "sidebar-link" }>
                                <span>
                                    <i className="ti ti-table"></i>
                                </span>
                                <span className="hide-menu">Datatable</span>
                            </NavLink>
                        </li>

                        <li className={location.pathname === "/form" ? "sidebar-item selected" : "sidebar-item"}>
                            <NavLink to="/form" className={({ isActive }) => isActive ? "sidebar-link active" : "sidebar-link" }>
                                <span>
                                    <i className="ti ti-forms"></i>
                                </span>
                                <span className="hide-menu">Forms</span>
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </aside>
    );
}

export default Sidebar;