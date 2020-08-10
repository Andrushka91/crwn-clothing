import React from 'react';

import FormInput from '../form-input/form-input.component'
import CustomButton from '..//../components/custom-button/custom-button.component';

import { signInWithGoogle } from '..//../firebase/firebase.utils';

import './sign-in.styles.scss';


class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }
    handleSubmit = event => {
        event.preventdefault();

        this.state({ email: '', password: '' });
    }

    handleChangge = event => {
        const { value, name } = event.target;

        this.setState({ [name]: value })
    }

    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name="Email"
                        type="email"
                        value={this.state.email}
                        handleChange={this.handleChangge}
                        label="email"
                        required />

                    <FormInput
                        name="Password"
                        type="password"
                        value={this.state.password}
                        handleChange={this.handleChangge}
                        label="password"
                        required />

                    <CustomButton type="submit">Sign In</CustomButton>
                    <CustomButton onClick={signInWithGoogle}>Sign In with Google</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignIn;