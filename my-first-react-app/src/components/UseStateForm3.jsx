import {useState} from "react";

function UseStateForm3() {
    const [formFields, setFormFields] = useState({
        name: "",
        email: "",
        city:"",
        phone: "",
    });

    function handleChange(event) {
        const { name, value } = event.target;
        setFormFields({
            ...formFields,
            [name]: value
        });
    }

    return (
        <div>
            <div style={{ marginTop: "10px" }}>
                <label htmlFor="name">Name</label>
                <input id="name" type="text" name="name" value={formFields.name} onChange={handleChange} />
            </div>

            <div style={{ marginTop: "10px" }}>
                <label htmlFor="email">Email</label>
                <input id="email" type="email" name="email" value={formFields.email} onChange={handleChange}/>
            </div>

            <div style={{ marginTop: "10px" }}>
                <label htmlFor="phone">Phone</label>
                <input id="phone" type="text" name="phone" value={formFields.phone} onChange={handleChange}/>
            </div>

            <div style={{ marginTop: "10px" }}>
                <label htmlFor="city">City</label>
                <input id="city" type="text" name="city" value={formFields.city} onChange={handleChange}/>
            </div>

            <div style={{ marginTop: "10px" }}>
                {formFields.name && <p>Name: {formFields.name}</p>}
                {formFields.email &&<p>Email: {formFields.email}</p>}
                {formFields.phone &&<p>Phone: {formFields.phone}</p>}
                {formFields.city && <p>City: {formFields.city}</p>}
            </div>
        </div>
    );
}

export default UseStateForm3;