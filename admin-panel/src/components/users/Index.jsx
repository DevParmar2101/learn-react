import { useState, useEffect } from "react";
import { getUsers } from "../../api/userApi";

function UserIndex() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    const loadUsers = async () => {
        try {
            const response = await getUsers();
            setUsers(response.data.data);
        }catch (error) {
            console.error(error);
        }finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadUsers();
    },[]);

    useEffect(() => {
        if (loading) {
            return;
        }
        if (window.$ && $.fn.DataTable) {
            const table = $('#config-table').DataTable();

            return () => {
                table.destroy();
            };
        }
    }, [loading]);

    return (
        <div className="card">
            <div className="card-body">
                <div className="mb-2">
                    <h5 className="mb-0">Users</h5>
                </div>
                <div className="table-responsive m-t-40">
                    <table id="config-table" className="table border display table-bordered table-striped no-wrap">
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Status</th>
                        </tr>
                        </thead>
                        <tbody>

                        {loading && (
                            <tr>
                                <td colSpan="4" className="text-center">
                                    Loading...
                                </td>
                            </tr>
                        )}

                        {!loading && users.length === 0 && (
                            <tr>
                                <td colSpan="4" className="text-center">
                                    No Users Found
                                </td>
                            </tr>
                        )}

                        {!loading && users.map((user, index) => (
                            <tr key={user.id}>
                                <td>{index + 1}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.status ? "Active" : "Inactive"}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default UserIndex;