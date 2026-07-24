import RegisterForm from "./partial/RegisterForm";
function RegisterIndex() {
    return (
        <div className="d-flex align-items-center justify-content-center w-100">
            <div className="row justify-content-center w-100">
                <div className="col-md-8 col-lg-6 col-xxl-3">
                    <div className="card mb-0">
                        <div className="card-body">
                            <h3 className="text-center mb-3">Register</h3>
                            <RegisterForm />

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RegisterIndex;