function LoginForm() {
    return (
        <form>
            <div className="mb-3">
                <label htmlFor="username" className="form-label">Username</label>
                <input type="text" className="form-control" id="username" aria-describedby="usernameHelp"/>
            </div>
            <div className="mb-4">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control" id="password"/>
            </div>
            <div className="d-flex align-items-center justify-content-between mb-4">
                <div className="form-check">
                    <input className="form-check-input primary" type="checkbox" value="" id="rememberMe" checked/>
                    <label className="form-check-label text-dark" htmlFor="rememberMe">
                        Remember this Device
                    </label>
                </div>
                <a className="text-primary fw-medium" href="./forgot-password">Forgot Password ?</a>
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