import React from 'react';
import $ from 'jquery'
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import AboutScreen from './screens/AboutScreen';
import ContactScreen from './screens/ContactScreen';
import FAQScreen from './screens/FAQScreen';
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from './screens/LoginScreen';
import MissionVisionScreen from './screens/MissionVisionScreen';
import SignupScreen from './screens/SignupScreen';
import PageNotFoundScreen from './screens/PageNotFoundScreen';
import PlanScreen from './screens/PlanScreen';
import AffiliateScreen from './screens/AffiliateScreen';

function dropDown(id) {
    var dropElement = document.getElementById(id);
    var element = $(dropElement).parent('li');
    element.toggleClass('open');

    if (element.hasClass('open')) {
        element.removeClass('open');
        element.find('li').toggleClass('open');
        element.find('ul').slideUp(400, "swing");


        console.log('low');
        element.addClass('open');
        element.children('ul').slideDown(400, "swing");
        element.siblings('li').children('ul').slideUp(400, "swing");
        element.siblings('li').toggleClass('open');
        element.siblings('li').find('li').toggleClass('open');
        element.siblings('li').find('ul').slideUp(400, "swing");
    } else {
        element.addClass('open');
        element.children('ul').slideDown(400, "swing");
        element.siblings('li').children('ul').slideUp(400, "swing");
        element.siblings('li').toggleClass('open');
        element.siblings('li').find('li').toggleClass('open');
        element.siblings('li').find('ul').slideUp(400, "swing");


        console.log('hi');
        element.removeClass('open');
        element.find('li').toggleClass('open');
        element.find('ul').slideUp(400, "swing");
    }
}

function App() {

    
    
    function toggleNav() {
        $('.menu,.header-trigger').toggleClass('active')
        // $('.overlay').toggleClass('overlay-color')
        // $('.overlay').removeClass('active')

        $('html, body').animate({
            scrollTop: 0
        }, 300);
    }


    function toggleOverlay() {
        $('.overlay').removeClass('overlay-color')
        $('.menu, .header-trigger').removeClass('active')
    }



  return (
    <BrowserRouter>
      <div className="App">

        <div className="overlay" onClick={toggleOverlay}></div>

        <header className="header">
          <div className="header-bottom">
            <div className="container">
              <div className="header-area">
                <div className="logo">
                    <Link to="/">
                        <img src="/assets/images/logo.png" alt="logo" />
                    </Link>
                </div>
                <div className="header-trigger d-block d-lg-none" onClick={toggleNav}>
                    <span></span>
                </div>
                <ul className="menu">
                    <li>
                        <Link to="/" onClick={toggleNav}>Home</Link>
                    </li>

                    <li>
                        <Link to="/about" onClick={toggleNav}>About</Link>
                    </li>

                    <li>
                        <Link to="/plan" onClick={toggleNav}>Plans</Link>
                    </li>

                    {/* <li className="has-sub-menu" onClick={dropDown}>
                        <Link to="#" id="plan" onClick={
                            (e) => {
                                e.preventDefault();
                                dropDown('plan')
                            }
                        }>Plan</Link>
                        <ul className="sub-menu">
                            <li>
                                <Link to="/bronze" onClick={toggleNav}>Bronze Plan</Link>
                            </li>
                            <li>
                                <Link to="/silver" onClick={toggleNav}>Silver Plan</Link>
                            </li>
                            <li>
                                <Link to="/gold" onClick={toggleNav}>Gold Plan</Link>
                            </li>
                        </ul>
                    </li> */}

                    <li>
                        <Link to="/mission-vision" onClick={toggleNav}>Mission & Vision</Link>
                    </li>

                    <li>
                        <Link to="/faq" onClick={toggleNav}>Faq</Link>
                    </li>

                    <li>
                        <Link to="/affiliate" onClick={toggleNav}>Affiliate</Link>
                    </li>
                  
                    <li>
                        <Link to="/contact" onClick={toggleNav}>Contact</Link>
                    </li>
                    
                    <li className="has-sub-menu">
                        <Link to="#" id="account" onClick={
                            (e) => {
                                e.preventDefault();
                                dropDown('account')
                            }
                        }>Account</Link>
                        <ul className="sub-menu">
                            <li>
                                <Link to="/login" onClick={toggleNav}>Log In</Link>
                            </li>
                            <li>
                                <Link to="/sign-up" onClick={toggleNav}>Sign Up</Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="investment-plan-01.html" className="cmn--btn">Invest Now</a>
                    </li>
                </ul>
              </div>
            </div>
          </div>
        </header>

        <main style={{ minHeight: "280px" }}>
          <Routes>
            <Route path="/" element={<HomeScreen />} exact></Route>
            <Route path="/about" element={<AboutScreen />}></Route>
            <Route path="/plan" element={<PlanScreen />}></Route>
            <Route path="/mission-vision" element={<MissionVisionScreen />}></Route>
            <Route path="/faq" element={<FAQScreen />}></Route>
            <Route path="/affiliate" element={<AffiliateScreen />}></Route>
            <Route path="/contact" element={<ContactScreen />}></Route>
            <Route path="/login" element={<LoginScreen />}></Route>
            <Route path="/sign-up" element={<SignupScreen />}></Route>
            <Route path="*" element={<PageNotFoundScreen />}></Route>
          </Routes> 
        </main>

        <footer className="footer-section bg_img" style={{ background: "url(/assets/images/footer/bg.png) no-repeat center top" }}>
          <div className="container">
              <div className="row gy-5">
                  <div className=" col-xl-3 col-lg-5 col-md-6 col-sm-6">
                      <div className="footer-widget">
                          <h3 className="widget-title">Know About Us</h3>
                          <p>
                              Mega Expert Finance is an investment platform legally registered with all the relevant authorities online, providing secure, smart trading through our team of professionals with the aim of minimizing losses and maximizing profits for investors.
                          </p>
                          <ul className="social-icons">
                              <li>
                                  <Link to="#">
                                      <i className="lab la-facebook-f"></i>
                                  </Link>
                              </li>
                              <li>
                                  <Link to="#">
                                      <i className="lab la-twitter"></i>
                                  </Link>
                              </li>
                              <li>
                                  <Link to="#">
                                      <i className="lab la-instagram"></i>
                                  </Link>
                              </li>
                              <li>
                                  <Link to="#">
                                      <i className="lab la-linkedin-in"></i>
                                  </Link>
                              </li>
                          </ul>
                      </div>
                  </div>
                  <div className=" col-xl-3 col-lg-4 col-md-4 col-sm-6">
                      <div className="footer-widget">
                          <h4 className="widget-title">Company</h4>
                          <ul className="footer-links">
                              <li>
                                  <Link to="/faq">
                                      
                                  <i className="las la-angle-double-right"></i>Faq</Link>
                              </li>
                              <li>
                                  <Link to="/about">
                                      
                                  <i className="las la-angle-double-right"></i>About</Link>
                              </li>
                               <li>
                                  <Link to="/contact">
                                      
                                  <i className="las la-angle-double-right"></i>Support</Link>
                              </li>
                          </ul>
                      </div>
                  </div>
                  <div className=" col-xl-3 col-lg-4 col-sm-6 col-md-4">
                      <div className="footer-widget">
                          <h4 className="widget-title">Useful Link</h4>
                          <ul className="footer-links">
                              <li>
                                  <Link to="/mission-vision">
                                  <i className="las la-angle-double-right"></i>Mission & Vision</Link>
                              </li> 
                              <li>
                                  <Link to="/affiliate">
                                  <i className="las la-angle-double-right"></i>Affiliate</Link>
                              </li>
                              <li>
                                  <Link to="/Login">   
                                  <i className="las la-angle-double-right"></i>Login</Link>
                              </li>
                              <li>
                                  <Link to="/sign-up"> 
                                  <i className="las la-angle-double-right"></i>Signup</Link>
                              </li>
                          </ul>
                      </div>
                  </div>
                  <div className=" col-xl-3 col-lg-4 col-sm-6 col-md-4">
                      <div className="footer-widget">
                          <h4 className="widget-title">Investment</h4>
                          <ul className="footer-links">
                              <li>
                                  <Link to="/plan">
                                      
                                  <i className="las la-angle-double-right"></i>
                                  All Plan</Link>
                              </li>
                              <li>
                                  <Link to="/bronze">
                                      
                                  <i className="las la-angle-double-right"></i>
                                  Bronze Plan</Link>
                              </li>
                              <li>
                                  <Link to="/silver">
                                      
                                  <i className="las la-angle-double-right"></i>
                                  Silver Plan</Link>
                              </li>
                              <li>
                                  <Link to="/gold">
                                      
                                  <i className="las la-angle-double-right"></i>
                                  Gold Plan </Link>
                              </li>
                          </ul>
                      </div>
                  </div>
              </div>
          </div>
          <div className="footer-bottom">
            <div className="container">
              <p className="text-center text-white pt-4 p-sm-5 pb-0">Copyright &copy; {(new Date().getFullYear())}. All Rights Reserved</p>
            </div>
          </div>
        </footer>
      </div>
    </BrowserRouter>

  );
}

export default App;
