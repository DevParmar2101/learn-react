import {useState} from "react";
import UserInfo from "../components/UserInfo";
function UseStateEx4(){
    const [isVisible, setIsVisible] = useState(true);

    function toggleVisible(){
        setIsVisible(!isVisible);
    }

    return (
        <div>
            {isVisible ? <UserInfo /> : null}
            <button onClick={toggleVisible} style={{ marginTop: "10px" }}>{isVisible ? "Hide User Info" : "Show User Info"}</button>
        </div>
    );
}

export default UseStateEx4;