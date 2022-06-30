import React from 'react'
import Slider from "react-slick";

function FeedBackBox() {

    const settings = {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        margin: 20,
        centerMode:true,
        responsive: [
          {
            breakpoint: 1199,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 767,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
          
      
        ]
    }
  return (
    <>
        <section className="testimonial-section-two padding-top padding-bottom">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-7">
                        <div className="section-header text-center">
                            <span className="subtitle  fadeInUp">client feedback</span>
                            <h2 className="title  mx-100">Happy Client What Say About Us</h2>
                            <p className=" fadeInUp" data--delay=".6s">
                                See what our clients say about us, we take customer care very seriously, we are always at your service.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="testimonial-slider-two">
                    <Slider {...settings}>
                        <div className="single-slider">
                            <div className="testimonial-item-two">
                                <div className="testimonial-thumb-two">
                                    <img src="assets/images/testimonial/item2.png" alt=""/>
                                </div>
                                <div className="testimonial-content-two">
                                    <div className="quote-icon">
                                        <i className="las la-quote-left"></i>
                                    </div>
                                    <h4 className="name">Robindronath Chondro</h4>
                                    <span className="designation">Businessman</span>
                                    <p> Since i started investing with Mega Expert i have stopped investing with other financial institutions including my bank because the services i get here is second to non, kudos to all the team behind this great platform..</p>
                                </div>
                            </div>
                        </div>
                        <div className="single-slider">
                            <div className="testimonial-item-two">
                                <div className="testimonial-thumb-two">
                                    <img src="assets/images/testimonial/item3.png" alt=""/>
                                </div>
                                <div className="testimonial-content-two">
                                    <div className="quote-icon">
                                        <i className="las la-quote-left"></i>
                                </div>
                                    <h4 className="name">Investor</h4>
                                    <span className="designation">Jubayer Al Somser</span>
                                    <p> As an investor my major role is to find great platform, individuals and businesses to invest my money so that it can work for me, this platform is one of the platform i invest in, they always deliver in due time.</p>
                                </div>
                            </div>
                        </div>
                        <div className="single-slider">
                            <div className="testimonial-item-two">
                                <div className="testimonial-thumb-two">
                                    <img src="assets/images/testimonial/item4.png" alt=""/>
                                </div>
                                <div className="testimonial-content-two">
                                    <div className="quote-icon">
                                        <i className="las la-quote-left"></i>
                                    </div>
                                    <h4 className="name">Raihan Rafuj</h4>
                                    <span className="designation">Designer</span>
                                    <p>I basically put my money here to earn while i save, instead of saving in my bank which returns little or no intrest, i am satisfieed with the services i get here.</p>
                                </div>
                            </div>
                        </div>
                        <div className="single-slider">
                            <div className="testimonial-item-two">
                                <div className="testimonial-thumb-two">
                                    <img src="assets/images/testimonial/item1.png" alt=""/>
                                </div>
                                <div className="testimonial-content-two">
                                    <div className="quote-icon">
                                        <i className="las la-quote-left"></i>
                                    </div>
                                    <h4 className="name">Chris Stone</h4>
                                    <span className="designation">Investor</span>
                                    <p>This platform is one of the best investment platforms, i am impressed</p>
                                </div>
                            </div>
                        </div>

                    </Slider>
                </div>
            </div>
        </section>
    </>
  )
}

export default FeedBackBox