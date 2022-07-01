import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { signin } from '../actions/userActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import BannerBox from '../components/BannerBox'
import ProfitCalculatorBox from '../components/ProfitCalculatorBox'

function LoginScreen(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigation = useRef(useNavigate());
    const { search } = useLocation();
    const searchSplit = search.split('=')[1];
    const redirect = search ? `/${searchSplit}` : '/dashboard';

    const userSignin = useSelector((state) => state.userSignin);
    const {userInfo, loading, error} = userSignin;

    const dispatch = useDispatch();

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(signin(email, password));
    };

    useEffect(() => {
        if (userInfo) {
            navigation.current(redirect);
        }
    }, [userInfo, navigation, redirect])

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
                            <form className="account-form" onSubmit={submitHandler}>

                                
                                {loading && <LoadingBox></LoadingBox>}
                                {error && <MessageBox variant="danger">{error}</MessageBox>}


                                <div className="form--group">
                                    <i className="las la-user"></i>
                                    <input type="email" id="email" className="form--control" placeholder="Email or User Name" onChange={(e) => setEmail(e.target.value)}/>
                                </div>
                                <div className="form--group">
                                    <i className="las la-lock"></i>
                                    <input type="password" id="password" className="form--control" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
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
                                    <button className="custom-button" type="submit">SIGN IN NOW</button>
                                </div>
                            </form>
                            <span className="subtitle">Don't have an account yet?</span>
                            <Link to={`/register?redirect=${redirect}`} className="create-account theme-four">Create Account</Link>
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
