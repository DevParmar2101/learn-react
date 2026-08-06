import {NavLink, useNavigate} from "react-router-dom";
import { useState } from "react";
import { login } from "../../../api/authApi";

function LoginForm() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const [loading, setLoading] = useState(false);
    const [errors,setErrors] = useState({});
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
        try {
            const response = await login(formData);

            localStorage.setItem(
                "token",
                response.data.data.token
            );
            console.log(response.data.data);
            navigate('/');
        } catch (error) {
            if (error.response?.status === 422) {
                setErrors(error.response.data.errors);
            }else{
                alert(error.response?.data?.message || "Login Failed");
            }
        }finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-2">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="text" name="email" className={errors.email ? "form-control is-invalid" : "form-control"} id="email" value={formData.email} onChange={handleChange}/>
                {errors.email && (<div className="invalid-feedback">{errors.email[0]}</div>)}
            </div>
            <div className="mb-2">
                <label htmlFor="password" className="form-label">Password</label>
                <input type="password" name="password" className={errors.password ? "form-control is-invalid" : "form-control"} id="password" value={formData.password} onChange={handleChange}/>
                {errors.password && (<div className="invalid-feedback">{errors.password[0]}</div>)}
            </div>
            <div className="d-flex align-items-center justify-content-between mb-4">
                <div className="form-check">
                    <input className="form-check-input primary" type="checkbox" value="" id="rememberMe" checked/>
                    <label className="form-check-label text-dark" htmlFor="rememberMe">
                        Remember this Device
                    </label>
                </div>
                <NavLink className="text-primary fw-medium" to="/forgot-password">Forgot Password?</NavLink>
            </div>
            <button type="submit" className="btn btn-primary w-100 py-8 mb-4 rounded-4" disabled={loading}>{loading ? "Signing In..." : "Sign In"}</button>
            <div className="d-flex align-items-center justify-content-center">
                <p className="fs-4 mb-0 fw-medium">New to React?</p>
                <NavLink to="/register" className="text-primary fw-medium ms-2">Create an account</NavLink>
            </div>
        </form>
    );
}
export default LoginForm;