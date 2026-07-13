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
            <h1>User Info</h1>
            <p>Name: {user.firstName} {user.lastName}</p>
            <p>Age: {user.age}</p>
            <p>Phone: {user.phone}</p>
            <p>City: {user.city}</p>
        </div>
    );

}

export default UserInfo;