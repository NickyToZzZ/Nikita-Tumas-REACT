import { useState } from 'react';
import './SignIn.css'

export default function SignIn() {
    
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')

    function checkUser(email: string, password: string) {
        if(!email || !password) {
            alert('Fill email and password forms');
            return;
        }
        const userInfo = {
            email: email,
            password: password
        }
    }

    return ( 
        <>
        <div className="sign-in-container">
            <header className="sign-in-header">
                <div className="sign-in-header__burger">
                    <img src="#" alt="#" />
                </div>
                <div className="sign-in-header__empty"></div>
                <div className="sign-in-header__search">
                    <img src="#" alt="#" />
                </div>
                <div className="sign-in-header__user">
                    <img src="#" alt="#" />
                </div>
            </header>
            <div className="sign-in-content">
                <nav className="sign-in-content__back-btn">Back to home</nav>
                <h2 className="sign-in-content__title">Sign In</h2>
                <form className="sign-in-content-form" action="#">
                    <h4 className="sign-in-content-form__title">Email</h4>
                    <input className="sign-in-content-form__input" type="email" placeholder='Your email' onChange={(e) => setEmail(e.target.value)}/>
                    <h4 className="sign-in-content-form__title">Password</h4>
                    <input className="sign-in-content-form__input" type="password" placeholder='Your password' onChange={(e) => setPassword(e.target.value)}/>
                    <nav className="sign-in-content-form__forgot">Forgot password?</nav>
                    <button className="sign-in-content-form__submit-btn" type='submit' onClick={() => checkUser(email, password)}>Sign In</button>
                    <div className="sign-in-content-form-footer">
                        <p className="sign-in-content-form-footer__text">Don’t have an account? <span className="alttext">Sign Up</span></p>
                    </div>
                </form>
            </div>
        </div>
        </>
     );
}