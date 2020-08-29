import React from 'react'

const HomeAboutSection=({aboutUsLogo})=>{
    return( <div className="container">
    <div className="row about-card-row">
        <div className="col-md-12 col-xl-12 about-caption-container">
            <h1>About Us</h1>
        </div>
        <div className="col-md-4 about-cards" data-aos="slide-up" data-aos-duration="850">
            <h1><i className="fa fa-lightbulb-o"></i>&nbsp;Who We Are?</h1>
            <p>Soniva Global is a comprehensive solution provider for Revenue cycle management, technological and staffing solutions for healthcare providers. With over a decade of experience, we have mastered our expertise, digital capabilities,
                and business insights. We help organizations create the better patient experience and attain their business objectives.<br/></p>
        </div>
        <div className="col-md-4 about-cards" data-aos="slide-up" data-aos-duration="900">
            <h1><i className="fa fa-question-circle"></i>&nbsp;Who We Help?</h1>
            <p>Our industry experience have equipped us to deliver a solution for an assortment of clients. We offer quality solutions to hospitals, healthcare system, physician groups, RCM companies, DMEPOS Supplier, surgical &amp; ambulatory care
                and dental practices. We delivers healthcare solutions to our clients by leveraging the experience of our leadership team, global delivery models, and technology.<br/></p>
        </div>
        <div className="col img-col" data-aos="zoom-in"><img src={aboutUsLogo}/></div>
        <div className="col-md-4 col-xl-12 about-cards large" data-aos="flip-left" data-aos-duration="850">
            <h1><i className="fa fa-question-circle"></i>&nbsp;Who We Help?</h1>
            <p>Our industry experience have equipped us to deliver a solution for an assortment of clients. We offer quality solutions to hospitals, healthcare system, physician groups, RCM companies, DMEPOS Supplier, surgical &amp; ambulatory care
                and dental practices. We delivers healthcare solutions to our clients by leveraging the experience of our leadership team, global delivery models, and technology.<br/></p>
        </div>
    </div>
</div>)
}
export default HomeAboutSection