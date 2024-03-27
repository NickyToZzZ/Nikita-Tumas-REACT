import { useState } from 'react';
import './SignUp.css'

export default function SignUp() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [checkPassword, setCheckPassword] = useState('')

    function getUserInfo(name: string, email: string, password: string, checkPassword: string) {
        if (!name || !email || !password || !checkPassword) {
            alert('Fill all the forms!')
            return
        } else if (password === checkPassword) {
            const userInfo = {
                name: name,
                email: email,
                password: password,
            }
        } else {
            alert('Your password is incorrect!')
            return
        }
    }

    return ( 
        <>
        <div className="sign-up-container">
            <header className="sign-up-header">
                <div className="sign-up-header__burger">
                    <img src="#" alt="#" />
                </div>
                <div className="sign-up-header__empty"></div>
                <div className="sign-up-header__search">
                    <img src="#" alt="#" />
                </div>
                <div className="sign-up-header__user">
                    <img src="#" alt="#" />
                </div>
            </header>
            <div className="sign-up-content">
                <nav className="sign-up-content__back-btn">Back to home</nav>
                <h2 className="sign-up-content__title">Sign Up</h2>
                <form className="sign-up-content-form" action="#">
                    <h4 className="sign-up-content-form__title">Name</h4>
                    <input className="sign-up-content-form__input" type="text" placeholder='Your name' onChange={(e) => setName(e.target.value)}/>
                    <h4 className="sign-up-content-form__title">Email</h4>
                    <input className="sign-up-content-form__input" type="email" placeholder='Your email' onChange={(e) => setEmail(e.target.value)}/>
                    <h4 className="sign-up-content-form__title">Password</h4>
                    <input className="sign-up-content-form__input" type="password" placeholder='Your password' onChange={(e) => setPassword(e.target.value)}/>
                    <h4 className="sign-up-content-form__title">Confirm password</h4>
                    <input className="sign-up-content-form__input" type="text" placeholder='Confirm password' onChange={(e) => setCheckPassword(e.target.value)}/>
                    <button className="sign-up-content-form__submit-btn" type='submit' onClick={() => getUserInfo(name, email, password, checkPassword)}>Sign Up</button>
                    <div className="sign-up-content-form-footer">
                        <p className="sign-up-content-form-footer__text">Already have an account?<span className="sign-up-alttext"> Sign In</span></p>
                    </div>
                </form>
            </div>
        </div>
        </>
     );
}