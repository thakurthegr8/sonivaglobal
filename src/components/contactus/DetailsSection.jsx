import React from 'react';

const DetailsSection = () => {
    return (
        <div>
            <div style={{paddingTop:'-9px',paddingBottom:'50px'}}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-xl-12 about-description-small-sections">
                            <h1>Get In Touch With Us</h1>
                            <p>Please complete the form below with your requirements. We will contact you soon.<br /></p>
                        </div>
                        <div className="col-md-6 col-xl-5 about-description-small-sections"
                        style={{paddingTop:'4vh',display:'flex',justifyContent:'center',alignItems:'center'}}
                        >
                            <img data-aos="zoom-in" src={require("../../assets/img/contact-thumimg.svg")} style={{width:'inherit'}} />
                        </div>
                        <div className="col-xl-7 field-small-sections contact-form">
                            <h1 className="contact-text-input-field details-sub-heading contact-form">First Name</h1><input type="text" className="contact-form-field contact-us" placeholder="Enter Your First Name..." />
                            <h1 className="contact-text-input-field details-sub-heading contact-form">E-mail</h1><input type="text" className="contact-form-field contact-us" placeholder="Enter Your E-mail.../"/>
                                <h1 className="contact-text-input-field details-sub-heading contact-form">Phone Number</h1><input type="text" className="contact-form-field contact-us" placeholder="Enter Your Phone Number..." />
                                <h1 className="contact-text-input-field details-sub-heading contact-form">Company Name</h1><input type="text" className="contact-form-field contact-us" placeholder="Enter Company Name..." />
                                <h1 className="contact-text-input-field details-sub-heading contact-form">Message</h1><input type="text" className="contact-form-field contact-us" placeholder="Write To Us..." /><button className="btn btn-primary contact-form-btn" type="button">SUBMIT</button>
                                </div>
                            <div className="col-md-6 col-xl-12 about-description-small-sections"
                                style={{paddingTop:'57px',paddingBottom:'30px'}}>
                                <h1 data-aos="zoom-in">Our Delivery Centres</h1>
                            </div>
                            <div className="col-xl-12 sub-heading-container">
                                <h1>Us Locations</h1>
                            </div>
                            <div className="col-xl-6 delivery-centre-info-card-container" data-aos="zoom-in-up">
                                <div className="card custom-card">
                                    <div className="card-body"><img src={require("../../assets/img/about-us-bg.jpg")} />
                                        <h4 className="card-title custom">New Jersey</h4><span>10 Woodbridge Center Drive, Suite 425, Woodbridge, NJ 07095.<br /></span><span>Phone: (732) 596-0110 Ext.216<br /></span><span>Fax: (732) 596-0114<br /></span></div>
                                </div>
                                <div className="card custom-card">
                                    <div className="card-body">
                                        <h4 className="card-title custom small">Minnesota</h4><span>279 N Medina St Suite 280, Loretto, MN 55357<br /></span></div>
                                </div>
                            </div>
                            <div className="col-xl-6 delivery-centre-info-card-container" data-aos="zoom-in-up">
                                <div className="card custom-card">
                                    <div className="card-body"><img src={require("../../assets/img/about-us-bg.jpg")} />
                                        <h4 className="card-title custom">Florida</h4><span>3111 N University Drive Suite 310, Coral Springs, Florida 33065.<br /></span><span>Phone: (888) 245-5627<br /></span><span>Fax: (954) 755-7879<br /></span></div>
                                </div>
                                <div className="card custom-card">
                                    <div className="card-body">
                                        <h4 className="card-title custom small">Texas</h4><span>18601 LBJ FWYSuite 725 Mesquite, TX 75150<br /></span></div>
                                </div>
                            </div>
                            <div className="col-xl-12 sub-heading-container">
                                <h1>India Locations</h1>
                            </div>
                            <div className="col-xl-6 delivery-centre-info-card-container" data-aos="zoom-in-up">
                                <div className="card custom-card">
                                    <div className="card-body"><img src={require("../../assets/img/about-us-bg.jpg")} />
                                        <h4 className="card-title custom">Mohali</h4><span>Plot No. C-10, Phase-1 Industrial<br />Area, Mohali, Punjab – 160055<br /></span><span>Phone: +91 (0172) 493-3611-13<br /></span></div>
                                </div>
                            </div>
                            <div className="col-xl-6 delivery-centre-info-card-container" data-aos="zoom-in-up">
                                <div className="card custom-card">
                                    <div className="card-body"><img src={require("../../assets/img/about-us-bg.jpg")} />
                                        <h4 className="card-title custom"><strong>Mumbai</strong><br /></h4><span>902 Alpha Building Hiranandani Gardens, Powai Mumbai – 400 076<br /></span><span>Phone: +91 (22) 257-077-00<br /></span></div>
                                </div>
                            </div>
                            <div className="col-xl-6 delivery-centre-info-card-container" data-aos="zoom-in-up">
                                <div className="card custom-card">
                                    <div className="card-body"><img src={require("../../assets/img/about-us-bg.jpg")} />
                                        <h4 className="card-title custom"><strong>Hyderabad</strong><br /></h4><span>402, Manjera Trinity Corporate,<br />Opp to JNTU Kukatpally, Hyderabad – 500072.<br /></span><span>Phone: +91 (040) 497-077-00<br /></span></div>
                                </div>
                            </div>
                            <div className="col-xl-6 delivery-centre-info-card-container" data-aos="zoom-in-up">
                                <div className="card custom-card">
                                    <div className="card-body"><img src={require("../../assets/img/about-us-bg.jpg")} />
                                        <h4 className="card-title custom"><strong>Jaipur</strong><br /></h4><span>Plot No. IT 2016, Ramchandrapura, Sitapura, Jaipur – 302022<br /></span><span>Phone: +91 (141) 716-8805/06<br /></span></div>
                                </div>
                            </div>
                            <div className="col-md-6 col-xl-12 about-description-small-sections" style={{paddingTop:'57px',paddingBottom:'30px'}}>
                                <h1 data-aos="zoom-in">Our Global Presence</h1>
                            </div>
                            <div className="col-xl-12" style={{textAlign:'center'}}><img className="img-fluid" data-aos="zoom-in" data-aos-duration="750" data-aos-offset="20px" 
                            src={require("../../assets/img/map.png")} /></div>
                        </div>
                    </div>
                </div>
                <div style={{backgroundColor:'rgb(27,38,65)',paddingBottom:'20px'}}
                >
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 contact-small-sections">
                                <h1 data-aos="flip-down">Ready To Talk?</h1>
                                <p data-aos="zoom-in">We’re ready to listen. Let’s find a good time.</p>
                            </div>
                            <div className="col-md-6 contact-small-sections"><button className="btn btn-primary" data-aos="zoom-out" type="button">Schedule A Call</button></div>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default DetailsSection;