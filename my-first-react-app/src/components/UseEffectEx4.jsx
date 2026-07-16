import {useEffect, useState} from "react";

function UseEffectEx4() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(setUsers);
    },[]);

    return (
        <div>
            <h3>User List</h3>

            <ol>
                {users.map(user => (
                    <li key={user.id}>
                        {user.id}
                        <ul>
                            <li>Name: {user.name}</li>
                            <li>Email: {user.email}</li>
                            <li>UserName:{user.username}</li>
                            <li>Phone:{user.phone}</li>
                            <li>Company Name:{user.company.name}</li>
                            <li>Full Address:{user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}</li>
                            <li>Website: {user.website}</li>
                        </ul>
                    </li>
                    
                ))}
            </ol>
        </div>
    );
}
export default UseEffectEx4;