import React from 'react'
import BannerBox from '../components/BannerBox'
import ProfitCalculatorBox from '../components/ProfitCalculatorBox'

function SignupScreen() {
  return (
    <>
        <BannerBox page="Regisgration" title="CREATE YOUR ACCOUNT" image="assets/images/account/thumb.png" />




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
                        <h2 className="title">Create Your Account</h2>
                        <form className="account-form">
                            <div className="form--group">
                                <i className="las la-user"></i>
                                <input type="email" className="form--control" placeholder="Email or User Name"/>
                            </div>
                            <div className="form--group">
                                <i className="las la-lock"></i>
                                <input type="password" className="form--control" placeholder="Password"/>
                            </div>
                            <div className="form--group">
                                <i className="las la-lock"></i>
                                <input type="password" className="form--control" placeholder="Re - Password"/>
                            </div>
                            <div className="d-flex">
                                <div className="form--group custom--checkbox ">
                                    <input type="checkbox" id="check01"/>
                                    <label for="check01">I agree with all <a className="text--primary" href="terms-of-service.html">Terms & Conditions</a></label>
                                </div>
                            </div>
                            <div className="form--group">
                                <button className="custom-button">REGISTRATION</button>
                            </div>
                        </form>
                        <span className="subtitle">Already you have an account here?</span>
                        <a href="login" className="create-account theme-four">Sign in</a>
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

export default SignupScreen