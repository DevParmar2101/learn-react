import {useState} from "react";

function UseStateEx3() {
    const [name, setName] = useState("Dev Parmar");

    function changeName()
    {
        setName(name === "Dev Parmar" ? "Viyanka Parmar" : "Dev Parmar");
    }
    return (
        <div>
            <p>Current value: {name}</p>
            <button onClick={changeName}>Change Value</button>
        </div>
    )
}
export default UseStateEx3;