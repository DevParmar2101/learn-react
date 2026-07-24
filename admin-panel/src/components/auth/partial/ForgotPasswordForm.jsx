function ForgotPasswordForm() {
    return (
        <form>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" className="form-control" id="email" aria-describedby="usernameHelp"/>
            </div>
            <a href="/login" className="btn btn-primary w-100 py-8 mb-4 rounded-2">Send</a>
            <div className="d-flex align-items-center justify-content-center">
                <p className="fs-4 mb-0 fw-medium">New to Modernize?</p>
                <a className="text-primary fw-medium ms-2" href="/register">Create an account</a>
            </div>
        </form>
    );
}
export default ForgotPasswordForm;