import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/UserContext';
import './Login.css'

const Login = () => {
    // to set navigate path
    const navigate = useNavigate();

    // take the location value
    const location = useLocation();
    // take location path information
    const from = location.state?.from?.pathname || "/shipping";



    //SignIn data collect
    const { signIn } = useContext(AuthContext);


    const handleSubmit = event => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log("Sign Up user: ", user);
                form.reset();

                // navigate(from, { replace: true });
                navigate('/shipping', { replace: true });
                // navigate('/');
                console.log("Login route: ", from);


            })
            .catch(error => console.error(error));
    }

    return (
        <div className='form-container'>
            <h2 className='form-title'>Login</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" required />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" required />
                </div>
                <input className='btn-submit' type="submit" value="Login" />
            </form>
            <p>New to ema john <Link to='/signup'>Create a New Account</Link></p>
        </div>
    );
};

export default Login;