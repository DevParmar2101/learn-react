import { useState, useEffect } from "react";
import { getUsers } from "../../api/userApi";

function UserIndex() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [pagination, setPagination] = useState(null);

    const loadUsers = async (page = 1) => {
        try {
            setLoading(true);

            const response = await getUsers({
                page: page,
            });
            setUsers(response.data.data);
            setPagination(response.data.meta);

        }catch (error) {
            console.error(error);
        }finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadUsers();
    },[]);
    return (
        <div className="card">
            <div className="card-body">

                {/* Header */}
                <div className="d-flex align-items-center justify-content-between mb-2">
                    <h5 className="mb-0">Users</h5>
                    <button type="button" className="btn btn-primary">Add new</button>
                </div>

                {/* Table */}
                <div className="table-responsive m-t-40">
                    <table id="config-table" className="table border display table-bordered table-striped no-wrap">
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone Number</th>
                            <th>Status</th>
                        </tr>
                        </thead>
                        <tbody>

                        {/* Loading */}
                        {loading && (
                            <tr>
                                <td colSpan="4" className="text-center">
                                    Loading...
                                </td>
                            </tr>
                        )}

                        {/* No Users */}
                        {!loading && users.length === 0 && (
                            <tr>
                                <td colSpan="4" className="text-center">
                                    No Users Found
                                </td>
                            </tr>
                        )}

                        {/* Users */}
                        {!loading && users.map((user, index) => (
                            <tr key={user.id}>
                                <td>{pagination ? (pagination.current_page - 1) *
                                    pagination.per_page +
                                    index + 1 : index + 1}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.phone}</td>
                                <td>{user.status ? "Active" : "Inactive"}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>

                {/* Pagination */}
                {! loading && users.length > 0 && pagination && (
                    <div className="d-flex justify-content-between align-items-center mt-3">

                        {/* Showing */}
                        <div className="text-muted">
                            Showing{" "}
                            <strong>
                                {(pagination.current_page - 1) * pagination.per_page + 1}
                            </strong>{" "} to {" "}
                            <strong>{pagination.total}</strong>{" "} entries
                        </div>

                        {/* Pagination Buttons */}
                        <div className="d-flex gap-1">

                            {/* Previous */}
                            <button type="button" className="btn btn-outline-primary" disabled={pagination.current_page === 1} onClick={() => loadUsers(pagination.current_page - 1)}>Previous</button>

                            {/* Page Numbers */}
                            {(() => {
                                const currentPage = pagination.current_page;
                                const lastPage = pagination.last_page;

                                let pages = [];

                                if (lastPage <= 6){
                                    //Show all page if there are 6 or fewer
                                    pages = Array.from(
                                        {length: lastPage },
                                        (_, index) => index + 1,
                                    );
                                }else if (currentPage <= 4) {
                                    //Beginning
                                    pages = [1, 2, 3, 4, 5, "...", lastPage];
                                }else if (currentPage >= lastPage - 3) {
                                    // End
                                    pages = [1, "...", lastPage - 4, lastPage - 3, lastPage - 2, lastPage - 1, lastPage];
                                } else {
                                    // Middle
                                    pages = [1, "...", currentPage - 1, currentPage, currentPage + 1, "...", lastPage];
                                }

                                return pages.map((page, index) => {
                                    if (page === "...") {
                                        return (
                                            <span key={`dots-${index}`} className="btn btn-outline-secondary disabled">...</span>
                                        );
                                    }

                                    return (
                                        <button key={page} type="button" className={`btn ${page === currentPage ? "btn-primary" : "btn-outline-primary"}`} onClick={() => loadUsers(page)}>{page}</button>
                                    );
                                });
                            })()}

                            {/* Next */}
                            <button type="button" className="btn btn-outline-primary" disabled={pagination.current_page === pagination.last_page} onClick={() => loadUsers(pagination.current_page + 1)}>Next</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default UserIndex;