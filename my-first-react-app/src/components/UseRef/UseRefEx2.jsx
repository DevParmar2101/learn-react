import {useEffect, useRef} from "react";

function UseRefEx2() {
    const inputRef = useRef(null);

    function clearInput() {
        inputRef.current.value = '';
        inputRef.current.focus();
    }

    return (
      <div>
          <h3>Clear Input Example</h3>

          <input type="text" ref={inputRef} placeholder="Enter something" />
          <br/><br/>
          <button onClick={clearInput}>Clear Input</button>
      </div>
    );
}

export default UseRefEx2;