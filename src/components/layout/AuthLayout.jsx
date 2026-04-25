import React from 'react';
import '../../assets/css/auth-layout.css';
import taskboard_logo from '../../assets/images/taskboard-logo.png';
import { Link } from "react-router-dom";

const AuthLayout = ({ type, children }) => {
    const isLoginPage = type === 'login';

    return (
        <div className='reg-container'>
            <div className="reg-left">
                <img src={ taskboard_logo } alt="company-logo" />
            </div>
            <div className="reg-right">
                <div className="reg-right-header">
                    <h2>{ isLoginPage ? 'Login' : 'Create' } Your Account</h2>
                </div>
                <div className="reg-right-form">
                    { children }
                </div>
                <div className="reg-right-footer">
                    {
                        isLoginPage ?
                            <>
                                Don't have an account?
                                <Link to="/signup">
                                    <span className='signin-link'>&nbsp;Sign up</span>
                                </Link>
                            </>
                            : <>
                                Already have an account?
                                <Link to="/signin">
                                    <span className='signin-link'>&nbsp;Sign in</span>
                                </Link>
                            </>
                    }
                </div>
            </div>
        </div>
    )
}

export default AuthLayout;
