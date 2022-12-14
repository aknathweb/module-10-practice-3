import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/UserContext';



const SignUp = () => {
    // to set navigate path
    const navigate = useNavigate();
    //to set error
    const [error, setError] = useState(null);
    //Signup 
    const { createUser } = useContext(AuthContext);

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;

        if (password.length < 6) {
            setError('Password should be 6 characters or more.');
            return;
        }

        if (password !== confirm) {
            setError('Your Password did not match');
            return;
        }
        //Signup data collect and send firebase
        createUser(email, password).then((result) => {
            const user = result.user;
            console.log("Sign Up user: ", user);
            form.reset();
            navigate('/');
        })
            .catch((error) => {
                error(error);
            });
    }

    return (
        <div className='form-container'>
            <h2 className='form-title'>Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" required />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" required />
                </div>
                <div className="form-control">
                    <label htmlFor="confirm">Confirm Password</label>
                    <input type="password" name="confirm" required />
                </div>
                <input className='btn-submit' type="submit" value="Sign Up" />
            </form>
            <p>Already Have an Account <Link to='/login'>Login</Link></p>
            <p className='text-error'>{error}</p>
        </div>
    );
};

export default SignUp;