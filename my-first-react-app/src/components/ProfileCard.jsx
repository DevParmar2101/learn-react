/*
Version 1
function ProfileCard() {
    return (
        <div>
            <h2 style={{ marginBottom: '20px'}}>Profile Details</h2>
            <p>Name: Dev parmar</p>
            <p>Position: Full Stack Developer</p>
            <p>Location: Ahmedabad</p>
        </div>
    )
}
*/
// Version 2
function ProfileCard({name, position, city}) {
    return (
        <div>
            <h2 style={{ marginBottom: "15px" }}> Profile Details</h2>
            <p>Name: {name}</p>
            <p>Position: {position}</p>
            <p>City: {city}</p>
        </div>
    );
}
export default ProfileCard;