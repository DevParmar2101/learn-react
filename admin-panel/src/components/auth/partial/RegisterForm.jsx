import {NavLink, useNavigate} from "react-router-dom";
import { useState } from "react";
import { register } from "../../../api/authApi";
import {formatDate} from "../../../utils/helper.js";

function RegisterForm() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
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
            }else{
                alert(error.response?.data?.message || "Registration Failed");
            }
        }finally {
            setLoading(false);
        }
    };
    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="fullname" className="form-label">FullName</label>
                <input type="text" className="form-control" id="fullname" value={formData.name} onChange={handleChange}/>
            </div>
            <div className="mb-4">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" className="form-control" id="email" value={formData.email} onChange={handleChange}/>
            </div>
            <div className="mb-4">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" className="form-control" id="password" value={formData.password} onChange={handleChange}/>
            </div>
            <NavLink to="/register" className="btn btn-primary w-100 py-8 mb-4 rounded-2">Register</NavLink>
            <div className="d-flex align-items-center justify-content-center">
                <p className="fs-4 mb-0 fw-medium">Already have an account?</p>
                <NavLink to="/login" className="text-primary fw-medium ms-2">Login</NavLink>
            </div>
        </form>

    );
}
export default RegisterForm;