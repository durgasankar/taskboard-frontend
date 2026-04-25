import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';
import { isValidEmail } from '../utils/validation';
// import { loginUserApi } from '../services/authService';
// this will be replaced after service is done
import { loginUser } from '../services/localAuthService';
import useToast from '../hooks/useToast';
import AuthLayout from '../components/layout/AuthLayout';
import CustomButton from '../components/common/CustomButton';
import CustomTextInput from '../components/common/CustomTextInput';

const Login = () => {
    const { successToast, errorToast } = useToast();
    const navigate = useNavigate();

    const [loginForm, setLoginForm] = useState({ email: '', password: '' });
    const [errors, setErrors] = useState({});

    const handleChange = event => {
        const { name, value } = event.target;
        setLoginForm(prevForm => ({
            ...prevForm,
            [name]: value
        }));
        setErrors(prevErrors => ({
            ...prevErrors,
            [name]: ""
        }))
    }

    const formValidator = () => {
        const newErrors = {};
        Object.keys(loginForm).forEach(field => {
            if (!loginForm[field]) {
                newErrors[field] = `This field is required.`
            }
        })
        if (loginForm.email && !isValidEmail(loginForm.email)) {
            newErrors['email'] = 'Enter a valid email address';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    }

    const handleSubmit = async event => {
        event.preventDefault();
        const isValid = formValidator();
        if (!isValid) return;
        const payload = {
            email: loginForm.email,
            password: loginForm.password
        }
        try {
            const response = await loginUser(payload);
            console.log(response)
            localStorage.setItem('token', response.token)
            localStorage.setItem('userinfo', JSON.stringify(response.data));
            successToast(response?.message);
            navigate('/dashboard');
        } catch (error) {
            errorToast(error?.message || "Something went wrong");
        }
    }

    return (
        <AuthLayout type='login'>
            <Box
                component='form'
                noValidate
                autoComplete='off'
                onSubmit={ handleSubmit }
            >
                <CustomTextInput
                    value={ loginForm.email }
                    name={ 'email' }
                    label='Email'
                    onChange={ handleChange }
                    required
                    type='email'
                    error={ !!errors.email }
                    helperText={ errors.email }
                />
                <div className='password-confirm' id='single-row'>
                    <CustomTextInput
                        value={ loginForm.password }
                        name={ 'password' }
                        label='Password'
                        onChange={ handleChange }
                        required
                        error={ !!errors.password }
                        helperText={ errors.password }
                    />
                </div>
                <div className="signup-btn">
                    <CustomButton
                        fullWidth
                        type="submit"
                        variant="contained"
                    >
                        Sign in
                    </CustomButton>
                </div>
            </Box>
        </AuthLayout>
    )
}

export default Login;