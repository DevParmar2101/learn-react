function Graph() {
    return (
        <>
            <div className="row">
                <div className="col-lg-12 d-flex align-items-strech">
                    <div className="card w-100">
                        <div className="card-body">
                            <div className="d-sm-flex d-block align-items-center justify-content-between mb-9">
                                <div className="mb-3 mb-sm-0">
                                    <h5 className="card-title fw-semibold">Revenue Updates</h5>
                                    <p className="card-subtitle mb-0">Overview of Profit</p>
                                </div>
                                <div>
                                    <select className="form-select">
                                        <option value="1">March 2023</option>
                                        <option value="2">April 2023</option>
                                        <option value="3">May 2023</option>
                                        <option value="4">June 2023</option>
                                    </select>
                                </div>
                            </div>
                            <div className="row align-items-center">
                                <div className="col-lg-8 col-md-8">
                                    <div id="chart"></div>
                                </div>
                                <div className="col-lg-4 col-md-4">
                                    <div className="d-flex align-items-center mb-4 pb-1">
                                        <div
                                            className="p-8 bg-light-primary rounded-1 me-3 d-flex align-items-center justify-content-center">
                                            <i className="ti ti-grid-dots text-primary fs-6"></i>
                                        </div>
                                        <div>
                                            <h4 className="mb-0 fs-7 fw-semibold">$63,489.50</h4>
                                            <p className="fs-3 mb-0">Total Earnings</p>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="d-flex align-items-baseline mb-4">
                                            <span className="round-8 bg-primary rounded-circle me-6"></span>
                                            <div>
                                                <p className="fs-3 mb-1">Earnings this month</p>
                                                <h6 className="fs-5 fw-semibold mb-0">$48,820</h6>
                                            </div>
                                        </div>
                                        <div className="d-flex align-items-baseline mb-4 pb-1">
                                            <span className="round-8 bg-secondary rounded-circle me-6"></span>
                                            <div>
                                                <p className="fs-3 mb-1">Expense this month</p>
                                                <h6 className="fs-5 fw-semibold mb-0">$26,498</h6>
                                            </div>
                                        </div>
                                        <div>
                                            <button className="btn btn-primary w-100">View Full Report</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-4 d-flex align-items-strech">
                    <div className="card w-100">
                        <div className="card-body">
                            <div>
                                <h5 className="card-title fw-semibold mb-1">Employee Salary</h5>
                                <p className="card-subtitle mb-0">Every month</p>
                                <div id="salary" className="mb-7 pb-8"></div>
                                <div className="d-flex align-items-center justify-content-between">
                                    <div className="d-flex align-items-center">
                                        <div
                                            className="bg-light-primary rounded me-8 p-8 d-flex align-items-center justify-content-center">
                                            <i className="ti ti-grid-dots text-primary fs-6"></i>
                                        </div>
                                        <div>
                                            <p className="fs-3 mb-0 fw-normal">Salary</p>
                                            <h6 className="fw-semibold text-dark fs-4 mb-0">$36,358</h6>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center">
                                        <div
                                            className="bg-light rounded me-8 p-8 d-flex align-items-center justify-content-center">
                                            <i className="ti ti-grid-dots text-muted fs-6"></i>
                                        </div>
                                        <div>
                                            <p className="fs-3 mb-0 fw-normal">Profit</p>
                                            <h6 className="fw-semibold text-dark fs-4 mb-0">$5,296</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="card">
                                <div className="card-body pb-0 mb-xxl-4 pb-1">
                                    <p className="mb-1 fs-3">Customers</p>
                                    <h4 className="fw-semibold fs-7">36,358</h4>
                                    <div className="d-flex align-items-center mb-3">
                                        <span className="me-2 rounded-circle bg-light-danger round-20 d-flex align-items-center justify-content-center">
                                            <i className="ti ti-arrow-down-right text-danger"></i>
                                        </span>
                                        <p className="text-dark fs-3 mb-0">+9%</p>
                                    </div>
                                </div>
                                <div id="customers"></div>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="card">
                                <div className="card-body">
                                    <p className="mb-1 fs-3">Projects</p>
                                    <h4 className="fw-semibold fs-7">78,298</h4>
                                    <div className="d-flex align-items-center mb-3">
                                        <span className="me-1 rounded-circle bg-light-success round-20 d-flex align-items-center justify-content-center">
                                            <i className="ti ti-arrow-up-left text-success"></i>
                                        </span>
                                        <p className="text-dark fs-3 mb-0">+9%</p>
                                    </div>
                                    <div id="projects"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <div className="d-flex align-items-center mb-7 pb-2">
                                <div className="me-3 pe-1">
                                    <img src="./src/assets/images/profile/user-1.jpg" className="shadow-warning rounded-2"
                                         alt="" width="72" height="72"/>
                                </div>
                                <div>
                                    <h5 className="fw-semibold fs-5 mb-2"> Super awesome, Vue coming soon! </h5>
                                    <p className="fs-3 mb-0">22 March, 2023</p>
                                </div>
                            </div>
                            <div className="d-flex justify-content-between">
                                <ul className="hstack mb-0">
                                    <li className="ms-n8">
                                        <a href="javascript:void(0)" className="me-1">
                                            <img src="./src/assets/images/profile/user-2.jpg" className="rounded-circle border border-2 border-white" width="44" height="44" alt=""/>
                                        </a>
                                    </li>
                                    <li className="ms-n8">
                                        <a href="javascript:void(0)" className="me-1">
                                            <img src="./src/assets/images/profile/user-3.jpg" className="rounded-circle border border-2 border-white" width="44" height="44" alt=""/>
                                        </a>
                                    </li>
                                    <li className="ms-n8">
                                        <a href="javascript:void(0)" className="me-1">
                                            <img src="./src/assets/images/profile/user-4.jpg" className="rounded-circle border border-2 border-white" width="44" height="44" alt=""/>
                                        </a>
                                    </li>
                                    <li className="ms-n8">
                                        <a href="javascript:void(0)" className="me-1">
                                            <img src="./src/assets/images/profile/user-5.jpg" className="rounded-circle border border-2 border-white" width="44" height="44" alt=""/>
                                        </a>
                                    </li>
                                </ul>
                                <a href="#" className="bg-light rounded py-1 px-8 d-flex align-items-center">
                                    <i className="ti ti-message-2 fs-6 text-primary"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-lg-4 d-flex align-items-strech">
                    <div className="card w-100">
                        <div className="card-body">
                            <h5 className="card-title fw-semibold">Weekly Stats</h5>
                            <p className="card-subtitle mb-0">Average sales</p>
                            <div id="stats" className="my-4"></div>
                            <div className="position-relative">
                                <div className="d-flex align-items-center justify-content-between mb-7">
                                    <div className="d-flex">
                                        <div
                                            className="p-6 bg-light-primary rounded me-6 d-flex align-items-center justify-content-center">
                                            <i className="ti ti-grid-dots text-primary fs-6"></i>
                                        </div>
                                        <div>
                                            <h6 className="mb-1 fs-4 fw-semibold">Top Sales</h6>
                                            <p className="fs-3 mb-0">Johnathan Doe</p>
                                        </div>
                                    </div>
                                    <div className="bg-light-primary badge">
                                        <p className="fs-3 text-primary fw-semibold mb-0">+68</p>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center justify-content-between mb-7">
                                    <div className="d-flex">
                                        <div
                                            className="p-6 bg-light-success rounded me-6 d-flex align-items-center justify-content-center">
                                            <i className="ti ti-grid-dots text-success fs-6"></i>
                                        </div>
                                        <div>
                                            <h6 className="mb-1 fs-4 fw-semibold">Best Seller</h6>
                                            <p className="fs-3 mb-0">MaterialPro Admin</p>
                                        </div>
                                    </div>
                                    <div className="bg-light-success badge">
                                        <p className="fs-3 text-success fw-semibold mb-0">+68</p>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center justify-content-between">
                                    <div className="d-flex">
                                        <div
                                            className="p-6 bg-light-danger rounded me-6 d-flex align-items-center justify-content-center">
                                            <i className="ti ti-grid-dots text-danger fs-6"></i>
                                        </div>
                                        <div>
                                            <h6 className="mb-1 fs-4 fw-semibold">Most Commented</h6>
                                            <p className="fs-3 mb-0">Ample Admin</p>
                                        </div>
                                    </div>
                                    <div className="bg-light-danger badge">
                                        <p className="fs-3 text-danger fw-semibold mb-0">+68</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-8 d-flex align-items-strech">
                    <div className="card w-100">
                        <div className="card-body">
                            <div className="d-sm-flex d-block align-items-center justify-content-between mb-7">
                                <div className="mb-3 mb-sm-0">
                                    <h5 className="card-title fw-semibold">Top Performers</h5>
                                    <p className="card-subtitle mb-0">Best Employees</p>
                                </div>
                                <div>
                                    <select className="form-select">
                                        <option value="1">March 2023</option>
                                        <option value="2">April 2023</option>
                                        <option value="3">May 2023</option>
                                        <option value="4">June 2023</option>
                                    </select>
                                </div>
                            </div>
                            <div className="table-responsive">
                                <table className="table align-middle text-nowrap mb-0">
                                    <thead>
                                    <tr className="text-muted fw-semibold">
                                        <th scope="col" className="ps-0">Assigned</th>
                                        <th scope="col">Project</th>
                                        <th scope="col">Priority</th>
                                        <th scope="col">Budget</th>
                                    </tr>
                                    </thead>
                                    <tbody className="border-top">
                                    <tr>
                                        <td className="ps-0">
                                            <div className="d-flex align-items-center">
                                                <div className="me-2 pe-1">
                                                    <img src="./src/assets/images/profile/user-1.jpg"
                                                         className="rounded-circle" width="40" height="40" alt=""/>
                                                </div>
                                                <div>
                                                    <h6 className="fw-semibold mb-1">Sunil Joshi</h6>
                                                    <p className="fs-2 mb-0 text-muted">Web Designer</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <p className="mb-0 fs-3">Elite Admin</p>
                                        </td>
                                        <td>
                                            <span className="badge fw-semibold py-1 w-85 bg-light-primary text-primary">Low</span>
                                        </td>
                                        <td>
                                            <p className="fs-3 text-dark mb-0">$3.9K</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="ps-0">
                                            <div className="d-flex align-items-center">
                                                <div className="me-2 pe-1">
                                                    <img src="./src/assets/images/profile/user-2.jpg" className="rounded-circle" width="40" height="40" alt=""/>
                                                </div>
                                                <div>
                                                    <h6 className="fw-semibold mb-1">John Deo</h6>
                                                    <p className="fs-2 mb-0 text-muted"> Web Developer </p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <p className="mb-0 fs-3">Flexy Admin</p>
                                        </td>
                                        <td>
                                            <span className="badge fw-semibold py-1 w-85 bg-light-warning text-warning">Medium</span>
                                        </td>
                                        <td>
                                            <p className="fs-3 text-dark mb-0">$24.5K</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="ps-0">
                                            <div className="d-flex align-items-center">
                                                <div className="me-2 pe-1">
                                                    <img src="./src/assets/images/profile/user-3.jpg" className="rounded-circle" width="40" height="40" alt=""/>
                                                </div>
                                                <div>
                                                    <h6 className="fw-semibold mb-1">Nirav Joshi</h6>
                                                    <p className="fs-2 mb-0 text-muted">Web Manager</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <p className="mb-0 fs-3">Material Pro</p>
                                        </td>
                                        <td>
                                            <span className="badge fw-semibold py-1 w-85 bg-light-info text-info">High</span>
                                        </td>
                                        <td>
                                            <p className="fs-3 text-dark mb-0">$12.8K</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="ps-0">
                                            <div className="d-flex align-items-center">
                                                <div className="me-2 pe-1">
                                                    <img src="./src/assets/images/profile/user-4.jpg" className="rounded-circle" width="40" height="40" alt=""/>
                                                </div>
                                                <div>
                                                    <h6 className="fw-semibold mb-1">Yuvraj Sheth</h6>
                                                    <p className="fs-2 mb-0 text-muted"> Project Manager </p>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <p className="mb-0 fs-3">Xtreme Admin</p>
                                        </td>
                                        <td>
                                            <span className="badge fw-semibold py-1 w-85 bg-light-success text-success">Low</span>
                                        </td>
                                        <td>
                                            <p className="fs-3 text-dark mb-0">$4.8K</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="border-0 ps-0">
                                            <div className="d-flex align-items-center">
                                                <div className="me-2 pe-1">
                                                    <img src="./src/assets/images/profile/user-5.jpg" className="rounded-circle" width="40" height="40" alt=""/>
                                                </div>
                                                <div>
                                                    <h6 className="fw-semibold mb-1">Micheal Doe</h6>
                                                    <p className="fs-2 mb-0 text-muted"> Content Writer </p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="border-0">
                                            <p className="mb-0 fs-3">Helping Hands WP Theme</p>
                                        </td>
                                        <td className="border-0">
                                            <span className="badge fw-semibold py-1 w-85 bg-light-danger text-danger">High</span>
                                        </td>
                                        <td className="border-0">
                                            <p className="fs-3 text-dark mb-0">$9.3K</p>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Graph;