function FormIndex() {
    return (
        <div className="row">
            <div className="col-12">
                <div className="card">
                    <div className="px-4 py-3 border-bottom">
                        <h5 className="card-title fw-semibold mb-0">Multi Column with Form Separator</h5>
                    </div>
                    <div className="card-body p-4 border-bottom">
                        <h5 className="fs-4 fw-semibold mb-4">Account Details</h5>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="mb-4">
                                    <label htmlFor="exampleInputPassword1" className="form-label fw-semibold">Username</label>
                                    <input type="text" className="form-control" id="exampleInputtext" placeholder="John Deo"/>
                                </div>
                                <div className="">
                                    <label htmlFor="exampleInputPassword1" className="form-label fw-semibold">Password</label>
                                    <div className="input-group border rounded-1">
                                        <input type="password" className="form-control border-0" id="inputPassword" placeholder="John Deo"/>
                                        <span className="input-group-text bg-transparent px-6 border-0" id="basic-addon1"><i className="ti ti-eye fs-6"></i></span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="mb-4">
                                    <label htmlFor="exampleInputPassword1" className="form-label fw-semibold">Email</label>
                                    <div className="input-group border rounded-1">
                                        <input type="text" className="form-control border-0" placeholder="John Deo"/>
                                        <span className="input-group-text bg-transparent px-6 border-0" id="basic-addon1">@example.com</span>
                                    </div>
                                </div>
                                <div className="">
                                    <label htmlFor="exampleInputPassword1" className="form-label fw-semibold">Confirm Password</label>
                                    <div className="input-group border rounded-1">
                                        <input type="password" className="form-control border-0" id="inputPassword" placeholder="John Deo"/>
                                        <span className="input-group-text bg-transparent px-6 border-0" id="basic-addon1"><i className="ti ti-eye fs-6"></i></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-body p-4">
                        <h5 className="fs-4 fw-semibold mb-4">Personal Info</h5>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="mb-4">
                                    <label htmlFor="exampleInputPassword1" className="form-label fw-semibold">First Name</label>
                                    <input type="text" className="form-control" id="exampleInputtext" placeholder="John"/>
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="exampleInputPassword1" className="form-label fw-semibold">Country</label>
                                    <select className="form-select" aria-label="Default select example">
                                        <option selected="">India</option>
                                        <option value="1">United Kingdom</option>
                                        <option value="2">Srilanka</option>
                                    </select>
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="exampleInputPassword1" className="form-label fw-semibold">Birth Date</label>
                                    <input id="startDate" className="form-control" type="date"/>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="mb-4">
                                    <label htmlFor="exampleInputPassword1" className="form-label fw-semibold">Last Name</label>
                                    <input type="text" className="form-control" id="exampleInputtext" placeholder="Deo"/>
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="exampleInputPassword1" className="form-label fw-semibold">Language</label>
                                    <select className="form-select" aria-label="Default select example">
                                        <option selected="">English</option>
                                        <option value="1">French</option>
                                    </select>
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="exampleInputPassword1" className="form-label fw-semibold">Phone
                                        no</label>
                                    <input type="text" className="form-control" id="exampleInputtext" placeholder="123 4567 201"/>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="d-flex align-items-center gap-3">
                                    <button className="btn btn-primary">Submit</button>
                                    <button className="btn btn-light-danger text-danger">Cancel</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default FormIndex;