function Sidebar() {
    return (
        <aside className="left-sidebar">
            <div>
                <div className="brand-logo d-flex align-items-center justify-content-between">
                    <a href="./index.html" className="text-nowrap logo-img">
                        <img src="./src/assets/images/logos/dark-logo.svg" className="dark-logo" width="180" alt=""/>
                    </a>
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
                            <a className="sidebar-link" href="./index.html" aria-expanded="false">
                  <span>
                    <i className="ti ti-aperture"></i>
                  </span>
                                <span className="hide-menu">Modern</span>
                            </a>
                        </li>
                        <li className="sidebar-item">
                            <a className="sidebar-link" href="./index2.html" aria-expanded="false">
                  <span>
                    <i className="ti ti-shopping-cart"></i>
                  </span>
                                <span className="hide-menu">eCommerce</span>
                            </a>
                        </li>
                        <li className="sidebar-item">
                            <a className="sidebar-link" href="./index3.html" aria-expanded="false">
                  <span>
                    <i className="ti ti-currency-dollar"></i>
                  </span>
                                <span className="hide-menu">NFT</span>
                            </a>
                        </li>
                        <li className="sidebar-item">
                            <a className="sidebar-link" href="./index4.html" aria-expanded="false">
                  <span>
                    <i className="ti ti-cpu"></i>
                  </span>
                                <span className="hide-menu">Crypto</span>
                            </a>
                        </li>
                        <li className="sidebar-item">
                            <a className="sidebar-link" href="./index5.html" aria-expanded="false">
                  <span>
                    <i className="ti ti-activity-heartbeat"></i>
                  </span>
                                <span className="hide-menu">General</span>
                            </a>
                        </li>
                        <li className="sidebar-item">
                            <a className="sidebar-link" href="./index6.html" aria-expanded="false">
                  <span>
                    <i className="ti ti-playlist"></i>
                  </span>
                                <span className="hide-menu">Music</span>
                            </a>
                        </li>

                        <li className="nav-small-cap">
                            <i className="ti ti-dots nav-small-cap-icon fs-4"></i>
                            <span className="hide-menu">Apps</span>
                        </li>
                        <li className="sidebar-item">
                            <a className="sidebar-link" href="./app-calendar.html" aria-expanded="false">
                  <span>
                    <i className="ti ti-calendar"></i>
                  </span>
                                <span className="hide-menu">Calendar</span>
                            </a>
                        </li>
                        <li className="sidebar-item">
                            <a className="sidebar-link" href="./app-chat.html" aria-expanded="false">
                  <span>
                    <i className="ti ti-message-dots"></i>
                  </span>
                                <span className="hide-menu">Chat</span>
                            </a>
                        </li>
                        <li className="sidebar-item">
                            <a className="sidebar-link" href="./app-email.html" aria-expanded="false">
                  <span>
                    <i className="ti ti-mail"></i>
                  </span>
                                <span className="hide-menu">Email</span>
                            </a>
                        </li>
                        <li className="sidebar-item">
                            <a className="sidebar-link" href="./app-notes.html" aria-expanded="false">
                  <span>
                    <i className="ti ti-notes"></i>
                  </span>
                                <span className="hide-menu">Notes</span>
                            </a>
                        </li>
                        <li className="sidebar-item">
                            <a className="sidebar-link" href="./app-contact.html" aria-expanded="false">
                  <span>
                    <i className="ti ti-phone"></i>
                  </span>
                                <span className="hide-menu">Contact Table</span>
                            </a>
                        </li>
                        <li className="sidebar-item">
                            <a className="sidebar-link" href="./app-contact2.html" aria-expanded="false">
                  <span>
                    <i className="ti ti-list-details"></i>
                  </span>
                                <span className="hide-menu">Contact List</span>
                            </a>
                        </li>
                        <li className="sidebar-item">
                            <a className="sidebar-link" href="./app-invoice.html" aria-expanded="false">
                  <span>
                    <i className="ti ti-file-text"></i>
                  </span>
                                <span className="hide-menu">Invoice</span>
                            </a>
                        </li>
                        <li className="sidebar-item">
                            <a className="sidebar-link" href="./page-user-profile.html" aria-expanded="false">
                  <span>
                    <i className="ti ti-user-circle"></i>
                  </span>
                                <span className="hide-menu">User Profile</span>
                            </a>
                        </li>
                        <li className="sidebar-item">
                            <a className="sidebar-link has-arrow" href="#" aria-expanded="false">
                  <span className="d-flex">
                    <i className="ti ti-chart-donut-3"></i>
                  </span>
                                <span className="hide-menu">Blog</span>
                            </a>
                            <ul aria-expanded="false" className="collapse first-level">
                                <li className="sidebar-item">
                                    <a href="./blog-posts.html" className="sidebar-link">
                                        <div className="round-16 d-flex align-items-center justify-content-center">
                                            <i className="ti ti-circle"></i>
                                        </div>
                                        <span className="hide-menu">Posts</span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a href="./blog-detail.html" className="sidebar-link">
                                        <div className="round-16 d-flex align-items-center justify-content-center">
                                            <i className="ti ti-circle"></i>
                                        </div>
                                        <span className="hide-menu">Details</span>
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="sidebar-item">
                            <a className="sidebar-link has-arrow" href="#" aria-expanded="false">
                  <span className="d-flex">
                    <i className="ti ti-basket"></i>
                  </span>
                                <span className="hide-menu">Ecommerce</span>
                            </a>
                            <ul aria-expanded="false" className="collapse first-level">
                                <li className="sidebar-item">
                                    <a href="./eco-shop.html" className="sidebar-link">
                                        <div className="round-16 d-flex align-items-center justify-content-center">
                                            <i className="ti ti-circle"></i>
                                        </div>
                                        <span className="hide-menu">Shop</span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a href="./eco-shop-detail.html" className="sidebar-link">
                                        <div className="round-16 d-flex align-items-center justify-content-center">
                                            <i className="ti ti-circle"></i>
                                        </div>
                                        <span className="hide-menu">Details</span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a href="./eco-product-list.html" className="sidebar-link">
                                        <div className="round-16 d-flex align-items-center justify-content-center">
                                            <i className="ti ti-circle"></i>
                                        </div>
                                        <span className="hide-menu">List</span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a href="./eco-checkout.html" className="sidebar-link">
                                        <div className="round-16 d-flex align-items-center justify-content-center">
                                            <i className="ti ti-circle"></i>
                                        </div>
                                        <span className="hide-menu">Checkout</span>
                                    </a>
                                </li>
                            </ul>
                        </li>

                        <li className="nav-small-cap">
                            <i className="ti ti-dots nav-small-cap-icon fs-4"></i>
                            <span className="hide-menu">PAGES</span>
                        </li>
                        <li className="sidebar-item">
                            <a className="sidebar-link" href="./page-pricing.html" aria-expanded="false">
                  <span>
                    <i className="ti ti-currency-dollar"></i>
                  </span>
                                <span className="hide-menu">Pricing</span>
                            </a>
                        </li>
                        <li className="sidebar-item">
                            <a className="sidebar-link" href="./page-faq.html" aria-expanded="false">
                  <span>
                    <i className="ti ti-help"></i>
                  </span>
                                <span className="hide-menu">FAQ</span>
                            </a>
                        </li>
                        <li className="sidebar-item">
                            <a className="sidebar-link" href="./page-account-settings.html" aria-expanded="false">
                  <span>
                    <i className="ti ti-user-circle"></i>
                  </span>
                                <span className="hide-menu">Account Setting</span>
                            </a>
                        </li>
                        <li className="sidebar-item">
                            <a className="sidebar-link" href="../../../landingpage/index.html" aria-expanded="false">
                  <span>
                    <i className="ti ti-app-window"></i>
                  </span>
                                <span className="hide-menu">Landing Page</span>
                            </a>
                        </li>
                        <li className="sidebar-item">
                            <a className="sidebar-link has-arrow" href="#" aria-expanded="false">
                  <span className="d-flex">
                    <i className="ti ti-layout"></i>
                  </span>
                                <span className="hide-menu">Widgets</span>
                            </a>
                            <ul aria-expanded="false" className="collapse first-level">
                                <li className="sidebar-item">
                                    <a href="./widgets-cards.html" className="sidebar-link">
                                        <div className="round-16 d-flex align-items-center justify-content-center">
                                            <i className="ti ti-circle"></i>
                                        </div>
                                        <span className="hide-menu">Cards</span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a href="./widgets-banners.html" className="sidebar-link">
                                        <div className="round-16 d-flex align-items-center justify-content-center">
                                            <i className="ti ti-circle"></i>
                                        </div>
                                        <span className="hide-menu">Banner</span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a href="./widgets-charts.html" className="sidebar-link">
                                        <div className="round-16 d-flex align-items-center justify-content-center">
                                            <i className="ti ti-circle"></i>
                                        </div>
                                        <span className="hide-menu">Charts</span>
                                    </a>
                                </li>
                            </ul>
                        </li>

                        <li className="nav-small-cap">
                            <i className="ti ti-dots nav-small-cap-icon fs-4"></i>
                            <span className="hide-menu">UI</span>
                        </li>

                        <li className="sidebar-item">
                            <a className="sidebar-link has-arrow" href="#" aria-expanded="false">
                  <span className="d-flex">
                    <i className="ti ti-layout-grid"></i>
                  </span>
                                <span className="hide-menu">UI Elements</span>
                            </a>
                            <ul aria-expanded="false" className="collapse first-level">
                                <li className="sidebar-item">
                                    <a href="./ui-accordian.html" className="sidebar-link">
                                        <div className="round-16 d-flex align-items-center justify-content-center">
                                            <i className="ti ti-circle"></i>
                                        </div>
                                        <span className="hide-menu">Accordian</span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a href="./ui-badge.html" className="sidebar-link">
                                        <div className="round-16 d-flex align-items-center justify-content-center">
                                            <i className="ti ti-circle"></i>
                                        </div>
                                        <span className="hide-menu">Badge</span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a href="./ui-buttons.html" className="sidebar-link">
                                        <div className="round-16 d-flex align-items-center justify-content-center">
                                            <i className="ti ti-circle"></i>
                                        </div>
                                        <span className="hide-menu">Buttons</span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a href="./ui-dropdowns.html" className="sidebar-link">
                                        <div className="round-16 d-flex align-items-center justify-content-center">
                                            <i className="ti ti-circle"></i>
                                        </div>
                                        <span className="hide-menu">Dropdowns</span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a href="./ui-modals.html" className="sidebar-link">
                                        <div className="round-16 d-flex align-items-center justify-content-center">
                                            <i className="ti ti-circle"></i>
                                        </div>
                                        <span className="hide-menu">Modals</span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a href="./ui-tab.html" className="sidebar-link">
                                        <div className="round-16 d-flex align-items-center justify-content-center">
                                            <i className="ti ti-circle"></i>
                                        </div>
                                        <span className="hide-menu">Tab</span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a href="./ui-tooltip-popover.html" className="sidebar-link">
                                        <div className="round-16 d-flex align-items-center justify-content-center">
                                            <i className="ti ti-circle"></i>
                                        </div>
                                        <span className="hide-menu">Tooltip & Popover</span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a href="./ui-notification.html" className="sidebar-link">
                                        <div className="round-16 d-flex align-items-center justify-content-center">
                                            <i className="ti ti-circle"></i>
                                        </div>
                                        <span className="hide-menu">Notification</span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a href="./ui-progressbar.html" className="sidebar-link">
                                        <div className="round-16 d-flex align-items-center justify-content-center">
                                            <i className="ti ti-circle"></i>
                                        </div>
                                        <span className="hide-menu">Progressbar</span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a href="./ui-pagination.html" className="sidebar-link">
                                        <div className="round-16 d-flex align-items-center justify-content-center">
                                            <i className="ti ti-circle"></i>
                                        </div>
                                        <span className="hide-menu">Pagination</span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a href="./ui-typography.html" className="sidebar-link">
                                        <div className="round-16 d-flex align-items-center justify-content-center">
                                            <i className="ti ti-circle"></i>
                                        </div>
                                        <span className="hide-menu">Typography</span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a href="./ui-bootstrap-ui.html" className="sidebar-link">
                                        <div className="round-16 d-flex align-items-center justify-content-center">
                                            <i className="ti ti-circle"></i>
                                        </div>
                                        <span className="hide-menu">Bootstrap UI</span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a href="./ui-breadcrumb.html" className="sidebar-link">
                                        <div className="round-16 d-flex align-items-center justify-content-center">
                                            <i className="ti ti-circle"></i>
                                        </div>
                                        <span className="hide-menu">Breadcrumb</span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a href="./ui-offcanvas.html" className="sidebar-link">
                                        <div className="round-16 d-flex align-items-center justify-content-center">
                                            <i className="ti ti-circle"></i>
                                        </div>
                                        <span className="hide-menu">Offcanvas</span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a href="./ui-lists.html" className="sidebar-link">
                                        <div className="round-16 d-flex align-items-center justify-content-center">
                                            <i className="ti ti-circle"></i>
                                        </div>
                                        <span className="hide-menu">Lists</span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a href="./ui-grid.html" className="sidebar-link">
                                        <div className="round-16 d-flex align-items-center justify-content-center">
                                            <i className="ti ti-circle"></i>
                                        </div>
                                        <span className="hide-menu">Grid</span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a href="./ui-carousel.html" className="sidebar-link">
                                        <div className="round-16 d-flex align-items-center justify-content-center">
                                            <i className="ti ti-circle"></i>
                                        </div>
                                        <span className="hide-menu">Carousel</span>
                                    </a>
                                </li>
                                <li className="sidebar-item">
                                    <a href="./ui-scrollspy.html" className="sidebar-link">
                                        <div className="round-16 d-flex align-items-center justify-content-center">
                                            <i className="ti ti-circle"></i>
                                        </div>
                                        <span className="hide-menu">Scrollspy</span>
                                    </a>
                                </li>
                                <li className="sidebar-item mb-3">
                                    <a href="./ui-spinner.html" className="sidebar-link">
                                        <div className="round-16 d-flex align-items-center justify-content-center">
                                            <i className="ti ti-circle"></i>
                                        </div>
                                        <span className="hide-menu">Spinner</span>
                                    </a>
                                </li>
                            </ul>
                        </li>

                        <li className="nav-small-cap">
                            <i className="ti ti-dots nav-small-cap-icon fs-4"></i>
                            <span className="hide-menu">Forms</span>
                        </li>

                    </ul>
                </nav>
            </div>
        </aside>
    );
}

export default Sidebar