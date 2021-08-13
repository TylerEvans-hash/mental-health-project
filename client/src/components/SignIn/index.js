import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { validateEmail } from '../../utils/helpers';
import "bulma/css/bulma.css";

const SignIn = () => {
    const [formState, setFormState] = useState({email: '', password: '' });

    const [errorMessage, setErrorMessage] = useState('');
    const { email, password } = formState;

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const handleChange = (e) => {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }
        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
        }
    };


    return (
        <>
            <div id="custom-form-cont">
                <div className="c-f-sec">
                    <h1 data-testid="h1tag" className="is-size-4 has-text-centered">Sign In</h1>
                    <form id="custom-form" onSubmit={handleSubmit}>
                        <div>
                            <input className="f-inp" type="email" name="email" placeholder="email" defaultValue={email} onBlur={handleChange} />
                        </div>
                        <div>
                            <input className="f-inp" type="password" name="password" placeholder="password" defaultValue={password} onBlur={handleChange} />
                        </div>
                        {errorMessage && (
                            <div>
                                <p className="error-text">{errorMessage}</p>
                            </div>
                        )}
                        <button data-testid="button" type="submit">Submit</button>
                    </form>
                </div>
                <div className="c-f-sec mt-4 p-4 has-text-centered">
                    <small>Don't have an account?</small> <Link to="/signup"><small>Sign Up</small></Link>
                </div>
            </div>
        </>
    );
}

export default SignIn;