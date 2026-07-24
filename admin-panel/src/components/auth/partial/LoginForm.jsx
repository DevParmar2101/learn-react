function LoginForm() {
    return (
        <form>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Username</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            </div>
            <div className="mb-4">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1"/>
            </div>
            <div className="d-flex align-items-center justify-content-between mb-4">
                <div className="form-check">
                    <input className="form-check-input primary" type="checkbox" value="" id="flexCheckChecked" checked/>
                    <label className="form-check-label text-dark" htmlFor="flexCheckChecked">
                        Remember this Device
                    </label>
                </div>
                <a className="text-primary fw-medium" href="./authentication-forgot-password.html">Forgot Password ?</a>
            </div>
            <a href="/login" className="btn btn-primary w-100 py-8 mb-4 rounded-2">Sign In</a>
            <div className="d-flex align-items-center justify-content-center">
                <p className="fs-4 mb-0 fw-medium">New to Modernize?</p>
                <a className="text-primary fw-medium ms-2" href="/register">Create an account</a>
            </div>
        </form>

    );
}
export default LoginForm;