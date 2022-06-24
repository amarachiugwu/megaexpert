import React from 'react'
import BannerBox from '../components/BannerBox'
import ProfitCalculatorBox from '../components/ProfitCalculatorBox'

function FAQScreen() {
  return (
    <>
        <BannerBox page="Faq" title="FREQUENTLY ASKED QUESTIONS" image="/assets/images/faq/thumb2.png" />




        <section className="help-section padding-top padding-bottom">
            <div className="container">
                <div className="help-content">
                    <div className="row justify-content-center">
                        <div className="col-lg-7">
                            <div className="section-header text-center">
                                <span className="subtitle  fadeInUp">frequently asked questions</span>
                                <h2 className="title mx-100">have many question about us</h2>
                                <p className=" fadeInUp" data--delay=".6s">
                                    Dapibus et amet sociis, arcu orci orci tincidunt neque. Purus etortor sjustmauris eumalesuada architecto.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="faq-tab-menu nav-tabs nav border-0 row g-4 justify-content-center">
                        <div className="col-6 col-sm-4 col-md-4 col-lg-4 col-xl-2  fadeInUp" data--delay=".1s">
                            <a href="#investor" className="item active" data-bs-toggle="tab">
                                <div className="thumb">
                                    <img src="assets/images/help/trading.png" alt=""/>
                                </div>
                                <h5>Become an investor</h5>
                            </a>
                        </div>
                        <div className="col-6 col-sm-4 col-md-4 col-lg-4 col-xl-2  fadeInUp" data--delay=".2s">
                            <a href="#privacy" className="item" data-bs-toggle="tab">
                                <div className="thumb">
                                    <img src="assets/images/help/password.png" alt=""/>
                                </div>
                                <h5>our company privacy</h5>
                            </a>
                        </div>
                        <div className="col-6 col-sm-4 col-md-4 col-lg-4 col-xl-2  fadeInUp" data--delay=".3s">
                            <a href="#account" className="item" data-bs-toggle="tab">
                                <div className="thumb">
                                    <img src="assets/images/help/support.png" alt=""/>
                                </div>
                                <h5>how setting account</h5>
                            </a>
                        </div>
                        <div className="col-6 col-sm-4 col-md-4 col-lg-4 col-xl-2  fadeInUp" data--delay=".4s">
                            <a href="#account" className="item" data-bs-toggle="tab">
                                <div className="thumb">
                                    <img src="assets/images/help/support.png" alt=""/>
                                </div>
                                <h5>how setting account</h5>
                            </a>
                        </div>
                    </div>
                    <div className="tab-content  fadeInUp">
                        <div className="tab-pane show fade active" id="investor">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="faq-wrapper">
                                        <div className="faq-item">
                                            <div className="faq-title">
                                                <h5 className="title">Why You Should Become An Investor?</h5>
                                                <div className="arrow">
                                                    <i className="fas fa-angle-up"></i>
                                                </div>
                                            </div>
                                            <div className="faq-content">
                                                <p>
                                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis distinctio quas at, voluptates saepe asperiores nesciunt nulla dolor dolore alias! Saepe laboriosam aliquid, ullam nihil nostrum quibusdam iste expedita inventore?
                                                </p>
                                            </div>
                                        </div>
                                        <div className="faq-item open active">
                                            <div className="faq-title">
                                                <h5 className="title">Can I Invest Using Cryptocurrency?</h5>
                                                <div className="arrow">
                                                    <i className="fas fa-angle-up"></i>
                                                </div>
                                            </div>
                                            <div className="faq-content">
                                                <p>
                                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis distinctio quas at, voluptates saepe asperiores nesciunt nulla dolor dolore alias! Saepe laboriosam aliquid, ullam nihil nostrum quibusdam iste expedita inventore?
                                                </p>
                                            </div>
                                        </div>
                                        <div className="faq-item">
                                            <div className="faq-title">
                                                <h5 className="title">Why You Choose Us?</h5>
                                                <div className="arrow">
                                                    <i className="fas fa-angle-up"></i>
                                                </div>
                                            </div>
                                            <div className="faq-content">
                                                <p>
                                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis distinctio quas at, voluptates saepe asperiores nesciunt nulla dolor dolore alias! Saepe laboriosam aliquid, ullam nihil nostrum quibusdam iste expedita inventore?
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="faq-wrapper">
                                        <div className="faq-item">
                                            <div className="faq-title">
                                                <h5 className="title">Why You Should Become An Investor?</h5>
                                                <div className="arrow">
                                                    <i className="fas fa-angle-up"></i>
                                                </div>
                                            </div>
                                            <div className="faq-content">
                                                <p>
                                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis distinctio quas at, voluptates saepe asperiores nesciunt nulla dolor dolore alias! Saepe laboriosam aliquid, ullam nihil nostrum quibusdam iste expedita inventore?
                                                </p>
                                            </div>
                                        </div>
                                        <div className="faq-item open active">
                                            <div className="faq-title">
                                                <h5 className="title">Can I Invest Using Cryptocurrency?</h5>
                                                <div className="arrow">
                                                    <i className="fas fa-angle-up"></i>
                                                </div>
                                            </div>
                                            <div className="faq-content">
                                                <p>
                                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis distinctio quas at, voluptates saepe asperiores nesciunt nulla dolor dolore alias! Saepe laboriosam aliquid, ullam nihil nostrum quibusdam iste expedita inventore?
                                                </p>
                                            </div>
                                        </div>
                                        <div className="faq-item">
                                            <div className="faq-title">
                                                <h5 className="title">Why You Choose Us?</h5>
                                                <div className="arrow">
                                                    <i className="fas fa-angle-up"></i>
                                                </div>
                                            </div>
                                            <div className="faq-content">
                                                <p>
                                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis distinctio quas at, voluptates saepe asperiores nesciunt nulla dolor dolore alias! Saepe laboriosam aliquid, ullam nihil nostrum quibusdam iste expedita inventore?
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane show fade" id="privacy">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="faq-wrapper">
                                        <div className="faq-item">
                                            <div className="faq-title">
                                                <h5 className="title">Frequently gets updated based on new data insights.</h5>
                                                <div className="arrow">
                                                    <i className="fas fa-angle-up"></i>
                                                </div>
                                            </div>
                                            <div className="faq-content">
                                                <p>
                                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis distinctio quas at, voluptates saepe asperiores nesciunt nulla dolor dolore alias! Saepe laboriosam aliquid, ullam nihil nostrum quibusdam iste expedita inventore?
                                                </p>
                                            </div>
                                        </div>
                                        <div className="faq-item open active">
                                            <div className="faq-title">
                                                <h5 className="title">Drives internal pageviews to.</h5>
                                                <div className="arrow">
                                                    <i className="fas fa-angle-up"></i>
                                                </div>
                                            </div>
                                            <div className="faq-content">
                                                <p>
                                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis distinctio quas at, voluptates saepe asperiores nesciunt nulla dolor dolore alias! Saepe laboriosam aliquid, ullam nihil nostrum quibusdam iste expedita inventore?
                                                </p>
                                            </div>
                                        </div>
                                        <div className="faq-item">
                                            <div className="faq-title">
                                                <h5 className="title">Showcases expertise, trust, and authority.</h5>
                                                <div className="arrow">
                                                    <i className="fas fa-angle-up"></i>
                                                </div>
                                            </div>
                                            <div className="faq-content">
                                                <p>
                                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis distinctio quas at, voluptates saepe asperiores nesciunt nulla dolor dolore alias! Saepe laboriosam aliquid, ullam nihil nostrum quibusdam iste expedita inventore?
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="faq-wrapper">
                                        <div className="faq-item">
                                            <div className="faq-title">
                                                <h5 className="title">Frequently gets updated based on new data insights.</h5>
                                                <div className="arrow">
                                                    <i className="fas fa-angle-up"></i>
                                                </div>
                                            </div>
                                            <div className="faq-content">
                                                <p>
                                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis distinctio quas at, voluptates saepe asperiores nesciunt nulla dolor dolore alias! Saepe laboriosam aliquid, ullam nihil nostrum quibusdam iste expedita inventore?
                                                </p>
                                            </div>
                                        </div>
                                        <div className="faq-item open active">
                                            <div className="faq-title">
                                                <h5 className="title">Drives internal pageviews to.</h5>
                                                <div className="arrow">
                                                    <i className="fas fa-angle-up"></i>
                                                </div>
                                            </div>
                                            <div className="faq-content">
                                                <p>
                                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis distinctio quas at, voluptates saepe asperiores nesciunt nulla dolor dolore alias! Saepe laboriosam aliquid, ullam nihil nostrum quibusdam iste expedita inventore?
                                                </p>
                                            </div>
                                        </div>
                                        <div className="faq-item">
                                            <div className="faq-title">
                                                <h5 className="title">Showcases expertise, trust, and authority.</h5>
                                                <div className="arrow">
                                                    <i className="fas fa-angle-up"></i>
                                                </div>
                                            </div>
                                            <div className="faq-content">
                                                <p>
                                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis distinctio quas at, voluptates saepe asperiores nesciunt nulla dolor dolore alias! Saepe laboriosam aliquid, ullam nihil nostrum quibusdam iste expedita inventore?
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane show fade" id="account">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="faq-wrapper">
                                        <div className="faq-item">
                                            <div className="faq-title">
                                                <h5 className="title">Frequently gets updated based on new data insights.</h5>
                                                <div className="arrow">
                                                    <i className="fas fa-angle-up"></i>
                                                </div>
                                            </div>
                                            <div className="faq-content">
                                                <p>
                                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis distinctio quas at, voluptates saepe asperiores nesciunt nulla dolor dolore alias! Saepe laboriosam aliquid, ullam nihil nostrum quibusdam iste expedita inventore?
                                                </p>
                                            </div>
                                        </div>
                                        <div className="faq-item open active">
                                            <div className="faq-title">
                                                <h5 className="title">Drives internal pageviews to.</h5>
                                                <div className="arrow">
                                                    <i className="fas fa-angle-up"></i>
                                                </div>
                                            </div>
                                            <div className="faq-content">
                                                <p>
                                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis distinctio quas at, voluptates saepe asperiores nesciunt nulla dolor dolore alias! Saepe laboriosam aliquid, ullam nihil nostrum quibusdam iste expedita inventore?
                                                </p>
                                            </div>
                                        </div>
                                        <div className="faq-item">
                                            <div className="faq-title">
                                                <h5 className="title">Showcases expertise, trust, and authority.</h5>
                                                <div className="arrow">
                                                    <i className="fas fa-angle-up"></i>
                                                </div>
                                            </div>
                                            <div className="faq-content">
                                                <p>
                                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis distinctio quas at, voluptates saepe asperiores nesciunt nulla dolor dolore alias! Saepe laboriosam aliquid, ullam nihil nostrum quibusdam iste expedita inventore?
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="faq-wrapper">
                                        <div className="faq-item">
                                            <div className="faq-title">
                                                <h5 className="title">Frequently gets updated based on new data insights.</h5>
                                                <div className="arrow">
                                                    <i className="fas fa-angle-up"></i>
                                                </div>
                                            </div>
                                            <div className="faq-content">
                                                <p>
                                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis distinctio quas at, voluptates saepe asperiores nesciunt nulla dolor dolore alias! Saepe laboriosam aliquid, ullam nihil nostrum quibusdam iste expedita inventore?
                                                </p>
                                            </div>
                                        </div>
                                        <div className="faq-item open active">
                                            <div className="faq-title">
                                                <h5 className="title">Drives internal pageviews to.</h5>
                                                <div className="arrow">
                                                    <i className="fas fa-angle-up"></i>
                                                </div>
                                            </div>
                                            <div className="faq-content">
                                                <p>
                                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis distinctio quas at, voluptates saepe asperiores nesciunt nulla dolor dolore alias! Saepe laboriosam aliquid, ullam nihil nostrum quibusdam iste expedita inventore?
                                                </p>
                                            </div>
                                        </div>
                                        <div className="faq-item">
                                            <div className="faq-title">
                                                <h5 className="title">Showcases expertise, trust, and authority.</h5>
                                                <div className="arrow">
                                                    <i className="fas fa-angle-up"></i>
                                                </div>
                                            </div>
                                            <div className="faq-content">
                                                <p>
                                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis distinctio quas at, voluptates saepe asperiores nesciunt nulla dolor dolore alias! Saepe laboriosam aliquid, ullam nihil nostrum quibusdam iste expedita inventore?
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
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

export default FAQScreen