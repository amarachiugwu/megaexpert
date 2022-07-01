import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { register } from '../actions/userActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import BannerBox from '../components/BannerBox'
import ProfitCalculatorBox from '../components/ProfitCalculatorBox'

function SignupScreen(props) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const navigation = useRef(useNavigate());
    const { search } = useLocation();
    const searchSplit = search.split('=')[1];
    const redirect = search ? `/${searchSplit}` : '/';

    const userRegister = useSelector((state) => state.userRegister);
    const { userInfo, loading, error } = userRegister;

    const dispatch = useDispatch();
    const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Password and confirm password does not match');
    } else {
      dispatch(register(name, email, password));
    }
  };

    useEffect(() => {
        if (userInfo) {
            navigation.current(redirect);
        }
    }, [userInfo, navigation, redirect])

    
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
                        <form className="account-form" onSubmit={submitHandler}>

                            {loading && <LoadingBox></LoadingBox>}
                            {error && <MessageBox variant="danger">{error}</MessageBox>}

                            <div className="form--group">
                                <i className="las la-user"></i>
                                <input type="text" id="name" className="form--control" placeholder=" Enter Name" onChange={(e) => setName(e.target.value)}/>
                            </div>
                            <div className="form--group">
                                <i className="las la-user"></i>
                                <input type="email" id="email" className="form--control" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
                            </div>
                            <div className="form--group">
                                <i className="las la-lock"></i>
                                <input type="password" id="password" className="form--control" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
                            </div>
                            <div className="form--group">
                                <i className="las la-lock"></i>
                                <input type="password" id="confirmPassword" className="form--control" placeholder="Re - Password" onChange={(e) => setConfirmPassword(e.target.value)}/>
                            </div>
                            {/* <div className="d-flex">
                                <div className="form--group custom--checkbox ">
                                    <input type="checkbox" id="check01"/>
                                    <label for="check01">I agree with all <a className="text--primary" href="terms-of-service.html">Terms & Conditions</a></label>
                                </div>
                            </div> */}
                            <div className="form--group">
                                <button className="custom-button" type="submit">REGISTRATION</button>
                            </div>
                        </form>
                        <span className="subtitle">Already you have an account here?</span>
                        <Link to={`/login?redirect=${redirect}`} className="create-account theme-four">Sign in</Link>
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