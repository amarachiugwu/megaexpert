import React from 'react'
import $ from 'jquery'

function HelpBox() {

    const toggleQtn = event => {
    
        var qtnElement = document.getElementById(event.currentTarget.id);
        var element = $(qtnElement).parent('.faq-item');

        if (element.hasClass('open')) {
            element.removeClass('open');
            element.find('.faq-content').removeClass('open');
            element.find('.faq-content').slideUp(300, "swing");
        } else {
            element.addClass('open');
            element.children('.faq-content').slideDown(300, "swing");
            element.siblings('.faq-item').children('.faq-content').slideUp(300, "swing");
            element.siblings('.faq-item').removeClass('open');
            element.siblings('.faq-item').find('.faq-title, .faq-title-two').removeClass('open');
            element.siblings('.faq-item').find('.faq-content').slideUp(300, "swing");
        }
    }

    const changeQtnTab = event => {
        var qtnTab = document.getElementById(event.currentTarget.id);
        $('.faq-tab-menu .item').removeClass('active')
        $(qtnTab).addClass('active')
    }
  return (
    <>
        
        <section className="help-section overflow-hidden">
            <div className="container">
                <div className="row align-items-center gy-5 flex-column-reverse flex-lg-row">
                    <div className="col-lg-6">
                        <div className="help-content">
                            <div className="section-header">
                                <span className="subtitle wow fadeInUp">we are ready for your help</span>
                                <h2 className="title wow fadeInUp" data-wow-delay=".5s">How We Can Help You?</h2>
                                <p className="wow fadeInUp" data-wow-delay=".6s">
                                    Questions you may ask.
                                </p>
                            </div>
                            <div className="faq-tab-menu nav-tabs nav border-0 row g-4 justify-content-center">
                                <div className="col-6 col-sm-4 col-md-4 col-lg-6 col-xl-4 wow fadeInLeft" data-wow-delay=".2s">
                                    <a href="#investor" className="item active" data-bs-toggle="tab" id="01" onClick={changeQtnTab}>
                                        <div className="thumb">
                                            <img src="assets/images/help/trading.png" alt=""/>
                                        </div>
                                        <h5>General</h5>
                                    </a>
                                </div>
                                <div className="col-6 col-sm-4 col-md-4 col-lg-6 col-xl-4 wow fadeInLeft" data-wow-delay=".3s">
                                    <a href="#privacy" className="item" data-bs-toggle="tab" id="02" onClick={changeQtnTab}>
                                        <div className="thumb">
                                            <img src="assets/images/help/password.png" alt=""/>
                                        </div>
                                        <h5>Account</h5>
                                    </a>
                                </div>
                                <div className="col-6 col-sm-4 col-md-4 col-lg-6 col-xl-4 wow fadeInLeft" data-wow-delay=".4s">
                                    <a href="#account" className="item" data-bs-toggle="tab" id="03" onClick={changeQtnTab}>
                                        <div className="thumb">
                                            <img src="assets/images/help/support.png" alt=""/>
                                        </div>
                                        <h5>Investment</h5>
                                    </a>
                                </div>
                            </div>
                            <div className="tab-content">
                                <div className="tab-pane show fade active" id="investor">
                                    <div className="faq-wrapper">
                                        <div className="faq-item wow fadeInUp" data-wow-delay=".3s">
                                            <div id="1" className="faq-title" onClick={toggleQtn}>
                                                <h5 className="title">What is Mega Expert Finance</h5>
                                                <div className="arrow">
                                                    <i className="fas fa-angle-up"></i>
                                                </div>
                                            </div>
                                            <div className="faq-content">
                                                <p>
                                                Mega Expert Finance is a professional trading & investment company with emphasis on cryptocurrency, forex, binary option, CFDs. We are a group of qualified and trained financiers with technical knowledge. We actively monitor and trade the forex market, binary option, CFDs. The vast majority of customer deposits are stored offline in air-gapped cold storage. We only keep enough online to facilitate active trading, which greatly minimizes risk and exposure. Our auditing programs monitor every activity 24/7/365. Their job is to report and block any suspicious activity before it becomes a problem. We have strong roots and believe in customer service and transparency. We are committed to optimum delivery and uprightness. We let our service do the talking. Any funds you put into Mega Expert Finance are only used to facilitate trading through your account. Unlike banks, we do not operate on fractional reserves.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="faq-item open active wow fadeInUp" data-wow-delay=".4s">
                                            <div className="faq-title" id="2" onClick={toggleQtn}>
                                                <h5 className="title">How do i make money here?</h5>
                                                <div className="arrow">
                                                    <i className="fas fa-angle-up"></i>
                                                </div>
                                            </div>
                                            <div className="faq-content">
                                                <p>
                                                We provide individuals and businesses a world class experience to earn weekly/monthly passive income or otherwise decide to compound profits for improved returns. The more money you deposit, the more money you make. The profit is generated from trading cryptocurrencies as well as forex, CFDs, binary options in registered exchanges.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="faq-item wow fadeInUp" data-wow-delay=".5s">
                                            <div className="faq-title" id="3" onClick={toggleQtn}>
                                                <h5 className="title">Is using Mega Expert Finance free of charge?</h5>
                                                <div className="arrow">
                                                    <i className="fas fa-angle-up"></i>
                                                </div>
                                            </div>
                                            <div className="faq-content">
                                                <p>
                                                Yes, it is totally free of charge.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="faq-item wow fadeInUp" data-wow-delay=".5s">
                                            <div className="faq-title" id="10" onClick={toggleQtn}>
                                                <h5 className="title">Is Mega Expert Finance a legitimate company?</h5>
                                                <div className="arrow">
                                                    <i className="fas fa-angle-up"></i>
                                                </div>
                                            </div>
                                            <div className="faq-content">
                                                <p>
                                                Mega Expert Finance LTD is a legal investment company incorporated in the United Kingdom.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane show fade" id="privacy">
                                    <div className="faq-wrapper">
                                        <div className="faq-item">
                                            <div className="faq-title" id="4" onClick={toggleQtn}>
                                                <h5 className="title">What's the limit to the number of accounts i own?</h5>
                                                <div className="arrow">
                                                    <i className="fas fa-angle-up"></i>
                                                </div>
                                            </div>
                                            <div className="faq-content">
                                                <p>
                                                Any client can have any number of accounts they wish to as long as they keep them funded.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="faq-item open active">
                                            <div className="faq-title" id="5" onClick={toggleQtn}>
                                                <h5 className="title">I'm having problems registering an account?</h5>
                                                <div className="arrow">
                                                    <i className="fas fa-angle-up"></i>
                                                </div>
                                            </div>
                                            <div className="faq-content">
                                                <p>
                                                Check the entered information is correct & accurate. Displayed errors can help you, they show where you have made mistakes. Sometimes it could be issues with your browser. Try to change your browser or turn off any translator if you use one. If you need further assistance don't hesitate to contact us.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="faq-item">
                                            <div className="faq-title" id="6" onClick={toggleQtn}>
                                                <h5 className="title">What is the minimum deposit amount?</h5>
                                                <div className="arrow">
                                                    <i className="fas fa-angle-up"></i>
                                                </div>
                                            </div>
                                            <div className="faq-content">
                                                <p>
                                                The minimum that you can deposit is $1000 per processor. There is currently no maximum amount you can have in your account.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="faq-item">
                                            <div className="faq-title" id="11" onClick={toggleQtn}>
                                                <h5 className="title">How do i withdraw my earnings?</h5>
                                                <div className="arrow">
                                                    <i className="fas fa-angle-up"></i>
                                                </div>
                                            </div>
                                            <div className="faq-content">
                                                <p>
                                                Payouts are sent to you automatically when you request a withdrawal depending on your agreed schedule and will be to your provided payment details.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane show fade" id="account">
                                    <div className="faq-wrapper">
                                        <div className="faq-item">
                                            <div className="faq-title" id="7" onClick={toggleQtn}>
                                                <h5 className="title">Who is eligible to invest?</h5>
                                                <div className="arrow">
                                                    <i className="fas fa-angle-up"></i>
                                                </div>
                                            </div>
                                            <div className="faq-content">
                                                <p>
                                                Mega Expert Finance is open to everyone of legal age to make investments and financial decisions for themselves. You are responsible for making sure that you comply with local laws.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="faq-item open active">
                                            <div className="faq-title" id="8" onClick={toggleQtn}>
                                                <h5 className="title">How much can i make?.</h5>
                                                <div className="arrow">
                                                    <i className="fas fa-angle-up"></i>
                                                </div>
                                            </div>
                                            <div className="faq-content">
                                                <p>
                                                The rates of income highly depend on the amount you invest. You can earn from 50% weekly. For more information, view the pricing table on the homepage.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="faq-item">
                                            <div className="faq-title" id="9" onClick={toggleQtn}>
                                                <h5 className="title">What is the minimum investment?</h5>
                                                <div className="arrow">
                                                    <i className="fas fa-angle-up"></i>
                                                </div>
                                            </div>
                                            <div className="faq-content">
                                                <p>
                                                The minimum investment plan is BRONZE which costs from $1000 to $5000
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 d-none d-lg-block wow fadeInRight">
                        <div className="help-thumb ">
                            <img src="assets/images/help/thumb.png" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </>
  )
}

export default HelpBox