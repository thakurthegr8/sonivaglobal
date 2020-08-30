import React from 'react';

const Header = () => {
    return (
        <div>
             <div className="jumbotron custom-jumbotron">
        <h1 className="swing animated">About Us</h1>
         </div>
    <div style={{paddingTop:'50px',paddingBottom:'50px'}}>
        <div className="container">
            <div className="row">
                <div className="col-md-6 col-xl-8 about-description-small-sections">
                    <h1 data-aos="zoom-in">About Soniva Global</h1>
                    <p>Soniva Global is a leading-edge expert in services that helps healthcare business to leverage their core competencies while we optimize their RCM functionality. We position our brand as a comprehensive solution that offers revenue cycle
                        management, IT solutions. Powered with best in className technology and a competent team of professionals, we are proficient in meeting your dynamic needs. Functioning across hospitals, health systems, physician groups, DMEPOS Suppliers,
                        surgical &amp; ambulatory care centers and dental practices; Soniva Global has been serving industry leaders for over a decade.<br/></p>
                    <p>Operationally active across the US, Soniva Global is a leading RCM expert with comprehensive domain knowledge, process optimization, operational efficiency, and cost minimization. Our services have been value-creating for Fortune 500
                        organizations. We have been trusted partners in leading healthcare companies in the United States<br/></p>
                </div>
                <div className="col-md-6 col-xl-4 about-description-small-sections"><img data-aos="zoom-in"style={{width:'inherit'}} src={require("../../assets/img/doctor.jpg")} /></div>
                <div className="col about-description-small-sections" style={{paddingTop:'25px'}}>
                    <p>Our processes are built on the paradigm of extensive experience in building systems that focus on increasing revenue and enhancing cash flow. Healthcare is an ever-changing industry that has cross-functionality between providing medical
                        services, insurance providers and compliances. We are intensively experienced in this structure and know the best practices to optimize it. Soniva Global focusses on creating results by using innovation, service excellence and value
                        creation.<br/></p>
                    <p>We believe in collaborating with our clients and become their partner for achieving business objectives. Enabling them to focus on their core competency of providing quality medical care, we empower them with operational excellence,
                        enhanced operating margins, and better cash flow.<br/></p>
                </div>
            </div>
        </div>
    </div>
        </div>
    );
};

export default Header;