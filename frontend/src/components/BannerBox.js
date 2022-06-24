import React from 'react'

function BannerBox(props) {
  return (
    <section className="inner-banner bg_img padding-bottom" style={{ background: "url(/assets/images/about/bg.png) no-repeat right bottom" }}>
            <div className="container">
                <div className="inner-banner-wrapper">
                    <div className="inner-banner-content">
                        <h2 className="inner-banner-title">{props.title}</h2>
                        <ul className="breadcums">
                            <li>
                                <a href="/">Home</a>
                            </li>
                            <li>
                                <span>{props.page}</span>
                            </li>
                        </ul>
                    </div>
                    <div className="inner-banner-thumb about d-none d-md-block">
                        <img src={(props.image) ? (props.image) : '/assets/images/about/thumb2.png'} alt="about"/>
                    </div>
                </div>
            </div>
            <div className="shape1">
                <img src="/assets/images/about/balls.png" alt="about"/>
            </div>
        </section>
  )
}

export default BannerBox