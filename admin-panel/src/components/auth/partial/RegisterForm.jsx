function RegisterForm() {
    return (
        <form>
            <div className="mb-3">
                <label htmlFor="fullname" className="form-label">FullName</label>
                <input type="text" className="form-control" id="fullname" aria-describedby="emailHelp"/>
            </div>
            <div className="mb-4">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" className="form-control" id="email"/>
            </div>
            <div className="mb-4">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control" id="password"/>
            </div>
            <a href="/register" className="btn btn-primary w-100 py-8 mb-4 rounded-2">Register</a>
            <div className="d-flex align-items-center justify-content-center">
                <p className="fs-4 mb-0 fw-medium">Already have an account?</p>
                <a className="text-primary fw-medium ms-2" href="/login">Login</a>
            </div>
        </form>

    );
}
export default RegisterForm;