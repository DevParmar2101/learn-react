import {useRef} from "react";

function UseRefEx1() {

    // Step 1
    const inputRef = useRef(null);

    // Step 2
    function handleFocus() {
        inputRef.current.focus();
    }

    return (
        <div>
            <h3>Focus Input Example</h3>

            {/* Step 3*/}
            <input type="text" name="name" ref={inputRef} placeholder="Enter Name" />
            <br/> <br/>

            {/* Step 4*/}
            <button onClick={handleFocus}>Focus Input</button>
        </div>
    );
}
export default UseRefEx1;