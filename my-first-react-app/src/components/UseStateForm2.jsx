import {useState} from "react";

function UseStateForm2()
{
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    return (
        <div>
            <label htmlFor="name">Name</label>
            <br/>
            <input type="text" id="name" value={name} onChange={(event) => setName(event.target.value)} />
            <br/>
            <label htmlFor="email">Email</label>
            <br/>
            <input type="email" id="email" value={email} onChange={(event) => setEmail(event.target.value)} />

            <div style={{ marginTop: "10px" }}>
                {name && <p>Name: {name}</p>}
                {email && <p>Email: {email}</p>}
            </div>
        </div>
    );
}
export default UseStateForm2;