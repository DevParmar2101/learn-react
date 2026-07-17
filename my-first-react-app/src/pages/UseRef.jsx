import UseRefEx1 from "../components/UseRef/UseRefEx1";
import UseRefEx2 from "../components/UseRef/UseRefEx2";

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

        </div>
    );
}

export default UseRef;