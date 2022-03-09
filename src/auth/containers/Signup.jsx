import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function Signup() {

    const authContext = useContext(AuthContext);

    const [signupForm, setSignupForm] = useState({
        email: '',
        password: '',
        confirmPassword: ''
    });

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        if (signupForm.password !== signupForm.confirmPassword) {
            return alert('Password fields must match');
        }
        authContext.signupUserWithEmailAndPassword(signupForm.email, signupForm.password)
        .then(() => {
            navigate('/');
        }).catch(console.error);
    }

    const handleChange = (event) => {
        const newSignupForm = {...signupForm};
        newSignupForm[event.target.name] = event.target.value;
        setSignupForm(newSignupForm);
    }

    return(
        <div className="container py-5">
            <div className="row">
                <div className="col-12 col-md-10 col-lg-8 col-xl-6 mx-auto">
                    <div className="shadow rounded-3 bg-white p-5">
                        <h1 className="text-center mb-5">Signup</h1>
                        <form onChange={handleChange} onSubmit={handleSubmit}>
                            <div className="form-group mb-3">
                                <label htmlFor="signupEmailInput">Email</label>
                                <input type="email" name="email" className="form-control" id="signupEmailInput" placeholder="example@example.com" required />
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="signupPasswordInput">Password</label>
                                <input type="password" name="password" className="form-control" id="signupPasswordInput" placeholder="********" required />
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="signupConfirmPasswordInput">Confirm password</label>
                                <input type="password" name="confirmPassword" className="form-control" id="signupConfirmPasswordInput" placeholder="********" required />
                            </div>
                            <div className="d-flex">
                                <button className="btn btn-primary mx-auto" type="submit">Signup</button>
                            </div>
                        </form>
                    </div>
                </div>    
            </div>
        </div>
    )

}

export default Signup;