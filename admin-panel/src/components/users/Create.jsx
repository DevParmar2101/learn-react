import UserCreateForm from "./partial/Form";
function CreateUser() {
    return (
        <div className="row">
            <div className="col-12">
                <div className="card">
                    <div className="px-4 py-3 border-bottom d-flex align-items-center justify-content-between">
                        <h5 className="card-title fw-semibold mb-0">Create User</h5>
                        <button type="button" className="btn btn-outline-warning btn-sm">Back</button>
                    </div>

                    <UserCreateForm />
                </div>
            </div>
        </div>
    );
}
export default CreateUser;