import UseRefEx1 from "../components/UseRef/UseRefEx1";
import UseRefEx2 from "../components/UseRef/UseRefEx2";
import UseRefEx3 from "../components/UseRef/UseRefEx3";
import UseRefEx4 from "../components/UseRef/UseRefEx4";

function UseRef() {
    return (
        <div>
            <h2>UseRef</h2>
            <hr/>
            <h2>Exercise 1 (Basic example of focus-in on input on button click.)</h2>
            <div style={{ marginBottom: "10px", marginTop: "10px" }}>
                <UseRefEx1 />
            </div>
            <hr/>

            <h2>Exercise 2 (Basic example of focus-in on input on button click and also how can we clear input data also.)</h2>
            <div style={{ marginBottom: "10px", marginTop: "10px" }}>
                <UseRefEx2 />
            </div>
            <hr/>

            <h2>Exercise 3 (Example where we use useRef and useEffect both, in this we learn that how on page load we will able to focus on the targeted input by using useRef and useEffect.)</h2>
            <div style={{ marginBottom: "10px", marginTop: "10px" }}>
                <UseRefEx3 />
            </div>
            <hr/>

            <h2>Exercise 4 (Store the previous value using useRef. This example demonstrates that updating a ref does not trigger a component re-render, making it useful for keeping values between renders.)</h2>
            <div style={{ marginBottom: "10px", marginTop: "10px" }}>
                <UseRefEx4 />
            </div>
            <hr/>

        </div>
    );
}

export default UseRef;