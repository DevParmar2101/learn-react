import { useState } from "react";

function UseStateForm5() {
    const [formFields, setFormFields] = useState({
        name: "",
        email: "",
        age: "",
    });

    const [errors, setErrors] = useState({});

    function handleChange(e) {
        const { name, value } = e.target;

        setFormFields({
            ...formFields,
            [name] : value,
        });
    }

    function handleSubmit(e) {
        e.preventDefault();

        const validationErrors = {};

        //Name Validation
        if (formFields.name.trim() === "") {
            validationErrors.name = "Name is required.";
        }

        // Email Validation
        if (formFields.email.trim() === "") {
            validationErrors.email = "Email is required.";
        }else if (!formFields.email.includes("@")) {
            validationErrors.email = "Please enter a valid email address.";
        }

        //Age Validation
        if (formFields.age.trim() === "") {
            validationErrors.age = "Age is required.";
        }else if (Number(formFields.age) < 18) {
            validationErrors.age = "Age must be greater than 18.";
        }

        // Save all errors into state
        setErrors(validationErrors);

        // Stop if there is an errors
        if (Object.keys(validationErrors).length > 0) {
            return;
        }

        console.log("Form Submitted Successfully!");
        console.log(formFields);

        //Reset Form
        setFormFields({
            name: "",
            email: "",
            age: "",
        });
        //Clear Errors
        setErrors({});
    }

    return (
        <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: "15px" }}>
                <label htmlFor="name">Name</label>
                <br/>
                <input type="text" name="name" id="name" value={formFields.name} onChange={handleChange} />
                {errors.name &&
                    <p style={{ color: "red" }}>{errors.name}</p>
                }
            </div>

            <div style={{ marginBottom: "15px" }}>
                <label htmlFor="email">Email</label>
                <br/>
                <input type="text" name="email" id="email" value={formFields.email} onChange={handleChange} />
                {errors.email &&
                    <p style={{ color: "red" }}>{errors.email}</p>
                }
            </div>

            <div style={{ marginBottom: "15px" }}>
                <label htmlFor="age">Age</label>
                <br/>
                <input type="text" name="age" id="age" value={formFields.age} onChange={handleChange} />
                {errors.age &&
                    <p style={{ color: "red" }}>{errors.age}</p>
                }
            </div>

            <button type="submit">Submit</button>
        </form>
    );
}

export default UseStateForm5;