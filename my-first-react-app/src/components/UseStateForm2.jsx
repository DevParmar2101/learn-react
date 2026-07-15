import {useState} from "react";
import UseStateFormPage from "../pages/UseStateFormPage.jsx";

function UseStateForm2()
{
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    return (
        <div>
            <label>Name</label>
            <input type="text" id="name" value={name} onChange={(event) => setName(event.target.value)} />
            <label>Email</label>
            <input type="email" id="email" value={email} onChange={(event) => setEmail(event.target.value)} />

            <div style={{ marginTop: "10px" }}>
                {name && <p>Name: {name}</p>}
                {email && <p>Email: {email}</p>}
            </div>
        </div>
    );
}
export default UseStateForm2;