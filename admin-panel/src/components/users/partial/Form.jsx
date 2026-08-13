function UserForm() {
    return (
        <div className="card-body p-4 border-bottom">
            <div className="row">
                <div className="col-lg-6 mb-4">
                    <label htmlFor="name" className="form-label fw-semibold">Username</label>
                    <input type="text" name="name" className="form-control" id="name"/>
                </div>
                <div className="col-lg-6 mb-4">
                    <label htmlFor="email" className="form-label fw-semibold">Email</label>
                    <input type="text" name="email" className="form-control"/>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-6 mb-4">
                    <label htmlFor="password" className="form-label fw-semibold">Password</label>
                    <input type="password" name="password" className="form-control" id="password"/>
                    {/*<span className="input-group-text bg-transparent px-6" id="basic-addon1"><i className="ti ti-eye fs-6"></i></span>*/}
                </div>

                <div className="col-lg-6 mb-4">
                    <label htmlFor="password_confirmation" className="form-label fw-semibold">Confirm Password</label>
                    <input type="password" name="password_confirmation" className="form-control" id="password_confirmation"/>
                    {/*<span className="input-group-text bg-transparent px-6" id="basic-addon1"><i className="ti ti-eye fs-6"></i></span>*/}
                </div>
            </div>
            <div className="row">
                <div className="col-lg-6 mb-4">
                    <label htmlFor="phone" className="form-label fw-semibold">Phone Number</label>
                    <input type="text" name="phone" className="form-control" id="phone"/>
                </div>
                <div className="col-lg-6 mb-4">
                    <label htmlFor="status" className="form-label fw-semibold">Status</label>
                    <input type="text" name="status" className="form-control" id="status"/>
                </div>
            </div>
        </div>
    );
}

export default UserForm;