function UserInfo()
{
    const user = {
        firstName: 'Dev',
        lastName: 'Parmar',
        age: '25',
        phone: '0123456789',
        city: 'Ahmedabad'
    };

    return (
        <div>
            <h2>User Info</h2>
            <p>Name: {user.firstName} {user.lastName}</p>
            <p>Age: {user.age}</p>
            <p>Phone: {user.phone}</p>
            <p>City: {user.city}</p>
        </div>
    );

}

export default UserInfo;