import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function Signin() {

    const authContext = useContext(AuthContext);

    const [signinForm, setSigninForm] = useState({
        email: '',
        password: '',
    });

    const navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault();
        authContext.signinUserWithEmailAndPassword(signinForm.email, signinForm.password)
        .then(() => {
            navigate('/');
        }).catch(error => {
            if (error.code === 'auth/wrong-password') {
                return alert('Wrong password');
            }
            if (error.code === 'auth/user-not-found') {
                return alert('No user registered with this email address');
            }
            console.error(error);
        });
    }

    const handleChange = (event) => {
        const newSigninForm = {...signinForm};
        newSigninForm[event.target.name] = event.target.value;
        setSigninForm(newSigninForm);
    }

    return(
        <div className="container py-5">
            <div className="row">
                <div className="col-12 col-md-10 col-lg-8 col-xl-6 mx-auto">
                    <div className="shadow rounded-3 bg-white p-5">
                        <h1 className="text-center mb-5">Sign in</h1>
                        <form onChange={handleChange} onSubmit={handleSubmit}>
                            <div className="form-group mb-3">
                                <label htmlFor="signinEmailInput">Email</label>
                                <input type="email" name="email" className="form-control" id="signinEmailInput" placeholder="example@example.com" required />
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="signinPasswordInput">Password</label>
                                <input type="password" name="password" className="form-control" id="signinPasswordInput" placeholder="********" required />
                            </div>
                            <div className="d-flex">
                                <button className="btn btn-primary mx-auto" type="submit">Sign in</button>
                            </div>
                        </form>
                    </div>
                </div>    
            </div>
        </div>
    )

}

export default Signin;