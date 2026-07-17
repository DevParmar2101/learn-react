import {useEffect, useRef} from "react";

function UseRefEx3() {
    const inputRef = useRef(null);

    useEffect(()=> {
        inputRef.current.focus();
    });
    return (
        <div>
            <h3>Clear Input Example</h3>
            <input type="text" ref={inputRef} placeholder="Enter something" />
        </div>
    );
}

export default UseRefEx3;