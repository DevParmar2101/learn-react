import {useState} from "react";

function UseStateForm3() {
    const [formFields, setFormFields] = useState({
        name: "",
        email: "",
        city:"",
        phone: "",
        age: "",
    });

    function handleChange(event) {
        const { name, value } = event.target;
        setFormFields({
            ...formFields,
            [name]: value
        });
    }

    function handleSubmit(event) {
        event.preventDefault();

        console.log(formFields);
    }

    return (
        <form onSubmit={handleSubmit}>
            <div style={{ marginTop: "10px" }}>
                <label htmlFor="name">Name</label>
                <br/>
                <input id="name" type="text" name="name" value={formFields.name} onChange={handleChange} />
            </div>

            <div style={{ marginTop: "10px" }}>
                <label htmlFor="email">Email</label>
                <br/>
                <input id="email" type="email" name="email" value={formFields.email} onChange={handleChange}/>
            </div>

            <div style={{ marginTop: "10px" }}>
                <label htmlFor="phone">Phone</label>
                <br/>
                <input id="phone" type="text" name="phone" value={formFields.phone} onChange={handleChange}/>
            </div>

            <div style={{ marginTop: "10px" }}>
                <label htmlFor="city">City</label>
                <br/>
                <input id="city" type="text" name="city" value={formFields.city} onChange={handleChange}/>
            </div>

            <div style={{ marginTop: "10px" }}>
                <label htmlFor="age">Age</label>
                <br/>
                <input id="age" type="text" name="age" value={formFields.age} onChange={handleChange}/>
            </div>

            <button type="submit" style={{ marginTop: "10px"}}>Submit</button>
        </form>
    );
}

export default UseStateForm3;