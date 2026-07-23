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
                <div className="col-lg-12 d-flex align-items-strech">
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