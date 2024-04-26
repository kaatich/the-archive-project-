import React, { useState } from 'react';
import './style.css'; // Import your custom CSS file
import logo from '../Assets/logo.png';
import { Link } from 'react-router-dom';

function LoginForm() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [usernameFocused, setUsernameFocused] = useState(false);
    const [emailFocused, setEmailFocused] = useState(false);
    const [passwordFocused, setPasswordFocused] = useState(false);
    const [showForgotPassword, setShowForgotPassword] = useState(false);

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleUsernameBlur = () => {
        setUsernameFocused(true);
    };

    const handleEmailBlur = () => {
        setEmailFocused(true);
    };

    const handlePasswordBlur = () => {
        setPasswordFocused(true);
    };

    const handleForgotPasswordClick = () => {
        setShowForgotPassword(!showForgotPassword);
    };

    const handleLoginSubmit = () => {
        // Logic to handle login submission
    };

    return (
        <div className="nav">
            <div className='nav2'>
                <img src={logo} alt="" />
                <span className='logo-name'>جماعة مراكش</span>
            </div>
            <p> الأرشيف الخاص بجماعة مراكش</p>
            <hr className='hr'/>
            <form action="" className='real-login-container'>
            <div className='from'>
                <span className='login'>تسجيل الدخول</span>
                {showForgotPassword ? (
                    <>
                        <input
                            className={emailFocused && !email ? 'login-input error' : 'login-input-email'}
                            type="text"
                            placeholder="البريد الإلكتروني"
                            value={email}
                            onChange={handleEmailChange}
                            onBlur={handleEmailBlur} // Set emailFocused to false when input loses focus
                            required
                        />

                        {emailFocused && !email && <span className="email-error-message">الرجاء كتابة بريدك الإلكتروني </span>}
                    </>
                ) : (
                    <>
                        <input
                            className={usernameFocused && !username ? 'login-input error' : 'login-input-name'}
                            type="text"
                            placeholder='إسم المستخدم'
                            value={username}
                            onChange={handleUsernameChange}
                            onBlur={handleUsernameBlur}
                        />
                        {usernameFocused && !username && <span className="error-message-name">الرجاء كتابة اسم المستخدم</span>}
                        <input
                            className={passwordFocused && !password ? 'login-input error' : 'login-input-pass'}
                            type="text"
                            placeholder='كلمة المرور'
                            value={password}
                            onChange={handlePasswordChange}
                            onBlur={handlePasswordBlur}
                            required
                        />
                        {passwordFocused && !password && <span className="error-message-pass">الرجاء كتابة كلمة المرور</span>}
                    </>
                )}
                <div className="forgot-password" onClick={handleForgotPasswordClick}>
                    {showForgotPassword ? 'العودة إلى تسجيل الدخول' : 'هل نسيت كلمة المرور؟'}
                </div>
                <Link to="/Home"><button className="login-button">
                    {showForgotPassword ? 'ارسال' : 'دخول'}
                </button></Link>
            </div>
            </form>
            <div>
                <img className='logo-1' src="http://marrakech.jamaati.ma:8080/jamaati/assets/media/logos/logo.png" alt="" />
            </div>
        </div>
    );
}

export default LoginForm;