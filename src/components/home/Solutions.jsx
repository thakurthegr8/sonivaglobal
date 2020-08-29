import React from 'react'

const Solutions=(props)=>{
    return ( <div 
        style={{background:`url(${require('../../assets/img/our-solutions-bg.png')})`,
                backgroundSize:'contain',
                backgroundAttachment:'fixed'}}>
        <div className="container">
            <div className="row our-solutions-row">
                <div className="col-md-4 col-xl-12 our-solutions-caption-container" data-aos="flip-down">
                    <h1>Our Solutions</h1>
                </div>
                <div className="col-md-4 our-solutions-small-sections" data-aos="fade-right" data-aos-duration="850"><button className="btn btn-primary" type="button"><i className="fa fa-dollar"></i><strong>Revenue Cycle&nbsp;</strong><br/><strong>Management Services</strong></button></div>
                <div className="col-md-4 our-solutions-small-sections" data-aos="fade-down"
                    data-aos-duration="850"><button className="btn btn-primary" type="button"><i className="fa fa-dollar"></i><strong>Provider Enrolment & Credentialing</strong><br/><strong> Services </strong></button></div>
                <div className="col-md-4 our-solutions-small-sections" data-aos="fade-left" data-aos-duration="850"><button className="btn btn-primary" type="button"><i className="fa fa-dollar"></i><strong>Medical</strong><br /><strong>Coding Services</strong><br /></button></div>
                <div className="col-md-4 our-solutions-small-sections" data-aos="fade-up-right" data-aos-duration="850"><button className="btn btn-primary" type="button"><i className="fa fa-dollar"></i><strong>Technology</strong><br /><strong>Solutions</strong><br /></button></div>
                <div className="col-md-4 our-solutions-small-sections" data-aos="fade-up" data-aos-duration="850"><button className="btn btn-primary" type="button"><i className="fa fa-dollar"></i><strong>Business Analytics &</strong><br /><strong>Consulting</strong><br /></button></div>
                <div className="col-md-4 our-solutions-small-sections" data-aos="fade-up-left" data-aos-duration="850"><button className="btn btn-primary" type="button"><i className="fa fa-dollar"></i><strong>Accounts Receivable</strong><br /><strong>Services</strong><br /></button></div>
                <div className="col"><button className="btn btn-primary our-solutions-explore-btn" data-aos="flip-right" data-aos-duration="850" type="button">Explore Now</button></div>
            </div>
        </div>
    </div>)
}

export default Solutions