function UserInfo()
{
    const firstName = 'Dev';
    const lastName = 'Parmar';
    const age = 25;
    const phone = '0123456789';
    const city = 'Ahmedabad';

    return (
        <div>
            <h1>User Info</h1>
            <p>Name: {firstName} {lastName}</p>
            <p>Age: {age}</p>
            <p>Phone: {phone}</p>
            <p>City: {city}</p>
        </div>
    );

}

export default UserInfo;