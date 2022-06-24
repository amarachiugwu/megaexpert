import React from 'react'
import BannerBox from '../components/BannerBox'
import ProfitCalculatorBox from '../components/ProfitCalculatorBox'

function LoginScreen() {
  return (
    <>
        <BannerBox page="Login" title="LOGIN YOUR ACCOUNT" image="assets/images/account/thumb.png" />




          
        <section className="account-section padding-top padding-bottom">
            <div className="container">
                <div className="row align-items-center gy-5">
                    <div className="col-lg-7  d-none d-lg-block">
                        <div className="account-thumb">
                            <img src="assets/images/account/login-thumb.png" alt="account"/>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="account-wrapper">
                            <h2 className="title">Sign In Your Account</h2>
                            <form className="account-form">
                                <div className="form--group">
                                    <i className="las la-user"></i>
                                    <input type="email" className="form--control" placeholder="Email or User Name"/>
                                </div>
                                <div className="form--group">
                                    <i className="las la-lock"></i>
                                    <input type="password" className="form--control" placeholder="Password"/>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <div className="form--group custom--checkbox ">
                                        <input type="checkbox" id="check01"/>
                                        <label for="check01">Remember me</label>
                                    </div>
                                    <div className="form--group forgot-pass">
                                        <a href="#0">Fotgot Password?</a>
                                    </div>
                                </div>
                                <div className="form--group">
                                    <button className="custom-button">SIGN IN NOW</button>
                                </div>
                            </form>
                            <span className="subtitle">Don't have an account yet?</span>
                            <a href="sign-up.html" className="create-account theme-four">Create Account</a>
                            <div className="shape">
                                <img src="assets/images/account/shape.png" alt="account"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    



        
        <ProfitCalculatorBox/>
    </>
  )
}

export default LoginScreen
