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

function ProfileCard(props) {
    return (
        <div>
            <h2 style={{ marginBottom: "15px" }}> Profile Details</h2>
            <p>Name: {props.name}</p>
            <p>Position: {props.position}</p>
            <p>City: {props.city}</p>
        </div>
    );
}
export default ProfileCard;