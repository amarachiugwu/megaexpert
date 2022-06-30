import React from 'react'
import Slider from 'react-slick'

function PaymentGatewayBox() {

    // function NextArrow(props) {
    //     const { onClick } = props;
    //     return (
    //         <i 
    //             onClick={onClick}
    //             className="las la-angle-right arrow-left"></i>
    //     );
    // }

    // function PrevArrow(props) {
    //     const { onClick } = props;
    //     return (
    //         <i 
    //             onClick={onClick}
    //             className="las la-angle-left arrow-right"></i>
    //     );
    // }

    const settings = {
        slidesToShow: 6,
        slidesToScroll: 1,
        infinite: true,
        // speed: 500,
        initialSlide: 0,
        dots: false,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 3000,
        margin: 20,
        // nextArrow: <NextArrow/>,
        // prevArrow: <PrevArrow/>,
        responsive: [
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
    }
  return (
    <>
        
        <div className="sponsor-section wow fadeInUp padding-bottom">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-7">
                        <div className="section-header text-center">
                            <span className="subtitle wow fadeInUp">Payment</span>
                            <h2 className="title wow fadeInUp" data-wow-delay=".4s">We Accept Payment In Crypto</h2>
                            <p className=" fadeInUp" data--delay=".6s">
                            We support the popular cryptocurrencies like Bitcoin, Ethereum, Tether, Litecoin, Dash, Binance, Solana, and many more.
                        </p>
                        </div>
                    </div>
                </div>
                <div className="sponsor-slider">
                    <Slider {...settings}>
                    <div className="sigle-slider">
                                <div className="gateway-item">
                                    <img src="/assets/images/gateway/icon1.png" alt="gateway"/>
                                    {/* <span className="coin-name">Bitcoin</span> */}
                                </div>
                            </div>
                            <div className="sigle-slider">
                                <div className="gateway-item">
                                    <img src="/assets/images/gateway/eth.png" alt="gateway"/>
                                    {/* <span className="coin-name">Ethereum</span> */}
                                </div>
                            </div>
                            <div className="sigle-slider">
                                <div className="gateway-item">
                                    <img src="/assets/images/gateway/lit.png" alt="gateway"/>
                                    {/* <span className="coin-name">Litecoin</span> */}
                                </div>
                            </div>
                            <div className="sigle-slider">
                                <div className="gateway-item">
                                    <img src="/assets/images/gateway/icon4.png" alt="gateway"/>
                                    {/* <span className="coin-name">Solana</span> */}
                                </div>
                            </div>

                            <div className="sigle-slider">
                                <div className="gateway-item">
                                    <img src="/assets/images/gateway/icon5.png" alt="gateway"/>
                                    {/* <span className="coin-name">BNB</span> */}
                                </div>
                            </div>
                            <div className="sigle-slider">
                                <div className="gateway-item">
                                    <img src="/assets/images/gateway/icon6.png" alt="gateway"/>
                                    {/* <span className="coin-name">Dash</span> */}
                                </div>
                            </div>
                            <div className="sigle-slider">
                                <div className="gateway-item">
                                    <img src="/assets/images/gateway/icon7.png" alt="gateway"/>
                                    {/* <span className="coin-name">Shib</span> */}
                                </div>
                            </div>
                            <div className="sigle-slider">
                                <div className="gateway-item">
                                    <img src="/assets/images/gateway/icon8.png" alt="gateway"/>
                                    {/* <span className="coin-name">Tether</span> */}
                                </div>
                            </div>
                            <div className="sigle-slider">
                                <div className="gateway-item">
                                    <img src="/assets/images/gateway/icon2.png" alt="gateway"/>
                                    {/* <span className="coin-name">Shib</span> */}
                                </div>
                            </div>
                            <div className="sigle-slider">
                                <div className="gateway-item">
                                    <img src="/assets/images/gateway/bch.png" alt="gateway"/>
                                    {/* <span className="coin-name">Tether</span> */}
                                </div>
                            </div>
                    </Slider> 
                </div>
            </div>
        </div>
    </>
  )
}

export default PaymentGatewayBox