import {NavLink} from "react-router-dom";

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
                <NavLink className="text-primary fw-medium" to="/forgot-password">Forgot Password?</NavLink>
            </div>
            <NavLink to="/login" className="btn btn-primary w-100 py-8 mb-4 rounded-4"> Sign In</NavLink>
            <div className="d-flex align-items-center justify-content-center">
                <p className="fs-4 mb-0 fw-medium">New to React?</p>
                <NavLink to="/register" className="text-primary fw-medium ms-2">Create an account</NavLink>
            </div>
        </form>

    );
}
export default LoginForm;