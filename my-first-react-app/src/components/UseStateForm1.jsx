import { useState } from "react";

function UseStateForm1() {
    const [name, setName] = useState("");

    return (
        <div>
            <label>Name</label>
            <br/>
            <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
            {name && <p style={{ marginTop: "5px"}}>Hello, {name}</p>}
        </div>
    );
}

export default UseStateForm1;