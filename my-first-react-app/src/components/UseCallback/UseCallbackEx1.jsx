import {useCallback, useState} from "react";

function UseCallbackEx1() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("");

    const showMessage = useCallback(() => {
        console.log("Button Clicked!");
    }, []);


}

export default UseCallbackEx1;