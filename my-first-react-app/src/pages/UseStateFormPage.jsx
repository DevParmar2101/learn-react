import UseStateForm1 from "../components/UseStateForm/UseStateForm1.jsx";
import UseStateForm2 from "../components/UseStateForm/UseStateForm2.jsx";
import UseStateForm3 from "../components/UseStateForm/UseStateForm3.jsx";
import UseStateForm4 from "../components/UseStateForm/UseStateForm4.jsx";
import UseStateForm5 from "../components/UseStateForm/UseStateForm5.jsx";

function UseStateFormPage() {
    return (
        <div>
            <h2>UseStateForm</h2>
            <hr />
            <h2>Exercise 1 (basic example of input with onChange)</h2>
            <div style={{ marginBottom: "10px", marginTop: "10px" }}>
                <UseStateForm1 />
            </div>
            <hr/>

            <h2>Exercise 2(Multiple Inputs)</h2>
            <div style={{ marginBottom: "10px", marginTop: "10px" }}>
                <UseStateForm2 />
            </div>
            <hr/>

            <h2>Exercise 3(Multiple Inputs will handle by one state object.)</h2>
            <div style={{ marginBottom: "10px", marginTop: "10px" }}>
                <UseStateForm3 />
            </div>
            <hr/>

            <h2>Exercise 4(Multiple Inputs will handle by one state object with submit button and form tag.)</h2>
            <div style={{ marginBottom: "10px", marginTop: "10px" }}>
                <UseStateForm4 />
            </div>
            <hr/>

            <h2>Exercise 5(We have added error validation in this exercise on submit.)</h2>
            <div style={{ marginBottom: "10px", marginTop: "10px" }}>
                <UseStateForm5 />
            </div>
            <hr/>

        </div>
    );
}

export default UseStateFormPage;