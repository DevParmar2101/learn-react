import {NavLink, useNavigate} from "react-router-dom";
import { useState } from "react";
import { register } from "../../../api/authApi";

function RegisterForm() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setErrors({});

        try{
            const response = await register(formData);
            console.log(response.data.data);

            navigate('/');
        } catch(error) {
            if (error.response?.status === 422) {
                setErrors(error.response.data.errors);
                console.log(error.response.data.errors);
                console.log(errors.name[0]);

            }else{
                alert(error.response?.data?.message || "Registration Failed");
            }
        }finally {
            setLoading(false);
        }
    };
    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-2">
                <label htmlFor="fullname" className="form-label">Full Name</label>
                <input type="text" name="name" className={errors.name ? "form-control is-invalid" : "form-control"} id="fullname" value={formData.name} onChange={handleChange}/>
                {errors.name && (<div className="invalid-feedback">{errors.name[0]}</div>)}
            </div>
            <div className="mb-2">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" name="email" className={errors.email ? "form-control is-invalid" : "form-control"} id="email" value={formData.email} onChange={handleChange}/>
                {errors.email && (<div className="invalid-feedback">{errors.email[0]}</div>)}
            </div>
            <div className="mb-2">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" name="password" className={errors.password ? "form-control is-invalid" : "form-control"} id="password" value={formData.password} onChange={handleChange}/>
                {errors.password && (<div className="invalid-feedback">{errors.password[0]}</div>)}
            </div>
            <div className="mb-3">
                <label htmlFor="password_confirmation" className="form-label">Confirm Password</label>
                <input type="password" name="password_confirmation" className={errors.password_confirmation ? "form-control is-invalid" : "form-control"} id="password_confirmation" value={formData.password_confirmation} onChange={handleChange}/>
                {errors.password_confirmation && (<div className="invalid-feedback">{errors.password_confirmation[0]}</div>)}
            </div>
            <button type="submit" className="btn btn-primary w-100 py-8 mb-4 rounded-4" disabled={loading}>{loading ? "Registering User..." : "Register"}</button>
            <div className="d-flex align-items-center justify-content-center">
                <p className="fs-4 mb-0 fw-medium">Already have an account?</p>
                <NavLink to="/login" className="text-primary fw-medium ms-2">Login</NavLink>
            </div>
        </form>

    );
}
export default RegisterForm;