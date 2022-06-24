import React from 'react'
import ProfitCalculatorBox from '../components/ProfitCalculatorBox'

function ContactScreen() {
  return (
    <>
           
    <section className="inner-banner bg_img overflow-initial" style={{ background: "url(assets/images/contact/bg.png) no-repeat center bottom" }}>
        <div className="container">
            <div className="inner-banner-wrapper d-flex contact">
                <div className="inner-banner-content contact-banner">
                    <h2 className="inner-banner-title">get in touch <br/>
                        with us</h2>
                    <ul className="breadcums">
                        <li>
                            <a href="index.html">Home</a>
                        </li>
                        <li>
                            <span>Contact</span>
                        </li>
                    </ul>
                </div>
                <div className="contact-wrapper  fadeInUp">
                    <h4 className="title">Send Us a Message</h4>
                    <form className="contact-form">
                        <div className="form--group">
                            <input type="text" className="form--control" placeholder="Name"/>
                        </div>
                        <div className="form--group">
                            <input type="email" className="form--control" placeholder="Email"/>
                        </div>
                        <div className="form--group">
                            <input type="tel" className="form--control" placeholder="Phone"/>
                        </div>
                        <span>Preffered method of communication</span>
                        <div className="choose-method">
                            <div className="form--group custom--radio">
                                <input type="radio" id="choose-method" name="communication-method" checked/>
                                <label for="choose-method">Email</label>
                            </div>
                            <div className="form--group custom--radio">
                                <input type="radio" id="choose-method-2" name="communication-method"/>
                                <label for="choose-method-2">Phone</label>
                            </div>
                        </div>
                        <div className="form--group">
                            <textarea className="form--control" cols="30" rows="10" placeholder="Message"></textarea>
                        </div>
                        <div className="form--group">
                            <button className="custom-button" type="submit">SUBMIT NOW</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <div className="shape1 paroller" data-paroller-factor=".2">
            <img src="assets/images/about/balls.png" alt="about"/>
        </div>
    </section>
    


    
    <section className="contact-info padding-top padding-bottom">
        <div className="container">
            <div className="row gy-5 flex-column-reverse flex-lg-row">
                <div className="col-lg-6 col-xl-7">
                    <div className="row g-4 justify-content-center mb-4">
                        <div className="col-md-6 col-lg-10 col-xl-6  fadeInLeft">
                            <div className="contact-info-item">
                                <div className="contact-item-thumb">
                                    <img src="assets/images/contact/location.png" alt="contact"/>
                                </div>
                                <div className="contact-item-content">
                                    <h4 className="title">Office Address</h4>
                                    <p>USA, Callifornia 20, Firs 
                                        Avenue, Callifornia</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row g-4 justify-content-center">
                        <div className="col-md-6 col-lg-10 col-xl-6  fadeInLeft">
                            <div className="contact-info-item">
                                <div className="contact-item-thumb">
                                    <img src="assets/images/contact/email.png" alt="contact"/>
                                </div>
                                <div className="contact-item-content">
                                    <h4 className="title">Email Address</h4>
                                    <a href="Mailto:mdudnfsddf@gmal.com"><span className="__cf_email__" data-cfemail="04676b6a7065677044617c65697468612a676b69">[email&#160;protected]</span></a>
                                    <a href="Mailto:mdudnfsddf@gmal.com"><span className="__cf_email__" data-cfemail="4b22252d240b2e332a263b272e65282426">[email&#160;protected]</span></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-10 col-xl-6  fadeInLeft">
                            <div className="contact-info-item">
                                <div className="contact-item-thumb">
                                    <img src="assets/images/contact/phone.png" alt="contact"/>
                                </div>
                                <div className="contact-item-content">
                                    <h4 className="title">Contact Number</h4>
                                    <a href="Tel:90172834">(123) 456-7890 - 00521</a>
                                    <a href="Tel:90172834">(123) 456-7891 - 00626</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-xl-5  fadeInRight d-none d-lg-block">
                    <div className="contact-info-thumb">
                        <img src="assets/images/contact/thumb.png" alt="contact"/>
                    </div>
                </div>
            </div>
        </div>
    </section>




        <ProfitCalculatorBox/>
    </>
  )
}

export default ContactScreen