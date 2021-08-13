import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/react-hooks';
import { validateEmail } from '../../utils/helpers';
import "bulma/css/bulma.css";

import { LOGIN_USER } from '../../utils/mutations';
import Auth from '../../utils/auth';

const SignIn = () => {
    const [formState, setFormState] = useState({ email: '', password: '' });
    const [showAlert, setShowAlert] = useState(false);

    const [login] = useMutation(LOGIN_USER);

    const [errorMessage, setErrorMessage] = useState('');
    const [isErrorMessage, setIsErrorMessage] = useState(true);
    const { email, password } = formState;

    const handleInputChange = (event) => {
        const { name, value } = event.target;

        if (event.target.name === 'email') {
            const isValid = validateEmail(event.target.value);
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
                setIsErrorMessage(true);
            } else {
                setErrorMessage('');
                setIsErrorMessage(false);
            }
        } else {
            if (!event.target.value.length) {
                setErrorMessage(`${event.target.name} is required.`);
                setIsErrorMessage(true);
            } else {
                setErrorMessage('');
                setIsErrorMessage(false);
            }
        }
        if (!errorMessage) {
            setFormState({ ...formState, [name]: value });
        }
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        if(!isErrorMessage) {
            // check if form has everything (as per react-bootstrap docs)
            const form = event.currentTarget;
            if (form.checkValidity() === false) {
                event.preventDefault();
                event.stopPropagation();
            }
    
            try {
                const { data } = await login({
                    variables: { ...formState }
                });
    
                Auth.login(data.login.token);
            } catch (err) {
                console.error(err);
                setShowAlert(true);
            }
    
            setFormState({
                email: '',
                password: '',
            });
        }
    };


    return (
        <>
            <div id="custom-form-cont">
                {
                    showAlert &&
                    <div className="notification is-danger p-2 is-size-7">
                        <span>There is a problem with your credentials!</span>
                        <button className="delete" onClick={()=> setShowAlert(false)}></button>
                    </div>
                }
                <div className="c-f-sec">
                    <h1 data-testid="h1tag" className="is-size-4 has-text-centered">Sign In</h1>
                    <form id="custom-form" onSubmit={handleFormSubmit}>
                        <div>
                            <input className="f-inp" type="email" name="email" placeholder="email" defaultValue={email} onChange={handleInputChange} />
                        </div>
                        <div>
                            <input className="f-inp" type="password" name="password" placeholder="password" defaultValue={password} onChange={handleInputChange} />
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