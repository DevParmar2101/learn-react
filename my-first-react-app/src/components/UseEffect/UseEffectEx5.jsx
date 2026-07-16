import {useEffect, useState} from "react";

function UseEffectEx5() {

    // Store users from API
    const [users, setUsers] = useState([]);

    // Loading state
    const[loading, setLoading] = useState(true);

    useEffect(() => {

       fetch("https://jsonplaceholder.typicode.com/users")
           .then(response => response.json())
           .then(data => {
               setUsers(data);
               setLoading(false);
           });
    }, []);

    // Show loading message
    if (loading) {
        return <h3>Loading Users....</h3>
    }

    return (
        <div>
            <h2>User List</h2>

            <ol>
                {users.map(user => (
                    <li key={user.id}>{user.id}
                        <strong>{user.name}</strong>
                        <ul>
                            <li>Email: {user.email}</li>
                            <li>Username: {user.username}</li>
                            <li>Phone: {user.phone}</li>
                            <li>Company: {user.company.name}</li>
                        </ul>
                    </li>
                ))}
            </ol>
        </div>
    );
}

export default UseEffectEx5;