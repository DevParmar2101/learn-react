import {NavLink, useNavigate} from "react-router-dom";
import { forgotPassword } from "../../../api/authApi";
import {useState} from "react";

function ForgotPasswordForm() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: "",
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
            const response = await forgotPassword(formData);
            console.log(response.data.data);
            navigate('/');
        }catch (error) {
            if (error.response?.status === 422) {
                setErrors(error.response.data.errors);
                console.log(error.response.data.errors);
                console.log(error.email[0]);
            }else{
                alert(error.response?.data?.message || "Forgot Password");
            }
        }finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input type="email" name="email" className={errors.email ? "form-control is-invalid" : "form-control"} id="email" value={formData.email} onChange={handleChange} />
                {errors.email && (<div className="invalid-feedback">{errors.email[0]}</div>)}
            </div>
            <button type="submit" className="btn btn-primary w-100 py-8 mb-4 rounded-4" disabled={loading}>{loading ? "Sending..." : "Send"}</button>

            <div className="d-flex align-items-center justify-content-center">
                <p className="fs-4 mb-0 fw-medium">New to React?</p>
                <NavLink to="/register" className="text-primary fw-medium ms-2">Create an account</NavLink>
            </div>
        </form>
    );
}
export default ForgotPasswordForm;