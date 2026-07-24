import LoginForm from "./partial/LoginForm";
function LoginIndex() {
    return (
        <div className="d-flex align-items-center justify-content-center w-100">
            <div className="row justify-content-center w-100">
                <div className="col-md-8 col-lg-6 col-xxl-3">
                    <div className="card mb-0">
                        <div className="card-body">
                            <a href="./index.html" className="text-nowrap logo-img text-center d-block mb-5 w-100">
                                <img src="./src/assets/images/logos/dark-logo.svg" width="180" alt=""/>
                            </a>
                            <div className="row">
                                <div className="col-6 mb-2 mb-sm-0">
                                    <a className="btn btn-white text-dark border fw-normal d-flex align-items-center justify-content-center rounded-2 py-8"
                                       href="javascript:void(0)" role="button">
                                        <img src="./src/assets/images/svgs/google-icon.svg" alt=""
                                             className="img-fluid me-2" width="18" height="18"/>
                                        <span className="d-none d-sm-block me-1 flex-shrink-0">Sign in with</span>Google
                                    </a>
                                </div>
                                <div className="col-6">
                                    <a className="btn btn-white text-dark border fw-normal d-flex align-items-center justify-content-center rounded-2 py-8"
                                       href="javascript:void(0)" role="button">
                                        <img src="./src/assets/images/svgs/facebook-icon.svg" alt=""
                                             className="img-fluid me-2" width="18" height="18"/>
                                        <span className="d-none d-sm-block me-1 flex-shrink-0">Sign in with</span>FB
                                    </a>
                                </div>
                            </div>
                            <div className="position-relative text-center my-4">
                                <p className="mb-0 fs-4 px-3 d-inline-block bg-white text-dark z-index-5 position-relative">or
                                    sign in with</p>
                                <span
                                    className="border-top w-100 position-absolute top-50 start-50 translate-middle"></span>
                            </div>

                            <LoginForm />

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginIndex;