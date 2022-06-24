import React from "react";
import WhyUsBox from "../components/WhyUsBox";

function HomeScreen () {

    return (
        
        <>
            
            <section className="banner-section bg_img" style={{ background: "url(/assets/images/banner/bg.png) center bottom" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4  d-none d-lg-block">
                            <div className="banner-thumb">
                                <img src="assets/images/banner/thumb.png" alt="banner"/>
                                <div className="shapes ">
                                    <div className="shape2">
                                        <img src="assets/images/banner/shape1.png" alt="banner"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="banner-content">
                                <h1 className="banner-title">Mega <span className="text--base">Expert </span><span> Finance</span></h1>
                                <span className="subtitle" style={{ textTransform:"lowercase" }}>DECENTRALIZED TRADING & INVESTMENT PLATFORM WITH BLOCKCHAIN INFRASTRUCTURE</span>
                                <div className="button-group d-flex flex-wrap align-items-center">
                                    <a href="signup" className="cmn--btn btn--secondary">get started</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>




            <section className="how-work padding-top">
                <div className="container">
                    <div className="row justif-content-center align-items-center">
                        <div className="col-lg-6">
                            <div className="how-work-left-content">
                                <div className="section-header wow fadeInUp">
                                    <span className="subtitle">How to Do It</span>
                                    <h2 className="title">try easy 3 step to invest</h2>
                                    <p>We welcome you to the digital world of crypto investment, Mega Expert Finance is an active cryptocurrency mining and trading participant, crypto-currency asset management, which is built on many years of experience and deep market knowledge in the stock and digital market.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="row align-items-center gy-4">
                                <div className="col-md-6 col-sm-6">
                                    <div className="row gy-4">
                                        <div className="col-12 wow fadeInUp" data-wow-delay=".2s">
                                            <div className="how-work-item">
                                                <div className="how-work-item-thumb theme-one">
                                                    <i className="las la-atlas"></i>
                                                </div>
                                                <div className="how-work-item-content">
                                                    <h4 className="title"><a href="sign-up.html">Quick Registration</a></h4>
                                                    <p>Signup today to enjoy all the invetment options.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 wow fadeInUp" data-wow-delay=".3s">
                                            <div className="how-work-item gradient-two">
                                                <div className="how-work-item-thumb theme-two">
                                                    <i className="las la-hand-holding-usd"></i>
                                                </div>
                                                <div className="how-work-item-content">
                                                    <h4 className="title"><a href="investment-plan-01.html">Make An Invest</a></h4>
                                                    <p>Our investment options are the best you can ever find.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-6 wow fadeInUp" data-wow-delay=".4s">
                                    <div className="how-work-item gradient-four">
                                        <div className="how-work-item-thumb theme-four">
                                            <i className="las la-wallet"></i>
                                        </div>
                                        <div className="how-work-item-content">
                                            <h4 className="title"><a href="login.html">Get Your Profit</a></h4>
                                            <p>Get your profit instantly on withdrawal.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>




            <section className="feature-section padding-top">
                <div className="container">
                    <div className="row align-items-center gy-5 ">
                        <div className="col-lg-6 col-md-10 wow fadeInLeft d-none d-lg-block" >
                            <div className="feature-thumb">
                                <img src="assets/images/feature/thumb.png" alt="feature"/>
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeInRight">
                            <div className="feature-content">
                                <div className="section-header">
                                    <span className="subtitle">awesome hyip features</span>
                                    <h2 className="title">our best Hyip features</h2>
                                </div>
                                <ul className="feature-info-list">
                                    <li>
                                        Mega Expert Finance is completely free of charge and accessible accross the globe!.
                                    </li>
                                    <li>
                                        Mega Expert Finance can help you trade in both the manual and automatic formats with an average of 87.35% Win Rate across all compatible brokers.
                                    </li>
                                    <li>
                                        
                                        Mega Expert Finance is fully SSL and highly secure thereby providing little or no chance for your personal details to be phished by cyber-criminals.    
                                    </li>
                                    <li>
                                        Mega Expert Finance can be synced with the Top-Class brokers in the market providing you with security for your capital and a peace of mind.
                                    </li>
                                    <li>
                                        Mega Expert Finance is completely free of charge and accessible accross the globe!.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>




            <section className="plan-section padding-top">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-7">
                            <div className="section-header text-center">
                                <span className="subtitle wow fadeInUp">choose your plan</span>
                                <h2 className="title wow fadeInUp" data-wow-delay=".4s">best investment platform for your profit</h2>
                            </div>
                        </div>
                    </div>
                    <div className="plan-wrapper row g-4">
                        <div className="col-sm-6 col-lg-12">
                            <div className="plan-item wow fadeIn" data-wow-delay=".1s">
                                <div className="plan-inner-part">
                                    <h2 className="plan-interest-percent">600%</h2>
                                </div>
                                <div className="plan-inner-part">
                                    <ul className="plan-invest-limit">
                                        <li>
                                            <i className="fas fa-check"></i>
                                            Minimum : $30.00
                                        </li>
                                        <li>
                                            <i className="fas fa-check"></i>
                                            Maximum : $1500.00
                                        </li>
                                    </ul>
                                </div>
                                <div className="plan-inner-part">
                                    <h2 className="plan-invest-time">04 <sub>DAYS</sub></h2>
                                </div>
                                <div className="plan-inner-part">
                                    <a href="login.html" className="cmn--btn-2">Invest now</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-12">
                            <div className="plan-item wow fadeIn" data-wow-delay=".2s">
                                <div className="plan-inner-part">
                                    <h2 className="plan-interest-percent">700%</h2>
                                </div>
                                <div className="plan-inner-part">
                                    <ul className="plan-invest-limit">
                                        <li>
                                            <i className="fas fa-check"></i>
                                            Minimum : $30.00
                                        </li>
                                        <li>
                                            <i className="fas fa-check"></i>
                                            Maximum : $1500.00
                                        </li>
                                    </ul>
                                </div>
                                <div className="plan-inner-part">
                                    <h2 className="plan-invest-time">10 <sub>DAYS</sub></h2>
                                </div>
                                <div className="plan-inner-part">
                                    <a href="login.html" className="cmn--btn-2">Invest now</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-12">
                            <div className="plan-item wow fadeIn" data-wow-delay=".3s">
                                <div className="plan-inner-part">
                                    <h2 className="plan-interest-percent">800%</h2>
                                </div>
                                <div className="plan-inner-part">
                                    <ul className="plan-invest-limit">
                                        <li>
                                            <i className="fas fa-check"></i>
                                            Minimum : $30.00
                                        </li>
                                        <li>
                                            <i className="fas fa-check"></i>
                                            Maximum : $1500.00
                                        </li>
                                    </ul>
                                </div>
                                <div className="plan-inner-part">
                                    <h2 className="plan-invest-time">07 <sub>DAYS</sub></h2>
                                </div>
                                <div className="plan-inner-part">
                                    <a href="login.html" className="cmn--btn-2">Invest now</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-12">
                            <div className="plan-item wow fadeIn" data-wow-delay=".4s">
                                <div className="plan-inner-part">
                                    <h2 className="plan-interest-percent">1200%</h2>
                                </div>
                                <div className="plan-inner-part">
                                    <ul className="plan-invest-limit">
                                        <li>
                                            <i className="fas fa-check"></i>
                                            Minimum : $30.00
                                        </li>
                                        <li>
                                            <i className="fas fa-check"></i>
                                            Maximum : $1500.00
                                        </li>
                                    </ul>
                                </div>
                                <div className="plan-inner-part">
                                    <h2 className="plan-invest-time">15 <sub>DAYS</sub></h2>
                                </div>
                                <div className="plan-inner-part">
                                    <a href="login.html" className="cmn--btn-2">Invest now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="button text-center wow slideIn pb-4">
                        <a href="investment-plan-01.html" className="cmn--btn">Discover More</a>
                    </div>
                </div>
            </section>




            <WhyUsBox/>




            <section className="profit-calculation wow slideInUp overflow-hidden">
                <div className="container">
                    <div className="profit-calculation-wrapper">
                        <h3 className="title">Calculate How Much You Profit</h3>
                        <form className="profit-form">
                            <div className="row g-4">
                                <div className="col-lg-4 col-md-6">
                                    <div className="form--group">
                                        <select>
                                            <option value="plan01">Select the Plan</option>
                                            <option value="plan01">Business Plan</option>
                                            <option value="plan01">Professional Plan</option>
                                            <option value="plan01">Individual Plan</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="form--group">
                                        <select>
                                            <option value="plan01">Select the Currency</option>
                                            <option value="plan01">Bitcoin</option>
                                            <option value="plan01">Ethereum</option>
                                            <option value="plan01">Ripple</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="form--group">
                                        <input type="text" className="form--control" placeholder="Enter the Ammount" required />
                                    </div>
                                </div>
                            </div>
                        </form>
                        <div className="profit-title-wrapper d-flex justify-content-between my-5 mb-3">
                            <h5 className="daily-profit text--secondary">Daily Profit - <span className="ammount">0.1200</span>BTC</h5>
                            <h5 className="daily-profit theme-four">Total Profit - <span className="ammount">24.1200</span>BTC</h5>
                        </div>
                        <div className="invest-range-area">
                            <div className="main-amount">
                                <input type="text" className="calculator-invest" id="btc-amount" readOnly />
                            </div>
                            <div className="invest-amount" data-min="01 BTC" data-max="10000 BTC">
                                <div id="btc-range" className="invest-range-slider"></div>
                            </div>
                            <button type="submit" className="custom-button px-0">Invest now</button>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}

export default HomeScreen;