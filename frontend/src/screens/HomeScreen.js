import React, { useEffect } from "react";
import Slider from "react-slick";
import HelpBox from '../components/HelpBox';
import WhyUsBox from "../components/WhyUsBox";
import ProfitCalculatorBox from '../components/ProfitCalculatorBox'
import PaymentGatewayBox from "../components/PaymentGatewayBox";
import PlanBox from "../components/PlanBox";
import AffiliateBox from "../components/AffiliateBox";
function HomeScreen () {

    useEffect(() => {
        
        // $(".counter-item").each(function () {
        //     $(this).isInViewport(function (status) {
        //       if (status === "entered") {
        //         for (var i = 0; i < document.querySelectorAll(".odometer").length; i++) {
        //           var el = document.querySelectorAll('.odometer')[i];
        //           el.innerHTML = el.getAttribute("data-odometer-final");
        //         }
        //       }
        //     });
        // });
      
    }, [])

    function NextArrow(props) {
        const { onClick } = props;
        return (
            <i 
                onClick={onClick}
                className="las la-arrow-right arrow-right slick-arrow"></i>
        );
    }

    function PrevArrow(props) {
        const { onClick } = props;
        return (
            <i 
                onClick={onClick}
                className="las la-arrow-left arrow-left slick-arrow"></i>
        );
    }

    var testimonials = {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        arrows: true,
        dots: false,
        focusOnSelect: true,
        autoplay: true,
        pauseOnHover: true,
        centerMode: true,
        fade: true,
        speed: 1000,
        nextArrow: <NextArrow/>,
        prevArrow: <PrevArrow/>,
    }

    const styles = {
        testimonialImg:{
            borderRadius: '15px 0px 15px 15px',
            overflow: 'hidden',
            width: '100px',
            margin: '0 auto',
        }
    }

    var sponsors = {
        slidesToShow: 6,
        slidesToScroll: 2,
        infinite: true,
        dots: false,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 500,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
      
        ]
    };


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
                                    <a href="sign-up" className="cmn--btn btn--secondary">get started</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>




            <section className="how-work padding-top padding-bottom">
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

            


            <div className="sponsor-section wow fadeInUp">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-7">
                            <div className="section-header text-center">
                                <h2 className="title wow fadeInUp" data-wow-delay=".4s">Sponsors</h2>
                            </div>
                        </div>
                    </div>
                    <div className="sponsor-slider">
                        <Slider {...sponsors}>
                            <div className="single-slide">
                                <div className="brand-item">
                                    <img src="assets/images/sponsor/item1.png" alt=""/>
                                </div>
                            </div>
                            <div className="single-slide">
                                <div className="brand-item">
                                    <img src="assets/images/sponsor/item2.png" alt=""/>
                                </div>
                            </div>
                            <div className="single-slide">
                                <div className="brand-item">
                                    <img src="assets/images/sponsor/item3.png" alt=""/>
                                </div>
                            </div>
                            <div className="single-slide">
                                <div className="brand-item">
                                    <img src="assets/images/sponsor/item4.png" alt=""/>
                                </div>
                            </div>
                            <div className="single-slide">
                                <div className="brand-item">
                                    <img src="assets/images/sponsor/item5.png" alt=""/>
                                </div>
                            </div>
                            <div className="single-slide">
                                <div className="brand-item">
                                    <img src="assets/images/sponsor/item6.png" alt=""/>
                                </div>
                            </div>
                            <div className="single-slide">
                                <div className="brand-item">
                                    <img src="assets/images/sponsor/item1.png" alt=""/>
                                </div>
                            </div>
                            <div className="single-slide">
                                <div className="brand-item">
                                    <img src="assets/images/sponsor/item2.png" alt=""/>
                                </div>
                            </div>
                            <div className="single-slide">
                                <div className="brand-item">
                                    <img src="assets/images/sponsor/item3.png" alt=""/>
                                </div>
                            </div>
                            <div className="single-slide">
                                <div className="brand-item">
                                    <img src="assets/images/sponsor/item4.png" alt=""/>
                                </div>
                            </div>
                            <div className="single-slide">
                                <div className="brand-item">
                                    <img src="assets/images/sponsor/item5.png" alt=""/>
                                </div>
                            </div>
                            <div className="single-slide">
                                <div className="brand-item">
                                    <img src="assets/images/sponsor/item6.png" alt=""/>
                                </div>
                            </div>
                        </Slider> 
                    </div>
                </div>
            </div>




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




            <PlanBox/>




            {/* <section className="counter-section padding-top">
                <div className="container">
                    <div className="row justif-content-center gy-5">
                        <div className="col-lg-3 col-sm-6">
                            <div className="counter-wrapper">
                                <div className="counter-item">
                                    <div className="counter-inner">
                                        <h2 className="counter-sign">$ </h2>
                                        <span className="odometer title" data-odometer-final="557"></span>
                                    </div>
                                </div>
                                <span className="info">Invested in pitches</span>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="counter-wrapper">
                                <div className="counter-item">
                                    <div className="counter-inner">
                                        <span className="odometer title" data-odometer-final="254"></span>
                                        <h2 className="counter-sign">K</h2>
                                    </div>
                                </div>
                                <span className="info">Registrated Members</span>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="counter-wrapper">
                                <div className="counter-item">
                                    <div className="counter-inner">
                                        <span className="odometer title" data-odometer-final="774"></span>
                                        <h2 className="counter-sign">K</h2>
                                    </div>
                                </div>
                                <span className="info">Average Investment</span>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="counter-wrapper">
                                <div className="counter-item">
                                    <div className="counter-inner">
                                        <span className="odometer title" data-odometer-final="7740"></span>
                                    </div>
                                </div>
                                <span className="info">Total Investment Plan</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}




            <WhyUsBox/>




            <section className="testimonial-seciton pb-180">
                <div className="container">
                    <div className="row gy-4 align-items-center justify-content-center">
                        <div className="col-lg-5 d-none d-lg-block  wow slideInLeft">
                            <div className="testimonial-thumb">
                                <img src="assets/images/testimonial/thumb2.png" alt="testimonial"/>
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-10">
                            <div className="testimonial-content">
                                <div className="section-header text-center">
                                    <span className="subtitle wow fadeInUp">our happly client</span>
                                    <h2 className="title wow fadeInUp" data-wow-delay=".5s">Discover Our Happy 
                                        Client Feedback</h2>
                                </div>
                                <div className="testimonial-slider-wrapper">
                                    
                                    <div className="testimonial-slider">
                                        <Slider
                                            {...testimonials}
                                            >
                                            <div className="content-item">
                                                <div className="img-item padding bottom" style={styles.testimonialImg}>
                                                    <img src="assets/images/testimonial/item2.png" alt="testimonial"/>
                                                </div>

                                                <div className="quote-icon">
                                                    <i className="las la-quote-left"></i>
                                                </div>
                                                <div className="content-inner">
                                                    <p>
                                                    Since i started investing with Mega Expert i have stopped investing with other financial institutions including my bank because the services i get here is second to non, kudos to all the team behind this great platform.
                                                    </p>
                                                    <h5 className="name">Robindronath Chondro</h5>
                                                    <span className="designation">Businessman</span>
                                                </div>
                                            </div>
                                            <div className="content-item">

                                                <div className="img-item padding bottom" style={styles.testimonialImg}>
                                                    <img src="assets/images/testimonial/item3.png" alt="testimonial"/>
                                                </div>

                                                <div className="quote-icon">
                                                    <i className="las la-quote-left"></i>
                                                </div>
                                                <div className="content-inner">
                                                    <p>
                                                        As an investor my major role is to find great platform, individuals and businesses to invest my money so that it can work for me, this platform is one of the platform i invest in, they always deliver in due time.
                                                    </p>
                                                    <h5 className="name">Jubayer Al Somser</h5>
                                                    <span className="designation">Investor</span>
                                                </div>
                                            </div>
                                            <div className="content-item">
                                                <div className="img-item padding bottom" style={styles.testimonialImg}>
                                                    <img src="assets/images/testimonial/item4.png" alt="testimonial"/>
                                                </div>

                                                <div className="quote-icon">
                                                    <i className="las la-quote-left"></i>
                                                </div>
                                                <div className="content-inner">
                                                    <p>
                                                        I basically put my money here to earn while i save, instead of saving in my bank which returns little or no intrest, i am satisfieed with the services i get here.
                                                    </p>
                                                    <h5 className="name">Raihan Rafuj</h5>
                                                    <span className="designation">Designer</span>
                                                </div>
                                            </div> 
                                        </Slider>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            <HelpBox/>


            

            <AffiliateBox/>



            <PaymentGatewayBox/>




            <ProfitCalculatorBox/>
        </>
    );
}

export default HomeScreen;