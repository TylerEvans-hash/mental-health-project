import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/react-hooks';
import { validateEmail } from '../../utils/helpers';

import { SIGNIN } from '../../utils/mutations';
import Auth from '../../utils/auth';

const SignIn = () => {
    const [formState, setFormState] = useState({ email: '', password: '' });
    const [showAlert, setShowAlert] = useState(false);

    const [signIn] = useMutation(SIGNIN);

    const [errorMessage, setErrorMessage] = useState('');
    const { email, password } = formState;

    const handleInputChange = (event) => {
        const { name, value } = event.target;

        if (event.target.name === 'email') {
            const isValid = validateEmail(event.target.value);
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!event.target.valuevent.length) {
                setErrorMessage(`${event.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }
        if (!errorMessage) {
            setFormState({ ...formState, [name]: value });
        }
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        // check if form has everything (as per react-bootstrap docs)
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        try {
            const { data } = await signIn({
                variables: { ...formState }
            });

            Auth.login(data.login.token);
        } catch (err) {
            console.error(err);
            setShowAlert(true);
        }

        setFormState({
            username: '',
            email: '',
            password: '',
        });
    };

    const handleChange = (e) => {
        
    };


    return (
        <>
            <div id="custom-form-cont">
                {
                    showAlert &&
                    <div class="notification is-danger p-2">
                        <button class="delete"></button>
                        There is a problem with your credentials!
                    </div>
                }
                <div className="c-f-sec">
                    <h1 data-testid="h1tag" className="is-size-4 has-text-centered">Sign In</h1>
                    <form id="custom-form" onSubmit={handleFormSubmit}>
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